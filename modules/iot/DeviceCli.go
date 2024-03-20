package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var DeviceTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the device",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	DeviceCliCommands = append(DeviceCliCommands, DeviceTestCmd)
}
