package iot

var PERM_ROOT_MQTTCLIENTCONNECT_DELETE = "root/mqttclientconnect/delete"
var PERM_ROOT_MQTTCLIENTCONNECT_POST = "root/mqttclientconnect/post"
var PERM_ROOT_MQTTCLIENTCONNECT_PATCH = "root/mqttclientconnect/patch"
var PERM_ROOT_MQTTCLIENTCONNECT_QUERY = "root/mqttclientconnect/query"
var PERM_ROOT_MQTTCLIENTCONNECT = "root/mqttclientconnect"

var ALL_MQTTCLIENTCONNECT_PERMISSIONS = []string{
	PERM_ROOT_MQTTCLIENTCONNECT_DELETE,
	PERM_ROOT_MQTTCLIENTCONNECT_POST,
	PERM_ROOT_MQTTCLIENTCONNECT_PATCH,
	PERM_ROOT_MQTTCLIENTCONNECT_QUERY,
	PERM_ROOT_MQTTCLIENTCONNECT,
}
