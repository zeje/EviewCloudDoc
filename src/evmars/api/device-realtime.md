---
title: device realtime data
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## device realtime data

**url**:`/device/evgps/{deviceId}/realtime`

**method**:`GET`

**produces**:`application/x-www-form-urlencoded`

**consumes**:`*/*`

**Note**:

**Params**:

| name | description | in | require | type | schema |
| -------- | -------- | -------- | -------- | -------- | ------ |
| deviceId | device id   | path     | true     | string   |        |

**Status-200**:

**Response Params**:

| name           | description     | type          | schema          |
| ------------------ | ------------ | --------------- | --------------- |
| message            | message content     | string          |                 |
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
| status             | status code       | integer(int32)  | integer(int32)  |
| code               | business code       | string          |                 |
| timestamp          | Timestamp (ms) | integer(int64)  | integer(int64)  |

**Response Example**:

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