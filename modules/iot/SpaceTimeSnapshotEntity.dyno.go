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

type SpaceTimeSnapshotEntity struct {
	Visibility       *string  `json:"visibility,omitempty" yaml:"visibility"`
	WorkspaceId      *string  `json:"workspaceId,omitempty" yaml:"workspaceId"`
	LinkerId         *string  `json:"linkerId,omitempty" yaml:"linkerId"`
	ParentId         *string  `json:"parentId,omitempty" yaml:"parentId"`
	UniqueId         string   `json:"uniqueId,omitempty" gorm:"primarykey;uniqueId;unique;not null;size:100;" yaml:"uniqueId"`
	UserId           *string  `json:"userId,omitempty" yaml:"userId"`
	Rank             int64    `json:"rank,omitempty" gorm:"type:int;name:rank"`
	Updated          int64    `json:"updated,omitempty" gorm:"autoUpdateTime:nano"`
	Created          int64    `json:"created,omitempty" gorm:"autoUpdateTime:nano"`
	CreatedFormatted string   `json:"createdFormatted,omitempty" sql:"-"`
	UpdatedFormatted string   `json:"updatedFormatted,omitempty" sql:"-"`
	Lat              *float64 `json:"lat" yaml:"lat"  validate:"required"       `
	// Datenano also has a text representation
	Lng *float64 `json:"lng" yaml:"lng"  validate:"required"       `
	// Datenano also has a text representation
	Alt *float64 `json:"alt" yaml:"alt"  validate:"required"       `
	// Datenano also has a text representation
	MovableObject *MovableObjectEntity `json:"movableObject" yaml:"movableObject"    gorm:"foreignKey:MovableObjectId;references:UniqueId"     `
	// Datenano also has a text representation
	MovableObjectId *string                    `json:"movableObjectId" yaml:"movableObjectId"`
	Children        []*SpaceTimeSnapshotEntity `gorm:"-" sql:"-" json:"children,omitempty" yaml:"children"`
	LinkedTo        *SpaceTimeSnapshotEntity   `yaml:"-" gorm:"-" json:"-" sql:"-"`
}

var SpaceTimeSnapshotPreloadRelations []string = []string{}
var SPACETIMESNAPSHOT_EVENT_CREATED = "spaceTimeSnapshot.created"
var SPACETIMESNAPSHOT_EVENT_UPDATED = "spaceTimeSnapshot.updated"
var SPACETIMESNAPSHOT_EVENT_DELETED = "spaceTimeSnapshot.deleted"
var SPACETIMESNAPSHOT_EVENTS = []string{
	SPACETIMESNAPSHOT_EVENT_CREATED,
	SPACETIMESNAPSHOT_EVENT_UPDATED,
	SPACETIMESNAPSHOT_EVENT_DELETED,
}

type SpaceTimeSnapshotFieldMap struct {
	Lat           workspaces.TranslatedString `yaml:"lat"`
	Lng           workspaces.TranslatedString `yaml:"lng"`
	Alt           workspaces.TranslatedString `yaml:"alt"`
	MovableObject workspaces.TranslatedString `yaml:"movableObject"`
}

var SpaceTimeSnapshotEntityMetaConfig map[string]int64 = map[string]int64{}
var SpaceTimeSnapshotEntityJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&SpaceTimeSnapshotEntity{}))

func entitySpaceTimeSnapshotFormatter(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) {
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
func SpaceTimeSnapshotMockEntity() *SpaceTimeSnapshotEntity {
	stringHolder := "~"
	int64Holder := int64(10)
	float64Holder := float64(10)
	_ = stringHolder
	_ = int64Holder
	_ = float64Holder
	entity := &SpaceTimeSnapshotEntity{
		Lat: &float64Holder,
		Lng: &float64Holder,
		Alt: &float64Holder,
	}
	return entity
}
func SpaceTimeSnapshotActionSeeder(query workspaces.QueryDSL, count int) {
	successInsert := 0
	failureInsert := 0
	bar := progressbar.Default(int64(count))
	for i := 1; i <= count; i++ {
		entity := SpaceTimeSnapshotMockEntity()
		_, err := SpaceTimeSnapshotActionCreate(entity, query)
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
func SpaceTimeSnapshotActionSeederInit(query workspaces.QueryDSL, file string, format string) {
	body := []byte{}
	var err error
	data := []*SpaceTimeSnapshotEntity{}
	tildaRef := "~"
	_ = tildaRef
	entity := &SpaceTimeSnapshotEntity{}
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
func SpaceTimeSnapshotAssociationCreate(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) error {
	return nil
}

/**
* These kind of content are coming from another entity, which is indepndent module
* If we want to create them, we need to do it before. This is not association.
**/
func SpaceTimeSnapshotRelationContentCreate(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) error {
	return nil
}
func SpaceTimeSnapshotRelationContentUpdate(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) error {
	return nil
}
func SpaceTimeSnapshotPolyglotCreateHandler(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}
}

/**
 * This will be validating your entity fully. Important note is that, you add validate:* tag
 * in your entity, it will automatically work here. For slices inside entity, make sure you add
 * extra line of AppendSliceErrors, otherwise they won't be detected
 */
func SpaceTimeSnapshotValidator(dto *SpaceTimeSnapshotEntity, isPatch bool) *workspaces.IError {
	err := workspaces.CommonStructValidatorPointer(dto, isPatch)
	return err
}
func SpaceTimeSnapshotEntityPreSanitize(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) {
	var stripPolicy = bluemonday.StripTagsPolicy()
	var ugcPolicy = bluemonday.UGCPolicy().AllowAttrs("class").Globally()
	_ = stripPolicy
	_ = ugcPolicy
}
func SpaceTimeSnapshotEntityBeforeCreateAppend(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) {
	if dto.UniqueId == "" {
		dto.UniqueId = workspaces.UUID()
	}
	dto.WorkspaceId = &query.WorkspaceId
	dto.UserId = &query.UserId
	SpaceTimeSnapshotRecursiveAddUniqueId(dto, query)
}
func SpaceTimeSnapshotRecursiveAddUniqueId(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) {
}
func SpaceTimeSnapshotActionBatchCreateFn(dtos []*SpaceTimeSnapshotEntity, query workspaces.QueryDSL) ([]*SpaceTimeSnapshotEntity, *workspaces.IError) {
	if dtos != nil && len(dtos) > 0 {
		items := []*SpaceTimeSnapshotEntity{}
		for _, item := range dtos {
			s, err := SpaceTimeSnapshotActionCreateFn(item, query)
			if err != nil {
				return nil, err
			}
			items = append(items, s)
		}
		return items, nil
	}
	return dtos, nil
}
func SpaceTimeSnapshotActionCreateFn(dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	// 1. Validate always
	if iError := SpaceTimeSnapshotValidator(dto, false); iError != nil {
		return nil, iError
	}
	// 1.5 Sanitize the content coming of the front-end
	SpaceTimeSnapshotEntityPreSanitize(dto, query)
	// 2. Append the necessary information about user, workspace
	SpaceTimeSnapshotEntityBeforeCreateAppend(dto, query)
	// 3. Append the necessary translations, even if english
	SpaceTimeSnapshotPolyglotCreateHandler(dto, query)
	// 3.5. Create other entities if we want select from them
	SpaceTimeSnapshotRelationContentCreate(dto, query)
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
	SpaceTimeSnapshotAssociationCreate(dto, query)
	// 6. Fire the event into system
	event.MustFire(SPACETIMESNAPSHOT_EVENT_CREATED, event.M{
		"entity":    dto,
		"entityKey": workspaces.GetTypeString(&SpaceTimeSnapshotEntity{}),
		"target":    "workspace",
		"unqiueId":  query.WorkspaceId,
	})
	return dto, nil
}
func SpaceTimeSnapshotActionGetOne(query workspaces.QueryDSL) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	refl := reflect.ValueOf(&SpaceTimeSnapshotEntity{})
	item, err := workspaces.GetOneEntity[SpaceTimeSnapshotEntity](query, refl)
	entitySpaceTimeSnapshotFormatter(item, query)
	return item, err
}
func SpaceTimeSnapshotActionQuery(query workspaces.QueryDSL) ([]*SpaceTimeSnapshotEntity, *workspaces.QueryResultMeta, error) {
	refl := reflect.ValueOf(&SpaceTimeSnapshotEntity{})
	items, meta, err := workspaces.QueryEntitiesPointer[SpaceTimeSnapshotEntity](query, refl)
	for _, item := range items {
		entitySpaceTimeSnapshotFormatter(item, query)
	}
	return items, meta, err
}
func SpaceTimeSnapshotUpdateExec(dbref *gorm.DB, query workspaces.QueryDSL, fields *SpaceTimeSnapshotEntity) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	uniqueId := fields.UniqueId
	query.TriggerEventName = SPACETIMESNAPSHOT_EVENT_UPDATED
	SpaceTimeSnapshotEntityPreSanitize(fields, query)
	var item SpaceTimeSnapshotEntity
	q := dbref.
		Where(&SpaceTimeSnapshotEntity{UniqueId: uniqueId}).
		FirstOrCreate(&item)
	err := q.UpdateColumns(fields).Error
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	query.Tx = dbref
	SpaceTimeSnapshotRelationContentUpdate(fields, query)
	SpaceTimeSnapshotPolyglotCreateHandler(fields, query)
	// @meta(update has many)
	err = dbref.
		Preload(clause.Associations).
		Where(&SpaceTimeSnapshotEntity{UniqueId: uniqueId}).
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
func SpaceTimeSnapshotActionUpdateFn(query workspaces.QueryDSL, fields *SpaceTimeSnapshotEntity) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	if fields == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}
	// 1. Validate always
	if iError := SpaceTimeSnapshotValidator(fields, true); iError != nil {
		return nil, iError
	}
	SpaceTimeSnapshotRecursiveAddUniqueId(fields, query)
	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
		vf := dbref.Transaction(func(tx *gorm.DB) error {
			dbref = tx
			_, err := SpaceTimeSnapshotUpdateExec(dbref, query, fields)
			if err == nil {
				return nil
			} else {
				return err
			}
		})
		return nil, workspaces.CastToIError(vf)
	} else {
		dbref = query.Tx
		return SpaceTimeSnapshotUpdateExec(dbref, query, fields)
	}
}

var SpaceTimeSnapshotWipeCmd cli.Command = cli.Command{
	Name:  "wipe",
	Usage: "Wipes entire spacetimesnapshots ",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		count, _ := SpaceTimeSnapshotActionWipeClean(query)
		fmt.Println("Removed", count, "of entities")
		return nil
	},
}

func SpaceTimeSnapshotActionRemove(query workspaces.QueryDSL) (int64, *workspaces.IError) {
	refl := reflect.ValueOf(&SpaceTimeSnapshotEntity{})
	query.ActionRequires = []string{PERM_ROOT_SPACETIMESNAPSHOT_DELETE}
	return workspaces.RemoveEntity[SpaceTimeSnapshotEntity](query, refl)
}
func SpaceTimeSnapshotActionWipeClean(query workspaces.QueryDSL) (int64, error) {
	var err error
	var count int64 = 0
	{
		subCount, subErr := workspaces.WipeCleanEntity[SpaceTimeSnapshotEntity]()
		if subErr != nil {
			fmt.Println("Error while wiping 'SpaceTimeSnapshotEntity'", subErr)
			return count, subErr
		} else {
			count += subCount
		}
	}
	return count, err
}
func SpaceTimeSnapshotActionBulkUpdate(
	query workspaces.QueryDSL, dto *workspaces.BulkRecordRequest[SpaceTimeSnapshotEntity]) (
	*workspaces.BulkRecordRequest[SpaceTimeSnapshotEntity], *workspaces.IError,
) {
	result := []*SpaceTimeSnapshotEntity{}
	err := workspaces.GetDbRef().Transaction(func(tx *gorm.DB) error {
		query.Tx = tx
		for _, record := range dto.Records {
			item, err := SpaceTimeSnapshotActionUpdate(query, record)
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
func (x *SpaceTimeSnapshotEntity) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}

var SpaceTimeSnapshotEntityMeta = workspaces.TableMetaData{
	EntityName:    "SpaceTimeSnapshot",
	ExportKey:     "space-time-snapshots",
	TableNameInDb: "fb_spacetimesnapshot_entities",
	EntityObject:  &SpaceTimeSnapshotEntity{},
	ExportStream:  SpaceTimeSnapshotActionExportT,
	ImportQuery:   SpaceTimeSnapshotActionImport,
}

func SpaceTimeSnapshotActionExport(
	query workspaces.QueryDSL,
) (chan []byte, *workspaces.IError) {
	return workspaces.YamlExporterChannel[SpaceTimeSnapshotEntity](query, SpaceTimeSnapshotActionQuery, SpaceTimeSnapshotPreloadRelations)
}
func SpaceTimeSnapshotActionExportT(
	query workspaces.QueryDSL,
) (chan []interface{}, *workspaces.IError) {
	return workspaces.YamlExporterChannelT[SpaceTimeSnapshotEntity](query, SpaceTimeSnapshotActionQuery, SpaceTimeSnapshotPreloadRelations)
}
func SpaceTimeSnapshotActionImport(
	dto interface{}, query workspaces.QueryDSL,
) *workspaces.IError {
	var json = jsoniter.ConfigCompatibleWithStandardLibrary
	var content SpaceTimeSnapshotEntity
	cx, err2 := json.Marshal(dto)
	if err2 != nil {
		return workspaces.CreateIErrorString("INVALID_CONTENT", []string{}, 501)
	}
	json.Unmarshal(cx, &content)
	_, err := SpaceTimeSnapshotActionCreate(&content, query)
	return err
}

var SpaceTimeSnapshotCommonCliFlags = []cli.Flag{
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
	&cli.Float64Flag{
		Name:     "lat",
		Required: true,
		Usage:    "lat",
	},
	&cli.Float64Flag{
		Name:     "lng",
		Required: true,
		Usage:    "lng",
	},
	&cli.Float64Flag{
		Name:     "alt",
		Required: true,
		Usage:    "alt",
	},
	&cli.StringFlag{
		Name:     "movable-object-id",
		Required: false,
		Usage:    "movableObject",
	},
}
var SpaceTimeSnapshotCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{
	{
		Name:        "lat",
		StructField: "Lat",
		Required:    true,
		Usage:       "lat",
		Type:        "float64",
	},
	{
		Name:        "lng",
		StructField: "Lng",
		Required:    true,
		Usage:       "lng",
		Type:        "float64",
	},
	{
		Name:        "alt",
		StructField: "Alt",
		Required:    true,
		Usage:       "alt",
		Type:        "float64",
	},
}
var SpaceTimeSnapshotCommonCliFlagsOptional = []cli.Flag{
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
	&cli.Float64Flag{
		Name:     "lat",
		Required: true,
		Usage:    "lat",
	},
	&cli.Float64Flag{
		Name:     "lng",
		Required: true,
		Usage:    "lng",
	},
	&cli.Float64Flag{
		Name:     "alt",
		Required: true,
		Usage:    "alt",
	},
	&cli.StringFlag{
		Name:     "movable-object-id",
		Required: false,
		Usage:    "movableObject",
	},
}
var SpaceTimeSnapshotCreateCmd cli.Command = cli.Command{
	Name:    "create",
	Aliases: []string{"c"},
	Flags:   SpaceTimeSnapshotCommonCliFlags,
	Usage:   "Create a new template",
	Action: func(c *cli.Context) {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastSpaceTimeSnapshotFromCli(c)
		if entity, err := SpaceTimeSnapshotActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var SpaceTimeSnapshotCreateInteractiveCmd cli.Command = cli.Command{
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
		entity := &SpaceTimeSnapshotEntity{}
		for _, item := range SpaceTimeSnapshotCommonInteractiveCliFlags {
			if !item.Required && c.Bool("all") == false {
				continue
			}
			result := workspaces.AskForInput(item.Name, "")
			workspaces.SetFieldString(entity, item.StructField, result)
		}
		if entity, err := SpaceTimeSnapshotActionCreate(entity, query); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
	},
}
var SpaceTimeSnapshotUpdateCmd cli.Command = cli.Command{
	Name:    "update",
	Aliases: []string{"u"},
	Flags:   SpaceTimeSnapshotCommonCliFlagsOptional,
	Usage:   "Updates a template by passing the parameters",
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)
		entity := CastSpaceTimeSnapshotFromCli(c)
		if entity, err := SpaceTimeSnapshotActionUpdate(query, entity); err != nil {
			fmt.Println(err.Error())
		} else {
			f, _ := json.MarshalIndent(entity, "", "  ")
			fmt.Println(string(f))
		}
		return nil
	},
}

func CastSpaceTimeSnapshotFromCli(c *cli.Context) *SpaceTimeSnapshotEntity {
	template := &SpaceTimeSnapshotEntity{}
	if c.IsSet("uid") {
		template.UniqueId = c.String("uid")
	}
	if c.IsSet("pid") {
		x := c.String("pid")
		template.ParentId = &x
	}
	if c.IsSet("movable-object-id") {
		value := c.String("movable-object-id")
		template.MovableObjectId = &value
	}
	return template
}
func SpaceTimeSnapshotSyncSeederFromFs(fsRef *embed.FS, fileNames []string) {
	workspaces.SeederFromFSImport(
		workspaces.QueryDSL{},
		SpaceTimeSnapshotActionCreate,
		reflect.ValueOf(&SpaceTimeSnapshotEntity{}).Elem(),
		fsRef,
		fileNames,
		true,
	)
}
func SpaceTimeSnapshotWriteQueryMock(ctx workspaces.MockQueryContext) {
	for _, lang := range ctx.Languages {
		itemsPerPage := 9999
		if ctx.ItemsPerPage > 0 {
			itemsPerPage = ctx.ItemsPerPage
		}
		f := workspaces.QueryDSL{ItemsPerPage: itemsPerPage, Language: lang, WithPreloads: ctx.WithPreloads, Deep: true}
		items, count, _ := SpaceTimeSnapshotActionQuery(f)
		result := workspaces.QueryEntitySuccessResult(f, items, count)
		workspaces.WriteMockDataToFile(lang, "", "SpaceTimeSnapshot", result)
	}
}

var SpaceTimeSnapshotImportExportCommands = []cli.Command{
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
			SpaceTimeSnapshotActionSeeder(query, c.Int("count"))
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
				Value: "space-time-snapshot-seeder.yml",
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
			SpaceTimeSnapshotActionSeederInit(f, c.String("file"), c.String("format"))
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
				Value: "space-time-snapshot-seeder-space-time-snapshot.yml",
				// Uncomment before publish, they need to specify
				// Required: true,
			},
			&cli.StringFlag{
				Name:  "format",
				Usage: "Format of the export or import file. Can be 'yaml', 'yml', 'json', 'sql', 'csv'",
				Value: "yaml",
			},
		},
		Usage: "Reads a yaml file containing an array of space-time-snapshots, you can run this to validate if your import file is correct, and how it would look like after import",
		Action: func(c *cli.Context) error {
			data := &[]SpaceTimeSnapshotEntity{}
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
				SpaceTimeSnapshotActionCreate,
				reflect.ValueOf(&SpaceTimeSnapshotEntity{}).Elem(),
				c.String("file"),
			)
			return nil
		},
	},
}
var SpaceTimeSnapshotCliCommands []cli.Command = []cli.Command{
	workspaces.GetCommonQuery(SpaceTimeSnapshotActionQuery),
	workspaces.GetCommonTableQuery(reflect.ValueOf(&SpaceTimeSnapshotEntity{}).Elem(), SpaceTimeSnapshotActionQuery),
	SpaceTimeSnapshotCreateCmd,
	SpaceTimeSnapshotUpdateCmd,
	SpaceTimeSnapshotCreateInteractiveCmd,
	SpaceTimeSnapshotWipeCmd,
	workspaces.GetCommonRemoveQuery(reflect.ValueOf(&SpaceTimeSnapshotEntity{}).Elem(), SpaceTimeSnapshotActionRemove),
}

func SpaceTimeSnapshotCliFn() cli.Command {
	SpaceTimeSnapshotCliCommands = append(SpaceTimeSnapshotCliCommands, SpaceTimeSnapshotImportExportCommands...)
	return cli.Command{
		Name:        "spaceTimeSnapshot",
		ShortName:   "sts",
		Description: "SpaceTimeSnapshots module actions (sample module to handle complex entities)",
		Usage:       "History of a location in a time series, used for tracking a path",
		Flags: []cli.Flag{
			&cli.StringFlag{
				Name:  "language",
				Value: "en",
			},
		},
		Subcommands: SpaceTimeSnapshotCliCommands,
	}
}

/**
 *	Override this function on SpaceTimeSnapshotEntityHttp.go,
 *	In order to add your own http
 **/
var AppendSpaceTimeSnapshotRouter = func(r *[]workspaces.Module2Action) {}

func GetSpaceTimeSnapshotModule2Actions() []workspaces.Module2Action {
	routes := []workspaces.Module2Action{
		{
			Method: "GET",
			Url:    "/space-time-snapshots",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpQueryEntity(c, SpaceTimeSnapshotActionQuery)
				},
			},
			Format:         "QUERY",
			Action:         SpaceTimeSnapshotActionQuery,
			ResponseEntity: &[]SpaceTimeSnapshotEntity{},
		},
		{
			Method: "GET",
			Url:    "/space-time-snapshots/export",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpStreamFileChannel(c, SpaceTimeSnapshotActionExport)
				},
			},
			Format:         "QUERY",
			Action:         SpaceTimeSnapshotActionExport,
			ResponseEntity: &[]SpaceTimeSnapshotEntity{},
		},
		{
			Method: "GET",
			Url:    "/space-time-snapshot/:uniqueId",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_QUERY},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpGetEntity(c, SpaceTimeSnapshotActionGetOne)
				},
			},
			Format:         "GET_ONE",
			Action:         SpaceTimeSnapshotActionGetOne,
			ResponseEntity: &SpaceTimeSnapshotEntity{},
		},
		{
			Method: "POST",
			Url:    "/space-time-snapshot",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_CREATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpPostEntity(c, SpaceTimeSnapshotActionCreate)
				},
			},
			Action:         SpaceTimeSnapshotActionCreate,
			Format:         "POST_ONE",
			RequestEntity:  &SpaceTimeSnapshotEntity{},
			ResponseEntity: &SpaceTimeSnapshotEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/space-time-snapshot",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntity(c, SpaceTimeSnapshotActionUpdate)
				},
			},
			Action:         SpaceTimeSnapshotActionUpdate,
			RequestEntity:  &SpaceTimeSnapshotEntity{},
			Format:         "PATCH_ONE",
			ResponseEntity: &SpaceTimeSnapshotEntity{},
		},
		{
			Method: "PATCH",
			Url:    "/space-time-snapshots",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_UPDATE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpUpdateEntities(c, SpaceTimeSnapshotActionBulkUpdate)
				},
			},
			Action:         SpaceTimeSnapshotActionBulkUpdate,
			Format:         "PATCH_BULK",
			RequestEntity:  &workspaces.BulkRecordRequest[SpaceTimeSnapshotEntity]{},
			ResponseEntity: &workspaces.BulkRecordRequest[SpaceTimeSnapshotEntity]{},
		},
		{
			Method: "DELETE",
			Url:    "/space-time-snapshot",
			Format: "DELETE_DSL",
			SecurityModel: workspaces.SecurityModel{
				ActionRequires: []string{PERM_ROOT_SPACETIMESNAPSHOT_DELETE},
			},
			Handlers: []gin.HandlerFunc{
				func(c *gin.Context) {
					workspaces.HttpRemoveEntity(c, SpaceTimeSnapshotActionRemove)
				},
			},
			Action:         SpaceTimeSnapshotActionRemove,
			RequestEntity:  &workspaces.DeleteRequest{},
			ResponseEntity: &workspaces.DeleteResponse{},
			TargetEntity:   &SpaceTimeSnapshotEntity{},
		},
	}
	// Append user defined functions
	AppendSpaceTimeSnapshotRouter(&routes)
	return routes
}
func CreateSpaceTimeSnapshotRouter(r *gin.Engine) []workspaces.Module2Action {
	httpRoutes := GetSpaceTimeSnapshotModule2Actions()
	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, SpaceTimeSnapshotEntityJsonSchema, "space-time-snapshot-http", "iot")
	workspaces.WriteEntitySchema("SpaceTimeSnapshotEntity", SpaceTimeSnapshotEntityJsonSchema, "iot")
	return httpRoutes
}

var PERM_ROOT_SPACETIMESNAPSHOT_DELETE = "root/spacetimesnapshot/delete"
var PERM_ROOT_SPACETIMESNAPSHOT_CREATE = "root/spacetimesnapshot/create"
var PERM_ROOT_SPACETIMESNAPSHOT_UPDATE = "root/spacetimesnapshot/update"
var PERM_ROOT_SPACETIMESNAPSHOT_QUERY = "root/spacetimesnapshot/query"
var PERM_ROOT_SPACETIMESNAPSHOT = "root/spacetimesnapshot"
var ALL_SPACETIMESNAPSHOT_PERMISSIONS = []string{
	PERM_ROOT_SPACETIMESNAPSHOT_DELETE,
	PERM_ROOT_SPACETIMESNAPSHOT_CREATE,
	PERM_ROOT_SPACETIMESNAPSHOT_UPDATE,
	PERM_ROOT_SPACETIMESNAPSHOT_QUERY,
	PERM_ROOT_SPACETIMESNAPSHOT,
}
