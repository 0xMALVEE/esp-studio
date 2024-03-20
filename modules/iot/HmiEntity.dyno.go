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
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type HmiComponents struct {
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
	LayoutMode       *string `json:"layoutMode" yaml:"layoutMode"       `
	// Datenano also has a text representation
	Data *workspaces.JSON `json:"data" yaml:"data"       `
	// Datenano also has a text representation
	Type *HmiComponentTypeEntity `json:"type" yaml:"type"    gorm:"foreignKey:TypeId;references:UniqueId"     `
	// Datenano also has a text representation
	TypeId *string `json:"typeId" yaml:"typeId"`
	Label  *string `json:"label" yaml:"label"       `
	// Datenano also has a text representation
	Icon *string `json:"icon" yaml:"icon"       `
	// Datenano also has a text representation
	ReadSubKey *string `json:"readSubKey" yaml:"readSubKey"       `
	// Datenano also has a text representation
	Read *DataNodeEntity `json:"read" yaml:"read"    gorm:"foreignKey:ReadId;references:UniqueId"     `
	// Datenano also has a text representation
	ReadId *string         `json:"readId" yaml:"readId"`
	Write  *DataNodeEntity `json:"write" yaml:"write"    gorm:"foreignKey:WriteId;references:UniqueId"     `
	// Datenano also has a text representation
	WriteId  *string                `json:"writeId" yaml:"writeId"`
	Position *HmiComponentsPosition `json:"position" yaml:"position"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	States []*HmiComponentsStates `json:"states" yaml:"states"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	LinkedTo *HmiEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *HmiComponents) RootObjectName() string {
	return "HmiEntity"
}

type HmiComponentsPosition struct {
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
	X                *int64  `json:"x" yaml:"x"       `
	// Datenano also has a text representation
	Y *int64 `json:"y" yaml:"y"       `
	// Datenano also has a text representation
	Width *int64 `json:"width" yaml:"width"       `
	// Datenano also has a text representation
	Height *int64 `json:"height" yaml:"height"       `
	// Datenano also has a text representation
	LinkedTo *HmiComponents `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *HmiComponentsPosition) RootObjectName() string {
	return "HmiEntity"
}

type HmiComponentsStates struct {
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
	Color            *string `json:"color" yaml:"color"       `
	// Datenano also has a text representation
	ColorFilter *string `json:"colorFilter" yaml:"colorFilter"       `
	// Datenano also has a text representation
	Tag *string `json:"tag" yaml:"tag"       `
	// Datenano also has a text representation
	Label *string `json:"label" yaml:"label"       `
	// Datenano also has a text representation
	Value *string `json:"value" yaml:"value"       `
	// Datenano also has a text representation
	LinkedTo *HmiComponents `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *HmiComponentsStates) RootObjectName() string {
	return "HmiEntity"
}

type HmiEntity struct {
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
	IsRunning        *bool   `json:"isRunning" yaml:"isRunning"       `
	// Datenano also has a text representation
	Name *string `json:"name" yaml:"name"  validate:"required"        translate:"true" `
	// Datenano also has a text representation
	Layout *workspaces.JSON `json:"layout" yaml:"layout"       `
	// Datenano also has a text representation
	Components []*HmiComponents `json:"components" yaml:"components"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Translations []*HmiEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*HmiEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *HmiEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var HmiPreloadRelations []string = []string{}
var HMI_EVENT_CREATED = "hmi.created"
var HMI_EVENT_UPDATED = "hmi.updated"
var HMI_EVENT_DELETED = "hmi.deleted"
var HMI_EVENTS = []string{
	HMI_EVENT_CREATED,
	HMI_EVENT_UPDATED,
	HMI_EVENT_DELETED,
}

type HmiFieldMap struct {
	IsRunning  workspaces.TranslatedString `yaml:"isRunning"`
	Name       workspaces.TranslatedString `yaml:"name"`
	Layout     workspaces.TranslatedString `yaml:"layout"`
	Components workspaces.TranslatedString `yaml:"components"`
}

var HmiEntityMetaConfig map[string]int64 = map[string]int64{}
var HmiEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&HmiEntity{}))

type HmiEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func HmiComponentsActionCreate(
	dto *HmiComponents,
	query workspaces.QueryDSL,
) (*HmiComponents, *workspaces.IError) {
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
func HmiComponentsActionUpdate(
	query workspaces.QueryDSL,
	dto *HmiComponents,
) (*HmiComponents, *workspaces.IError) {
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
func HmiComponentsActionGetOne(
	query workspaces.QueryDSL,
) (*HmiComponents, *workspaces.IError) {
	refl := reflect.ValueOf(&HmiComponents{})
	item, err := workspaces.GetOneEntity[HmiComponents](query, refl)
	return item, err
}
func entityHmiFormatter(dto *HmiEntity, query workspaces.QueryDSL) {
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
func HmiItemsPostFormatter(entities []*HmiEntity, query workspaces.QueryDSL) {
	for _, entity := range entities {
		HmiResponseMask(entity, query)
	}
}
func HmiMockEntity() *HmiEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &HmiEntity{
		Name: &stringHolder,
	}
	return entity
}
func HmiActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := HmiMockEntity()
		_, err := HmiActionCreate(entity, query)
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
func (x *HmiEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func HmiActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*HmiEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &HmiEntity{
		Name:       &tildaRef,
		Components: []*HmiComponents{{}},
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
func HmiAssociationCreate(dto *HmiEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func HmiRelationContentCreate(dto *HmiEntity, query workspaces.QueryDSL) error {
	return nil
}
func HmiRelationContentUpdate(dto *HmiEntity, query workspaces.QueryDSL) error {
	return nil
}
func HmiPolyglotCreateHandler(dto *HmiEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &HmiEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func HmiValidator(dto *HmiEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	if dto != nil && dto.Components != nil {
		workspaces.AppendSliceErrors(dto.Components, isPatch, "components", err)
	}
	return err
}
func HmiEntityPreSanitize(dto *HmiEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func HmiEntityBeforeCreateAppend(dto *HmiEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	HmiRecursiveAddUniqueId(dto, query)
}
func HmiRecursiveAddUniqueId(dto *HmiEntity, query workspaces.QueryDSL) {
	if dto.Components != nil && len(dto.Components) > 0 {
		for index0 := range dto.Components {
			if dto.Components[index0].UniqueId == "" {
				dto.Components[index0].UniqueId = workspaces.UUID()
			}
			if dto.Components[index0].Position != nil {
				dto.Components[index0].Position.UniqueId = workspaces.UUID()
			}
			if dto.Components[index0].States != nil && len(dto.Components[index0].States) > 0 {
				for index1 := range dto.Components[index0].States {
					if dto.Components[index0].States[index1].UniqueId == "" {
						dto.Components[index0].States[index1].UniqueId = workspaces.UUID()
					}
				}
			}
		}
	}
}
func HmiActionBatchCreateFn(dtos []*HmiEntity, query workspaces.QueryDSL) ([]*HmiEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*HmiEntity{}
		for _, item := range dtos {
			s, err := HmiActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func HmiActionCreateFn(dto *HmiEntity, query workspaces.QueryDSL) (*HmiEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := HmiValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	HmiEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	HmiEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	HmiPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	HmiRelationContentCreate(dto, query)
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
	HmiAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(HMI_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&HmiEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func HmiActionGetOne(query workspaces.QueryDSL) (*HmiEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&HmiEntity{})
	item, err := workspaces.GetOneEntity[HmiEntity](query, refl)
	HmiResponseMask(item, query)
	entityHmiFormatter(item, query)
	return item, err
}
func HmiActionQuery(query workspaces.QueryDSL) ([]*HmiEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&HmiEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[HmiEntity](query, refl)
	HmiItemsPostFormatter(items, query)
	for _, item := range items {
		entityHmiFormatter(item, query)
	}
	return items, meta, err
}
func HmiUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *HmiEntity) (*HmiEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = HMI_EVENT_UPDATED
	HmiEntityPreSanitize(fields, query)
	var item HmiEntity
	q := dbref.
		Where(&HmiEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	HmiRelationContentUpdate(fields, query)
	HmiPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	if fields.Components != nil {
		linkerId := uniqueId
		{
			items := []*HmiComponents{}
			dbref.Debug().
				Where(&HmiComponents{LinkerId: &linkerId}).
				Find(&items)
			for _, item := range items {
				dbref.Debug().
					Where(&HmiComponentsStates{LinkerId: &item.UniqueId}).
					Delete(&HmiComponentsStates{})
			}
		}
		dbref.Debug().
			Where(&HmiComponents{LinkerId: &linkerId}).
			Delete(&HmiComponents{})
		for _, newItem := range fields.Components {
			if newItem.Position != nil {
				newItem.Position.UniqueId = workspaces.UUID()
			}
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	err = dbref.
		Preload(clause.Associations).
		Where(&HmiEntity{UniqueId: uniqueId}).
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
func HmiActionUpdateFn(query workspaces.QueryDSL, fields *HmiEntity) (*HmiEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := HmiValidator(fields, true); iError != nil {
		return nil, iError
	}
	HmiRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := HmiUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return HmiUpdateExec(dbref, query, fields)
	}
}

var HmiWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire hmis ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := HmiActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func HmiActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&HmiEntity{})
	query.ActionRequires = []string{PERM_ROOT_HMI_DELETE}
	return workspaces.RemoveEntity[HmiEntity](query, refl)
}
func HmiActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[HmiComponents]()
		if subErr != nil {
			fmt.Println("Error while wiping 'HmiComponents'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[HmiEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'HmiEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func HmiActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[HmiEntity]) (
	*workspaces.BulkRecordRequest[HmiEntity], *workspaces.IError,
) {
	result := []*HmiEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := HmiActionUpdate(query, record)
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
func (x *HmiEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var HmiEntityMeta = workspaces.TableMetaData{
	EntityName:    "Hmi",
	ExportKey:     "hmis",
	TableNameInDb: "fb_hmi_entities",
	EntityObject:  &HmiEntity{},
	ExportStream:  HmiActionExportT,
	ImportQuery:   HmiActionImport,
}

func HmiActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[HmiEntity](query, HmiActionQuery, HmiPreloadRelations)
}
func HmiActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[HmiEntity](query, HmiActionQuery, HmiPreloadRelations)
}
func HmiActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content HmiEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := HmiActionCreate(&content, query)
	return err
}

var HmiCommonCliFlags = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "is-running",
		Required: false,
		Usage:    "isRunning",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: true,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "components",
		Required: false,
		Usage:    "components",
	},
}
var HmiCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "isRunning",
		StructField: "IsRunning",
		Required:    false,
		Usage:       "isRunning",
		Type:        "bool",
	},
	{
		Name:        "name",
		StructField: "Name",
		Required:    true,
		Usage:       "name",
		Type:        "string",
	},
}
var HmiCommonCliFlagsOptional = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "is-running",
		Required: false,
		Usage:    "isRunning",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: true,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "components",
		Required: false,
		Usage:    "components",
	},
}
var HmiCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   HmiCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastHmiFromCli(c)
		if entity, err := HmiActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var HmiCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &HmiEntity{}
		for _, item := range HmiCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := HmiActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var HmiUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   HmiCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastHmiFromCli(c)
		if entity, err := HmiActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastHmiFromCli(c *cli.Context) *HmiEntity {
	template := &HmiEntity{}
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
	return template
}
func HmiSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		HmiActionCreate,
		reflect.ValueOf(&HmiEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func HmiWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := HmiActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "Hmi", result)
	}
}

var HmiImportExportCommands = []cli.Command{
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
			HmiActionSeeder(query, c.Int("count"))
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
				Value: "hmi-seeder.yml",
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
			HmiActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "hmi-seeder-hmi.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of hmis, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]HmiEntity{}
			workspaces.ReadYamlFile(c.String("file"), data)
			fmt.Println(data)
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
				HmiActionCreate,
				reflect.ValueOf(&HmiEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var HmiCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(HmiActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&HmiEntity{}).Elem(), HmiActionQuery),
	HmiCreateCmd,
	HmiUpdateCmd,
	HmiCreateInteractiveCmd,
	HmiWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&HmiEntity{}).Elem(), HmiActionRemove),
}

func HmiCliFn() cli.Command {
	HmiCliCommands = append(HmiCliCommands, HmiImportExportCommands...)
	return cli.Command{
		Name:        "hmi",
		Description: "Hmis module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: HmiCliCommands,
	}
}

/**
 *	Override this function on HmiEntityHttp.go,
 *	In order to add your own http
 **/
var AppendHmiRouter = func(r *[]workspaces.Module2Action) {}

func GetHmiModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/hmis",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, HmiActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         HmiActionQuery,
			ResponseEntity: &[]HmiEntity{},
		},
		{
			Method: "GET",
			Url:    "/hmis/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, HmiActionExport)
				},
			},
			Format:         "QUERY",
			Action:         HmiActionExport,
			ResponseEntity: &[]HmiEntity{},
		},
		{
			Method: "GET",
			Url:    "/hmi/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, HmiActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         HmiActionGetOne,
			ResponseEntity: &HmiEntity{},
		},
		{
			Method: "POST",
			Url:    "/hmi",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, HmiActionCreate)
				},
			},
			Action:         HmiActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &HmiEntity{},
			ResponseEntity: &HmiEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/hmi",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, HmiActionUpdate)
				},
			},
			Action:         HmiActionUpdate,
			RequestEntity:  &HmiEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &HmiEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/hmis",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, HmiActionBulkUpdate)
				},
			},
			Action:         HmiActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[HmiEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[HmiEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/hmi",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, HmiActionRemove)
				},
			},
			Action:         HmiActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &HmiEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/hmi/:linkerId/components/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, HmiComponentsActionUpdate)
				},
			},
			Action:         HmiComponentsActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &HmiComponents{},
			ResponseEntity: &HmiComponents{},
		},
		{
			Method: "GET",
			Url:    "/hmi/components/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, HmiComponentsActionGetOne)
				},
			},
			Action:         HmiComponentsActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &HmiComponents{},
		},
		{
			Method: "POST",
			Url:    "/hmi/:linkerId/components",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMI_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, HmiComponentsActionCreate)
				},
			},
			Action:         HmiComponentsActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &HmiComponents{},
			ResponseEntity: &HmiComponents{},
		},
	}
	// Append user defined functions
	AppendHmiRouter(&routes)
	return routes
}
func CreateHmiRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetHmiModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, HmiEntityJsonSchema, "hmi-http", "iot")
	workspaces.WriteEntitySchema("HmiEntity", HmiEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_HMI_DELETE = "root/hmi/delete"
var PERM_ROOT_HMI_CREATE = "root/hmi/create"
var PERM_ROOT_HMI_UPDATE = "root/hmi/update"
var PERM_ROOT_HMI_QUERY = "root/hmi/query"
var PERM_ROOT_HMI = "root/hmi"
var ALL_HMI_PERMISSIONS = []string{
	PERM_ROOT_HMI_DELETE,
	PERM_ROOT_HMI_CREATE,
	PERM_ROOT_HMI_UPDATE,
	PERM_ROOT_HMI_QUERY,
	PERM_ROOT_HMI,
}
