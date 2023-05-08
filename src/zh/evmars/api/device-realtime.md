---
title: 获取实时数据
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## 获取实时数据

**接口地址**:`/device/evgps/{deviceId}/realtime`

**请求方式**:`GET`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | -------- | -------- | -------- | -------- | ------ |
| deviceId | 设备ID   | path     | true     | string   |        |

**响应状态码-200**:

**响应参数**:

| 参数名称           | 参数说明     | 类型            | schema          |
| ------------------ | ------------ | --------------- | --------------- |
| message            | 消息提示     | string          |                 |
| result             |              | TrackerRealTime | TrackerRealTime |
| generalData        |              | GeneralData     | GeneralData     |
| dateTime           |              | integer         |                 |
| statusCode         |              | integer         |                 |
| dataType           |              | string          |                 |
| isGPS              |              | boolean         |                 |
| isWIFI             |              | boolean         |                 |
| isGMS              |              | boolean         |                 |
| isBLE              |              | boolean         |                 |
| isSmart            |              | boolean         |                 |
| isBeacon           |              | boolean         |                 |
| bleConnected       |              | boolean         |                 |
| fallDownStatus     |              | integer         |                 |
| isHomeWifi         |              | boolean         |                 |
| isCharging         |              | boolean         |                 |
| isChargingComplete |              | boolean         |                 |
| isReboot           |              | boolean         |                 |
| isHistoricalData   |              | boolean         |                 |
| isAGPS             |              | boolean         |                 |
| isMotion           |              | boolean         |                 |
| workMode           |              | integer         |                 |
| signalSize         |              | integer         |                 |
| battery            |              | integer         |                 |
| isHome             |              | boolean         |                 |
| mobileNetworkType  |              | integer         |                 |
| latestLocation     |              | LatestLocation  | LatestLocation  |
| lat                |              | number          |                 |
| lng                |              | number          |                 |
| radius             |              | number          |                 |
| dateTime           |              | integer         |                 |
| alarmTime          |              | integer         |                 |
| alarmCode          |              | integer         |                 |
| data               |              | array           | string          |
| status             | 状态码       | integer(int32)  | integer(int32)  |
| code               | 业务码       | string          |                 |
| timestamp          | 时间戳(毫秒) | integer(int64)  | integer(int64)  |

**响应示例**:

```javascript
{
	"message": "",
	"result": {
		"generalData": {
			"dateTime": 0,
			"statusCode": 0,
			"dataType": "",
			"isGPS": true,
			"isWIFI": true,
			"isGMS": true,
			"isBLE": true,
			"isSmart": true,
			"isBeacon": true,
			"bleConnected": true,
			"fallDownStatus": 0,
			"isHomeWifi": true,
			"isCharging": true,
			"isChargingComplete": true,
			"isReboot": true,
			"isHistoricalData": true,
			"isAGPS": true,
			"isMotion": true,
			"workMode": 0,
			"signalSize": 0,
			"battery": 0,
			"isHome": true,
			"mobileNetworkType": 0
		},
		"latestLocation": {
			"lat": 0,
			"lng": 0,
			"radius": 0,
			"dateTime": 0,
			"alarmTime": 0,
			"alarmCode": 0,
			"data": []
		}
	},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```