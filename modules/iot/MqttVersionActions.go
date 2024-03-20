package iot

import "github.com/torabian/fireback/modules/workspaces"

func MqttVersionActionCreate(
	dto *MqttVersionEntity, query workspaces.QueryDSL,
) (*MqttVersionEntity, *workspaces.IError) {
	return MqttVersionActionCreateFn(dto, query)
}

func MqttVersionActionUpdate(
	query workspaces.QueryDSL,
	fields *MqttVersionEntity,
) (*MqttVersionEntity, *workspaces.IError) {
	return MqttVersionActionUpdateFn(query, fields)
}
