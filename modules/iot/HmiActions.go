package iot

import "github.com/torabian/fireback/modules/workspaces"

func HmiActionCreate(
	dto *HmiEntity, query workspaces.QueryDSL,
) (*HmiEntity, *workspaces.IError) {
	return HmiActionCreateFn(dto, query)
}

func HmiActionUpdate(
	query workspaces.QueryDSL,
	fields *HmiEntity,
) (*HmiEntity, *workspaces.IError) {
	return HmiActionUpdateFn(query, fields)
}
