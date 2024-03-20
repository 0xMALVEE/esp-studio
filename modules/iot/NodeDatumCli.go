package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var NodeDatumTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the nodeDatum",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	NodeDatumCliCommands = append(NodeDatumCliCommands, NodeDatumTestCmd)
}
