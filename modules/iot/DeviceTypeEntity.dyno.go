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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/DeviceType"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type DeviceTypeEntity struct {
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
	Translations []*DeviceTypeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*DeviceTypeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *DeviceTypeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var DeviceTypePreloadRelations []string = []string{}
var DEVICETYPE_EVENT_CREATED = "deviceType.created"
var DEVICETYPE_EVENT_UPDATED = "deviceType.updated"
var DEVICETYPE_EVENT_DELETED = "deviceType.deleted"
var DEVICETYPE_EVENTS = []string{
	DEVICETYPE_EVENT_CREATED,
	DEVICETYPE_EVENT_UPDATED,
	DEVICETYPE_EVENT_DELETED,
}

type DeviceTypeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var DeviceTypeEntityMetaConfig map[string]int64 = map[string]int64{}
var DeviceTypeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&DeviceTypeEntity{}))

type DeviceTypeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityDeviceTypeFormatter(dto *DeviceTypeEntity, query workspaces.QueryDSL) {
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
func DeviceTypeMockEntity() *DeviceTypeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &DeviceTypeEntity{
		Name: &stringHolder,
	}
	return entity
}
func DeviceTypeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := DeviceTypeMockEntity()
		_, err := DeviceTypeActionCreate(entity, query)
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
func (x *DeviceTypeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func DeviceTypeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*DeviceTypeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &DeviceTypeEntity{
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
func DeviceTypeAssociationCreate(dto *DeviceTypeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func DeviceTypeRelationContentCreate(dto *DeviceTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DeviceTypeRelationContentUpdate(dto *DeviceTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func DeviceTypePolyglotCreateHandler(dto *DeviceTypeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &DeviceTypeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func DeviceTypeValidator(dto *DeviceTypeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func DeviceTypeEntityPreSanitize(dto *DeviceTypeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func DeviceTypeEntityBeforeCreateAppend(dto *DeviceTypeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	DeviceTypeRecursiveAddUniqueId(dto, query)
}
func DeviceTypeRecursiveAddUniqueId(dto *DeviceTypeEntity, query workspaces.QueryDSL) {
}
func DeviceTypeActionBatchCreateFn(dtos []*DeviceTypeEntity, query workspaces.QueryDSL) ([]*DeviceTypeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*DeviceTypeEntity{}
		for _, item := range dtos {
			s, err := DeviceTypeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func DeviceTypeActionCreateFn(dto *DeviceTypeEntity, query workspaces.QueryDSL) (*DeviceTypeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := DeviceTypeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	DeviceTypeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	DeviceTypeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	DeviceTypePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	DeviceTypeRelationContentCreate(dto, query)
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
	DeviceTypeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(DEVICETYPE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&DeviceTypeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func DeviceTypeActionGetOne(query workspaces.QueryDSL) (*DeviceTypeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&DeviceTypeEntity{})
	item, err := workspaces.GetOneEntity[DeviceTypeEntity](query, refl)
	entityDeviceTypeFormatter(item, query)
	return item, err
}
func DeviceTypeActionQuery(query workspaces.QueryDSL) ([]*DeviceTypeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&DeviceTypeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[DeviceTypeEntity](query, refl)
	for _, item := range items {
		entityDeviceTypeFormatter(item, query)
	}
	return items, meta, err
}
func DeviceTypeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *DeviceTypeEntity) (*DeviceTypeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = DEVICETYPE_EVENT_UPDATED
	DeviceTypeEntityPreSanitize(fields, query)
	var item DeviceTypeEntity
	q := dbref.
		Where(&DeviceTypeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	DeviceTypeRelationContentUpdate(fields, query)
	DeviceTypePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&DeviceTypeEntity{UniqueId: uniqueId}).
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
func DeviceTypeActionUpdateFn(query workspaces.QueryDSL, fields *DeviceTypeEntity) (*DeviceTypeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := DeviceTypeValidator(fields, true); iError != nil {
		return nil, iError
	}
	DeviceTypeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := DeviceTypeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return DeviceTypeUpdateExec(dbref, query, fields)
	}
}

var DeviceTypeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire devicetypes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := DeviceTypeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func DeviceTypeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&DeviceTypeEntity{})
	query.ActionRequires = []string{PERM_ROOT_DEVICETYPE_DELETE}
	return workspaces.RemoveEntity[DeviceTypeEntity](query, refl)
}
func DeviceTypeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[DeviceTypeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DeviceTypeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func DeviceTypeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[DeviceTypeEntity]) (
	*workspaces.BulkRecordRequest[DeviceTypeEntity], *workspaces.IError,
) {
	result := []*DeviceTypeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := DeviceTypeActionUpdate(query, record)
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
func (x *DeviceTypeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var DeviceTypeEntityMeta = workspaces.TableMetaData{
	EntityName:    "DeviceType",
	ExportKey:     "device-types",
	TableNameInDb: "fb_devicetype_entities",
	EntityObject:  &DeviceTypeEntity{},
	ExportStream:  DeviceTypeActionExportT,
	ImportQuery:   DeviceTypeActionImport,
}

func DeviceTypeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[DeviceTypeEntity](query, DeviceTypeActionQuery, DeviceTypePreloadRelations)
}
func DeviceTypeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[DeviceTypeEntity](query, DeviceTypeActionQuery, DeviceTypePreloadRelations)
}
func DeviceTypeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content DeviceTypeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := DeviceTypeActionCreate(&content, query)
	return err
}

var DeviceTypeCommonCliFlags = []cli.Flag{
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
var DeviceTypeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var DeviceTypeCommonCliFlagsOptional = []cli.Flag{
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
var DeviceTypeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   DeviceTypeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDeviceTypeFromCli(c)
		if entity, err := DeviceTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DeviceTypeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &DeviceTypeEntity{}
		for _, item := range DeviceTypeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := DeviceTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DeviceTypeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   DeviceTypeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDeviceTypeFromCli(c)
		if entity, err := DeviceTypeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastDeviceTypeFromCli(c *cli.Context) *DeviceTypeEntity {
	template := &DeviceTypeEntity{}
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
func DeviceTypeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DeviceTypeActionCreate,
		reflect.ValueOf(&DeviceTypeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func DeviceTypeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		DeviceTypeActionCreate,
		reflect.ValueOf(&DeviceTypeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func DeviceTypeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := DeviceTypeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "DeviceType", result)
	}
}

var DeviceTypeImportExportCommands = []cli.Command{
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
			DeviceTypeActionSeeder(query, c.Int("count"))
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
				Value: "device-type-seeder.yml",
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
			DeviceTypeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "device-type-seeder-device-type.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of device-types, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]DeviceTypeEntity{}
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
				DeviceTypeActionCreate,
				reflect.ValueOf(&DeviceTypeEntity{}).Elem(),
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
				DeviceTypeActionQuery,
				reflect.ValueOf(&DeviceTypeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"DeviceTypeFieldMap.yml",
				DeviceTypePreloadRelations,
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
				DeviceTypeActionCreate,
				reflect.ValueOf(&DeviceTypeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var DeviceTypeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(DeviceTypeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&DeviceTypeEntity{}).Elem(), DeviceTypeActionQuery),
	DeviceTypeCreateCmd,
	DeviceTypeUpdateCmd,
	DeviceTypeCreateInteractiveCmd,
	DeviceTypeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&DeviceTypeEntity{}).Elem(), DeviceTypeActionRemove),
}

func DeviceTypeCliFn() cli.Command {
	DeviceTypeCliCommands = append(DeviceTypeCliCommands, DeviceTypeImportExportCommands...)
	return cli.Command{
		Name:        "deviceType",
		Description: "DeviceTypes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: DeviceTypeCliCommands,
	}
}

/**
 *	Override this function on DeviceTypeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendDeviceTypeRouter = func(r *[]workspaces.Module2Action) {}

func GetDeviceTypeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/device-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DeviceTypeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         DeviceTypeActionQuery,
			ResponseEntity: &[]DeviceTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/device-types/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, DeviceTypeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         DeviceTypeActionExport,
			ResponseEntity: &[]DeviceTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/device-type/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, DeviceTypeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         DeviceTypeActionGetOne,
			ResponseEntity: &DeviceTypeEntity{},
		},
		{
			Method: "POST",
			Url:    "/device-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, DeviceTypeActionCreate)
				},
			},
			Action:         DeviceTypeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DeviceTypeEntity{},
			ResponseEntity: &DeviceTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/device-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, DeviceTypeActionUpdate)
				},
			},
			Action:         DeviceTypeActionUpdate,
			RequestEntity:  &DeviceTypeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &DeviceTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/device-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, DeviceTypeActionBulkUpdate)
				},
			},
			Action:         DeviceTypeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[DeviceTypeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[DeviceTypeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/device-type",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICETYPE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, DeviceTypeActionRemove)
				},
			},
			Action:         DeviceTypeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &DeviceTypeEntity{},
		},
	}
	// Append user defined functions
	AppendDeviceTypeRouter(&routes)
	return routes
}
func CreateDeviceTypeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetDeviceTypeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, DeviceTypeEntityJsonSchema, "device-type-http", "iot")
	workspaces.WriteEntitySchema("DeviceTypeEntity", DeviceTypeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_DEVICETYPE_DELETE = "root/devicetype/delete"
var PERM_ROOT_DEVICETYPE_CREATE = "root/devicetype/create"
var PERM_ROOT_DEVICETYPE_UPDATE = "root/devicetype/update"
var PERM_ROOT_DEVICETYPE_QUERY = "root/devicetype/query"
var PERM_ROOT_DEVICETYPE = "root/devicetype"
var ALL_DEVICETYPE_PERMISSIONS = []string{
	PERM_ROOT_DEVICETYPE_DELETE,
	PERM_ROOT_DEVICETYPE_CREATE,
	PERM_ROOT_DEVICETYPE_UPDATE,
	PERM_ROOT_DEVICETYPE_QUERY,
	PERM_ROOT_DEVICETYPE,
}
