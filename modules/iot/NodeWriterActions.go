package iot

import "github.com/torabian/fireback/modules/workspaces"

func NodeWriterActionCreate(
	dto *NodeWriterEntity, query workspaces.QueryDSL,
) (*NodeWriterEntity, *workspaces.IError) {
	return NodeWriterActionCreateFn(dto, query)
}

func NodeWriterActionUpdate(
	query workspaces.QueryDSL,
	fields *NodeWriterEntity,
) (*NodeWriterEntity, *workspaces.IError) {
	return NodeWriterActionUpdateFn(query, fields)
}
