package iot

import (
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
)

func IoWriterCliFn() cli.Command {
	return cli.Command{
		Name:        "ioWriter",
		Description: "Direct access to IO writer module, to write or stream messages away",
		Usage:       "Direct access to IO writer module, to write or stream messages away",
		Subcommands: []cli.Command{
			{
				Flags: IoWriterCommonCliFlags,
				Name:  "write",
				Usage: "Write a message",

				Action: func(c *cli.Context) error {
					query := workspaces.CommonCliQueryDSLBuilder(c)

					result, err := IoWriterActionWrite(CastIoWriterFromCli(c), query)
					workspaces.HandleActionInCli(c, result, err, map[string]map[string]string{})

					return nil
				},
			},
		},
	}
}
