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

type MemoryStatEntity struct {
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
	HeapSize         *int64  `json:"heapSize" yaml:"heapSize"       `
	// Datenano also has a text representation
	Children []*MemoryStatEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo *MemoryStatEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var MemoryStatPreloadRelations []string = []string{}
var MEMORYSTAT_EVENT_CREATED = "memoryStat.created"
var MEMORYSTAT_EVENT_UPDATED = "memoryStat.updated"
var MEMORYSTAT_EVENT_DELETED = "memoryStat.deleted"
var MEMORYSTAT_EVENTS = []string{
	MEMORYSTAT_EVENT_CREATED,
	MEMORYSTAT_EVENT_UPDATED,
	MEMORYSTAT_EVENT_DELETED,
}

type MemoryStatFieldMap struct {
	HeapSize workspaces.TranslatedString `yaml:"heapSize"`
}

var MemoryStatEntityMetaConfig map[string]int64 = map[string]int64{}
var MemoryStatEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MemoryStatEntity{}))

func entityMemoryStatFormatter(dto *MemoryStatEntity, query workspaces.QueryDSL) {
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
func MemoryStatMockEntity() *MemoryStatEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &MemoryStatEntity{
		HeapSize: &int64Holder,
	}
	return entity
}
func MemoryStatActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := MemoryStatMockEntity()
		_, err := MemoryStatActionCreate(entity, query)
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
func MemoryStatActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*MemoryStatEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &MemoryStatEntity{}
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
func MemoryStatAssociationCreate(dto *MemoryStatEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func MemoryStatRelationContentCreate(dto *MemoryStatEntity, query workspaces.QueryDSL) error {
	return nil
}
func MemoryStatRelationContentUpdate(dto *MemoryStatEntity, query workspaces.QueryDSL) error {
	return nil
}
func MemoryStatPolyglotCreateHandler(dto *MemoryStatEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func MemoryStatValidator(dto *MemoryStatEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func MemoryStatEntityPreSanitize(dto *MemoryStatEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func MemoryStatEntityBeforeCreateAppend(dto *MemoryStatEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	MemoryStatRecursiveAddUniqueId(dto, query)
}
func MemoryStatRecursiveAddUniqueId(dto *MemoryStatEntity, query workspaces.QueryDSL) {
}
func MemoryStatActionBatchCreateFn(dtos []*MemoryStatEntity, query workspaces.QueryDSL) ([]*MemoryStatEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*MemoryStatEntity{}
		for _, item := range dtos {
			s, err := MemoryStatActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func MemoryStatActionCreateFn(dto *MemoryStatEntity, query workspaces.QueryDSL) (*MemoryStatEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := MemoryStatValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	MemoryStatEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	MemoryStatEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	MemoryStatPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	MemoryStatRelationContentCreate(dto, query)
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
	MemoryStatAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(MEMORYSTAT_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&MemoryStatEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func MemoryStatActionGetOne(query workspaces.QueryDSL) (*MemoryStatEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&MemoryStatEntity{})
	item, err := workspaces.GetOneEntity[MemoryStatEntity](query, refl)
	entityMemoryStatFormatter(item, query)
	return item, err
}
func MemoryStatActionQuery(query workspaces.QueryDSL) ([]*MemoryStatEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&MemoryStatEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[MemoryStatEntity](query, refl)
	for _, item := range items {
		entityMemoryStatFormatter(item, query)
	}
	return items, meta, err
}
func MemoryStatUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *MemoryStatEntity) (*MemoryStatEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = MEMORYSTAT_EVENT_UPDATED
	MemoryStatEntityPreSanitize(fields, query)
	var item MemoryStatEntity
	q := dbref.
		Where(&MemoryStatEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	MemoryStatRelationContentUpdate(fields, query)
	MemoryStatPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&MemoryStatEntity{UniqueId: uniqueId}).
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
func MemoryStatActionUpdateFn(query workspaces.QueryDSL, fields *MemoryStatEntity) (*MemoryStatEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := MemoryStatValidator(fields, true); iError != nil {
		return nil, iError
	}
	MemoryStatRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := MemoryStatUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return MemoryStatUpdateExec(dbref, query, fields)
	}
}

var MemoryStatWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire memorystats ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := MemoryStatActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func MemoryStatActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&MemoryStatEntity{})
	query.ActionRequires = []string{PERM_ROOT_MEMORYSTAT_DELETE}
	return workspaces.RemoveEntity[MemoryStatEntity](query, refl)
}
func MemoryStatActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[MemoryStatEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'MemoryStatEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func MemoryStatActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[MemoryStatEntity]) (
	*workspaces.BulkRecordRequest[MemoryStatEntity], *workspaces.IError,
) {
	result := []*MemoryStatEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := MemoryStatActionUpdate(query, record)
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
func (x *MemoryStatEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var MemoryStatEntityMeta = workspaces.TableMetaData{
	EntityName:    "MemoryStat",
	ExportKey:     "memory-stats",
	TableNameInDb: "fb_memorystat_entities",
	EntityObject:  &MemoryStatEntity{},
	ExportStream:  MemoryStatActionExportT,
	ImportQuery:   MemoryStatActionImport,
}

func MemoryStatActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[MemoryStatEntity](query, MemoryStatActionQuery, MemoryStatPreloadRelations)
}
func MemoryStatActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[MemoryStatEntity](query, MemoryStatActionQuery, MemoryStatPreloadRelations)
}
func MemoryStatActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content MemoryStatEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := MemoryStatActionCreate(&content, query)
	return err
}

var MemoryStatCommonCliFlags = []cli.Flag{
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
	&cli.Int64Flag{
		Name:     "heap-size",
		Required: false,
		Usage:    "heapSize",
	},
}
var MemoryStatCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "heapSize",
		StructField: "HeapSize",
		Required:    false,
		Usage:       "heapSize",
		Type:        "int64",
	},
}
var MemoryStatCommonCliFlagsOptional = []cli.Flag{
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
	&cli.Int64Flag{
		Name:     "heap-size",
		Required: false,
		Usage:    "heapSize",
	},
}
var MemoryStatCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   MemoryStatCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMemoryStatFromCli(c)
		if entity, err := MemoryStatActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MemoryStatCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &MemoryStatEntity{}
		for _, item := range MemoryStatCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := MemoryStatActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var MemoryStatUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   MemoryStatCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastMemoryStatFromCli(c)
		if entity, err := MemoryStatActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastMemoryStatFromCli(c *cli.Context) *MemoryStatEntity {
	template := &MemoryStatEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	return template
}
func MemoryStatSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		MemoryStatActionCreate,
		reflect.ValueOf(&MemoryStatEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func MemoryStatWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := MemoryStatActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "MemoryStat", result)
	}
}

var MemoryStatImportExportCommands = []cli.Command{
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
			MemoryStatActionSeeder(query, c.Int("count"))
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
				Value: "memory-stat-seeder.yml",
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
			MemoryStatActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "memory-stat-seeder-memory-stat.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of memory-stats, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]MemoryStatEntity{}
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
				MemoryStatActionCreate,
				reflect.ValueOf(&MemoryStatEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var MemoryStatCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(MemoryStatActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&MemoryStatEntity{}).Elem(), MemoryStatActionQuery),
	MemoryStatCreateCmd,
	MemoryStatUpdateCmd,
	MemoryStatCreateInteractiveCmd,
	MemoryStatWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&MemoryStatEntity{}).Elem(), MemoryStatActionRemove),
}

func MemoryStatCliFn() cli.Command {
	MemoryStatCliCommands = append(MemoryStatCliCommands, MemoryStatImportExportCommands...)
	return cli.Command{
		Name:        "memoryStat",
		Description: "MemoryStats module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: MemoryStatCliCommands,
	}
}

/**
 *	Override this function on MemoryStatEntityHttp.go,
 *	In order to add your own http
 **/
var AppendMemoryStatRouter = func(r *[]workspaces.Module2Action) {}

func GetMemoryStatModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/memory-stats",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, MemoryStatActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         MemoryStatActionQuery,
			ResponseEntity: &[]MemoryStatEntity{},
		},
		{
			Method: "GET",
			Url:    "/memory-stats/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, MemoryStatActionExport)
				},
			},
			Format:         "QUERY",
			Action:         MemoryStatActionExport,
			ResponseEntity: &[]MemoryStatEntity{},
		},
		{
			Method: "GET",
			Url:    "/memory-stat/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, MemoryStatActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         MemoryStatActionGetOne,
			ResponseEntity: &MemoryStatEntity{},
		},
		{
			Method: "POST",
			Url:    "/memory-stat",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, MemoryStatActionCreate)
				},
			},
			Action:         MemoryStatActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &MemoryStatEntity{},
			ResponseEntity: &MemoryStatEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/memory-stat",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, MemoryStatActionUpdate)
				},
			},
			Action:         MemoryStatActionUpdate,
			RequestEntity:  &MemoryStatEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &MemoryStatEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/memory-stats",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, MemoryStatActionBulkUpdate)
				},
			},
			Action:         MemoryStatActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[MemoryStatEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[MemoryStatEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/memory-stat",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_MEMORYSTAT_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, MemoryStatActionRemove)
				},
			},
			Action:         MemoryStatActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &MemoryStatEntity{},
		},
	}
	// Append user defined functions
	AppendMemoryStatRouter(&routes)
	return routes
}
func CreateMemoryStatRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetMemoryStatModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MemoryStatEntityJsonSchema, "memory-stat-http", "iot")
	workspaces.WriteEntitySchema("MemoryStatEntity", MemoryStatEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_MEMORYSTAT_DELETE = "root/memorystat/delete"
var PERM_ROOT_MEMORYSTAT_CREATE = "root/memorystat/create"
var PERM_ROOT_MEMORYSTAT_UPDATE = "root/memorystat/update"
var PERM_ROOT_MEMORYSTAT_QUERY = "root/memorystat/query"
var PERM_ROOT_MEMORYSTAT = "root/memorystat"
var ALL_MEMORYSTAT_PERMISSIONS = []string{
	PERM_ROOT_MEMORYSTAT_DELETE,
	PERM_ROOT_MEMORYSTAT_CREATE,
	PERM_ROOT_MEMORYSTAT_UPDATE,
	PERM_ROOT_MEMORYSTAT_QUERY,
	PERM_ROOT_MEMORYSTAT,
}
