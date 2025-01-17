package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDataNodeConnectionDataFromCli (c *cli.Context) *DataNodeConnectionDataDto {
	template := &DataNodeConnectionDataDto{}
      if c.IsSet("sub-key") {
        value := c.String("sub-key")
        template.SubKey = &value
      }
	return template
}
var DataNodeConnectionDataDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "sub-key",
      Required: false,
      Usage:    "subKey",
    },
}
type DataNodeConnectionDataDto struct {
    SubKey   *string `json:"subKey" yaml:"subKey"       `
    // Datenano also has a text representation
}
func (x* DataNodeConnectionDataDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DataNodeConnectionDataDto) JsonPrint()  {
    fmt.Println(x.Json())
}
