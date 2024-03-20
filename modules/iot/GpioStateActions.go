package iot

import "github.com/torabian/fireback/modules/workspaces"

func applyGpioSnapshots(dto *GpioStateEntity) {
	if dto.GpioMode != nil && dto.GpioMode.Index != nil {
		dto.GpioModeSnapshot = dto.GpioMode.Index
	}
	if dto.Gpio != nil && dto.Gpio.Index != nil {
		dto.GpioIndexSnapshot = dto.Gpio.Index
	}
}

func GpioStateActionCreate(
	dto *GpioStateEntity, query workspaces.QueryDSL,
) (*GpioStateEntity, *workspaces.IError) {

	applyGpioSnapshots(dto)

	return GpioStateActionCreateFn(dto, query)
}

func GpioStateActionUpdate(
	query workspaces.QueryDSL,
	fields *GpioStateEntity,
) (*GpioStateEntity, *workspaces.IError) {
	applyGpioSnapshots(fields)

	return GpioStateActionUpdateFn(query, fields)
}
