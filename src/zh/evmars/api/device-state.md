---
title: 获取指定ID设备在线状态
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## 获取指定ID设备在线状态

**接口地址**:`/device/instance/{id}/state`
**请求方式**:`GET`
**请求数据类型**:`application/x-www-form-urlencoded`
**响应数据类型**:`*/*`
**接口描述**:
**请求参数**:
**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | -------- | -------- | -------- | -------- | ------ |
| id       | 设备ID   | path     | true     | string   |        |

**响应状态码-200**:
**响应参数**:

| 参数名称  | 参数说明                                                     | 类型           | schema         |
| --------- | ------------------------------------------------------------ | -------------- | -------------- |
| message   | 消息提示                                                     | string         |                |
| result    | 数据内容,可用值:{text=未启用, value=notActive},{text=离线, value=offline},{text=在线, value=online} | string         |                |
| status    | 状态码                                                       | integer(int32) | integer(int32) |
| code      | 业务码                                                       | string         |                |
| timestamp | 时间戳(毫秒)                                                 | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": "",
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

