package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var DeviceTypeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the deviceType",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	DeviceTypeCliCommands = append(DeviceTypeCliCommands, DeviceTypeTestCmd)
}
