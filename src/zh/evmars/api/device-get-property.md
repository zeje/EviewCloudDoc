---
title: 下发读取属性指令
index: false
icon: iconfont icon-api
category:
  - evmars
---

## 下发读取属性指令


**接口地址**:`/api/v1/device/{deviceId}/property/{property}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>向设备下发读取属性指令(ReadPropertyMessage)并获取返回.</p>



**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deviceId|设备ID|path|true|string||
|property|属性ID|path|true|string||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|message|消息提示|string||
|result|数据内容|object||
|status|状态码|integer(int32)|integer(int32)|
|code|业务码|string||
|timestamp|时间戳(毫秒)|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```
