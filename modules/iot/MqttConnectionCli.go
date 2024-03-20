package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var MqttConnectionTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the mqttConnection",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	MqttConnectionCliCommands = append(MqttConnectionCliCommands, MqttConnectionTestCmd)
}
