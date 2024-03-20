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

type InteractiveMapEntity struct {
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
	Translations []*InteractiveMapEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*InteractiveMapEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *InteractiveMapEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var InteractiveMapPreloadRelations []string = []string{}
var INTERACTIVEMAP_EVENT_CREATED = "interactiveMap.created"
var INTERACTIVEMAP_EVENT_UPDATED = "interactiveMap.updated"
var INTERACTIVEMAP_EVENT_DELETED = "interactiveMap.deleted"
var INTERACTIVEMAP_EVENTS = []string{
	INTERACTIVEMAP_EVENT_CREATED,
	INTERACTIVEMAP_EVENT_UPDATED,
	INTERACTIVEMAP_EVENT_DELETED,
}

type InteractiveMapFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var InteractiveMapEntityMetaConfig map[string]int64 = map[string]int64{}
var InteractiveMapEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&InteractiveMapEntity{}))

type InteractiveMapEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityInteractiveMapFormatter(dto *InteractiveMapEntity, query workspaces.QueryDSL) {
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
func InteractiveMapMockEntity() *InteractiveMapEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &InteractiveMapEntity{
		Name: &stringHolder,
	}
	return entity
}
func InteractiveMapActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := InteractiveMapMockEntity()
		_, err := InteractiveMapActionCreate(entity, query)
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
func (x *InteractiveMapEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func InteractiveMapActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*InteractiveMapEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &InteractiveMapEntity{
		Name: &tildaRef,
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
func InteractiveMapAssociationCreate(dto *InteractiveMapEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func InteractiveMapRelationContentCreate(dto *InteractiveMapEntity, query workspaces.QueryDSL) error {
	return nil
}
func InteractiveMapRelationContentUpdate(dto *InteractiveMapEntity, query workspaces.QueryDSL) error {
	return nil
}
func InteractiveMapPolyglotCreateHandler(dto *InteractiveMapEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &InteractiveMapEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func InteractiveMapValidator(dto *InteractiveMapEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func InteractiveMapEntityPreSanitize(dto *InteractiveMapEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func InteractiveMapEntityBeforeCreateAppend(dto *InteractiveMapEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	InteractiveMapRecursiveAddUniqueId(dto, query)
}
func InteractiveMapRecursiveAddUniqueId(dto *InteractiveMapEntity, query workspaces.QueryDSL) {
}
func InteractiveMapActionBatchCreateFn(dtos []*InteractiveMapEntity, query workspaces.QueryDSL) ([]*InteractiveMapEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*InteractiveMapEntity{}
		for _, item := range dtos {
			s, err := InteractiveMapActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func InteractiveMapActionCreateFn(dto *InteractiveMapEntity, query workspaces.QueryDSL) (*InteractiveMapEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := InteractiveMapValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	InteractiveMapEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	InteractiveMapEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	InteractiveMapPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	InteractiveMapRelationContentCreate(dto, query)
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
	InteractiveMapAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(INTERACTIVEMAP_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&InteractiveMapEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func InteractiveMapActionGetOne(query workspaces.QueryDSL) (*InteractiveMapEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&InteractiveMapEntity{})
	item, err := workspaces.GetOneEntity[InteractiveMapEntity](query, refl)
	entityInteractiveMapFormatter(item, query)
	return item, err
}
func InteractiveMapActionQuery(query workspaces.QueryDSL) ([]*InteractiveMapEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&InteractiveMapEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[InteractiveMapEntity](query, refl)
	for _, item := range items {
		entityInteractiveMapFormatter(item, query)
	}
	return items, meta, err
}
func InteractiveMapUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *InteractiveMapEntity) (*InteractiveMapEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = INTERACTIVEMAP_EVENT_UPDATED
	InteractiveMapEntityPreSanitize(fields, query)
	var item InteractiveMapEntity
	q := dbref.
		Where(&InteractiveMapEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	InteractiveMapRelationContentUpdate(fields, query)
	InteractiveMapPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&InteractiveMapEntity{UniqueId: uniqueId}).
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
func InteractiveMapActionUpdateFn(query workspaces.QueryDSL, fields *InteractiveMapEntity) (*InteractiveMapEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := InteractiveMapValidator(fields, true); iError != nil {
		return nil, iError
	}
	InteractiveMapRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := InteractiveMapUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return InteractiveMapUpdateExec(dbref, query, fields)
	}
}

var InteractiveMapWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire interactivemaps ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := InteractiveMapActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func InteractiveMapActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&InteractiveMapEntity{})
	query.ActionRequires = []string{PERM_ROOT_INTERACTIVEMAP_DELETE}
	return workspaces.RemoveEntity[InteractiveMapEntity](query, refl)
}
func InteractiveMapActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[InteractiveMapEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'InteractiveMapEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func InteractiveMapActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[InteractiveMapEntity]) (
	*workspaces.BulkRecordRequest[InteractiveMapEntity], *workspaces.IError,
) {
	result := []*InteractiveMapEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := InteractiveMapActionUpdate(query, record)
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
func (x *InteractiveMapEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var InteractiveMapEntityMeta = workspaces.TableMetaData{
	EntityName:    "InteractiveMap",
	ExportKey:     "interactive-maps",
	TableNameInDb: "fb_interactivemap_entities",
	EntityObject:  &InteractiveMapEntity{},
	ExportStream:  InteractiveMapActionExportT,
	ImportQuery:   InteractiveMapActionImport,
}

func InteractiveMapActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[InteractiveMapEntity](query, InteractiveMapActionQuery, InteractiveMapPreloadRelations)
}
func InteractiveMapActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[InteractiveMapEntity](query, InteractiveMapActionQuery, InteractiveMapPreloadRelations)
}
func InteractiveMapActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content InteractiveMapEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := InteractiveMapActionCreate(&content, query)
	return err
}

var InteractiveMapCommonCliFlags = []cli.Flag{
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
}
var InteractiveMapCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var InteractiveMapCommonCliFlagsOptional = []cli.Flag{
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
}
var InteractiveMapCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   InteractiveMapCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastInteractiveMapFromCli(c)
		if entity, err := InteractiveMapActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var InteractiveMapCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &InteractiveMapEntity{}
		for _, item := range InteractiveMapCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := InteractiveMapActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var InteractiveMapUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   InteractiveMapCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastInteractiveMapFromCli(c)
		if entity, err := InteractiveMapActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastInteractiveMapFromCli(c *cli.Context) *InteractiveMapEntity {
	template := &InteractiveMapEntity{}
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
func InteractiveMapSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		InteractiveMapActionCreate,
		reflect.ValueOf(&InteractiveMapEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func InteractiveMapWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := InteractiveMapActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "InteractiveMap", result)
	}
}

var InteractiveMapImportExportCommands = []cli.Command{
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
			InteractiveMapActionSeeder(query, c.Int("count"))
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
				Value: "interactive-map-seeder.yml",
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
			InteractiveMapActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "interactive-map-seeder-interactive-map.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of interactive-maps, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]InteractiveMapEntity{}
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
				InteractiveMapActionCreate,
				reflect.ValueOf(&InteractiveMapEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var InteractiveMapCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(InteractiveMapActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&InteractiveMapEntity{}).Elem(), InteractiveMapActionQuery),
	InteractiveMapCreateCmd,
	InteractiveMapUpdateCmd,
	InteractiveMapCreateInteractiveCmd,
	InteractiveMapWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&InteractiveMapEntity{}).Elem(), InteractiveMapActionRemove),
}

func InteractiveMapCliFn() cli.Command {
	InteractiveMapCliCommands = append(InteractiveMapCliCommands, InteractiveMapImportExportCommands...)
	return cli.Command{
		Name:        "interactiveMap",
		Description: "InteractiveMaps module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: InteractiveMapCliCommands,
	}
}

/**
 *	Override this function on InteractiveMapEntityHttp.go,
 *	In order to add your own http
 **/
var AppendInteractiveMapRouter = func(r *[]workspaces.Module2Action) {}

func GetInteractiveMapModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/interactive-maps",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, InteractiveMapActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         InteractiveMapActionQuery,
			ResponseEntity: &[]InteractiveMapEntity{},
		},
		{
			Method: "GET",
			Url:    "/interactive-maps/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, InteractiveMapActionExport)
				},
			},
			Format:         "QUERY",
			Action:         InteractiveMapActionExport,
			ResponseEntity: &[]InteractiveMapEntity{},
		},
		{
			Method: "GET",
			Url:    "/interactive-map/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, InteractiveMapActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         InteractiveMapActionGetOne,
			ResponseEntity: &InteractiveMapEntity{},
		},
		{
			Method: "POST",
			Url:    "/interactive-map",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, InteractiveMapActionCreate)
				},
			},
			Action:         InteractiveMapActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &InteractiveMapEntity{},
			ResponseEntity: &InteractiveMapEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/interactive-map",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, InteractiveMapActionUpdate)
				},
			},
			Action:         InteractiveMapActionUpdate,
			RequestEntity:  &InteractiveMapEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &InteractiveMapEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/interactive-maps",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, InteractiveMapActionBulkUpdate)
				},
			},
			Action:         InteractiveMapActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[InteractiveMapEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[InteractiveMapEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/interactive-map",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_INTERACTIVEMAP_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, InteractiveMapActionRemove)
				},
			},
			Action:         InteractiveMapActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &InteractiveMapEntity{},
		},
	}
	// Append user defined functions
	AppendInteractiveMapRouter(&routes)
	return routes
}
func CreateInteractiveMapRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetInteractiveMapModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, InteractiveMapEntityJsonSchema, "interactive-map-http", "iot")
	workspaces.WriteEntitySchema("InteractiveMapEntity", InteractiveMapEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_INTERACTIVEMAP_DELETE = "root/interactivemap/delete"
var PERM_ROOT_INTERACTIVEMAP_CREATE = "root/interactivemap/create"
var PERM_ROOT_INTERACTIVEMAP_UPDATE = "root/interactivemap/update"
var PERM_ROOT_INTERACTIVEMAP_QUERY = "root/interactivemap/query"
var PERM_ROOT_INTERACTIVEMAP = "root/interactivemap"
var ALL_INTERACTIVEMAP_PERMISSIONS = []string{
	PERM_ROOT_INTERACTIVEMAP_DELETE,
	PERM_ROOT_INTERACTIVEMAP_CREATE,
	PERM_ROOT_INTERACTIVEMAP_UPDATE,
	PERM_ROOT_INTERACTIVEMAP_QUERY,
	PERM_ROOT_INTERACTIVEMAP,
}
