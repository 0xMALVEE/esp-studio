package iot

import "github.com/torabian/fireback/modules/workspaces"

func ExpanderFunctionActionCreate(
	dto *ExpanderFunctionEntity, query workspaces.QueryDSL,
) (*ExpanderFunctionEntity, *workspaces.IError) {
	return ExpanderFunctionActionCreateFn(dto, query)
}

func ExpanderFunctionActionUpdate(
	query workspaces.QueryDSL,
	fields *ExpanderFunctionEntity,
) (*ExpanderFunctionEntity, *workspaces.IError) {
	return ExpanderFunctionActionUpdateFn(query, fields)
}
