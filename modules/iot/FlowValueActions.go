package iot

import "github.com/torabian/fireback/modules/workspaces"

func FlowValueActionCreate(
	dto *FlowValueEntity, query workspaces.QueryDSL,
) (*FlowValueEntity, *workspaces.IError) {
	return FlowValueActionCreateFn(dto, query)
}

func FlowValueActionUpdate(
	query workspaces.QueryDSL,
	fields *FlowValueEntity,
) (*FlowValueEntity, *workspaces.IError) {
	return FlowValueActionUpdateFn(query, fields)
}
