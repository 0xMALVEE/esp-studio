package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var ModbusVariableTypeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the modbusVariableType",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	ModbusVariableTypeCliCommands = append(ModbusVariableTypeCliCommands, ModbusVariableTypeTestCmd)
}
