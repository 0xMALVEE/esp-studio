package iot

import (
	"fmt"
	"os"

	"github.com/goburrow/modbus"
	"github.com/torabian/fireback/modules/workspaces"
)

/**
* Writes the content to file system on the disk
 */
func IoFsWriter(dto *IoWriterDto, query workspaces.QueryDSL) (*workspaces.OkayResponseDto, *workspaces.IError) {
	err := os.WriteFile(*dto.Path, []byte(*dto.Content), 0644)
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	return &workspaces.OkayResponseDto{}, nil
}

func IoModbusWriter(dto *IoWriterDto, query workspaces.QueryDSL) (*workspaces.OkayResponseDto, *workspaces.IError) {

	client := modbus.TCPClient(*dto.Host)
	results, err := client.WriteSingleCoil(1, 0xFF00)

	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}

	fmt.Println(results)

	return &workspaces.OkayResponseDto{}, nil
}

func IoWriterActionWrite(dto *IoWriterDto, query workspaces.QueryDSL) (*workspaces.OkayResponseDto, *workspaces.IError) {

	if *dto.Type == "fs" {
		return IoFsWriter(dto, query)
	}
	if *dto.Type == "modbus" {
		return IoModbusWriter(dto, query)
	}

	return nil, workspaces.IErrorFromString("NO_TYPE")
}

func IoWriterActionPost(dto *IoWriterDto, query workspaces.QueryDSL) (*IoWriterDto, *workspaces.IError) {

	return dto, nil
}
