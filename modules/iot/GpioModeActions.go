package iot

import "github.com/torabian/fireback/modules/workspaces"

func GpioModeActionCreate(
	dto *GpioModeEntity, query workspaces.QueryDSL,
) (*GpioModeEntity, *workspaces.IError) {
	return GpioModeActionCreateFn(dto, query)
}

func GpioModeActionUpdate(
	query workspaces.QueryDSL,
	fields *GpioModeEntity,
) (*GpioModeEntity, *workspaces.IError) {
	return GpioModeActionUpdateFn(query, fields)
}
