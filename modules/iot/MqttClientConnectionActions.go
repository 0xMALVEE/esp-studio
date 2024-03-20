package iot

import "github.com/torabian/fireback/modules/workspaces"

// implement custom logic for this dto here

var FALSE = false
var TRUE = true

func MqttClientConnectionActionGet(query workspaces.QueryDSL) (*MqttClientConnectionDto, *workspaces.IError) {

	name := "Default"
	var connected = false

	if MqttClient != nil {
		connected = MqttClient.IsConnected()
	}

	return &MqttClientConnectionDto{
		Name:        &name,
		IsConnected: &connected,
	}, nil
}
