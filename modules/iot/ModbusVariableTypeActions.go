package iot

import "github.com/torabian/fireback/modules/workspaces"

func ModbusVariableTypeActionCreate(
	dto *ModbusVariableTypeEntity, query workspaces.QueryDSL,
) (*ModbusVariableTypeEntity, *workspaces.IError) {
	return ModbusVariableTypeActionCreateFn(dto, query)
}

func ModbusVariableTypeActionUpdate(
	query workspaces.QueryDSL,
	fields *ModbusVariableTypeEntity,
) (*ModbusVariableTypeEntity, *workspaces.IError) {
	return ModbusVariableTypeActionUpdateFn(query, fields)
}
