package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var ExpanderFunctionTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the expanderFunction",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	ExpanderFunctionCliCommands = append(ExpanderFunctionCliCommands, ExpanderFunctionTestCmd)
}
