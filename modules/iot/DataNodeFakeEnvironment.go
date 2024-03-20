package iot

import (
	"encoding/json"
	"math/rand"
	"time"
)

/**
* For testing, and demo of the product, it's always good to have a fake enviornment be doing stuff
 */

var MockIotEnv *FakeIotEnvDto = nil

func randomFloat64(min, max float64) float64 {
	return min + rand.Float64()*(max-min)
}
func DnReadFakeEnvironemnt(done chan bool) chan *string {
	MockIotEnv = &FakeIotEnvDto{}
	v := MockIotEnv

	chanStream := make(chan *string)

	go func() {

		for {
			select {
			case <-done:
				return

			default:

				randomValue := randomFloat64(20, 100)
				v.Core1temperature = &randomValue
				randomValue2 := randomFloat64(20, 50)
				v.Core2temperature = &randomValue2
				m, _ := json.Marshal(MockIotEnv)
				x := string(m)
				chanStream <- &x
				time.Sleep(time.Duration(1000) * time.Millisecond)
			}

		}

	}()

	return chanStream
}
