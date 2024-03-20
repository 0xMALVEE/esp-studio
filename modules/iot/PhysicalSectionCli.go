package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var PhysicalSectionTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the physicalSection",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	PhysicalSectionCliCommands = append(PhysicalSectionCliCommands, PhysicalSectionTestCmd)
}
