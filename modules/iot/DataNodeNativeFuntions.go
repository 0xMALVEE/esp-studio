package iot

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"time"

	mqtt "github.com/eclipse/paho.mqtt.golang"
	"github.com/goburrow/modbus"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
	"go.bug.st/serial"
)

func DnReadSerialPort(ctx *DnReadSerialPortConfigDto, done chan bool) chan *string {

	fmt.Println("Data for read", ctx)
	chanStream := make(chan *string)

	go func() {
		br := 115200

		if ctx.BaudRate != nil && *ctx.BaudRate > 0 {
			br = int(*ctx.BaudRate)
		}

		mode := &serial.Mode{
			BaudRate: br,
		}

		if ctx.Address == nil {
			fmt.Println("Address is nil")
			return
		}
		port, err := serial.Open(*ctx.Address, mode)
		if err != nil {
			errString := err.Error()
			chanStream <- &errString
			return
		}

		buff := make([]byte, 100)
		for {
			n, err := port.Read(buff)
			if err != nil {
				fmt.Println("Err", err)
				break
			}
			if n == 0 {
				fmt.Println("Nothing else")
				fmt.Println("\nEOF")
				break
			}

			x := string(buff[:n])
			chanStream <- &x
			fmt.Printf("10000 %v", x)
		}

	}()

	return chanStream

}

func DnReadModbusTCP(ctx *DnModbusTcpConfigDto, done chan bool) chan *string {

	chanStream := make(chan *string)

	if ctx.Host == nil || ctx.Port == nil || ctx.SlaveId == nil {
		return chanStream
	}

	handler := modbus.NewTCPClientHandler(*ctx.Host + ":" + *ctx.Port)
	handler.Timeout = 10 * time.Second
	handler.SlaveId = byte(*ctx.SlaveId)
	handler.Logger = log.New(os.Stdout, "test: ", log.LstdFlags)

	go func() {
		err4 := handler.Connect()
		fmt.Println(err4)
		if err4 != nil {
			dv := err4.Error()
			chanStream <- &dv
			return
		}
		client := modbus.NewClient(handler)

		results, err := client.ReadDiscreteInputs(15, 2)
		fmt.Println(err)
		dv := string(results)
		chanStream <- &dv
	}()

	go func() {
		for {
			select {
			case <-done:
				handler.Close()
				return

			}
		}

	}()

	return chanStream
}

func DnReadModbusRTU(ctx *DnModbusRtuConfigDto, done chan bool) chan *string {

	chanStream := make(chan *string)
	handler := modbus.NewRTUClientHandler(*ctx.Address)
	handler.BaudRate = int(*ctx.BaudRate)
	handler.DataBits = int(*ctx.DataBits)
	handler.Parity = *ctx.Parity
	handler.StopBits = int(*ctx.StopBits)
	handler.SlaveId = byte(*ctx.SlaveId)
	handler.Timeout = 5 * time.Second

	go func() {
		err4 := handler.Connect()
		fmt.Println("MODBUS", err4)
		if err4 != nil {
			dv := err4.Error()
			chanStream <- &dv
			return
		}

		client := modbus.NewClient(handler)
		results, err := client.ReadDiscreteInputs(15, 2)
		fmt.Println(err)
		dv := string(results)
		chanStream <- &dv
	}()

	go func() {
		for {
			select {
			case <-done:
				handler.Close()
				return

			}
		}

	}()

	return chanStream
}

func DnReadMQTTTopic(ctx *DnReadMQTTTopicConfigDto, done chan bool) chan *string {

	chanStream := make(chan *string)

	fmt.Println("subscribing to Topic", ctx.Topic)
	go MqttClient.Subscribe(*ctx.Topic, 0, func(c mqtt.Client, m mqtt.Message) {
		x := string(m.Payload())
		fmt.Println("Data received", x)
		chanStream <- &x

	})

	go func() {
		for {
			select {
			case <-done:
				fmt.Println("Unsubscribing")
				MqttClient.Unsubscribe(*ctx.Topic)
				return

			}
		}

	}()

	return chanStream
}

func StringToStruct[T any](readerConfig *string) *T {
	var ctx T
	json.Unmarshal([]byte(*readerConfig), &ctx)

	return &ctx
}

func DnReadFsFromHost(ctx *DnReadFsFromHostConfigDto, done chan bool) chan *string {

	chanStream := make(chan *string)

	if ctx.Path == nil {
		return chanStream
	}

	fmt.Println("File path", ctx.Path)

	data, _ := ioutil.ReadFile(*ctx.Path)
	m := string(data)

	go func() {
		fmt.Println("Data", m)
		chanStream <- &m
	}()

	return chanStream
}

// func DnReaderVirtualMemoryFull(ctx *DataNodeReaderConfig, done chan bool) chan *string {
func DnReaderVirtualMemoryFull(done chan bool) chan *string {

	chanStream := make(chan *string)

	go func() {

		for {
			select {
			case <-done:
				return

			default:
				v, _ := mem.VirtualMemory()
				m, _ := json.Marshal(v)
				x := string(m)
				chanStream <- &x
				fmt.Println("Memory Full rended")
				time.Sleep(time.Duration(1000) * time.Millisecond)
				// time.Sleep(time.Duration(*ctx.Interval) * time.Millisecond)
			}

		}

	}()

	return chanStream
}

func DnReaderVirtualMemory(ctx *DataNodeReaderConfigDto) chan *int64 {

	chanStream := make(chan *int64)

	go func() {

		for {
			v, _ := mem.VirtualMemory()
			a := int64(v.Available)
			chanStream <- &a

			fmt.Println("Memory22 ", a)
			time.Sleep(time.Duration(*ctx.Interval) * time.Millisecond)
		}

	}()

	return chanStream
}

func DnReaderCpuCount(ctx *DataNodeReaderConfigDto) chan *int64 {

	chanStream := make(chan *int64)

	go func() {

		for {
			v, _ := cpu.Counts(true)
			a := int64(v)
			chanStream <- &a

			fmt.Println("Logical CPUS ", a)
			time.Sleep(time.Duration(*ctx.Interval) * time.Millisecond)
		}

	}()

	return chanStream
}
