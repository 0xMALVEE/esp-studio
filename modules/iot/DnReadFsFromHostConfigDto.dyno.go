package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnReadFsFromHostConfigFromCli (c *cli.Context) *DnReadFsFromHostConfigDto {
	template := &DnReadFsFromHostConfigDto{}
      if c.IsSet("path") {
        value := c.String("path")
        template.Path = &value
      }
	return template
}
var DnReadFsFromHostConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "path",
      Required: false,
      Usage:    "path",
    },
}
type DnReadFsFromHostConfigDto struct {
    Path   *string `json:"path" yaml:"path"       `
    // Datenano also has a text representation
}
func (x* DnReadFsFromHostConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnReadFsFromHostConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
