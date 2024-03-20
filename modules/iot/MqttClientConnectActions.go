package iot

import (
	"fmt"

	mqtt "github.com/eclipse/paho.mqtt.golang"
	"github.com/torabian/fireback/modules/workspaces"
)

var MqttClient mqtt.Client

// implement custom logic for this dto here

func MqttClientConnectActionPost(dto *MqttClientConnectDto, query workspaces.QueryDSL) (*MqttClientConnectDto, *workspaces.IError) {

	v := query
	connection, err2 := MqttConnectionActionGetOne(v)

	if err2 != nil {
		return nil, err2
	}

	if dto.Connect != nil && *dto.Connect {

		q, err := ClinetConnect(connection)

		if err != nil {
			return nil, workspaces.GormErrorToIError(err)
		}

		MqttClient = *q

		MqttClient.Publish("Connected", byte('b'), false, "")
		MqttClient.Subscribe("*", '0', func(c mqtt.Client, m mqtt.Message) {
			fmt.Println(1, c, m)
		})
	} else if dto.Connect != nil && !*dto.Connect {
		if MqttClient != nil {
			MqttClient.Disconnect(0)
		}
	}

	return dto, nil
}
