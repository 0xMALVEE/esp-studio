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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/ExpanderFunction"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ExpanderFunctionEntity struct {
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
	NativeFn *string `json:"nativeFn" yaml:"nativeFn"       `
	// Datenano also has a text representation
	Translations []*ExpanderFunctionEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*ExpanderFunctionEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *ExpanderFunctionEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var ExpanderFunctionPreloadRelations []string = []string{}
var EXPANDERFUNCTION_EVENT_CREATED = "expanderFunction.created"
var EXPANDERFUNCTION_EVENT_UPDATED = "expanderFunction.updated"
var EXPANDERFUNCTION_EVENT_DELETED = "expanderFunction.deleted"
var EXPANDERFUNCTION_EVENTS = []string{
	EXPANDERFUNCTION_EVENT_CREATED,
	EXPANDERFUNCTION_EVENT_UPDATED,
	EXPANDERFUNCTION_EVENT_DELETED,
}

type ExpanderFunctionFieldMap struct {
	Name     workspaces.TranslatedString `yaml:"name"`
	NativeFn workspaces.TranslatedString `yaml:"nativeFn"`
}

var ExpanderFunctionEntityMetaConfig map[string]int64 = map[string]int64{}
var ExpanderFunctionEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&ExpanderFunctionEntity{}))

type ExpanderFunctionEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityExpanderFunctionFormatter(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) {
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
func ExpanderFunctionMockEntity() *ExpanderFunctionEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &ExpanderFunctionEntity{
		Name:     &stringHolder,
		NativeFn: &stringHolder,
	}
	return entity
}
func ExpanderFunctionActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := ExpanderFunctionMockEntity()
		_, err := ExpanderFunctionActionCreate(entity, query)
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
func (x *ExpanderFunctionEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func ExpanderFunctionActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*ExpanderFunctionEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &ExpanderFunctionEntity{
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
func ExpanderFunctionAssociationCreate(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func ExpanderFunctionRelationContentCreate(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) error {
	return nil
}
func ExpanderFunctionRelationContentUpdate(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) error {
	return nil
}
func ExpanderFunctionPolyglotCreateHandler(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &ExpanderFunctionEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func ExpanderFunctionValidator(dto *ExpanderFunctionEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func ExpanderFunctionEntityPreSanitize(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func ExpanderFunctionEntityBeforeCreateAppend(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	ExpanderFunctionRecursiveAddUniqueId(dto, query)
}
func ExpanderFunctionRecursiveAddUniqueId(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) {
}
func ExpanderFunctionActionBatchCreateFn(dtos []*ExpanderFunctionEntity, query workspaces.QueryDSL) ([]*ExpanderFunctionEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*ExpanderFunctionEntity{}
		for _, item := range dtos {
			s, err := ExpanderFunctionActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func ExpanderFunctionActionCreateFn(dto *ExpanderFunctionEntity, query workspaces.QueryDSL) (*ExpanderFunctionEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := ExpanderFunctionValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	ExpanderFunctionEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	ExpanderFunctionEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	ExpanderFunctionPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	ExpanderFunctionRelationContentCreate(dto, query)
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
	ExpanderFunctionAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(EXPANDERFUNCTION_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&ExpanderFunctionEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func ExpanderFunctionActionGetOne(query workspaces.QueryDSL) (*ExpanderFunctionEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&ExpanderFunctionEntity{})
	item, err := workspaces.GetOneEntity[ExpanderFunctionEntity](query, refl)
	entityExpanderFunctionFormatter(item, query)
	return item, err
}
func ExpanderFunctionActionQuery(query workspaces.QueryDSL) ([]*ExpanderFunctionEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&ExpanderFunctionEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[ExpanderFunctionEntity](query, refl)
	for _, item := range items {
		entityExpanderFunctionFormatter(item, query)
	}
	return items, meta, err
}
func ExpanderFunctionUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *ExpanderFunctionEntity) (*ExpanderFunctionEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = EXPANDERFUNCTION_EVENT_UPDATED
	ExpanderFunctionEntityPreSanitize(fields, query)
	var item ExpanderFunctionEntity
	q := dbref.
		Where(&ExpanderFunctionEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	ExpanderFunctionRelationContentUpdate(fields, query)
	ExpanderFunctionPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&ExpanderFunctionEntity{UniqueId: uniqueId}).
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
func ExpanderFunctionActionUpdateFn(query workspaces.QueryDSL, fields *ExpanderFunctionEntity) (*ExpanderFunctionEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := ExpanderFunctionValidator(fields, true); iError != nil {
		return nil, iError
	}
	ExpanderFunctionRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := ExpanderFunctionUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return ExpanderFunctionUpdateExec(dbref, query, fields)
	}
}

var ExpanderFunctionWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire expanderfunctions ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := ExpanderFunctionActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func ExpanderFunctionActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&ExpanderFunctionEntity{})
	query.ActionRequires = []string{PERM_ROOT_EXPANDERFUNCTION_DELETE}
	return workspaces.RemoveEntity[ExpanderFunctionEntity](query, refl)
}
func ExpanderFunctionActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[ExpanderFunctionEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'ExpanderFunctionEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func ExpanderFunctionActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[ExpanderFunctionEntity]) (
	*workspaces.BulkRecordRequest[ExpanderFunctionEntity], *workspaces.IError,
) {
	result := []*ExpanderFunctionEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := ExpanderFunctionActionUpdate(query, record)
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
func (x *ExpanderFunctionEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var ExpanderFunctionEntityMeta = workspaces.TableMetaData{
	EntityName:    "ExpanderFunction",
	ExportKey:     "expander-functions",
	TableNameInDb: "fb_expanderfunction_entities",
	EntityObject:  &ExpanderFunctionEntity{},
	ExportStream:  ExpanderFunctionActionExportT,
	ImportQuery:   ExpanderFunctionActionImport,
}

func ExpanderFunctionActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[ExpanderFunctionEntity](query, ExpanderFunctionActionQuery, ExpanderFunctionPreloadRelations)
}
func ExpanderFunctionActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[ExpanderFunctionEntity](query, ExpanderFunctionActionQuery, ExpanderFunctionPreloadRelations)
}
func ExpanderFunctionActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content ExpanderFunctionEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := ExpanderFunctionActionCreate(&content, query)
	return err
}

var ExpanderFunctionCommonCliFlags = []cli.Flag{
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
var ExpanderFunctionCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
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
var ExpanderFunctionCommonCliFlagsOptional = []cli.Flag{
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
var ExpanderFunctionCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   ExpanderFunctionCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastExpanderFunctionFromCli(c)
		if entity, err := ExpanderFunctionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ExpanderFunctionCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &ExpanderFunctionEntity{}
		for _, item := range ExpanderFunctionCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := ExpanderFunctionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var ExpanderFunctionUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   ExpanderFunctionCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastExpanderFunctionFromCli(c)
		if entity, err := ExpanderFunctionActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastExpanderFunctionFromCli(c *cli.Context) *ExpanderFunctionEntity {
	template := &ExpanderFunctionEntity{}
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
func ExpanderFunctionSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		ExpanderFunctionActionCreate,
		reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func ExpanderFunctionSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		ExpanderFunctionActionCreate,
		reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func ExpanderFunctionWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := ExpanderFunctionActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "ExpanderFunction", result)
	}
}

var ExpanderFunctionImportExportCommands = []cli.Command{
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
			ExpanderFunctionActionSeeder(query, c.Int("count"))
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
				Value: "expander-function-seeder.yml",
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
			ExpanderFunctionActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "expander-function-seeder-expander-function.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of expander-functions, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]ExpanderFunctionEntity{}
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
				ExpanderFunctionActionCreate,
				reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(),
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
				ExpanderFunctionActionQuery,
				reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"ExpanderFunctionFieldMap.yml",
				ExpanderFunctionPreloadRelations,
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
				ExpanderFunctionActionCreate,
				reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var ExpanderFunctionCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(ExpanderFunctionActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(), ExpanderFunctionActionQuery),
	ExpanderFunctionCreateCmd,
	ExpanderFunctionUpdateCmd,
	ExpanderFunctionCreateInteractiveCmd,
	ExpanderFunctionWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&ExpanderFunctionEntity{}).Elem(), ExpanderFunctionActionRemove),
}

func ExpanderFunctionCliFn() cli.Command {
	ExpanderFunctionCliCommands = append(ExpanderFunctionCliCommands, ExpanderFunctionImportExportCommands...)
	return cli.Command{
		Name:        "expanderFunction",
		Description: "ExpanderFunctions module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: ExpanderFunctionCliCommands,
	}
}

/**
 *	Override this function on ExpanderFunctionEntityHttp.go,
 *	In order to add your own http
 **/
var AppendExpanderFunctionRouter = func(r *[]workspaces.Module2Action) {}

func GetExpanderFunctionModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/expander-functions",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, ExpanderFunctionActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         ExpanderFunctionActionQuery,
			ResponseEntity: &[]ExpanderFunctionEntity{},
		},
		{
			Method: "GET",
			Url:    "/expander-functions/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, ExpanderFunctionActionExport)
				},
			},
			Format:         "QUERY",
			Action:         ExpanderFunctionActionExport,
			ResponseEntity: &[]ExpanderFunctionEntity{},
		},
		{
			Method: "GET",
			Url:    "/expander-function/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, ExpanderFunctionActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         ExpanderFunctionActionGetOne,
			ResponseEntity: &ExpanderFunctionEntity{},
		},
		{
			Method: "POST",
			Url:    "/expander-function",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, ExpanderFunctionActionCreate)
				},
			},
			Action:         ExpanderFunctionActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &ExpanderFunctionEntity{},
			ResponseEntity: &ExpanderFunctionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/expander-function",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, ExpanderFunctionActionUpdate)
				},
			},
			Action:         ExpanderFunctionActionUpdate,
			RequestEntity:  &ExpanderFunctionEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &ExpanderFunctionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/expander-functions",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, ExpanderFunctionActionBulkUpdate)
				},
			},
			Action:         ExpanderFunctionActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[ExpanderFunctionEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[ExpanderFunctionEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/expander-function",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_EXPANDERFUNCTION_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, ExpanderFunctionActionRemove)
				},
			},
			Action:         ExpanderFunctionActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &ExpanderFunctionEntity{},
		},
	}
	// Append user defined functions
	AppendExpanderFunctionRouter(&routes)
	return routes
}
func CreateExpanderFunctionRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetExpanderFunctionModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, ExpanderFunctionEntityJsonSchema, "expander-function-http", "iot")
	workspaces.WriteEntitySchema("ExpanderFunctionEntity", ExpanderFunctionEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_EXPANDERFUNCTION_DELETE = "root/expanderfunction/delete"
var PERM_ROOT_EXPANDERFUNCTION_CREATE = "root/expanderfunction/create"
var PERM_ROOT_EXPANDERFUNCTION_UPDATE = "root/expanderfunction/update"
var PERM_ROOT_EXPANDERFUNCTION_QUERY = "root/expanderfunction/query"
var PERM_ROOT_EXPANDERFUNCTION = "root/expanderfunction"
var ALL_EXPANDERFUNCTION_PERMISSIONS = []string{
	PERM_ROOT_EXPANDERFUNCTION_DELETE,
	PERM_ROOT_EXPANDERFUNCTION_CREATE,
	PERM_ROOT_EXPANDERFUNCTION_UPDATE,
	PERM_ROOT_EXPANDERFUNCTION_QUERY,
	PERM_ROOT_EXPANDERFUNCTION,
}
