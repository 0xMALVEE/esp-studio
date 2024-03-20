package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var ModbusTaskTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the modbusTask",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	ModbusTaskCliCommands = append(ModbusTaskCliCommands, ModbusTaskTestCmd)
}
