package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var DataNodeModeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the dataNodeMode",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	DataNodeModeCliCommands = append(DataNodeModeCliCommands, DataNodeModeTestCmd)
}
