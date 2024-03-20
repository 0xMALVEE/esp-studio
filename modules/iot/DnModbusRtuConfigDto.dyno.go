package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnModbusRtuConfigFromCli (c *cli.Context) *DnModbusRtuConfigDto {
	template := &DnModbusRtuConfigDto{}
      if c.IsSet("parity") {
        value := c.String("parity")
        template.Parity = &value
      }
      if c.IsSet("address") {
        value := c.String("address")
        template.Address = &value
      }
	return template
}
var DnModbusRtuConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "baud-rate",
      Required: false,
      Usage:    "baudRate",
    },
    &cli.Int64Flag{
      Name:     "data-bits",
      Required: false,
      Usage:    "dataBits",
    },
    &cli.StringFlag{
      Name:     "parity",
      Required: false,
      Usage:    "parity",
    },
    &cli.Int64Flag{
      Name:     "stop-bits",
      Required: false,
      Usage:    "stopBits",
    },
    &cli.Int64Flag{
      Name:     "slave-id",
      Required: false,
      Usage:    "slaveId",
    },
    &cli.Int64Flag{
      Name:     "timeout",
      Required: false,
      Usage:    "timeout",
    },
    &cli.StringFlag{
      Name:     "address",
      Required: false,
      Usage:    "address",
    },
}
type DnModbusRtuConfigDto struct {
    BaudRate   *int64 `json:"baudRate" yaml:"baudRate"       `
    // Datenano also has a text representation
    DataBits   *int64 `json:"dataBits" yaml:"dataBits"       `
    // Datenano also has a text representation
    Parity   *string `json:"parity" yaml:"parity"       `
    // Datenano also has a text representation
    StopBits   *int64 `json:"stopBits" yaml:"stopBits"       `
    // Datenano also has a text representation
    SlaveId   *int64 `json:"slaveId" yaml:"slaveId"       `
    // Datenano also has a text representation
    Timeout   *int64 `json:"timeout" yaml:"timeout"       `
    // Datenano also has a text representation
    Address   *string `json:"address" yaml:"address"       `
    // Datenano also has a text representation
}
func (x* DnModbusRtuConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnModbusRtuConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
