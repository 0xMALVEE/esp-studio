package iot

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/torabian/fireback/modules/workspaces"
	"gorm.io/gorm"
)

type JsonToValuesModifier = func(data string) []*DataNodeValues

func JsonToNodeValueModifier(data string) []*DataNodeValues {

	result := []*DataNodeValues{}

	body := map[string]interface{}{}
	json.Unmarshal([]byte(data), &body)

	rows := workspaces.Flatten(body)

	for key, value := range rows {
		var Key string = key

		row := &DataNodeValues{Key: &Key}
		AppendSubNodeValue(row, value)
		result = append(result, row)
	}

	return result

}

func AppendSubNodeValue(row *DataNodeValues, value interface{}) {

	row.Value = value

	switch value := value.(type) {
	case int64:

		row.ValueInt64 = &value
	case float64:
		row.ValueFloat64 = &value
	case string:
		row.ValueString = &value
	case bool:
		row.ValueBoolean = &value
	}

}

func GetInterfaceStringValue(value interface{}) string {

	switch value := value.(type) {
	case int64:
		return fmt.Sprintf("%v", value)
	case float64:
		return fmt.Sprintf("%v", value)
	case string:
		return value
	case *string:
		return *value
	default:
		return ""

	}

}
func GetInterfaceFloat64Value(value interface{}) *float64 {

	switch value := value.(type) {
	// case int64:
	// 	return fmt.Sprintf("%v", value)
	case float64:
		return &value
	case *float64:
		return value
	// case string:
	// 	return value
	// case *string:
	// 	return *value
	default:
		return nil

	}

}
func GetInterfaceBoolValue(value interface{}) *bool {

	switch value := value.(type) {
	case int64:
		if value == 0 {
			f := false
			return &f
		} else {
			t := true
			return &t
		}
	case *int64:
		if *value == 0 {
			f := false
			return &f
		} else {
			t := true
			return &t
		}
	case float64:
		if value == 0 {
			f := false
			return &f
		} else {
			t := true
			return &t
		}
	case *float64:
		if *value == 0 {
			f := false
			return &f
		} else {
			t := true
			return &t
		}

	case bool:
		return &value
	case *bool:
		return value
	// case string:
	// 	return value
	// case *string:
	// 	return *value
	default:
		return nil

	}

}

func OvioCommandDataExpander(data string) []*DataNodeValues {

	result := []*DataNodeValues{}

	body := map[string]interface{}{}
	json.Unmarshal([]byte(data), &body)

	innerData, okay := body["data"].(map[string]interface{})
	if okay {

		prefix, okay2 := body["id"].(string)

		if okay2 {
			for key, value := range innerData {
				k := prefix + "." + key
				row := &DataNodeValues{Key: &k}
				AppendSubNodeValue(row, value)
				result = append(result, row)
			}
		}
	}

	return result

}

/**
* Each data node has a list of sub nodes (keys) that it can read or write
* If it's string or int64, some times we need to create that item
 */
func normalizeDataNodeValues(dto *DataNodeEntity) {

	if dto.TypeId == nil {
		return
	}

	if *dto.TypeId != "computedValueArray" {
		if dto.Values == nil || len(dto.Values) == 0 {
			dto.Values = []*DataNodeValues{}
		}
		if len(dto.Values) == 0 {
			rootKey := "root"
			dto.Values = append(dto.Values, &DataNodeValues{
				Key: &rootKey,
			})
		}
	}
}

func DataNodeActionCreate(
	dto *DataNodeEntity, query workspaces.QueryDSL,
) (*DataNodeEntity, *workspaces.IError) {
	normalizeDataNodeValues(dto)

	return DataNodeActionCreateFn(dto, query)
}

func DataNodeValuesActionCreate2(
	dto *DataNodeValues, query workspaces.QueryDSL,
) (*DataNodeValues, *workspaces.IError) {

	dto.LinkerId = &query.LinkerId

	var dbref *gorm.DB = nil
	if query.Tx == nil {
		dbref = workspaces.GetDbRef()
	} else {
		dbref = query.Tx
	}

	query.Tx = dbref
	err := dbref.Create(&dto).Error
	if err != nil {
		err := workspaces.GormErrorToIError(err)
		return dto, err
	}

	return dto, nil
}

func DataNodeActionUpdate(
	query workspaces.QueryDSL,
	fields *DataNodeEntity,
) (*DataNodeEntity, *workspaces.IError) {
	normalizeDataNodeValues(fields)

	return DataNodeActionUpdateFn(query, fields)
}

func DataNodeActionWriteDatum(dto *WriteDatumDto, query workspaces.QueryDSL) (*NodeDatumEntity, *workspaces.IError) {

	query.Deep = true
	query.WithPreloads = []string{
		"Readers", "Writers", "Writers.Writer", "Readers.Reader",
	}
	query.UniqueId = *dto.UniqueId
	entity, _ := DataNodeActionGetOne(query)

	if entity == nil {
		return nil, workspaces.CreateIErrorString("Data Node Missing", []string{}, 404)
	}

	// First write into database as a new datum
	datum, err := NodeDatumActionCreate(&NodeDatumEntity{
		// ValueFloat64: dto.ValueFloat64,
		// ValueString:  dto.ValueString,
		// ValueInt64:   dto.ValueInt64,
		// ValueBoolean: dto.ValueBoolean,
		NodeId:     dto.UniqueId,
		IngestedAt: time.Now().UnixNano(),
	}, query)

	if err != nil {
		return nil, err
	}
	_, err3 := DataNodeActionUpdate(query, &DataNodeEntity{UniqueId: *dto.UniqueId})

	if err3 != nil {
		return nil, err3
	}

	if entity != nil && entity.Writers != nil {
		for _, m := range entity.Writers {
			if *m.WriterId == "mqtt_send_topic" {
				cfg := workspaces.CastJsonDataTypeTo[DnWriteMQTTTopicConfigDto](m.Config)
				WriterMqttTopic(cfg, dto, entity)
			}
			if *m.WriterId == "DnWriteToHostFileSystem" {
				fmt.Println("Writing to system")
				cfg := workspaces.CastJsonDataTypeTo[DnWriteToHostFileSystemConfigDto](m.Config)
				DnWriteToHostFileSystem(cfg, dto)
			}

			if *m.WriterId == "DnWriteToSerialPort" {
				cfg := workspaces.CastJsonDataTypeTo[DnWriteSerialPortConfigDto](m.Config)
				fmt.Println("Writing to serial port:", cfg, dto, m.Config.String())
				DnWriteToSerialPort(cfg, dto)
			}
			if *m.WriterId == "DnWriteToUdp" {
				cfg := workspaces.CastJsonDataTypeTo[DnWriteUdpConfigDto](m.Config)
				fmt.Println("Writing to serial port:", cfg, dto, m.Config.String())
				DnWriteToUdp(cfg, dto)
			}

		}
	}

	return datum, nil
}
