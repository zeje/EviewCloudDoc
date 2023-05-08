---
title: get property
index: false
icon: iconfont icon-api
category:
  - evmars
---



## get property


**Url**:`/api/v1/device/{deviceId}/property/{property}`


**Method**:`GET`


**produces**:`application/x-www-form-urlencoded`


**consumes**:`*/*`


**description**:

<p>Send a ReadPropertyMessage to the device and get the return.</p>



**Params**:


**Params**:


| name | description | in    | require | type | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deviceId|device id|path|true|string||
|property|property|path|true|string||


**code-200**:


**Responses**:


| name | description | type | schema |
| -------- | -------- | ----- |----- | 
|message|message content|string||
|result|result|object||
|status|status|integer(int32)|integer(int32)|
|code|code|string||
|timestamp|timestamp|integer(int64)|integer(int64)|


**Response Sample**:
```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```