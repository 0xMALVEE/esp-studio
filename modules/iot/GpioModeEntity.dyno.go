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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/GpioMode"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type GpioModeEntity struct {
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
	Key              *string `json:"key" yaml:"key"       `
	// Datenano also has a text representation
	Index *int64 `json:"index" yaml:"index"       `
	// Datenano also has a text representation
	Description *string `json:"description" yaml:"description"        translate:"true" `
	// Datenano also has a text representation
	Translations []*GpioModeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*GpioModeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *GpioModeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var GpioModePreloadRelations []string = []string{}
var GPIOMODE_EVENT_CREATED = "gpioMode.created"
var GPIOMODE_EVENT_UPDATED = "gpioMode.updated"
var GPIOMODE_EVENT_DELETED = "gpioMode.deleted"
var GPIOMODE_EVENTS = []string{
	GPIOMODE_EVENT_CREATED,
	GPIOMODE_EVENT_UPDATED,
	GPIOMODE_EVENT_DELETED,
}

type GpioModeFieldMap struct {
	Key         workspaces.TranslatedString `yaml:"key"`
	Index       workspaces.TranslatedString `yaml:"index"`
	Description workspaces.TranslatedString `yaml:"description"`
}

var GpioModeEntityMetaConfig map[string]int64 = map[string]int64{}
var GpioModeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&GpioModeEntity{}))

type GpioModeEntityPolyglot struct {
	LinkerId    string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId  string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Description string `yaml:"description" json:"description"`
}

func entityGpioModeFormatter(dto *GpioModeEntity, query workspaces.QueryDSL) {
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
func GpioModeMockEntity() *GpioModeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &GpioModeEntity{
		Key:         &stringHolder,
		Index:       &int64Holder,
		Description: &stringHolder,
	}
	return entity
}
func GpioModeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := GpioModeMockEntity()
		_, err := GpioModeActionCreate(entity, query)
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
func (x *GpioModeEntity) GetDescriptionTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Description
			}
		}
	}
	return ""
}
func GpioModeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*GpioModeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &GpioModeEntity{
		Key:         &tildaRef,
		Description: &tildaRef,
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
func GpioModeAssociationCreate(dto *GpioModeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func GpioModeRelationContentCreate(dto *GpioModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioModeRelationContentUpdate(dto *GpioModeEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioModePolyglotCreateHandler(dto *GpioModeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &GpioModeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func GpioModeValidator(dto *GpioModeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func GpioModeEntityPreSanitize(dto *GpioModeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func GpioModeEntityBeforeCreateAppend(dto *GpioModeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	GpioModeRecursiveAddUniqueId(dto, query)
}
func GpioModeRecursiveAddUniqueId(dto *GpioModeEntity, query workspaces.QueryDSL) {
}
func GpioModeActionBatchCreateFn(dtos []*GpioModeEntity, query workspaces.QueryDSL) ([]*GpioModeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*GpioModeEntity{}
		for _, item := range dtos {
			s, err := GpioModeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func GpioModeActionCreateFn(dto *GpioModeEntity, query workspaces.QueryDSL) (*GpioModeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := GpioModeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	GpioModeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	GpioModeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	GpioModePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	GpioModeRelationContentCreate(dto, query)
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
	GpioModeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(GPIOMODE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&GpioModeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func GpioModeActionGetOne(query workspaces.QueryDSL) (*GpioModeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioModeEntity{})
	item, err := workspaces.GetOneEntity[GpioModeEntity](query, refl)
	entityGpioModeFormatter(item, query)
	return item, err
}
func GpioModeActionQuery(query workspaces.QueryDSL) ([]*GpioModeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&GpioModeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[GpioModeEntity](query, refl)
	for _, item := range items {
		entityGpioModeFormatter(item, query)
	}
	return items, meta, err
}
func GpioModeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *GpioModeEntity) (*GpioModeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = GPIOMODE_EVENT_UPDATED
	GpioModeEntityPreSanitize(fields, query)
	var item GpioModeEntity
	q := dbref.
		Where(&GpioModeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	GpioModeRelationContentUpdate(fields, query)
	GpioModePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&GpioModeEntity{UniqueId: uniqueId}).
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
func GpioModeActionUpdateFn(query workspaces.QueryDSL, fields *GpioModeEntity) (*GpioModeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := GpioModeValidator(fields, true); iError != nil {
		return nil, iError
	}
	GpioModeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := GpioModeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return GpioModeUpdateExec(dbref, query, fields)
	}
}

var GpioModeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire gpiomodes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := GpioModeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func GpioModeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioModeEntity{})
	query.ActionRequires = []string{PERM_ROOT_GPIOMODE_DELETE}
	return workspaces.RemoveEntity[GpioModeEntity](query, refl)
}
func GpioModeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[GpioModeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'GpioModeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func GpioModeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[GpioModeEntity]) (
	*workspaces.BulkRecordRequest[GpioModeEntity], *workspaces.IError,
) {
	result := []*GpioModeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := GpioModeActionUpdate(query, record)
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
func (x *GpioModeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var GpioModeEntityMeta = workspaces.TableMetaData{
	EntityName:    "GpioMode",
	ExportKey:     "gpio-modes",
	TableNameInDb: "fb_gpiomode_entities",
	EntityObject:  &GpioModeEntity{},
	ExportStream:  GpioModeActionExportT,
	ImportQuery:   GpioModeActionImport,
}

func GpioModeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[GpioModeEntity](query, GpioModeActionQuery, GpioModePreloadRelations)
}
func GpioModeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[GpioModeEntity](query, GpioModeActionQuery, GpioModePreloadRelations)
}
func GpioModeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content GpioModeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := GpioModeActionCreate(&content, query)
	return err
}

var GpioModeCommonCliFlags = []cli.Flag{
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
		Name:     "key",
		Required: false,
		Usage:    "key",
	},
	&cli.Int64Flag{
		Name:     "index",
		Required: false,
		Usage:    "index",
	},
	&cli.StringFlag{
		Name:     "description",
		Required: false,
		Usage:    "description",
	},
}
var GpioModeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "key",
		StructField: "Key",
		Required:    false,
		Usage:       "key",
		Type:        "string",
	},
	{
		Name:        "index",
		StructField: "Index",
		Required:    false,
		Usage:       "index",
		Type:        "int64",
	},
	{
		Name:        "description",
		StructField: "Description",
		Required:    false,
		Usage:       "description",
		Type:        "string",
	},
}
var GpioModeCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "key",
		Required: false,
		Usage:    "key",
	},
	&cli.Int64Flag{
		Name:     "index",
		Required: false,
		Usage:    "index",
	},
	&cli.StringFlag{
		Name:     "description",
		Required: false,
		Usage:    "description",
	},
}
var GpioModeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   GpioModeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioModeFromCli(c)
		if entity, err := GpioModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioModeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &GpioModeEntity{}
		for _, item := range GpioModeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := GpioModeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioModeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   GpioModeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioModeFromCli(c)
		if entity, err := GpioModeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastGpioModeFromCli(c *cli.Context) *GpioModeEntity {
	template := &GpioModeEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("key") {
		value := c.String("key")
		template.Key = &value
	}
	if c.IsSet("description") {
		value := c.String("description")
		template.Description = &value
	}
	return template
}
func GpioModeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		GpioModeActionCreate,
		reflect.ValueOf(&GpioModeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func GpioModeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		GpioModeActionCreate,
		reflect.ValueOf(&GpioModeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func GpioModeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := GpioModeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "GpioMode", result)
	}
}

var GpioModeImportExportCommands = []cli.Command{
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
			GpioModeActionSeeder(query, c.Int("count"))
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
				Value: "gpio-mode-seeder.yml",
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
			GpioModeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "gpio-mode-seeder-gpio-mode.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of gpio-modes, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]GpioModeEntity{}
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
				GpioModeActionCreate,
				reflect.ValueOf(&GpioModeEntity{}).Elem(),
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
				GpioModeActionQuery,
				reflect.ValueOf(&GpioModeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"GpioModeFieldMap.yml",
				GpioModePreloadRelations,
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
				GpioModeActionCreate,
				reflect.ValueOf(&GpioModeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var GpioModeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(GpioModeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&GpioModeEntity{}).Elem(), GpioModeActionQuery),
	GpioModeCreateCmd,
	GpioModeUpdateCmd,
	GpioModeCreateInteractiveCmd,
	GpioModeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&GpioModeEntity{}).Elem(), GpioModeActionRemove),
}

func GpioModeCliFn() cli.Command {
	GpioModeCliCommands = append(GpioModeCliCommands, GpioModeImportExportCommands...)
	return cli.Command{
		Name:        "gpioMode",
		Description: "GpioModes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: GpioModeCliCommands,
	}
}

/**
 *	Override this function on GpioModeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendGpioModeRouter = func(r *[]workspaces.Module2Action) {}

func GetGpioModeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/gpio-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, GpioModeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         GpioModeActionQuery,
			ResponseEntity: &[]GpioModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpio-modes/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, GpioModeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         GpioModeActionExport,
			ResponseEntity: &[]GpioModeEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpio-mode/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, GpioModeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         GpioModeActionGetOne,
			ResponseEntity: &GpioModeEntity{},
		},
		{
			Method: "POST",
			Url:    "/gpio-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, GpioModeActionCreate)
				},
			},
			Action:         GpioModeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &GpioModeEntity{},
			ResponseEntity: &GpioModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpio-mode",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, GpioModeActionUpdate)
				},
			},
			Action:         GpioModeActionUpdate,
			RequestEntity:  &GpioModeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &GpioModeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpio-modes",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, GpioModeActionBulkUpdate)
				},
			},
			Action:         GpioModeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[GpioModeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[GpioModeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/gpio-mode",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOMODE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, GpioModeActionRemove)
				},
			},
			Action:         GpioModeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &GpioModeEntity{},
		},
	}
	// Append user defined functions
	AppendGpioModeRouter(&routes)
	return routes
}
func CreateGpioModeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetGpioModeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, GpioModeEntityJsonSchema, "gpio-mode-http", "iot")
	workspaces.WriteEntitySchema("GpioModeEntity", GpioModeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_GPIOMODE_DELETE = "root/gpiomode/delete"
var PERM_ROOT_GPIOMODE_CREATE = "root/gpiomode/create"
var PERM_ROOT_GPIOMODE_UPDATE = "root/gpiomode/update"
var PERM_ROOT_GPIOMODE_QUERY = "root/gpiomode/query"
var PERM_ROOT_GPIOMODE = "root/gpiomode"
var ALL_GPIOMODE_PERMISSIONS = []string{
	PERM_ROOT_GPIOMODE_DELETE,
	PERM_ROOT_GPIOMODE_CREATE,
	PERM_ROOT_GPIOMODE_UPDATE,
	PERM_ROOT_GPIOMODE_QUERY,
	PERM_ROOT_GPIOMODE,
}
