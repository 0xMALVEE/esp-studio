package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var HmiTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the hmi",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	HmiCliCommands = append(HmiCliCommands, HmiTestCmd)
}
