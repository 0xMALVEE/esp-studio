package iot

import (
	"encoding/json"
	"fmt"

	"github.com/torabian/fireback/modules/workspaces"
)

func GetTargetConnectionsBySourceConnectionId(sheet *ControlSheetEntity, connectionId string) []*ControlSheetObjectsConnections {

	m := GetConnectionTargetsEdges(sheet, connectionId)
	items := []*ControlSheetObjectsConnections{}

	for _, object := range sheet.Objects {
		for _, connection := range object.Connections {
			if workspaces.Contains(m, connection.UniqueId) {
				items = append(items, connection)
			}
		}
	}

	return items
}

func GetConnectionById(sheet *ControlSheetEntity, connectionId string) *ControlSheetObjectsConnections {

	for _, object := range sheet.Objects {
		for _, connection := range object.Connections {
			if connection.UniqueId == connectionId {
				return connection
			}
		}
	}

	return nil
}

func GetConnectionTargetsEdges(sheet *ControlSheetEntity, connectionId string) []string {
	items := []string{}

	for _, edge := range sheet.Edges {

		if *edge.SourceHandle == connectionId && edge.TargetHandle != nil {
			items = append(items, *edge.TargetHandle)
		}
	}

	return items
}

type SheetRunTime struct {
	sheet             *ControlSheetEntity
	ConnectionsValues map[string]interface{}
}

func UserInteractionRequestHandler(srt *SheetRunTime, request *UserInteractionRequest, fre chan FlowRunEvent) {

	fmt.Println("Request conection id ", request.Connection.UniqueId)
	initialConnection := GetConnectionById(srt.sheet, request.Connection.UniqueId)

	var previousValue interface{} = nil
	if initialConnection == nil {
		return
	}

	if *initialConnection.LinkedTo.Type == "switchNode" {

		previousValue = request.NextState.Value

		event := FlowRunEvent{
			Value:        request.NextState.Value,
			ConnectionId: request.Connection.UniqueId,
		}
		fre <- event
	}

	if *initialConnection.LinkedTo.Type == "colorNode" {

		previousValue = request.NextState.Value

		event := FlowRunEvent{
			Value:        request.NextState.Value,
			ConnectionId: request.Connection.UniqueId,
		}
		fre <- event
	}
	if *initialConnection.LinkedTo.Type == "circularInputNode" {

		previousValue = request.NextState.Value

		event := FlowRunEvent{
			Value:        request.NextState.Value,
			ConnectionId: request.Connection.UniqueId,
		}
		fre <- event
	}

	srt.GoThrough(previousValue, fre, initialConnection)
}

func GetObjectSourcesByConnection(target *ControlSheetObjectsConnections) []*ControlSheetObjectsConnections {
	sources := []*ControlSheetObjectsConnections{}

	for _, item := range target.LinkedTo.Connections {
		if *item.Type == "source" || *item.Type == "multiplex" {
			sources = append(sources, item)
		}
	}
	return sources
}

func GetConnectionSiblingsTarget(target *ControlSheetObjectsConnections) []*ControlSheetObjectsConnections {
	sources := []*ControlSheetObjectsConnections{}

	for _, item := range target.LinkedTo.Connections {
		if *item.Type == "target" || *item.Type == "multiplex" {
			sources = append(sources, item)
		}
	}
	return sources
}

type RunContext struct {
	previousValue interface{}
	x             *SheetRunTime
	target        *ControlSheetObjectsConnections
	fre           chan FlowRunEvent
	conn          *ControlSheetObjectsConnections
}

func (x *SheetRunTime) GoThrough(previousValue interface{}, fre chan FlowRunEvent, conn *ControlSheetObjectsConnections) {
	targets := GetTargetConnectionsBySourceConnectionId(x.sheet, conn.UniqueId)
	for _, target := range targets {
		var node NodeActivity = nil
		ctx := &RunContext{
			previousValue: previousValue,
			x:             x,
			target:        target,
			fre:           fre,
			conn:          conn,
		}

		if *target.LinkedTo.Type == "averageNode" {
			node = &AverageNodeActivity{}
		}

		if *target.LinkedTo.Type == "digitalLabel" {
			node = &DigitalLabelNodeActivity{}
		}

		if *target.LinkedTo.Type == "oddEvenNode" {
			node = &OddEvenNodeActivity{}
		}

		if *target.LinkedTo.Type == "delayNode" {
			node = &DelayNodeActivity{}
		}

		if *target.LinkedTo.Type == "valueMonitorNode" {
			node = &ValueMonitorNodeActivity{}
		}

		if *target.LinkedTo.Type == "containerLevelValueNode" {
			node = &ContainerLevelNodeActivity{}
		}
		if *target.LinkedTo.Type == "valueGaugeNode" {
			node = &ValueGaugeNodeActivity{}
		}

		if *target.LinkedTo.Type == "interpolateNode" {
			node = &InterpolateNodeActivity{}
		}

		if *target.LinkedTo.Type == "switchNode" {
			node = &SwichNodeActivity{}
		}

		if *target.LinkedTo.Type == "dataNodeRelay" {
			node = &DataNodeRelayNodeActivity{}
		}

		if node != nil {
			RunX(node, ctx)
		}
	}
}

type NodeActivity interface {
	PassThroughHandler(
		ctx *RunContext,
	)
}

func RunX(m NodeActivity, ctx *RunContext) {
	m.PassThroughHandler(ctx)
}

func (sheet *ControlSheetEntity) Run(
	done chan bool,
	read chan map[string]interface{},
) (chan *string, error) {

	srt := &SheetRunTime{
		sheet:             sheet,
		ConnectionsValues: map[string]interface{}{},
	}

	entryFlows, err2 := GetSheetDataFlow(sheet)

	if err2 != nil {
		return nil, err2
	}

	controlSheetStream := make(chan SheetRunTimeEvent)

	for _, object := range sheet.Objects {
		if *object.Type == "dataNodeRelay" {
			DataNodeRelayActionHandler(object, controlSheetStream, done)
		}
		if *object.Type == "basicTimerNode" {
			BasicTimerActionHandler(object, controlSheetStream, done)
		}
		if *object.Type == "cronNode" {
			CronActionHandler(object, controlSheetStream, done)
		}
	}

	controlSheetStreamParsed := make(chan *string)

	flowx := make(chan FlowRunEvent)

	go func() {

		for {
			select {
			case <-done:
				fmt.Println("Completed actually")
				return

			case row, more := <-read:

				data, _ := json.MarshalIndent(row, "", "  ")
				data2 := string(data)

				var action *UserInteractionRequest = nil

				json.Unmarshal([]byte(data2), &action)

				if action != nil {
					UserInteractionRequestHandler(srt, action, flowx)
				}

				fmt.Println("Closed from client")
				if !more {
					return
				}
			}
		}
	}()
	go func() {

		for {
			select {
			case <-done:

				// defer close(flowx)
				// close(controlSheetStreamParsed)
				return

			case row, more := <-flowx:

				// It's time here to write the event into database -
				// Or, making sure write to database will be into queue
				dbitem := &FlowValueEntity{
					ConnectionId: &row.ConnectionId,
				}
				dbitem.FromInterface(row.Value)
				FlowValueActionCreate(dbitem, workspaces.QueryDSL{
					WorkspaceId: *sheet.WorkspaceId,
				})

				data, _ := json.MarshalIndent(row, "", "  ")
				data2 := string(data)

				controlSheetStreamParsed <- &data2
				if !more {
					return
				}
			}
		}
	}()

	go func() {

		for {
			select {
			case <-done:
				// defer close(controlSheetStreamParsed)
				return

			case row, more := <-controlSheetStream:

				if m := FindFlowsByRunTimeEvent(entryFlows, row); len(m) > 0 {

					for _, mx := range m {
						srt.GoThrough(row.Content, flowx, mx.SourceConnection)
					}
				}

				if !more {
					return
				}
			}
		}
	}()

	return controlSheetStreamParsed, nil
}

var VALUE_TYPE_INT64 = int64(1)
var VALUE_TYPE_FLOAT64 = int64(2)
var VALUE_TYPE_STRING = int64(3)
var VALUE_TYPE_BOOLEAN = int64(4)

func (x *FlowValueEntity) FromInterface(value interface{}) {

	switch value := value.(type) {
	case int64:
		x.ValueType = &VALUE_TYPE_INT64
		x.ValueInt = &value
	case float64:
		x.ValueType = &VALUE_TYPE_FLOAT64
		x.ValueFloat = &value
	case string:
		x.ValueType = &VALUE_TYPE_STRING
		x.ValueString = &value
		// case bool:
		// 	x.ValueBoolean = &value
	}

}

/**
*	This is gonna be the main task runner
**/
func ControlSheetActionRun(
	query workspaces.QueryDSL,
	done chan bool,
	read chan map[string]interface{},
) (chan *string, error) {
	sheet, err := ControlSheetActionGetComplete(query)
	if err != nil {
		return nil, err
	}

	return sheet.Run(done, read)

}

func (x *HmiEntity) ToControlSheet(query workspaces.QueryDSL) (*ControlSheetEntity, error) {

	sheet := &ControlSheetEntity{
		WorkspaceId: x.WorkspaceId,
	}

	for _, comp := range x.Components {

		// We do not need to do something for not reads
		// later we fix this, I want to temperatrure to work just now
		if comp.Read == nil {
			continue
		}

		r := "dataNodeRelay"
		meta := &workspaces.JSON{}
		dax, _ := json.Marshal(&DnReadWriteDataNodeDto{NodeId: comp.ReadId})
		meta.UnmarshalJSON(dax)

		data := &workspaces.JSON{}
		dax2, _ := json.Marshal(&DataNodeConnectionDataDto{SubKey: comp.ReadSubKey})
		data.UnmarshalJSON(dax2)

		// Create the source reader
		source := "comp_" + comp.UniqueId + "_source"
		src := "source"
		trg := "target"
		sheet.Objects = append(sheet.Objects, &ControlSheetObjects{
			UniqueId: source,
			Connections: []*ControlSheetObjectsConnections{
				{
					Type:     &src,
					LinkerId: &source,
					UniqueId: "comp_" + comp.UniqueId + "_s_con1",
					Data:     data,
				},
			},
			Type: &r,
			Meta: meta,
		})

		// Create the target value
		gague := "valueGaugeNode"
		target := "comp_" + comp.UniqueId + "_target"
		sheet.Objects = append(sheet.Objects, &ControlSheetObjects{
			Connections: []*ControlSheetObjectsConnections{
				{
					Type:     &trg,
					LinkerId: &target,
					UniqueId: "comp_" + comp.UniqueId + "_t_con1",
				},
			},
			UniqueId: target,
			Type:     &gague,
			Meta:     meta,
		})

		sourceHandle := "comp_" + comp.UniqueId + "_s_con1"
		targetHandle := "comp_" + comp.UniqueId + "_t_con1"

		sheet.Edges = append(sheet.Edges, &ControlSheetEdges{
			UniqueId:     "edge1",
			SourceHandle: &sourceHandle,
			TargetHandle: &targetHandle,
			Target:       &target,
			Source:       &source,
		})
	}
	ju, _ := json.MarshalIndent(sheet, "", "  ")
	fmt.Println(string(ju))

	return sheet, nil
}

func HmiActionRun(
	query workspaces.QueryDSL,
	done chan bool,
	read chan map[string]interface{},
) (chan *string, error) {

	query.Deep = true
	query.WithPreloads = append(query.WithPreloads, "Components.Read")
	hmi, err := HmiActionGetOne(query)
	if err != nil {
		return nil, err
	}

	sheet, err2 := hmi.ToControlSheet(query)
	if err2 != nil {
		return nil, err2
	}
	return sheet.Run(done, read)

}

func FindFlowsByRunTimeEvent(entryFlows []*DataFlow, event SheetRunTimeEvent) []*DataFlow {
	items := []*DataFlow{}

	for _, item := range entryFlows {

		if item.SourceConnection == nil || event.SourceConnectionId == nil {
			continue
		}

		if *event.SourceConnectionId == item.SourceConnection.UniqueId {
			items = append(items, item)
		}

	}

	// Before this was so important
	// for _, item := range entryFlows {

	// 	if item.SourceConnection == nil || item.SourceObject == nil || event.SourceConnectionId == nil || event.SourceObjectId == nil {
	// 		continue
	// 	}

	// 	if *event.SourceConnectionId == item.SourceConnection.UniqueId && *event.SourceObjectId == item.SourceObject.UniqueId {
	// 		items = append(items, item)
	// 	}

	// }
	return items
}

func AverageNodeHandle(
	previousValue interface{},
	x *SheetRunTime,
	target *ControlSheetObjectsConnections,
	fre chan FlowRunEvent,
) {
	var currentValue interface{} = 10
	event := FlowRunEvent{
		Value:        previousValue,
		ConnectionId: target.UniqueId,
	}

	x.ConnectionsValues[event.ConnectionId] = event.Value

	siblings := GetConnectionSiblingsTarget(target)

	count := 0
	total := 0.0
	for _, sibling := range siblings {
		v, okay := x.ConnectionsValues[sibling.UniqueId]
		if okay {
			realv := GetInterfaceFloat64Value(v)

			if realv != nil {
				count++
				total += *realv
			}

		}
	}

	currentValue = total / float64(count)
	sources := GetObjectSourcesByConnection(target)
	fre <- event

	for _, next := range sources {
		x.GoThrough(currentValue, fre, next)
	}

}

func XNodeHandle(
	previousValue interface{},
	x *SheetRunTime,
	target *ControlSheetObjectsConnections,
	fre chan FlowRunEvent,
) {

}
