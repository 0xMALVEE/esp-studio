package iot

import (
	"fmt"
	"time"

	"github.com/go-co-op/gocron"
)

func TimerTicker(connection *ControlSheetObjectsConnections, object *IntervalNodeConfigDto, done chan bool) chan SheetRunTimeEvent {
	cn := make(chan SheetRunTimeEvent)

	if object == nil || object.Interval == nil {
		return cn
	}

	go func() {

		var count int64 = 0
		for {
			select {
			case <-done:
				fmt.Println("Completed")
				return

			default:
				count++

				tick := SheetRunTimeEvent{
					Type:               "timer",
					Content:            float64(count),
					SourceConnectionId: &connection.UniqueId,
					SourceObjectId:     connection.LinkerId,
				}
				fmt.Println("Tick", tick)
				cn <- tick
				time.Sleep(time.Millisecond * time.Duration(*object.Interval))

			}
		}
	}()

	return cn
}

func CronTicket(connection *ControlSheetObjectsConnections, object *CronjobConfigDto, done chan bool) chan SheetRunTimeEvent {
	cn := make(chan SheetRunTimeEvent)
	s := gocron.NewScheduler(time.UTC)
	var count int64 = 0

	fmt.Println("Expression: ", *object.Expression)
	s.CronWithSeconds(*object.Expression).Do(func() {
		count++
		fmt.Println("Cron tick")
		tick := SheetRunTimeEvent{
			Type:               "cron",
			Content:            float64(count),
			SourceConnectionId: &connection.UniqueId,
			SourceObjectId:     connection.LinkerId,
		}
		cn <- tick
	})

	s.StartAsync()

	go func() {
		for {
			select {
			case <-done:
				fmt.Println("Cron end")

				s.Stop()
				return

			}
		}

	}()

	// s := gocron.NewScheduler(time.UTC)

	// if object == nil || object.Interval == nil {
	// 	return cn
	// }

	// go func() {

	// 	var count int64 = 0
	// 	for {
	// 		select {
	// 		case <-done:
	// 			return

	// 		default:
	// 			count++

	// 			fmt.Println("Running default <<<<")
	// 			s.Cron("*/1 * * * *").Do(func() {
	// 				fmt.Println("Cron tick")
	// 				tick := SheetRunTimeEvent{
	// 					Type:               "cron",
	// 					Content:            float64(count),
	// 					SourceConnectionId: &connection.UniqueId,
	// 					SourceObjectId:     connection.LinkerId,
	// 				}
	// 				cn <- tick
	// 			})

	// 		}
	// 	}
	// }()

	return cn
}
