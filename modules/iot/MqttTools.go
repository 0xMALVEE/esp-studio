package iot

import (
	"fmt"
	"log"
	"net/url"
	"os"
	"os/signal"
	"syscall"
	"time"

	"log/slog"

	mqttclient "github.com/eclipse/paho.mqtt.golang"
	mqtt "github.com/mochi-mqtt/server/v2"
	"github.com/mochi-mqtt/server/v2/hooks/auth"
	"github.com/mochi-mqtt/server/v2/hooks/debug"
	"github.com/mochi-mqtt/server/v2/listeners"
	"github.com/torabian/fireback/modules/workspaces"
	"github.com/urfave/cli"
)

func liftMQTT(port string) {
	sigs := make(chan os.Signal, 1)
	done := make(chan bool, 1)
	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-sigs
		done <- true
	}()

	server := mqtt.New(nil)

	level := new(slog.LevelVar)
	server.Log = slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
		Level: level,
	}))
	level.Set(slog.LevelDebug)

	err := server.AddHook(new(debug.Hook), &debug.Options{
		// ShowPacketData: true,
	})
	if err != nil {
		log.Fatal(err)
	}

	err = server.AddHook(new(auth.AllowHook), nil)
	if err != nil {
		log.Fatal(err)
	}

	tcp := listeners.NewTCP("t1", ":"+port, nil)
	err = server.AddListener(tcp)
	if err != nil {
		log.Fatal(err)
	}

	go func() {
		err := server.Serve()
		if err != nil {
			log.Fatal(err)
		}
	}()

	<-done
	server.Log.Warn("caught signal, stopping...")
	_ = server.Close()
	server.Log.Info("main.go finished")
}

var MqttStart cli.Command = cli.Command{
	Name: "start",
	Action: func(c *cli.Context) error {
		port := c.String("port")
		liftMQTT(port)

		return nil
	},
	Flags: []cli.Flag{
		&cli.StringFlag{
			Name:  "port",
			Value: "1883",
		},
	},
}

func MqttClientInitializeOnStart() {
	time.Sleep(time.Duration(1500 * time.Millisecond))

	items, _, _ := MqttConnectionActionQuery(workspaces.QueryDSL{
		StartIndex:   0,
		ItemsPerPage: 1,
		WorkspaceId:  "root",
	})

	if len(items) > 0 {
		config := items[0]
		if config.AutoReconnect != nil && *config.AutoReconnect {
			cl, err := ClinetConnect(config)
			if err == nil && cl != nil {
				MqttClient = *cl
			} else {
				fmt.Println(err)
			}
		}
	}

}

func MqttCliFn() cli.Command {
	return cli.Command{
		Name: "mqtt",

		Description: "Starts the MQTT Server",

		Usage: "Runs the MQTT Server and listens for incoming data",
		Subcommands: cli.Commands{
			MqttStart,
		},
	}
}

func ClinetConnect(mqttConfig *MqttConnectionEntity) (*mqttclient.Client, *workspaces.IError) {
	if mqttConfig == nil {
		return nil, workspaces.CreateIErrorString("EMPTY_CONFIG", []string{}, 403)
	}

	if mqttConfig.Host == nil || mqttConfig.Port == nil || mqttConfig.Username == nil || mqttConfig.Password == nil || mqttConfig.ClientId == nil || mqttConfig.KeepAlive == nil || mqttConfig.CleanSession == nil {
		return nil, workspaces.CreateIErrorString("ENTITY_IS_NEEDED", []string{}, 403)
	}

	uri, err := url.Parse(*mqttConfig.Host + ":" + fmt.Sprintf("%d", *mqttConfig.Port))
	if err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	opts := mqttclient.NewClientOptions()
	opts.AddBroker(fmt.Sprintf("tcp://%s", uri.Host))

	opts.SetUsername(*mqttConfig.Username)
	opts.SetPassword(*mqttConfig.Password)
	opts.SetClientID(*mqttConfig.ClientId)
	opts.KeepAlive = int64(*mqttConfig.KeepAlive)
	opts.CleanSession = *mqttConfig.CleanSession
	client := mqttclient.NewClient(opts)
	token := client.Connect()
	for !token.WaitTimeout(3 * time.Second) {
	}
	if err := token.Error(); err != nil {
		return nil, workspaces.GormErrorToIError(err)
	}
	return &client, nil
}
