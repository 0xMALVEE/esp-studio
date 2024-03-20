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

type NodeDatumEntity struct {
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
	Node             *DataNodeEntity `json:"node" yaml:"node"    gorm:"foreignKey:NodeId;references:UniqueId"     `
	// Datenano also has a text representation
	NodeId       *string  `json:"nodeId" yaml:"nodeId"`
	ValueFloat64 *float64 `json:"valueFloat64" yaml:"valueFloat64"       `
	// Datenano also has a text representation
	ValueInt64 *int64 `json:"valueInt64" yaml:"valueInt64"       `
	// Datenano also has a text representation
	ValueString *string `json:"valueString" yaml:"valueString"       `
	// Datenano also has a text representation
	ValueBoolean *bool `json:"valueBoolean" yaml:"valueBoolean"       `
	// Datenano also has a text representation
	IngestedAt int64 `json:"ingestedAt" yaml:"ingestedAt"       `
	// Datenano also has a text representation
	IngestedAtFormatted string             `json:"ingestedAtFormatted" yaml:"ingestedAtFormatted"`
	Children            []*NodeDatumEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo            *NodeDatumEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var NodeDatumPreloadRelations []string = []string{}
var NODEDATUM_EVENT_CREATED = "nodeDatum.created"
var NODEDATUM_EVENT_UPDATED = "nodeDatum.updated"
var NODEDATUM_EVENT_DELETED = "nodeDatum.deleted"
var NODEDATUM_EVENTS = []string{
	NODEDATUM_EVENT_CREATED,
	NODEDATUM_EVENT_UPDATED,
	NODEDATUM_EVENT_DELETED,
}

type NodeDatumFieldMap struct {
	Node         workspaces.TranslatedString `yaml:"node"`
	ValueFloat64 workspaces.TranslatedString `yaml:"valueFloat64"`
	ValueInt64   workspaces.TranslatedString `yaml:"valueInt64"`
	ValueString  workspaces.TranslatedString `yaml:"valueString"`
	ValueBoolean workspaces.TranslatedString `yaml:"valueBoolean"`
	IngestedAt   workspaces.TranslatedString `yaml:"ingestedAt"`
}

var NodeDatumEntityMetaConfig map[string]int64 = map[string]int64{}
var NodeDatumEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&NodeDatumEntity{}))

func entityNodeDatumFormatter(dto *NodeDatumEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	dto.IngestedAtFormatted = workspaces.FormatDateBasedOnQuery(dto.IngestedAt, query)
	if dto.Created > 0 {
		dto.CreatedFormatted = workspaces.FormatDateBasedOnQuery(dto.Created, query)
	}
	if dto.Updated > 0 {
		dto.CreatedFormatted = workspaces.FormatDateBasedOnQuery(dto.Updated, query)
	}
}
func NodeDatumMockEntity() *NodeDatumEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &NodeDatumEntity{
		ValueFloat64: &float64Holder,
		ValueInt64:   &int64Holder,
		ValueString:  &stringHolder,
	}
	return entity
}
func NodeDatumActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := NodeDatumMockEntity()
		_, err := NodeDatumActionCreate(entity, query)
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
func NodeDatumActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*NodeDatumEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &NodeDatumEntity{
		ValueString: &tildaRef,
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
func NodeDatumAssociationCreate(dto *NodeDatumEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func NodeDatumRelationContentCreate(dto *NodeDatumEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeDatumRelationContentUpdate(dto *NodeDatumEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeDatumPolyglotCreateHandler(dto *NodeDatumEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func NodeDatumValidator(dto *NodeDatumEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func NodeDatumEntityPreSanitize(dto *NodeDatumEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func NodeDatumEntityBeforeCreateAppend(dto *NodeDatumEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	NodeDatumRecursiveAddUniqueId(dto, query)
}
func NodeDatumRecursiveAddUniqueId(dto *NodeDatumEntity, query workspaces.QueryDSL) {
}
func NodeDatumActionBatchCreateFn(dtos []*NodeDatumEntity, query workspaces.QueryDSL) ([]*NodeDatumEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*NodeDatumEntity{}
		for _, item := range dtos {
			s, err := NodeDatumActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func NodeDatumActionCreateFn(dto *NodeDatumEntity, query workspaces.QueryDSL) (*NodeDatumEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := NodeDatumValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	NodeDatumEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	NodeDatumEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	NodeDatumPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	NodeDatumRelationContentCreate(dto, query)
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
	NodeDatumAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(NODEDATUM_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&NodeDatumEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func NodeDatumActionGetOne(query workspaces.QueryDSL) (*NodeDatumEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeDatumEntity{})
	item, err := workspaces.GetOneEntity[NodeDatumEntity](query, refl)
	entityNodeDatumFormatter(item, query)
	return item, err
}
func NodeDatumActionQuery(query workspaces.QueryDSL) ([]*NodeDatumEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&NodeDatumEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[NodeDatumEntity](query, refl)
	for _, item := range items {
		entityNodeDatumFormatter(item, query)
	}
	return items, meta, err
}
func NodeDatumUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *NodeDatumEntity) (*NodeDatumEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = NODEDATUM_EVENT_UPDATED
	NodeDatumEntityPreSanitize(fields, query)
	var item NodeDatumEntity
	q := dbref.
		Where(&NodeDatumEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	NodeDatumRelationContentUpdate(fields, query)
	NodeDatumPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&NodeDatumEntity{UniqueId: uniqueId}).
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
func NodeDatumActionUpdateFn(query workspaces.QueryDSL, fields *NodeDatumEntity) (*NodeDatumEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := NodeDatumValidator(fields, true); iError != nil {
		return nil, iError
	}
	NodeDatumRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := NodeDatumUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return NodeDatumUpdateExec(dbref, query, fields)
	}
}

var NodeDatumWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire nodedata ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := NodeDatumActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func NodeDatumActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeDatumEntity{})
	query.ActionRequires = []string{PERM_ROOT_NODEDATUM_DELETE}
	return workspaces.RemoveEntity[NodeDatumEntity](query, refl)
}
func NodeDatumActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[NodeDatumEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'NodeDatumEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func NodeDatumActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[NodeDatumEntity]) (
	*workspaces.BulkRecordRequest[NodeDatumEntity], *workspaces.IError,
) {
	result := []*NodeDatumEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := NodeDatumActionUpdate(query, record)
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
func (x *NodeDatumEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var NodeDatumEntityMeta = workspaces.TableMetaData{
	EntityName:    "NodeDatum",
	ExportKey:     "node-data",
	TableNameInDb: "fb_nodedatum_entities",
	EntityObject:  &NodeDatumEntity{},
	ExportStream:  NodeDatumActionExportT,
	ImportQuery:   NodeDatumActionImport,
}

func NodeDatumActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[NodeDatumEntity](query, NodeDatumActionQuery, NodeDatumPreloadRelations)
}
func NodeDatumActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[NodeDatumEntity](query, NodeDatumActionQuery, NodeDatumPreloadRelations)
}
func NodeDatumActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content NodeDatumEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := NodeDatumActionCreate(&content, query)
	return err
}

var NodeDatumCommonCliFlags = []cli.Flag{
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
		Name:     "node-id",
		Required: false,
		Usage:    "node",
	},
	&cli.Float64Flag{
		Name:     "value-float64",
		Required: false,
		Usage:    "valueFloat64",
	},
	&cli.Int64Flag{
		Name:     "value-int64",
		Required: false,
		Usage:    "valueInt64",
	},
	&cli.StringFlag{
		Name:     "value-string",
		Required: false,
		Usage:    "valueString",
	},
	&cli.BoolFlag{
		Name:     "value-boolean",
		Required: false,
		Usage:    "valueBoolean",
	},
}
var NodeDatumCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "valueFloat64",
		StructField: "ValueFloat64",
		Required:    false,
		Usage:       "valueFloat64",
		Type:        "float64",
	},
	{
		Name:        "valueInt64",
		StructField: "ValueInt64",
		Required:    false,
		Usage:       "valueInt64",
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
		Name:        "valueBoolean",
		StructField: "ValueBoolean",
		Required:    false,
		Usage:       "valueBoolean",
		Type:        "bool",
	},
}
var NodeDatumCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "node-id",
		Required: false,
		Usage:    "node",
	},
	&cli.Float64Flag{
		Name:     "value-float64",
		Required: false,
		Usage:    "valueFloat64",
	},
	&cli.Int64Flag{
		Name:     "value-int64",
		Required: false,
		Usage:    "valueInt64",
	},
	&cli.StringFlag{
		Name:     "value-string",
		Required: false,
		Usage:    "valueString",
	},
	&cli.BoolFlag{
		Name:     "value-boolean",
		Required: false,
		Usage:    "valueBoolean",
	},
}
var NodeDatumCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   NodeDatumCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeDatumFromCli(c)
		if entity, err := NodeDatumActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeDatumCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &NodeDatumEntity{}
		for _, item := range NodeDatumCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := NodeDatumActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeDatumUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   NodeDatumCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeDatumFromCli(c)
		if entity, err := NodeDatumActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastNodeDatumFromCli(c *cli.Context) *NodeDatumEntity {
	template := &NodeDatumEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("node-id") {
		value := c.String("node-id")
		template.NodeId = &value
	}
	if c.IsSet("value-string") {
		value := c.String("value-string")
		template.ValueString = &value
	}
	return template
}
func NodeDatumSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		NodeDatumActionCreate,
		reflect.ValueOf(&NodeDatumEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func NodeDatumWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := NodeDatumActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "NodeDatum", result)
	}
}

var NodeDatumImportExportCommands = []cli.Command{
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
			NodeDatumActionSeeder(query, c.Int("count"))
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
				Value: "node-datum-seeder.yml",
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
			NodeDatumActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "node-datum-seeder-node-datum.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of node-data, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]NodeDatumEntity{}
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
				NodeDatumActionCreate,
				reflect.ValueOf(&NodeDatumEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var NodeDatumCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(NodeDatumActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&NodeDatumEntity{}).Elem(), NodeDatumActionQuery),
	NodeDatumCreateCmd,
	NodeDatumUpdateCmd,
	NodeDatumCreateInteractiveCmd,
	NodeDatumWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&NodeDatumEntity{}).Elem(), NodeDatumActionRemove),
}

func NodeDatumCliFn() cli.Command {
	NodeDatumCliCommands = append(NodeDatumCliCommands, NodeDatumImportExportCommands...)
	return cli.Command{
		Name:        "nodeDatum",
		Description: "NodeDatums module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: NodeDatumCliCommands,
	}
}

/**
 *	Override this function on NodeDatumEntityHttp.go,
 *	In order to add your own http
 **/
var AppendNodeDatumRouter = func(r *[]workspaces.Module2Action) {}

func GetNodeDatumModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/node-data",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, NodeDatumActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         NodeDatumActionQuery,
			ResponseEntity: &[]NodeDatumEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-data/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, NodeDatumActionExport)
				},
			},
			Format:         "QUERY",
			Action:         NodeDatumActionExport,
			ResponseEntity: &[]NodeDatumEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-datum/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, NodeDatumActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         NodeDatumActionGetOne,
			ResponseEntity: &NodeDatumEntity{},
		},
		{
			Method: "POST",
			Url:    "/node-datum",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, NodeDatumActionCreate)
				},
			},
			Action:         NodeDatumActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &NodeDatumEntity{},
			ResponseEntity: &NodeDatumEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-datum",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, NodeDatumActionUpdate)
				},
			},
			Action:         NodeDatumActionUpdate,
			RequestEntity:  &NodeDatumEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &NodeDatumEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-data",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, NodeDatumActionBulkUpdate)
				},
			},
			Action:         NodeDatumActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[NodeDatumEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[NodeDatumEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/node-datum",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEDATUM_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, NodeDatumActionRemove)
				},
			},
			Action:         NodeDatumActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &NodeDatumEntity{},
		},
	}
	// Append user defined functions
	AppendNodeDatumRouter(&routes)
	return routes
}
func CreateNodeDatumRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetNodeDatumModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, NodeDatumEntityJsonSchema, "node-datum-http", "iot")
	workspaces.WriteEntitySchema("NodeDatumEntity", NodeDatumEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_NODEDATUM_DELETE = "root/nodedatum/delete"
var PERM_ROOT_NODEDATUM_CREATE = "root/nodedatum/create"
var PERM_ROOT_NODEDATUM_UPDATE = "root/nodedatum/update"
var PERM_ROOT_NODEDATUM_QUERY = "root/nodedatum/query"
var PERM_ROOT_NODEDATUM = "root/nodedatum"
var ALL_NODEDATUM_PERMISSIONS = []string{
	PERM_ROOT_NODEDATUM_DELETE,
	PERM_ROOT_NODEDATUM_CREATE,
	PERM_ROOT_NODEDATUM_UPDATE,
	PERM_ROOT_NODEDATUM_QUERY,
	PERM_ROOT_NODEDATUM,
}
