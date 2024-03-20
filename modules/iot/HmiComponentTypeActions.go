package iot

import "github.com/torabian/fireback/modules/workspaces"

func HmiComponentTypeActionCreate(
	dto *HmiComponentTypeEntity, query workspaces.QueryDSL,
) (*HmiComponentTypeEntity, *workspaces.IError) {
	return HmiComponentTypeActionCreateFn(dto, query)
}

func HmiComponentTypeActionUpdate(
	query workspaces.QueryDSL,
	fields *HmiComponentTypeEntity,
) (*HmiComponentTypeEntity, *workspaces.IError) {
	return HmiComponentTypeActionUpdateFn(query, fields)
}
