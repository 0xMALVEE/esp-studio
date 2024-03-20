package iot

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/torabian/fireback/modules/workspaces"
	"gorm.io/gorm/clause"
)

func SubcribeToDataNode(query workspaces.QueryDSL, done chan bool) chan SheetRunTimeEvent {

	query.Deep = true
	n, _ := DataNodeActionGetOne(query)

	return SubcribeToDataNode2(nil, n, done)
}

func GetSheetIndependentSourceConnections3(sheet *ControlSheetEntity) []*ControlSheetObjects {
	items := []*ControlSheetObjects{}

	for _, object := range sheet.Objects {
		for _, connection := range object.Connections {
			connection.LinkedTo = object
			if connection.Type == nil {
				continue
			}

			if *connection.Type == "source" && *connection.LinkedTo.Type == "dataNodeRelay" {
				items = append(items, object)
				break
			}
			if *connection.Type == "source" && *connection.LinkedTo.Type == "basicTimerNode" {
				items = append(items, object)
				break
			}
			if *connection.Type == "source" && *connection.LinkedTo.Type == "cronNode" {
				items = append(items, object)
				break
			}
		}
	}

	return items
}

type DataNodeWithKey struct {
	DataNodeId string
	Key        string
}

func GetSheetDataFlow(sheet *ControlSheetEntity) ([]*DataFlow, error) {
	nodes := GetSheetIndependentSourceConnections3(sheet)
	flow2 := []*DataFlow{}

	for _, node := range nodes {
		flow := TraverseOnEdges2(node, sheet, nil, nil)
		flow2 = append(flow2, flow...)
	}

	return flow2, nil
}

func GetObject(sheet *ControlSheetEntity, uniqueId string) *ControlSheetObjects {

	for _, item := range sheet.Objects {
		if item.UniqueId == uniqueId {
			return item
		}
	}

	return nil
}
func GetConnection(sheet *ControlSheetEntity, uniqueId string) *ControlSheetObjectsConnections {

	for _, object := range sheet.Objects {
		for _, connection := range object.Connections {

			if connection.UniqueId == uniqueId {
				return connection
			}
		}
	}

	return nil
}

// Soon we might need this to be recursive
func TraverseOnEdges2(
	source *ControlSheetObjects,
	sheet *ControlSheetEntity,
	prevConnection *ControlSheetObjectsConnections,
	prevEdge *ControlSheetEdges,
) []*DataFlow {
	flow := []*DataFlow{}

	continues := false
	for _, connection := range source.Connections {
		for _, edge := range sheet.Edges {

			if *edge.SourceHandle == connection.UniqueId {
				df := &DataFlow{}
				df.SourceConnection = connection
				df.SourceObject = source
				if edge != nil && edge.TargetHandle != nil {
					df.TargetConnectionId = *edge.TargetHandle
				}

				if source != nil && source.UniqueId != "" {
					df.ConnectionId = source.UniqueId
				}

				flow = append(flow, df)
				next := GetObject(sheet, *edge.Target)
				if next != nil {

					df.Next = TraverseOnEdges2(next, sheet, connection, edge)
				}

				// Important to set true in the end
				continues = true
			}
		}
	}

	if !continues {
		df := &DataFlow{}
		df.SourceObject = source
		df.SourceConnection = prevConnection

		if prevEdge != nil && prevEdge.TargetHandle != nil {
			df.TargetConnection = GetConnection(sheet, *prevEdge.TargetHandle)
		}
		flow = append(flow, df)

	}

	return flow

}

func SubcribeToDataNode2(object *ControlSheetObjects, n *DataNodeEntity, done chan bool) chan SheetRunTimeEvent {
	cn := make(chan SheetRunTimeEvent)

	fmt.Println("Starting to subscribe inside", *n.Readers[0].ReaderId)

	var act chan *string
	if len(n.Readers) == 0 || n.Readers[0].ReaderId == nil {
		return cn
	}

	if *n.Readers[0].ReaderId == "DnReadMQTTTopic" {
		cfg := workspaces.CastJsonDataTypeTo[DnReadMQTTTopicConfigDto](n.Readers[0].Config)
		act = DnReadMQTTTopic(cfg, done)
	}

	if *n.Readers[0].ReaderId == "DnReadFsFromHost" {
		cfg := workspaces.CastJsonDataTypeTo[DnReadFsFromHostConfigDto](n.Readers[0].Config)
		act = DnReadFsFromHost(cfg, done)
	}

	if *n.Readers[0].ReaderId == "DnReaderVirtualMemoryFull" {
		act = DnReaderVirtualMemoryFull(done)
	}

	if *n.Readers[0].ReaderId == "DnReadFakeEnvironemnt" {
		act = DnReadFakeEnvironemnt(done)
	}

	if *n.Readers[0].ReaderId == "DnReadModbusRTU" {
		cfg := workspaces.CastJsonDataTypeTo[DnModbusRtuConfigDto](n.Readers[0].Config)
		act = DnReadModbusRTU(cfg, done)
	}

	if *n.Readers[0].ReaderId == "DnReadModbusTCP" {
		cfg := workspaces.CastJsonDataTypeTo[DnModbusTcpConfigDto](n.Readers[0].Config)
		act = DnReadModbusTCP(cfg, done)
	}

	if *n.Readers[0].ReaderId == "DnMacOsxFanInformation" {
		act = DnMacOsxFanInformation(done)
	}

	if *n.Readers[0].ReaderId == "DnReadSerialPort" {
		cfg := workspaces.CastJsonDataTypeTo[DnReadSerialPortConfigDto](n.Readers[0].Config)
		act = DnReadSerialPort(cfg, done)
	}

	connectionMap := map[string]*ControlSheetObjectsConnections{}

	if object != nil && len(object.Connections) > 0 {
		for _, connItem := range object.Connections {
			data := workspaces.CastJsonDataTypeTo[DataNodeConnectionDataDto](connItem.Data)
			connectionMap[*data.SubKey] = connItem
		}
	}

	go func() {

		for {
			select {
			case <-done:
				defer close(act)

				return
			case row, more := <-act:

				if *n.TypeId == "string" && row != nil {

					k := SheetRunTimeEvent{
						Type:    "node",
						Content: row,
						// SourceConnectionId: &connection.UniqueId,
						// SourceObjectId:     connection.LinkerId,
					}
					cn <- k

					if !more {
						return
					}
				}

				if *n.TypeId == "computedValueArray" && row != nil {
					if n.ExpanderFunctionId == nil {
						return
					}
					var vr []*DataNodeValues

					if *n.ExpanderFunctionId == "JsonToNodeValueModifier" {
						vr = JsonToNodeValueModifier(*row)
					}
					if *n.ExpanderFunctionId == "OvioCommandDataExpander" {
						vr = OvioCommandDataExpander(*row)
					}

					for _, item := range vr {
						item.UniqueId = *item.Key
						item.LinkerId = &n.UniqueId
					}
					ref := workspaces.GetDbRef()
					ref.Clauses(clause.OnConflict{
						Columns: []clause.Column{{Name: "unique_id"}},
						DoUpdates: clause.AssignmentColumns([]string{
							"value_float64",
							"value_int64",
							"value_string",
							"value_boolean",
							"linker_id",
						}),
					}).Create(&vr)

					for _, item := range vr {

						d := SheetRunTimeEvent{
							Type:    "node",
							Content: item.Value,
							SubKey:  item.Key,
						}

						connectionData, okay := connectionMap[*item.Key]
						if okay {
							d.SourceConnectionId = &connectionData.UniqueId
							d.SourceObjectId = connectionData.LinkerId
						}

						cn <- d

					}

					if !more {
						return
					}
				}
			}
		}
	}()

	return cn

}

func HttpPostDataNodeValues(c *gin.Context) {
	workspaces.HttpPostEntity(c, DataNodeValuesActionCreate)
}

func init() {

	AppendDataNodeRouter = func(r *[]workspaces.Module2Action) {

		*r = append(*r,

			workspaces.Module2Action{
				Method: "POST",
				Url:    "/dataNode/:linkerId/values2",
				Handlers: []gin.HandlerFunc{
					workspaces.WithAuthorization([]string{PERM_ROOT_DATANODE_UPDATE}),
					HttpPostDataNodeValues,
				},
				Action:         DataNodeValuesActionCreate2,
				Format:         "POST_ONE",
				RequestEntity:  &DataNodeValues{},
				ResponseEntity: &DataNodeValues{},
			},
			workspaces.Module2Action{
				Method: "POST",
				Url:    "/dataNode/write",
				Handlers: []gin.HandlerFunc{
					workspaces.WithAuthorization([]string{PERM_ROOT_NODEDATUM_CREATE}),
					func(ctx *gin.Context) {
						workspaces.HttpPostEntity(ctx, DataNodeActionWriteDatum)
					},
				},
				RequestEntity:  &WriteDatumDto{},
				ResponseEntity: &NodeDatumEntity{},
			},
			workspaces.Module2Action{
				Method: "POST",
				Url:    "/controlSheet/terminate",
				Format: "POST_ONE",
				Handlers: []gin.HandlerFunc{
					workspaces.WithAuthorization([]string{PERM_ROOT_CONTROLSHEET_UPDATE}),
					func(ctx *gin.Context) {
						workspaces.HttpPostEntity(ctx, ControlSheetActionTerminate)
					},
				},
				RequestEntity:  &ControlSheetEntity{},
				ResponseEntity: &workspaces.OkayResponseDto{},
			},
			workspaces.Module2Action{
				Method: "POST",
				Url:    "/hmi/terminate",
				Format: "POST_ONE",
				Handlers: []gin.HandlerFunc{
					workspaces.WithAuthorization([]string{PERM_ROOT_HMI_QUERY}),
					func(ctx *gin.Context) {
						workspaces.HttpPostEntity(ctx, ControlSheetActionTerminate)
					},
				},
				RequestEntity:  &HmiEntity{},
				ResponseEntity: &workspaces.OkayResponseDto{},
			},
			workspaces.Module2Action{
				Method: "REACTIVE",
				Url:    "/dataNode/readfn/:uniqueId",
				Handlers: []gin.HandlerFunc{
					func(ctx *gin.Context) {

						workspaces.HttpReactiveQuery(ctx, func(qd workspaces.QueryDSL, done chan bool, read chan map[string]interface{}) chan *string {

							return SniffChannel(done, SubcribeToDataNode(qd, done), func(srte SheetRunTimeEvent) bool {
								return true
							})

						})

					},
				},
				ResponseEntity: "string",
			},
			workspaces.Module2Action{
				Method: "REACTIVE",
				Url:    "/dataNode/simulate/:uniqueId",
				Handlers: []gin.HandlerFunc{
					func(ctx *gin.Context) {
						workspaces.HttpSocketRequest(ctx, func(query workspaces.QueryDSL, write func(string)) {
							opt, err := BeginOrAttachOperation(query, ControlSheetActionRun)
							fmt.Println("Err:", err)
							opt.AttachListener(func(s *string) {
								write(*s)
							})

						}, func(query workspaces.QueryDSL, i interface{}) {
							opt, err := BeginOrAttachOperation(query, ControlSheetActionRun)
							fmt.Println("Err:", err)
							var kv map[string]interface{} = i.(map[string]interface{})
							opt.Send(kv)
						})

					},
				},
				ResponseEntity: "string",
			},
			workspaces.Module2Action{
				Method: "REACTIVE",
				Url:    "/hmi/run/:uniqueId",
				Handlers: []gin.HandlerFunc{
					func(ctx *gin.Context) {
						workspaces.HttpSocketRequest(ctx, func(query workspaces.QueryDSL, write func(string)) {
							opt, _ := BeginOrAttachOperation(query, HmiActionRun)
							// @todo attaching error is not handled
							opt.AttachListener(func(s *string) {
								write(*s)
							})

						}, func(query workspaces.QueryDSL, i interface{}) {
							// @todo attaching error is not handled
							opt, _ := BeginOrAttachOperation(query, HmiActionRun)
							var kv map[string]interface{} = i.(map[string]interface{})
							opt.Send(kv)
						})

					},
				},
				ResponseEntity: "string",
			},
			workspaces.Module2Action{
				Method: "GET",
				Url:    "/dataNode/serialPorts",
				Handlers: []gin.HandlerFunc{
					func(ctx *gin.Context) {
						workspaces.HttpQueryEntity(ctx, SerialPortActionQuery)
					},
				},
				Action:         SerialPortActionQuery,
				ResponseEntity: &[]SerialPortDto{},
				Format:         "GET_ONE",
			},
		)

	}
}
