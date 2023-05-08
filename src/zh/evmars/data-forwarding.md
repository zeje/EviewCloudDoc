---
title: 数据转发
index: false
icon: iconfont icon-blog
category:
  - evmars
---

# 数据转发

> 平台提供了多种数据转发的方式，`开放OpenApi`、`在线订阅websocket数据`、及`MQTT订阅`


## 使用Websocket订阅实时设备消息

可以通过websocket来订阅设备,设备告警等相关消息.

### 接口

```tip
websocket统一接口为: `/messaging/{token}`,
`{token}`可通过登录系统或者使用OpenAPI获取. 
```

以前端js为例:
```js
var ws = new WebSocket("ws://localhost:8844/messaging/a872d8e6cf6ccd38deb0c8772f6040e3");
ws.onclose=function(e){console.log(e)};
ws.onmessage=function(e){console.log(e.data)}

// 如果认证失败,会立即返回消息: {"message":"认证失败","type":"authError"},并断开连接.
```

### 订阅消息

向websocket发送消息,格式为:

```js
{
    "type": "sub", //固定为sub
    "topic": "/device/*/*/**", // topic,见topic列表.
    "parameter": {       //参数,不同的订阅请求,支持的参数不同
        
    },
    "id": "request-id" //请求ID, 请求的标识,服务端在推送消息时,会将此标识一并返回.
}
```

::: warning 注意
在取消订阅之前,多次传入相同的id是无效的,不会重复订阅.
:::

平台推送消息:

```js
{
    "payload": //消息内容, topic不同,内容不同,
    "requestId": "request-id", //与订阅请求的id一致
    "topic": "/device/katch/123456789012345/offline", //topic,实际产生数据的topic
    "type": "result" //类型 result:订阅结果 complete:结束订阅 error:发生错误 
}
```

::: tip 提示

type为complete时标识本此订阅已结束,通常是订阅有限数据流时(比如发送设备指令),或者取消订阅时会返回此消息.

:::

### 取消订阅

向websocket发送消息,格式为:

```js
{
    "type":"unsub",//固定为unsub
     "id": "request-id" //与订阅请求ID一致
}
```

### 订阅设备消息

与消息网关中的设备topic一致,[查看topic列表](../best-practices/start.md#设备消息对应事件总线topic).
消息负载(`payload`)将与[设备消息类型](../best-practices/start.md#平台统一设备消息定义)一致.

### 发送设备指令

发送消息到websocket

```js
{
    "type": "sub", //固定为sub
    "topic": "/device-message-sender/katch/123456789012345,123456789012346", // 发送消息给katch型号下的123456789012345和123456789012346设备
    "parameter": {
        // 消息类型,支持: READ_PROPERTY (读取属性),WRITE_PROPERTY (修改属性),INVOKE_FUNCTION (调用功能)
        "messageType":"READ_PROPERTY" 
        //根据不同的消息,参数也不同. 具体见: 平台统一消息定义
        "properties":["temperature"],
        //头信息
        "headers":{
            "async":false // 是否异步,异步时,平台不等待设备返回指令结果.
        }
    },
    "id": "request-id" //请求ID, 请求的标识,服务端在推送消息时,会将此标识一并返回.
}
```

平台将推送设备返的结果:

```json
{
    "payload": {   //请求消息类型不同,结果不同
        "deviceId": "123456789012345",
        "messageType": "READ_PROPERTY_REPLY",
        "success":true, //指令是否成功
        "properties": {
            "temperature": 28.21
        },
        "timestamp": 1588148129787
    },
    "requestId": "request-id", //订阅请求的ID
    "topic": "/device/katch/123456789012345/offline",
    "type": "result"
}
```

::: tip 提示

`deviceId`支持`*`和逗号`,`分割,批量发送消息到设备.如: `/device-message-sender/{productId}/{deviceId}`.
如果要终止发送,直接取消订阅即可.

:::

### 批量同步设备状态

发送消息到websocket

```js
{
    "type": "sub", //固定为sub
    "topic": "/device-batch/state-sync",
    "parameter": {
        "query":{"where":"productId is test-device"}//查询条件为动态查询条件
    },
    "id": "request-id" //请求ID, 请求的标识,服务端在推送消息时,会将此标识一并返回.
}
```

平台推送:

```js
{
    "payload": {   //请求消息类型不同,结果不同
        "deviceId": "123456789012345",
        "state": {
            "value":"offline",
            "text":"离线"
        }
    },
    "requestId": "request-id", //订阅请求的ID
    "topic": "/device-batch/state-sync",
    "type": "result" //为comlete是则表示同步完成.
}
```

### 订阅设备告警数据

发送消息到websocket

```js
{
    "type": "sub", //固定为sub
    "topic": "/data-forwarding/device/alarm/{productId}/{deviceId}/{alarmId}",
    "parameter": {},
    "id": "request-id" //请求ID, 请求的标识,服务端在推送消息时,会将此标识一并返回.
}
```

平台推送:

```json
{
    "payload": {   //告警相关数据
        "deviceId": "设备ID",
        "deviceName": "设备名称",
        "alarmId": "告警ID",
        "alarmName": "告警名称"
        //...其他告警数据
    },
    "requestId": "request-id", //订阅请求的ID
    "topic": "/data-forwarding/device/alarm/{productId}/{deviceId}/{alarmId}",
    "type": "result" //为comlete是则表示订阅结束.
}
```

## 使用MQTT订阅平台消息

>tip 提供mqtt方式订阅平台消息的功能.可以通过mqtt来订阅设备,设备告警等相关消息.


### 认证

默认使用`token`(可以使用`OpenAPI`申请token)作为`clientId`,`username`和`password`可以不填写.

### 订阅设备消息

下面列举常用的订阅topic：

* `/device/*/*/message/event/trackerRealTime` 实时数据
* `/device/*/*/message/event/trackerAlarm` 告警
* `/device/*/*/message/event/iccid` iccid变更
* `/device/*/*/online` 设备上线
* `/device/*/*/offline` 设备理想
* `/_d_s/*/*/message/state/register` 设备启用
* `/_d_s/*/*/message/state/unregister` 设备禁用
* `/_d_s/*/*/message/state/bind` 设备与租户绑定
* `/_d_s/*/*/message/state/unbind` 设备与租户解绑
