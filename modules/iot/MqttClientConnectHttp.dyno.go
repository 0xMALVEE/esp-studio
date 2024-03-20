package iot

import (
	reflect "reflect"

	"github.com/gin-gonic/gin"

	"github.com/torabian/fireback/modules/workspaces"
)

/**
*	Override this function on MqttClientConnectHttp.go,
*	In order to add your own http
**/
var AppendMqttClientConnectRouter = func(r *[]workspaces.Module2Action) {}

func HttpPostMqttClientConnect(c *gin.Context) {
	workspaces.HttpPostEntity(c, MqttClientConnectActionPost)
}

func GetMqttClientConnectModule2Actions() []workspaces.Module2Action {

	routes := []workspaces.Module2Action{

		{
			Method: "POST",
			Url:    "/mqttClientConnect",
			Handlers: []gin.HandlerFunc{
				workspaces.WithAuthorization([]string{PERM_ROOT_MQTTCLIENTCONNECT_POST}),
				HttpPostMqttClientConnect,
			},
			Action:         MqttClientConnectActionPost,
			Format:         "POST_ONE",
			RequestEntity:  &MqttClientConnectDto{},
			ResponseEntity: &MqttClientConnectDto{},
		},
	}

	// Append user defined functions
	AppendMqttClientConnectRouter(&routes)

	return routes

}

var MqttClientConnectDtoJsonSchema = workspaces.ExtractEntityFields(reflect.ValueOf(&MqttClientConnectDto{}))

func CreateMqttClientConnectRouter(r *gin.Engine) {

	httpRoutes := GetMqttClientConnectModule2Actions()

	workspaces.CastRoutes(httpRoutes, r)
	workspaces.WriteHttpInformationToFile(&httpRoutes, MqttClientConnectDtoJsonSchema, "mqttClientConnect-http", "iot")
	workspaces.WriteEntitySchema("MqttClientConnect", MqttClientConnectDtoJsonSchema, "iot")
}
