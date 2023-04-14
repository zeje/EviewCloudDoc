---
title: report alarm state
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## report alarm state

**url**:`/device/evgps/{deviceId}/event/trackerAlarmState/{timestamp}`

**method**:`POST`

**produces**:`application/json`

**consumes**:`*/*`

**Note**:

report alarm state

**Request Example**:

```javascript
{
  "state": "UNREAD"
}
```

**Params**:



**Params**:

| name          | description          | in | require                          | type          | schema            |
| ----------------- | ----------------- | -------- | --------------------------------- | ----------------- | ----------------- |
| deviceId          |                   | path     | true                              | string            |                   |
| timestamp         |                   | path     | true                              | integer(int64)    |                   |
| trackerAlarmState | TrackerAlarmState | body     | true                              | TrackerAlarmState | TrackerAlarmState |
| state             | state        | READ     | UNREAD,READ,IMPORTANT |                   | false             |

**Response Example**:

```javascript
{
	"message": "",
	"result": true,
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

