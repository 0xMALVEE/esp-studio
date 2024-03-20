package iot

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/DzananGanic/numericalgo/interpolate"
	"github.com/DzananGanic/numericalgo/interpolate/linear"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
)

var ControlSheetTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the controlSheet",
	Action: func(c *cli.Context) error {

		fmt.Printf("Implement the test logic here")

		x := []float64{5, 8}
		y := []float64{0, 10}
		valToInterp := 7.4

		li := linear.New()
		li.Fit(x, y)

		estimate, err := interpolate.WithSingle(li, valToInterp)

		fmt.Printf("Implement the test logic here @", estimate, err)

		return nil
	},
}

var ControlSheetActionRunCmd cli.Command = cli.Command{

	Name:  "run",
	Usage: "Runs an control sheet logic",
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:     "id",
			Value:    "",
			Usage:    "ID of the control sheet that you want to run",
			Required: true,
		},
	},
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)

		opt, err := BeginOperation(query, ControlSheetActionRun)
		fmt.Println("Error", err)
		opt.AttachListener(func(s *string) {
			fmt.Println(100000, *s)
		})
		time.Sleep(time.Duration(10) * time.Second)
		opt.Terminate()

		time.Sleep(time.Duration(100) * time.Second)

		return nil

	},
}

var ControlSheetActionGetFlowCmd cli.Command = cli.Command{

	Name:  "flow",
	Usage: "Get's the all sequences of data flow possible in a sheet",
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:     "id",
			Value:    "",
			Usage:    "ID of the control sheet that you want to run",
			Required: true,
		},
	},
	Action: func(c *cli.Context) error {
		query := workspaces.CommonCliQueryDSLBuilder(c)

		sheet, err := ControlSheetActionGetComplete(query)

		if err != nil {
			return err
		}

		flow, err2 := GetSheetDataFlow(sheet)
		if err2 != nil {
			return err
		}

		d, _ := json.MarshalIndent(flow, "", "  ")
		fmt.Println("Done", string(d))
		return nil

	},
}

func init() {
	ControlSheetCliCommands = append(
		ControlSheetCliCommands,
		ControlSheetTestCmd,
		ControlSheetActionRunCmd,
		ControlSheetActionGetFlowCmd,
	)
}
