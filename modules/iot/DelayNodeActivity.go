package iot

import (
	"fmt"
	"time"
)

type DelayNodeActivity struct{}

func (x0 *DelayNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	go func() {

		time.Sleep(time.Duration(3000) * time.Millisecond)
		event := FlowRunEvent{
			Value:        ctx.previousValue,
			ConnectionId: ctx.target.UniqueId,
		}

		sources := GetObjectSourcesByConnection(ctx.target)

		fmt.Println("+++++++++++++ DELAY:", len(sources))
		ctx.fre <- event

		for _, next := range sources {
			ctx.x.GoThrough(ctx.previousValue, ctx.fre, next)
		}
	}()
}
