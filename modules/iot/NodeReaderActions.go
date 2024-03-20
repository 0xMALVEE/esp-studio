package iot

import "github.com/torabian/fireback/modules/workspaces"

func NodeReaderActionCreate(
	dto *NodeReaderEntity, query workspaces.QueryDSL,
) (*NodeReaderEntity, *workspaces.IError) {
	return NodeReaderActionCreateFn(dto, query)
}

func NodeReaderActionUpdate(
	query workspaces.QueryDSL,
	fields *NodeReaderEntity,
) (*NodeReaderEntity, *workspaces.IError) {
	return NodeReaderActionUpdateFn(query, fields)
}
