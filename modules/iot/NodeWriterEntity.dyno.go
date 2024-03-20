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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/NodeWriter"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type NodeWriterEntity struct {
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
	NativeFn *string `json:"nativeFn" yaml:"nativeFn"       `
	// Datenano also has a text representation
	Config *workspaces.JSON `json:"config" yaml:"config"       `
	// Datenano also has a text representation
	Children []*NodeWriterEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *NodeWriterEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var NodeWriterPreloadRelations []string = []string{}
var NODEWRITER_EVENT_CREATED = "nodeWriter.created"
var NODEWRITER_EVENT_UPDATED = "nodeWriter.updated"
var NODEWRITER_EVENT_DELETED = "nodeWriter.deleted"
var NODEWRITER_EVENTS = []string{
	NODEWRITER_EVENT_CREATED,
	NODEWRITER_EVENT_UPDATED,
	NODEWRITER_EVENT_DELETED,
}

type NodeWriterFieldMap struct {
	Name     workspaces.TranslatedString `yaml:"name"`
	NativeFn workspaces.TranslatedString `yaml:"nativeFn"`
	Config   workspaces.TranslatedString `yaml:"config"`
}

var NodeWriterEntityMetaConfig map[string]int64 = map[string]int64{}
var NodeWriterEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&NodeWriterEntity{}))

func entityNodeWriterFormatter(dto *NodeWriterEntity, query workspaces.QueryDSL) {
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
func NodeWriterMockEntity() *NodeWriterEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &NodeWriterEntity{
		Name:     &stringHolder,
		NativeFn: &stringHolder,
	}
	return entity
}
func NodeWriterActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := NodeWriterMockEntity()
		_, err := NodeWriterActionCreate(entity, query)
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
func NodeWriterActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*NodeWriterEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &NodeWriterEntity{
		Name:     &tildaRef,
		NativeFn: &tildaRef,
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
func NodeWriterAssociationCreate(dto *NodeWriterEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func NodeWriterRelationContentCreate(dto *NodeWriterEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeWriterRelationContentUpdate(dto *NodeWriterEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeWriterPolyglotCreateHandler(dto *NodeWriterEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func NodeWriterValidator(dto *NodeWriterEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func NodeWriterEntityPreSanitize(dto *NodeWriterEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func NodeWriterEntityBeforeCreateAppend(dto *NodeWriterEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	NodeWriterRecursiveAddUniqueId(dto, query)
}
func NodeWriterRecursiveAddUniqueId(dto *NodeWriterEntity, query workspaces.QueryDSL) {
}
func NodeWriterActionBatchCreateFn(dtos []*NodeWriterEntity, query workspaces.QueryDSL) ([]*NodeWriterEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*NodeWriterEntity{}
		for _, item := range dtos {
			s, err := NodeWriterActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func NodeWriterActionCreateFn(dto *NodeWriterEntity, query workspaces.QueryDSL) (*NodeWriterEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := NodeWriterValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	NodeWriterEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	NodeWriterEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	NodeWriterPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	NodeWriterRelationContentCreate(dto, query)
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
	NodeWriterAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(NODEWRITER_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&NodeWriterEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func NodeWriterActionGetOne(query workspaces.QueryDSL) (*NodeWriterEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeWriterEntity{})
	item, err := workspaces.GetOneEntity[NodeWriterEntity](query, refl)
	entityNodeWriterFormatter(item, query)
	return item, err
}
func NodeWriterActionQuery(query workspaces.QueryDSL) ([]*NodeWriterEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&NodeWriterEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[NodeWriterEntity](query, refl)
	for _, item := range items {
		entityNodeWriterFormatter(item, query)
	}
	return items, meta, err
}
func NodeWriterUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *NodeWriterEntity) (*NodeWriterEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = NODEWRITER_EVENT_UPDATED
	NodeWriterEntityPreSanitize(fields, query)
	var item NodeWriterEntity
	q := dbref.
		Where(&NodeWriterEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	NodeWriterRelationContentUpdate(fields, query)
	NodeWriterPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&NodeWriterEntity{UniqueId: uniqueId}).
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
func NodeWriterActionUpdateFn(query workspaces.QueryDSL, fields *NodeWriterEntity) (*NodeWriterEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := NodeWriterValidator(fields, true); iError != nil {
		return nil, iError
	}
	NodeWriterRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := NodeWriterUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return NodeWriterUpdateExec(dbref, query, fields)
	}
}

var NodeWriterWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire nodewriters ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := NodeWriterActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func NodeWriterActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeWriterEntity{})
	query.ActionRequires = []string{PERM_ROOT_NODEWRITER_DELETE}
	return workspaces.RemoveEntity[NodeWriterEntity](query, refl)
}
func NodeWriterActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[NodeWriterEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'NodeWriterEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func NodeWriterActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[NodeWriterEntity]) (
	*workspaces.BulkRecordRequest[NodeWriterEntity], *workspaces.IError,
) {
	result := []*NodeWriterEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := NodeWriterActionUpdate(query, record)
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
func (x *NodeWriterEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var NodeWriterEntityMeta = workspaces.TableMetaData{
	EntityName:    "NodeWriter",
	ExportKey:     "node-writers",
	TableNameInDb: "fb_nodewriter_entities",
	EntityObject:  &NodeWriterEntity{},
	ExportStream:  NodeWriterActionExportT,
	ImportQuery:   NodeWriterActionImport,
}

func NodeWriterActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[NodeWriterEntity](query, NodeWriterActionQuery, NodeWriterPreloadRelations)
}
func NodeWriterActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[NodeWriterEntity](query, NodeWriterActionQuery, NodeWriterPreloadRelations)
}
func NodeWriterActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content NodeWriterEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := NodeWriterActionCreate(&content, query)
	return err
}

var NodeWriterCommonCliFlags = []cli.Flag{
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
		Name:     "native-fn",
		Required: false,
		Usage:    "nativeFn",
	},
}
var NodeWriterCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "nativeFn",
		StructField: "NativeFn",
		Required:    false,
		Usage:       "nativeFn",
		Type:        "string",
	},
}
var NodeWriterCommonCliFlagsOptional = []cli.Flag{
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
		Name:     "native-fn",
		Required: false,
		Usage:    "nativeFn",
	},
}
var NodeWriterCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   NodeWriterCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeWriterFromCli(c)
		if entity, err := NodeWriterActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeWriterCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &NodeWriterEntity{}
		for _, item := range NodeWriterCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := NodeWriterActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeWriterUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   NodeWriterCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeWriterFromCli(c)
		if entity, err := NodeWriterActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastNodeWriterFromCli(c *cli.Context) *NodeWriterEntity {
	template := &NodeWriterEntity{}
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
	if c.IsSet("native-fn") {
		value := c.String("native-fn")
		template.NativeFn = &value
	}
	return template
}
func NodeWriterSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		NodeWriterActionCreate,
		reflect.ValueOf(&NodeWriterEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func NodeWriterSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		NodeWriterActionCreate,
		reflect.ValueOf(&NodeWriterEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func NodeWriterWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := NodeWriterActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "NodeWriter", result)
	}
}

var NodeWriterImportExportCommands = []cli.Command{
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
			NodeWriterActionSeeder(query, c.Int("count"))
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
				Value: "node-writer-seeder.yml",
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
			NodeWriterActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "node-writer-seeder-node-writer.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of node-writers, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]NodeWriterEntity{}
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
				NodeWriterActionCreate,
				reflect.ValueOf(&NodeWriterEntity{}).Elem(),
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
				NodeWriterActionQuery,
				reflect.ValueOf(&NodeWriterEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"NodeWriterFieldMap.yml",
				NodeWriterPreloadRelations,
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
				NodeWriterActionCreate,
				reflect.ValueOf(&NodeWriterEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var NodeWriterCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(NodeWriterActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&NodeWriterEntity{}).Elem(), NodeWriterActionQuery),
	NodeWriterCreateCmd,
	NodeWriterUpdateCmd,
	NodeWriterCreateInteractiveCmd,
	NodeWriterWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&NodeWriterEntity{}).Elem(), NodeWriterActionRemove),
}

func NodeWriterCliFn() cli.Command {
	NodeWriterCliCommands = append(NodeWriterCliCommands, NodeWriterImportExportCommands...)
	return cli.Command{
		Name:        "nodeWriter",
		Description: "NodeWriters module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: NodeWriterCliCommands,
	}
}

/**
 *	Override this function on NodeWriterEntityHttp.go,
 *	In order to add your own http
 **/
var AppendNodeWriterRouter = func(r *[]workspaces.Module2Action) {}

func GetNodeWriterModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/node-writers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, NodeWriterActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         NodeWriterActionQuery,
			ResponseEntity: &[]NodeWriterEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-writers/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, NodeWriterActionExport)
				},
			},
			Format:         "QUERY",
			Action:         NodeWriterActionExport,
			ResponseEntity: &[]NodeWriterEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-writer/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, NodeWriterActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         NodeWriterActionGetOne,
			ResponseEntity: &NodeWriterEntity{},
		},
		{
			Method: "POST",
			Url:    "/node-writer",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, NodeWriterActionCreate)
				},
			},
			Action:         NodeWriterActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &NodeWriterEntity{},
			ResponseEntity: &NodeWriterEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-writer",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, NodeWriterActionUpdate)
				},
			},
			Action:         NodeWriterActionUpdate,
			RequestEntity:  &NodeWriterEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &NodeWriterEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-writers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, NodeWriterActionBulkUpdate)
				},
			},
			Action:         NodeWriterActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[NodeWriterEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[NodeWriterEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/node-writer",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEWRITER_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, NodeWriterActionRemove)
				},
			},
			Action:         NodeWriterActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &NodeWriterEntity{},
		},
	}
	// Append user defined functions
	AppendNodeWriterRouter(&routes)
	return routes
}
func CreateNodeWriterRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetNodeWriterModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, NodeWriterEntityJsonSchema, "node-writer-http", "iot")
	workspaces.WriteEntitySchema("NodeWriterEntity", NodeWriterEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_NODEWRITER_DELETE = "root/nodewriter/delete"
var PERM_ROOT_NODEWRITER_CREATE = "root/nodewriter/create"
var PERM_ROOT_NODEWRITER_UPDATE = "root/nodewriter/update"
var PERM_ROOT_NODEWRITER_QUERY = "root/nodewriter/query"
var PERM_ROOT_NODEWRITER = "root/nodewriter"
var ALL_NODEWRITER_PERMISSIONS = []string{
	PERM_ROOT_NODEWRITER_DELETE,
	PERM_ROOT_NODEWRITER_CREATE,
	PERM_ROOT_NODEWRITER_UPDATE,
	PERM_ROOT_NODEWRITER_QUERY,
	PERM_ROOT_NODEWRITER,
}
