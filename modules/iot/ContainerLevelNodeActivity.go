package iot

type ContainerLevelNodeActivity struct{}

func (x0 *ContainerLevelNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.target.UniqueId,
	}
	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value
	ctx.fre <- event
}
