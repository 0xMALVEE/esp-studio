package iot

import (
	"encoding/json"

	"github.com/torabian/fireback/modules/workspaces"
)

func ControlSheetActionCreate(
	dto *ControlSheetEntity, query workspaces.QueryDSL,
) (*ControlSheetEntity, *workspaces.IError) {
	return ControlSheetActionCreateFn(dto, query)
}

func ControlSheetActionUpdate(
	query workspaces.QueryDSL,
	fields *ControlSheetEntity,
) (*ControlSheetEntity, *workspaces.IError) {
	return ControlSheetActionUpdateFn(query, fields)
}

func ControlSheetActionGetComplete(query workspaces.QueryDSL) (*ControlSheetEntity, *workspaces.IError) {

	query.WithPreloads = []string{
		"Objects.Connections",
		"Objects.Position",
		"Objects.PositionAbsolute",
	}
	query.Deep = true
	return ControlSheetActionGetOne(query)
}

func ControlSheetActionTerminate(dto *ControlSheetEntity, query workspaces.QueryDSL) (*workspaces.OkayResponseDto, *workspaces.IError) {

	if dto == nil {
		return nil, nil
	}

	if ProcessPool[dto.UniqueId] == nil {
		return nil, nil
	}

	ProcessPool[dto.UniqueId].Terminate()
	delete(ProcessPool, dto.UniqueId)

	return &workspaces.OkayResponseDto{}, nil
}

type SheetRunTimeEvent struct {
	Type                 string      `json:"type"`
	Content              interface{} `json:"content"`
	DataNodeId           *string     `json:"dataNodeId"`
	DataNodeConnectionId *string     `json:"dataNodeConnectionId"`
	SubKey               *string     `json:"subKey"`
	SourceObjectId       *string     `json:"sourceObjectId"`
	SourceConnectionId   *string     `json:"sourceConnectionId"`
}

type FlowRunEvent struct {
	Value        interface{}
	ConnectionId string `json:"connectionId"`
}

func HasKeyForDataNode(flow []*DataFlow, nodeId string, connectionId string) bool {
	if len(flow) == 0 {
		return false
	}

	for _, f := range flow {
		if f.SourceObject == nil || f.SourceConnection == nil {
			continue
		}
		meta := workspaces.CastJsonDataTypeTo[DnReadWriteDataNodeDto](f.SourceObject.Meta)
		data := workspaces.CastJsonDataTypeTo[DataNodeConnectionDataDto](f.SourceConnection.Data)

		if meta == nil || data == nil || meta.NodeId == nil || data.SubKey == nil {
			continue
		}

		if *meta.NodeId == nodeId && *data.SubKey == connectionId {
			return true
		}

	}

	return false
}

func SniffChannel(done chan bool, stream chan SheetRunTimeEvent, call func(SheetRunTimeEvent) bool) chan *string {
	controlSheetStreamParsed := make(chan *string)

	go func() {

		for {
			select {
			case <-done:
				// defer close(controlSheetStreamParsed)
				return

			case row, more := <-stream:
				if call(row) {
					data, _ := json.MarshalIndent(row, "", "  ")
					data2 := string(data)
					controlSheetStreamParsed <- &data2
				}

				if !more {
					return
				}
			}
		}
	}()

	return controlSheetStreamParsed
}

func init() {
	ControlSheetPreloadRelations = append(
		ControlSheetPreloadRelations,
		"Objects.Connections",
		"Objects.Position",
		"Objects.PositionAbsolute",
	)
}

func ControlSheetResponseMask(dto *ControlSheetEntity, query workspaces.QueryDSL) {
	if dto == nil {
		return
	}

	t := true
	if ProcessPool[dto.UniqueId] != nil {
		dto.IsRunning = &t
	}
}
