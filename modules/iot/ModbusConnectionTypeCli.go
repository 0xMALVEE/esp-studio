package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var ModbusConnectionTypeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the modbusConnectionType",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	ModbusConnectionTypeCliCommands = append(ModbusConnectionTypeCliCommands, ModbusConnectionTypeTestCmd)
}
