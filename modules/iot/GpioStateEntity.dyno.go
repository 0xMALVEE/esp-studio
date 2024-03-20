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
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type GpioStateEntity struct {
	Visibility       *string         `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string         `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string         `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string         `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string          `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string         `json:"userId,omitempty" yaml:"userId"`
	Rank             int64           `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64           `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64           `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string          `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string          `json:"updatedFormatted,omitempty" sql:"-"`
	GpioMode         *GpioModeEntity `json:"gpioMode" yaml:"gpioMode"    gorm:"foreignKey:GpioModeId;references:UniqueId"     `
	// Datenano also has a text representation
	GpioModeId        *string `json:"gpioModeId" yaml:"gpioModeId"`
	GpioIndexSnapshot *int64  `json:"gpioIndexSnapshot" yaml:"gpioIndexSnapshot"       `
	// Datenano also has a text representation
	GpioModeSnapshot *int64 `json:"gpioModeSnapshot" yaml:"gpioModeSnapshot"       `
	// Datenano also has a text representation
	GpioValueSnapshot *int64 `json:"gpioValueSnapshot" yaml:"gpioValueSnapshot"       `
	// Datenano also has a text representation
	Gpio *GpioEntity `json:"gpio" yaml:"gpio"    gorm:"foreignKey:GpioId;references:UniqueId"     `
	// Datenano also has a text representation
	GpioId   *string            `json:"gpioId" yaml:"gpioId"`
	Children []*GpioStateEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *GpioStateEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var GpioStatePreloadRelations []string = []string{}
var GPIOSTATE_EVENT_CREATED = "gpioState.created"
var GPIOSTATE_EVENT_UPDATED = "gpioState.updated"
var GPIOSTATE_EVENT_DELETED = "gpioState.deleted"
var GPIOSTATE_EVENTS = []string{
	GPIOSTATE_EVENT_CREATED,
	GPIOSTATE_EVENT_UPDATED,
	GPIOSTATE_EVENT_DELETED,
}

type GpioStateFieldMap struct {
	GpioMode          workspaces.TranslatedString `yaml:"gpioMode"`
	GpioIndexSnapshot workspaces.TranslatedString `yaml:"gpioIndexSnapshot"`
	GpioModeSnapshot  workspaces.TranslatedString `yaml:"gpioModeSnapshot"`
	GpioValueSnapshot workspaces.TranslatedString `yaml:"gpioValueSnapshot"`
	Gpio              workspaces.TranslatedString `yaml:"gpio"`
}

var GpioStateEntityMetaConfig map[string]int64 = map[string]int64{}
var GpioStateEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&GpioStateEntity{}))

func entityGpioStateFormatter(dto *GpioStateEntity, query workspaces.QueryDSL) {
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
func GpioStateMockEntity() *GpioStateEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &GpioStateEntity{
		GpioIndexSnapshot: &int64Holder,
		GpioModeSnapshot:  &int64Holder,
		GpioValueSnapshot: &int64Holder,
	}
	return entity
}
func GpioStateActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := GpioStateMockEntity()
		_, err := GpioStateActionCreate(entity, query)
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
func GpioStateActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*GpioStateEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &GpioStateEntity{}
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
func GpioStateAssociationCreate(dto *GpioStateEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func GpioStateRelationContentCreate(dto *GpioStateEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioStateRelationContentUpdate(dto *GpioStateEntity, query workspaces.QueryDSL) error {
	return nil
}
func GpioStatePolyglotCreateHandler(dto *GpioStateEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func GpioStateValidator(dto *GpioStateEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func GpioStateEntityPreSanitize(dto *GpioStateEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func GpioStateEntityBeforeCreateAppend(dto *GpioStateEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	GpioStateRecursiveAddUniqueId(dto, query)
}
func GpioStateRecursiveAddUniqueId(dto *GpioStateEntity, query workspaces.QueryDSL) {
}
func GpioStateActionBatchCreateFn(dtos []*GpioStateEntity, query workspaces.QueryDSL) ([]*GpioStateEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*GpioStateEntity{}
		for _, item := range dtos {
			s, err := GpioStateActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func GpioStateActionCreateFn(dto *GpioStateEntity, query workspaces.QueryDSL) (*GpioStateEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := GpioStateValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	GpioStateEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	GpioStateEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	GpioStatePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	GpioStateRelationContentCreate(dto, query)
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
	GpioStateAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(GPIOSTATE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&GpioStateEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func GpioStateActionGetOne(query workspaces.QueryDSL) (*GpioStateEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioStateEntity{})
	item, err := workspaces.GetOneEntity[GpioStateEntity](query, refl)
	entityGpioStateFormatter(item, query)
	return item, err
}
func GpioStateActionQuery(query workspaces.QueryDSL) ([]*GpioStateEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&GpioStateEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[GpioStateEntity](query, refl)
	for _, item := range items {
		entityGpioStateFormatter(item, query)
	}
	return items, meta, err
}
func GpioStateUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *GpioStateEntity) (*GpioStateEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = GPIOSTATE_EVENT_UPDATED
	GpioStateEntityPreSanitize(fields, query)
	var item GpioStateEntity
	q := dbref.
		Where(&GpioStateEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	GpioStateRelationContentUpdate(fields, query)
	GpioStatePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&GpioStateEntity{UniqueId: uniqueId}).
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
func GpioStateActionUpdateFn(query workspaces.QueryDSL, fields *GpioStateEntity) (*GpioStateEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := GpioStateValidator(fields, true); iError != nil {
		return nil, iError
	}
	GpioStateRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := GpioStateUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return GpioStateUpdateExec(dbref, query, fields)
	}
}

var GpioStateWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire gpiostates ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := GpioStateActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func GpioStateActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&GpioStateEntity{})
	query.ActionRequires = []string{PERM_ROOT_GPIOSTATE_DELETE}
	return workspaces.RemoveEntity[GpioStateEntity](query, refl)
}
func GpioStateActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[GpioStateEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'GpioStateEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func GpioStateActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[GpioStateEntity]) (
	*workspaces.BulkRecordRequest[GpioStateEntity], *workspaces.IError,
) {
	result := []*GpioStateEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := GpioStateActionUpdate(query, record)
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
func (x *GpioStateEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var GpioStateEntityMeta = workspaces.TableMetaData{
	EntityName:    "GpioState",
	ExportKey:     "gpio-states",
	TableNameInDb: "fb_gpiostate_entities",
	EntityObject:  &GpioStateEntity{},
	ExportStream:  GpioStateActionExportT,
	ImportQuery:   GpioStateActionImport,
}

func GpioStateActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[GpioStateEntity](query, GpioStateActionQuery, GpioStatePreloadRelations)
}
func GpioStateActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[GpioStateEntity](query, GpioStateActionQuery, GpioStatePreloadRelations)
}
func GpioStateActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content GpioStateEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := GpioStateActionCreate(&content, query)
	return err
}

var GpioStateCommonCliFlags = []cli.Flag{
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
		Name:     "gpio-mode-id",
		Required: false,
		Usage:    "gpioMode",
	},
	&cli.Int64Flag{
		Name:     "gpio-index-snapshot",
		Required: false,
		Usage:    "gpioIndexSnapshot",
	},
	&cli.Int64Flag{
		Name:     "gpio-mode-snapshot",
		Required: false,
		Usage:    "gpioModeSnapshot",
	},
	&cli.Int64Flag{
		Name:     "gpio-value-snapshot",
		Required: false,
		Usage:    "gpioValueSnapshot",
	},
	&cli.StringFlag{
		Name:     "gpio-id",
		Required: false,
		Usage:    "gpio",
	},
}
var GpioStateCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "gpioIndexSnapshot",
		StructField: "GpioIndexSnapshot",
		Required:    false,
		Usage:       "gpioIndexSnapshot",
		Type:        "int64",
	},
	{
		Name:        "gpioModeSnapshot",
		StructField: "GpioModeSnapshot",
		Required:    false,
		Usage:       "gpioModeSnapshot",
		Type:        "int64",
	},
	{
		Name:        "gpioValueSnapshot",
		StructField: "GpioValueSnapshot",
		Required:    false,
		Usage:       "gpioValueSnapshot",
		Type:        "int64",
	},
}
var GpioStateCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "gpio-mode-id",
		Required: false,
		Usage:    "gpioMode",
	},
	&cli.Int64Flag{
		Name:     "gpio-index-snapshot",
		Required: false,
		Usage:    "gpioIndexSnapshot",
	},
	&cli.Int64Flag{
		Name:     "gpio-mode-snapshot",
		Required: false,
		Usage:    "gpioModeSnapshot",
	},
	&cli.Int64Flag{
		Name:     "gpio-value-snapshot",
		Required: false,
		Usage:    "gpioValueSnapshot",
	},
	&cli.StringFlag{
		Name:     "gpio-id",
		Required: false,
		Usage:    "gpio",
	},
}
var GpioStateCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   GpioStateCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioStateFromCli(c)
		if entity, err := GpioStateActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioStateCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &GpioStateEntity{}
		for _, item := range GpioStateCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := GpioStateActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var GpioStateUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   GpioStateCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastGpioStateFromCli(c)
		if entity, err := GpioStateActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastGpioStateFromCli(c *cli.Context) *GpioStateEntity {
	template := &GpioStateEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("gpio-mode-id") {
		value := c.String("gpio-mode-id")
		template.GpioModeId = &value
	}
	if c.IsSet("gpio-id") {
		value := c.String("gpio-id")
		template.GpioId = &value
	}
	return template
}
func GpioStateSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		GpioStateActionCreate,
		reflect.ValueOf(&GpioStateEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func GpioStateWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := GpioStateActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "GpioState", result)
	}
}

var GpioStateImportExportCommands = []cli.Command{
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
			GpioStateActionSeeder(query, c.Int("count"))
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
				Value: "gpio-state-seeder.yml",
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
			GpioStateActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "gpio-state-seeder-gpio-state.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of gpio-states, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]GpioStateEntity{}
			workspaces.ReadYamlFile(c.String("file"), data)
			fmt.Println(data)
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
				GpioStateActionCreate,
				reflect.ValueOf(&GpioStateEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var GpioStateCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(GpioStateActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&GpioStateEntity{}).Elem(), GpioStateActionQuery),
	GpioStateCreateCmd,
	GpioStateUpdateCmd,
	GpioStateCreateInteractiveCmd,
	GpioStateWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&GpioStateEntity{}).Elem(), GpioStateActionRemove),
}

func GpioStateCliFn() cli.Command {
	GpioStateCliCommands = append(GpioStateCliCommands, GpioStateImportExportCommands...)
	return cli.Command{
		Name:        "gpioState",
		Description: "GpioStates module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: GpioStateCliCommands,
	}
}

/**
 *	Override this function on GpioStateEntityHttp.go,
 *	In order to add your own http
 **/
var AppendGpioStateRouter = func(r *[]workspaces.Module2Action) {}

func GetGpioStateModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/gpio-states",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, GpioStateActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         GpioStateActionQuery,
			ResponseEntity: &[]GpioStateEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpio-states/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, GpioStateActionExport)
				},
			},
			Format:         "QUERY",
			Action:         GpioStateActionExport,
			ResponseEntity: &[]GpioStateEntity{},
		},
		{
			Method: "GET",
			Url:    "/gpio-state/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, GpioStateActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         GpioStateActionGetOne,
			ResponseEntity: &GpioStateEntity{},
		},
		{
			Method: "POST",
			Url:    "/gpio-state",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, GpioStateActionCreate)
				},
			},
			Action:         GpioStateActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &GpioStateEntity{},
			ResponseEntity: &GpioStateEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpio-state",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, GpioStateActionUpdate)
				},
			},
			Action:         GpioStateActionUpdate,
			RequestEntity:  &GpioStateEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &GpioStateEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/gpio-states",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, GpioStateActionBulkUpdate)
				},
			},
			Action:         GpioStateActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[GpioStateEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[GpioStateEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/gpio-state",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_GPIOSTATE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, GpioStateActionRemove)
				},
			},
			Action:         GpioStateActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &GpioStateEntity{},
		},
	}
	// Append user defined functions
	AppendGpioStateRouter(&routes)
	return routes
}
func CreateGpioStateRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetGpioStateModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, GpioStateEntityJsonSchema, "gpio-state-http", "iot")
	workspaces.WriteEntitySchema("GpioStateEntity", GpioStateEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_GPIOSTATE_DELETE = "root/gpiostate/delete"
var PERM_ROOT_GPIOSTATE_CREATE = "root/gpiostate/create"
var PERM_ROOT_GPIOSTATE_UPDATE = "root/gpiostate/update"
var PERM_ROOT_GPIOSTATE_QUERY = "root/gpiostate/query"
var PERM_ROOT_GPIOSTATE = "root/gpiostate"
var ALL_GPIOSTATE_PERMISSIONS = []string{
	PERM_ROOT_GPIOSTATE_DELETE,
	PERM_ROOT_GPIOSTATE_CREATE,
	PERM_ROOT_GPIOSTATE_UPDATE,
	PERM_ROOT_GPIOSTATE_QUERY,
	PERM_ROOT_GPIOSTATE,
}
