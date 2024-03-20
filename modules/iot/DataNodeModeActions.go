package iot

import "github.com/torabian/fireback/modules/workspaces"

func DataNodeModeActionCreate(
	dto *DataNodeModeEntity, query workspaces.QueryDSL,
) (*DataNodeModeEntity, *workspaces.IError) {
	return DataNodeModeActionCreateFn(dto, query)
}

func DataNodeModeActionUpdate(
	query workspaces.QueryDSL,
	fields *DataNodeModeEntity,
) (*DataNodeModeEntity, *workspaces.IError) {
	return DataNodeModeActionUpdateFn(query, fields)
}
