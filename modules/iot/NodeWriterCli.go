package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var NodeWriterTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the nodeWriter",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	NodeWriterCliCommands = append(NodeWriterCliCommands, NodeWriterTestCmd)
}
