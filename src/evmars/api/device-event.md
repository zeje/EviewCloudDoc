---
title: query device event
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## query device event

**url**:`/api/v1/device/{deviceId}/event/{eventId}/_query`
**method**:`POST`
**produces**:`application/json`
**consumes**:`*/*`
**Note**:

According to the different Object models, the corresponding fields are returned. 

If the object model is defined as object type, the corresponding attributes; otherwise, the value field is event data.

**Request Example**

```javascript
{
  "terms": [
    {
      "column": "",
      "value": {},
      "type": "",
      "termType": "",
      "options": [],
      "terms": [
        {
          "column": "",
          "value": {},
          "type": "",
          "termType": "",
          "options": [],
          "terms": [
            {}
          ]
        }
      ]
    }
  ],
  "includes": [],
  "excludes": [],
  "paging": true,
  "firstPageIndex": 0,
  "pageIndex": 0,
  "pageSize": 0,
  "sorts": [
    {
      "name": "",
      "order": "",
      "value": {}
    }
  ],
  "context": {},
  "where": "",
  "orderBy": "",
  "total": 0,
  "parallelPager": true
}
```


**Params**:

| name         | description                                                     | in | require | type         | schema           |
| ---------------- | ------------------------------------------------------------ | -------- | -------- | ---------------- | ---------------- |
| deviceId         |                                                              | path     | true     | string           |                  |
| eventId          |                                                              | path     | true     | string           |                  |
| queryParamEntity | QueryParamEntity                                             | body     | true     | QueryParamEntity | QueryParamEntity |
| terms            |                                                              |          | false    | array            | Term             |
| column           | column                                                       |          | false    | string           |                  |
| value            | value                                                       |          | false    | object           |                  |
| type             | type,such as:or,and                               |          | false    | string           |                  |
| termType         | term type                                                  |          | false    | string           |                  |
| options          | options                                                     |          | false    | array            | string           |
| terms            | terms                                                     |          | false    | array            | Term             |
| includes         | columns to select                                                 |          | false    | array            | string           |
| excludes         | columns to exclude                                                 |          | false    | array            | string           |
| paging           | Pagination or not                                                     |          | false    | boolean          |                  |
| firstPageIndex   | first page index                                                   |          | false    | integer(int32)   |                  |
| pageIndex        | page index                                                         |          | false    | integer(int32)   |                  |
| pageSize         | page size                                                     |          | false    | integer(int32)   |                  |
| sorts            |                                                              |          | false    | array            | Sort             |
| name             | column name                                                       |          | false    | string           |                  |
| order            | order way,such as:asc,desc                                     |          | false    | string           |                  |
| value            | Specify value ordering                                                   |          | false    | object           |                  |
| context          | Context information                                                   |          | false    | object           |                  |
| where            | Where conditional expression cannot coexist with terms parameter. Syntax: name = Zhang San and age > 16. |          | false    | string           |                  |
| orderBy          | OrderBy conditional expression, which cannot coexist with the sorts parameter. Syntax: age asc,createTime desc. |          | false    | string           |                  |
| total            | The total number of count queries that will not be repeated after this value is set.                         |          | false    | integer(int32)   |                  |
| parallelPager    | Whether to do parallel paging?                                              |          | false    | boolean          |                  |

**Status-200**:
**Response Params**:

| name  | description     | type                 | schema                 |
| --------- | ------------ | ---------------------- | ---------------------- |
| message   | message content     | string                 |                        |
| result    |              | PagerResultDeviceEvent | PagerResultDeviceEvent |
| pageIndex | page index         | integer(int32)         |                        |
| pageSize  | page size   | integer(int32)         |                        |
| total     | total data count     | integer(int32)         |                        |
| data      | data list     | array                  | DeviceEvent            |
| timestamp |              | integer                |                        |
| status    | status code       | integer(int32)         | integer(int32)         |
| code      | business code       | string                 |                        |
| timestamp | Timestamp (ms) | integer(int64)         | integer(int64)         |

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
				"timestamp": 0
			}
		]
	},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

