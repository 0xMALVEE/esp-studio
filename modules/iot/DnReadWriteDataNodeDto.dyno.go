package iot
import (
	"encoding/json"
	"fmt"
	"github.com/urfave/cli"
)
func CastDnReadWriteDataNodeFromCli (c *cli.Context) *DnReadWriteDataNodeDto {
	template := &DnReadWriteDataNodeDto{}
      if c.IsSet("node-id") {
        value := c.String("node-id")
        template.NodeId = &value
      }
	return template
}
var DnReadWriteDataNodeDtoCommonCliFlagsOptional = []cli.Flag{
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
      Name:     "node-id",
      Required: false,
      Usage:    "nodeId",
    },
}
type DnReadWriteDataNodeDto struct {
    NodeId   *string `json:"nodeId" yaml:"nodeId"       `
    // Datenano also has a text representation
}
func (x* DnReadWriteDataNodeDto) Json() string {
	if x != nil {
		str, _ := json.MarshalIndent(x, "", "  ")
		return (string(str))
	}
	return ""
}
func (x* DnReadWriteDataNodeDto) JsonPrint()  {
    fmt.Println(x.Json())
}
