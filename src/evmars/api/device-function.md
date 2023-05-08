---
title: device function
index: false
icon: iconfont icon-api
category:
  - evmars
---

## device function

**url**:`/device/instance/{deviceId}/function/{functionId}`
**method**:`POST`
**produces**:`application/json`
**consumes**:`*/*`

**Note**:

Request Example: 

``` json
{ 
	"key":"value"
}
```

**Params**

| name   | description | in | require | type | schema |
| ---------- | -------- | -------- | -------- | -------- | ------ |
| deviceId   |          | path     | true     | string   |        |
| functionId |          | path     | true     | string   |        |

**Status-200**:
**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | array          |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": [],
	"status": 0,
	"code": "",
	"timestamp": 0
}
```
