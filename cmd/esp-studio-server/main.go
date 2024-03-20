package main

import (
	"embed"
	"fmt"
	"os"

	"github.com/torabian/esp-studio/modules/iot"
	// seeders "github.com/torabian/fireback/cmd/esp-studio-server/seeders"
	"github.com/torabian/fireback/modules/drive"
	"github.com/torabian/fireback/modules/widget"
	"github.com/torabian/fireback/modules/workspaces"

	"github.com/gin-gonic/gin"
	"github.com/urfave/cli"
)

//go:embed all:ui
var ui embed.FS

var xapp = &workspaces.XWebServer{
	Title:              "ESP Studio Server Edition",
	SupportedLanguages: []string{"fa", "en"},
	RunTus: func() {
		drive.LiftTusServer()
	},
	SearchProviders: []workspaces.SearchProviderFn{
		workspaces.QueryMenusReact,
		workspaces.QueryRolesReact,
	},
	PublicFolders: []workspaces.PublicFolderInfo{
		{Fs: &ui, Folder: "ui"},
	},
	RunSearch: workspaces.InjectReactiveSearch,
	RunSocket: func(e *gin.Engine) {
		workspaces.HandleSocket(e)

	},
	SetupWebServerHook: func(e *gin.Engine, x *workspaces.XWebServer) {

		e.POST("/backup", func(c *gin.Context) {

			xinfo := []workspaces.TableMetaData{}

			for _, module := range x.Modules {
				for _, item := range module.BackupTables {
					xinfo = append(xinfo, item)
				}
			}

			workspaces.HttpStreamFileChannel(c, func(query workspaces.QueryDSL) (chan []byte, *workspaces.IError) {
				return workspaces.CreateBackupToStream(xinfo)
			})

		})
		e.POST("/backupImport", func(c *gin.Context) {
			f := workspaces.ExtractQueryDslFromGinContext(c)

			xinfo := []workspaces.TableMetaData{}

			for _, module := range x.Modules {
				for _, item := range module.BackupTables {
					xinfo = append(xinfo, item)
				}
			}

			var body workspaces.ImportRequestDto

			if err := c.BindJSON(&body); err != nil {
				fmt.Println("Error on matching", err)
			} else {

				f.UniqueId = *body.File
				fm, _ := drive.FileActionGetOne(f)

				fmt.Println(body.File, fm.DiskPath, drive.GetFileRealPath(fm))
				workspaces.ImportBackup(xinfo, drive.GetFileRealPath(fm), f)
			}

			c.JSON(200, gin.H{
				"data": true,
			})

		})

	},
	Modules: []*workspaces.ModuleProvider{
		// Important to setup the workspaces at first, so the capabilties module is there
		workspaces.WorkspaceModuleSetup(),
		iot.IotModuleSetup(),
		drive.DriveModuleSetup(),
		workspaces.NotificationModuleSetup(),
		workspaces.PassportsModuleSetup(),
		widget.WidgetModuleSetup(),
	},
	SeedersSync: func() {

		// widget.WidgetAreaSyncSeederFromFs(&seeders.ViewsFs, []string{"esp32-gpio-widget-area.yml"})
		// workspaces.AppMenuSyncSeederFromFs(&seeders.ViewsFs, []string{
		// 	"esp-studio-desktop-menu.yml",
		// 	"esp-studio-gpio-menu.yml",
		// })
		// workspaces.AppMenuSyncSeederFromFs(&firebackseeders.ViewsFs, []string{
		// 	"fireback-menu-common.yml",
		// 	"fireback-menu-cloud.yml",
		// 	"personal-menu.yml",
		// })

	},
	MockSync: func() {
		// widget.WidgetAreaSyncSeederFromFs(&seeders.ViewsFs, []string{"esp32-gpio-widget-area.yml"})
		// workspaces.AppMenuSyncSeederFromFs(&seeders.ViewsFs, []string{"esp-studio-desktop-menu.yml", "esp-studio-gpio-menu.yml"})
	},
}

func main() {

	os.Setenv("PRODUCT_UNIQUE_NAME", "esp-studio")

	xapp.CommonAppBootstrap(func() {
		go iot.MqttClientInitializeOnStart()
	})

	xapp.CliActions = func() []cli.Command {
		actions := workspaces.GetCommonWebServerCliActions(xapp)
		return actions
	}

	workspaces.RunApp(xapp)
}
