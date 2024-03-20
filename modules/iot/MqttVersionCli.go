package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var MqttVersionTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the mqttVersion",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	MqttVersionCliCommands = append(MqttVersionCliCommands, MqttVersionTestCmd)
}
