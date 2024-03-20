package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var MovableObjectTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the movableObject",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	MovableObjectCliCommands = append(MovableObjectCliCommands, MovableObjectTestCmd)
}
