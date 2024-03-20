package iot

import (
	reflect "reflect"

	"github.com/gin-gonic/gin"

	"github.com/torabian/fireback/modules/workspaces"
)

/**
*	Override this function on MqttClientConnectionHttp.go,
*	In order to add your own http
**/
var AppendMqttClientConnectionRouter = func(r *[]workspaces.Module2Action) {}

func HttpGetMqttClientConnection(c *gin.Context) {
	workspaces.HttpGetEntity(c, MqttClientConnectionActionGet)
}

func GetMqttClientConnectionModule2Actions() []workspaces.Module2Action {

	routes := []workspaces.Module2Action{

		{
			Method: "GET",
			Url:    "/mqttClientConnection",
			Handlers: []gin.HandlerFunc{
				workspaces.WithAuthorization([]string{PERM_ROOT_MQTTCLIENTCONNECTION_PATCH}),
				HttpGetMqttClientConnection,
			},
			Action:         MqttClientConnectionActionGet,
			Format:         "GET_ONE",
			RequestEntity:  &MqttClientConnectionDto{},
			ResponseEntity: &MqttClientConnectionDto{},
		},
	}

	// Append user defined functions
	AppendMqttClientConnectionRouter(&routes)

	return routes

}

var MqttClientConnectionDtoJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MqttClientConnectionDto{}))

func CreateMqttClientConnectionRouter(r *gin.Engine) {

	httpRoutes := GetMqttClientConnectionModule2Actions()

	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MqttClientConnectionDtoJsonSchema, "mqttClientConnection-http", "iot")
	workspaces.WriteEntitySchema("MqttClientConnection", MqttClientConnectionDtoJsonSchema, "iot")
}
