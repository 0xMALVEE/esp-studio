package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnInterpolateConfigFromCli (c *cli.Context) *DnInterpolateConfigDto {
	template := &DnInterpolateConfigDto{}
	return template
}
var DnInterpolateConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
}
type DnInterpolateConfigDto struct {
    Sources   []float64 `json:"sources" yaml:"sources"       `
    // Datenano also has a text representation
    Targets   []float64 `json:"targets" yaml:"targets"       `
    // Datenano also has a text representation
}
func (x* DnInterpolateConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnInterpolateConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
