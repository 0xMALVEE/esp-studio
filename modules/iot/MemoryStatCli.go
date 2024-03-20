package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var MemoryStatTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the memoryStat",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	MemoryStatCliCommands = append(MemoryStatCliCommands, MemoryStatTestCmd)
}
