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
	seeders "github.com/torabian/esp-studio/modules/iot/seeders/HmiComponentType"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type HmiComponentTypeEntity struct {
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
	IsDirectInteractable *bool `json:"isDirectInteractable" yaml:"isDirectInteractable"       `
	// Datenano also has a text representation
	Translations []*HmiComponentTypeEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*HmiComponentTypeEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *HmiComponentTypeEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var HmiComponentTypePreloadRelations []string = []string{}
var HMICOMPONENTTYPE_EVENT_CREATED = "hmiComponentType.created"
var HMICOMPONENTTYPE_EVENT_UPDATED = "hmiComponentType.updated"
var HMICOMPONENTTYPE_EVENT_DELETED = "hmiComponentType.deleted"
var HMICOMPONENTTYPE_EVENTS = []string{
	HMICOMPONENTTYPE_EVENT_CREATED,
	HMICOMPONENTTYPE_EVENT_UPDATED,
	HMICOMPONENTTYPE_EVENT_DELETED,
}

type HmiComponentTypeFieldMap struct {
	Name                 workspaces.TranslatedString `yaml:"name"`
	IsDirectInteractable workspaces.TranslatedString `yaml:"isDirectInteractable"`
}

var HmiComponentTypeEntityMetaConfig map[string]int64 = map[string]int64{}
var HmiComponentTypeEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&HmiComponentTypeEntity{}))

type HmiComponentTypeEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityHmiComponentTypeFormatter(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) {
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
func HmiComponentTypeMockEntity() *HmiComponentTypeEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &HmiComponentTypeEntity{
		Name: &stringHolder,
	}
	return entity
}
func HmiComponentTypeActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := HmiComponentTypeMockEntity()
		_, err := HmiComponentTypeActionCreate(entity, query)
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
func (x *HmiComponentTypeEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func HmiComponentTypeActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*HmiComponentTypeEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &HmiComponentTypeEntity{
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
func HmiComponentTypeAssociationCreate(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func HmiComponentTypeRelationContentCreate(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func HmiComponentTypeRelationContentUpdate(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) error {
	return nil
}
func HmiComponentTypePolyglotCreateHandler(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &HmiComponentTypeEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func HmiComponentTypeValidator(dto *HmiComponentTypeEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func HmiComponentTypeEntityPreSanitize(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func HmiComponentTypeEntityBeforeCreateAppend(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	HmiComponentTypeRecursiveAddUniqueId(dto, query)
}
func HmiComponentTypeRecursiveAddUniqueId(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) {
}
func HmiComponentTypeActionBatchCreateFn(dtos []*HmiComponentTypeEntity, query workspaces.QueryDSL) ([]*HmiComponentTypeEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*HmiComponentTypeEntity{}
		for _, item := range dtos {
			s, err := HmiComponentTypeActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func HmiComponentTypeActionCreateFn(dto *HmiComponentTypeEntity, query workspaces.QueryDSL) (*HmiComponentTypeEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := HmiComponentTypeValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	HmiComponentTypeEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	HmiComponentTypeEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	HmiComponentTypePolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	HmiComponentTypeRelationContentCreate(dto, query)
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
	HmiComponentTypeAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(HMICOMPONENTTYPE_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&HmiComponentTypeEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func HmiComponentTypeActionGetOne(query workspaces.QueryDSL) (*HmiComponentTypeEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&HmiComponentTypeEntity{})
	item, err := workspaces.GetOneEntity[HmiComponentTypeEntity](query, refl)
	entityHmiComponentTypeFormatter(item, query)
	return item, err
}
func HmiComponentTypeActionQuery(query workspaces.QueryDSL) ([]*HmiComponentTypeEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&HmiComponentTypeEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[HmiComponentTypeEntity](query, refl)
	for _, item := range items {
		entityHmiComponentTypeFormatter(item, query)
	}
	return items, meta, err
}
func HmiComponentTypeUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *HmiComponentTypeEntity) (*HmiComponentTypeEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = HMICOMPONENTTYPE_EVENT_UPDATED
	HmiComponentTypeEntityPreSanitize(fields, query)
	var item HmiComponentTypeEntity
	q := dbref.
		Where(&HmiComponentTypeEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	HmiComponentTypeRelationContentUpdate(fields, query)
	HmiComponentTypePolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&HmiComponentTypeEntity{UniqueId: uniqueId}).
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
func HmiComponentTypeActionUpdateFn(query workspaces.QueryDSL, fields *HmiComponentTypeEntity) (*HmiComponentTypeEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := HmiComponentTypeValidator(fields, true); iError != nil {
		return nil, iError
	}
	HmiComponentTypeRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := HmiComponentTypeUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return HmiComponentTypeUpdateExec(dbref, query, fields)
	}
}

var HmiComponentTypeWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire hmicomponenttypes ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := HmiComponentTypeActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func HmiComponentTypeActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&HmiComponentTypeEntity{})
	query.ActionRequires = []string{PERM_ROOT_HMICOMPONENTTYPE_DELETE}
	return workspaces.RemoveEntity[HmiComponentTypeEntity](query, refl)
}
func HmiComponentTypeActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[HmiComponentTypeEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'HmiComponentTypeEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func HmiComponentTypeActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[HmiComponentTypeEntity]) (
	*workspaces.BulkRecordRequest[HmiComponentTypeEntity], *workspaces.IError,
) {
	result := []*HmiComponentTypeEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := HmiComponentTypeActionUpdate(query, record)
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
func (x *HmiComponentTypeEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var HmiComponentTypeEntityMeta = workspaces.TableMetaData{
	EntityName:    "HmiComponentType",
	ExportKey:     "hmi-component-types",
	TableNameInDb: "fb_hmicomponenttype_entities",
	EntityObject:  &HmiComponentTypeEntity{},
	ExportStream:  HmiComponentTypeActionExportT,
	ImportQuery:   HmiComponentTypeActionImport,
}

func HmiComponentTypeActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[HmiComponentTypeEntity](query, HmiComponentTypeActionQuery, HmiComponentTypePreloadRelations)
}
func HmiComponentTypeActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[HmiComponentTypeEntity](query, HmiComponentTypeActionQuery, HmiComponentTypePreloadRelations)
}
func HmiComponentTypeActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content HmiComponentTypeEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := HmiComponentTypeActionCreate(&content, query)
	return err
}

var HmiComponentTypeCommonCliFlags = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "is-direct-interactable",
		Required: false,
		Usage:    "isDirectInteractable",
	},
}
var HmiComponentTypeCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
	{
		Name:        "isDirectInteractable",
		StructField: "IsDirectInteractable",
		Required:    false,
		Usage:       "isDirectInteractable",
		Type:        "bool",
	},
}
var HmiComponentTypeCommonCliFlagsOptional = []cli.Flag{
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
	&cli.BoolFlag{
		Name:     "is-direct-interactable",
		Required: false,
		Usage:    "isDirectInteractable",
	},
}
var HmiComponentTypeCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   HmiComponentTypeCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastHmiComponentTypeFromCli(c)
		if entity, err := HmiComponentTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var HmiComponentTypeCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &HmiComponentTypeEntity{}
		for _, item := range HmiComponentTypeCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := HmiComponentTypeActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var HmiComponentTypeUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   HmiComponentTypeCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastHmiComponentTypeFromCli(c)
		if entity, err := HmiComponentTypeActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastHmiComponentTypeFromCli(c *cli.Context) *HmiComponentTypeEntity {
	template := &HmiComponentTypeEntity{}
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
	return template
}
func HmiComponentTypeSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		HmiComponentTypeActionCreate,
		reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func HmiComponentTypeSyncSeeders() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{WorkspaceId: workspaces.USER_SYSTEM},
		HmiComponentTypeActionCreate,
		reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(),
		&seeders.ViewsFs,
		[]string{},
		true,
	)
}
func HmiComponentTypeWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := HmiComponentTypeActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "HmiComponentType", result)
	}
}

var HmiComponentTypeImportExportCommands = []cli.Command{
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
			HmiComponentTypeActionSeeder(query, c.Int("count"))
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
				Value: "hmi-component-type-seeder.yml",
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
			HmiComponentTypeActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "hmi-component-type-seeder-hmi-component-type.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of hmi-component-types, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]HmiComponentTypeEntity{}
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
				HmiComponentTypeActionCreate,
				reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(),
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
				HmiComponentTypeActionQuery,
				reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(),
				c.String("file"),
				&metas.MetaFs,
				"HmiComponentTypeFieldMap.yml",
				HmiComponentTypePreloadRelations,
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
				HmiComponentTypeActionCreate,
				reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var HmiComponentTypeCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(HmiComponentTypeActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(), HmiComponentTypeActionQuery),
	HmiComponentTypeCreateCmd,
	HmiComponentTypeUpdateCmd,
	HmiComponentTypeCreateInteractiveCmd,
	HmiComponentTypeWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&HmiComponentTypeEntity{}).Elem(), HmiComponentTypeActionRemove),
}

func HmiComponentTypeCliFn() cli.Command {
	HmiComponentTypeCliCommands = append(HmiComponentTypeCliCommands, HmiComponentTypeImportExportCommands...)
	return cli.Command{
		Name:        "hmiComponentType",
		Description: "HmiComponentTypes module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: HmiComponentTypeCliCommands,
	}
}

/**
 *	Override this function on HmiComponentTypeEntityHttp.go,
 *	In order to add your own http
 **/
var AppendHmiComponentTypeRouter = func(r *[]workspaces.Module2Action) {}

func GetHmiComponentTypeModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/hmi-component-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, HmiComponentTypeActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         HmiComponentTypeActionQuery,
			ResponseEntity: &[]HmiComponentTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/hmi-component-types/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, HmiComponentTypeActionExport)
				},
			},
			Format:         "QUERY",
			Action:         HmiComponentTypeActionExport,
			ResponseEntity: &[]HmiComponentTypeEntity{},
		},
		{
			Method: "GET",
			Url:    "/hmi-component-type/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, HmiComponentTypeActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         HmiComponentTypeActionGetOne,
			ResponseEntity: &HmiComponentTypeEntity{},
		},
		{
			Method: "POST",
			Url:    "/hmi-component-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, HmiComponentTypeActionCreate)
				},
			},
			Action:         HmiComponentTypeActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &HmiComponentTypeEntity{},
			ResponseEntity: &HmiComponentTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/hmi-component-type",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, HmiComponentTypeActionUpdate)
				},
			},
			Action:         HmiComponentTypeActionUpdate,
			RequestEntity:  &HmiComponentTypeEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &HmiComponentTypeEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/hmi-component-types",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, HmiComponentTypeActionBulkUpdate)
				},
			},
			Action:         HmiComponentTypeActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[HmiComponentTypeEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[HmiComponentTypeEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/hmi-component-type",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_HMICOMPONENTTYPE_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, HmiComponentTypeActionRemove)
				},
			},
			Action:         HmiComponentTypeActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &HmiComponentTypeEntity{},
		},
	}
	// Append user defined functions
	AppendHmiComponentTypeRouter(&routes)
	return routes
}
func CreateHmiComponentTypeRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetHmiComponentTypeModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, HmiComponentTypeEntityJsonSchema, "hmi-component-type-http", "iot")
	workspaces.WriteEntitySchema("HmiComponentTypeEntity", HmiComponentTypeEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_HMICOMPONENTTYPE_DELETE = "root/hmicomponenttype/delete"
var PERM_ROOT_HMICOMPONENTTYPE_CREATE = "root/hmicomponenttype/create"
var PERM_ROOT_HMICOMPONENTTYPE_UPDATE = "root/hmicomponenttype/update"
var PERM_ROOT_HMICOMPONENTTYPE_QUERY = "root/hmicomponenttype/query"
var PERM_ROOT_HMICOMPONENTTYPE = "root/hmicomponenttype"
var ALL_HMICOMPONENTTYPE_PERMISSIONS = []string{
	PERM_ROOT_HMICOMPONENTTYPE_DELETE,
	PERM_ROOT_HMICOMPONENTTYPE_CREATE,
	PERM_ROOT_HMICOMPONENTTYPE_UPDATE,
	PERM_ROOT_HMICOMPONENTTYPE_QUERY,
	PERM_ROOT_HMICOMPONENTTYPE,
}
