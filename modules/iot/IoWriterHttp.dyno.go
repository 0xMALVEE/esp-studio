package iot

import (
	reflect "reflect"

	"github.com/gin-gonic/gin"

	"github.com/torabian/fireback/modules/workspaces"
)

/**
*	Override this function on IoWriterHttp.go,
*	In order to add your own http
**/
var AppendIoWriterRouter = func(r *[]workspaces.Module2Action) {}

func HttpPostIoWriter(c *gin.Context) {
	workspaces.HttpPostEntity(c, IoWriterActionPost)
}

func GetIoWriterModule2Actions() []workspaces.Module2Action {

	routes := []workspaces.Module2Action{

		{
			Method: "POST",
			Url:    "/ioWriter",
			Handlers: []gin.HandlerFunc{
				workspaces.WithAuthorization([]string{PERM_ROOT_IOWRITER_POST}),
				HttpPostIoWriter,
			},
			Action:         IoWriterActionPost,
			Format:         "POST_ONE",
			RequestEntity:  &IoWriterDto{},
			ResponseEntity: &IoWriterDto{},
		},
	}

	// Append user defined functions
	AppendIoWriterRouter(&routes)

	return routes

}

var IoWriterDtoJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&IoWriterDto{}))

func CreateIoWriterRouter(r *gin.Engine) {

	httpRoutes := GetIoWriterModule2Actions()

	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, IoWriterDtoJsonSchema, "ioWriter-http", "iot")
	workspaces.WriteEntitySchema("IoWriter", IoWriterDtoJsonSchema, "iot")
}
