package iot

import (
	"fmt"
)

type DigitalLabelNodeActivity struct{}

func (x0 *DigitalLabelNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	var currentValue interface{} = "UNKNOWN"
	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.target.UniqueId,
	}
	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value

	valx := GetInterfaceFloat64Value(ctx.previousValue)

	if *valx == 1 {
		currentValue = "ON"

	}
	if *valx == 0 {

		currentValue = "OFF"
	}
	fmt.Println("Digital label arrived", ctx.previousValue, currentValue, valx)
	sources := GetObjectSourcesByConnection(ctx.target)
	fmt.Println("Other connections that it has:", len(sources))
	ctx.fre <- event

	for _, next := range sources {
		ctx.x.GoThrough(currentValue, ctx.fre, next)
	}
}
