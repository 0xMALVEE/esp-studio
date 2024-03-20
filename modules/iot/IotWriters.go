package iot

import (
	"fmt"
	"net"
	"os"
	"strconv"
	"strings"

	// "go.bug.st/serial"
	"github.com/tarm/serial"
)

/**
*	Writers, are functions which will be called when you are pushing
a data into a node. Each node, can have multiple writers, they can do different things:
send data to an http server, call a third party, make udp.

When compiled for ESP32, they can write the state directly to the gpio
*/

func IotWriterGPIO(datum *NodeDatumEntity) {
	fmt.Println("Writing data to gpio:")
}

var DATA_NODE_TYPE_COLOR string = "color"

type RGB struct {
	Red   uint8
	Green uint8
	Blue  uint8
}

func Hex2RGB(hex string) (RGB, error) {
	var rgb RGB
	values, err := strconv.ParseUint(string(hex), 16, 32)

	if err != nil {
		return RGB{}, err
	}

	rgb = RGB{
		Red:   uint8(values >> 16),
		Green: uint8((values >> 8) & 0xFF),
		Blue:  uint8(values & 0xFF),
	}

	return rgb, nil
}

func ReplaceVariables(input string, dto *WriteDatumDto, node *DataNodeEntity) string {

	if dto.Key != nil {
		paths := strings.Split(*dto.Key, ".")
		for index, keyitem := range paths {
			input = strings.ReplaceAll(input, "%key:"+fmt.Sprintf("%v", index)+"%", keyitem)
		}
		input = strings.ReplaceAll(input, "%key%", *dto.Key)
	}

	bvalue := GetInterfaceBoolValue(dto.Value)
	if bvalue != nil {
		v := *bvalue
		vText := "false"
		vTextNegate := "true"
		if v {
			vText = "true"
			vTextNegate = "false"
		}
		input = strings.ReplaceAll(input, "%value:boolean%", vText)
		input = strings.ReplaceAll(input, "%value:!boolean%", vTextNegate)

		vInt := "0"
		vIntNegate := "1"
		if v {
			vInt = "1"
			vIntNegate = "0"
		}

		input = strings.ReplaceAll(input, "%value:boolean_to_int%", vInt)
		input = strings.ReplaceAll(input, "%value:!boolean_to_int%", vIntNegate)
	}

	if node != nil && node.TypeId != nil && *node.TypeId == DATA_NODE_TYPE_COLOR {
		if dto.Value != nil {
			var colorx string = dto.Value.(string)
			fmt.Println(5, colorx)
			hr := colorx[1:3]
			hg := colorx[3:5]
			hb := colorx[5:7]

			fmt.Println(hr, hg, hb)
			input = strings.ReplaceAll(input, "%value:hr%", hr)
			input = strings.ReplaceAll(input, "%value:hg%", hg)
			input = strings.ReplaceAll(input, "%value:hb%", hb)

			rgb, _ := Hex2RGB(colorx[1:7])
			fmt.Println(10, colorx[1:7], rgb.Red, rgb.Green, rgb.Blue)
			input = strings.ReplaceAll(input, "%value:r%", strconv.Itoa(int(rgb.Red)))
			input = strings.ReplaceAll(input, "%value:g%", strconv.Itoa(int(rgb.Green)))
			input = strings.ReplaceAll(input, "%value:b%", strconv.Itoa(int(rgb.Blue)))

		}

	}

	return input
}

func DnWriteToHostFileSystem(config *DnWriteToHostFileSystemConfigDto, dto *WriteDatumDto) {
	if config.Path == nil {
		return
	}
	if dto.Value == nil {
		return
	}

	content := GetInterfaceStringValue(dto.Value)

	fmt.Println("Writing the content:", content)

	f, err := os.OpenFile(*config.Path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		// log.Fatal(err)
	}
	if _, err := f.Write([]byte(content)); err != nil {
		// log.Fatal(err)
	}
	if err := f.Close(); err != nil {
		// log.Fatal(err)
	}

}

func DnWriteToSerialPort(config *DnWriteSerialPortConfigDto, dto *WriteDatumDto) {
	if config == nil || config.Address == nil {
		return
	}
	c := &serial.Config{Name: *config.Address, Baud: 115200}
	s, err := serial.OpenPort(c)
	if err != nil {
		fmt.Println(err)
		return
	}

	// n, err := s.Write([]byte("255"))
	n, err := s.Write([]byte(GetInterfaceStringValue(dto.Value)))
	if err != nil {
		fmt.Println(err)
		return
	}

	buf := make([]byte, 128)
	n, err = s.Read(buf)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("%q", buf[:n], string(buf[:n]))
	s.Close()
	// fmt.Println(1, 2, dto.Value)

	// mode := &serial.Mode{
	// 	BaudRate: 9600,
	// 	// Parity:   serial.NoParity,
	// 	// DataBits: 8,
	// 	// StopBits: serial.OneStopBit,
	// }

	// port, err := serial.Open(config.Address, mode)

	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	// defer port.Close()

	// u := []byte(GetInterfaceStringValue(dto.Value))

	// fmt.Println("Writing real:", string(u))
	// n, err := port.Write(u)
	// port.Drain()
	// buf := make([]byte, 50)
	// if c, err := port.Read(buf); err != nil {
	// 	// log.Panic(err)
	// } else {
	// 	fmt.Println("From device", string(buf), c)
	// }

	// // if err != nil {
	// // 	// fmt.Println(err)
	// // 	// return
	// // 	// log.Fatal(err)
	// // }

	// fmt.Printf("Sent %v bytes\n", n)

}

func DnWriteToUdp(config *DnWriteUdpConfigDto, dto *WriteDatumDto) {
	conn, err := net.Dial("udp", *config.Host+":"+*config.Port)
	if err != nil {
		fmt.Printf("Some error %v", err)
		return
	}
	fmt.Fprintf(conn, "Hi UDP Server, How are you doing?")

	if _, err = conn.Write([]byte(GetInterfaceStringValue(dto.Value))); err != nil {
		fmt.Printf("Write err %v", err)

	}

	conn.Close()

}

// func DnWriteToSerialPort(config *DnWriteSerialPortConfig, dto *WriteDatumDto) {
// 	fmt.Println(1, 2, dto.Value)
// 	// if config == nil || config.Address == "" {
// 	// 	return
// 	// }

// 	mode := &serial.Mode{
// 		BaudRate: 9600,
// 		// Parity:   serial.NoParity,
// 		// DataBits: 8,
// 		// StopBits: serial.OneStopBit,
// 	}

// 	port, err := serial.Open(config.Address, mode)

// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}

// 	defer port.Close()

// 	u := []byte(GetInterfaceStringValue(dto.Value))

// 	fmt.Println("Writing real:", string(u))
// 	n, err := port.Write(u)
// 	port.Drain()
// 	buf := make([]byte, 50)
// 	if c, err := port.Read(buf); err != nil {
// 		// log.Panic(err)
// 	} else {
// 		fmt.Println("From device", string(buf), c)
// 	}

// 	// if err != nil {
// 	// 	// fmt.Println(err)
// 	// 	// return
// 	// 	// log.Fatal(err)
// 	// }

// 	fmt.Printf("Sent %v bytes\n", n)

// }
func WriterMqttTopic(config *DnWriteMQTTTopicConfigDto, dto *WriteDatumDto, node *DataNodeEntity) {

	topic := ""
	message := ""

	fmt.Println("$$", config)
	if config != nil && config.Topic != nil {
		topic = *config.Topic
	} else {
		return
	}
	if config != nil && config.Message != nil {
		message = *config.Message

	} else {
		return
	}

	message = ReplaceVariables(message, dto, node)

	fmt.Println("Time to write the mqtt", topic, message)

	if MqttClient != nil {
		MqttClient.Publish(topic, 0, false, message)
	}
}
