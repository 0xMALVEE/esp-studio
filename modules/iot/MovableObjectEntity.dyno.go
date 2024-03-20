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

type MovableObjectEntity struct {
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
	Name             *string `json:"name" yaml:"name"        translate:"true" `
	// Datenano also has a text representation
	InteractiveMaps []*InteractiveMapEntity `json:"interactiveMaps" yaml:"interactiveMaps"    gorm:"many2many:movableObject_interactiveMaps;foreignKey:UniqueId;references:UniqueId"     `
	// Datenano also has a text representation
	InteractiveMapsListId []string                       `json:"interactiveMapsListId" yaml:"interactiveMapsListId" gorm:"-" sql:"-"`
	Translations          []*MovableObjectEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children              []*MovableObjectEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo              *MovableObjectEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var MovableObjectPreloadRelations []string = []string{}
var MOVABLEOBJECT_EVENT_CREATED = "movableObject.created"
var MOVABLEOBJECT_EVENT_UPDATED = "movableObject.updated"
var MOVABLEOBJECT_EVENT_DELETED = "movableObject.deleted"
var MOVABLEOBJECT_EVENTS = []string{
	MOVABLEOBJECT_EVENT_CREATED,
	MOVABLEOBJECT_EVENT_UPDATED,
	MOVABLEOBJECT_EVENT_DELETED,
}

type MovableObjectFieldMap struct {
	Name            workspaces.TranslatedString `yaml:"name"`
	InteractiveMaps workspaces.TranslatedString `yaml:"interactiveMaps"`
}

var MovableObjectEntityMetaConfig map[string]int64 = map[string]int64{}
var MovableObjectEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MovableObjectEntity{}))

type MovableObjectEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityMovableObjectFormatter(dto *MovableObjectEntity, query workspaces.QueryDSL) {
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
func MovableObjectMockEntity() *MovableObjectEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &MovableObjectEntity{
		Name: &stringHolder,
	}
	return entity
}
func MovableObjectActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := MovableObjectMockEntity()
		_, err := MovableObjectActionCreate(entity, query)
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
func (x *MovableObjectEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func MovableObjectActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*MovableObjectEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &MovableObjectEntity{
		Name:                  &tildaRef,
		InteractiveMapsListId: []string{"~"},
		InteractiveMaps:       []*InteractiveMapEntity{{}},
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
func MovableObjectAssociationCreate(dto *MovableObjectEntity, query workspaces.QueryDSL) error {
	{
		if dto.InteractiveMapsListId != nil && len(dto.InteractiveMapsListId) > 0 {
			var items []InteractiveMapEntity
			err := query.Tx.Where(dto.InteractiveMapsListId).Find(&items).Error
			if err != nil {
				return err
			}
			err = query.Tx.Model(dto).Association("InteractiveMaps").Replace(items)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func MovableObjectRelationContentCreate(dto *MovableObjectEntity, query workspaces.QueryDSL) error {
	return nil
}
func MovableObjectRelationContentUpdate(dto *MovableObjectEntity, query workspaces.QueryDSL) error {
	return nil
}
func MovableObjectPolyglotCreateHandler(dto *MovableObjectEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &MovableObjectEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func MovableObjectValidator(dto *MovableObjectEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func MovableObjectEntityPreSanitize(dto *MovableObjectEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func MovableObjectEntityBeforeCreateAppend(dto *MovableObjectEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	MovableObjectRecursiveAddUniqueId(dto, query)
}
func MovableObjectRecursiveAddUniqueId(dto *MovableObjectEntity, query workspaces.QueryDSL) {
}
func MovableObjectActionBatchCreateFn(dtos []*MovableObjectEntity, query workspaces.QueryDSL) ([]*MovableObjectEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*MovableObjectEntity{}
		for _, item := range dtos {
			s, err := MovableObjectActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func MovableObjectActionCreateFn(dto *MovableObjectEntity, query workspaces.QueryDSL) (*MovableObjectEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := MovableObjectValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	MovableObjectEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	MovableObjectEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	MovableObjectPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	MovableObjectRelationContentCreate(dto, query)
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
	MovableObjectAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MOVABLEOBJECT_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&MovableObjectEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func MovableObjectActionGetOne(query workspaces.QueryDSL) (*MovableObjectEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&MovableObjectEntity{})
	item, err := workspaces.GetOneEntity[MovableObjectEntity](query, refl)
	entityMovableObjectFormatter(item, query)
	return item, err
}
func MovableObjectActionQuery(query workspaces.QueryDSL) ([]*MovableObjectEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&MovableObjectEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[MovableObjectEntity](query, refl)
	for _, item := range items {
		entityMovableObjectFormatter(item, query)
	}
	return items, meta, err
}
func MovableObjectUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *MovableObjectEntity) (*MovableObjectEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MOVABLEOBJECT_EVENT_UPDATED
	MovableObjectEntityPreSanitize(fields, query)
	var item MovableObjectEntity
	q := dbref.
		Where(&MovableObjectEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	MovableObjectRelationContentUpdate(fields, query)
	MovableObjectPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	if fields.InteractiveMapsListId != nil {
		var items []InteractiveMapEntity
		if len(fields.InteractiveMapsListId) > 0 {
			dbref.
				Where(&fields.InteractiveMapsListId).
				Find(&items)
		}
		dbref.
			Model(&MovableObjectEntity{UniqueId: uniqueId}).
			Association("InteractiveMaps").
			Replace(&items)
	}
	err = dbref.
		Preload(clause.Associations).
		Where(&MovableObjectEntity{UniqueId: uniqueId}).
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
func MovableObjectActionUpdateFn(query workspaces.QueryDSL, fields *MovableObjectEntity) (*MovableObjectEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := MovableObjectValidator(fields, true); iError != nil {
		return nil, iError
	}
	MovableObjectRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := MovableObjectUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return MovableObjectUpdateExec(dbref, query, fields)
	}
}

var MovableObjectWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire movableobjects ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := MovableObjectActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func MovableObjectActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&MovableObjectEntity{})
	query.ActionRequires = []string{PERM_ROOT_MOVABLEOBJECT_DELETE}
	return workspaces.RemoveEntity[MovableObjectEntity](query, refl)
}
func MovableObjectActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[MovableObjectEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'MovableObjectEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func MovableObjectActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[MovableObjectEntity]) (
	*workspaces.BulkRecordRequest[MovableObjectEntity], *workspaces.IError,
) {
	result := []*MovableObjectEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := MovableObjectActionUpdate(query, record)
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
func (x *MovableObjectEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var MovableObjectEntityMeta = workspaces.TableMetaData{
	EntityName:    "MovableObject",
	ExportKey:     "movable-objects",
	TableNameInDb: "fb_movableobject_entities",
	EntityObject:  &MovableObjectEntity{},
	ExportStream:  MovableObjectActionExportT,
	ImportQuery:   MovableObjectActionImport,
}

func MovableObjectActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[MovableObjectEntity](query, MovableObjectActionQuery, MovableObjectPreloadRelations)
}
func MovableObjectActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[MovableObjectEntity](query, MovableObjectActionQuery, MovableObjectPreloadRelations)
}
func MovableObjectActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content MovableObjectEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := MovableObjectActionCreate(&content, query)
	return err
}

var MovableObjectCommonCliFlags = []cli.Flag{
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
		Required: false,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "interactive-maps",
		Required: false,
		Usage:    "interactiveMaps",
	},
}
var MovableObjectCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var MovableObjectCommonCliFlagsOptional = []cli.Flag{
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
		Required: false,
		Usage:    "name",
	},
	&cli.StringSliceFlag{
		Name:     "interactive-maps",
		Required: false,
		Usage:    "interactiveMaps",
	},
}
var MovableObjectCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   MovableObjectCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMovableObjectFromCli(c)
		if entity, err := MovableObjectActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MovableObjectCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &MovableObjectEntity{}
		for _, item := range MovableObjectCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := MovableObjectActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MovableObjectUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   MovableObjectCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMovableObjectFromCli(c)
		if entity, err := MovableObjectActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastMovableObjectFromCli(c *cli.Context) *MovableObjectEntity {
	template := &MovableObjectEntity{}
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
func MovableObjectSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		MovableObjectActionCreate,
		reflect.ValueOf(&MovableObjectEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func MovableObjectWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := MovableObjectActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "MovableObject", result)
	}
}

var MovableObjectImportExportCommands = []cli.Command{
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
			MovableObjectActionSeeder(query, c.Int("count"))
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
				Value: "movable-object-seeder.yml",
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
			MovableObjectActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "movable-object-seeder-movable-object.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of movable-objects, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]MovableObjectEntity{}
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
				MovableObjectActionCreate,
				reflect.ValueOf(&MovableObjectEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var MovableObjectCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(MovableObjectActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&MovableObjectEntity{}).Elem(), MovableObjectActionQuery),
	MovableObjectCreateCmd,
	MovableObjectUpdateCmd,
	MovableObjectCreateInteractiveCmd,
	MovableObjectWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&MovableObjectEntity{}).Elem(), MovableObjectActionRemove),
}

func MovableObjectCliFn() cli.Command {
	MovableObjectCliCommands = append(MovableObjectCliCommands, MovableObjectImportExportCommands...)
	return cli.Command{
		Name:        "movableObject",
		Description: "MovableObjects module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: MovableObjectCliCommands,
	}
}

/**
 *	Override this function on MovableObjectEntityHttp.go,
 *	In order to add your own http
 **/
var AppendMovableObjectRouter = func(r *[]workspaces.Module2Action) {}

func GetMovableObjectModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/movable-objects",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, MovableObjectActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         MovableObjectActionQuery,
			ResponseEntity: &[]MovableObjectEntity{},
		},
		{
			Method: "GET",
			Url:    "/movable-objects/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, MovableObjectActionExport)
				},
			},
			Format:         "QUERY",
			Action:         MovableObjectActionExport,
			ResponseEntity: &[]MovableObjectEntity{},
		},
		{
			Method: "GET",
			Url:    "/movable-object/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, MovableObjectActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         MovableObjectActionGetOne,
			ResponseEntity: &MovableObjectEntity{},
		},
		{
			Method: "POST",
			Url:    "/movable-object",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, MovableObjectActionCreate)
				},
			},
			Action:         MovableObjectActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &MovableObjectEntity{},
			ResponseEntity: &MovableObjectEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/movable-object",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, MovableObjectActionUpdate)
				},
			},
			Action:         MovableObjectActionUpdate,
			RequestEntity:  &MovableObjectEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &MovableObjectEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/movable-objects",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, MovableObjectActionBulkUpdate)
				},
			},
			Action:         MovableObjectActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[MovableObjectEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[MovableObjectEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/movable-object",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MOVABLEOBJECT_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, MovableObjectActionRemove)
				},
			},
			Action:         MovableObjectActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &MovableObjectEntity{},
		},
	}
	// Append user defined functions
	AppendMovableObjectRouter(&routes)
	return routes
}
func CreateMovableObjectRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetMovableObjectModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MovableObjectEntityJsonSchema, "movable-object-http", "iot")
	workspaces.WriteEntitySchema("MovableObjectEntity", MovableObjectEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MOVABLEOBJECT_DELETE = "root/movableobject/delete"
var PERM_ROOT_MOVABLEOBJECT_CREATE = "root/movableobject/create"
var PERM_ROOT_MOVABLEOBJECT_UPDATE = "root/movableobject/update"
var PERM_ROOT_MOVABLEOBJECT_QUERY = "root/movableobject/query"
var PERM_ROOT_MOVABLEOBJECT = "root/movableobject"
var ALL_MOVABLEOBJECT_PERMISSIONS = []string{
	PERM_ROOT_MOVABLEOBJECT_DELETE,
	PERM_ROOT_MOVABLEOBJECT_CREATE,
	PERM_ROOT_MOVABLEOBJECT_UPDATE,
	PERM_ROOT_MOVABLEOBJECT_QUERY,
	PERM_ROOT_MOVABLEOBJECT,
}
