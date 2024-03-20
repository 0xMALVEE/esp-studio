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
	metas "github.com/torabian/esp-studio/modules/iot/metas"
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/DataNodeType"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type DataNodeTypeEntity struct {
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
	Name             *string `json:"name" yaml:"name"       `
	// Datenano also has a text representation
	Children []*DataNodeTypeEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *DataNodeTypeEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var DataNodeTypePreloadRelations []string = []string{}
var DATANODETYPE_EVENT_CREATED = "dataNodeType.created"
var DATANODETYPE_EVENT_UPDATED = "dataNodeType.updated"
var DATANODETYPE_EVENT_DELETED = "dataNodeType.deleted"
var DATANODETYPE_EVENTS = []string{
	DATANODETYPE_EVENT_CREATED,
	DATANODETYPE_EVENT_UPDATED,
	DATANODETYPE_EVENT_DELETED,
}

type DataNodeTypeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var DataNodeTypeEntityMetaConfig map[string]int64 = map[string]int64{}
var DataNodeTypeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&DataNodeTypeEntity{}))

func entityDataNodeTypeFormatter(dto *DataNodeTypeEntity, query workspaces.QueryDSL) {
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
func DataNodeTypeMockEntity() *DataNodeTypeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &DataNodeTypeEntity{
		Name: &stringHolder,
	}
	return entity
}
func DataNodeTypeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := DataNodeTypeMockEntity()
		_, err := DataNodeTypeActionCreate(entity, query)
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
func DataNodeTypeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*DataNodeTypeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &DataNodeTypeEntity{
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
func DataNodeTypeAssociationCreate(dto *DataNodeTypeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func DataNodeTypeRelationContentCreate(dto *DataNodeTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodeTypeRelationContentUpdate(dto *DataNodeTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodeTypePolyglotCreateHandler(dto *DataNodeTypeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func DataNodeTypeValidator(dto *DataNodeTypeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func DataNodeTypeEntityPreSanitize(dto *DataNodeTypeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func DataNodeTypeEntityBeforeCreateAppend(dto *DataNodeTypeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	DataNodeTypeRecursiveAddUniqueId(dto, query)
}
func DataNodeTypeRecursiveAddUniqueId(dto *DataNodeTypeEntity, query workspaces.QueryDSL) {
}
func DataNodeTypeActionBatchCreateFn(dtos []*DataNodeTypeEntity, query workspaces.QueryDSL) ([]*DataNodeTypeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*DataNodeTypeEntity{}
		for _, item := range dtos {
			s, err := DataNodeTypeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func DataNodeTypeActionCreateFn(dto *DataNodeTypeEntity, query workspaces.QueryDSL) (*DataNodeTypeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := DataNodeTypeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	DataNodeTypeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	DataNodeTypeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	DataNodeTypePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	DataNodeTypeRelationContentCreate(dto, query)
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
	DataNodeTypeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(DATANODETYPE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&DataNodeTypeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func DataNodeTypeActionGetOne(query workspaces.QueryDSL) (*DataNodeTypeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeTypeEntity{})
	item, err := workspaces.GetOneEntity[DataNodeTypeEntity](query, refl)
	entityDataNodeTypeFormatter(item, query)
	return item, err
}
func DataNodeTypeActionQuery(query workspaces.QueryDSL) ([]*DataNodeTypeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&DataNodeTypeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[DataNodeTypeEntity](query, refl)
	for _, item := range items {
		entityDataNodeTypeFormatter(item, query)
	}
	return items, meta, err
}
func DataNodeTypeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *DataNodeTypeEntity) (*DataNodeTypeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = DATANODETYPE_EVENT_UPDATED
	DataNodeTypeEntityPreSanitize(fields, query)
	var item DataNodeTypeEntity
	q := dbref.
		Where(&DataNodeTypeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	DataNodeTypeRelationContentUpdate(fields, query)
	DataNodeTypePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&DataNodeTypeEntity{UniqueId: uniqueId}).
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
func DataNodeTypeActionUpdateFn(query workspaces.QueryDSL, fields *DataNodeTypeEntity) (*DataNodeTypeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := DataNodeTypeValidator(fields, true); iError != nil {
		return nil, iError
	}
	DataNodeTypeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := DataNodeTypeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return DataNodeTypeUpdateExec(dbref, query, fields)
	}
}

var DataNodeTypeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire datanodetypes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := DataNodeTypeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func DataNodeTypeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeTypeEntity{})
	query.ActionRequires = []string{PERM_ROOT_DATANODETYPE_DELETE}
	return workspaces.RemoveEntity[DataNodeTypeEntity](query, refl)
}
func DataNodeTypeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeTypeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeTypeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func DataNodeTypeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[DataNodeTypeEntity]) (
	*workspaces.BulkRecordRequest[DataNodeTypeEntity], *workspaces.IError,
) {
	result := []*DataNodeTypeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := DataNodeTypeActionUpdate(query, record)
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
func (x *DataNodeTypeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var DataNodeTypeEntityMeta = workspaces.TableMetaData{
	EntityName:    "DataNodeType",
	ExportKey:     "data-node-types",
	TableNameInDb: "fb_datanodetype_entities",
	EntityObject:  &DataNodeTypeEntity{},
	ExportStream:  DataNodeTypeActionExportT,
	ImportQuery:   DataNodeTypeActionImport,
}

func DataNodeTypeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[DataNodeTypeEntity](query, DataNodeTypeActionQuery, DataNodeTypePreloadRelations)
}
func DataNodeTypeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[DataNodeTypeEntity](query, DataNodeTypeActionQuery, DataNodeTypePreloadRelations)
}
func DataNodeTypeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content DataNodeTypeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := DataNodeTypeActionCreate(&content, query)
	return err
}

var DataNodeTypeCommonCliFlags = []cli.Flag{
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
var DataNodeTypeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var DataNodeTypeCommonCliFlagsOptional = []cli.Flag{
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
var DataNodeTypeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   DataNodeTypeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeTypeFromCli(c)
		if entity, err := DataNodeTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeTypeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &DataNodeTypeEntity{}
		for _, item := range DataNodeTypeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := DataNodeTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeTypeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   DataNodeTypeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeTypeFromCli(c)
		if entity, err := DataNodeTypeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastDataNodeTypeFromCli(c *cli.Context) *DataNodeTypeEntity {
	template := &DataNodeTypeEntity{}
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
func DataNodeTypeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DataNodeTypeActionCreate,
		reflect.ValueOf(&DataNodeTypeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func DataNodeTypeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		DataNodeTypeActionCreate,
		reflect.ValueOf(&DataNodeTypeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func DataNodeTypeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := DataNodeTypeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "DataNodeType", result)
	}
}

var DataNodeTypeImportExportCommands = []cli.Command{
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
			DataNodeTypeActionSeeder(query, c.Int("count"))
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
				Value: "data-node-type-seeder.yml",
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
			DataNodeTypeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "data-node-type-seeder-data-node-type.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of data-node-types, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]DataNodeTypeEntity{}
			workspaces.ReadYamlFile(c.String("file"), data)
			fmt.Println(data)
			return nil
		},
	},
	cli.Command{
		Name:  "list",
		Usage: "Prints the list of files attached to this module for syncing or bootstrapping project",
		Action: func(c *cli.Context) error {
			if entity, err := workspaces.GetSeederFilenames(&seeders.ViewsFs, ""); err != nil {
				fmt.Println(err.Error())
			} else {
				f, _ := json.MarshalIndent(entity, "", "  ")
				fmt.Println(string(f))
			}
			return nil
		},
	},
	cli.Command{
		Name:  "sync",
		Usage: "Tries to sync the embedded content into the database, the list could be seen by 'list' command",
		Action: func(c *cli.Context) error {
			workspaces.CommonCliImportEmbedCmd(c,
				DataNodeTypeActionCreate,
				reflect.ValueOf(&DataNodeTypeEntity{}).Elem(),
				&seeders.ViewsFs,
			)
			return nil
		},
	},
	cli.Command{
		Name:    "export",
		Aliases: []string{"e"},
		Flags: append(workspaces.CommonQueryFlags,
			&cli.StringFlag{
				Name:     "file",
				Usage:    "The address of file you want the csv/yaml/json be exported to",
				Required: true,
			}),
		Usage: "Exports a query results into the csv/yaml/json format",
		Action: func(c *cli.Context) error {
			workspaces.CommonCliExportCmd(c,
				DataNodeTypeActionQuery,
				reflect.ValueOf(&DataNodeTypeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"DataNodeTypeFieldMap.yml",
				DataNodeTypePreloadRelations,
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
				DataNodeTypeActionCreate,
				reflect.ValueOf(&DataNodeTypeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var DataNodeTypeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(DataNodeTypeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&DataNodeTypeEntity{}).Elem(), DataNodeTypeActionQuery),
	DataNodeTypeCreateCmd,
	DataNodeTypeUpdateCmd,
	DataNodeTypeCreateInteractiveCmd,
	DataNodeTypeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&DataNodeTypeEntity{}).Elem(), DataNodeTypeActionRemove),
}

func DataNodeTypeCliFn() cli.Command {
	DataNodeTypeCliCommands = append(DataNodeTypeCliCommands, DataNodeTypeImportExportCommands...)
	return cli.Command{
		Name:        "dataNodeType",
		Description: "DataNodeTypes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: DataNodeTypeCliCommands,
	}
}

/**
 *	Override this function on DataNodeTypeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendDataNodeTypeRouter = func(r *[]workspaces.Module2Action) {}

func GetDataNodeTypeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/data-node-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DataNodeTypeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeTypeActionQuery,
			ResponseEntity: &[]DataNodeTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-node-types/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, DataNodeTypeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeTypeActionExport,
			ResponseEntity: &[]DataNodeTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-node-type/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, DataNodeTypeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         DataNodeTypeActionGetOne,
			ResponseEntity: &DataNodeTypeEntity{},
		},
		{
			Method: "POST",
			Url:    "/data-node-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, DataNodeTypeActionCreate)
				},
			},
			Action:         DataNodeTypeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeTypeEntity{},
			ResponseEntity: &DataNodeTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, DataNodeTypeActionUpdate)
				},
			},
			Action:         DataNodeTypeActionUpdate,
			RequestEntity:  &DataNodeTypeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &DataNodeTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, DataNodeTypeActionBulkUpdate)
				},
			},
			Action:         DataNodeTypeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[DataNodeTypeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[DataNodeTypeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/data-node-type",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODETYPE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, DataNodeTypeActionRemove)
				},
			},
			Action:         DataNodeTypeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &DataNodeTypeEntity{},
		},
	}
	// Append user defined functions
	AppendDataNodeTypeRouter(&routes)
	return routes
}
func CreateDataNodeTypeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetDataNodeTypeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, DataNodeTypeEntityJsonSchema, "data-node-type-http", "iot")
	workspaces.WriteEntitySchema("DataNodeTypeEntity", DataNodeTypeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_DATANODETYPE_DELETE = "root/datanodetype/delete"
var PERM_ROOT_DATANODETYPE_CREATE = "root/datanodetype/create"
var PERM_ROOT_DATANODETYPE_UPDATE = "root/datanodetype/update"
var PERM_ROOT_DATANODETYPE_QUERY = "root/datanodetype/query"
var PERM_ROOT_DATANODETYPE = "root/datanodetype"
var ALL_DATANODETYPE_PERMISSIONS = []string{
	PERM_ROOT_DATANODETYPE_DELETE,
	PERM_ROOT_DATANODETYPE_CREATE,
	PERM_ROOT_DATANODETYPE_UPDATE,
	PERM_ROOT_DATANODETYPE_QUERY,
	PERM_ROOT_DATANODETYPE,
}
