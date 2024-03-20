package iot

type DataFlow struct {
	ConnectionId       string `json:"source"`
	Key                string `json:"key"`
	TargetConnectionId string `json:"targetConnectionId"`
	SourceObject       *ControlSheetObjects
	SourceConnection   *ControlSheetObjectsConnections
	TargetConnection   *ControlSheetObjectsConnections
	Next               []*DataFlow `json:"next"`
	ComputedValue      interface{} `json:"computedValue"`
}

type TargetDn map[string]*ControlSheetObjectsConnections
type SourceDn []*ControlSheetObjectsConnections

type ActionState struct {
	Value interface{} `json:"value,omitempty"`
}

type UserInteractionRequest struct {
	Connection *ControlSheetObjectsConnections `json:"connection,omitempty"`
	NextState  ActionState                     `json:"nextState,omitempty"`
}
