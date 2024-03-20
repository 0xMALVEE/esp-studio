//go:build darwin

package iot

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/dkorunic/iSMC/output"
)

type MacFanValue struct {
	Key   string `json:"key"`
	Type  string `json:"type"`
	Value string `json:"value"`
}

type MacFanNormalizedData struct {
	Rpm int64 `json:"rpm"`
}

func GetMacFanStatus() map[string]MacFanNormalizedData {
	data := map[string]MacFanNormalizedData{}
	for h7, value := range output.GetFans() {
		m, okay := value.(map[string]interface{})
		if okay {
			d := MacFanNormalizedData{}
			for _, value := range m {
				m, ok := value.(string)

				if ok && strings.Contains(m, "rpm") {
					rpm, _ := strconv.Atoi(strings.TrimSpace(strings.ReplaceAll(m, "rpm", "")))
					d.Rpm = int64(rpm)
					data[h7] = d
				}
			}
		}
	}

	return data
}

func DnMacOsxFanInformation(done chan bool) chan *string {
	chanStream := make(chan *string)

	go func() {

		for {
			select {
			case <-done:
				fmt.Println("Done completed, should break now")
				return

			default:

				data, _ := json.MarshalIndent(GetMacFanStatus(), "", "  ")
				j := string(data)
				chanStream <- &j
				time.Sleep(1000 * time.Millisecond)
			}

		}

	}()

	return chanStream
}
