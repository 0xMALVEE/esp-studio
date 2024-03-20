package iot

import "github.com/torabian/fireback/modules/workspaces"

func MqttConnectionActionCreate(
	dto *MqttConnectionEntity, query workspaces.QueryDSL,
) (*MqttConnectionEntity, *workspaces.IError) {
	return MqttConnectionActionCreateFn(dto, query)
}

func MqttConnectionActionUpdate(
	query workspaces.QueryDSL,
	fields *MqttConnectionEntity,
) (*MqttConnectionEntity, *workspaces.IError) {
	return MqttConnectionActionUpdateFn(query, fields)
}
