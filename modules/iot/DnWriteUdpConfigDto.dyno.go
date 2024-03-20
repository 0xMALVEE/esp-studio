package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnWriteUdpConfigFromCli (c *cli.Context) *DnWriteUdpConfigDto {
	template := &DnWriteUdpConfigDto{}
      if c.IsSet("host") {
        value := c.String("host")
        template.Host = &value
      }
      if c.IsSet("port") {
        value := c.String("port")
        template.Port = &value
      }
	return template
}
var DnWriteUdpConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "host",
      Required: false,
      Usage:    "host",
    },
    &cli.StringFlag{
      Name:     "port",
      Required: false,
      Usage:    "port",
    },
}
type DnWriteUdpConfigDto struct {
    Host   *string `json:"host" yaml:"host"       `
    // Datenano also has a text representation
    Port   *string `json:"port" yaml:"port"       `
    // Datenano also has a text representation
}
func (x* DnWriteUdpConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnWriteUdpConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
