package iot

import "github.com/torabian/fireback/modules/workspaces"

func PhysicalSectionActionCreate(
	dto *PhysicalSectionEntity, query workspaces.QueryDSL,
) (*PhysicalSectionEntity, *workspaces.IError) {
	return PhysicalSectionActionCreateFn(dto, query)
}

func PhysicalSectionActionUpdate(
	query workspaces.QueryDSL,
	fields *PhysicalSectionEntity,
) (*PhysicalSectionEntity, *workspaces.IError) {
	return PhysicalSectionActionUpdateFn(query, fields)
}
