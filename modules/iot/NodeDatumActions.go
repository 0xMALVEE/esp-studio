package iot

import "github.com/torabian/fireback/modules/workspaces"

func NodeDatumActionCreate(
	dto *NodeDatumEntity, query workspaces.QueryDSL,
) (*NodeDatumEntity, *workspaces.IError) {
	return NodeDatumActionCreateFn(dto, query)
}

func NodeDatumActionUpdate(
	query workspaces.QueryDSL,
	fields *NodeDatumEntity,
) (*NodeDatumEntity, *workspaces.IError) {
	return NodeDatumActionUpdateFn(query, fields)
}
