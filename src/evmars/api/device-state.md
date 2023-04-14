---
title: device state
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## device state

**url**:`/device/instance/{id}/state`
**method**:`GET`
**produces**:`application/x-www-form-urlencoded`
**consumes**:`*/*`
**Note**:
**Params**:
**Params**:

| name | description | in | require | type | schema |
| -------- | -------- | -------- | -------- | -------- | ------ |
| id       | device id   | path     | true     | string   |        |

**Status-200**:
**Response Params**:

| name  | description                                                     | type         | schema         |
| --------- | ------------------------------------------------------------ | -------------- | -------------- |
| message   | message content                                                     | string         |                |
| result    | result data,{value=notActive},{value=offline},{value=online} | string         |                |
| status    | status code                                                       | integer(int32) | integer(int32) |
| code      | business code                                                       | string         |                |
| timestamp | Timestamp (ms)                                                 | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": "",
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

