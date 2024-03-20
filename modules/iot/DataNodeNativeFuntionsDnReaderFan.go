//go:build !darwin

package iot

func DnMacOsxFanInformation(done chan bool) chan *string {

	chanStream := make(chan *string)

	return chanStream
}
