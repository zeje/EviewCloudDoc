---
title: 通用SQL条件
index: false
icon: iconfont icon-api
category:
  - evmars
---

平台使用可拓展的方式进行SQL条件构造,如: like,gt,lt等。

## 平台内置SQL条件

| termType       | SQL           | DSL                                               | 说明                                                         |
| -------------- | ------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| is 或者 eq     | =             | .is()                                             | 等于                                                         |
| not            | !=            | .not()                                            | 不等于                                                       |
| gt             | >             | .gt()                                             | 大于                                                         |
| lt             | <             | .lt()                                             | 小于                                                         |
| gte            | >=            | .gte()                                            | 大于等于                                                     |
| lte            | <=            | .lte()                                            | 小于等于                                                     |
| like           | like          | .like()                                           | 模糊匹配. 需要自己将value拼接%.                              |
| nlike          | not like      | .notLike()                                        | 同like                                                       |
| in             | in            | .in()                                             | 值可以为以下格式:1,2,3,4 字符串以半角逗号分割. [1,2,3,4] 集合. |
| nin            | not in        | .notIn()                                          | 同in                                                         |
| isnull         | is null       | .isNull()                                         | 为null                                                       |
| notnull        | not null      | .notNull()                                        | 不为null                                                     |
| empty          | = ''          | .isEmpty()                                        | 为空字符                                                     |
| nempty         | !=''          | .notEmpty()                                       | 不为字符                                                     |
| btw            | between       | .between()                                        | 在之间                                                       |
| nbtw           | not between   | .notBetween                                       | 不在之间                                                     |
| dev-group      | exists(.....) | .where("deviceId$dev-group",groupId)              | 按设备分组查询 (Pro)                                         |
| dev-same-group | exists(.....) | .where("deviceId$dev-same-group",anotherDeviceId) | 查询同一个分组的设备，如果要包含此设备则使用: deviceId$dev-same-group$contains (Pro) |
| dev-tag        | exists(.....) | .where("deviceId$dev-tag","tagKey:tagValue")      | 按标签查询,支持格式: key:value,[{"key":"tagKey","value":"tagValue"}] |

## 在前端通用查询条件中使用

```json
{  "where": "deviceId custom 1234" }
```

或者

```json
{
  "terms":[
    {
      "column":"deviceId",
      "termType":"custom",
      "value":"1234"
    }
  ]
}
```

## 其他示例

### eq

```json
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

### in

```json
{
  "terms": [
    {
      "column": "id",
      "termType": "in",
      "value": [
        "123456789012345",
        "123456789012346"
      ]
    }
  ]
}
```

### 时间范围

#### 使用gte(大于等于)组合lte(小于等于)

```json
{
  "terms": [
    {
      "column": "createTime",
      "termType": "gte",
      "value": 1672124830208
    },
    {
      "column": "createTime",
      "termType": "lte",
      "value": 1672124830210
    }
  ]
}
```

#### 使用between方式

注：因时区问题，不建议使用字符串

```json
{
  "terms": [
    {
      "column": "createTime",
      "termType": "btw",
      "value": "2023-02-01 00:00:00,2023-03-01 00:00:00"
    }
  ]
}
```

若发现column中有$符号会将$前面的部分拆为column的值，后面的部分拆解为termType的值

注：因时区问题，不建议使用字符串

```json
{
  "terms": [
    {
      "column": "createTime$btw",
      "value": "2023-02-01 00:00:00,2023-03-01 00:00:00"
    }
  ]
}
```

若对应的字段为long类型，可以这么写

```json
{
  "terms": [
    {
      "column": "createTime$btw",
      "value": "1676441130975,1676441130975"
    }
  ]
}
```