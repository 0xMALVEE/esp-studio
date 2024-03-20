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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/ModbusVariableType"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ModbusVariableTypeEntity struct {
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
	Translations []*ModbusVariableTypeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ModbusVariableTypeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ModbusVariableTypeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ModbusVariableTypePreloadRelations []string = []string{}
var MODBUSVARIABLETYPE_EVENT_CREATED = "modbusVariableType.created"
var MODBUSVARIABLETYPE_EVENT_UPDATED = "modbusVariableType.updated"
var MODBUSVARIABLETYPE_EVENT_DELETED = "modbusVariableType.deleted"
var MODBUSVARIABLETYPE_EVENTS = []string{
	MODBUSVARIABLETYPE_EVENT_CREATED,
	MODBUSVARIABLETYPE_EVENT_UPDATED,
	MODBUSVARIABLETYPE_EVENT_DELETED,
}

type ModbusVariableTypeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var ModbusVariableTypeEntityMetaConfig map[string]int64 = map[string]int64{}
var ModbusVariableTypeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ModbusVariableTypeEntity{}))

type ModbusVariableTypeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityModbusVariableTypeFormatter(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) {
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
func ModbusVariableTypeMockEntity() *ModbusVariableTypeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ModbusVariableTypeEntity{
		Name: &stringHolder,
	}
	return entity
}
func ModbusVariableTypeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ModbusVariableTypeMockEntity()
		_, err := ModbusVariableTypeActionCreate(entity, query)
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
func (x *ModbusVariableTypeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ModbusVariableTypeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ModbusVariableTypeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ModbusVariableTypeEntity{
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
func ModbusVariableTypeAssociationCreate(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ModbusVariableTypeRelationContentCreate(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusVariableTypeRelationContentUpdate(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusVariableTypePolyglotCreateHandler(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ModbusVariableTypeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ModbusVariableTypeValidator(dto *ModbusVariableTypeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ModbusVariableTypeEntityPreSanitize(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ModbusVariableTypeEntityBeforeCreateAppend(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ModbusVariableTypeRecursiveAddUniqueId(dto, query)
}
func ModbusVariableTypeRecursiveAddUniqueId(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) {
}
func ModbusVariableTypeActionBatchCreateFn(dtos []*ModbusVariableTypeEntity, query workspaces.QueryDSL) ([]*ModbusVariableTypeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ModbusVariableTypeEntity{}
		for _, item := range dtos {
			s, err := ModbusVariableTypeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ModbusVariableTypeActionCreateFn(dto *ModbusVariableTypeEntity, query workspaces.QueryDSL) (*ModbusVariableTypeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ModbusVariableTypeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ModbusVariableTypeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ModbusVariableTypeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ModbusVariableTypePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ModbusVariableTypeRelationContentCreate(dto, query)
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
	ModbusVariableTypeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MODBUSVARIABLETYPE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ModbusVariableTypeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ModbusVariableTypeActionGetOne(query workspaces.QueryDSL) (*ModbusVariableTypeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusVariableTypeEntity{})
	item, err := workspaces.GetOneEntity[ModbusVariableTypeEntity](query, refl)
	entityModbusVariableTypeFormatter(item, query)
	return item, err
}
func ModbusVariableTypeActionQuery(query workspaces.QueryDSL) ([]*ModbusVariableTypeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ModbusVariableTypeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ModbusVariableTypeEntity](query, refl)
	for _, item := range items {
		entityModbusVariableTypeFormatter(item, query)
	}
	return items, meta, err
}
func ModbusVariableTypeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ModbusVariableTypeEntity) (*ModbusVariableTypeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MODBUSVARIABLETYPE_EVENT_UPDATED
	ModbusVariableTypeEntityPreSanitize(fields, query)
	var item ModbusVariableTypeEntity
	q := dbref.
		Where(&ModbusVariableTypeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ModbusVariableTypeRelationContentUpdate(fields, query)
	ModbusVariableTypePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ModbusVariableTypeEntity{UniqueId: uniqueId}).
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
func ModbusVariableTypeActionUpdateFn(query workspaces.QueryDSL, fields *ModbusVariableTypeEntity) (*ModbusVariableTypeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ModbusVariableTypeValidator(fields, true); iError != nil {
		return nil, iError
	}
	ModbusVariableTypeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ModbusVariableTypeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ModbusVariableTypeUpdateExec(dbref, query, fields)
	}
}

var ModbusVariableTypeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire modbusvariabletypes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ModbusVariableTypeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ModbusVariableTypeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusVariableTypeEntity{})
	query.ActionRequires = []string{PERM_ROOT_MODBUSVARIABLETYPE_DELETE}
	return workspaces.RemoveEntity[ModbusVariableTypeEntity](query, refl)
}
func ModbusVariableTypeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ModbusVariableTypeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ModbusVariableTypeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ModbusVariableTypeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ModbusVariableTypeEntity]) (
	*workspaces.BulkRecordRequest[ModbusVariableTypeEntity], *workspaces.IError,
) {
	result := []*ModbusVariableTypeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ModbusVariableTypeActionUpdate(query, record)
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
func (x *ModbusVariableTypeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ModbusVariableTypeEntityMeta = workspaces.TableMetaData{
	EntityName:    "ModbusVariableType",
	ExportKey:     "modbus-variable-types",
	TableNameInDb: "fb_modbusvariabletype_entities",
	EntityObject:  &ModbusVariableTypeEntity{},
	ExportStream:  ModbusVariableTypeActionExportT,
	ImportQuery:   ModbusVariableTypeActionImport,
}

func ModbusVariableTypeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ModbusVariableTypeEntity](query, ModbusVariableTypeActionQuery, ModbusVariableTypePreloadRelations)
}
func ModbusVariableTypeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ModbusVariableTypeEntity](query, ModbusVariableTypeActionQuery, ModbusVariableTypePreloadRelations)
}
func ModbusVariableTypeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ModbusVariableTypeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ModbusVariableTypeActionCreate(&content, query)
	return err
}

var ModbusVariableTypeCommonCliFlags = []cli.Flag{
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
var ModbusVariableTypeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var ModbusVariableTypeCommonCliFlagsOptional = []cli.Flag{
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
var ModbusVariableTypeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ModbusVariableTypeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusVariableTypeFromCli(c)
		if entity, err := ModbusVariableTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusVariableTypeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ModbusVariableTypeEntity{}
		for _, item := range ModbusVariableTypeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ModbusVariableTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusVariableTypeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ModbusVariableTypeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusVariableTypeFromCli(c)
		if entity, err := ModbusVariableTypeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastModbusVariableTypeFromCli(c *cli.Context) *ModbusVariableTypeEntity {
	template := &ModbusVariableTypeEntity{}
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
func ModbusVariableTypeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusVariableTypeActionCreate,
		reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ModbusVariableTypeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		ModbusVariableTypeActionCreate,
		reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func ModbusVariableTypeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ModbusVariableTypeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ModbusVariableType", result)
	}
}

var ModbusVariableTypeImportExportCommands = []cli.Command{
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
			ModbusVariableTypeActionSeeder(query, c.Int("count"))
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
				Value: "modbus-variable-type-seeder.yml",
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
			ModbusVariableTypeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "modbus-variable-type-seeder-modbus-variable-type.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of modbus-variable-types, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ModbusVariableTypeEntity{}
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
				ModbusVariableTypeActionCreate,
				reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(),
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
				ModbusVariableTypeActionQuery,
				reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"ModbusVariableTypeFieldMap.yml",
				ModbusVariableTypePreloadRelations,
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
				ModbusVariableTypeActionCreate,
				reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ModbusVariableTypeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ModbusVariableTypeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(), ModbusVariableTypeActionQuery),
	ModbusVariableTypeCreateCmd,
	ModbusVariableTypeUpdateCmd,
	ModbusVariableTypeCreateInteractiveCmd,
	ModbusVariableTypeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ModbusVariableTypeEntity{}).Elem(), ModbusVariableTypeActionRemove),
}

func ModbusVariableTypeCliFn() cli.Command {
	ModbusVariableTypeCliCommands = append(ModbusVariableTypeCliCommands, ModbusVariableTypeImportExportCommands...)
	return cli.Command{
		Name:        "modbusVariableType",
		Description: "ModbusVariableTypes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ModbusVariableTypeCliCommands,
	}
}

/**
 *	Override this function on ModbusVariableTypeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendModbusVariableTypeRouter = func(r *[]workspaces.Module2Action) {}

func GetModbusVariableTypeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/modbus-variable-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ModbusVariableTypeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ModbusVariableTypeActionQuery,
			ResponseEntity: &[]ModbusVariableTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-variable-types/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ModbusVariableTypeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ModbusVariableTypeActionExport,
			ResponseEntity: &[]ModbusVariableTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-variable-type/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ModbusVariableTypeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ModbusVariableTypeActionGetOne,
			ResponseEntity: &ModbusVariableTypeEntity{},
		},
		{
			Method: "POST",
			Url:    "/modbus-variable-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ModbusVariableTypeActionCreate)
				},
			},
			Action:         ModbusVariableTypeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ModbusVariableTypeEntity{},
			ResponseEntity: &ModbusVariableTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-variable-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ModbusVariableTypeActionUpdate)
				},
			},
			Action:         ModbusVariableTypeActionUpdate,
			RequestEntity:  &ModbusVariableTypeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ModbusVariableTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-variable-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ModbusVariableTypeActionBulkUpdate)
				},
			},
			Action:         ModbusVariableTypeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ModbusVariableTypeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ModbusVariableTypeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/modbus-variable-type",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSVARIABLETYPE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ModbusVariableTypeActionRemove)
				},
			},
			Action:         ModbusVariableTypeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ModbusVariableTypeEntity{},
		},
	}
	// Append user defined functions
	AppendModbusVariableTypeRouter(&routes)
	return routes
}
func CreateModbusVariableTypeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetModbusVariableTypeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ModbusVariableTypeEntityJsonSchema, "modbus-variable-type-http", "iot")
	workspaces.WriteEntitySchema("ModbusVariableTypeEntity", ModbusVariableTypeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MODBUSVARIABLETYPE_DELETE = "root/modbusvariabletype/delete"
var PERM_ROOT_MODBUSVARIABLETYPE_CREATE = "root/modbusvariabletype/create"
var PERM_ROOT_MODBUSVARIABLETYPE_UPDATE = "root/modbusvariabletype/update"
var PERM_ROOT_MODBUSVARIABLETYPE_QUERY = "root/modbusvariabletype/query"
var PERM_ROOT_MODBUSVARIABLETYPE = "root/modbusvariabletype"
var ALL_MODBUSVARIABLETYPE_PERMISSIONS = []string{
	PERM_ROOT_MODBUSVARIABLETYPE_DELETE,
	PERM_ROOT_MODBUSVARIABLETYPE_CREATE,
	PERM_ROOT_MODBUSVARIABLETYPE_UPDATE,
	PERM_ROOT_MODBUSVARIABLETYPE_QUERY,
	PERM_ROOT_MODBUSVARIABLETYPE,
}
