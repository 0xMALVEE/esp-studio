package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnModbusTcpConfigFromCli (c *cli.Context) *DnModbusTcpConfigDto {
	template := &DnModbusTcpConfigDto{}
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
var DnModbusTcpConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
    &cli.Int64Flag{
      Name:     "time-out",
      Required: false,
      Usage:    "timeOut",
    },
    &cli.Int64Flag{
      Name:     "slave-id",
      Required: false,
      Usage:    "slaveId",
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
type DnModbusTcpConfigDto struct {
    TimeOut   *int64 `json:"timeOut" yaml:"timeOut"       `
    // Datenano also has a text representation
    SlaveId   *int64 `json:"slaveId" yaml:"slaveId"       `
    // Datenano also has a text representation
    Host   *string `json:"host" yaml:"host"       `
    // Datenano also has a text representation
    Port   *string `json:"port" yaml:"port"       `
    // Datenano also has a text representation
}
func (x* DnModbusTcpConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnModbusTcpConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
