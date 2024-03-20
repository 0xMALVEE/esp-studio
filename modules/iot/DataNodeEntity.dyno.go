package iot

import (
	"embed"
	"encoding/json"
	"fmt"
	"log"
	"os"
	reflect "reflect"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gookit/event"
	jsoniter "github.com/json-iterator/go"
	"github.com/microcosm-cc/bluemonday"
	"github.com/schollz/progressbar/v3"
	mocks "github.com/torabian/esp-studio/modules/iot/mocks/DataNode"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type DataNodeValues struct {
	Visibility       *string `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string  `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string `json:"userId,omitempty" yaml:"userId"`
	Rank             int64   `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64   `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64   `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string  `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string  `json:"updatedFormatted,omitempty" sql:"-"`
	Key              *string `json:"key" yaml:"key"       `
	// Datenano also has a text representation
	ValueInt64 *int64 `json:"valueInt64" yaml:"valueInt64"       `
	// Datenano also has a text representation
	ValueFloat64 *float64 `json:"valueFloat64" yaml:"valueFloat64"       `
	// Datenano also has a text representation
	ValueString *string `json:"valueString" yaml:"valueString"       `
	// Datenano also has a text representation
	ValueBoolean *bool `json:"valueBoolean" yaml:"valueBoolean"       `
	// Datenano also has a text representation
	ValueType *string `json:"valueType" yaml:"valueType"       `
	// Datenano also has a text representation
	Value interface{} `json:"value" yaml:"value"    gorm:"-"     sql:"-"  `
	// Datenano also has a text representation
	Readable *bool `json:"readable" yaml:"readable"       `
	// Datenano also has a text representation
	Writable *bool `json:"writable" yaml:"writable"       `
	// Datenano also has a text representation
	LinkedTo *DataNodeEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *DataNodeValues) RootObjectName() string {
	return "DataNodeEntity"
}

type DataNodeReaders struct {
	Visibility       *string           `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string           `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string           `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string           `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string            `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string           `json:"userId,omitempty" yaml:"userId"`
	Rank             int64             `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64             `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64             `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string            `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string            `json:"updatedFormatted,omitempty" sql:"-"`
	Reader           *NodeReaderEntity `json:"reader" yaml:"reader"    gorm:"foreignKey:ReaderId;references:UniqueId"     `
	// Datenano also has a text representation
	ReaderId *string          `json:"readerId" yaml:"readerId"`
	Config   *workspaces.JSON `json:"config" yaml:"config"       `
	// Datenano also has a text representation
	LinkedTo *DataNodeEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *DataNodeReaders) RootObjectName() string {
	return "DataNodeEntity"
}

type DataNodeWriters struct {
	Visibility       *string           `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string           `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string           `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string           `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string            `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string           `json:"userId,omitempty" yaml:"userId"`
	Rank             int64             `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64             `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64             `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string            `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string            `json:"updatedFormatted,omitempty" sql:"-"`
	Writer           *NodeWriterEntity `json:"writer" yaml:"writer"    gorm:"foreignKey:WriterId;references:UniqueId"     `
	// Datenano also has a text representation
	WriterId *string          `json:"writerId" yaml:"writerId"`
	Config   *workspaces.JSON `json:"config" yaml:"config"       `
	// Datenano also has a text representation
	LinkedTo *DataNodeEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *DataNodeWriters) RootObjectName() string {
	return "DataNodeEntity"
}

type DataNodeEntity struct {
	Visibility       *string `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string  `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string `json:"userId,omitempty" yaml:"userId"`
	Rank             int64   `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64   `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64   `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string  `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string  `json:"updatedFormatted,omitempty" sql:"-"`
	Name             *string `json:"name" yaml:"name"  validate:"required"       `
	// Datenano also has a text representation
	ExpanderFunction *ExpanderFunctionEntity `json:"expanderFunction" yaml:"expanderFunction"    gorm:"foreignKey:ExpanderFunctionId;references:UniqueId"     `
	// Datenano also has a text representation
	ExpanderFunctionId *string           `json:"expanderFunctionId" yaml:"expanderFunctionId"`
	Values             []*DataNodeValues `json:"values" yaml:"values"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Type *DataNodeTypeEntity `json:"type" yaml:"type"    gorm:"foreignKey:TypeId;references:UniqueId"     `
	// Datenano also has a text representation
	TypeId *string             `json:"typeId" yaml:"typeId"`
	Mode   *DataNodeModeEntity `json:"mode" yaml:"mode"    gorm:"foreignKey:ModeId;references:UniqueId"     `
	// Datenano also has a text representation
	ModeId  *string            `json:"modeId" yaml:"modeId"`
	Readers []*DataNodeReaders `json:"readers" yaml:"readers"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Writers []*DataNodeWriters `json:"writers" yaml:"writers"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Children []*DataNodeEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *DataNodeEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var DataNodePreloadRelations []string = []string{}
var DATANODE_EVENT_CREATED = "dataNode.created"
var DATANODE_EVENT_UPDATED = "dataNode.updated"
var DATANODE_EVENT_DELETED = "dataNode.deleted"
var DATANODE_EVENTS = []string{
	DATANODE_EVENT_CREATED,
	DATANODE_EVENT_UPDATED,
	DATANODE_EVENT_DELETED,
}

type DataNodeFieldMap struct {
	Name             workspaces.TranslatedString `yaml:"name"`
	ExpanderFunction workspaces.TranslatedString `yaml:"expanderFunction"`
	Values           workspaces.TranslatedString `yaml:"values"`
	Type             workspaces.TranslatedString `yaml:"type"`
	Mode             workspaces.TranslatedString `yaml:"mode"`
	Readers          workspaces.TranslatedString `yaml:"readers"`
	Writers          workspaces.TranslatedString `yaml:"writers"`
}

var DataNodeEntityMetaConfig map[string]int64 = map[string]int64{}
var DataNodeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&DataNodeEntity{}))

func DataNodeValuesActionCreate(
	dto *DataNodeValues,
	query workspaces.QueryDSL,
) (*DataNodeValues, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeValuesActionUpdate(
	query workspaces.QueryDSL,
	dto *DataNodeValues,
) (*DataNodeValues, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	err := dbref.UpdateColumns(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeValuesActionGetOne(
	query workspaces.QueryDSL,
) (*DataNodeValues, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeValues{})
	item, err := workspaces.GetOneEntity[DataNodeValues](query, refl)
	return item, err
}
func DataNodeReadersActionCreate(
	dto *DataNodeReaders,
	query workspaces.QueryDSL,
) (*DataNodeReaders, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeReadersActionUpdate(
	query workspaces.QueryDSL,
	dto *DataNodeReaders,
) (*DataNodeReaders, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	err := dbref.UpdateColumns(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeReadersActionGetOne(
	query workspaces.QueryDSL,
) (*DataNodeReaders, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeReaders{})
	item, err := workspaces.GetOneEntity[DataNodeReaders](query, refl)
	return item, err
}
func DataNodeWritersActionCreate(
	dto *DataNodeWriters,
	query workspaces.QueryDSL,
) (*DataNodeWriters, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeWritersActionUpdate(
	query workspaces.QueryDSL,
	dto *DataNodeWriters,
) (*DataNodeWriters, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	err := dbref.UpdateColumns(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DataNodeWritersActionGetOne(
	query workspaces.QueryDSL,
) (*DataNodeWriters, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeWriters{})
	item, err := workspaces.GetOneEntity[DataNodeWriters](query, refl)
	return item, err
}
func entityDataNodeFormatter(dto *DataNodeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	if dto.Created > 0 {
		dto.CreatedFormatted = workspaces.FormatDateBasedOnQuery(dto.Created, query)
	}
	if dto.Updated > 0 {
		dto.CreatedFormatted = workspaces.FormatDateBasedOnQuery(dto.Updated, query)
	}
}
func DataNodeMockEntity() *DataNodeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &DataNodeEntity{
		Name: &stringHolder,
	}
	return entity
}
func DataNodeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := DataNodeMockEntity()
		_, err := DataNodeActionCreate(entity, query)
		if err == nil {
			successInsert++
		} else {
			fmt.Println(err)
			failureInsert++
		}
		bar.Add(1)
	}
	fmt.Println("Success", successInsert, "Failure", failureInsert)
}
func DataNodeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*DataNodeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &DataNodeEntity{
		Name:    &tildaRef,
		Values:  []*DataNodeValues{{}},
		Readers: []*DataNodeReaders{{}},
		Writers: []*DataNodeWriters{{}},
	}
	data = append(data, entity)
	if format == "yml" || format == "yaml" {
		body, err = yaml.Marshal(data)
		if err != nil {
			log.Fatal(err)
		}
	}
	if format == "json" {
		body, err = json.MarshalIndent(data, "", "  ")
		if err != nil {
			log.Fatal(err)
		}
		file = strings.Replace(file, ".yml", ".json", -1)
	}
	os.WriteFile(file, body, 0644)
}
func DataNodeAssociationCreate(dto *DataNodeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func DataNodeRelationContentCreate(dto *DataNodeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodeRelationContentUpdate(dto *DataNodeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodePolyglotCreateHandler(dto *DataNodeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func DataNodeValidator(dto *DataNodeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	if dto != nil && dto.Values != nil {
		workspaces.AppendSliceErrors(dto.Values, isPatch, "values", err)
	}
	if dto != nil && dto.Readers != nil {
		workspaces.AppendSliceErrors(dto.Readers, isPatch, "readers", err)
	}
	if dto != nil && dto.Writers != nil {
		workspaces.AppendSliceErrors(dto.Writers, isPatch, "writers", err)
	}
	return err
}
func DataNodeEntityPreSanitize(dto *DataNodeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func DataNodeEntityBeforeCreateAppend(dto *DataNodeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	DataNodeRecursiveAddUniqueId(dto, query)
}
func DataNodeRecursiveAddUniqueId(dto *DataNodeEntity, query workspaces.QueryDSL) {
	if dto.Values != nil && len(dto.Values) > 0 {
		for index0 := range dto.Values {
			if dto.Values[index0].UniqueId == "" {
				dto.Values[index0].UniqueId = workspaces.UUID()
			}
		}
	}
	if dto.Readers != nil && len(dto.Readers) > 0 {
		for index0 := range dto.Readers {
			if dto.Readers[index0].UniqueId == "" {
				dto.Readers[index0].UniqueId = workspaces.UUID()
			}
		}
	}
	if dto.Writers != nil && len(dto.Writers) > 0 {
		for index0 := range dto.Writers {
			if dto.Writers[index0].UniqueId == "" {
				dto.Writers[index0].UniqueId = workspaces.UUID()
			}
		}
	}
}
func DataNodeActionBatchCreateFn(dtos []*DataNodeEntity, query workspaces.QueryDSL) ([]*DataNodeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*DataNodeEntity{}
		for _, item := range dtos {
			s, err := DataNodeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func DataNodeActionCreateFn(dto *DataNodeEntity, query workspaces.QueryDSL) (*DataNodeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := DataNodeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	DataNodeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	DataNodeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	DataNodePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	DataNodeRelationContentCreate(dto, query)
	// 4. Create the entity
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	// 5. Create sub entities, objects or arrays, association to other entities
	DataNodeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(DATANODE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&DataNodeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func DataNodeActionGetOne(query workspaces.QueryDSL) (*DataNodeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeEntity{})
	item, err := workspaces.GetOneEntity[DataNodeEntity](query, refl)
	entityDataNodeFormatter(item, query)
	return item, err
}
func DataNodeActionQuery(query workspaces.QueryDSL) ([]*DataNodeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&DataNodeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[DataNodeEntity](query, refl)
	for _, item := range items {
		entityDataNodeFormatter(item, query)
	}
	return items, meta, err
}
func DataNodeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *DataNodeEntity) (*DataNodeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = DATANODE_EVENT_UPDATED
	DataNodeEntityPreSanitize(fields, query)
	var item DataNodeEntity
	q := dbref.
		Where(&DataNodeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	DataNodeRelationContentUpdate(fields, query)
	DataNodePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	if fields.Values != nil {
		linkerId := uniqueId
		dbref.Debug().
			Where(&DataNodeValues{LinkerId: &linkerId}).
			Delete(&DataNodeValues{})
		for _, newItem := range fields.Values {
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	if fields.Readers != nil {
		linkerId := uniqueId
		dbref.Debug().
			Where(&DataNodeReaders{LinkerId: &linkerId}).
			Delete(&DataNodeReaders{})
		for _, newItem := range fields.Readers {
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	if fields.Writers != nil {
		linkerId := uniqueId
		dbref.Debug().
			Where(&DataNodeWriters{LinkerId: &linkerId}).
			Delete(&DataNodeWriters{})
		for _, newItem := range fields.Writers {
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	err = dbref.
		Preload(clause.Associations).
		Where(&DataNodeEntity{UniqueId: uniqueId}).
		First(&item).Error
	event.MustFire(query.TriggerEventName, event.M{
		"entity":   &item,
		"target":   "workspace",
		"unqiueId": query.WorkspaceId,
	})
	if err != nil {
		return &item, workspaces.GormErrorToIError(err)
	}
	return &item, nil
}
func DataNodeActionUpdateFn(query workspaces.QueryDSL, fields *DataNodeEntity) (*DataNodeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := DataNodeValidator(fields, true); iError != nil {
		return nil, iError
	}
	DataNodeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := DataNodeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return DataNodeUpdateExec(dbref, query, fields)
	}
}

var DataNodeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire datanodes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := DataNodeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func DataNodeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeEntity{})
	query.ActionRequires = []string{PERM_ROOT_DATANODE_DELETE}
	return workspaces.RemoveEntity[DataNodeEntity](query, refl)
}
func DataNodeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeValues]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeValues'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeReaders]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeReaders'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeWriters]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeWriters'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func DataNodeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[DataNodeEntity]) (
	*workspaces.BulkRecordRequest[DataNodeEntity], *workspaces.IError,
) {
	result := []*DataNodeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := DataNodeActionUpdate(query, record)
			if err != nil {
				return err
			} else {
				result = append(result, item)
			}
		}
		return nil
	})
	if err == nil {
		return dto, nil
	}
	return nil, err.(*workspaces.IError)
}
func (x *DataNodeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var DataNodeEntityMeta = workspaces.TableMetaData{
	EntityName:    "DataNode",
	ExportKey:     "data-nodes",
	TableNameInDb: "fb_datanode_entities",
	EntityObject:  &DataNodeEntity{},
	ExportStream:  DataNodeActionExportT,
	ImportQuery:   DataNodeActionImport,
}

func DataNodeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[DataNodeEntity](query, DataNodeActionQuery, DataNodePreloadRelations)
}
func DataNodeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[DataNodeEntity](query, DataNodeActionQuery, DataNodePreloadRelations)
}
func DataNodeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content DataNodeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := DataNodeActionCreate(&content, query)
	return err
}

var DataNodeCommonCliFlags = []cli.Flag{
	&cli.StringFlag{
		Name:     "wid",
		Required: false,
		Usage:    "Provide workspace id, if you want to change the data workspace",
	},
	&cli.StringFlag{
		Name:     "uid",
		Required: false,
		Usage:    "uniqueId (primary key)",
	},
	&cli.StringFlag{
		Name:     "pid",
		Required: false,
		Usage:    " Parent record id of the same type",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: true,
		Usage:    "name",
	},
	&cli.StringFlag{
		Name:     "expander-function-id",
		Required: false,
		Usage:    "expanderFunction",
	},
	&cli.StringSliceFlag{
		Name:     "values",
		Required: false,
		Usage:    "values",
	},
	&cli.StringFlag{
		Name:     "type-id",
		Required: false,
		Usage:    "type",
	},
	&cli.StringFlag{
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
	&cli.StringSliceFlag{
		Name:     "readers",
		Required: false,
		Usage:    "readers",
	},
	&cli.StringSliceFlag{
		Name:     "writers",
		Required: false,
		Usage:    "writers",
	},
}
var DataNodeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    true,
		Usage:       "name",
		Type:        "string",
	},
}
var DataNodeCommonCliFlagsOptional = []cli.Flag{
	&cli.StringFlag{
		Name:     "wid",
		Required: false,
		Usage:    "Provide workspace id, if you want to change the data workspace",
	},
	&cli.StringFlag{
		Name:     "uid",
		Required: false,
		Usage:    "uniqueId (primary key)",
	},
	&cli.StringFlag{
		Name:     "pid",
		Required: false,
		Usage:    " Parent record id of the same type",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: true,
		Usage:    "name",
	},
	&cli.StringFlag{
		Name:     "expander-function-id",
		Required: false,
		Usage:    "expanderFunction",
	},
	&cli.StringSliceFlag{
		Name:     "values",
		Required: false,
		Usage:    "values",
	},
	&cli.StringFlag{
		Name:     "type-id",
		Required: false,
		Usage:    "type",
	},
	&cli.StringFlag{
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
	&cli.StringSliceFlag{
		Name:     "readers",
		Required: false,
		Usage:    "readers",
	},
	&cli.StringSliceFlag{
		Name:     "writers",
		Required: false,
		Usage:    "writers",
	},
}
var DataNodeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   DataNodeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeFromCli(c)
		if entity, err := DataNodeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeCreateInteractiveCmd cli.Command = cli.Command{
	Name:  "ic",
	Usage: "Creates a new template, using requied fields in an interactive name",
	Flags: []cli.Flag{
		&cli.BoolFlag{
			Name:  "all",
			Usage: "Interactively asks for all inputs, not only required ones",
		},
	},
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := &DataNodeEntity{}
		for _, item := range DataNodeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := DataNodeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   DataNodeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeFromCli(c)
		if entity, err := DataNodeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastDataNodeFromCli(c *cli.Context) *DataNodeEntity {
	template := &DataNodeEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("name") {
		value := c.String("name")
		template.Name = &value
	}
	if c.IsSet("expander-function-id") {
		value := c.String("expander-function-id")
		template.ExpanderFunctionId = &value
	}
	if c.IsSet("type-id") {
		value := c.String("type-id")
		template.TypeId = &value
	}
	if c.IsSet("mode-id") {
		value := c.String("mode-id")
		template.ModeId = &value
	}
	return template
}
func DataNodeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DataNodeActionCreate,
		reflect.ValueOf(&DataNodeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func DataNodeImportMocks() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DataNodeActionCreate,
		reflect.ValueOf(&DataNodeEntity{}).Elem(),
		&mocks.ViewsFs,
		[]string{},
		false,
	)
}
func DataNodeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := DataNodeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "DataNode", result)
	}
}

var DataNodeImportExportCommands = []cli.Command{
	{
		Name:  "mock",
		Usage: "Generates mock records based on the entity definition",
		Flags: []cli.Flag{
			&cli.IntFlag{
				Name:  "count",
				Usage: "how many activation key do you need to be generated and stored in database",
				Value: 10,
			},
		},
		Action: func(c *cli.Context) error {
			query := workspaces.CommonCliQueryDSLBuilder(c)
			DataNodeActionSeeder(query, c.Int("count"))
			return nil
		},
	},
	{
		Name:    "init",
		Aliases: []string{"i"},
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "file",
				Usage: "The address of file you want the csv be exported to",
				Value: "data-node-seeder.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Creates a basic seeder file for you, based on the definition module we have. You can populate this file as an example",
		Action: func(c *cli.Context) error {
			f := workspaces.CommonCliQueryDSLBuilder(c)
			DataNodeActionSeederInit(f, c.String("file"), c.String("format"))
			return nil
		},
	},
	{
		Name:    "validate",
		Aliases: []string{"v"},
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "file",
				Usage: "Validates an import file, such as yaml, json, csv, and gives some insights how the after import it would look like",
				Value: "data-node-seeder-data-node.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of data-nodes, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]DataNodeEntity{}
			workspaces.ReadYamlFile(c.String("file"), data)
			fmt.Println(data)
			return nil
		},
	},
	cli.Command{
		Name:  "mocks",
		Usage: "Prints the list of mocks",
		Action: func(c *cli.Context) error {
			if entity, err := workspaces.GetSeederFilenames(&mocks.ViewsFs, ""); err != nil {
				fmt.Println(err.Error())
			} else {
				f, _ := json.MarshalIndent(entity, "", "  ")
				fmt.Println(string(f))
			}
			return nil
		},
	},
	cli.Command{
		Name:  "msync",
		Usage: "Tries to sync mocks into the system",
		Action: func(c *cli.Context) error {
			workspaces.CommonCliImportEmbedCmd(c,
				DataNodeActionCreate,
				reflect.ValueOf(&DataNodeEntity{}).Elem(),
				&mocks.ViewsFs,
			)
			return nil
		},
	},
	cli.Command{
		Name: "import",
		Flags: append(workspaces.CommonQueryFlags,
			&cli.StringFlag{
				Name:     "file",
				Usage:    "The address of file you want the csv be imported from",
				Required: true,
			}),
		Usage: "imports csv/yaml/json file and place it and its children into database",
		Action: func(c *cli.Context) error {
			workspaces.CommonCliImportCmd(c,
				DataNodeActionCreate,
				reflect.ValueOf(&DataNodeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var DataNodeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(DataNodeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&DataNodeEntity{}).Elem(), DataNodeActionQuery),
	DataNodeCreateCmd,
	DataNodeUpdateCmd,
	DataNodeCreateInteractiveCmd,
	DataNodeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&DataNodeEntity{}).Elem(), DataNodeActionRemove),
}

func DataNodeCliFn() cli.Command {
	DataNodeCliCommands = append(DataNodeCliCommands, DataNodeImportExportCommands...)
	return cli.Command{
		Name:        "dataNode",
		Description: "DataNodes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: DataNodeCliCommands,
	}
}

/**
 *	Override this function on DataNodeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendDataNodeRouter = func(r *[]workspaces.Module2Action) {}

func GetDataNodeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/data-nodes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DataNodeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeActionQuery,
			ResponseEntity: &[]DataNodeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-nodes/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, DataNodeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeActionExport,
			ResponseEntity: &[]DataNodeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-node/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, DataNodeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         DataNodeActionGetOne,
			ResponseEntity: &DataNodeEntity{},
		},
		{
			Method: "POST",
			Url:    "/data-node",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, DataNodeActionCreate)
				},
			},
			Action:         DataNodeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeEntity{},
			ResponseEntity: &DataNodeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, DataNodeActionUpdate)
				},
			},
			Action:         DataNodeActionUpdate,
			RequestEntity:  &DataNodeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &DataNodeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-nodes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, DataNodeActionBulkUpdate)
				},
			},
			Action:         DataNodeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[DataNodeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[DataNodeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/data-node",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, DataNodeActionRemove)
				},
			},
			Action:         DataNodeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &DataNodeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node/:linkerId/values/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, DataNodeValuesActionUpdate)
				},
			},
			Action:         DataNodeValuesActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &DataNodeValues{},
			ResponseEntity: &DataNodeValues{},
		},
		{
			Method: "GET",
			Url:    "/data-node/values/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, DataNodeValuesActionGetOne)
				},
			},
			Action:         DataNodeValuesActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &DataNodeValues{},
		},
		{
			Method: "POST",
			Url:    "/data-node/:linkerId/values",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, DataNodeValuesActionCreate)
				},
			},
			Action:         DataNodeValuesActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeValues{},
			ResponseEntity: &DataNodeValues{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node/:linkerId/readers/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, DataNodeReadersActionUpdate)
				},
			},
			Action:         DataNodeReadersActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &DataNodeReaders{},
			ResponseEntity: &DataNodeReaders{},
		},
		{
			Method: "GET",
			Url:    "/data-node/readers/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, DataNodeReadersActionGetOne)
				},
			},
			Action:         DataNodeReadersActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &DataNodeReaders{},
		},
		{
			Method: "POST",
			Url:    "/data-node/:linkerId/readers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, DataNodeReadersActionCreate)
				},
			},
			Action:         DataNodeReadersActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeReaders{},
			ResponseEntity: &DataNodeReaders{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node/:linkerId/writers/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, DataNodeWritersActionUpdate)
				},
			},
			Action:         DataNodeWritersActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &DataNodeWriters{},
			ResponseEntity: &DataNodeWriters{},
		},
		{
			Method: "GET",
			Url:    "/data-node/writers/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, DataNodeWritersActionGetOne)
				},
			},
			Action:         DataNodeWritersActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &DataNodeWriters{},
		},
		{
			Method: "POST",
			Url:    "/data-node/:linkerId/writers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, DataNodeWritersActionCreate)
				},
			},
			Action:         DataNodeWritersActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeWriters{},
			ResponseEntity: &DataNodeWriters{},
		},
	}
	// Append user defined functions
	AppendDataNodeRouter(&routes)
	return routes
}
func CreateDataNodeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetDataNodeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, DataNodeEntityJsonSchema, "data-node-http", "iot")
	workspaces.WriteEntitySchema("DataNodeEntity", DataNodeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_DATANODE_DELETE = "root/datanode/delete"
var PERM_ROOT_DATANODE_CREATE = "root/datanode/create"
var PERM_ROOT_DATANODE_UPDATE = "root/datanode/update"
var PERM_ROOT_DATANODE_QUERY = "root/datanode/query"
var PERM_ROOT_DATANODE = "root/datanode"
var ALL_DATANODE_PERMISSIONS = []string{
	PERM_ROOT_DATANODE_DELETE,
	PERM_ROOT_DATANODE_CREATE,
	PERM_ROOT_DATANODE_UPDATE,
	PERM_ROOT_DATANODE_QUERY,
	PERM_ROOT_DATANODE,
}
