package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var GpioTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the gpio",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	GpioCliCommands = append(GpioCliCommands, GpioTestCmd)
}
