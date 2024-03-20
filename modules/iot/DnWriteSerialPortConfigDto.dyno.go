package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnWriteSerialPortConfigFromCli (c *cli.Context) *DnWriteSerialPortConfigDto {
	template := &DnWriteSerialPortConfigDto{}
      if c.IsSet("address") {
        value := c.String("address")
        template.Address = &value
      }
	return template
}
var DnWriteSerialPortConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "address",
      Required: false,
      Usage:    "address",
    },
}
type DnWriteSerialPortConfigDto struct {
    Address   *string `json:"address" yaml:"address"       `
    // Datenano also has a text representation
}
func (x* DnWriteSerialPortConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnWriteSerialPortConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
