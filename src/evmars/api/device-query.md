---
title: query device list
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## query device list

**url**:`/api/v1/device/_query`
**method**:`POST`
**produces**:`application/json`
**consumes**:`*/*`
**Note**:query device list (Return up to 1000 records.)
**Request Example**:

```javascript
{
  "terms":[
    {
      "column":"id",
      "termType":"eq",
      "value":"123456789012345"
    }
  ]
}
```

**Status-200**:
**Response Params**:

| name     | description                                                     | type                | schema                |
| ------------ | ------------------------------------------------------------ | --------------------- | --------------------- |
| message      | message content                                                     | string                |                       |
| result       |                                                              | PagerResultDeviceInfo | PagerResultDeviceInfo |
| pageIndex    | page index                                                         | integer(int32)        |                       |
| pageSize     | page size                                                   | integer(int32)        |                       |
| total        | total data count                                                     | integer(int32)        |                       |
| data         | data list                                                     | array                 | DeviceInfo            |
| id           | device id                                                       | string                |                       |
| name         | device name                                                     | string                |                       |
| productId    | product id                                                       | string                |                       |
| productName  | product name                                                     | string                |                       |
| state        | device device ,{value=notActive},{value=offline},{value=online} | string                |                       |
| registerTime | register time                                                     | integer               |                       |
| createTime   | create time                                                    | integer               |                       |
| parentId     | parent device id                                                     | string                |                       |
| status       | status code                                                       | integer(int32)        | integer(int32)        |
| code         | business code                                                       | string                |                       |
| timestamp    | Timestamp (ms)                                                 | integer(int64)        | integer(int64)        |

**Response Example**:

```javascript
{
	"message": "",
	"result": {
		"pageIndex": 0,
		"pageSize": 0,
		"total": 0,
		"data": [
			{
				"id": "",
				"name": "",
				"productId": "",
				"productName": "",
				"state": "",
				"registerTime": 0,
				"createTime": 0,
				"parentId": ""
			}
		]
	},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

