package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastFakeIotEnvFromCli (c *cli.Context) *FakeIotEnvDto {
	template := &FakeIotEnvDto{}
	return template
}
var FakeIotEnvDtoCommonCliFlagsOptional = []cli.Flag{
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
    &cli.Float64Flag{
      Name:     "core1temperature",
      Required: false,
      Usage:    "core1temperature",
    },
    &cli.Float64Flag{
      Name:     "core2temperature",
      Required: false,
      Usage:    "core2temperature",
    },
}
type FakeIotEnvDto struct {
    Core1temperature   *float64 `json:"core1temperature" yaml:"core1temperature"       `
    // Datenano also has a text representation
    Core2temperature   *float64 `json:"core2temperature" yaml:"core2temperature"       `
    // Datenano also has a text representation
}
func (x* FakeIotEnvDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* FakeIotEnvDto) JsonPrint()  {
    fmt.Println(x.Json())
}
