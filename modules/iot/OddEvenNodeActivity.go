package iot

import (
	"fmt"
)

type OddEvenNodeActivity struct{}

func (x0 *OddEvenNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	var currentValue interface{} = 0
	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.target.UniqueId,
	}
	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value

	valx := GetInterfaceFloat64Value(ctx.previousValue)

	currentValue = int64(*valx) % 2

	fmt.Println("Digital label arrived", ctx.previousValue, currentValue, valx)
	sources := GetObjectSourcesByConnection(ctx.target)
	fmt.Println("Other connections that it has:", len(sources))
	ctx.fre <- event

	for _, next := range sources {
		ctx.x.GoThrough(currentValue, ctx.fre, next)
	}
}
