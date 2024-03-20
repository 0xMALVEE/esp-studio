package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var HmiComponentTypeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the hmiComponentType",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	HmiComponentTypeCliCommands = append(HmiComponentTypeCliCommands, HmiComponentTypeTestCmd)
}
