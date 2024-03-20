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

type FlowValueEntity struct {
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
	ConnectionId     *string `json:"connectionId" yaml:"connectionId"       `
	// Datenano also has a text representation
	ValueInt *int64 `json:"valueInt" yaml:"valueInt"       `
	// Datenano also has a text representation
	ValueString *string `json:"valueString" yaml:"valueString"       `
	// Datenano also has a text representation
	ValueFloat *float64 `json:"valueFloat" yaml:"valueFloat"       `
	// Datenano also has a text representation
	ValueType *int64 `json:"valueType" yaml:"valueType"       `
	// Datenano also has a text representation
	Children []*FlowValueEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *FlowValueEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var FlowValuePreloadRelations []string = []string{}
var FLOWVALUE_EVENT_CREATED = "flowValue.created"
var FLOWVALUE_EVENT_UPDATED = "flowValue.updated"
var FLOWVALUE_EVENT_DELETED = "flowValue.deleted"
var FLOWVALUE_EVENTS = []string{
	FLOWVALUE_EVENT_CREATED,
	FLOWVALUE_EVENT_UPDATED,
	FLOWVALUE_EVENT_DELETED,
}

type FlowValueFieldMap struct {
	ConnectionId workspaces.TranslatedString `yaml:"connectionId"`
	ValueInt     workspaces.TranslatedString `yaml:"valueInt"`
	ValueString  workspaces.TranslatedString `yaml:"valueString"`
	ValueFloat   workspaces.TranslatedString `yaml:"valueFloat"`
	ValueType    workspaces.TranslatedString `yaml:"valueType"`
}

var FlowValueEntityMetaConfig map[string]int64 = map[string]int64{}
var FlowValueEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&FlowValueEntity{}))

func entityFlowValueFormatter(dto *FlowValueEntity, query workspaces.QueryDSL) {
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
func FlowValueMockEntity() *FlowValueEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &FlowValueEntity{
		ConnectionId: &stringHolder,
		ValueInt:     &int64Holder,
		ValueString:  &stringHolder,
		ValueFloat:   &float64Holder,
		ValueType:    &int64Holder,
	}
	return entity
}
func FlowValueActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := FlowValueMockEntity()
		_, err := FlowValueActionCreate(entity, query)
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
func FlowValueActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*FlowValueEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &FlowValueEntity{
		ConnectionId: &tildaRef,
		ValueString:  &tildaRef,
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
func FlowValueAssociationCreate(dto *FlowValueEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func FlowValueRelationContentCreate(dto *FlowValueEntity, query workspaces.QueryDSL) error {
	return nil
}
func FlowValueRelationContentUpdate(dto *FlowValueEntity, query workspaces.QueryDSL) error {
	return nil
}
func FlowValuePolyglotCreateHandler(dto *FlowValueEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func FlowValueValidator(dto *FlowValueEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func FlowValueEntityPreSanitize(dto *FlowValueEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func FlowValueEntityBeforeCreateAppend(dto *FlowValueEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	FlowValueRecursiveAddUniqueId(dto, query)
}
func FlowValueRecursiveAddUniqueId(dto *FlowValueEntity, query workspaces.QueryDSL) {
}
func FlowValueActionBatchCreateFn(dtos []*FlowValueEntity, query workspaces.QueryDSL) ([]*FlowValueEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*FlowValueEntity{}
		for _, item := range dtos {
			s, err := FlowValueActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func FlowValueActionCreateFn(dto *FlowValueEntity, query workspaces.QueryDSL) (*FlowValueEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := FlowValueValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	FlowValueEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	FlowValueEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	FlowValuePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	FlowValueRelationContentCreate(dto, query)
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
	FlowValueAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(FLOWVALUE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&FlowValueEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func FlowValueActionGetOne(query workspaces.QueryDSL) (*FlowValueEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&FlowValueEntity{})
	item, err := workspaces.GetOneEntity[FlowValueEntity](query, refl)
	entityFlowValueFormatter(item, query)
	return item, err
}
func FlowValueActionQuery(query workspaces.QueryDSL) ([]*FlowValueEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&FlowValueEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[FlowValueEntity](query, refl)
	for _, item := range items {
		entityFlowValueFormatter(item, query)
	}
	return items, meta, err
}
func FlowValueUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *FlowValueEntity) (*FlowValueEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = FLOWVALUE_EVENT_UPDATED
	FlowValueEntityPreSanitize(fields, query)
	var item FlowValueEntity
	q := dbref.
		Where(&FlowValueEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	FlowValueRelationContentUpdate(fields, query)
	FlowValuePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&FlowValueEntity{UniqueId: uniqueId}).
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
func FlowValueActionUpdateFn(query workspaces.QueryDSL, fields *FlowValueEntity) (*FlowValueEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := FlowValueValidator(fields, true); iError != nil {
		return nil, iError
	}
	FlowValueRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := FlowValueUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return FlowValueUpdateExec(dbref, query, fields)
	}
}

var FlowValueWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire flowvalues ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := FlowValueActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func FlowValueActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&FlowValueEntity{})
	query.ActionRequires = []string{PERM_ROOT_FLOWVALUE_DELETE}
	return workspaces.RemoveEntity[FlowValueEntity](query, refl)
}
func FlowValueActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[FlowValueEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'FlowValueEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func FlowValueActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[FlowValueEntity]) (
	*workspaces.BulkRecordRequest[FlowValueEntity], *workspaces.IError,
) {
	result := []*FlowValueEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := FlowValueActionUpdate(query, record)
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
func (x *FlowValueEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var FlowValueEntityMeta = workspaces.TableMetaData{
	EntityName:    "FlowValue",
	ExportKey:     "flow-values",
	TableNameInDb: "fb_flowvalue_entities",
	EntityObject:  &FlowValueEntity{},
	ExportStream:  FlowValueActionExportT,
	ImportQuery:   FlowValueActionImport,
}

func FlowValueActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[FlowValueEntity](query, FlowValueActionQuery, FlowValuePreloadRelations)
}
func FlowValueActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[FlowValueEntity](query, FlowValueActionQuery, FlowValuePreloadRelations)
}
func FlowValueActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content FlowValueEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := FlowValueActionCreate(&content, query)
	return err
}

var FlowValueCommonCliFlags = []cli.Flag{
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
		Name:     "connection-id",
		Required: false,
		Usage:    "connectionId",
	},
	&cli.Int64Flag{
		Name:     "value-int",
		Required: false,
		Usage:    "valueInt",
	},
	&cli.StringFlag{
		Name:     "value-string",
		Required: false,
		Usage:    "valueString",
	},
	&cli.Float64Flag{
		Name:     "value-float",
		Required: false,
		Usage:    "valueFloat",
	},
	&cli.Int64Flag{
		Name:     "value-type",
		Required: false,
		Usage:    "valueType",
	},
}
var FlowValueCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "connectionId",
		StructField: "ConnectionId",
		Required:    false,
		Usage:       "connectionId",
		Type:        "string",
	},
	{
		Name:        "valueInt",
		StructField: "ValueInt",
		Required:    false,
		Usage:       "valueInt",
		Type:        "int64",
	},
	{
		Name:        "valueString",
		StructField: "ValueString",
		Required:    false,
		Usage:       "valueString",
		Type:        "string",
	},
	{
		Name:        "valueFloat",
		StructField: "ValueFloat",
		Required:    false,
		Usage:       "valueFloat",
		Type:        "float64",
	},
	{
		Name:        "valueType",
		StructField: "ValueType",
		Required:    false,
		Usage:       "valueType",
		Type:        "int64",
	},
}
var FlowValueCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "connection-id",
		Required: false,
		Usage:    "connectionId",
	},
	&cli.Int64Flag{
		Name:     "value-int",
		Required: false,
		Usage:    "valueInt",
	},
	&cli.StringFlag{
		Name:     "value-string",
		Required: false,
		Usage:    "valueString",
	},
	&cli.Float64Flag{
		Name:     "value-float",
		Required: false,
		Usage:    "valueFloat",
	},
	&cli.Int64Flag{
		Name:     "value-type",
		Required: false,
		Usage:    "valueType",
	},
}
var FlowValueCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   FlowValueCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastFlowValueFromCli(c)
		if entity, err := FlowValueActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var FlowValueCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &FlowValueEntity{}
		for _, item := range FlowValueCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := FlowValueActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var FlowValueUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   FlowValueCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastFlowValueFromCli(c)
		if entity, err := FlowValueActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastFlowValueFromCli(c *cli.Context) *FlowValueEntity {
	template := &FlowValueEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("connection-id") {
		value := c.String("connection-id")
		template.ConnectionId = &value
	}
	if c.IsSet("value-string") {
		value := c.String("value-string")
		template.ValueString = &value
	}
	return template
}
func FlowValueSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		FlowValueActionCreate,
		reflect.ValueOf(&FlowValueEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func FlowValueWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := FlowValueActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "FlowValue", result)
	}
}

var FlowValueImportExportCommands = []cli.Command{
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
			FlowValueActionSeeder(query, c.Int("count"))
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
				Value: "flow-value-seeder.yml",
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
			FlowValueActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "flow-value-seeder-flow-value.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of flow-values, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]FlowValueEntity{}
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
				FlowValueActionCreate,
				reflect.ValueOf(&FlowValueEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var FlowValueCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(FlowValueActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&FlowValueEntity{}).Elem(), FlowValueActionQuery),
	FlowValueCreateCmd,
	FlowValueUpdateCmd,
	FlowValueCreateInteractiveCmd,
	FlowValueWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&FlowValueEntity{}).Elem(), FlowValueActionRemove),
}

func FlowValueCliFn() cli.Command {
	FlowValueCliCommands = append(FlowValueCliCommands, FlowValueImportExportCommands...)
	return cli.Command{
		Name:        "flowValue",
		Description: "FlowValues module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: FlowValueCliCommands,
	}
}

/**
 *	Override this function on FlowValueEntityHttp.go,
 *	In order to add your own http
 **/
var AppendFlowValueRouter = func(r *[]workspaces.Module2Action) {}

func GetFlowValueModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/flow-values",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, FlowValueActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         FlowValueActionQuery,
			ResponseEntity: &[]FlowValueEntity{},
		},
		{
			Method: "GET",
			Url:    "/flow-values/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, FlowValueActionExport)
				},
			},
			Format:         "QUERY",
			Action:         FlowValueActionExport,
			ResponseEntity: &[]FlowValueEntity{},
		},
		{
			Method: "GET",
			Url:    "/flow-value/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, FlowValueActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         FlowValueActionGetOne,
			ResponseEntity: &FlowValueEntity{},
		},
		{
			Method: "POST",
			Url:    "/flow-value",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, FlowValueActionCreate)
				},
			},
			Action:         FlowValueActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &FlowValueEntity{},
			ResponseEntity: &FlowValueEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/flow-value",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, FlowValueActionUpdate)
				},
			},
			Action:         FlowValueActionUpdate,
			RequestEntity:  &FlowValueEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &FlowValueEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/flow-values",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, FlowValueActionBulkUpdate)
				},
			},
			Action:         FlowValueActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[FlowValueEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[FlowValueEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/flow-value",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_FLOWVALUE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, FlowValueActionRemove)
				},
			},
			Action:         FlowValueActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &FlowValueEntity{},
		},
	}
	// Append user defined functions
	AppendFlowValueRouter(&routes)
	return routes
}
func CreateFlowValueRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetFlowValueModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, FlowValueEntityJsonSchema, "flow-value-http", "iot")
	workspaces.WriteEntitySchema("FlowValueEntity", FlowValueEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_FLOWVALUE_DELETE = "root/flowvalue/delete"
var PERM_ROOT_FLOWVALUE_CREATE = "root/flowvalue/create"
var PERM_ROOT_FLOWVALUE_UPDATE = "root/flowvalue/update"
var PERM_ROOT_FLOWVALUE_QUERY = "root/flowvalue/query"
var PERM_ROOT_FLOWVALUE = "root/flowvalue"
var ALL_FLOWVALUE_PERMISSIONS = []string{
	PERM_ROOT_FLOWVALUE_DELETE,
	PERM_ROOT_FLOWVALUE_CREATE,
	PERM_ROOT_FLOWVALUE_UPDATE,
	PERM_ROOT_FLOWVALUE_QUERY,
	PERM_ROOT_FLOWVALUE,
}
