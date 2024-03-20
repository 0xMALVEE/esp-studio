package iot

import "github.com/torabian/fireback/modules/workspaces"

func InteractiveMapActionCreate(
	dto *InteractiveMapEntity, query workspaces.QueryDSL,
) (*InteractiveMapEntity, *workspaces.IError) {
	return InteractiveMapActionCreateFn(dto, query)
}

func InteractiveMapActionUpdate(
	query workspaces.QueryDSL,
	fields *InteractiveMapEntity,
) (*InteractiveMapEntity, *workspaces.IError) {
	return InteractiveMapActionUpdateFn(query, fields)
}
