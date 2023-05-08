---
title: Data forwarding
index: false
icon: iconfont icon-blog
category:
  - evmars
---

# Data forwarding

> platform provides a variety of data forwarding methods, `Open OpenAPI`, `Online subscription to websocket data`, and `MQTT subscription`

## Use Websocket to subscribe to real-time device messages

You can subscribe to devices, device alarms and other related messages through websockets.

### interface

```tip
The websocket unified interface is: `/messaging/{token}`,
`{token}` can be accessed by logging into the system or using OpenAPI. 
```

Take front-end js as an example:
```js
var ws = new WebSocket("ws://localhost:8844/messaging/a872d8e6cf6ccd38deb0c8772f6040e3");
ws.onclose=function(e){console.log(e)};
ws.onmessage=function(e){console.log(e.data)}

If authentication fails, the message {"message": "authentication failed", "type":"authError"} is immediately returned, and the connection is disconnected.
```

### Subscribe to messages

Send a message to the websocket in the format:

```js
{
    "type": "sub", // fixed as sub
    "topic": "/device/*/*/**", // topic, see topic list.
    "parameter": { // parameter, different subscription requests, different supported parameters
        
},
    "id": "request-id" //request ID, the identity of the request, which the server will return when pushing the message.
}
```

::: warning Note
Passing in the same id multiple times is invalid before canceling the subscription and the subscription will not be repeated.
:::

Platform push message:

```js
{
    "payload": // message content, different topics, different content,
    "requestId": "request-id", // matches the id of the subscription request
    "topic": "/device/katch/123456789012345/offline", //topic, the topic that actually generated the data
    "type": "result" //type result: subscription result complete: end subscription error: error occurred 
}
```

:::tip prompt

A complete type indicates that the subscription has ended, and is usually returned when subscribing to a limited stream of data (such as sending device instructions), or when unsubscribing.

:::

### Unsubscribe

Send a message to the websocket in the format:

```js
{
    "type": "unsub", // fixed as unsub
     "id": "request-id" // Consistent with subscription request ID
}
```

### Subscribe to device messages

Consistent with the device topic in the message gateway, [View topic list] (.. /best-practices/start.md# device messages correspond to event bus topics).
The message payload (`payload`) is the same as the [device message type] (.. /best-practices/start.md# Platform Unified Device Message Definitions).

### Send device instructions

Send a message to the websocket

```js
{
    "type": "sub", // fixed as sub
    "topic": "/device-message-sender/katch/123456789012345,123456789012346", // Send messages to 123456789012345 and 123456789012346 devices under the katch model
    "parameter": {
        Message types, supported: READ_PROPERTY (read properties), WRITE_PROPERTY (modify properties), INVOKE_FUNCTION (invoke function)
        "messageType":"READ_PROPERTY" 
        Depending on the message, the parameters are also different. See: Platform Unified Messaging Definitions
        "properties":["temperature"],
        Header information
        "headers":{
            "async": false // whether asynchronous, when asynchronous, the platform does not wait for the device to return the command result.
        }
    },
    "id": "request-id" //request ID, the identity of the request, which the server will return when pushing the message.
}
```

The platform will push the results of the device back:

```json
{
    "payload": { //The result varies depending on the request message type
        "deviceId": "123456789012345",
        "messageType": "READ_PROPERTY_REPLY",
        "success": true, // whether the instruction succeeded
        "properties": {
            "temperature": 28.21
        },
        "timestamp": 1588148129787
    },
    "requestId": "request-id", //ID of the subscription request
    "topic": "/device/katchu/123456789012345/offline",
    "type": "result"
}
```

:::tip prompt

`deviceId` supports `*` and comma `,` split, send messages to devices in batches. Such as: `/device-message-sender/{productId}/{deviceId}`.
If you want to terminate the sending, just cancel the subscription.

:::

### Batch sync device status

Send a message to the websocket

```js
{
    "type": "sub", // fixed as sub
    "topic": "/device-batch/state-sync",
    "parameter": {
        "query":{"where":"productId is test-device"}//Query condition is dynamic query condition
    },
    "id": "request-id" //request ID, the identity of the request, which the server will return when pushing the message.
}
```

Platform push:

```js
{
    "payload": { //The result varies depending on the request message type
        "deviceId": "123456789012345",
        "state": {
            "value":"offline",
            "text": "offline"
        }
    },
    "requestId": "request-id", //ID of the subscription request
    "topic": "/device-batch/state-sync",
    "type": "result" // for comlete means that the synchronization is complete.
}
```

### Subscribe to device alarm data

Send a message to the websocket

```js
{
    "type": "sub", // fixed as sub
    "topic": "/data-forwarding/device/alarm/{productId}/{deviceId}/{alarmId}",
    "parameter": {},
    "id": "request-id" //request ID, the identity of the request, which the server will return when pushing the message.
}
```

Platform push:

```json
{
    "payload": { //Alarm related data
        "deviceId": "Device ID",
        "deviceName": "Device Name",
        "alarmId": "alarm ID",
        "alarmName": "Alarm Name"
        //... Other alarm data
    },
    "requestId": "request-id", //ID of the subscription request
    "topic": "/data-forwarding/device/alarm/{productId}/{deviceId}/{alarmId}",
    "type": "result" // for comlete means end of subscription.
}
```

## Use MQTT to subscribe to platform messages

>TIP provides the function of subscribing to platform messages in MQTT. You can subscribe to devices, device alarms and other related messages through MQTT.

### Authentication

By default, `token` (you can use `OpenAPI` to apply for tokens) as `clientId`, `username` and `password` can be left unfilled in.

### Subscribe to device messages

The following are common subscription topics:

* `/device/*/*/message/event/trackerRealTime` real-time data
* `/device/*/*/message/event/trackerAlarm` alerts
* `/device/*/*/message/event/iccid` ICCID changes
* `/device/*/*/online` device is online
* `/device/*/*/offline` device is ideal
* `/_d_s/*/*/message/state/register` device enabled
* `/_d_s/*/*/message/state/unregister` device disabled
* `/_d_s/*/*/message/state/bind` devices are bound to the tenant
* `/_d_s/*/*/message/state/unbind` devices are untied from the tenant
