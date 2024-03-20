package iot

import "github.com/torabian/fireback/modules/workspaces"

func HmiResponseMask(dto *HmiEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}

	t := true
	if ProcessPool[dto.UniqueId] != nil {
		dto.IsRunning = &t
	}
}
