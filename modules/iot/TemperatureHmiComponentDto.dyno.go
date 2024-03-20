package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastTemperatureHmiComponentFromCli (c *cli.Context) *TemperatureHmiComponentDto {
	template := &TemperatureHmiComponentDto{}
      if c.IsSet("view-mode") {
        value := c.String("view-mode")
        template.ViewMode = &value
      }
      if c.IsSet("units") {
        value := c.String("units")
        template.Units = &value
      }
	return template
}
var TemperatureHmiComponentDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "view-mode",
      Required: false,
      Usage:    "viewMode",
    },
    &cli.StringFlag{
      Name:     "units",
      Required: false,
      Usage:    "units",
    },
    &cli.Float64Flag{
      Name:     "maximum-temperature",
      Required: false,
      Usage:    "maximumTemperature",
    },
    &cli.Float64Flag{
      Name:     "minimum-temperature",
      Required: false,
      Usage:    "minimumTemperature",
    },
}
type TemperatureHmiComponentDto struct {
    ViewMode   *string `json:"viewMode" yaml:"viewMode"       `
    // Datenano also has a text representation
    Units   *string `json:"units" yaml:"units"       `
    // Datenano also has a text representation
    MaximumTemperature   *float64 `json:"maximumTemperature" yaml:"maximumTemperature"       `
    // Datenano also has a text representation
    MinimumTemperature   *float64 `json:"minimumTemperature" yaml:"minimumTemperature"       `
    // Datenano also has a text representation
}
func (x* TemperatureHmiComponentDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* TemperatureHmiComponentDto) JsonPrint()  {
    fmt.Println(x.Json())
}
