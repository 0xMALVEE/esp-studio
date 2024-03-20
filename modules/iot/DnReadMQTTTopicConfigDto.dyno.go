package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnReadMQTTTopicConfigFromCli (c *cli.Context) *DnReadMQTTTopicConfigDto {
	template := &DnReadMQTTTopicConfigDto{}
      if c.IsSet("topic") {
        value := c.String("topic")
        template.Topic = &value
      }
      if c.IsSet("qos") {
        value := c.String("qos")
        template.Qos = &value
      }
      if c.IsSet("message") {
        value := c.String("message")
        template.Message = &value
      }
	return template
}
var DnReadMQTTTopicConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "topic",
      Required: false,
      Usage:    "topic",
    },
    &cli.StringFlag{
      Name:     "qos",
      Required: false,
      Usage:    "qos",
    },
    &cli.StringFlag{
      Name:     "message",
      Required: false,
      Usage:    "message",
    },
}
type DnReadMQTTTopicConfigDto struct {
    Topic   *string `json:"topic" yaml:"topic"       `
    // Datenano also has a text representation
    Qos   *string `json:"qos" yaml:"qos"       `
    // Datenano also has a text representation
    Message   *string `json:"message" yaml:"message"       `
    // Datenano also has a text representation
}
func (x* DnReadMQTTTopicConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnReadMQTTTopicConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
