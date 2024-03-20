package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastWriteDatumFromCli (c *cli.Context) *WriteDatumDto {
	template := &WriteDatumDto{}
      if c.IsSet("unique-id") {
        value := c.String("unique-id")
        template.UniqueId = &value
      }
      if c.IsSet("key") {
        value := c.String("key")
        template.Key = &value
      }
	return template
}
var WriteDatumDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "unique-id",
      Required: false,
      Usage:    "uniqueId",
    },
    &cli.StringFlag{
      Name:     "key",
      Required: false,
      Usage:    "key",
    },
}
type WriteDatumDto struct {
    UniqueId   *string `json:"uniqueId" yaml:"uniqueId"       `
    // Datenano also has a text representation
    Key   *string `json:"key" yaml:"key"       `
    // Datenano also has a text representation
    Value   interface{} `json:"value" yaml:"value"    gorm:"-"     sql:"-"  `
    // Datenano also has a text representation
}
func (x* WriteDatumDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* WriteDatumDto) JsonPrint()  {
    fmt.Println(x.Json())
}
