---
title: api统一响应状态
index: false
icon: iconfont icon-blog
category:
  - evmars
---

# 统一响应状态:

| 状态码 | 说明                   | schema                    |
| ------ | ---------------------- | ------------------------- |
| 200    | OK                     | ResponseMessageBoolean    |
| 400    | Bad Request            |                           |
| 401    | Unauthorized           | ResponseMessageTokenState |
| 403    | Forbidden              | ResponseMessageObject     |
| 404    | Not Found              | ResponseMessageObject     |
| 406    | Not Acceptable         | ResponseMessageObject     |
| 415    | Unsupported Media Type | ResponseMessageObject     |
| 500    | Internal Server Error  | ResponseMessageObject     |
| 504    | Gateway Timeout        | ResponseMessageObject     |

## 响应状态码-200:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | boolean        |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

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

## 响应状态码-401:

**响应参数**:

| 参数名称  | 参数说明                                                     | 类型           | schema         |
| --------- | ------------------------------------------------------------ | -------------- | -------------- |
| message   | 消息提示                                                     | string         |                |
| result    | 数据内容,可用值:{text=正常, value=normal},{text=已被禁止访问, value=deny},{text=用户未登录, value=expired},{text=用户已在其他地方登录, value=offline},{text=登录状态已被锁定, value=lock} | string         |                |
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

## 响应状态码-403:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## 响应状态码-404:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## 响应状态码-406:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```



## 响应状态码-415:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```



## 响应状态码-500:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## 响应状态码-504:

**响应参数**:

| 参数名称  | 参数说明     | 类型           | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | 消息提示     | string         |                |
| result    | 数据内容     | object         |                |
| status    | 状态码       | integer(int32) | integer(int32) |
| code      | 业务码       | string         |                |
| timestamp | 时间戳(毫秒) | integer(int64) | integer(int64) |

**响应示例**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```