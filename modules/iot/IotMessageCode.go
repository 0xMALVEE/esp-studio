package iot

var IotMessageCode = newIotMessageCode()

func newIotMessageCode() *IotMessageCodeType {
	return &IotMessageCodeType{
		FileDoesNotExist: "FileDoesNotExist",
	}
}

type IotMessageCodeType struct {
	FileDoesNotExist string
}
