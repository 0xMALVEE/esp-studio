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
	mocks "github.com/torabian/esp-studio/modules/iot/mocks/Device"
	queries "github.com/torabian/esp-studio/modules/iot/queries"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type DeviceDeviceModbusConfig struct {
	Visibility       *string                       `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string                       `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string                       `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string                       `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string                        `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string                       `json:"userId,omitempty" yaml:"userId"`
	Rank             int64                         `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64                         `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64                         `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string                        `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string                        `json:"updatedFormatted,omitempty" sql:"-"`
	Mode             *ModbusTransmissionModeEntity `json:"mode" yaml:"mode"    gorm:"foreignKey:ModeId;references:UniqueId"     `
	// Datenano also has a text representation
	ModeId   *string `json:"modeId" yaml:"modeId"`
	BaudRate *int64  `json:"baudRate" yaml:"baudRate"       `
	// Datenano also has a text representation
	DataBits *int64 `json:"dataBits" yaml:"dataBits"       `
	// Datenano also has a text representation
	Parity *int64 `json:"parity" yaml:"parity"       `
	// Datenano also has a text representation
	StopBit *int64 `json:"stopBit" yaml:"stopBit"       `
	// Datenano also has a text representation
	Timeout *int64 `json:"timeout" yaml:"timeout"       `
	// Datenano also has a text representation
	LinkedTo *DeviceEntity `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

func (x *DeviceDeviceModbusConfig) RootObjectName() string {
	return "DeviceEntity"
}

type DeviceEntity struct {
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
	Model *string `json:"model" yaml:"model"       `
	// Datenano also has a text representation
	Ip *string `json:"ip" yaml:"ip"  validate:"ip"       `
	// Datenano also has a text representation
	WifiUser *string `json:"wifiUser" yaml:"wifiUser"       `
	// Datenano also has a text representation
	WifiPassword *string `json:"wifiPassword" yaml:"wifiPassword"       `
	// Datenano also has a text representation
	SecurityType *string `json:"securityType" yaml:"securityType"       `
	// Datenano also has a text representation
	Type *DeviceTypeEntity `json:"type" yaml:"type"    gorm:"foreignKey:TypeId;references:UniqueId"     `
	// Datenano also has a text representation
	TypeId             *string                   `json:"typeId" yaml:"typeId"`
	DeviceModbusConfig *DeviceDeviceModbusConfig `json:"deviceModbusConfig" yaml:"deviceModbusConfig"    gorm:"foreignKey:LinkerId;references:UniqueId"     `
	// Datenano also has a text representation
	Translations []*DeviceEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*DeviceEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *DeviceEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var DevicePreloadRelations []string = []string{}
var DEVICE_EVENT_CREATED = "device.created"
var DEVICE_EVENT_UPDATED = "device.updated"
var DEVICE_EVENT_DELETED = "device.deleted"
var DEVICE_EVENTS = []string{
	DEVICE_EVENT_CREATED,
	DEVICE_EVENT_UPDATED,
	DEVICE_EVENT_DELETED,
}

type DeviceFieldMap struct {
	Name               workspaces.TranslatedString `yaml:"name"`
	Model              workspaces.TranslatedString `yaml:"model"`
	Ip                 workspaces.TranslatedString `yaml:"ip"`
	WifiUser           workspaces.TranslatedString `yaml:"wifiUser"`
	WifiPassword       workspaces.TranslatedString `yaml:"wifiPassword"`
	SecurityType       workspaces.TranslatedString `yaml:"securityType"`
	Type               workspaces.TranslatedString `yaml:"type"`
	DeviceModbusConfig workspaces.TranslatedString `yaml:"deviceModbusConfig"`
}

var DeviceEntityMetaConfig map[string]int64 = map[string]int64{}
var DeviceEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&DeviceEntity{}))

type DeviceEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func DeviceDeviceModbusConfigActionCreate(
	dto *DeviceDeviceModbusConfig,
	query workspaces.QueryDSL,
) (*DeviceDeviceModbusConfig, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DeviceDeviceModbusConfigActionUpdate(
	query workspaces.QueryDSL,
	dto *DeviceDeviceModbusConfig,
) (*DeviceDeviceModbusConfig, *workspaces.IError) {
	dto.LinkerId = &query.LinkerId
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}
	query.Tx = dbref
	err := dbref.UpdateColumns(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}
	return dto, nil
}
func DeviceDeviceModbusConfigActionGetOne(
	query workspaces.QueryDSL,
) (*DeviceDeviceModbusConfig, *workspaces.IError) {
	refl := reflect.ValueOf(&DeviceDeviceModbusConfig{})
	item, err := workspaces.GetOneEntity[DeviceDeviceModbusConfig](query, refl)
	return item, err
}
func entityDeviceFormatter(dto *DeviceEntity, query workspaces.QueryDSL) {
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
func DeviceMockEntity() *DeviceEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &DeviceEntity{
		Name:         &stringHolder,
		Model:        &stringHolder,
		Ip:           &stringHolder,
		WifiUser:     &stringHolder,
		WifiPassword: &stringHolder,
		SecurityType: &stringHolder,
	}
	return entity
}
func DeviceActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := DeviceMockEntity()
		_, err := DeviceActionCreate(entity, query)
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
func (x *DeviceEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func DeviceActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*DeviceEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &DeviceEntity{
		Name:               &tildaRef,
		Model:              &tildaRef,
		Ip:                 &tildaRef,
		WifiUser:           &tildaRef,
		WifiPassword:       &tildaRef,
		SecurityType:       &tildaRef,
		DeviceModbusConfig: &DeviceDeviceModbusConfig{},
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
func DeviceAssociationCreate(dto *DeviceEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func DeviceRelationContentCreate(dto *DeviceEntity, query workspaces.QueryDSL) error {
	return nil
}
func DeviceRelationContentUpdate(dto *DeviceEntity, query workspaces.QueryDSL) error {
	return nil
}
func DevicePolyglotCreateHandler(dto *DeviceEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &DeviceEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func DeviceValidator(dto *DeviceEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func DeviceEntityPreSanitize(dto *DeviceEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func DeviceEntityBeforeCreateAppend(dto *DeviceEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	DeviceRecursiveAddUniqueId(dto, query)
}
func DeviceRecursiveAddUniqueId(dto *DeviceEntity, query workspaces.QueryDSL) {
	if dto.DeviceModbusConfig != nil {
		dto.DeviceModbusConfig.UniqueId = workspaces.UUID()
	}
}
func DeviceActionBatchCreateFn(dtos []*DeviceEntity, query workspaces.QueryDSL) ([]*DeviceEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*DeviceEntity{}
		for _, item := range dtos {
			s, err := DeviceActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func DeviceActionCreateFn(dto *DeviceEntity, query workspaces.QueryDSL) (*DeviceEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := DeviceValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	DeviceEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	DeviceEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	DevicePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	DeviceRelationContentCreate(dto, query)
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
	DeviceAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(DEVICE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&DeviceEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func DeviceActionGetOne(query workspaces.QueryDSL) (*DeviceEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&DeviceEntity{})
	item, err := workspaces.GetOneEntity[DeviceEntity](query, refl)
	entityDeviceFormatter(item, query)
	return item, err
}
func DeviceActionQuery(query workspaces.QueryDSL) ([]*DeviceEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&DeviceEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[DeviceEntity](query, refl)
	for _, item := range items {
		entityDeviceFormatter(item, query)
	}
	return items, meta, err
}
func (dto *DeviceEntity) Size() int {
	var size int = len(dto.Children)
	for _, c := range dto.Children {
		size += c.Size()
	}
	return size
}
func (dto *DeviceEntity) Add(nodes ...*DeviceEntity) bool {
	var size = dto.Size()
	for _, n := range nodes {
		if n.ParentId != nil && *n.ParentId == dto.UniqueId {
			dto.Children = append(dto.Children, n)
		} else {
			for _, c := range dto.Children {
				if c.Add(n) {
					break
				}
			}
		}
	}
	return dto.Size() == size+len(nodes)
}
func DeviceActionCommonPivotQuery(query workspaces.QueryDSL) ([]*workspaces.PivotResult, *workspaces.QueryResultMeta, error) {
	items, meta, err := workspaces.UnsafeQuerySqlFromFs[workspaces.PivotResult](
		&queries.QueriesFs, "DeviceCommonPivot.sqlite.dyno", query,
	)
	return items, meta, err
}
func DeviceActionCteQuery(query workspaces.QueryDSL) ([]*DeviceEntity, *workspaces.QueryResultMeta, error) {
	items, meta, err := workspaces.UnsafeQuerySqlFromFs[DeviceEntity](
		&queries.QueriesFs, "DeviceCTE.sqlite.dyno", query,
	)
	for _, item := range items {
		entityDeviceFormatter(item, query)
	}
	var tree []*DeviceEntity
	for _, item := range items {
		if item.ParentId == nil {
			root := item
			root.Add(items...)
			tree = append(tree, root)
		}
	}
	return tree, meta, err
}
func DeviceUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *DeviceEntity) (*DeviceEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = DEVICE_EVENT_UPDATED
	DeviceEntityPreSanitize(fields, query)
	var item DeviceEntity
	q := dbref.
		Where(&DeviceEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	DeviceRelationContentUpdate(fields, query)
	DevicePolyglotCreateHandler(fields, query)
	if fields.DeviceModbusConfig != nil {
		linkerId := uniqueId
		q := dbref.
			Model(&item.DeviceModbusConfig).
			Where(&DeviceDeviceModbusConfig{LinkerId: &linkerId}).
			UpdateColumns(fields.DeviceModbusConfig)
		err := q.Error
		if err != nil {
			return &item, workspaces.GormErrorToIError(err)
		}
		if q.RowsAffected == 0 {
			fields.DeviceModbusConfig.UniqueId = workspaces.UUID()
			fields.DeviceModbusConfig.LinkerId = &linkerId
			err := dbref.
				Model(&item.DeviceModbusConfig).Create(fields.DeviceModbusConfig).Error
			if err != nil {
				return &item, workspaces.GormErrorToIError(err)
			}
		}
	}
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&DeviceEntity{UniqueId: uniqueId}).
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
func DeviceActionUpdateFn(query workspaces.QueryDSL, fields *DeviceEntity) (*DeviceEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := DeviceValidator(fields, true); iError != nil {
		return nil, iError
	}
	DeviceRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := DeviceUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return DeviceUpdateExec(dbref, query, fields)
	}
}

var DeviceWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire devices ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := DeviceActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func DeviceActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&DeviceEntity{})
	query.ActionRequires = []string{PERM_ROOT_DEVICE_DELETE}
	return workspaces.RemoveEntity[DeviceEntity](query, refl)
}
func DeviceActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[DeviceDeviceModbusConfig]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DeviceDeviceModbusConfig'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	{
		subCount, subErr := workspaces.WipeCleanEntity[DeviceEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'DeviceEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func DeviceActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[DeviceEntity]) (
	*workspaces.BulkRecordRequest[DeviceEntity], *workspaces.IError,
) {
	result := []*DeviceEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := DeviceActionUpdate(query, record)
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
func (x *DeviceEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var DeviceEntityMeta = workspaces.TableMetaData{
	EntityName:    "Device",
	ExportKey:     "devices",
	TableNameInDb: "fb_device_entities",
	EntityObject:  &DeviceEntity{},
	ExportStream:  DeviceActionExportT,
	ImportQuery:   DeviceActionImport,
}

func DeviceActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[DeviceEntity](query, DeviceActionQuery, DevicePreloadRelations)
}
func DeviceActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[DeviceEntity](query, DeviceActionQuery, DevicePreloadRelations)
}
func DeviceActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content DeviceEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := DeviceActionCreate(&content, query)
	return err
}

var DeviceCommonCliFlags = []cli.Flag{
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
	&cli.StringFlag{
		Name:     "model",
		Required: false,
		Usage:    "model",
	},
	&cli.StringFlag{
		Name:     "ip",
		Required: false,
		Usage:    "ip",
	},
	&cli.StringFlag{
		Name:     "wifi-user",
		Required: false,
		Usage:    "wifiUser",
	},
	&cli.StringFlag{
		Name:     "wifi-password",
		Required: false,
		Usage:    "wifiPassword",
	},
	&cli.StringFlag{
		Name:     "security-type",
		Required: false,
		Usage:    "securityType",
	},
	&cli.StringFlag{
		Name:     "type-id",
		Required: false,
		Usage:    "type",
	},
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
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
	&cli.Int64Flag{
		Name:     "baud-rate",
		Required: false,
		Usage:    "baudRate",
	},
	&cli.Int64Flag{
		Name:     "data-bits",
		Required: false,
		Usage:    "dataBits",
	},
	&cli.Int64Flag{
		Name:     "parity",
		Required: false,
		Usage:    "parity",
	},
	&cli.Int64Flag{
		Name:     "stop-bit",
		Required: false,
		Usage:    "stopBit",
	},
	&cli.Int64Flag{
		Name:     "timeout",
		Required: false,
		Usage:    "timeout",
	},
}
var DeviceCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "model",
		StructField: "Model",
		Required:    false,
		Usage:       "model",
		Type:        "string",
	},
	{
		Name:        "ip",
		StructField: "Ip",
		Required:    false,
		Usage:       "ip",
		Type:        "string",
	},
	{
		Name:        "wifiUser",
		StructField: "WifiUser",
		Required:    false,
		Usage:       "wifiUser",
		Type:        "string",
	},
	{
		Name:        "wifiPassword",
		StructField: "WifiPassword",
		Required:    false,
		Usage:       "wifiPassword",
		Type:        "string",
	},
	{
		Name:        "securityType",
		StructField: "SecurityType",
		Required:    false,
		Usage:       "securityType",
		Type:        "string",
	},
}
var DeviceCommonCliFlagsOptional = []cli.Flag{
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
	&cli.StringFlag{
		Name:     "model",
		Required: false,
		Usage:    "model",
	},
	&cli.StringFlag{
		Name:     "ip",
		Required: false,
		Usage:    "ip",
	},
	&cli.StringFlag{
		Name:     "wifi-user",
		Required: false,
		Usage:    "wifiUser",
	},
	&cli.StringFlag{
		Name:     "wifi-password",
		Required: false,
		Usage:    "wifiPassword",
	},
	&cli.StringFlag{
		Name:     "security-type",
		Required: false,
		Usage:    "securityType",
	},
	&cli.StringFlag{
		Name:     "type-id",
		Required: false,
		Usage:    "type",
	},
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
		Name:     "mode-id",
		Required: false,
		Usage:    "mode",
	},
	&cli.Int64Flag{
		Name:     "baud-rate",
		Required: false,
		Usage:    "baudRate",
	},
	&cli.Int64Flag{
		Name:     "data-bits",
		Required: false,
		Usage:    "dataBits",
	},
	&cli.Int64Flag{
		Name:     "parity",
		Required: false,
		Usage:    "parity",
	},
	&cli.Int64Flag{
		Name:     "stop-bit",
		Required: false,
		Usage:    "stopBit",
	},
	&cli.Int64Flag{
		Name:     "timeout",
		Required: false,
		Usage:    "timeout",
	},
}
var DeviceCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   DeviceCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDeviceFromCli(c)
		if entity, err := DeviceActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DeviceCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &DeviceEntity{}
		for _, item := range DeviceCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := DeviceActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var DeviceUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   DeviceCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastDeviceFromCli(c)
		if entity, err := DeviceActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastDeviceFromCli(c *cli.Context) *DeviceEntity {
	template := &DeviceEntity{}
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
	if c.IsSet("model") {
		value := c.String("model")
		template.Model = &value
	}
	if c.IsSet("ip") {
		value := c.String("ip")
		template.Ip = &value
	}
	if c.IsSet("wifi-user") {
		value := c.String("wifi-user")
		template.WifiUser = &value
	}
	if c.IsSet("wifi-password") {
		value := c.String("wifi-password")
		template.WifiPassword = &value
	}
	if c.IsSet("security-type") {
		value := c.String("security-type")
		template.SecurityType = &value
	}
	if c.IsSet("type-id") {
		value := c.String("type-id")
		template.TypeId = &value
	}
	return template
}
func DeviceSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DeviceActionCreate,
		reflect.ValueOf(&DeviceEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func DeviceImportMocks() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		DeviceActionCreate,
		reflect.ValueOf(&DeviceEntity{}).Elem(),
		&mocks.ViewsFs,
		[]string{},
		false,
	)
}
func DeviceWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := DeviceActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "Device", result)
	}
}

var DeviceImportExportCommands = []cli.Command{
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
			DeviceActionSeeder(query, c.Int("count"))
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
				Value: "device-seeder.yml",
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
			DeviceActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "device-seeder-device.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of devices, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]DeviceEntity{}
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
				DeviceActionCreate,
				reflect.ValueOf(&DeviceEntity{}).Elem(),
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
				DeviceActionCreate,
				reflect.ValueOf(&DeviceEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var DeviceCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(DeviceActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&DeviceEntity{}).Elem(), DeviceActionQuery),
	DeviceCreateCmd,
	DeviceUpdateCmd,
	DeviceCreateInteractiveCmd,
	DeviceWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&DeviceEntity{}).Elem(), DeviceActionRemove),
	workspaces.GetCommonCteQuery(DeviceActionCteQuery),
	workspaces.GetCommonPivotQuery(DeviceActionCommonPivotQuery),
}

func DeviceCliFn() cli.Command {
	DeviceCliCommands = append(DeviceCliCommands, DeviceImportExportCommands...)
	return cli.Command{
		Name:        "device",
		Description: "Devices module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: DeviceCliCommands,
	}
}

/**
 *	Override this function on DeviceEntityHttp.go,
 *	In order to add your own http
 **/
var AppendDeviceRouter = func(r *[]workspaces.Module2Action) {}

func GetDeviceModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/cte-devices",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DeviceActionCteQuery)
				},
			},
			Format:         "QUERY",
			Action:         DeviceActionCteQuery,
			ResponseEntity: &[]DeviceEntity{},
		},
		{
			Method: "GET",
			Url:    "/devices",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, DeviceActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         DeviceActionQuery,
			ResponseEntity: &[]DeviceEntity{},
		},
		{
			Method: "GET",
			Url:    "/devices/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, DeviceActionExport)
				},
			},
			Format:         "QUERY",
			Action:         DeviceActionExport,
			ResponseEntity: &[]DeviceEntity{},
		},
		{
			Method: "GET",
			Url:    "/device/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, DeviceActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         DeviceActionGetOne,
			ResponseEntity: &DeviceEntity{},
		},
		{
			Method: "POST",
			Url:    "/device",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, DeviceActionCreate)
				},
			},
			Action:         DeviceActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DeviceEntity{},
			ResponseEntity: &DeviceEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/device",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, DeviceActionUpdate)
				},
			},
			Action:         DeviceActionUpdate,
			RequestEntity:  &DeviceEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &DeviceEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/devices",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, DeviceActionBulkUpdate)
				},
			},
			Action:         DeviceActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[DeviceEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[DeviceEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/device",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, DeviceActionRemove)
				},
			},
			Action:         DeviceActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &DeviceEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/device/:linkerId/device_modbus_config/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpUpdateEntity(c, DeviceDeviceModbusConfigActionUpdate)
				},
			},
			Action:         DeviceDeviceModbusConfigActionUpdate,
			Format:         "PATCH_ONE",
			RequestEntity:  &DeviceDeviceModbusConfig{},
			ResponseEntity: &DeviceDeviceModbusConfig{},
		},
		{
			Method: "GET",
			Url:    "/device/device_modbus_config/:linkerId/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpGetEntity(c, DeviceDeviceModbusConfigActionGetOne)
				},
			},
			Action:         DeviceDeviceModbusConfigActionGetOne,
			Format:         "GET_ONE",
			ResponseEntity: &DeviceDeviceModbusConfig{},
		},
		{
			Method: "POST",
			Url:    "/device/:linkerId/device_modbus_config",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_DEVICE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(
					c *gin.Context,
				) {
					workspaces.HttpPostEntity(c, DeviceDeviceModbusConfigActionCreate)
				},
			},
			Action:         DeviceDeviceModbusConfigActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &DeviceDeviceModbusConfig{},
			ResponseEntity: &DeviceDeviceModbusConfig{},
		},
	}
	// Append user defined functions
	AppendDeviceRouter(&routes)
	return routes
}
func CreateDeviceRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetDeviceModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, DeviceEntityJsonSchema, "device-http", "iot")
	workspaces.WriteEntitySchema("DeviceEntity", DeviceEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_DEVICE_DELETE = "root/device/delete"
var PERM_ROOT_DEVICE_CREATE = "root/device/create"
var PERM_ROOT_DEVICE_UPDATE = "root/device/update"
var PERM_ROOT_DEVICE_QUERY = "root/device/query"
var PERM_ROOT_DEVICE = "root/device"
var ALL_DEVICE_PERMISSIONS = []string{
	PERM_ROOT_DEVICE_DELETE,
	PERM_ROOT_DEVICE_CREATE,
	PERM_ROOT_DEVICE_UPDATE,
	PERM_ROOT_DEVICE_QUERY,
	PERM_ROOT_DEVICE,
}
