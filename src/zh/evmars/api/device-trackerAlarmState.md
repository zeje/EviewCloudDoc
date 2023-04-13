---
title: 上报告警事件状态事件
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## 上报告警事件状态事件

**接口地址**:`/device/evgps/{deviceId}/event/trackerAlarmState/{timestamp}`

**请求方式**:`POST`

**请求数据类型**:`application/json`

**响应数据类型**:`*/*`

**接口描述**:

上报告警事件状态事件

**请求示例**:

```javascript
{
  "state": "UNREAD"
}
```

**请求参数**:



**请求参数**:

| 参数名称          | 参数说明          | 请求类型 | 是否必须                          | 数据类型          | schema            |
| ----------------- | ----------------- | -------- | --------------------------------- | ----------------- | ----------------- |
| deviceId          |                   | path     | true                              | string            |                   |
| timestamp         |                   | path     | true                              | integer(int64)    |                   |
| trackerAlarmState | TrackerAlarmState | body     | true                              | TrackerAlarmState | TrackerAlarmState |
| state             | 状态：未读        | 已读     | 重要,可用值:UNREAD,READ,IMPORTANT |                   | false             |

**响应示例**:

```javascript
{
	"message": "",
	"result": true,
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

