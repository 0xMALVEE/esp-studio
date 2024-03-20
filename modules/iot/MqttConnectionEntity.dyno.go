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

type MqttConnectionEntity struct {
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
	Ssl              *bool   `json:"ssl" yaml:"ssl"       `
	// Datenano also has a text representation
	AutoReconnect *bool `json:"autoReconnect" yaml:"autoReconnect"       `
	// Datenano also has a text representation
	CleanSession *bool `json:"cleanSession" yaml:"cleanSession"       `
	// Datenano also has a text representation
	LastWillRetain *bool `json:"lastWillRetain" yaml:"lastWillRetain"       `
	// Datenano also has a text representation
	Port *int64 `json:"port" yaml:"port"       `
	// Datenano also has a text representation
	KeepAlive *int64 `json:"keepAlive" yaml:"keepAlive"       `
	// Datenano also has a text representation
	ConnectTimeout *int64 `json:"connectTimeout" yaml:"connectTimeout"       `
	// Datenano also has a text representation
	LastWillQos *int64 `json:"lastWillQos" yaml:"lastWillQos"       `
	// Datenano also has a text representation
	ClientId *string `json:"clientId" yaml:"clientId"       `
	// Datenano also has a text representation
	Name *string `json:"name" yaml:"name"       `
	// Datenano also has a text representation
	Host *string `json:"host" yaml:"host"       `
	// Datenano also has a text representation
	Username *string `json:"username" yaml:"username"       `
	// Datenano also has a text representation
	Password *string `json:"password" yaml:"password"       `
	// Datenano also has a text representation
	MqttVersion *MqttVersionEntity `json:"mqttVersion" yaml:"mqttVersion"    gorm:"foreignKey:MqttVersionId;references:UniqueId"     `
	// Datenano also has a text representation
	MqttVersionId *string `json:"mqttVersionId" yaml:"mqttVersionId"`
	LastWillTopic *string `json:"lastWillTopic" yaml:"lastWillTopic"       `
	// Datenano also has a text representation
	LastWillPayload *string `json:"lastWillPayload" yaml:"lastWillPayload"       `
	// Datenano also has a text representation
	Children []*MqttConnectionEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *MqttConnectionEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var MqttConnectionPreloadRelations []string = []string{}
var MQTTCONNECTION_EVENT_CREATED = "mqttConnection.created"
var MQTTCONNECTION_EVENT_UPDATED = "mqttConnection.updated"
var MQTTCONNECTION_EVENT_DELETED = "mqttConnection.deleted"
var MQTTCONNECTION_EVENTS = []string{
	MQTTCONNECTION_EVENT_CREATED,
	MQTTCONNECTION_EVENT_UPDATED,
	MQTTCONNECTION_EVENT_DELETED,
}

type MqttConnectionFieldMap struct {
	Ssl             workspaces.TranslatedString `yaml:"ssl"`
	AutoReconnect   workspaces.TranslatedString `yaml:"autoReconnect"`
	CleanSession    workspaces.TranslatedString `yaml:"cleanSession"`
	LastWillRetain  workspaces.TranslatedString `yaml:"lastWillRetain"`
	Port            workspaces.TranslatedString `yaml:"port"`
	KeepAlive       workspaces.TranslatedString `yaml:"keepAlive"`
	ConnectTimeout  workspaces.TranslatedString `yaml:"connectTimeout"`
	LastWillQos     workspaces.TranslatedString `yaml:"lastWillQos"`
	ClientId        workspaces.TranslatedString `yaml:"clientId"`
	Name            workspaces.TranslatedString `yaml:"name"`
	Host            workspaces.TranslatedString `yaml:"host"`
	Username        workspaces.TranslatedString `yaml:"username"`
	Password        workspaces.TranslatedString `yaml:"password"`
	MqttVersion     workspaces.TranslatedString `yaml:"mqttVersion"`
	LastWillTopic   workspaces.TranslatedString `yaml:"lastWillTopic"`
	LastWillPayload workspaces.TranslatedString `yaml:"lastWillPayload"`
}

var MqttConnectionEntityMetaConfig map[string]int64 = map[string]int64{}
var MqttConnectionEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MqttConnectionEntity{}))

func entityMqttConnectionFormatter(dto *MqttConnectionEntity, query workspaces.QueryDSL) {
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
func MqttConnectionMockEntity() *MqttConnectionEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &MqttConnectionEntity{
		Port:            &int64Holder,
		KeepAlive:       &int64Holder,
		ConnectTimeout:  &int64Holder,
		LastWillQos:     &int64Holder,
		ClientId:        &stringHolder,
		Name:            &stringHolder,
		Host:            &stringHolder,
		Username:        &stringHolder,
		Password:        &stringHolder,
		LastWillTopic:   &stringHolder,
		LastWillPayload: &stringHolder,
	}
	return entity
}
func MqttConnectionActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := MqttConnectionMockEntity()
		_, err := MqttConnectionActionCreate(entity, query)
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
func MqttConnectionActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*MqttConnectionEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &MqttConnectionEntity{
		ClientId:        &tildaRef,
		Name:            &tildaRef,
		Host:            &tildaRef,
		Username:        &tildaRef,
		Password:        &tildaRef,
		LastWillTopic:   &tildaRef,
		LastWillPayload: &tildaRef,
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
func MqttConnectionAssociationCreate(dto *MqttConnectionEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func MqttConnectionRelationContentCreate(dto *MqttConnectionEntity, query workspaces.QueryDSL) error {
	return nil
}
func MqttConnectionRelationContentUpdate(dto *MqttConnectionEntity, query workspaces.QueryDSL) error {
	return nil
}
func MqttConnectionPolyglotCreateHandler(dto *MqttConnectionEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func MqttConnectionValidator(dto *MqttConnectionEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func MqttConnectionEntityPreSanitize(dto *MqttConnectionEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func MqttConnectionEntityBeforeCreateAppend(dto *MqttConnectionEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	MqttConnectionRecursiveAddUniqueId(dto, query)
}
func MqttConnectionRecursiveAddUniqueId(dto *MqttConnectionEntity, query workspaces.QueryDSL) {
}
func MqttConnectionActionBatchCreateFn(dtos []*MqttConnectionEntity, query workspaces.QueryDSL) ([]*MqttConnectionEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*MqttConnectionEntity{}
		for _, item := range dtos {
			s, err := MqttConnectionActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func MqttConnectionActionCreateFn(dto *MqttConnectionEntity, query workspaces.QueryDSL) (*MqttConnectionEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := MqttConnectionValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	MqttConnectionEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	MqttConnectionEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	MqttConnectionPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	MqttConnectionRelationContentCreate(dto, query)
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
	MqttConnectionAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MQTTCONNECTION_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&MqttConnectionEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func MqttConnectionActionGetOne(query workspaces.QueryDSL) (*MqttConnectionEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&MqttConnectionEntity{})
	item, err := workspaces.GetOneEntity[MqttConnectionEntity](query, refl)
	entityMqttConnectionFormatter(item, query)
	return item, err
}
func MqttConnectionActionQuery(query workspaces.QueryDSL) ([]*MqttConnectionEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&MqttConnectionEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[MqttConnectionEntity](query, refl)
	for _, item := range items {
		entityMqttConnectionFormatter(item, query)
	}
	return items, meta, err
}
func MqttConnectionUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *MqttConnectionEntity) (*MqttConnectionEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MQTTCONNECTION_EVENT_UPDATED
	MqttConnectionEntityPreSanitize(fields, query)
	var item MqttConnectionEntity
	q := dbref.
		Where(&MqttConnectionEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	MqttConnectionRelationContentUpdate(fields, query)
	MqttConnectionPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&MqttConnectionEntity{UniqueId: uniqueId}).
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
func MqttConnectionActionUpdateFn(query workspaces.QueryDSL, fields *MqttConnectionEntity) (*MqttConnectionEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := MqttConnectionValidator(fields, true); iError != nil {
		return nil, iError
	}
	MqttConnectionRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := MqttConnectionUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return MqttConnectionUpdateExec(dbref, query, fields)
	}
}

var MqttConnectionWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire mqttconnections ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := MqttConnectionActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func MqttConnectionActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&MqttConnectionEntity{})
	query.ActionRequires = []string{PERM_ROOT_MQTTCONNECTION_DELETE}
	return workspaces.RemoveEntity[MqttConnectionEntity](query, refl)
}
func MqttConnectionActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[MqttConnectionEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'MqttConnectionEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func MqttConnectionActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[MqttConnectionEntity]) (
	*workspaces.BulkRecordRequest[MqttConnectionEntity], *workspaces.IError,
) {
	result := []*MqttConnectionEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := MqttConnectionActionUpdate(query, record)
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
func (x *MqttConnectionEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var MqttConnectionEntityMeta = workspaces.TableMetaData{
	EntityName:    "MqttConnection",
	ExportKey:     "mqtt-connections",
	TableNameInDb: "fb_mqttconnection_entities",
	EntityObject:  &MqttConnectionEntity{},
	ExportStream:  MqttConnectionActionExportT,
	ImportQuery:   MqttConnectionActionImport,
}

func MqttConnectionActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[MqttConnectionEntity](query, MqttConnectionActionQuery, MqttConnectionPreloadRelations)
}
func MqttConnectionActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[MqttConnectionEntity](query, MqttConnectionActionQuery, MqttConnectionPreloadRelations)
}
func MqttConnectionActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content MqttConnectionEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := MqttConnectionActionCreate(&content, query)
	return err
}

var MqttConnectionCommonCliFlags = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "ssl",
		Required: false,
		Usage:    "ssl",
	},
	&cli.BoolFlag{
		Name:     "auto-reconnect",
		Required: false,
		Usage:    "autoReconnect",
	},
	&cli.BoolFlag{
		Name:     "clean-session",
		Required: false,
		Usage:    "cleanSession",
	},
	&cli.BoolFlag{
		Name:     "last-will-retain",
		Required: false,
		Usage:    "lastWillRetain",
	},
	&cli.Int64Flag{
		Name:     "port",
		Required: false,
		Usage:    "port",
	},
	&cli.Int64Flag{
		Name:     "keep-alive",
		Required: false,
		Usage:    "keepAlive",
	},
	&cli.Int64Flag{
		Name:     "connect-timeout",
		Required: false,
		Usage:    "connectTimeout",
	},
	&cli.Int64Flag{
		Name:     "last-will-qos",
		Required: false,
		Usage:    "lastWillQos",
	},
	&cli.StringFlag{
		Name:     "client-id",
		Required: false,
		Usage:    "clientId",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: false,
		Usage:    "name",
	},
	&cli.StringFlag{
		Name:     "host",
		Required: false,
		Usage:    "host",
	},
	&cli.StringFlag{
		Name:     "username",
		Required: false,
		Usage:    "username",
	},
	&cli.StringFlag{
		Name:     "password",
		Required: false,
		Usage:    "password",
	},
	&cli.StringFlag{
		Name:     "mqtt-version-id",
		Required: false,
		Usage:    "mqttVersion",
	},
	&cli.StringFlag{
		Name:     "last-will-topic",
		Required: false,
		Usage:    "lastWillTopic",
	},
	&cli.StringFlag{
		Name:     "last-will-payload",
		Required: false,
		Usage:    "lastWillPayload",
	},
}
var MqttConnectionCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "ssl",
		StructField: "Ssl",
		Required:    false,
		Usage:       "ssl",
		Type:        "bool",
	},
	{
		Name:        "autoReconnect",
		StructField: "AutoReconnect",
		Required:    false,
		Usage:       "autoReconnect",
		Type:        "bool",
	},
	{
		Name:        "cleanSession",
		StructField: "CleanSession",
		Required:    false,
		Usage:       "cleanSession",
		Type:        "bool",
	},
	{
		Name:        "lastWillRetain",
		StructField: "LastWillRetain",
		Required:    false,
		Usage:       "lastWillRetain",
		Type:        "bool",
	},
	{
		Name:        "port",
		StructField: "Port",
		Required:    false,
		Usage:       "port",
		Type:        "int64",
	},
	{
		Name:        "keepAlive",
		StructField: "KeepAlive",
		Required:    false,
		Usage:       "keepAlive",
		Type:        "int64",
	},
	{
		Name:        "connectTimeout",
		StructField: "ConnectTimeout",
		Required:    false,
		Usage:       "connectTimeout",
		Type:        "int64",
	},
	{
		Name:        "lastWillQos",
		StructField: "LastWillQos",
		Required:    false,
		Usage:       "lastWillQos",
		Type:        "int64",
	},
	{
		Name:        "clientId",
		StructField: "ClientId",
		Required:    false,
		Usage:       "clientId",
		Type:        "string",
	},
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "host",
		StructField: "Host",
		Required:    false,
		Usage:       "host",
		Type:        "string",
	},
	{
		Name:        "username",
		StructField: "Username",
		Required:    false,
		Usage:       "username",
		Type:        "string",
	},
	{
		Name:        "password",
		StructField: "Password",
		Required:    false,
		Usage:       "password",
		Type:        "string",
	},
	{
		Name:        "lastWillTopic",
		StructField: "LastWillTopic",
		Required:    false,
		Usage:       "lastWillTopic",
		Type:        "string",
	},
	{
		Name:        "lastWillPayload",
		StructField: "LastWillPayload",
		Required:    false,
		Usage:       "lastWillPayload",
		Type:        "string",
	},
}
var MqttConnectionCommonCliFlagsOptional = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "ssl",
		Required: false,
		Usage:    "ssl",
	},
	&cli.BoolFlag{
		Name:     "auto-reconnect",
		Required: false,
		Usage:    "autoReconnect",
	},
	&cli.BoolFlag{
		Name:     "clean-session",
		Required: false,
		Usage:    "cleanSession",
	},
	&cli.BoolFlag{
		Name:     "last-will-retain",
		Required: false,
		Usage:    "lastWillRetain",
	},
	&cli.Int64Flag{
		Name:     "port",
		Required: false,
		Usage:    "port",
	},
	&cli.Int64Flag{
		Name:     "keep-alive",
		Required: false,
		Usage:    "keepAlive",
	},
	&cli.Int64Flag{
		Name:     "connect-timeout",
		Required: false,
		Usage:    "connectTimeout",
	},
	&cli.Int64Flag{
		Name:     "last-will-qos",
		Required: false,
		Usage:    "lastWillQos",
	},
	&cli.StringFlag{
		Name:     "client-id",
		Required: false,
		Usage:    "clientId",
	},
	&cli.StringFlag{
		Name:     "name",
		Required: false,
		Usage:    "name",
	},
	&cli.StringFlag{
		Name:     "host",
		Required: false,
		Usage:    "host",
	},
	&cli.StringFlag{
		Name:     "username",
		Required: false,
		Usage:    "username",
	},
	&cli.StringFlag{
		Name:     "password",
		Required: false,
		Usage:    "password",
	},
	&cli.StringFlag{
		Name:     "mqtt-version-id",
		Required: false,
		Usage:    "mqttVersion",
	},
	&cli.StringFlag{
		Name:     "last-will-topic",
		Required: false,
		Usage:    "lastWillTopic",
	},
	&cli.StringFlag{
		Name:     "last-will-payload",
		Required: false,
		Usage:    "lastWillPayload",
	},
}
var MqttConnectionCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   MqttConnectionCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMqttConnectionFromCli(c)
		if entity, err := MqttConnectionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MqttConnectionCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &MqttConnectionEntity{}
		for _, item := range MqttConnectionCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := MqttConnectionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MqttConnectionUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   MqttConnectionCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMqttConnectionFromCli(c)
		if entity, err := MqttConnectionActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastMqttConnectionFromCli(c *cli.Context) *MqttConnectionEntity {
	template := &MqttConnectionEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("client-id") {
		value := c.String("client-id")
		template.ClientId = &value
	}
	if c.IsSet("name") {
		value := c.String("name")
		template.Name = &value
	}
	if c.IsSet("host") {
		value := c.String("host")
		template.Host = &value
	}
	if c.IsSet("username") {
		value := c.String("username")
		template.Username = &value
	}
	if c.IsSet("password") {
		value := c.String("password")
		template.Password = &value
	}
	if c.IsSet("mqtt-version-id") {
		value := c.String("mqtt-version-id")
		template.MqttVersionId = &value
	}
	if c.IsSet("last-will-topic") {
		value := c.String("last-will-topic")
		template.LastWillTopic = &value
	}
	if c.IsSet("last-will-payload") {
		value := c.String("last-will-payload")
		template.LastWillPayload = &value
	}
	return template
}
func MqttConnectionSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		MqttConnectionActionCreate,
		reflect.ValueOf(&MqttConnectionEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func MqttConnectionWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := MqttConnectionActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "MqttConnection", result)
	}
}

var MqttConnectionImportExportCommands = []cli.Command{
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
			MqttConnectionActionSeeder(query, c.Int("count"))
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
				Value: "mqtt-connection-seeder.yml",
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
			MqttConnectionActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "mqtt-connection-seeder-mqtt-connection.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of mqtt-connections, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]MqttConnectionEntity{}
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
				MqttConnectionActionCreate,
				reflect.ValueOf(&MqttConnectionEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var MqttConnectionCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(MqttConnectionActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&MqttConnectionEntity{}).Elem(), MqttConnectionActionQuery),
	MqttConnectionCreateCmd,
	MqttConnectionUpdateCmd,
	MqttConnectionCreateInteractiveCmd,
	MqttConnectionWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&MqttConnectionEntity{}).Elem(), MqttConnectionActionRemove),
}

func MqttConnectionCliFn() cli.Command {
	MqttConnectionCliCommands = append(MqttConnectionCliCommands, MqttConnectionImportExportCommands...)
	return cli.Command{
		Name:        "mqttConnection",
		Description: "MqttConnections module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: MqttConnectionCliCommands,
	}
}

/**
 *	Override this function on MqttConnectionEntityHttp.go,
 *	In order to add your own http
 **/
var AppendMqttConnectionRouter = func(r *[]workspaces.Module2Action) {}

func GetMqttConnectionModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/mqtt-connections",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, MqttConnectionActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         MqttConnectionActionQuery,
			ResponseEntity: &[]MqttConnectionEntity{},
		},
		{
			Method: "GET",
			Url:    "/mqtt-connections/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, MqttConnectionActionExport)
				},
			},
			Format:         "QUERY",
			Action:         MqttConnectionActionExport,
			ResponseEntity: &[]MqttConnectionEntity{},
		},
		{
			Method: "GET",
			Url:    "/mqtt-connection/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, MqttConnectionActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         MqttConnectionActionGetOne,
			ResponseEntity: &MqttConnectionEntity{},
		},
		{
			Method: "POST",
			Url:    "/mqtt-connection",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, MqttConnectionActionCreate)
				},
			},
			Action:         MqttConnectionActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &MqttConnectionEntity{},
			ResponseEntity: &MqttConnectionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/mqtt-connection",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, MqttConnectionActionUpdate)
				},
			},
			Action:         MqttConnectionActionUpdate,
			RequestEntity:  &MqttConnectionEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &MqttConnectionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/mqtt-connections",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, MqttConnectionActionBulkUpdate)
				},
			},
			Action:         MqttConnectionActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[MqttConnectionEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[MqttConnectionEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/mqtt-connection",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MQTTCONNECTION_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, MqttConnectionActionRemove)
				},
			},
			Action:         MqttConnectionActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &MqttConnectionEntity{},
		},
	}
	// Append user defined functions
	AppendMqttConnectionRouter(&routes)
	return routes
}
func CreateMqttConnectionRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetMqttConnectionModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MqttConnectionEntityJsonSchema, "mqtt-connection-http", "iot")
	workspaces.WriteEntitySchema("MqttConnectionEntity", MqttConnectionEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MQTTCONNECTION_DELETE = "root/mqttconnection/delete"
var PERM_ROOT_MQTTCONNECTION_CREATE = "root/mqttconnection/create"
var PERM_ROOT_MQTTCONNECTION_UPDATE = "root/mqttconnection/update"
var PERM_ROOT_MQTTCONNECTION_QUERY = "root/mqttconnection/query"
var PERM_ROOT_MQTTCONNECTION = "root/mqttconnection"
var ALL_MQTTCONNECTION_PERMISSIONS = []string{
	PERM_ROOT_MQTTCONNECTION_DELETE,
	PERM_ROOT_MQTTCONNECTION_CREATE,
	PERM_ROOT_MQTTCONNECTION_UPDATE,
	PERM_ROOT_MQTTCONNECTION_QUERY,
	PERM_ROOT_MQTTCONNECTION,
}
