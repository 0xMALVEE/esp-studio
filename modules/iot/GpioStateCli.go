package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var GpioStateTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the gpioState",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	GpioStateCliCommands = append(GpioStateCliCommands, GpioStateTestCmd)
}
