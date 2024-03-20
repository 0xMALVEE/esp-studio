package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var DataNodeTypeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the dataNodeType",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	DataNodeTypeCliCommands = append(DataNodeTypeCliCommands, DataNodeTypeTestCmd)
}
