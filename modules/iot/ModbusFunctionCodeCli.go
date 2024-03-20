package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var ModbusFunctionCodeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the modbusFunctionCode",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	ModbusFunctionCodeCliCommands = append(ModbusFunctionCodeCliCommands, ModbusFunctionCodeTestCmd)
}
