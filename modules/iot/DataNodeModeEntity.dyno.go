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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/DataNodeMode"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type DataNodeModeEntity struct {
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
	Children []*DataNodeModeEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *DataNodeModeEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var DataNodeModePreloadRelations []string = []string{}
var DATANODEMODE_EVENT_CREATED = "dataNodeMode.created"
var DATANODEMODE_EVENT_UPDATED = "dataNodeMode.updated"
var DATANODEMODE_EVENT_DELETED = "dataNodeMode.deleted"
var DATANODEMODE_EVENTS = []string{
	DATANODEMODE_EVENT_CREATED,
	DATANODEMODE_EVENT_UPDATED,
	DATANODEMODE_EVENT_DELETED,
}

type DataNodeModeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var DataNodeModeEntityMetaConfig map[string]int64 = map[string]int64{}
var DataNodeModeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&DataNodeModeEntity{}))

func entityDataNodeModeFormatter(dto *DataNodeModeEntity, query workspaces.QueryDSL) {
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
func DataNodeModeMockEntity() *DataNodeModeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &DataNodeModeEntity{
		Name: &stringHolder,
	}
	return entity
}
func DataNodeModeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := DataNodeModeMockEntity()
		_, err := DataNodeModeActionCreate(entity, query)
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
func DataNodeModeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*DataNodeModeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &DataNodeModeEntity{
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
func DataNodeModeAssociationCreate(dto *DataNodeModeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func DataNodeModeRelationContentCreate(dto *DataNodeModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodeModeRelationContentUpdate(dto *DataNodeModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DataNodeModePolyglotCreateHandler(dto *DataNodeModeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func DataNodeModeValidator(dto *DataNodeModeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func DataNodeModeEntityPreSanitize(dto *DataNodeModeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func DataNodeModeEntityBeforeCreateAppend(dto *DataNodeModeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	DataNodeModeRecursiveAddUniqueId(dto, query)
}
func DataNodeModeRecursiveAddUniqueId(dto *DataNodeModeEntity, query workspaces.QueryDSL) {
}
func DataNodeModeActionBatchCreateFn(dtos []*DataNodeModeEntity, query workspaces.QueryDSL) ([]*DataNodeModeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*DataNodeModeEntity{}
		for _, item := range dtos {
			s, err := DataNodeModeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func DataNodeModeActionCreateFn(dto *DataNodeModeEntity, query workspaces.QueryDSL) (*DataNodeModeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := DataNodeModeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	DataNodeModeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	DataNodeModeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	DataNodeModePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	DataNodeModeRelationContentCreate(dto, query)
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
	DataNodeModeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(DATANODEMODE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&DataNodeModeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func DataNodeModeActionGetOne(query workspaces.QueryDSL) (*DataNodeModeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeModeEntity{})
	item, err := workspaces.GetOneEntity[DataNodeModeEntity](query, refl)
	entityDataNodeModeFormatter(item, query)
	return item, err
}
func DataNodeModeActionQuery(query workspaces.QueryDSL) ([]*DataNodeModeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&DataNodeModeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[DataNodeModeEntity](query, refl)
	for _, item := range items {
		entityDataNodeModeFormatter(item, query)
	}
	return items, meta, err
}
func DataNodeModeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *DataNodeModeEntity) (*DataNodeModeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = DATANODEMODE_EVENT_UPDATED
	DataNodeModeEntityPreSanitize(fields, query)
	var item DataNodeModeEntity
	q := dbref.
		Where(&DataNodeModeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	DataNodeModeRelationContentUpdate(fields, query)
	DataNodeModePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&DataNodeModeEntity{UniqueId: uniqueId}).
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
func DataNodeModeActionUpdateFn(query workspaces.QueryDSL, fields *DataNodeModeEntity) (*DataNodeModeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := DataNodeModeValidator(fields, true); iError != nil {
		return nil, iError
	}
	DataNodeModeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := DataNodeModeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return DataNodeModeUpdateExec(dbref, query, fields)
	}
}

var DataNodeModeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire datanodemodes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := DataNodeModeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func DataNodeModeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&DataNodeModeEntity{})
	query.ActionRequires = []string{PERM_ROOT_DATANODEMODE_DELETE}
	return workspaces.RemoveEntity[DataNodeModeEntity](query, refl)
}
func DataNodeModeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[DataNodeModeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DataNodeModeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func DataNodeModeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[DataNodeModeEntity]) (
	*workspaces.BulkRecordRequest[DataNodeModeEntity], *workspaces.IError,
) {
	result := []*DataNodeModeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := DataNodeModeActionUpdate(query, record)
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
func (x *DataNodeModeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var DataNodeModeEntityMeta = workspaces.TableMetaData{
	EntityName:    "DataNodeMode",
	ExportKey:     "data-node-modes",
	TableNameInDb: "fb_datanodemode_entities",
	EntityObject:  &DataNodeModeEntity{},
	ExportStream:  DataNodeModeActionExportT,
	ImportQuery:   DataNodeModeActionImport,
}

func DataNodeModeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[DataNodeModeEntity](query, DataNodeModeActionQuery, DataNodeModePreloadRelations)
}
func DataNodeModeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[DataNodeModeEntity](query, DataNodeModeActionQuery, DataNodeModePreloadRelations)
}
func DataNodeModeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content DataNodeModeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := DataNodeModeActionCreate(&content, query)
	return err
}

var DataNodeModeCommonCliFlags = []cli.Flag{
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
var DataNodeModeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var DataNodeModeCommonCliFlagsOptional = []cli.Flag{
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
var DataNodeModeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   DataNodeModeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeModeFromCli(c)
		if entity, err := DataNodeModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeModeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &DataNodeModeEntity{}
		for _, item := range DataNodeModeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := DataNodeModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DataNodeModeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   DataNodeModeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDataNodeModeFromCli(c)
		if entity, err := DataNodeModeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastDataNodeModeFromCli(c *cli.Context) *DataNodeModeEntity {
	template := &DataNodeModeEntity{}
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
func DataNodeModeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DataNodeModeActionCreate,
		reflect.ValueOf(&DataNodeModeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func DataNodeModeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		DataNodeModeActionCreate,
		reflect.ValueOf(&DataNodeModeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func DataNodeModeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := DataNodeModeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "DataNodeMode", result)
	}
}

var DataNodeModeImportExportCommands = []cli.Command{
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
			DataNodeModeActionSeeder(query, c.Int("count"))
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
				Value: "data-node-mode-seeder.yml",
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
			DataNodeModeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "data-node-mode-seeder-data-node-mode.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of data-node-modes, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]DataNodeModeEntity{}
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
				DataNodeModeActionCreate,
				reflect.ValueOf(&DataNodeModeEntity{}).Elem(),
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
				DataNodeModeActionQuery,
				reflect.ValueOf(&DataNodeModeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"DataNodeModeFieldMap.yml",
				DataNodeModePreloadRelations,
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
				DataNodeModeActionCreate,
				reflect.ValueOf(&DataNodeModeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var DataNodeModeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(DataNodeModeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&DataNodeModeEntity{}).Elem(), DataNodeModeActionQuery),
	DataNodeModeCreateCmd,
	DataNodeModeUpdateCmd,
	DataNodeModeCreateInteractiveCmd,
	DataNodeModeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&DataNodeModeEntity{}).Elem(), DataNodeModeActionRemove),
}

func DataNodeModeCliFn() cli.Command {
	DataNodeModeCliCommands = append(DataNodeModeCliCommands, DataNodeModeImportExportCommands...)
	return cli.Command{
		Name:        "dataNodeMode",
		Description: "DataNodeModes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: DataNodeModeCliCommands,
	}
}

/**
 *	Override this function on DataNodeModeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendDataNodeModeRouter = func(r *[]workspaces.Module2Action) {}

func GetDataNodeModeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/data-node-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DataNodeModeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeModeActionQuery,
			ResponseEntity: &[]DataNodeModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-node-modes/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, DataNodeModeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         DataNodeModeActionExport,
			ResponseEntity: &[]DataNodeModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/data-node-mode/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, DataNodeModeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         DataNodeModeActionGetOne,
			ResponseEntity: &DataNodeModeEntity{},
		},
		{
			Method: "POST",
			Url:    "/data-node-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, DataNodeModeActionCreate)
				},
			},
			Action:         DataNodeModeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DataNodeModeEntity{},
			ResponseEntity: &DataNodeModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, DataNodeModeActionUpdate)
				},
			},
			Action:         DataNodeModeActionUpdate,
			RequestEntity:  &DataNodeModeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &DataNodeModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/data-node-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, DataNodeModeActionBulkUpdate)
				},
			},
			Action:         DataNodeModeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[DataNodeModeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[DataNodeModeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/data-node-mode",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DATANODEMODE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, DataNodeModeActionRemove)
				},
			},
			Action:         DataNodeModeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &DataNodeModeEntity{},
		},
	}
	// Append user defined functions
	AppendDataNodeModeRouter(&routes)
	return routes
}
func CreateDataNodeModeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetDataNodeModeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, DataNodeModeEntityJsonSchema, "data-node-mode-http", "iot")
	workspaces.WriteEntitySchema("DataNodeModeEntity", DataNodeModeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_DATANODEMODE_DELETE = "root/datanodemode/delete"
var PERM_ROOT_DATANODEMODE_CREATE = "root/datanodemode/create"
var PERM_ROOT_DATANODEMODE_UPDATE = "root/datanodemode/update"
var PERM_ROOT_DATANODEMODE_QUERY = "root/datanodemode/query"
var PERM_ROOT_DATANODEMODE = "root/datanodemode"
var ALL_DATANODEMODE_PERMISSIONS = []string{
	PERM_ROOT_DATANODEMODE_DELETE,
	PERM_ROOT_DATANODEMODE_CREATE,
	PERM_ROOT_DATANODEMODE_UPDATE,
	PERM_ROOT_DATANODEMODE_QUERY,
	PERM_ROOT_DATANODEMODE,
}
