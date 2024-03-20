package iot

import "github.com/torabian/fireback/modules/workspaces"

type DataNodeRelayNodeActivity struct{}

func (x0 *DataNodeRelayNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	meta := workspaces.CastJsonDataTypeTo[DnReadWriteDataNodeDto](ctx.target.LinkedTo.Meta)
	data := workspaces.CastJsonDataTypeTo[DataNodeConnectionDataDto](ctx.target.Data)

	DataNodeActionWriteDatum(&WriteDatumDto{
		Value:    ctx.previousValue,
		UniqueId: meta.NodeId,
		Key:      data.SubKey,
	}, workspaces.QueryDSL{UniqueId: *meta.NodeId})

	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.conn.UniqueId,
	}
	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value

	ctx.fre <- event
}
