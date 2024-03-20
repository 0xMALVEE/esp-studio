package iot

import "github.com/torabian/fireback/modules/workspaces"

func DataNodeRelayActionHandler(
	object *ControlSheetObjects,
	controlSheetStream chan SheetRunTimeEvent,
	done chan bool,
) {
	data := workspaces.CastJsonDataTypeTo[DnReadWriteDataNodeDto](object.Meta)

	l := workspaces.QueryDSL{
		UniqueId: *data.NodeId,
		WithPreloads: []string{
			"Readers", "Writers",
		},
	}
	n, _ := DataNodeActionGetOne(l)

	if len(n.Readers) > 0 {
		act := SubcribeToDataNode2(object, n, done)

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
