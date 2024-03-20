package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastIoWriterFromCli (c *cli.Context) *IoWriterDto {
	template := &IoWriterDto{}
      if c.IsSet("content") {
        value := c.String("content")
        template.Content = &value
      }
      if c.IsSet("type") {
        value := c.String("type")
        template.Type = &value
      }
      if c.IsSet("host") {
        value := c.String("host")
        template.Host = &value
      }
      if c.IsSet("path") {
        value := c.String("path")
        template.Path = &value
      }
	return template
}
var IoWriterDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "content",
      Required: true,
      Usage:    "content",
    },
    &cli.StringFlag{
      Name:     "type",
      Required: true,
      Usage:    "type",
    },
    &cli.StringFlag{
      Name:     "host",
      Required: true,
      Usage:    "host",
    },
    &cli.StringFlag{
      Name:     "path",
      Required: false,
      Usage:    "path",
    },
}
type IoWriterDto struct {
    Content   *string `json:"content" yaml:"content"  validate:"required"       `
    // Datenano also has a text representation
    Type   *string `json:"type" yaml:"type"  validate:"required"       `
    // Datenano also has a text representation
    Host   *string `json:"host" yaml:"host"  validate:"required"       `
    // Datenano also has a text representation
    Path   *string `json:"path" yaml:"path"       `
    // Datenano also has a text representation
}
func (x* IoWriterDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* IoWriterDto) JsonPrint()  {
    fmt.Println(x.Json())
}
