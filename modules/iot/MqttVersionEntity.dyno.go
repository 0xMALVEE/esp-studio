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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/MqttVersion"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type MqttVersionEntity struct {
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
	Version          *string `json:"version" yaml:"version"       `
	// Datenano also has a text representation
	Children []*MqttVersionEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *MqttVersionEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var MqttVersionPreloadRelations []string = []string{}
var MQTTVERSION_EVENT_CREATED = "mqttVersion.created"
var MQTTVERSION_EVENT_UPDATED = "mqttVersion.updated"
var MQTTVERSION_EVENT_DELETED = "mqttVersion.deleted"
var MQTTVERSION_EVENTS = []string{
	MQTTVERSION_EVENT_CREATED,
	MQTTVERSION_EVENT_UPDATED,
	MQTTVERSION_EVENT_DELETED,
}

type MqttVersionFieldMap struct {
	Version workspaces.TranslatedString `yaml:"version"`
}

var MqttVersionEntityMetaConfig map[string]int64 = map[string]int64{}
var MqttVersionEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MqttVersionEntity{}))

func entityMqttVersionFormatter(dto *MqttVersionEntity, query workspaces.QueryDSL) {
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
func MqttVersionMockEntity() *MqttVersionEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &MqttVersionEntity{
		Version: &stringHolder,
	}
	return entity
}
func MqttVersionActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := MqttVersionMockEntity()
		_, err := MqttVersionActionCreate(entity, query)
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
func MqttVersionActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*MqttVersionEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &MqttVersionEntity{
		Version: &tildaRef,
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
func MqttVersionAssociationCreate(dto *MqttVersionEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func MqttVersionRelationContentCreate(dto *MqttVersionEntity, query workspaces.QueryDSL) error {
	return nil
}
func MqttVersionRelationContentUpdate(dto *MqttVersionEntity, query workspaces.QueryDSL) error {
	return nil
}
func MqttVersionPolyglotCreateHandler(dto *MqttVersionEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func MqttVersionValidator(dto *MqttVersionEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func MqttVersionEntityPreSanitize(dto *MqttVersionEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func MqttVersionEntityBeforeCreateAppend(dto *MqttVersionEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	MqttVersionRecursiveAddUniqueId(dto, query)
}
func MqttVersionRecursiveAddUniqueId(dto *MqttVersionEntity, query workspaces.QueryDSL) {
}
func MqttVersionActionBatchCreateFn(dtos []*MqttVersionEntity, query workspaces.QueryDSL) ([]*MqttVersionEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*MqttVersionEntity{}
		for _, item := range dtos {
			s, err := MqttVersionActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func MqttVersionActionCreateFn(dto *MqttVersionEntity, query workspaces.QueryDSL) (*MqttVersionEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := MqttVersionValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	MqttVersionEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	MqttVersionEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	MqttVersionPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	MqttVersionRelationContentCreate(dto, query)
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
	MqttVersionAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MQTTVERSION_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&MqttVersionEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func MqttVersionActionGetOne(query workspaces.QueryDSL) (*MqttVersionEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&MqttVersionEntity{})
	item, err := workspaces.GetOneEntity[MqttVersionEntity](query, refl)
	entityMqttVersionFormatter(item, query)
	return item, err
}
func MqttVersionActionQuery(query workspaces.QueryDSL) ([]*MqttVersionEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&MqttVersionEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[MqttVersionEntity](query, refl)
	for _, item := range items {
		entityMqttVersionFormatter(item, query)
	}
	return items, meta, err
}
func MqttVersionUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *MqttVersionEntity) (*MqttVersionEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MQTTVERSION_EVENT_UPDATED
	MqttVersionEntityPreSanitize(fields, query)
	var item MqttVersionEntity
	q := dbref.
		Where(&MqttVersionEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	MqttVersionRelationContentUpdate(fields, query)
	MqttVersionPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&MqttVersionEntity{UniqueId: uniqueId}).
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
func MqttVersionActionUpdateFn(query workspaces.QueryDSL, fields *MqttVersionEntity) (*MqttVersionEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := MqttVersionValidator(fields, true); iError != nil {
		return nil, iError
	}
	MqttVersionRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := MqttVersionUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return MqttVersionUpdateExec(dbref, query, fields)
	}
}

var MqttVersionWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire mqttversions ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := MqttVersionActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func MqttVersionActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&MqttVersionEntity{})
	query.ActionRequires = []string{PERM_ROOT_MQTTVERSION_DELETE}
	return workspaces.RemoveEntity[MqttVersionEntity](query, refl)
}
func MqttVersionActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[MqttVersionEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'MqttVersionEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func MqttVersionActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[MqttVersionEntity]) (
	*workspaces.BulkRecordRequest[MqttVersionEntity], *workspaces.IError,
) {
	result := []*MqttVersionEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := MqttVersionActionUpdate(query, record)
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
func (x *MqttVersionEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var MqttVersionEntityMeta = workspaces.TableMetaData{
	EntityName:    "MqttVersion",
	ExportKey:     "mqtt-versions",
	TableNameInDb: "fb_mqttversion_entities",
	EntityObject:  &MqttVersionEntity{},
	ExportStream:  MqttVersionActionExportT,
	ImportQuery:   MqttVersionActionImport,
}

func MqttVersionActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[MqttVersionEntity](query, MqttVersionActionQuery, MqttVersionPreloadRelations)
}
func MqttVersionActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[MqttVersionEntity](query, MqttVersionActionQuery, MqttVersionPreloadRelations)
}
func MqttVersionActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content MqttVersionEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := MqttVersionActionCreate(&content, query)
	return err
}

var MqttVersionCommonCliFlags = []cli.Flag{
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
		Name:     "version",
		Required: false,
		Usage:    "version",
	},
}
var MqttVersionCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "version",
		StructField: "Version",
		Required:    false,
		Usage:       "version",
		Type:        "string",
	},
}
var MqttVersionCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "version",
		Required: false,
		Usage:    "version",
	},
}
var MqttVersionCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   MqttVersionCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMqttVersionFromCli(c)
		if entity, err := MqttVersionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MqttVersionCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &MqttVersionEntity{}
		for _, item := range MqttVersionCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := MqttVersionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MqttVersionUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   MqttVersionCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMqttVersionFromCli(c)
		if entity, err := MqttVersionActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastMqttVersionFromCli(c *cli.Context) *MqttVersionEntity {
	template := &MqttVersionEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("version") {
		value := c.String("version")
		template.Version = &value
	}
	return template
}
func MqttVersionSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		MqttVersionActionCreate,
		reflect.ValueOf(&MqttVersionEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func MqttVersionSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		MqttVersionActionCreate,
		reflect.ValueOf(&MqttVersionEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func MqttVersionWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := MqttVersionActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "MqttVersion", result)
	}
}

var MqttVersionImportExportCommands = []cli.Command{
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
			MqttVersionActionSeeder(query, c.Int("count"))
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
				Value: "mqtt-version-seeder.yml",
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
			MqttVersionActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "mqtt-version-seeder-mqtt-version.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of mqtt-versions, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]MqttVersionEntity{}
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
				MqttVersionActionCreate,
				reflect.ValueOf(&MqttVersionEntity{}).Elem(),
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
				MqttVersionActionQuery,
				reflect.ValueOf(&MqttVersionEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"MqttVersionFieldMap.yml",
				MqttVersionPreloadRelations,
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
				MqttVersionActionCreate,
				reflect.ValueOf(&MqttVersionEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var MqttVersionCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(MqttVersionActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&MqttVersionEntity{}).Elem(), MqttVersionActionQuery),
	MqttVersionCreateCmd,
	MqttVersionUpdateCmd,
	MqttVersionCreateInteractiveCmd,
	MqttVersionWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&MqttVersionEntity{}).Elem(), MqttVersionActionRemove),
}

func MqttVersionCliFn() cli.Command {
	MqttVersionCliCommands = append(MqttVersionCliCommands, MqttVersionImportExportCommands...)
	return cli.Command{
		Name:        "mqttVersion",
		Description: "MqttVersions module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: MqttVersionCliCommands,
	}
}

/**
 *	Override this function on MqttVersionEntityHttp.go,
 *	In order to add your own http
 **/
var AppendMqttVersionRouter = func(r *[]workspaces.Module2Action) {}

func GetMqttVersionModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/mqtt-versions",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, MqttVersionActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         MqttVersionActionQuery,
			ResponseEntity: &[]MqttVersionEntity{},
		},
		{
			Method: "GET",
			Url:    "/mqtt-versions/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, MqttVersionActionExport)
				},
			},
			Format:         "QUERY",
			Action:         MqttVersionActionExport,
			ResponseEntity: &[]MqttVersionEntity{},
		},
		{
			Method: "GET",
			Url:    "/mqtt-version/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, MqttVersionActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         MqttVersionActionGetOne,
			ResponseEntity: &MqttVersionEntity{},
		},
		{
			Method: "POST",
			Url:    "/mqtt-version",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, MqttVersionActionCreate)
				},
			},
			Action:         MqttVersionActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &MqttVersionEntity{},
			ResponseEntity: &MqttVersionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/mqtt-version",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, MqttVersionActionUpdate)
				},
			},
			Action:         MqttVersionActionUpdate,
			RequestEntity:  &MqttVersionEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &MqttVersionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/mqtt-versions",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, MqttVersionActionBulkUpdate)
				},
			},
			Action:         MqttVersionActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[MqttVersionEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[MqttVersionEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/mqtt-version",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTVERSION_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, MqttVersionActionRemove)
				},
			},
			Action:         MqttVersionActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &MqttVersionEntity{},
		},
	}
	// Append user defined functions
	AppendMqttVersionRouter(&routes)
	return routes
}
func CreateMqttVersionRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetMqttVersionModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MqttVersionEntityJsonSchema, "mqtt-version-http", "iot")
	workspaces.WriteEntitySchema("MqttVersionEntity", MqttVersionEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MQTTVERSION_DELETE = "root/mqttversion/delete"
var PERM_ROOT_MQTTVERSION_CREATE = "root/mqttversion/create"
var PERM_ROOT_MQTTVERSION_UPDATE = "root/mqttversion/update"
var PERM_ROOT_MQTTVERSION_QUERY = "root/mqttversion/query"
var PERM_ROOT_MQTTVERSION = "root/mqttversion"
var ALL_MQTTVERSION_PERMISSIONS = []string{
	PERM_ROOT_MQTTVERSION_DELETE,
	PERM_ROOT_MQTTVERSION_CREATE,
	PERM_ROOT_MQTTVERSION_UPDATE,
	PERM_ROOT_MQTTVERSION_QUERY,
	PERM_ROOT_MQTTVERSION,
}
