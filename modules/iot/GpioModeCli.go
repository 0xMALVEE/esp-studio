package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var GpioModeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the gpioMode",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	GpioModeCliCommands = append(GpioModeCliCommands, GpioModeTestCmd)
}
