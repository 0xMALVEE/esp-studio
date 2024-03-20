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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/ModbusFunctionCode"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ModbusFunctionCodeEntity struct {
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
	Code *int64 `json:"code" yaml:"code"       `
	// Datenano also has a text representation
	Translations []*ModbusFunctionCodeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ModbusFunctionCodeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ModbusFunctionCodeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ModbusFunctionCodePreloadRelations []string = []string{}
var MODBUSFUNCTIONCODE_EVENT_CREATED = "modbusFunctionCode.created"
var MODBUSFUNCTIONCODE_EVENT_UPDATED = "modbusFunctionCode.updated"
var MODBUSFUNCTIONCODE_EVENT_DELETED = "modbusFunctionCode.deleted"
var MODBUSFUNCTIONCODE_EVENTS = []string{
	MODBUSFUNCTIONCODE_EVENT_CREATED,
	MODBUSFUNCTIONCODE_EVENT_UPDATED,
	MODBUSFUNCTIONCODE_EVENT_DELETED,
}

type ModbusFunctionCodeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
	Code workspaces.TranslatedString `yaml:"code"`
}

var ModbusFunctionCodeEntityMetaConfig map[string]int64 = map[string]int64{}
var ModbusFunctionCodeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ModbusFunctionCodeEntity{}))

type ModbusFunctionCodeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityModbusFunctionCodeFormatter(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) {
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
func ModbusFunctionCodeMockEntity() *ModbusFunctionCodeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ModbusFunctionCodeEntity{
		Name: &stringHolder,
		Code: &int64Holder,
	}
	return entity
}
func ModbusFunctionCodeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ModbusFunctionCodeMockEntity()
		_, err := ModbusFunctionCodeActionCreate(entity, query)
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
func (x *ModbusFunctionCodeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ModbusFunctionCodeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ModbusFunctionCodeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ModbusFunctionCodeEntity{
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
func ModbusFunctionCodeAssociationCreate(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ModbusFunctionCodeRelationContentCreate(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusFunctionCodeRelationContentUpdate(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusFunctionCodePolyglotCreateHandler(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ModbusFunctionCodeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ModbusFunctionCodeValidator(dto *ModbusFunctionCodeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ModbusFunctionCodeEntityPreSanitize(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ModbusFunctionCodeEntityBeforeCreateAppend(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ModbusFunctionCodeRecursiveAddUniqueId(dto, query)
}
func ModbusFunctionCodeRecursiveAddUniqueId(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) {
}
func ModbusFunctionCodeActionBatchCreateFn(dtos []*ModbusFunctionCodeEntity, query workspaces.QueryDSL) ([]*ModbusFunctionCodeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ModbusFunctionCodeEntity{}
		for _, item := range dtos {
			s, err := ModbusFunctionCodeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ModbusFunctionCodeActionCreateFn(dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ModbusFunctionCodeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ModbusFunctionCodeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ModbusFunctionCodeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ModbusFunctionCodePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ModbusFunctionCodeRelationContentCreate(dto, query)
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
	ModbusFunctionCodeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MODBUSFUNCTIONCODE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ModbusFunctionCodeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ModbusFunctionCodeActionGetOne(query workspaces.QueryDSL) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusFunctionCodeEntity{})
	item, err := workspaces.GetOneEntity[ModbusFunctionCodeEntity](query, refl)
	entityModbusFunctionCodeFormatter(item, query)
	return item, err
}
func ModbusFunctionCodeActionQuery(query workspaces.QueryDSL) ([]*ModbusFunctionCodeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ModbusFunctionCodeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ModbusFunctionCodeEntity](query, refl)
	for _, item := range items {
		entityModbusFunctionCodeFormatter(item, query)
	}
	return items, meta, err
}
func ModbusFunctionCodeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ModbusFunctionCodeEntity) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MODBUSFUNCTIONCODE_EVENT_UPDATED
	ModbusFunctionCodeEntityPreSanitize(fields, query)
	var item ModbusFunctionCodeEntity
	q := dbref.
		Where(&ModbusFunctionCodeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ModbusFunctionCodeRelationContentUpdate(fields, query)
	ModbusFunctionCodePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ModbusFunctionCodeEntity{UniqueId: uniqueId}).
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
func ModbusFunctionCodeActionUpdateFn(query workspaces.QueryDSL, fields *ModbusFunctionCodeEntity) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ModbusFunctionCodeValidator(fields, true); iError != nil {
		return nil, iError
	}
	ModbusFunctionCodeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ModbusFunctionCodeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ModbusFunctionCodeUpdateExec(dbref, query, fields)
	}
}

var ModbusFunctionCodeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire modbusfunctioncodes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ModbusFunctionCodeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ModbusFunctionCodeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusFunctionCodeEntity{})
	query.ActionRequires = []string{PERM_ROOT_MODBUSFUNCTIONCODE_DELETE}
	return workspaces.RemoveEntity[ModbusFunctionCodeEntity](query, refl)
}
func ModbusFunctionCodeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ModbusFunctionCodeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ModbusFunctionCodeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ModbusFunctionCodeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ModbusFunctionCodeEntity]) (
	*workspaces.BulkRecordRequest[ModbusFunctionCodeEntity], *workspaces.IError,
) {
	result := []*ModbusFunctionCodeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ModbusFunctionCodeActionUpdate(query, record)
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
func (x *ModbusFunctionCodeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ModbusFunctionCodeEntityMeta = workspaces.TableMetaData{
	EntityName:    "ModbusFunctionCode",
	ExportKey:     "modbus-function-codes",
	TableNameInDb: "fb_modbusfunctioncode_entities",
	EntityObject:  &ModbusFunctionCodeEntity{},
	ExportStream:  ModbusFunctionCodeActionExportT,
	ImportQuery:   ModbusFunctionCodeActionImport,
}

func ModbusFunctionCodeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ModbusFunctionCodeEntity](query, ModbusFunctionCodeActionQuery, ModbusFunctionCodePreloadRelations)
}
func ModbusFunctionCodeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ModbusFunctionCodeEntity](query, ModbusFunctionCodeActionQuery, ModbusFunctionCodePreloadRelations)
}
func ModbusFunctionCodeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ModbusFunctionCodeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ModbusFunctionCodeActionCreate(&content, query)
	return err
}

var ModbusFunctionCodeCommonCliFlags = []cli.Flag{
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
	&cli.Int64Flag{
		Name:     "code",
		Required: false,
		Usage:    "code",
	},
}
var ModbusFunctionCodeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "code",
		StructField: "Code",
		Required:    false,
		Usage:       "code",
		Type:        "int64",
	},
}
var ModbusFunctionCodeCommonCliFlagsOptional = []cli.Flag{
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
	&cli.Int64Flag{
		Name:     "code",
		Required: false,
		Usage:    "code",
	},
}
var ModbusFunctionCodeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ModbusFunctionCodeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusFunctionCodeFromCli(c)
		if entity, err := ModbusFunctionCodeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusFunctionCodeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ModbusFunctionCodeEntity{}
		for _, item := range ModbusFunctionCodeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ModbusFunctionCodeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusFunctionCodeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ModbusFunctionCodeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusFunctionCodeFromCli(c)
		if entity, err := ModbusFunctionCodeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastModbusFunctionCodeFromCli(c *cli.Context) *ModbusFunctionCodeEntity {
	template := &ModbusFunctionCodeEntity{}
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
func ModbusFunctionCodeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusFunctionCodeActionCreate,
		reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ModbusFunctionCodeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		ModbusFunctionCodeActionCreate,
		reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func ModbusFunctionCodeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ModbusFunctionCodeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ModbusFunctionCode", result)
	}
}

var ModbusFunctionCodeImportExportCommands = []cli.Command{
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
			ModbusFunctionCodeActionSeeder(query, c.Int("count"))
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
				Value: "modbus-function-code-seeder.yml",
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
			ModbusFunctionCodeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "modbus-function-code-seeder-modbus-function-code.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of modbus-function-codes, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ModbusFunctionCodeEntity{}
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
				ModbusFunctionCodeActionCreate,
				reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(),
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
				ModbusFunctionCodeActionQuery,
				reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"ModbusFunctionCodeFieldMap.yml",
				ModbusFunctionCodePreloadRelations,
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
				ModbusFunctionCodeActionCreate,
				reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ModbusFunctionCodeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ModbusFunctionCodeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(), ModbusFunctionCodeActionQuery),
	ModbusFunctionCodeCreateCmd,
	ModbusFunctionCodeUpdateCmd,
	ModbusFunctionCodeCreateInteractiveCmd,
	ModbusFunctionCodeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ModbusFunctionCodeEntity{}).Elem(), ModbusFunctionCodeActionRemove),
}

func ModbusFunctionCodeCliFn() cli.Command {
	ModbusFunctionCodeCliCommands = append(ModbusFunctionCodeCliCommands, ModbusFunctionCodeImportExportCommands...)
	return cli.Command{
		Name:        "modbusFunctionCode",
		Description: "ModbusFunctionCodes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ModbusFunctionCodeCliCommands,
	}
}

/**
 *	Override this function on ModbusFunctionCodeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendModbusFunctionCodeRouter = func(r *[]workspaces.Module2Action) {}

func GetModbusFunctionCodeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/modbus-function-codes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ModbusFunctionCodeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ModbusFunctionCodeActionQuery,
			ResponseEntity: &[]ModbusFunctionCodeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-function-codes/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ModbusFunctionCodeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ModbusFunctionCodeActionExport,
			ResponseEntity: &[]ModbusFunctionCodeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-function-code/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ModbusFunctionCodeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ModbusFunctionCodeActionGetOne,
			ResponseEntity: &ModbusFunctionCodeEntity{},
		},
		{
			Method: "POST",
			Url:    "/modbus-function-code",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ModbusFunctionCodeActionCreate)
				},
			},
			Action:         ModbusFunctionCodeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ModbusFunctionCodeEntity{},
			ResponseEntity: &ModbusFunctionCodeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-function-code",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ModbusFunctionCodeActionUpdate)
				},
			},
			Action:         ModbusFunctionCodeActionUpdate,
			RequestEntity:  &ModbusFunctionCodeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ModbusFunctionCodeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-function-codes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ModbusFunctionCodeActionBulkUpdate)
				},
			},
			Action:         ModbusFunctionCodeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ModbusFunctionCodeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ModbusFunctionCodeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/modbus-function-code",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSFUNCTIONCODE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ModbusFunctionCodeActionRemove)
				},
			},
			Action:         ModbusFunctionCodeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ModbusFunctionCodeEntity{},
		},
	}
	// Append user defined functions
	AppendModbusFunctionCodeRouter(&routes)
	return routes
}
func CreateModbusFunctionCodeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetModbusFunctionCodeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ModbusFunctionCodeEntityJsonSchema, "modbus-function-code-http", "iot")
	workspaces.WriteEntitySchema("ModbusFunctionCodeEntity", ModbusFunctionCodeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MODBUSFUNCTIONCODE_DELETE = "root/modbusfunctioncode/delete"
var PERM_ROOT_MODBUSFUNCTIONCODE_CREATE = "root/modbusfunctioncode/create"
var PERM_ROOT_MODBUSFUNCTIONCODE_UPDATE = "root/modbusfunctioncode/update"
var PERM_ROOT_MODBUSFUNCTIONCODE_QUERY = "root/modbusfunctioncode/query"
var PERM_ROOT_MODBUSFUNCTIONCODE = "root/modbusfunctioncode"
var ALL_MODBUSFUNCTIONCODE_PERMISSIONS = []string{
	PERM_ROOT_MODBUSFUNCTIONCODE_DELETE,
	PERM_ROOT_MODBUSFUNCTIONCODE_CREATE,
	PERM_ROOT_MODBUSFUNCTIONCODE_UPDATE,
	PERM_ROOT_MODBUSFUNCTIONCODE_QUERY,
	PERM_ROOT_MODBUSFUNCTIONCODE,
}
