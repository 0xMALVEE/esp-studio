package iot

import (
	"fmt"

	"github.com/torabian/fireback/modules/workspaces"
	"go.bug.st/serial"
)

func SerialPortActionQuery(query workspaces.QueryDSL) ([]*SerialPortDto, *workspaces.QueryResultMeta, error) {

	qrm := &workspaces.QueryResultMeta{}
	result := []*SerialPortDto{}
	ports, err := serial.GetPortsList()
	if err != nil {
		return nil, qrm, err
	}

	for _, port := range ports {
		fmt.Printf("Found port: %v\n", port)
		result = append(result, &SerialPortDto{
			Address: &port,
			// @todo fix this
			// UniqueId: port,
		})
	}

	qrm.TotalAvailableItems = int64(len(ports))
	qrm.TotalItems = int64(len(ports))
	return result, qrm, nil
}
