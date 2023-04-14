---
title: report location
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## report location

**url**:`/device/evgps/{deviceId}/event/trackerAppLocation`

**method**:`POST`

**produces**:`application/json`

**consumes**:`*/*`

**Note**:

report location

**Request Example**:

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



**Params**:



**Params**:

| name           | description           | in | require | type           | schema             |
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