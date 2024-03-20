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
	mocks "github.com/torabian/esp-studio/modules/iot/mocks/PhysicalSection"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gopkg.in/yaml.v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type PhysicalSectionEntity struct {
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
	Translations []*PhysicalSectionEntityPolyglot `json:"translations,omitempty" gorm:"foreignKey:LinkerId;references:UniqueId"`
	Children     []*PhysicalSectionEntity         `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo     *PhysicalSectionEntity           `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var PhysicalSectionPreloadRelations []string = []string{}
var PHYSICALSECTION_EVENT_CREATED = "physicalSection.created"
var PHYSICALSECTION_EVENT_UPDATED = "physicalSection.updated"
var PHYSICALSECTION_EVENT_DELETED = "physicalSection.deleted"
var PHYSICALSECTION_EVENTS = []string{
	PHYSICALSECTION_EVENT_CREATED,
	PHYSICALSECTION_EVENT_UPDATED,
	PHYSICALSECTION_EVENT_DELETED,
}

type PhysicalSectionFieldMap struct {
	Name workspaces.TranslatedString `yaml:"name"`
}

var PhysicalSectionEntityMetaConfig map[string]int64 = map[string]int64{}
var PhysicalSectionEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&PhysicalSectionEntity{}))

type PhysicalSectionEntityPolyglot struct {
	LinkerId   string `gorm:"uniqueId;not null;size:100;" json:"linkerId" yaml:"linkerId"`
	LanguageId string `gorm:"uniqueId;not null;size:100;" json:"languageId" yaml:"languageId"`
	Name       string `yaml:"name" json:"name"`
}

func entityPhysicalSectionFormatter(dto *PhysicalSectionEntity, query workspaces.QueryDSL) {
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
func PhysicalSectionMockEntity() *PhysicalSectionEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &PhysicalSectionEntity{
		Name: &stringHolder,
	}
	return entity
}
func PhysicalSectionActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := PhysicalSectionMockEntity()
		_, err := PhysicalSectionActionCreate(entity, query)
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
func (x *PhysicalSectionEntity) GetNameTranslated(language string) string {
	if x.Translations != nil && len(x.Translations) > 0 {
		for _, item := range x.Translations {
			if item.LanguageId == language {
				return item.Name
			}
		}
	}
	return ""
}
func PhysicalSectionActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*PhysicalSectionEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &PhysicalSectionEntity{
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
func PhysicalSectionAssociationCreate(dto *PhysicalSectionEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func PhysicalSectionRelationContentCreate(dto *PhysicalSectionEntity, query workspaces.QueryDSL) error {
	return nil
}
func PhysicalSectionRelationContentUpdate(dto *PhysicalSectionEntity, query workspaces.QueryDSL) error {
	return nil
}
func PhysicalSectionPolyglotCreateHandler(dto *PhysicalSectionEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
	workspaces.PolyglotCreateHandler(dto, &PhysicalSectionEntityPolyglot{}, query)
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func PhysicalSectionValidator(dto *PhysicalSectionEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func PhysicalSectionEntityPreSanitize(dto *PhysicalSectionEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func PhysicalSectionEntityBeforeCreateAppend(dto *PhysicalSectionEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	PhysicalSectionRecursiveAddUniqueId(dto, query)
}
func PhysicalSectionRecursiveAddUniqueId(dto *PhysicalSectionEntity, query workspaces.QueryDSL) {
}
func PhysicalSectionActionBatchCreateFn(dtos []*PhysicalSectionEntity, query workspaces.QueryDSL) ([]*PhysicalSectionEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*PhysicalSectionEntity{}
		for _, item := range dtos {
			s, err := PhysicalSectionActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func PhysicalSectionActionCreateFn(dto *PhysicalSectionEntity, query workspaces.QueryDSL) (*PhysicalSectionEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := PhysicalSectionValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	PhysicalSectionEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	PhysicalSectionEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	PhysicalSectionPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	PhysicalSectionRelationContentCreate(dto, query)
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
	PhysicalSectionAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(PHYSICALSECTION_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&PhysicalSectionEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func PhysicalSectionActionGetOne(query workspaces.QueryDSL) (*PhysicalSectionEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&PhysicalSectionEntity{})
	item, err := workspaces.GetOneEntity[PhysicalSectionEntity](query, refl)
	entityPhysicalSectionFormatter(item, query)
	return item, err
}
func PhysicalSectionActionQuery(query workspaces.QueryDSL) ([]*PhysicalSectionEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&PhysicalSectionEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[PhysicalSectionEntity](query, refl)
	for _, item := range items {
		entityPhysicalSectionFormatter(item, query)
	}
	return items, meta, err
}
func PhysicalSectionUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *PhysicalSectionEntity) (*PhysicalSectionEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = PHYSICALSECTION_EVENT_UPDATED
	PhysicalSectionEntityPreSanitize(fields, query)
	var item PhysicalSectionEntity
	q := dbref.
		Where(&PhysicalSectionEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	PhysicalSectionRelationContentUpdate(fields, query)
	PhysicalSectionPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&PhysicalSectionEntity{UniqueId: uniqueId}).
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
func PhysicalSectionActionUpdateFn(query workspaces.QueryDSL, fields *PhysicalSectionEntity) (*PhysicalSectionEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := PhysicalSectionValidator(fields, true); iError != nil {
		return nil, iError
	}
	PhysicalSectionRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := PhysicalSectionUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return PhysicalSectionUpdateExec(dbref, query, fields)
	}
}

var PhysicalSectionWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire physicalsections ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := PhysicalSectionActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func PhysicalSectionActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&PhysicalSectionEntity{})
	query.ActionRequires = []string{PERM_ROOT_PHYSICALSECTION_DELETE}
	return workspaces.RemoveEntity[PhysicalSectionEntity](query, refl)
}
func PhysicalSectionActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[PhysicalSectionEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'PhysicalSectionEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func PhysicalSectionActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[PhysicalSectionEntity]) (
	*workspaces.BulkRecordRequest[PhysicalSectionEntity], *workspaces.IError,
) {
	result := []*PhysicalSectionEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := PhysicalSectionActionUpdate(query, record)
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
func (x *PhysicalSectionEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var PhysicalSectionEntityMeta = workspaces.TableMetaData{
	EntityName:    "PhysicalSection",
	ExportKey:     "physical-sections",
	TableNameInDb: "fb_physicalsection_entities",
	EntityObject:  &PhysicalSectionEntity{},
	ExportStream:  PhysicalSectionActionExportT,
	ImportQuery:   PhysicalSectionActionImport,
}

func PhysicalSectionActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[PhysicalSectionEntity](query, PhysicalSectionActionQuery, PhysicalSectionPreloadRelations)
}
func PhysicalSectionActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[PhysicalSectionEntity](query, PhysicalSectionActionQuery, PhysicalSectionPreloadRelations)
}
func PhysicalSectionActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content PhysicalSectionEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := PhysicalSectionActionCreate(&content, query)
	return err
}

var PhysicalSectionCommonCliFlags = []cli.Flag{
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
}
var PhysicalSectionCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "name",
		StructField: "Name",
		Required:    false,
		Usage:       "name",
		Type:        "string",
	},
}
var PhysicalSectionCommonCliFlagsOptional = []cli.Flag{
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
}
var PhysicalSectionCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   PhysicalSectionCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastPhysicalSectionFromCli(c)
		if entity, err := PhysicalSectionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var PhysicalSectionCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &PhysicalSectionEntity{}
		for _, item := range PhysicalSectionCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := PhysicalSectionActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var PhysicalSectionUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   PhysicalSectionCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastPhysicalSectionFromCli(c)
		if entity, err := PhysicalSectionActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastPhysicalSectionFromCli(c *cli.Context) *PhysicalSectionEntity {
	template := &PhysicalSectionEntity{}
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
func PhysicalSectionSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		PhysicalSectionActionCreate,
		reflect.ValueOf(&PhysicalSectionEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func PhysicalSectionImportMocks() {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		PhysicalSectionActionCreate,
		reflect.ValueOf(&PhysicalSectionEntity{}).Elem(),
		&mocks.ViewsFs,
		[]string{},
		false,
	)
}
func PhysicalSectionWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := PhysicalSectionActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "PhysicalSection", result)
	}
}

var PhysicalSectionImportExportCommands = []cli.Command{
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
			PhysicalSectionActionSeeder(query, c.Int("count"))
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
				Value: "physical-section-seeder.yml",
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
			PhysicalSectionActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "physical-section-seeder-physical-section.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of physical-sections, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]PhysicalSectionEntity{}
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
				PhysicalSectionActionCreate,
				reflect.ValueOf(&PhysicalSectionEntity{}).Elem(),
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
				PhysicalSectionActionCreate,
				reflect.ValueOf(&PhysicalSectionEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var PhysicalSectionCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(PhysicalSectionActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&PhysicalSectionEntity{}).Elem(), PhysicalSectionActionQuery),
	PhysicalSectionCreateCmd,
	PhysicalSectionUpdateCmd,
	PhysicalSectionCreateInteractiveCmd,
	PhysicalSectionWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&PhysicalSectionEntity{}).Elem(), PhysicalSectionActionRemove),
}

func PhysicalSectionCliFn() cli.Command {
	PhysicalSectionCliCommands = append(PhysicalSectionCliCommands, PhysicalSectionImportExportCommands...)
	return cli.Command{
		Name:        "physicalSection",
		Description: "PhysicalSections module actions (sample module to handle complex entities)",
		Usage:       "",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: PhysicalSectionCliCommands,
	}
}

/**
 *	Override this function on PhysicalSectionEntityHttp.go,
 *	In order to add your own http
 **/
var AppendPhysicalSectionRouter = func(r *[]workspaces.Module2Action) {}

func GetPhysicalSectionModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/physical-sections",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, PhysicalSectionActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         PhysicalSectionActionQuery,
			ResponseEntity: &[]PhysicalSectionEntity{},
		},
		{
			Method: "GET",
			Url:    "/physical-sections/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, PhysicalSectionActionExport)
				},
			},
			Format:         "QUERY",
			Action:         PhysicalSectionActionExport,
			ResponseEntity: &[]PhysicalSectionEntity{},
		},
		{
			Method: "GET",
			Url:    "/physical-section/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, PhysicalSectionActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         PhysicalSectionActionGetOne,
			ResponseEntity: &PhysicalSectionEntity{},
		},
		{
			Method: "POST",
			Url:    "/physical-section",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, PhysicalSectionActionCreate)
				},
			},
			Action:         PhysicalSectionActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &PhysicalSectionEntity{},
			ResponseEntity: &PhysicalSectionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/physical-section",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, PhysicalSectionActionUpdate)
				},
			},
			Action:         PhysicalSectionActionUpdate,
			RequestEntity:  &PhysicalSectionEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &PhysicalSectionEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/physical-sections",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, PhysicalSectionActionBulkUpdate)
				},
			},
			Action:         PhysicalSectionActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[PhysicalSectionEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[PhysicalSectionEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/physical-section",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_PHYSICALSECTION_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, PhysicalSectionActionRemove)
				},
			},
			Action:         PhysicalSectionActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &PhysicalSectionEntity{},
		},
	}
	// Append user defined functions
	AppendPhysicalSectionRouter(&routes)
	return routes
}
func CreatePhysicalSectionRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetPhysicalSectionModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, PhysicalSectionEntityJsonSchema, "physical-section-http", "iot")
	workspaces.WriteEntitySchema("PhysicalSectionEntity", PhysicalSectionEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_PHYSICALSECTION_DELETE = "root/physicalsection/delete"
var PERM_ROOT_PHYSICALSECTION_CREATE = "root/physicalsection/create"
var PERM_ROOT_PHYSICALSECTION_UPDATE = "root/physicalsection/update"
var PERM_ROOT_PHYSICALSECTION_QUERY = "root/physicalsection/query"
var PERM_ROOT_PHYSICALSECTION = "root/physicalsection"
var ALL_PHYSICALSECTION_PERMISSIONS = []string{
	PERM_ROOT_PHYSICALSECTION_DELETE,
	PERM_ROOT_PHYSICALSECTION_CREATE,
	PERM_ROOT_PHYSICALSECTION_UPDATE,
	PERM_ROOT_PHYSICALSECTION_QUERY,
	PERM_ROOT_PHYSICALSECTION,
}
