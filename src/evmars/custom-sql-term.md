---
title: custom sql term
index: false
icon: iconfont icon-blog
category:
  - evmars
---

The platform uses extensible methods to construct SQL conditions, such as: like,gt,lt, etc.

## Platform built-in SQL conditions

| termType       | SQL           | DSL                                               | 说明                                                         |
| -------------- | ------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| is | eq     | =             | .is()                                             | 等于                                                         |
| not            | !=            | .not()                                            | unequal to                                                       |
| gt             | >             | .gt()                                             | be more/bigger than                                                         |
| lt             | <             | .lt()                                             | less than                                                         |
| gte            | >=            | .gte()                                            | greater than or equal to                                                     |
| lte            | <=            | .lte()                                            | less than or equal to                                                     |
| like           | like          | .like()                                           | Fuzzy matching. You need to splice the value% by yourself.                             |
| nlike          | not like      | .notLike()                                        | Same like                                                       |
| in             | in            | .in()                                             | Values can be in the following format: 1,2,3,4 strings are separated by commas. [1,2,3,4] set. |
| nin            | not in        | .notIn()                                          | Same in                                                         |
| isnull         | is null       | .isNull()                                         | is null                                                       |
| notnull        | not null      | .notNull()                                        | not null                                                     |
| empty          | = ''          | .isEmpty()                                        | empty                                                     |
| nempty         | !=''          | .notEmpty()                                       | not empty                                                     |
| btw            | between       | .between()                                        | between                                                       |
| nbtw           | not between   | .notBetween                                       | not between                                                     |
| dev-group      | exists(.....) | .where("deviceId$dev-group",groupId)              | Group query by device                                        |
| dev-same-group | exists(.....) | .where("deviceId$dev-same-group",anotherDeviceId) |                                                               |
| dev-tag        | exists(.....) | .where("deviceId$dev-tag","tagKey:tagValue")      | Query by label, supported formats: key:value,[{"key":"tagKey","value":"tagValue"}] |

## Used in front-end general query conditions

```json
{  "where": "deviceId custom 1234" }
```

or

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

## Other examples

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

### Time range

#### Use gte (greater than or equal to) to combine lte (less than or equal to).

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

#### Use between mode

Note: Because of the time zone, it is not recommended to use strings.

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

If there is a $ sign in column, the part before $ will be disassembled into the value of column, and the part after $ will be disassembled into the value of $ termType.

Note: Because of the time zone, it is not recommended to use strings.

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

If the corresponding field is of type long, it can be written as follows.

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