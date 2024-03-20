package iot

import "github.com/torabian/fireback/modules/workspaces"

func ModbusTaskActionCreate(
	dto *ModbusTaskEntity, query workspaces.QueryDSL,
) (*ModbusTaskEntity, *workspaces.IError) {
	return ModbusTaskActionCreateFn(dto, query)
}

func ModbusTaskActionUpdate(
	query workspaces.QueryDSL,
	fields *ModbusTaskEntity,
) (*ModbusTaskEntity, *workspaces.IError) {
	return ModbusTaskActionUpdateFn(query, fields)
}
