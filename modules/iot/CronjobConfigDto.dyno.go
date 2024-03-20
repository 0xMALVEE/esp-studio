package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastCronjobConfigFromCli (c *cli.Context) *CronjobConfigDto {
	template := &CronjobConfigDto{}
      if c.IsSet("expression") {
        value := c.String("expression")
        template.Expression = &value
      }
	return template
}
var CronjobConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "expression",
      Required: false,
      Usage:    "expression",
    },
}
type CronjobConfigDto struct {
    Expression   *string `json:"expression" yaml:"expression"       `
    // Datenano also has a text representation
}
func (x* CronjobConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* CronjobConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
