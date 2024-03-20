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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/Gpio"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type GpioEntity struct {
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
	Index *int64 `json:"index" yaml:"index"       `
	// Datenano also has a text representation
	AnalogFunction *string `json:"analogFunction" yaml:"analogFunction"       `
	// Datenano also has a text representation
	RtcGpio *string `json:"rtcGpio" yaml:"rtcGpio"       `
	// Datenano also has a text representation
	Comments *string `json:"comments" yaml:"comments"       `
	// Datenano also has a text representation
	Mode *GpioModeEntity `json:"mode" yaml:"mode"    gorm:"foreignKey:ModeId;references:UniqueId"     `
	// Datenano also has a text representation
	ModeId   *string       `json:"modeId" yaml:"modeId"`
	Children []*GpioEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *GpioEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var GpioPreloadRelations []string = []string{}
var GPIO_EVENT_CREATED = "gpio.created"
var GPIO_EVENT_UPDATED = "gpio.updated"
var GPIO_EVENT_DELETED = "gpio.deleted"
var GPIO_EVENTS = []string{
	GPIO_EVENT_CREATED,
	GPIO_EVENT_UPDATED,
	GPIO_EVENT_DELETED,
}

type GpioFieldMap struct {
	Name           workspaces.TranslatedString `yaml:"name"`
	Index          workspaces.TranslatedString `yaml:"index"`
	AnalogFunction workspaces.TranslatedString `yaml:"analogFunction"`
	RtcGpio        workspaces.TranslatedString `yaml:"rtcGpio"`
	Comments       workspaces.TranslatedString `yaml:"comments"`
	Mode           workspaces.TranslatedString `yaml:"mode"`
}

var GpioEntityMetaConfig map[string]int64 = map[string]int64{}
var GpioEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&GpioEntity{}))

func entityGpioFormatter(dto *GpioEntity, query workspaces.QueryDSL) {
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
func GpioMockEntity() *GpioEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &GpioEntity{
		Name:           &stringHolder,
		Index:          &int64Holder,
		AnalogFunction: &stringHolder,
		RtcGpio:        &stringHolder,
		Comments:       &stringHolder,
	}
	return entity
}
func GpioActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := GpioMockEntity()
		_, err := GpioActionCreate(entity, query)
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
func GpioActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*GpioEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &GpioEntity{
		Name:           &tildaRef,
		AnalogFunction: &tildaRef,
		RtcGpio:        &tildaRef,
		Comments:       &tildaRef,
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
func GpioAssociationCreate(dto *GpioEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func GpioRelationContentCreate(dto *GpioEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioRelationContentUpdate(dto *GpioEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioPolyglotCreateHandler(dto *GpioEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func GpioValidator(dto *GpioEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func GpioEntityPreSanitize(dto *GpioEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func GpioEntityBeforeCreateAppend(dto *GpioEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	GpioRecursiveAddUniqueId(dto, query)
}
func GpioRecursiveAddUniqueId(dto *GpioEntity, query workspaces.QueryDSL) {
}
func GpioActionBatchCreateFn(dtos []*GpioEntity, query workspaces.QueryDSL) ([]*GpioEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*GpioEntity{}
		for _, item := range dtos {
			s, err := GpioActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func GpioActionCreateFn(dto *GpioEntity, query workspaces.QueryDSL) (*GpioEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := GpioValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	GpioEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	GpioEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	GpioPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	GpioRelationContentCreate(dto, query)
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
	GpioAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(GPIO_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&GpioEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func GpioActionGetOne(query workspaces.QueryDSL) (*GpioEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioEntity{})
	item, err := workspaces.GetOneEntity[GpioEntity](query, refl)
	entityGpioFormatter(item, query)
	return item, err
}
func GpioActionQuery(query workspaces.QueryDSL) ([]*GpioEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&GpioEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[GpioEntity](query, refl)
	for _, item := range items {
		entityGpioFormatter(item, query)
	}
	return items, meta, err
}
func GpioUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *GpioEntity) (*GpioEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = GPIO_EVENT_UPDATED
	GpioEntityPreSanitize(fields, query)
	var item GpioEntity
	q := dbref.
		Where(&GpioEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	GpioRelationContentUpdate(fields, query)
	GpioPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&GpioEntity{UniqueId: uniqueId}).
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
func GpioActionUpdateFn(query workspaces.QueryDSL, fields *GpioEntity) (*GpioEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := GpioValidator(fields, true); iError != nil {
		return nil, iError
	}
	GpioRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := GpioUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return GpioUpdateExec(dbref, query, fields)
	}
}

var GpioWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire gpios ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := GpioActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func GpioActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioEntity{})
	query.ActionRequires = []string{PERM_ROOT_GPIO_DELETE}
	return workspaces.RemoveEntity[GpioEntity](query, refl)
}
func GpioActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[GpioEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'GpioEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func GpioActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[GpioEntity]) (
	*workspaces.BulkRecordRequest[GpioEntity], *workspaces.IError,
) {
	result := []*GpioEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := GpioActionUpdate(query, record)
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
func (x *GpioEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var GpioEntityMeta = workspaces.TableMetaData{
	EntityName:    "Gpio",
	ExportKey:     "gpios",
	TableNameInDb: "fb_gpio_entities",
	EntityObject:  &GpioEntity{},
	ExportStream:  GpioActionExportT,
	ImportQuery:   GpioActionImport,
}

func GpioActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[GpioEntity](query, GpioActionQuery, GpioPreloadRelations)
}
func GpioActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[GpioEntity](query, GpioActionQuery, GpioPreloadRelations)
}
func GpioActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content GpioEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := GpioActionCreate(&content, query)
	return err
}

var GpioCommonCliFlags = []cli.Flag{
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
		Name:     "index",
		Required: false,
		Usage:    "index",
	},
	&cli.StringFlag{
		Name:     "analog-function",
		Required: false,
		Usage:    "analogFunction",
	},
	&cli.StringFlag{
		Name:     "rtc-gpio",
		Required: false,
		Usage:    "rtcGpio",
	},
	&cli.StringFlag{
		Name:     "comments",
		Required: false,
		Usage:    "comments",
	},
	&cli.StringFlag{
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
}
var GpioCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
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
		Name:        "analogFunction",
		StructField: "AnalogFunction",
		Required:    false,
		Usage:       "analogFunction",
		Type:        "string",
	},
	{
		Name:        "rtcGpio",
		StructField: "RtcGpio",
		Required:    false,
		Usage:       "rtcGpio",
		Type:        "string",
	},
	{
		Name:        "comments",
		StructField: "Comments",
		Required:    false,
		Usage:       "comments",
		Type:        "string",
	},
}
var GpioCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "index",
		Required: false,
		Usage:    "index",
	},
	&cli.StringFlag{
		Name:     "analog-function",
		Required: false,
		Usage:    "analogFunction",
	},
	&cli.StringFlag{
		Name:     "rtc-gpio",
		Required: false,
		Usage:    "rtcGpio",
	},
	&cli.StringFlag{
		Name:     "comments",
		Required: false,
		Usage:    "comments",
	},
	&cli.StringFlag{
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
}
var GpioCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   GpioCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioFromCli(c)
		if entity, err := GpioActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &GpioEntity{}
		for _, item := range GpioCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := GpioActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   GpioCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioFromCli(c)
		if entity, err := GpioActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastGpioFromCli(c *cli.Context) *GpioEntity {
	template := &GpioEntity{}
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
	if c.IsSet("analog-function") {
		value := c.String("analog-function")
		template.AnalogFunction = &value
	}
	if c.IsSet("rtc-gpio") {
		value := c.String("rtc-gpio")
		template.RtcGpio = &value
	}
	if c.IsSet("comments") {
		value := c.String("comments")
		template.Comments = &value
	}
	if c.IsSet("mode-id") {
		value := c.String("mode-id")
		template.ModeId = &value
	}
	return template
}
func GpioSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		GpioActionCreate,
		reflect.ValueOf(&GpioEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func GpioSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		GpioActionCreate,
		reflect.ValueOf(&GpioEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func GpioWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := GpioActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "Gpio", result)
	}
}

var GpioImportExportCommands = []cli.Command{
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
			GpioActionSeeder(query, c.Int("count"))
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
				Value: "gpio-seeder.yml",
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
			GpioActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "gpio-seeder-gpio.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of gpios, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]GpioEntity{}
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
				GpioActionCreate,
				reflect.ValueOf(&GpioEntity{}).Elem(),
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
				GpioActionQuery,
				reflect.ValueOf(&GpioEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"GpioFieldMap.yml",
				GpioPreloadRelations,
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
				GpioActionCreate,
				reflect.ValueOf(&GpioEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var GpioCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(GpioActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&GpioEntity{}).Elem(), GpioActionQuery),
	GpioCreateCmd,
	GpioUpdateCmd,
	GpioCreateInteractiveCmd,
	GpioWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&GpioEntity{}).Elem(), GpioActionRemove),
}

func GpioCliFn() cli.Command {
	GpioCliCommands = append(GpioCliCommands, GpioImportExportCommands...)
	return cli.Command{
		Name:        "gpio",
		Description: "Gpios module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: GpioCliCommands,
	}
}

/**
 *	Override this function on GpioEntityHttp.go,
 *	In order to add your own http
 **/
var AppendGpioRouter = func(r *[]workspaces.Module2Action) {}

func GetGpioModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/gpios",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, GpioActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         GpioActionQuery,
			ResponseEntity: &[]GpioEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpios/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, GpioActionExport)
				},
			},
			Format:         "QUERY",
			Action:         GpioActionExport,
			ResponseEntity: &[]GpioEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpio/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, GpioActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         GpioActionGetOne,
			ResponseEntity: &GpioEntity{},
		},
		{
			Method: "POST",
			Url:    "/gpio",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, GpioActionCreate)
				},
			},
			Action:         GpioActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &GpioEntity{},
			ResponseEntity: &GpioEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpio",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, GpioActionUpdate)
				},
			},
			Action:         GpioActionUpdate,
			RequestEntity:  &GpioEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &GpioEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpios",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, GpioActionBulkUpdate)
				},
			},
			Action:         GpioActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[GpioEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[GpioEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/gpio",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIO_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, GpioActionRemove)
				},
			},
			Action:         GpioActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &GpioEntity{},
		},
	}
	// Append user defined functions
	AppendGpioRouter(&routes)
	return routes
}
func CreateGpioRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetGpioModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, GpioEntityJsonSchema, "gpio-http", "iot")
	workspaces.WriteEntitySchema("GpioEntity", GpioEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_GPIO_DELETE = "root/gpio/delete"
var PERM_ROOT_GPIO_CREATE = "root/gpio/create"
var PERM_ROOT_GPIO_UPDATE = "root/gpio/update"
var PERM_ROOT_GPIO_QUERY = "root/gpio/query"
var PERM_ROOT_GPIO = "root/gpio"
var ALL_GPIO_PERMISSIONS = []string{
	PERM_ROOT_GPIO_DELETE,
	PERM_ROOT_GPIO_CREATE,
	PERM_ROOT_GPIO_UPDATE,
	PERM_ROOT_GPIO_QUERY,
	PERM_ROOT_GPIO,
}
