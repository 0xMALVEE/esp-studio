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
	mocks "github.com/torabian/esp-studio/modules/iot/mocks/ModbusTask"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ModbusTaskEntity struct {
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
	ModbusId *int64 `json:"modbusId" yaml:"modbusId"       `
	// Datenano also has a text representation
	Device *DeviceEntity `json:"device" yaml:"device"    gorm:"foreignKey:DeviceId;references:UniqueId"     `
	// Datenano also has a text representation
	DeviceId       *string                     `json:"deviceId" yaml:"deviceId"`
	ConnectionType *ModbusConnectionTypeEntity `json:"connectionType" yaml:"connectionType"    gorm:"foreignKey:ConnectionTypeId;references:UniqueId"     `
	// Datenano also has a text representation
	ConnectionTypeId *string                   `json:"connectionTypeId" yaml:"connectionTypeId"`
	FunctionCode     *ModbusFunctionCodeEntity `json:"functionCode" yaml:"functionCode"    gorm:"foreignKey:FunctionCodeId;references:UniqueId"     `
	// Datenano also has a text representation
	FunctionCodeId *string `json:"functionCodeId" yaml:"functionCodeId"`
	Register       *int64  `json:"register" yaml:"register"       `
	// Datenano also has a text representation
	WriteInterval *int64 `json:"writeInterval" yaml:"writeInterval"       `
	// Datenano also has a text representation
	ReadInterval *int64 `json:"readInterval" yaml:"readInterval"       `
	// Datenano also has a text representation
	Range *int64 `json:"range" yaml:"range"       `
	// Datenano also has a text representation
	Length *int64 `json:"length" yaml:"length"       `
	// Datenano also has a text representation
	VariableType *ModbusVariableTypeEntity `json:"variableType" yaml:"variableType"    gorm:"foreignKey:VariableTypeId;references:UniqueId"     `
	// Datenano also has a text representation
	VariableTypeId *string             `json:"variableTypeId" yaml:"variableTypeId"`
	Children       []*ModbusTaskEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo       *ModbusTaskEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ModbusTaskPreloadRelations []string = []string{}
var MODBUSTASK_EVENT_CREATED = "modbusTask.created"
var MODBUSTASK_EVENT_UPDATED = "modbusTask.updated"
var MODBUSTASK_EVENT_DELETED = "modbusTask.deleted"
var MODBUSTASK_EVENTS = []string{
	MODBUSTASK_EVENT_CREATED,
	MODBUSTASK_EVENT_UPDATED,
	MODBUSTASK_EVENT_DELETED,
}

type ModbusTaskFieldMap struct {
	Name           workspaces.TranslatedString `yaml:"name"`
	ModbusId       workspaces.TranslatedString `yaml:"modbusId"`
	Device         workspaces.TranslatedString `yaml:"device"`
	ConnectionType workspaces.TranslatedString `yaml:"connectionType"`
	FunctionCode   workspaces.TranslatedString `yaml:"functionCode"`
	Register       workspaces.TranslatedString `yaml:"register"`
	WriteInterval  workspaces.TranslatedString `yaml:"writeInterval"`
	ReadInterval   workspaces.TranslatedString `yaml:"readInterval"`
	Range          workspaces.TranslatedString `yaml:"range"`
	Length         workspaces.TranslatedString `yaml:"length"`
	VariableType   workspaces.TranslatedString `yaml:"variableType"`
}

var ModbusTaskEntityMetaConfig map[string]int64 = map[string]int64{}
var ModbusTaskEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ModbusTaskEntity{}))

func entityModbusTaskFormatter(dto *ModbusTaskEntity, query workspaces.QueryDSL) {
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
func ModbusTaskMockEntity() *ModbusTaskEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ModbusTaskEntity{
		Name:          &stringHolder,
		ModbusId:      &int64Holder,
		Register:      &int64Holder,
		WriteInterval: &int64Holder,
		ReadInterval:  &int64Holder,
		Range:         &int64Holder,
		Length:        &int64Holder,
	}
	return entity
}
func ModbusTaskActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ModbusTaskMockEntity()
		_, err := ModbusTaskActionCreate(entity, query)
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
func ModbusTaskActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ModbusTaskEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ModbusTaskEntity{
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
func ModbusTaskAssociationCreate(dto *ModbusTaskEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ModbusTaskRelationContentCreate(dto *ModbusTaskEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusTaskRelationContentUpdate(dto *ModbusTaskEntity, query workspaces.QueryDSL) error {
	return nil
}
func ModbusTaskPolyglotCreateHandler(dto *ModbusTaskEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ModbusTaskValidator(dto *ModbusTaskEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ModbusTaskEntityPreSanitize(dto *ModbusTaskEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ModbusTaskEntityBeforeCreateAppend(dto *ModbusTaskEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ModbusTaskRecursiveAddUniqueId(dto, query)
}
func ModbusTaskRecursiveAddUniqueId(dto *ModbusTaskEntity, query workspaces.QueryDSL) {
}
func ModbusTaskActionBatchCreateFn(dtos []*ModbusTaskEntity, query workspaces.QueryDSL) ([]*ModbusTaskEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ModbusTaskEntity{}
		for _, item := range dtos {
			s, err := ModbusTaskActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ModbusTaskActionCreateFn(dto *ModbusTaskEntity, query workspaces.QueryDSL) (*ModbusTaskEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ModbusTaskValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ModbusTaskEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ModbusTaskEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ModbusTaskPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ModbusTaskRelationContentCreate(dto, query)
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
	ModbusTaskAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MODBUSTASK_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ModbusTaskEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ModbusTaskActionGetOne(query workspaces.QueryDSL) (*ModbusTaskEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusTaskEntity{})
	item, err := workspaces.GetOneEntity[ModbusTaskEntity](query, refl)
	entityModbusTaskFormatter(item, query)
	return item, err
}
func ModbusTaskActionQuery(query workspaces.QueryDSL) ([]*ModbusTaskEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ModbusTaskEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ModbusTaskEntity](query, refl)
	for _, item := range items {
		entityModbusTaskFormatter(item, query)
	}
	return items, meta, err
}
func ModbusTaskUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ModbusTaskEntity) (*ModbusTaskEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MODBUSTASK_EVENT_UPDATED
	ModbusTaskEntityPreSanitize(fields, query)
	var item ModbusTaskEntity
	q := dbref.
		Where(&ModbusTaskEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ModbusTaskRelationContentUpdate(fields, query)
	ModbusTaskPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ModbusTaskEntity{UniqueId: uniqueId}).
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
func ModbusTaskActionUpdateFn(query workspaces.QueryDSL, fields *ModbusTaskEntity) (*ModbusTaskEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ModbusTaskValidator(fields, true); iError != nil {
		return nil, iError
	}
	ModbusTaskRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ModbusTaskUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ModbusTaskUpdateExec(dbref, query, fields)
	}
}

var ModbusTaskWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire modbustasks ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ModbusTaskActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ModbusTaskActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ModbusTaskEntity{})
	query.ActionRequires = []string{PERM_ROOT_MODBUSTASK_DELETE}
	return workspaces.RemoveEntity[ModbusTaskEntity](query, refl)
}
func ModbusTaskActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ModbusTaskEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ModbusTaskEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ModbusTaskActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ModbusTaskEntity]) (
	*workspaces.BulkRecordRequest[ModbusTaskEntity], *workspaces.IError,
) {
	result := []*ModbusTaskEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ModbusTaskActionUpdate(query, record)
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
func (x *ModbusTaskEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ModbusTaskEntityMeta = workspaces.TableMetaData{
	EntityName:    "ModbusTask",
	ExportKey:     "modbus-tasks",
	TableNameInDb: "fb_modbustask_entities",
	EntityObject:  &ModbusTaskEntity{},
	ExportStream:  ModbusTaskActionExportT,
	ImportQuery:   ModbusTaskActionImport,
}

func ModbusTaskActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ModbusTaskEntity](query, ModbusTaskActionQuery, ModbusTaskPreloadRelations)
}
func ModbusTaskActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ModbusTaskEntity](query, ModbusTaskActionQuery, ModbusTaskPreloadRelations)
}
func ModbusTaskActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ModbusTaskEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ModbusTaskActionCreate(&content, query)
	return err
}

var ModbusTaskCommonCliFlags = []cli.Flag{
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
		Name:     "modbus-id",
		Required: false,
		Usage:    "modbusId",
	},
	&cli.StringFlag{
		Name:     "device-id",
		Required: false,
		Usage:    "device",
	},
	&cli.StringFlag{
		Name:     "connection-type-id",
		Required: false,
		Usage:    "connectionType",
	},
	&cli.StringFlag{
		Name:     "function-code-id",
		Required: false,
		Usage:    "functionCode",
	},
	&cli.Int64Flag{
		Name:     "register",
		Required: false,
		Usage:    "register",
	},
	&cli.Int64Flag{
		Name:     "write-interval",
		Required: false,
		Usage:    "writeInterval",
	},
	&cli.Int64Flag{
		Name:     "read-interval",
		Required: false,
		Usage:    "readInterval",
	},
	&cli.Int64Flag{
		Name:     "range",
		Required: false,
		Usage:    "range",
	},
	&cli.Int64Flag{
		Name:     "length",
		Required: false,
		Usage:    "length",
	},
	&cli.StringFlag{
		Name:     "variable-type-id",
		Required: false,
		Usage:    "variableType",
	},
}
var ModbusTaskCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "modbusId",
		StructField: "ModbusId",
		Required:    false,
		Usage:       "modbusId",
		Type:        "int64",
	},
	{
		Name:        "register",
		StructField: "Register",
		Required:    false,
		Usage:       "register",
		Type:        "int64",
	},
	{
		Name:        "writeInterval",
		StructField: "WriteInterval",
		Required:    false,
		Usage:       "writeInterval",
		Type:        "int64",
	},
	{
		Name:        "readInterval",
		StructField: "ReadInterval",
		Required:    false,
		Usage:       "readInterval",
		Type:        "int64",
	},
	{
		Name:        "range",
		StructField: "Range",
		Required:    false,
		Usage:       "range",
		Type:        "int64",
	},
	{
		Name:        "length",
		StructField: "Length",
		Required:    false,
		Usage:       "length",
		Type:        "int64",
	},
}
var ModbusTaskCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "modbus-id",
		Required: false,
		Usage:    "modbusId",
	},
	&cli.StringFlag{
		Name:     "device-id",
		Required: false,
		Usage:    "device",
	},
	&cli.StringFlag{
		Name:     "connection-type-id",
		Required: false,
		Usage:    "connectionType",
	},
	&cli.StringFlag{
		Name:     "function-code-id",
		Required: false,
		Usage:    "functionCode",
	},
	&cli.Int64Flag{
		Name:     "register",
		Required: false,
		Usage:    "register",
	},
	&cli.Int64Flag{
		Name:     "write-interval",
		Required: false,
		Usage:    "writeInterval",
	},
	&cli.Int64Flag{
		Name:     "read-interval",
		Required: false,
		Usage:    "readInterval",
	},
	&cli.Int64Flag{
		Name:     "range",
		Required: false,
		Usage:    "range",
	},
	&cli.Int64Flag{
		Name:     "length",
		Required: false,
		Usage:    "length",
	},
	&cli.StringFlag{
		Name:     "variable-type-id",
		Required: false,
		Usage:    "variableType",
	},
}
var ModbusTaskCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ModbusTaskCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusTaskFromCli(c)
		if entity, err := ModbusTaskActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusTaskCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ModbusTaskEntity{}
		for _, item := range ModbusTaskCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ModbusTaskActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ModbusTaskUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ModbusTaskCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastModbusTaskFromCli(c)
		if entity, err := ModbusTaskActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastModbusTaskFromCli(c *cli.Context) *ModbusTaskEntity {
	template := &ModbusTaskEntity{}
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
	if c.IsSet("device-id") {
		value := c.String("device-id")
		template.DeviceId = &value
	}
	if c.IsSet("connection-type-id") {
		value := c.String("connection-type-id")
		template.ConnectionTypeId = &value
	}
	if c.IsSet("function-code-id") {
		value := c.String("function-code-id")
		template.FunctionCodeId = &value
	}
	if c.IsSet("variable-type-id") {
		value := c.String("variable-type-id")
		template.VariableTypeId = &value
	}
	return template
}
func ModbusTaskSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusTaskActionCreate,
		reflect.ValueOf(&ModbusTaskEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ModbusTaskImportMocks() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ModbusTaskActionCreate,
		reflect.ValueOf(&ModbusTaskEntity{}).Elem(),
		&mocks.ViewsFs,
		[]string{},
		false,
	)
}
func ModbusTaskWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ModbusTaskActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ModbusTask", result)
	}
}

var ModbusTaskImportExportCommands = []cli.Command{
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
			ModbusTaskActionSeeder(query, c.Int("count"))
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
				Value: "modbus-task-seeder.yml",
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
			ModbusTaskActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "modbus-task-seeder-modbus-task.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of modbus-tasks, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ModbusTaskEntity{}
			workspaces.ReadYamlFile(c.String("file"), data)
			fmt.Println(data)
			return nil
		},
	},
	cli.Command{
		Name:  "mocks",
		Usage: "Prints the list of mocks",
		Action: func(c *cli.Context) error {
			if entity, err := workspaces.GetSeederFilenames(&mocks.ViewsFs, ""); err != nil {
				fmt.Println(err.Error())
			} else {
				f, _ := json.MarshalIndent(entity, "", "  ")
				fmt.Println(string(f))
			}
			return nil
		},
	},
	cli.Command{
		Name:  "msync",
		Usage: "Tries to sync mocks into the system",
		Action: func(c *cli.Context) error {
			workspaces.CommonCliImportEmbedCmd(c,
				ModbusTaskActionCreate,
				reflect.ValueOf(&ModbusTaskEntity{}).Elem(),
				&mocks.ViewsFs,
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
				ModbusTaskActionCreate,
				reflect.ValueOf(&ModbusTaskEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ModbusTaskCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ModbusTaskActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ModbusTaskEntity{}).Elem(), ModbusTaskActionQuery),
	ModbusTaskCreateCmd,
	ModbusTaskUpdateCmd,
	ModbusTaskCreateInteractiveCmd,
	ModbusTaskWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ModbusTaskEntity{}).Elem(), ModbusTaskActionRemove),
}

func ModbusTaskCliFn() cli.Command {
	ModbusTaskCliCommands = append(ModbusTaskCliCommands, ModbusTaskImportExportCommands...)
	return cli.Command{
		Name:        "modbusTask",
		Description: "ModbusTasks module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ModbusTaskCliCommands,
	}
}

/**
 *	Override this function on ModbusTaskEntityHttp.go,
 *	In order to add your own http
 **/
var AppendModbusTaskRouter = func(r *[]workspaces.Module2Action) {}

func GetModbusTaskModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/modbus-tasks",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ModbusTaskActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ModbusTaskActionQuery,
			ResponseEntity: &[]ModbusTaskEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-tasks/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ModbusTaskActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ModbusTaskActionExport,
			ResponseEntity: &[]ModbusTaskEntity{},
		},
		{
			Method: "GET",
			Url:    "/modbus-task/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ModbusTaskActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ModbusTaskActionGetOne,
			ResponseEntity: &ModbusTaskEntity{},
		},
		{
			Method: "POST",
			Url:    "/modbus-task",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ModbusTaskActionCreate)
				},
			},
			Action:         ModbusTaskActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ModbusTaskEntity{},
			ResponseEntity: &ModbusTaskEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-task",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ModbusTaskActionUpdate)
				},
			},
			Action:         ModbusTaskActionUpdate,
			RequestEntity:  &ModbusTaskEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ModbusTaskEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/modbus-tasks",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ModbusTaskActionBulkUpdate)
				},
			},
			Action:         ModbusTaskActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ModbusTaskEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ModbusTaskEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/modbus-task",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MODBUSTASK_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ModbusTaskActionRemove)
				},
			},
			Action:         ModbusTaskActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ModbusTaskEntity{},
		},
	}
	// Append user defined functions
	AppendModbusTaskRouter(&routes)
	return routes
}
func CreateModbusTaskRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetModbusTaskModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ModbusTaskEntityJsonSchema, "modbus-task-http", "iot")
	workspaces.WriteEntitySchema("ModbusTaskEntity", ModbusTaskEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MODBUSTASK_DELETE = "root/modbustask/delete"
var PERM_ROOT_MODBUSTASK_CREATE = "root/modbustask/create"
var PERM_ROOT_MODBUSTASK_UPDATE = "root/modbustask/update"
var PERM_ROOT_MODBUSTASK_QUERY = "root/modbustask/query"
var PERM_ROOT_MODBUSTASK = "root/modbustask"
var ALL_MODBUSTASK_PERMISSIONS = []string{
	PERM_ROOT_MODBUSTASK_DELETE,
	PERM_ROOT_MODBUSTASK_CREATE,
	PERM_ROOT_MODBUSTASK_UPDATE,
	PERM_ROOT_MODBUSTASK_QUERY,
	PERM_ROOT_MODBUSTASK,
}
