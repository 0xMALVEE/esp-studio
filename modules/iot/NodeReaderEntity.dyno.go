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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/NodeReader"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type NodeReaderEntity struct {
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
	Config *string `json:"config" yaml:"config"       `
	// Datenano also has a text representation
	Children []*NodeReaderEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *NodeReaderEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var NodeReaderPreloadRelations []string = []string{}
var NODEREADER_EVENT_CREATED = "nodeReader.created"
var NODEREADER_EVENT_UPDATED = "nodeReader.updated"
var NODEREADER_EVENT_DELETED = "nodeReader.deleted"
var NODEREADER_EVENTS = []string{
	NODEREADER_EVENT_CREATED,
	NODEREADER_EVENT_UPDATED,
	NODEREADER_EVENT_DELETED,
}

type NodeReaderFieldMap struct {
	Name     workspaces.TranslatedString `yaml:"name"`
	NativeFn workspaces.TranslatedString `yaml:"nativeFn"`
	Config   workspaces.TranslatedString `yaml:"config"`
}

var NodeReaderEntityMetaConfig map[string]int64 = map[string]int64{}
var NodeReaderEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&NodeReaderEntity{}))

func entityNodeReaderFormatter(dto *NodeReaderEntity, query workspaces.QueryDSL) {
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
func NodeReaderMockEntity() *NodeReaderEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &NodeReaderEntity{
		Name:     &stringHolder,
		NativeFn: &stringHolder,
		Config:   &stringHolder,
	}
	return entity
}
func NodeReaderActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := NodeReaderMockEntity()
		_, err := NodeReaderActionCreate(entity, query)
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
func NodeReaderActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*NodeReaderEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &NodeReaderEntity{
		Name:     &tildaRef,
		NativeFn: &tildaRef,
		Config:   &tildaRef,
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
func NodeReaderAssociationCreate(dto *NodeReaderEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func NodeReaderRelationContentCreate(dto *NodeReaderEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeReaderRelationContentUpdate(dto *NodeReaderEntity, query workspaces.QueryDSL) error {
	return nil
}
func NodeReaderPolyglotCreateHandler(dto *NodeReaderEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func NodeReaderValidator(dto *NodeReaderEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func NodeReaderEntityPreSanitize(dto *NodeReaderEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func NodeReaderEntityBeforeCreateAppend(dto *NodeReaderEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	NodeReaderRecursiveAddUniqueId(dto, query)
}
func NodeReaderRecursiveAddUniqueId(dto *NodeReaderEntity, query workspaces.QueryDSL) {
}
func NodeReaderActionBatchCreateFn(dtos []*NodeReaderEntity, query workspaces.QueryDSL) ([]*NodeReaderEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*NodeReaderEntity{}
		for _, item := range dtos {
			s, err := NodeReaderActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func NodeReaderActionCreateFn(dto *NodeReaderEntity, query workspaces.QueryDSL) (*NodeReaderEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := NodeReaderValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	NodeReaderEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	NodeReaderEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	NodeReaderPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	NodeReaderRelationContentCreate(dto, query)
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
	NodeReaderAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(NODEREADER_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&NodeReaderEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func NodeReaderActionGetOne(query workspaces.QueryDSL) (*NodeReaderEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeReaderEntity{})
	item, err := workspaces.GetOneEntity[NodeReaderEntity](query, refl)
	entityNodeReaderFormatter(item, query)
	return item, err
}
func NodeReaderActionQuery(query workspaces.QueryDSL) ([]*NodeReaderEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&NodeReaderEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[NodeReaderEntity](query, refl)
	for _, item := range items {
		entityNodeReaderFormatter(item, query)
	}
	return items, meta, err
}
func NodeReaderUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *NodeReaderEntity) (*NodeReaderEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = NODEREADER_EVENT_UPDATED
	NodeReaderEntityPreSanitize(fields, query)
	var item NodeReaderEntity
	q := dbref.
		Where(&NodeReaderEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	NodeReaderRelationContentUpdate(fields, query)
	NodeReaderPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&NodeReaderEntity{UniqueId: uniqueId}).
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
func NodeReaderActionUpdateFn(query workspaces.QueryDSL, fields *NodeReaderEntity) (*NodeReaderEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := NodeReaderValidator(fields, true); iError != nil {
		return nil, iError
	}
	NodeReaderRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := NodeReaderUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return NodeReaderUpdateExec(dbref, query, fields)
	}
}

var NodeReaderWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire nodereaders ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := NodeReaderActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func NodeReaderActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&NodeReaderEntity{})
	query.ActionRequires = []string{PERM_ROOT_NODEREADER_DELETE}
	return workspaces.RemoveEntity[NodeReaderEntity](query, refl)
}
func NodeReaderActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[NodeReaderEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'NodeReaderEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func NodeReaderActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[NodeReaderEntity]) (
	*workspaces.BulkRecordRequest[NodeReaderEntity], *workspaces.IError,
) {
	result := []*NodeReaderEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := NodeReaderActionUpdate(query, record)
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
func (x *NodeReaderEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var NodeReaderEntityMeta = workspaces.TableMetaData{
	EntityName:    "NodeReader",
	ExportKey:     "node-readers",
	TableNameInDb: "fb_nodereader_entities",
	EntityObject:  &NodeReaderEntity{},
	ExportStream:  NodeReaderActionExportT,
	ImportQuery:   NodeReaderActionImport,
}

func NodeReaderActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[NodeReaderEntity](query, NodeReaderActionQuery, NodeReaderPreloadRelations)
}
func NodeReaderActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[NodeReaderEntity](query, NodeReaderActionQuery, NodeReaderPreloadRelations)
}
func NodeReaderActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content NodeReaderEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := NodeReaderActionCreate(&content, query)
	return err
}

var NodeReaderCommonCliFlags = []cli.Flag{
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
	&cli.StringFlag{
		Name:     "config",
		Required: false,
		Usage:    "config",
	},
}
var NodeReaderCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
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
	{
		Name:        "config",
		StructField: "Config",
		Required:    false,
		Usage:       "config",
		Type:        "string",
	},
}
var NodeReaderCommonCliFlagsOptional = []cli.Flag{
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
	&cli.StringFlag{
		Name:     "config",
		Required: false,
		Usage:    "config",
	},
}
var NodeReaderCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   NodeReaderCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeReaderFromCli(c)
		if entity, err := NodeReaderActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeReaderCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &NodeReaderEntity{}
		for _, item := range NodeReaderCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := NodeReaderActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var NodeReaderUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   NodeReaderCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastNodeReaderFromCli(c)
		if entity, err := NodeReaderActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastNodeReaderFromCli(c *cli.Context) *NodeReaderEntity {
	template := &NodeReaderEntity{}
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
	if c.IsSet("config") {
		value := c.String("config")
		template.Config = &value
	}
	return template
}
func NodeReaderSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		NodeReaderActionCreate,
		reflect.ValueOf(&NodeReaderEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func NodeReaderSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		NodeReaderActionCreate,
		reflect.ValueOf(&NodeReaderEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func NodeReaderWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := NodeReaderActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "NodeReader", result)
	}
}

var NodeReaderImportExportCommands = []cli.Command{
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
			NodeReaderActionSeeder(query, c.Int("count"))
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
				Value: "node-reader-seeder.yml",
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
			NodeReaderActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "node-reader-seeder-node-reader.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of node-readers, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]NodeReaderEntity{}
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
				NodeReaderActionCreate,
				reflect.ValueOf(&NodeReaderEntity{}).Elem(),
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
				NodeReaderActionQuery,
				reflect.ValueOf(&NodeReaderEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"NodeReaderFieldMap.yml",
				NodeReaderPreloadRelations,
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
				NodeReaderActionCreate,
				reflect.ValueOf(&NodeReaderEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var NodeReaderCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(NodeReaderActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&NodeReaderEntity{}).Elem(), NodeReaderActionQuery),
	NodeReaderCreateCmd,
	NodeReaderUpdateCmd,
	NodeReaderCreateInteractiveCmd,
	NodeReaderWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&NodeReaderEntity{}).Elem(), NodeReaderActionRemove),
}

func NodeReaderCliFn() cli.Command {
	NodeReaderCliCommands = append(NodeReaderCliCommands, NodeReaderImportExportCommands...)
	return cli.Command{
		Name:        "nodeReader",
		Description: "NodeReaders module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: NodeReaderCliCommands,
	}
}

/**
 *	Override this function on NodeReaderEntityHttp.go,
 *	In order to add your own http
 **/
var AppendNodeReaderRouter = func(r *[]workspaces.Module2Action) {}

func GetNodeReaderModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/node-readers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, NodeReaderActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         NodeReaderActionQuery,
			ResponseEntity: &[]NodeReaderEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-readers/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, NodeReaderActionExport)
				},
			},
			Format:         "QUERY",
			Action:         NodeReaderActionExport,
			ResponseEntity: &[]NodeReaderEntity{},
		},
		{
			Method: "GET",
			Url:    "/node-reader/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, NodeReaderActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         NodeReaderActionGetOne,
			ResponseEntity: &NodeReaderEntity{},
		},
		{
			Method: "POST",
			Url:    "/node-reader",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, NodeReaderActionCreate)
				},
			},
			Action:         NodeReaderActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &NodeReaderEntity{},
			ResponseEntity: &NodeReaderEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-reader",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, NodeReaderActionUpdate)
				},
			},
			Action:         NodeReaderActionUpdate,
			RequestEntity:  &NodeReaderEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &NodeReaderEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/node-readers",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, NodeReaderActionBulkUpdate)
				},
			},
			Action:         NodeReaderActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[NodeReaderEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[NodeReaderEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/node-reader",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_NODEREADER_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, NodeReaderActionRemove)
				},
			},
			Action:         NodeReaderActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &NodeReaderEntity{},
		},
	}
	// Append user defined functions
	AppendNodeReaderRouter(&routes)
	return routes
}
func CreateNodeReaderRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetNodeReaderModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, NodeReaderEntityJsonSchema, "node-reader-http", "iot")
	workspaces.WriteEntitySchema("NodeReaderEntity", NodeReaderEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_NODEREADER_DELETE = "root/nodereader/delete"
var PERM_ROOT_NODEREADER_CREATE = "root/nodereader/create"
var PERM_ROOT_NODEREADER_UPDATE = "root/nodereader/update"
var PERM_ROOT_NODEREADER_QUERY = "root/nodereader/query"
var PERM_ROOT_NODEREADER = "root/nodereader"
var ALL_NODEREADER_PERMISSIONS = []string{
	PERM_ROOT_NODEREADER_DELETE,
	PERM_ROOT_NODEREADER_CREATE,
	PERM_ROOT_NODEREADER_UPDATE,
	PERM_ROOT_NODEREADER_QUERY,
	PERM_ROOT_NODEREADER,
}
