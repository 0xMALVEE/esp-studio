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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/ModbusConnectionType"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ModbusConnectionTypeEntity struct {
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
	Translations []*ModbusConnectionTypeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ModbusConnectionTypeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ModbusConnectionTypeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ModbusConnectionTypePreloadRelations []string = []string{}
var MODBUSCONNECTIONTYPE_EVENT_CREATED = "modbusConnectionType.created"
var MODBUSCONNECTIONTYPE_EVENT_UPDATED = "modbusConnectionType.updated"
var MODBUSCONNECTIONTYPE_EVENT_DELETED = "modbusConnectionType.deleted"
var MODBUSCONNECTIONTYPE_EVENTS = []string{
	MODBUSCONNECTIONTYPE_EVENT_CREATED,
	MODBUSCONNECTIONTYPE_EVENT_UPDATED,
	MODBUSCONNECTIONTYPE_EVENT_DELETED,
}

type ModbusConnectionTypeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var ModbusConnectionTypeEntityMetaConfig map[string]int64 = map[string]int64{}
var ModbusConnectionTypeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ModbusConnectionTypeEntity{}))

type ModbusConnectionTypeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityModbusConnectionTypeFormatter(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) {
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
func ModbusConnectionTypeMockEntity() *ModbusConnectionTypeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ModbusConnectionTypeEntity{
		Name: &stringHolder,
	}
	return entity
}
func ModbusConnectionTypeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ModbusConnectionTypeMockEntity()
		_, err := ModbusConnectionTypeActionCreate(entity, query)
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
func (x *ModbusConnectionTypeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ModbusConnectionTypeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ModbusConnectionTypeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ModbusConnectionTypeEntity{
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
func ModbusConnectionTypeAssociationCreate(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ModbusConnectionTypeRelationContentCreate(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusConnectionTypeRelationContentUpdate(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusConnectionTypePolyglotCreateHandler(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ModbusConnectionTypeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ModbusConnectionTypeValidator(dto *ModbusConnectionTypeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ModbusConnectionTypeEntityPreSanitize(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ModbusConnectionTypeEntityBeforeCreateAppend(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ModbusConnectionTypeRecursiveAddUniqueId(dto, query)
}
func ModbusConnectionTypeRecursiveAddUniqueId(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) {
}
func ModbusConnectionTypeActionBatchCreateFn(dtos []*ModbusConnectionTypeEntity, query workspaces.QueryDSL) ([]*ModbusConnectionTypeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ModbusConnectionTypeEntity{}
		for _, item := range dtos {
			s, err := ModbusConnectionTypeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ModbusConnectionTypeActionCreateFn(dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ModbusConnectionTypeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ModbusConnectionTypeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ModbusConnectionTypeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ModbusConnectionTypePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ModbusConnectionTypeRelationContentCreate(dto, query)
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
	ModbusConnectionTypeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MODBUSCONNECTIONTYPE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ModbusConnectionTypeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ModbusConnectionTypeActionGetOne(query workspaces.QueryDSL) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusConnectionTypeEntity{})
	item, err := workspaces.GetOneEntity[ModbusConnectionTypeEntity](query, refl)
	entityModbusConnectionTypeFormatter(item, query)
	return item, err
}
func ModbusConnectionTypeActionQuery(query workspaces.QueryDSL) ([]*ModbusConnectionTypeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ModbusConnectionTypeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ModbusConnectionTypeEntity](query, refl)
	for _, item := range items {
		entityModbusConnectionTypeFormatter(item, query)
	}
	return items, meta, err
}
func ModbusConnectionTypeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ModbusConnectionTypeEntity) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MODBUSCONNECTIONTYPE_EVENT_UPDATED
	ModbusConnectionTypeEntityPreSanitize(fields, query)
	var item ModbusConnectionTypeEntity
	q := dbref.
		Where(&ModbusConnectionTypeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ModbusConnectionTypeRelationContentUpdate(fields, query)
	ModbusConnectionTypePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ModbusConnectionTypeEntity{UniqueId: uniqueId}).
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
func ModbusConnectionTypeActionUpdateFn(query workspaces.QueryDSL, fields *ModbusConnectionTypeEntity) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ModbusConnectionTypeValidator(fields, true); iError != nil {
		return nil, iError
	}
	ModbusConnectionTypeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ModbusConnectionTypeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ModbusConnectionTypeUpdateExec(dbref, query, fields)
	}
}

var ModbusConnectionTypeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire modbusconnectiontypes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ModbusConnectionTypeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ModbusConnectionTypeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusConnectionTypeEntity{})
	query.ActionRequires = []string{PERM_ROOT_MODBUSCONNECTIONTYPE_DELETE}
	return workspaces.RemoveEntity[ModbusConnectionTypeEntity](query, refl)
}
func ModbusConnectionTypeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ModbusConnectionTypeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ModbusConnectionTypeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ModbusConnectionTypeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ModbusConnectionTypeEntity]) (
	*workspaces.BulkRecordRequest[ModbusConnectionTypeEntity], *workspaces.IError,
) {
	result := []*ModbusConnectionTypeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ModbusConnectionTypeActionUpdate(query, record)
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
func (x *ModbusConnectionTypeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ModbusConnectionTypeEntityMeta = workspaces.TableMetaData{
	EntityName:    "ModbusConnectionType",
	ExportKey:     "modbus-connection-types",
	TableNameInDb: "fb_modbusconnectiontype_entities",
	EntityObject:  &ModbusConnectionTypeEntity{},
	ExportStream:  ModbusConnectionTypeActionExportT,
	ImportQuery:   ModbusConnectionTypeActionImport,
}

func ModbusConnectionTypeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ModbusConnectionTypeEntity](query, ModbusConnectionTypeActionQuery, ModbusConnectionTypePreloadRelations)
}
func ModbusConnectionTypeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ModbusConnectionTypeEntity](query, ModbusConnectionTypeActionQuery, ModbusConnectionTypePreloadRelations)
}
func ModbusConnectionTypeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ModbusConnectionTypeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ModbusConnectionTypeActionCreate(&content, query)
	return err
}

var ModbusConnectionTypeCommonCliFlags = []cli.Flag{
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
var ModbusConnectionTypeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var ModbusConnectionTypeCommonCliFlagsOptional = []cli.Flag{
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
var ModbusConnectionTypeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ModbusConnectionTypeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusConnectionTypeFromCli(c)
		if entity, err := ModbusConnectionTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusConnectionTypeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ModbusConnectionTypeEntity{}
		for _, item := range ModbusConnectionTypeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ModbusConnectionTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusConnectionTypeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ModbusConnectionTypeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusConnectionTypeFromCli(c)
		if entity, err := ModbusConnectionTypeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastModbusConnectionTypeFromCli(c *cli.Context) *ModbusConnectionTypeEntity {
	template := &ModbusConnectionTypeEntity{}
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
func ModbusConnectionTypeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusConnectionTypeActionCreate,
		reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ModbusConnectionTypeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		ModbusConnectionTypeActionCreate,
		reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func ModbusConnectionTypeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ModbusConnectionTypeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ModbusConnectionType", result)
	}
}

var ModbusConnectionTypeImportExportCommands = []cli.Command{
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
			ModbusConnectionTypeActionSeeder(query, c.Int("count"))
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
				Value: "modbus-connection-type-seeder.yml",
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
			ModbusConnectionTypeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "modbus-connection-type-seeder-modbus-connection-type.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of modbus-connection-types, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ModbusConnectionTypeEntity{}
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
				ModbusConnectionTypeActionCreate,
				reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(),
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
				ModbusConnectionTypeActionQuery,
				reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"ModbusConnectionTypeFieldMap.yml",
				ModbusConnectionTypePreloadRelations,
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
				ModbusConnectionTypeActionCreate,
				reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ModbusConnectionTypeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ModbusConnectionTypeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(), ModbusConnectionTypeActionQuery),
	ModbusConnectionTypeCreateCmd,
	ModbusConnectionTypeUpdateCmd,
	ModbusConnectionTypeCreateInteractiveCmd,
	ModbusConnectionTypeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ModbusConnectionTypeEntity{}).Elem(), ModbusConnectionTypeActionRemove),
}

func ModbusConnectionTypeCliFn() cli.Command {
	ModbusConnectionTypeCliCommands = append(ModbusConnectionTypeCliCommands, ModbusConnectionTypeImportExportCommands...)
	return cli.Command{
		Name:        "modbusConnectionType",
		Description: "ModbusConnectionTypes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ModbusConnectionTypeCliCommands,
	}
}

/**
 *	Override this function on ModbusConnectionTypeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendModbusConnectionTypeRouter = func(r *[]workspaces.Module2Action) {}

func GetModbusConnectionTypeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/modbus-connection-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ModbusConnectionTypeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ModbusConnectionTypeActionQuery,
			ResponseEntity: &[]ModbusConnectionTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-connection-types/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ModbusConnectionTypeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ModbusConnectionTypeActionExport,
			ResponseEntity: &[]ModbusConnectionTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-connection-type/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ModbusConnectionTypeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ModbusConnectionTypeActionGetOne,
			ResponseEntity: &ModbusConnectionTypeEntity{},
		},
		{
			Method: "POST",
			Url:    "/modbus-connection-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ModbusConnectionTypeActionCreate)
				},
			},
			Action:         ModbusConnectionTypeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ModbusConnectionTypeEntity{},
			ResponseEntity: &ModbusConnectionTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-connection-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ModbusConnectionTypeActionUpdate)
				},
			},
			Action:         ModbusConnectionTypeActionUpdate,
			RequestEntity:  &ModbusConnectionTypeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ModbusConnectionTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-connection-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ModbusConnectionTypeActionBulkUpdate)
				},
			},
			Action:         ModbusConnectionTypeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ModbusConnectionTypeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ModbusConnectionTypeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/modbus-connection-type",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSCONNECTIONTYPE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ModbusConnectionTypeActionRemove)
				},
			},
			Action:         ModbusConnectionTypeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ModbusConnectionTypeEntity{},
		},
	}
	// Append user defined functions
	AppendModbusConnectionTypeRouter(&routes)
	return routes
}
func CreateModbusConnectionTypeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetModbusConnectionTypeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ModbusConnectionTypeEntityJsonSchema, "modbus-connection-type-http", "iot")
	workspaces.WriteEntitySchema("ModbusConnectionTypeEntity", ModbusConnectionTypeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MODBUSCONNECTIONTYPE_DELETE = "root/modbusconnectiontype/delete"
var PERM_ROOT_MODBUSCONNECTIONTYPE_CREATE = "root/modbusconnectiontype/create"
var PERM_ROOT_MODBUSCONNECTIONTYPE_UPDATE = "root/modbusconnectiontype/update"
var PERM_ROOT_MODBUSCONNECTIONTYPE_QUERY = "root/modbusconnectiontype/query"
var PERM_ROOT_MODBUSCONNECTIONTYPE = "root/modbusconnectiontype"
var ALL_MODBUSCONNECTIONTYPE_PERMISSIONS = []string{
	PERM_ROOT_MODBUSCONNECTIONTYPE_DELETE,
	PERM_ROOT_MODBUSCONNECTIONTYPE_CREATE,
	PERM_ROOT_MODBUSCONNECTIONTYPE_UPDATE,
	PERM_ROOT_MODBUSCONNECTIONTYPE_QUERY,
	PERM_ROOT_MODBUSCONNECTIONTYPE,
}
