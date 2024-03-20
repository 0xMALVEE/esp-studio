package iot

import "github.com/torabian/fireback/modules/workspaces"

func MovableObjectActionCreate(
	dto *MovableObjectEntity, query workspaces.QueryDSL,
) (*MovableObjectEntity, *workspaces.IError) {
	return MovableObjectActionCreateFn(dto, query)
}

func MovableObjectActionUpdate(
	query workspaces.QueryDSL,
	fields *MovableObjectEntity,
) (*MovableObjectEntity, *workspaces.IError) {
	return MovableObjectActionUpdateFn(query, fields)
}
