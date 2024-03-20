package iot

import "github.com/torabian/fireback/modules/workspaces"

func ModbusFunctionCodeActionCreate(
	dto *ModbusFunctionCodeEntity, query workspaces.QueryDSL,
) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	return ModbusFunctionCodeActionCreateFn(dto, query)
}

func ModbusFunctionCodeActionUpdate(
	query workspaces.QueryDSL,
	fields *ModbusFunctionCodeEntity,
) (*ModbusFunctionCodeEntity, *workspaces.IError) {
	return ModbusFunctionCodeActionUpdateFn(query, fields)
}
