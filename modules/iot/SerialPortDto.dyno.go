package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastSerialPortFromCli (c *cli.Context) *SerialPortDto {
	template := &SerialPortDto{}
      if c.IsSet("address") {
        value := c.String("address")
        template.Address = &value
      }
	return template
}
var SerialPortDtoCommonCliFlagsOptional = []cli.Flag{
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
type SerialPortDto struct {
    Address   *string `json:"address" yaml:"address"       `
    // Datenano also has a text representation
}
func (x* SerialPortDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* SerialPortDto) JsonPrint()  {
    fmt.Println(x.Json())
}
