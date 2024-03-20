package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var NodeReaderTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the nodeReader",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	NodeReaderCliCommands = append(NodeReaderCliCommands, NodeReaderTestCmd)
}
