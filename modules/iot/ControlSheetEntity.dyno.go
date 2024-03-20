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
	mocks "github.com/torabian/esp-studio/modules/iot/mocks/ControlSheet"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ControlSheetObjects struct {
	Visibility       *string  `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string  `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string  `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string  `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string   `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string  `json:"userId,omitempty" yaml:"userId"`
	Rank             int64    `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64    `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64    `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string   `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string   `json:"updatedFormatted,omitempty" sql:"-"`
	Width            *float64 `json:"width" yaml:"width"       `
	// Datenano also has a text representation
	Height *float64 `json:"height" yaml:"height"       `
	// Datenano also has a text representation
	Type *string `json:"type" yaml:"type"       `
	// Datenano also has a text representation
	Selected *bool `json:"selected" yaml:"selected"       `
	// Datenano also has a text representation
	Meta *workspaces.JSON `json:"meta" yaml:"meta"       `
	// Datenano also has a text representation
	Dragging *bool `json:"dragging" yaml:"dragging"       `
	// Datenano also has a text representation
	Id *string `json:"id" yaml:"id"       `
	// Datenano also has a text representation
	Connections []*ControlSheetObjectsConnections `json:"connections" yaml:"connections"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Position *ControlSheetObjectsPosition `json:"position" yaml:"position"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	PositionAbsolute *ControlSheetObjectsPositionAbsolute `json:"positionAbsolute" yaml:"positionAbsolute"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	LinkedTo *ControlSheetEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *ControlSheetObjects) RootObjectName() string {
	return "ControlSheetEntity"
}

type ControlSheetObjectsConnections struct {
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
	Type             *string `json:"type" yaml:"type"    gorm:"text"     `
	// Datenano also has a text representation
	TypeExcerpt *string          `json:"typeExcerpt" yaml:"typeExcerpt"`
	Data        *workspaces.JSON `json:"data" yaml:"data"       `
	// Datenano also has a text representation
	LinkedTo *ControlSheetObjects `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *ControlSheetObjectsConnections) RootObjectName() string {
	return "ControlSheetEntity"
}

type ControlSheetObjectsPosition struct {
	Visibility       *string  `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string  `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string  `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string  `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string   `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string  `json:"userId,omitempty" yaml:"userId"`
	Rank             int64    `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64    `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64    `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string   `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string   `json:"updatedFormatted,omitempty" sql:"-"`
	X                *float64 `json:"x" yaml:"x"       `
	// Datenano also has a text representation
	Y *float64 `json:"y" yaml:"y"       `
	// Datenano also has a text representation
	LinkedTo *ControlSheetObjects `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *ControlSheetObjectsPosition) RootObjectName() string {
	return "ControlSheetEntity"
}

type ControlSheetObjectsPositionAbsolute struct {
	Visibility       *string  `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string  `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string  `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string  `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string   `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string  `json:"userId,omitempty" yaml:"userId"`
	Rank             int64    `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64    `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64    `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string   `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string   `json:"updatedFormatted,omitempty" sql:"-"`
	X                *float64 `json:"x" yaml:"x"       `
	// Datenano also has a text representation
	Y *float64 `json:"y" yaml:"y"       `
	// Datenano also has a text representation
	LinkedTo *ControlSheetObjects `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *ControlSheetObjectsPositionAbsolute) RootObjectName() string {
	return "ControlSheetEntity"
}

type ControlSheetEdges struct {
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
	Source           *string `json:"source" yaml:"source"       `
	// Datenano also has a text representation
	SourceHandle *string `json:"sourceHandle" yaml:"sourceHandle"       `
	// Datenano also has a text representation
	Target *string `json:"target" yaml:"target"       `
	// Datenano also has a text representation
	TargetHandle *string `json:"targetHandle" yaml:"targetHandle"       `
	// Datenano also has a text representation
	Id *string `json:"id" yaml:"id"       `
	// Datenano also has a text representation
	LinkedTo *ControlSheetEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *ControlSheetEdges) RootObjectName() string {
	return "ControlSheetEntity"
}

type ControlSheetEntity struct {
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
	Name *string `json:"name" yaml:"name"        translate:"true" `
	// Datenano also has a text representation
	Objects []*ControlSheetObjects `json:"objects" yaml:"objects"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Edges []*ControlSheetEdges `json:"edges" yaml:"edges"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Translations []*ControlSheetEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ControlSheetEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ControlSheetEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ControlSheetPreloadRelations []string = []string{}
var CONTROLSHEET_EVENT_CREATED = "controlSheet.created"
var CONTROLSHEET_EVENT_UPDATED = "controlSheet.updated"
var CONTROLSHEET_EVENT_DELETED = "controlSheet.deleted"
var CONTROLSHEET_EVENTS = []string{
	CONTROLSHEET_EVENT_CREATED,
	CONTROLSHEET_EVENT_UPDATED,
	CONTROLSHEET_EVENT_DELETED,
}

type ControlSheetFieldMap struct {
	IsRunning workspaces.TranslatedString `yaml:"isRunning"`
	Name      workspaces.TranslatedString `yaml:"name"`
	Objects   workspaces.TranslatedString `yaml:"objects"`
	Edges     workspaces.TranslatedString `yaml:"edges"`
}

var ControlSheetEntityMetaConfig map[string]int64 = map[string]int64{}
var ControlSheetEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ControlSheetEntity{}))

type ControlSheetEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func ControlSheetObjectsActionCreate(
	dto *ControlSheetObjects,
	query workspaces.QueryDSL,
) (*ControlSheetObjects, *workspaces.IError) {
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
func ControlSheetObjectsActionUpdate(
	query workspaces.QueryDSL,
	dto *ControlSheetObjects,
) (*ControlSheetObjects, *workspaces.IError) {
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
func ControlSheetObjectsActionGetOne(
	query workspaces.QueryDSL,
) (*ControlSheetObjects, *workspaces.IError) {
	refl := reflect.ValueOf(&ControlSheetObjects{})
	item, err := workspaces.GetOneEntity[ControlSheetObjects](query, refl)
	return item, err
}
func ControlSheetEdgesActionCreate(
	dto *ControlSheetEdges,
	query workspaces.QueryDSL,
) (*ControlSheetEdges, *workspaces.IError) {
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
func ControlSheetEdgesActionUpdate(
	query workspaces.QueryDSL,
	dto *ControlSheetEdges,
) (*ControlSheetEdges, *workspaces.IError) {
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
func ControlSheetEdgesActionGetOne(
	query workspaces.QueryDSL,
) (*ControlSheetEdges, *workspaces.IError) {
	refl := reflect.ValueOf(&ControlSheetEdges{})
	item, err := workspaces.GetOneEntity[ControlSheetEdges](query, refl)
	return item, err
}
func entityControlSheetFormatter(dto *ControlSheetEntity, query workspaces.QueryDSL) {
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
func ControlSheetItemsPostFormatter(entities []*ControlSheetEntity, query workspaces.QueryDSL) {
	for _, entity := range entities {
		ControlSheetResponseMask(entity, query)
	}
}
func ControlSheetMockEntity() *ControlSheetEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ControlSheetEntity{
		Name: &stringHolder,
	}
	return entity
}
func ControlSheetActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ControlSheetMockEntity()
		_, err := ControlSheetActionCreate(entity, query)
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
func (x *ControlSheetEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ControlSheetActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ControlSheetEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ControlSheetEntity{
		Name:    &tildaRef,
		Objects: []*ControlSheetObjects{{}},
		Edges:   []*ControlSheetEdges{{}},
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
func ControlSheetAssociationCreate(dto *ControlSheetEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ControlSheetRelationContentCreate(dto *ControlSheetEntity, query workspaces.QueryDSL) error {
	return nil
}
func ControlSheetRelationContentUpdate(dto *ControlSheetEntity, query workspaces.QueryDSL) error {
	return nil
}
func ControlSheetPolyglotCreateHandler(dto *ControlSheetEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ControlSheetEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ControlSheetValidator(dto *ControlSheetEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	if dto != nil && dto.Objects != nil {
		workspaces.AppendSliceErrors(dto.Objects, isPatch, "objects", err)
	}
	if dto != nil && dto.Edges != nil {
		workspaces.AppendSliceErrors(dto.Edges, isPatch, "edges", err)
	}
	return err
}
func ControlSheetEntityPreSanitize(dto *ControlSheetEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ControlSheetEntityBeforeCreateAppend(dto *ControlSheetEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ControlSheetRecursiveAddUniqueId(dto, query)
}
func ControlSheetRecursiveAddUniqueId(dto *ControlSheetEntity, query workspaces.QueryDSL) {
	if dto.Objects != nil && len(dto.Objects) > 0 {
		for index0 := range dto.Objects {
			if dto.Objects[index0].UniqueId == "" {
				dto.Objects[index0].UniqueId = workspaces.UUID()
			}
			if dto.Objects[index0].Connections != nil && len(dto.Objects[index0].Connections) > 0 {
				for index1 := range dto.Objects[index0].Connections {
					if dto.Objects[index0].Connections[index1].UniqueId == "" {
						dto.Objects[index0].Connections[index1].UniqueId = workspaces.UUID()
					}
				}
			}
			if dto.Objects[index0].Position != nil {
				dto.Objects[index0].Position.UniqueId = workspaces.UUID()
			}
			if dto.Objects[index0].PositionAbsolute != nil {
				dto.Objects[index0].PositionAbsolute.UniqueId = workspaces.UUID()
			}
		}
	}
	if dto.Edges != nil && len(dto.Edges) > 0 {
		for index0 := range dto.Edges {
			if dto.Edges[index0].UniqueId == "" {
				dto.Edges[index0].UniqueId = workspaces.UUID()
			}
		}
	}
}
func ControlSheetActionBatchCreateFn(dtos []*ControlSheetEntity, query workspaces.QueryDSL) ([]*ControlSheetEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ControlSheetEntity{}
		for _, item := range dtos {
			s, err := ControlSheetActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ControlSheetActionCreateFn(dto *ControlSheetEntity, query workspaces.QueryDSL) (*ControlSheetEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ControlSheetValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ControlSheetEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ControlSheetEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ControlSheetPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ControlSheetRelationContentCreate(dto, query)
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
	ControlSheetAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(CONTROLSHEET_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ControlSheetEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ControlSheetActionGetOne(query workspaces.QueryDSL) (*ControlSheetEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ControlSheetEntity{})
	item, err := workspaces.GetOneEntity[ControlSheetEntity](query, refl)
	ControlSheetResponseMask(item, query)
	entityControlSheetFormatter(item, query)
	return item, err
}
func ControlSheetActionQuery(query workspaces.QueryDSL) ([]*ControlSheetEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ControlSheetEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ControlSheetEntity](query, refl)
	ControlSheetItemsPostFormatter(items, query)
	for _, item := range items {
		entityControlSheetFormatter(item, query)
	}
	return items, meta, err
}
func ControlSheetUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ControlSheetEntity) (*ControlSheetEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = CONTROLSHEET_EVENT_UPDATED
	ControlSheetEntityPreSanitize(fields, query)
	var item ControlSheetEntity
	q := dbref.
		Where(&ControlSheetEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ControlSheetRelationContentUpdate(fields, query)
	ControlSheetPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	if fields.Objects != nil {
		linkerId := uniqueId
		{
			items := []*ControlSheetObjects{}
			dbref.Debug().
				Where(&ControlSheetObjects{LinkerId: &linkerId}).
				Find(&items)
			for _, item := range items {
				dbref.Debug().
					Where(&ControlSheetObjectsConnections{LinkerId: &item.UniqueId}).
					Delete(&ControlSheetObjectsConnections{})
			}
		}
		dbref.Debug().
			Where(&ControlSheetObjects{LinkerId: &linkerId}).
			Delete(&ControlSheetObjects{})
		for _, newItem := range fields.Objects {
			if newItem.Position != nil {
				newItem.Position.UniqueId = workspaces.UUID()
			}
			if newItem.PositionAbsolute != nil {
				newItem.PositionAbsolute.UniqueId = workspaces.UUID()
			}
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	if fields.Edges != nil {
		linkerId := uniqueId
		dbref.Debug().
			Where(&ControlSheetEdges{LinkerId: &linkerId}).
			Delete(&ControlSheetEdges{})
		for _, newItem := range fields.Edges {
			newItem.UniqueId = workspaces.UUID()
			newItem.LinkerId = &linkerId
			dbref.Create(&newItem)
		}
	}
	err = dbref.
		Preload(clause.Associations).
		Where(&ControlSheetEntity{UniqueId: uniqueId}).
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
func ControlSheetActionUpdateFn(query workspaces.QueryDSL, fields *ControlSheetEntity) (*ControlSheetEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ControlSheetValidator(fields, true); iError != nil {
		return nil, iError
	}
	ControlSheetRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ControlSheetUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ControlSheetUpdateExec(dbref, query, fields)
	}
}

var ControlSheetWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire controlsheets ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ControlSheetActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ControlSheetActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ControlSheetEntity{})
	query.ActionRequires = []string{PERM_ROOT_CONTROLSHEET_DELETE}
	return workspaces.RemoveEntity[ControlSheetEntity](query, refl)
}
func ControlSheetActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ControlSheetObjects]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ControlSheetObjects'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[ControlSheetEdges]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ControlSheetEdges'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[ControlSheetEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ControlSheetEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ControlSheetActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ControlSheetEntity]) (
	*workspaces.BulkRecordRequest[ControlSheetEntity], *workspaces.IError,
) {
	result := []*ControlSheetEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ControlSheetActionUpdate(query, record)
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
func (x *ControlSheetEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ControlSheetEntityMeta = workspaces.TableMetaData{
	EntityName:    "ControlSheet",
	ExportKey:     "control-sheets",
	TableNameInDb: "fb_controlsheet_entities",
	EntityObject:  &ControlSheetEntity{},
	ExportStream:  ControlSheetActionExportT,
	ImportQuery:   ControlSheetActionImport,
}

func ControlSheetActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ControlSheetEntity](query, ControlSheetActionQuery, ControlSheetPreloadRelations)
}
func ControlSheetActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ControlSheetEntity](query, ControlSheetActionQuery, ControlSheetPreloadRelations)
}
func ControlSheetActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ControlSheetEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ControlSheetActionCreate(&content, query)
	return err
}

var ControlSheetCommonCliFlags = []cli.Flag{
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
		Required: false,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "objects",
		Required: false,
		Usage:    "objects",
	},
	&cli.StringSliceFlag{
		Name:     "edges",
		Required: false,
		Usage:    "edges",
	},
}
var ControlSheetCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
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
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var ControlSheetCommonCliFlagsOptional = []cli.Flag{
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
		Required: false,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "objects",
		Required: false,
		Usage:    "objects",
	},
	&cli.StringSliceFlag{
		Name:     "edges",
		Required: false,
		Usage:    "edges",
	},
}
var ControlSheetCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ControlSheetCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastControlSheetFromCli(c)
		if entity, err := ControlSheetActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ControlSheetCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ControlSheetEntity{}
		for _, item := range ControlSheetCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ControlSheetActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ControlSheetUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ControlSheetCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastControlSheetFromCli(c)
		if entity, err := ControlSheetActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastControlSheetFromCli(c *cli.Context) *ControlSheetEntity {
	template := &ControlSheetEntity{}
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
func ControlSheetSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ControlSheetActionCreate,
		reflect.ValueOf(&ControlSheetEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ControlSheetImportMocks() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ControlSheetActionCreate,
		reflect.ValueOf(&ControlSheetEntity{}).Elem(),
		&mocks.ViewsFs,
		[]string{},
		false,
	)
}
func ControlSheetWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ControlSheetActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ControlSheet", result)
	}
}

var ControlSheetImportExportCommands = []cli.Command{
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
			ControlSheetActionSeeder(query, c.Int("count"))
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
				Value: "control-sheet-seeder.yml",
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
			ControlSheetActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "control-sheet-seeder-control-sheet.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of control-sheets, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ControlSheetEntity{}
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
				ControlSheetActionCreate,
				reflect.ValueOf(&ControlSheetEntity{}).Elem(),
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
				ControlSheetActionCreate,
				reflect.ValueOf(&ControlSheetEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ControlSheetCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ControlSheetActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ControlSheetEntity{}).Elem(), ControlSheetActionQuery),
	ControlSheetCreateCmd,
	ControlSheetUpdateCmd,
	ControlSheetCreateInteractiveCmd,
	ControlSheetWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ControlSheetEntity{}).Elem(), ControlSheetActionRemove),
}

func ControlSheetCliFn() cli.Command {
	ControlSheetCliCommands = append(ControlSheetCliCommands, ControlSheetImportExportCommands...)
	return cli.Command{
		Name:        "controlSheet",
		Description: "ControlSheets module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ControlSheetCliCommands,
	}
}

/**
 *	Override this function on ControlSheetEntityHttp.go,
 *	In order to add your own http
 **/
var AppendControlSheetRouter = func(r *[]workspaces.Module2Action) {}

func GetControlSheetModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/control-sheets",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ControlSheetActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ControlSheetActionQuery,
			ResponseEntity: &[]ControlSheetEntity{},
		},
		{
			Method: "GET",
			Url:    "/control-sheets/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ControlSheetActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ControlSheetActionExport,
			ResponseEntity: &[]ControlSheetEntity{},
		},
		{
			Method: "GET",
			Url:    "/control-sheet/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ControlSheetActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ControlSheetActionGetOne,
			ResponseEntity: &ControlSheetEntity{},
		},
		{
			Method: "POST",
			Url:    "/control-sheet",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ControlSheetActionCreate)
				},
			},
			Action:         ControlSheetActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ControlSheetEntity{},
			ResponseEntity: &ControlSheetEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/control-sheet",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ControlSheetActionUpdate)
				},
			},
			Action:         ControlSheetActionUpdate,
			RequestEntity:  &ControlSheetEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ControlSheetEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/control-sheets",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ControlSheetActionBulkUpdate)
				},
			},
			Action:         ControlSheetActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ControlSheetEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ControlSheetEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/control-sheet",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ControlSheetActionRemove)
				},
			},
			Action:         ControlSheetActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ControlSheetEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/control-sheet/:linkerId/objects/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, ControlSheetObjectsActionUpdate)
				},
			},
			Action:         ControlSheetObjectsActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &ControlSheetObjects{},
			ResponseEntity: &ControlSheetObjects{},
		},
		{
			Method: "GET",
			Url:    "/control-sheet/objects/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, ControlSheetObjectsActionGetOne)
				},
			},
			Action:         ControlSheetObjectsActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &ControlSheetObjects{},
		},
		{
			Method: "POST",
			Url:    "/control-sheet/:linkerId/objects",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, ControlSheetObjectsActionCreate)
				},
			},
			Action:         ControlSheetObjectsActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ControlSheetObjects{},
			ResponseEntity: &ControlSheetObjects{},
		},
		{
			Method: "PATCH",
			Url:    "/control-sheet/:linkerId/edges/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, ControlSheetEdgesActionUpdate)
				},
			},
			Action:         ControlSheetEdgesActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &ControlSheetEdges{},
			ResponseEntity: &ControlSheetEdges{},
		},
		{
			Method: "GET",
			Url:    "/control-sheet/edges/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, ControlSheetEdgesActionGetOne)
				},
			},
			Action:         ControlSheetEdgesActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &ControlSheetEdges{},
		},
		{
			Method: "POST",
			Url:    "/control-sheet/:linkerId/edges",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_CONTROLSHEET_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, ControlSheetEdgesActionCreate)
				},
			},
			Action:         ControlSheetEdgesActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ControlSheetEdges{},
			ResponseEntity: &ControlSheetEdges{},
		},
	}
	// Append user defined functions
	AppendControlSheetRouter(&routes)
	return routes
}
func CreateControlSheetRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetControlSheetModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ControlSheetEntityJsonSchema, "control-sheet-http", "iot")
	workspaces.WriteEntitySchema("ControlSheetEntity", ControlSheetEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_CONTROLSHEET_DELETE = "root/controlsheet/delete"
var PERM_ROOT_CONTROLSHEET_CREATE = "root/controlsheet/create"
var PERM_ROOT_CONTROLSHEET_UPDATE = "root/controlsheet/update"
var PERM_ROOT_CONTROLSHEET_QUERY = "root/controlsheet/query"
var PERM_ROOT_CONTROLSHEET = "root/controlsheet"
var ALL_CONTROLSHEET_PERMISSIONS = []string{
	PERM_ROOT_CONTROLSHEET_DELETE,
	PERM_ROOT_CONTROLSHEET_CREATE,
	PERM_ROOT_CONTROLSHEET_UPDATE,
	PERM_ROOT_CONTROLSHEET_QUERY,
	PERM_ROOT_CONTROLSHEET,
}
