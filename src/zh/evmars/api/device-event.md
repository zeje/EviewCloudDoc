---
title: 查询设备事件数据
index: false
icon: iconfont icon-api
category:
  - loctube-api
---

## 查询设备事件数据

**接口地址**:`/api/v1/device/{deviceId}/event/{eventId}/_query`
**请求方式**:`POST`
**请求数据类型**:`application/json`
**响应数据类型**:`*/*`
**接口描述**:

根据物模型的不同,返回对应的字段,如果物模型定义为Object类型,则对应属性,否则value字段则为事件数据.

**请求示例**

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


**请求参数**:

| 参数名称         | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型         | schema           |
| ---------------- | ------------------------------------------------------------ | -------- | -------- | ---------------- | ---------------- |
| deviceId         |                                                              | path     | true     | string           |                  |
| eventId          |                                                              | path     | true     | string           |                  |
| queryParamEntity | QueryParamEntity                                             | body     | true     | QueryParamEntity | QueryParamEntity |
| terms            |                                                              |          | false    | array            | Term             |
| column           | 字段名                                                       |          | false    | string           |                  |
| value            | 条件值                                                       |          | false    | object           |                  |
| type             | 多个条件关联类型,可用值:or,and                               |          | false    | string           |                  |
| termType         | 动态条件类型                                                 |          | false    | string           |                  |
| options          | 拓展选项                                                     |          | false    | array            | string           |
| terms            | 嵌套条件                                                     |          | false    | array            | Term             |
| includes         | 指定要查询的列                                               |          | false    | array            | string           |
| excludes         | 指定不查询的列                                               |          | false    | array            | string           |
| paging           | 是否分页                                                     |          | false    | boolean          |                  |
| firstPageIndex   | 第一页索引                                                   |          | false    | integer(int32)   |                  |
| pageIndex        | 页码                                                         |          | false    | integer(int32)   |                  |
| pageSize         | 每页数量                                                     |          | false    | integer(int32)   |                  |
| sorts            |                                                              |          | false    | array            | Sort             |
| name             | 字段名                                                       |          | false    | string           |                  |
| order            | 排序方式,可用值:asc,desc                                     |          | false    | string           |                  |
| value            | 指定值排序                                                   |          | false    | object           |                  |
| context          | 上下文信息                                                   |          | false    | object           |                  |
| where            | where条件表达式,与terms参数不能共存.语法: name = 张三 and age > 16 |          | false    | string           |                  |
| orderBy          | orderBy条件表达式,与sorts参数不能共存.语法: age asc,createTime desc |          | false    | string           |                  |
| total            | 设置了此值后将不重复执行count查询总数                        |          | false    | integer(int32)   |                  |
| parallelPager    | 是否进行并行分页                                             |          | false    | boolean          |                  |

**响应状态码-200**:
**响应参数**:

| 参数名称  | 参数说明     | 类型                   | schema                 |
| --------- | ------------ | ---------------------- | ---------------------- |
| message   | 消息提示     | string                 |                        |
| result    |              | PagerResultDeviceEvent | PagerResultDeviceEvent |
| pageIndex | 页码         | integer(int32)         |                        |
| pageSize  | 每页数据量   | integer(int32)         |                        |
| total     | 数据总量     | integer(int32)         |                        |
| data      | 数据列表     | array                  | DeviceEvent            |
| timestamp |              | integer                |                        |
| status    | 状态码       | integer(int32)         | integer(int32)         |
| code      | 业务码       | string                 |                        |
| timestamp | 时间戳(毫秒) | integer(int64)         | integer(int64)         |

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
				"timestamp": 0
			}
		]
	},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

