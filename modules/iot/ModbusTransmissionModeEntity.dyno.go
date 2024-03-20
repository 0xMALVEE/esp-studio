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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/ModbusTransmissionMode"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ModbusTransmissionModeEntity struct {
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
	Translations []*ModbusTransmissionModeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ModbusTransmissionModeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ModbusTransmissionModeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ModbusTransmissionModePreloadRelations []string = []string{}
var MODBUSTRANSMISSIONMODE_EVENT_CREATED = "modbusTransmissionMode.created"
var MODBUSTRANSMISSIONMODE_EVENT_UPDATED = "modbusTransmissionMode.updated"
var MODBUSTRANSMISSIONMODE_EVENT_DELETED = "modbusTransmissionMode.deleted"
var MODBUSTRANSMISSIONMODE_EVENTS = []string{
	MODBUSTRANSMISSIONMODE_EVENT_CREATED,
	MODBUSTRANSMISSIONMODE_EVENT_UPDATED,
	MODBUSTRANSMISSIONMODE_EVENT_DELETED,
}

type ModbusTransmissionModeFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var ModbusTransmissionModeEntityMetaConfig map[string]int64 = map[string]int64{}
var ModbusTransmissionModeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ModbusTransmissionModeEntity{}))

type ModbusTransmissionModeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityModbusTransmissionModeFormatter(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) {
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
func ModbusTransmissionModeMockEntity() *ModbusTransmissionModeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ModbusTransmissionModeEntity{
		Name: &stringHolder,
	}
	return entity
}
func ModbusTransmissionModeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ModbusTransmissionModeMockEntity()
		_, err := ModbusTransmissionModeActionCreate(entity, query)
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
func (x *ModbusTransmissionModeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ModbusTransmissionModeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ModbusTransmissionModeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ModbusTransmissionModeEntity{
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
func ModbusTransmissionModeAssociationCreate(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ModbusTransmissionModeRelationContentCreate(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusTransmissionModeRelationContentUpdate(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusTransmissionModePolyglotCreateHandler(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ModbusTransmissionModeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ModbusTransmissionModeValidator(dto *ModbusTransmissionModeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ModbusTransmissionModeEntityPreSanitize(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ModbusTransmissionModeEntityBeforeCreateAppend(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ModbusTransmissionModeRecursiveAddUniqueId(dto, query)
}
func ModbusTransmissionModeRecursiveAddUniqueId(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) {
}
func ModbusTransmissionModeActionBatchCreateFn(dtos []*ModbusTransmissionModeEntity, query workspaces.QueryDSL) ([]*ModbusTransmissionModeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ModbusTransmissionModeEntity{}
		for _, item := range dtos {
			s, err := ModbusTransmissionModeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ModbusTransmissionModeActionCreateFn(dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ModbusTransmissionModeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ModbusTransmissionModeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ModbusTransmissionModeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ModbusTransmissionModePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ModbusTransmissionModeRelationContentCreate(dto, query)
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
	ModbusTransmissionModeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MODBUSTRANSMISSIONMODE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ModbusTransmissionModeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ModbusTransmissionModeActionGetOne(query workspaces.QueryDSL) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusTransmissionModeEntity{})
	item, err := workspaces.GetOneEntity[ModbusTransmissionModeEntity](query, refl)
	entityModbusTransmissionModeFormatter(item, query)
	return item, err
}
func ModbusTransmissionModeActionQuery(query workspaces.QueryDSL) ([]*ModbusTransmissionModeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ModbusTransmissionModeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ModbusTransmissionModeEntity](query, refl)
	for _, item := range items {
		entityModbusTransmissionModeFormatter(item, query)
	}
	return items, meta, err
}
func ModbusTransmissionModeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ModbusTransmissionModeEntity) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MODBUSTRANSMISSIONMODE_EVENT_UPDATED
	ModbusTransmissionModeEntityPreSanitize(fields, query)
	var item ModbusTransmissionModeEntity
	q := dbref.
		Where(&ModbusTransmissionModeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ModbusTransmissionModeRelationContentUpdate(fields, query)
	ModbusTransmissionModePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ModbusTransmissionModeEntity{UniqueId: uniqueId}).
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
func ModbusTransmissionModeActionUpdateFn(query workspaces.QueryDSL, fields *ModbusTransmissionModeEntity) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ModbusTransmissionModeValidator(fields, true); iError != nil {
		return nil, iError
	}
	ModbusTransmissionModeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ModbusTransmissionModeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ModbusTransmissionModeUpdateExec(dbref, query, fields)
	}
}

var ModbusTransmissionModeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire modbustransmissionmodes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ModbusTransmissionModeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ModbusTransmissionModeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusTransmissionModeEntity{})
	query.ActionRequires = []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_DELETE}
	return workspaces.RemoveEntity[ModbusTransmissionModeEntity](query, refl)
}
func ModbusTransmissionModeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ModbusTransmissionModeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ModbusTransmissionModeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ModbusTransmissionModeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ModbusTransmissionModeEntity]) (
	*workspaces.BulkRecordRequest[ModbusTransmissionModeEntity], *workspaces.IError,
) {
	result := []*ModbusTransmissionModeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ModbusTransmissionModeActionUpdate(query, record)
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
func (x *ModbusTransmissionModeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ModbusTransmissionModeEntityMeta = workspaces.TableMetaData{
	EntityName:    "ModbusTransmissionMode",
	ExportKey:     "modbus-transmission-modes",
	TableNameInDb: "fb_modbustransmissionmode_entities",
	EntityObject:  &ModbusTransmissionModeEntity{},
	ExportStream:  ModbusTransmissionModeActionExportT,
	ImportQuery:   ModbusTransmissionModeActionImport,
}

func ModbusTransmissionModeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ModbusTransmissionModeEntity](query, ModbusTransmissionModeActionQuery, ModbusTransmissionModePreloadRelations)
}
func ModbusTransmissionModeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ModbusTransmissionModeEntity](query, ModbusTransmissionModeActionQuery, ModbusTransmissionModePreloadRelations)
}
func ModbusTransmissionModeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ModbusTransmissionModeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ModbusTransmissionModeActionCreate(&content, query)
	return err
}

var ModbusTransmissionModeCommonCliFlags = []cli.Flag{
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
var ModbusTransmissionModeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var ModbusTransmissionModeCommonCliFlagsOptional = []cli.Flag{
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
var ModbusTransmissionModeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ModbusTransmissionModeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusTransmissionModeFromCli(c)
		if entity, err := ModbusTransmissionModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusTransmissionModeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ModbusTransmissionModeEntity{}
		for _, item := range ModbusTransmissionModeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ModbusTransmissionModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusTransmissionModeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ModbusTransmissionModeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusTransmissionModeFromCli(c)
		if entity, err := ModbusTransmissionModeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastModbusTransmissionModeFromCli(c *cli.Context) *ModbusTransmissionModeEntity {
	template := &ModbusTransmissionModeEntity{}
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
func ModbusTransmissionModeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusTransmissionModeActionCreate,
		reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ModbusTransmissionModeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		ModbusTransmissionModeActionCreate,
		reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func ModbusTransmissionModeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ModbusTransmissionModeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ModbusTransmissionMode", result)
	}
}

var ModbusTransmissionModeImportExportCommands = []cli.Command{
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
			ModbusTransmissionModeActionSeeder(query, c.Int("count"))
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
				Value: "modbus-transmission-mode-seeder.yml",
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
			ModbusTransmissionModeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "modbus-transmission-mode-seeder-modbus-transmission-mode.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of modbus-transmission-modes, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ModbusTransmissionModeEntity{}
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
				ModbusTransmissionModeActionCreate,
				reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(),
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
				ModbusTransmissionModeActionQuery,
				reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"ModbusTransmissionModeFieldMap.yml",
				ModbusTransmissionModePreloadRelations,
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
				ModbusTransmissionModeActionCreate,
				reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ModbusTransmissionModeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ModbusTransmissionModeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(), ModbusTransmissionModeActionQuery),
	ModbusTransmissionModeCreateCmd,
	ModbusTransmissionModeUpdateCmd,
	ModbusTransmissionModeCreateInteractiveCmd,
	ModbusTransmissionModeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ModbusTransmissionModeEntity{}).Elem(), ModbusTransmissionModeActionRemove),
}

func ModbusTransmissionModeCliFn() cli.Command {
	ModbusTransmissionModeCliCommands = append(ModbusTransmissionModeCliCommands, ModbusTransmissionModeImportExportCommands...)
	return cli.Command{
		Name:        "modbusTransmissionMode",
		Description: "ModbusTransmissionModes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ModbusTransmissionModeCliCommands,
	}
}

/**
 *	Override this function on ModbusTransmissionModeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendModbusTransmissionModeRouter = func(r *[]workspaces.Module2Action) {}

func GetModbusTransmissionModeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/modbus-transmission-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ModbusTransmissionModeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ModbusTransmissionModeActionQuery,
			ResponseEntity: &[]ModbusTransmissionModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-transmission-modes/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ModbusTransmissionModeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ModbusTransmissionModeActionExport,
			ResponseEntity: &[]ModbusTransmissionModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-transmission-mode/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ModbusTransmissionModeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ModbusTransmissionModeActionGetOne,
			ResponseEntity: &ModbusTransmissionModeEntity{},
		},
		{
			Method: "POST",
			Url:    "/modbus-transmission-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ModbusTransmissionModeActionCreate)
				},
			},
			Action:         ModbusTransmissionModeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ModbusTransmissionModeEntity{},
			ResponseEntity: &ModbusTransmissionModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-transmission-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ModbusTransmissionModeActionUpdate)
				},
			},
			Action:         ModbusTransmissionModeActionUpdate,
			RequestEntity:  &ModbusTransmissionModeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ModbusTransmissionModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-transmission-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ModbusTransmissionModeActionBulkUpdate)
				},
			},
			Action:         ModbusTransmissionModeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ModbusTransmissionModeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ModbusTransmissionModeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/modbus-transmission-mode",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTRANSMISSIONMODE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ModbusTransmissionModeActionRemove)
				},
			},
			Action:         ModbusTransmissionModeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ModbusTransmissionModeEntity{},
		},
	}
	// Append user defined functions
	AppendModbusTransmissionModeRouter(&routes)
	return routes
}
func CreateModbusTransmissionModeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetModbusTransmissionModeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ModbusTransmissionModeEntityJsonSchema, "modbus-transmission-mode-http", "iot")
	workspaces.WriteEntitySchema("ModbusTransmissionModeEntity", ModbusTransmissionModeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MODBUSTRANSMISSIONMODE_DELETE = "root/modbustransmissionmode/delete"
var PERM_ROOT_MODBUSTRANSMISSIONMODE_CREATE = "root/modbustransmissionmode/create"
var PERM_ROOT_MODBUSTRANSMISSIONMODE_UPDATE = "root/modbustransmissionmode/update"
var PERM_ROOT_MODBUSTRANSMISSIONMODE_QUERY = "root/modbustransmissionmode/query"
var PERM_ROOT_MODBUSTRANSMISSIONMODE = "root/modbustransmissionmode"
var ALL_MODBUSTRANSMISSIONMODE_PERMISSIONS = []string{
	PERM_ROOT_MODBUSTRANSMISSIONMODE_DELETE,
	PERM_ROOT_MODBUSTRANSMISSIONMODE_CREATE,
	PERM_ROOT_MODBUSTRANSMISSIONMODE_UPDATE,
	PERM_ROOT_MODBUSTRANSMISSIONMODE_QUERY,
	PERM_ROOT_MODBUSTRANSMISSIONMODE,
}
