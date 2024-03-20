package iot

import (
	"math"

	"github.com/DzananGanic/numericalgo/interpolate"
	"github.com/DzananGanic/numericalgo/interpolate/linear"
	"github.com/torabian/fireback/modules/workspaces"
)

type InterpolateNodeActivity struct{}

func (x0 *InterpolateNodeActivity) PassThroughHandler(
	ctx *RunContext,
) {
	var currentValue interface{} = 0
	event := FlowRunEvent{
		Value:        ctx.previousValue,
		ConnectionId: ctx.target.UniqueId,
	}
	ctx.x.ConnectionsValues[event.ConnectionId] = event.Value

	meta := workspaces.CastJsonDataTypeTo[DnInterpolateConfigDto](ctx.target.LinkedTo.Meta)

	li := linear.New()
	li.Fit(meta.Sources, meta.Targets)

	dfx := ctx.previousValue.(float64)
	estimate, _ := interpolate.WithSingle(li, dfx)
	estimate = math.Ceil(estimate)
	currentValue = estimate
	sources := GetObjectSourcesByConnection(ctx.target)

	for _, next := range sources {
		ctx.x.GoThrough(currentValue, ctx.fre, next)
	}
}
