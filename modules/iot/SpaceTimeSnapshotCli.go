package iot

import (
	"fmt"

	"github.com/urfave/cli"
)

var SpaceTimeSnapshotTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the spaceTimeSnapshot",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		return nil
	},
}

func init() {
	SpaceTimeSnapshotCliCommands = append(SpaceTimeSnapshotCliCommands, SpaceTimeSnapshotTestCmd)
}
