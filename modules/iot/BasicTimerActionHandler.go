package iot

import (
	"fmt"

	"github.com/torabian/fireback/modules/workspaces"
)

func BasicTimerActionHandler(
	object *ControlSheetObjects,
	controlSheetStream chan SheetRunTimeEvent,
	done chan bool,
) {
	for _, connection := range object.Connections {

		cfg := workspaces.CastJsonDataTypeTo[IntervalNodeConfigDto](connection.Data)
		act := TimerTicker(connection, cfg, done)
		go func() {
			for {
				select {
				case <-done:
					fmt.Println("Timer is done, should stop")
					return
				case row, more := <-act:
					controlSheetStream <- row
					if !more {
						return
					}

				}
			}
		}()

	}

}

func CronActionHandler(
	object *ControlSheetObjects,
	controlSheetStream chan SheetRunTimeEvent,
	done chan bool,
) {
	for _, connection := range object.Connections {

		fmt.Println("Connection", connection.UniqueId)
		cfg := workspaces.CastJsonDataTypeTo[CronjobConfigDto](connection.Data)
		fmt.Println("CFG:", cfg)
		act := CronTicket(connection, cfg, done)
		go func() {

			for {
				select {
				case <-done:

					return
				case row, more := <-act:
					controlSheetStream <- row
					if !more {
						return
					}

				}
			}
		}()

	}

}
