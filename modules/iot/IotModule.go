package iot

import (
	"embed"
	"fmt"
	"time"

	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
	"gorm.io/gorm"
)

//go:embed *Module3.yml
var Module2Definitions embed.FS

func MockNodeDatum(items []*DataNodeEntity) {
	for _, item := range items {
		date := time.Now()
		for i := 0; i <= 100; i++ {
			date = date.Add(-1 * time.Minute)
			val := int64(i % 2)
			NodeDatumActionCreate(&NodeDatumEntity{
				Node:       item,
				ValueInt64: &val,
				IngestedAt: date.UnixNano(),
			}, workspaces.QueryDSL{
				WorkspaceId: "root",
			})
		}
	}
}

var DeviceDailyCountReport workspaces.Report = workspaces.Report{
	UniqueId:     "D1",
	RowEntity:    &DeviceEntity{},
	Title:        "Daily Created Devices",
	Description:  "Counts the devices created per day",
	Query:        "select * from fb_device_entities where unique_id = 'device_modbus_sub1'",
	QueryCounter: "select count(*) total_items from fb_device_entities where unique_id = 'device_modbus_sub1'",
}

func OnModuleStart() {
	q := workspaces.QueryDSL{ItemsPerPage: 9999999}

	if sheets, _, err := HmiActionQuery(q); err == nil {

		if len(sheets) == 0 {
			return
		}
		for _, sheet := range sheets {
			q.UniqueId = sheet.UniqueId

			// @todo: The code here in this section is actually not that great and does not work.
			// if sheet.IsRunning != nil && *sheet.IsRunning {
			// 	BeginOrAttachOperation(q, HmiActionRun)
			// }
		}
	}

}

func IotModuleSetup() *workspaces.ModuleProvider {
	module := &workspaces.ModuleProvider{
		Name:        "iot",
		Definitions: &Module2Definitions,
		BackupTables: []workspaces.TableMetaData{
			DeviceEntityMeta,
			DataNodeEntityMeta,
			ControlSheetEntityMeta,
		},
		Reports: []workspaces.Report{
			DeviceDailyCountReport,
		},
	}

	module.ProvideMockImportHandler(func() {
		DataNodeTypeSyncSeeders()
		DataNodeImportMocks()
		items, _, _ := DataNodeActionQuery(workspaces.QueryDSL{ItemsPerPage: 9999})
		MockNodeDatum(items)
		GpioModeSyncSeeders()
		GpioSyncSeeders()
		PhysicalSectionImportMocks()
		DeviceTypeSyncSeeders()
		ModbusTransmissionModeSyncSeeders()
		ModbusConnectionTypeSyncSeeders()
		ModbusVariableTypeSyncSeeders()
		ModbusFunctionCodeSyncSeeders()
		DeviceImportMocks()
		ModbusTaskImportMocks()
		MqttVersionSyncSeeders()
		DataNodeModeSyncSeeders()
		DataNodeTypeSyncSeeders()
		ControlSheetImportMocks()
	})

	module.ProvideMockWriterHandler(func(languages []string) {
		DataNodeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		DataNodeTypeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		NodeDatumWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		GpioWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		GpioModeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		GpioWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		PhysicalSectionWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		DeviceTypeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ModbusTransmissionModeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ModbusConnectionTypeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ModbusVariableTypeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ModbusFunctionCodeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		DeviceWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ModbusTaskWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		DataNodeModeWriteQueryMock(workspaces.MockQueryContext{Languages: languages})
		ControlSheetWriteQueryMock(workspaces.MockQueryContext{Languages: languages, WithPreloads: []string{
			"Objects.Connections",
			"Objects.Position",
			"Objects.PositionAbsolute",
		}})
	})

	module.SeederHandler = func() {
		MqttVersionSyncSeeders()
		DataNodeModeSyncSeeders()
		DataNodeTypeSyncSeeders()
		NodeWriterSyncSeeders()
		NodeReaderSyncSeeders()
		ExpanderFunctionSyncSeeders()
		GpioSyncSeeders()
		GpioModeSyncSeeders()
		HmiComponentTypeSyncSeeders()

	}

	module.ProvidePermissionHandler(
		ALL_DATANODETYPE_PERMISSIONS,
		ALL_DATANODE_PERMISSIONS,
		ALL_NODEDATUM_PERMISSIONS,
		ALL_GPIOMODE_PERMISSIONS,
		ALL_GPIO_PERMISSIONS,
		ALL_PHYSICALSECTION_PERMISSIONS,
		ALL_DEVICETYPE_PERMISSIONS,
		ALL_DEVICE_PERMISSIONS,
		ALL_MODBUSTRANSMISSIONMODE_PERMISSIONS,
		ALL_MODBUSCONNECTIONTYPE_PERMISSIONS,
		ALL_MODBUSVARIABLETYPE_PERMISSIONS,
		ALL_MODBUSFUNCTIONCODE_PERMISSIONS,
		ALL_MODBUSTASK_PERMISSIONS,
		ALL_NODEWRITER_PERMISSIONS,
		ALL_NODEREADER_PERMISSIONS,
		ALL_MQTTVERSION_PERMISSIONS,
		ALL_MQTTCLIENTCONNECT_PERMISSIONS,
		ALL_MQTTCLIENTCONNECTION_PERMISSIONS,
		ALL_DATANODEMODE_PERMISSIONS,
		ALL_GPIOSTATE_PERMISSIONS,
		ALL_CONTROLSHEET_PERMISSIONS,
		ALL_EXPANDERFUNCTION_PERMISSIONS,
		ALL_MQTTCONNECTION_PERMISSIONS,
		ALL_INTERACTIVEMAP_PERMISSIONS,
		ALL_MOVABLEOBJECT_PERMISSIONS,
		ALL_SPACETIMESNAPSHOT_PERMISSIONS,
		ALL_HMI_PERMISSIONS,
		ALL_HMICOMPONENTTYPE_PERMISSIONS,
		ALL_FLOWVALUE_PERMISSIONS,
	)

	module.Actions = [][]workspaces.Module2Action{
		GetDataNodeModule2Actions(),
		GetDataNodeTypeModule2Actions(),
		GetNodeDatumModule2Actions(),
		GetGpioModeModule2Actions(),
		GetGpioModule2Actions(),
		GetPhysicalSectionModule2Actions(),
		GetDeviceTypeModule2Actions(),
		GetDeviceModule2Actions(),
		GetModbusTransmissionModeModule2Actions(),
		GetModbusConnectionTypeModule2Actions(),
		GetModbusVariableTypeModule2Actions(),
		GetModbusFunctionCodeModule2Actions(),
		GetModbusTaskModule2Actions(),
		GetNodeWriterModule2Actions(),
		GetNodeReaderModule2Actions(),
		GetMqttVersionModule2Actions(),
		GetMqttClientConnectModule2Actions(),
		GetMqttClientConnectionModule2Actions(),
		GetDataNodeModeModule2Actions(),
		GetGpioStateModule2Actions(),
		GetControlSheetModule2Actions(),
		GetExpanderFunctionModule2Actions(),
		GetMqttConnectionModule2Actions(),
		GetInteractiveMapModule2Actions(),
		GetMovableObjectModule2Actions(),
		GetSpaceTimeSnapshotModule2Actions(),
		GetHmiModule2Actions(),
		GetHmiComponentTypeModule2Actions(),
		GetFlowValueModule2Actions(),
	}

	module.ProvideEntityHandlers(func(dbref *gorm.DB) {

		if err := dbref.AutoMigrate(&DataNodeEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&DataNodeTypeEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&NodeDatumEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&GpioModeEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&GpioModeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&MqttConnectionEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&GpioEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&PhysicalSectionEntity{}, &PhysicalSectionEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(&DeviceEntity{}, &DeviceEntityPolyglot{}, &DeviceTypeEntity{}, &DeviceTypeEntityPolyglot{}, &DeviceDeviceModbusConfig{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ModbusTransmissionModeEntity{}, &ModbusTransmissionModeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ModbusConnectionTypeEntity{}, &ModbusConnectionTypeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ModbusVariableTypeEntity{}, &ModbusVariableTypeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ModbusFunctionCodeEntity{}, &ModbusFunctionCodeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ModbusTaskEntity{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&NodeReaderEntity{}, &NodeWriterEntity{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&MqttVersionEntity{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&DataNodeModeEntity{}, &DataNodeValues{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&DataNodeReaders{}, &DataNodeWriters{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&ControlSheetEntity{}, &ControlSheetEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&GpioStateEntity{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&InteractiveMapEntity{}, &InteractiveMapEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&MovableObjectEntity{}, &MovableObjectEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&SpaceTimeSnapshotEntity{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&HmiComponents{}, &HmiComponentsPosition{}, &HmiComponentsStates{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&HmiEntity{}, &HmiEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&HmiComponentTypeEntity{}, &HmiComponentTypeEntityPolyglot{}); err != nil {
			fmt.Println(err.Error())
		}
		if err := dbref.AutoMigrate(&FlowValueEntity{}); err != nil {
			fmt.Println(err.Error())
		}

		if err := dbref.AutoMigrate(
			&ControlSheetObjectsPositionAbsolute{},
			&ControlSheetObjects{},
			&ControlSheetObjectsConnections{},
			&ControlSheetObjectsPosition{},
			&ControlSheetEdges{},
			&ExpanderFunctionEntity{},
			&ExpanderFunctionEntityPolyglot{},
		); err != nil {
			fmt.Println(err.Error())
		}

		// Think about this. When every cli action is being called, this is starting
		// Add a hook on start of the app
		//OnModuleStart()
	})

	module.ProvideCliHandlers([]cli.Command{
		ControlSheetCliFn(),
		DataNodeCliFn(),
		DataNodeModeCliFn(),
		DataNodeTypeCliFn(),
		NodeDatumCliFn(),
		GpioModeCliFn(),
		GpioCliFn(),
		PhysicalSectionCliFn(),
		ModbusTransmissionModeCliFn(),
		MqttConnectionCliFn(),
		ModbusVariableTypeCliFn(),
		ModbusTaskCliFn(),
		ModbusFunctionCodeCliFn(),
		DeviceCliFn(),
		DeviceTypeCliFn(),
		IoWriterCliFn(),
		NodeReaderCliFn(),
		NodeWriterCliFn(),
		MqttCliFn(),
		MqttVersionCliFn(),
		GpioStateCliFn(),
		ExpanderFunctionCliFn(),
		InteractiveMapCliFn(),
		MovableObjectCliFn(),
		SpaceTimeSnapshotCliFn(),
		HmiCliFn(),
		HmiComponentTypeCliFn(),
		FlowValueCliFn(),
	})

	return module
}
