package iot

import "github.com/torabian/fireback/modules/workspaces"

func DeviceTypeActionCreate(
	dto *DeviceTypeEntity, query workspaces.QueryDSL,
) (*DeviceTypeEntity, *workspaces.IError) {
	return DeviceTypeActionCreateFn(dto, query)
}

func DeviceTypeActionUpdate(
	query workspaces.QueryDSL,
	fields *DeviceTypeEntity,
) (*DeviceTypeEntity, *workspaces.IError) {
	return DeviceTypeActionUpdateFn(query, fields)
}
