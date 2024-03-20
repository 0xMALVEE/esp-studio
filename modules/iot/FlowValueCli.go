package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var FlowValueTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the flowValue",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	FlowValueCliCommands = append(FlowValueCliCommands, FlowValueTestCmd)
}
