---
title: 查询设备列表
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## 查询设备列表

**接口地址**:`/api/v1/device/_query`
**请求方式**:`POST`
**请求数据类型**:`application/json`
**响应数据类型**:`*/*`
**接口描述**:查询设备列表(最多返回1000条记录)
**请求示例**:

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

**响应状态码-200**:
**响应参数**:

| 参数名称     | 参数说明                                                     | 类型                  | schema                |
| ------------ | ------------------------------------------------------------ | --------------------- | --------------------- |
| message      | 消息提示                                                     | string                |                       |
| result       |                                                              | PagerResultDeviceInfo | PagerResultDeviceInfo |
| pageIndex    | 页码                                                         | integer(int32)        |                       |
| pageSize     | 每页数据量                                                   | integer(int32)        |                       |
| total        | 数据总量                                                     | integer(int32)        |                       |
| data         | 数据列表                                                     | array                 | DeviceInfo            |
| id           | 设备ID                                                       | string                |                       |
| name         | 设备名称                                                     | string                |                       |
| productId    | 产品ID                                                       | string                |                       |
| productName  | 产品名称                                                     | string                |                       |
| state        | 设备状态,可用值:{text=未启用, value=notActive},{text=离线, value=offline},{text=在线, value=online} | string                |                       |
| registerTime | 激活时间                                                     | integer               |                       |
| createTime   | 创建时间                                                     | integer               |                       |
| parentId     | 父设备ID                                                     | string                |                       |
| status       | 状态码                                                       | integer(int32)        | integer(int32)        |
| code         | 业务码                                                       | string                |                       |
| timestamp    | 时间戳(毫秒)                                                 | integer(int64)        | integer(int64)        |

**响应示例**:

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

