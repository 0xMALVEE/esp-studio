package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDataNodeReaderFnDefFromCli (c *cli.Context) *DataNodeReaderFnDefDto {
	template := &DataNodeReaderFnDefDto{}
      if c.IsSet("fn") {
        value := c.String("fn")
        template.Fn = &value
      }
      if c.IsSet("description") {
        value := c.String("description")
        template.Description = &value
      }
      if c.IsSet("reads") {
        value := c.String("reads")
        template.Reads = &value
      }
      if c.IsSet("writes") {
        value := c.String("writes")
        template.Writes = &value
      }
	return template
}
var DataNodeReaderFnDefDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "fn",
      Required: false,
      Usage:    "fn",
    },
    &cli.StringFlag{
      Name:     "description",
      Required: false,
      Usage:    "description",
    },
    &cli.StringFlag{
      Name:     "reads",
      Required: false,
      Usage:    "reads",
    },
    &cli.StringFlag{
      Name:     "writes",
      Required: false,
      Usage:    "writes",
    },
}
type DataNodeReaderFnDefDto struct {
    Fn   *string `json:"fn" yaml:"fn"       `
    // Datenano also has a text representation
    Description   *string `json:"description" yaml:"description"       `
    // Datenano also has a text representation
    Reads   *string `json:"reads" yaml:"reads"       `
    // Datenano also has a text representation
    Writes   *string `json:"writes" yaml:"writes"       `
    // Datenano also has a text representation
}
func (x* DataNodeReaderFnDefDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DataNodeReaderFnDefDto) JsonPrint()  {
    fmt.Println(x.Json())
}
