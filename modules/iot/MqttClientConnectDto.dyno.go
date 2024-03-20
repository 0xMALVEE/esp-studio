package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastMqttClientConnectFromCli (c *cli.Context) *MqttClientConnectDto {
	template := &MqttClientConnectDto{}
	return template
}
var MqttClientConnectDtoCommonCliFlagsOptional = []cli.Flag{
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
    &cli.BoolFlag{
      Name:     "connect",
      Required: false,
      Usage:    "connect",
    },
}
type MqttClientConnectDto struct {
    Connect   *bool `json:"connect" yaml:"connect"       `
    // Datenano also has a text representation
}
func (x* MqttClientConnectDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* MqttClientConnectDto) JsonPrint()  {
    fmt.Println(x.Json())
}
