package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDataNodeReaderConfigFromCli (c *cli.Context) *DataNodeReaderConfigDto {
	template := &DataNodeReaderConfigDto{}
	return template
}
var DataNodeReaderConfigDtoCommonCliFlagsOptional = []cli.Flag{
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
type DataNodeReaderConfigDto struct {
    Interval   *int64 `json:"interval" yaml:"interval"       `
    // Datenano also has a text representation
}
func (x* DataNodeReaderConfigDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DataNodeReaderConfigDto) JsonPrint()  {
    fmt.Println(x.Json())
}
