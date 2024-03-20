package iot

import "github.com/torabian/fireback/modules/workspaces"

func DataNodeTypeActionCreate(
	dto *DataNodeTypeEntity, query workspaces.QueryDSL,
) (*DataNodeTypeEntity, *workspaces.IError) {
	return DataNodeTypeActionCreateFn(dto, query)
}

func DataNodeTypeActionUpdate(
	query workspaces.QueryDSL,
	fields *DataNodeTypeEntity,
) (*DataNodeTypeEntity, *workspaces.IError) {
	return DataNodeTypeActionUpdateFn(query, fields)
}
