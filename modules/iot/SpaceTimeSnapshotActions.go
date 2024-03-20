package iot

import "github.com/torabian/fireback/modules/workspaces"

func SpaceTimeSnapshotActionCreate(
	dto *SpaceTimeSnapshotEntity, query workspaces.QueryDSL,
) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	return SpaceTimeSnapshotActionCreateFn(dto, query)
}

func SpaceTimeSnapshotActionUpdate(
	query workspaces.QueryDSL,
	fields *SpaceTimeSnapshotEntity,
) (*SpaceTimeSnapshotEntity, *workspaces.IError) {
	return SpaceTimeSnapshotActionUpdateFn(query, fields)
}
