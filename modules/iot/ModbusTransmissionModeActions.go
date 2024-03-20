package iot

import "github.com/torabian/fireback/modules/workspaces"

func ModbusTransmissionModeActionCreate(
	dto *ModbusTransmissionModeEntity, query workspaces.QueryDSL,
) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	return ModbusTransmissionModeActionCreateFn(dto, query)
}

func ModbusTransmissionModeActionUpdate(
	query workspaces.QueryDSL,
	fields *ModbusTransmissionModeEntity,
) (*ModbusTransmissionModeEntity, *workspaces.IError) {
	return ModbusTransmissionModeActionUpdateFn(query, fields)
}
