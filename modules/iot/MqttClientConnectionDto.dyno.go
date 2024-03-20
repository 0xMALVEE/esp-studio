package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastMqttClientConnectionFromCli (c *cli.Context) *MqttClientConnectionDto {
	template := &MqttClientConnectionDto{}
      if c.IsSet("name") {
        value := c.String("name")
        template.Name = &value
      }
	return template
}
var MqttClientConnectionDtoCommonCliFlagsOptional = []cli.Flag{
  &cli.StringFlag{
    Name:     "wid",
    Required: false,
    Usage:    "Provide workspace id, if you want to change the data workspace",
  },
  &cli.StringFlag{
    Name:     "uid",
    Required: false,
    Usage:    "uniqueId (primary key)",
  },
  &cli.StringFlag{
    Name:     "pid",
    Required: false,
    Usage:    " Parent record id of the same type",
  },
    &cli.StringFlag{
      Name:     "name",
      Required: false,
      Usage:    "name",
    },
    &cli.BoolFlag{
      Name:     "is-connected",
      Required: false,
      Usage:    "isConnected",
    },
}
type MqttClientConnectionDto struct {
    Name   *string `json:"name" yaml:"name"       `
    // Datenano also has a text representation
    IsConnected   *bool `json:"isConnected" yaml:"isConnected"       `
    // Datenano also has a text representation
}
func (x* MqttClientConnectionDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* MqttClientConnectionDto) JsonPrint()  {
    fmt.Println(x.Json())
}
