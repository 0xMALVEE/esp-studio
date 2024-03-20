package iot

import "fmt"

type AverageNodeActivity struct{}

func (x0 *AverageNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	var currentValue interface{} = 10
	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.target.UniqueId,
	}

	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value

	fmt.Println("Average", event.ConnectionId)
	fmt.Println("Average node arrived", ctx.previousValue, currentValue)
	fmt.Println("Dictionary content", len(ctx.x.ConnectionsValues))

	siblings := GetConnectionSiblingsTarget(ctx.target)

	count := 0
	total := 0.0
	for index, sibling := range siblings {
		v, okay := ctx.x.ConnectionsValues[sibling.UniqueId]
		fmt.Println(index, v, sibling.UniqueId)
		if okay {
			realv := GetInterfaceFloat64Value(v)

			if realv != nil {
				count++
				total += *realv
			}

			fmt.Println("----- Got values", v)
		}
	}

	currentValue = total / float64(count)
	fmt.Println("Siblings:", len(GetConnectionSiblingsTarget(ctx.target)))
	sources := GetObjectSourcesByConnection(ctx.target)
	fmt.Println("Other connections that it has:", len(sources))
	ctx.fre <- event

	for _, next := range sources {
		ctx.x.GoThrough(currentValue, ctx.fre, next)
	}
}
