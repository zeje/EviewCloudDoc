---
title: APP上报定位事件
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## APP上报定位事件

**接口地址**:`/device/evgps/{deviceId}/event/trackerAppLocation`

**请求方式**:`POST`

**请求数据类型**:`application/json`

**响应数据类型**:`*/*`

**接口描述**:

APP上报定位事件

**请求示例**:

```javascript
{
  "dateTime": 0,
  "statusCode": 0,
  "lat": 0,
  "lng": 0,
  "radius": 0,
  "source": 0
}
```



**请求参数**:



**请求参数**:

| 参数名称           | 参数说明           | 请求类型 | 是否必须 | 数据类型           | schema             |
| ------------------ | ------------------ | -------- | -------- | ------------------ | ------------------ |
| deviceId           |                    | path     | true     | string             |                    |
| trackerAppLocation | TrackerAppLocation | body     | true     | TrackerAppLocation | TrackerAppLocation |
| dateTime           |                    |          | false    | integer(int64)     |                    |
| statusCode         |                    |          | false    | integer(int64)     |                    |
| lat                |                    |          | false    | number(double)     |                    |
| lng                |                    |          | false    | number(double)     |                    |
| radius             |                    |          | false    | number(double)     |                    |
| source             |                    |          | false    | integer(int32)     |                    |

# 