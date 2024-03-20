package iot

import "github.com/torabian/fireback/modules/workspaces"

func MemoryStatActionCreate(
	dto *MemoryStatEntity, query workspaces.QueryDSL,
) (*MemoryStatEntity, *workspaces.IError) {
	return MemoryStatActionCreateFn(dto, query)
}

func MemoryStatActionUpdate(
	query workspaces.QueryDSL,
	fields *MemoryStatEntity,
) (*MemoryStatEntity, *workspaces.IError) {
	return MemoryStatActionUpdateFn(query, fields)
}
