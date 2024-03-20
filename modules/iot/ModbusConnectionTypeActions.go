package iot

import "github.com/torabian/fireback/modules/workspaces"

func ModbusConnectionTypeActionCreate(
	dto *ModbusConnectionTypeEntity, query workspaces.QueryDSL,
) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	return ModbusConnectionTypeActionCreateFn(dto, query)
}

func ModbusConnectionTypeActionUpdate(
	query workspaces.QueryDSL,
	fields *ModbusConnectionTypeEntity,
) (*ModbusConnectionTypeEntity, *workspaces.IError) {
	return ModbusConnectionTypeActionUpdateFn(query, fields)
}
