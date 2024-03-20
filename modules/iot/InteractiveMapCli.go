package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var InteractiveMapTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the interactiveMap",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	InteractiveMapCliCommands = append(InteractiveMapCliCommands, InteractiveMapTestCmd)
}
