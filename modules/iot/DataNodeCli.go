package iot

import (
	"fmt"
	"log"

	g "github.com/gosnmp/gosnmp"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
)

var DataNodeTestCmd cli.Command = cli.Command{

	Name:  "test",
	Usage: "Tests the dataNode",
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:     "id",
			Required: false,
		},
	},
	Action: func(cx *cli.Context) error {

		g.Default.Target = "192.168.1.12"
		err := g.Default.Connect()

		if err != nil {
			log.Fatalf("Connect() err: %v", err)
		}

		fmt.Println("Connected")

		defer g.Default.Conn.Close()

		oids := []string{}
		// oids := []string{"1.3.6.1.2.1.1.4.0", "1.3.6.1.2.1.1.7.0"}
		result, err2 := g.Default.Get(oids) // Get() accepts up to g.MAX_OIDS
		if err2 != nil {
			log.Fatalf("Get() err: %v", err2)
		}

		for i, variable := range result.Variables {
			fmt.Printf("%d: oid: %s ", i, variable.Name)
			switch variable.Type {
			case g.OctetString:
				bytes := variable.Value.([]byte)
				fmt.Printf("string: %s\n", string(bytes))
			default:

				fmt.Printf("number: %d\n", g.ToBigInt(variable.Value))
			}
		}

		return nil
	},
}

var DataNodeSubscribeCmd cli.Command = cli.Command{

	Name:  "subscribe",
	Usage: "Subscribes to the data node and prints it's data directly",
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:     "id",
			Required: false,
		},
	},
	Action: func(c *cli.Context) error {
		qd := workspaces.CommonCliQueryDSLBuilder(c)

		done := make(chan bool)
		cn := SubcribeToDataNode(qd, done)

		for {
			val, okay := <-cn
			fmt.Println(7, val.Content, okay)

			if !okay {
				break
			}
		}

		return nil
	},
}
var DataNodeWriteCmd cli.Command = cli.Command{

	Name:  "write",
	Usage: "Write the data to the data node.",
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:  "id",
			Usage: "Get the unique id",
			Value: "",
		},
		&cli.StringFlag{
			Name:  "value",
			Usage: "Value that you want to write to that specific node (only string available at this moment)",
			Value: "",
		},
	},
	Action: func(c *cli.Context) error {
		f := workspaces.CommonCliQueryDSLBuilder(c)
		f.UniqueId = c.String("id")
		value := c.String("value")
		// val, floatErr := strconv.ParseFloat(strings.TrimSpace(value), 64)

		// fmt.Println()

		result, err2 := DataNodeActionWriteDatum(&WriteDatumDto{
			Value:    value,
			UniqueId: &f.UniqueId,
		}, f)
		workspaces.HandleActionInCli(c, result, err2, IotTranslations)

		return nil
	},
}

func init() {
	DataNodeCliCommands = append(DataNodeCliCommands, DataNodeSubscribeCmd, DataNodeWriteCmd, DataNodeTestCmd)
}
