package iot

import "github.com/torabian/fireback/modules/workspaces"

func GpioActionCreate(
	dto *GpioEntity, query workspaces.QueryDSL,
) (*GpioEntity, *workspaces.IError) {
	return GpioActionCreateFn(dto, query)
}

func GpioActionUpdate(
	query workspaces.QueryDSL,
	fields *GpioEntity,
) (*GpioEntity, *workspaces.IError) {
	return GpioActionUpdateFn(query, fields)
}
