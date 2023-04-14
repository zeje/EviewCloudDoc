---
title: Api unified response state
index: false
icon: iconfont icon-api
category:
  - evmars
---

# Api unified response state:

| status code | description                   | schema                    |
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

## Status-200:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | boolean        |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": true,
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## Status-401:

**Response Params**:

| name  | description                                                     | type         | schema         |
| --------- | ------------------------------------------------------------ | -------------- | -------------- |
| message   | message content                                                     | string         |                |
| result    | result data,such as:{text=正常, value=normal},{text=已被禁止访问, value=deny},{text=用户未登录, value=expired},{text=用户已在其他地方登录, value=offline},{text=登录状态已被锁定, value=lock} | string         |                |
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

## Status-403:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## Status-404:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## Status-406:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```



## Status-415:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```



## Status-500:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```

## Status-504:

**Response Params**:

| name  | description     | type         | schema         |
| --------- | ------------ | -------------- | -------------- |
| message   | message content     | string         |                |
| result    | result data     | object         |                |
| status    | status code       | integer(int32) | integer(int32) |
| code      | business code       | string         |                |
| timestamp | Timestamp (ms) | integer(int64) | integer(int64) |

**Response Example**:

```javascript
{
	"message": "",
	"result": {},
	"status": 0,
	"code": "",
	"timestamp": 0
}
```