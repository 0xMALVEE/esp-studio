package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastIntervalNodeConfigFromCli (c *cli.Context) *IntervalNodeConfigDto {
	template := &IntervalNodeConfigDto{}
	return template
}
var IntervalNodeConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "interval",
      Required: false,
      Usage:    "interval",
    },
}
type IntervalNodeConfigDto struct {
    Interval   *int64 `json:"interval" yaml:"interval"       `
    // Datenano also has a text representation
}
func (x* IntervalNodeConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* IntervalNodeConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
