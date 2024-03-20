//go:build !omit_cli

package iot

import (
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
)

var IoWriterCommonCliFlags = []cli.Flag{
	&cli.StringFlag{
		Name:     "workspaceId",
		Required: false,
		Usage:    "Provide workspace id, if you want to change the data workspace",
	},
	&cli.StringFlag{
		Name:     "uniqueId",
		Required: false,
		Usage:    "IoWriter uniqueId (primary key)",
	},
	&cli.StringFlag{
		Name:     "parentId",
		Required: false,
		Usage:    " Parent record id of the same type",
	},

	&cli.StringFlag{
		Name:     "content",
		Required: true,
		Usage:    "content",
	},

	&cli.StringFlag{
		Name:     "type",
		Required: true,
		Usage:    "type",
	},

	&cli.StringFlag{
		Name:     "host",
		Required: true,
		Usage:    "host",
	},

	&cli.StringFlag{
		Name:     "path",
		Required: false,
		Usage:    "path",
	},
}

var IoWriterCommonInteractiveCliFlags = []workspaces.CliInteractiveFlag{

	{
		Name:        "content",
		StructField: "Content",
		Required:    true,
		Usage:       "content",
		Type:        "string",
	},

	{
		Name:        "type",
		StructField: "Type",
		Required:    true,
		Usage:       "type",
		Type:        "string",
	},

	{
		Name:        "host",
		StructField: "Host",
		Required:    true,
		Usage:       "host",
		Type:        "string",
	},

	{
		Name:        "path",
		StructField: "Path",
		Required:    false,
		Usage:       "path",
		Type:        "string",
	},
}

var IoWriterCommonCliFlagsOptional = []cli.Flag{
	&cli.StringFlag{
		Name:     "workspaceId",
		Required: false,
		Usage:    "Provide workspace id, if you want to change the data workspace",
	},
	&cli.StringFlag{
		Name:     "uniqueId",
		Required: false,
		Usage:    "IoWriter uniqueId (primary key)",
	},
	&cli.StringFlag{
		Name:     "parentId",
		Required: false,
		Usage:    " Parent record id of the same type",
	},

	&cli.StringFlag{
		Name:     "content",
		Required: false,
		Usage:    "content",
	},

	&cli.StringFlag{
		Name:     "type",
		Required: false,
		Usage:    "type",
	},

	&cli.StringFlag{
		Name:     "host",
		Required: false,
		Usage:    "host",
	},

	&cli.StringFlag{
		Name:     "path",
		Required: false,
		Usage:    "path",
	},
}

func (x *IoWriterDto) WriteDefaults() *IoWriterDto {
	if x != nil {

	}
	return x
}
