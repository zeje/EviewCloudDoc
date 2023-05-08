---
title: Thing Specification Language
index: false
icon: iconfont icon-blog
category:
  - evmars
---


The equipment model is divided into: properties, function and event.

Equipment model usage scenario:

1. The front-end dynamically displays the running state of the equipment or the operation interface of the equipment through model definition.
2. The server can obtain the device model through the unified API and perform related operations, such as parameter verification when sending device messages.
Perform type conversion after receiving the device message.

Data structure:

``` json
{
    "id":"device id",
    "name":"device name",
    "properties":[...properties],
    "functions":[...functions],
    "events":[...events]
}
```

## attribute

Used to define device attributes, running status, etc. such as device SN, current CPU utilization rate, etc.
The platform can actively send messages to obtain device attributes, and devices also report attributes through events.

Data structure:

``` json
{
    "id": "cpu_usage", //attribute identification
    "name": "CPU utilization rate",
    "valueType": {   //value type
      "type": "double", //type identification
      "maxValue":100,
      "minValue":0,
      "unit":"percent", //unit
      "expands":{"key1":"value1"} //Other user-defined extension definitions.
    },
    "expands":{"key1":"value1"} //Other user-defined extension definitions.
}
```
## function

Used to define device functions, which can be actively called by the platform, such as playing voice, switching operation, etc.

Data structure:
``` json
{
    "id": "playVoice", //function identification
    "name": "play voice", //name
    "inputs": [  //Input parameters
      {
        "id": "text",
        "name": "text content",
        "valueType": { //parameter type
          "type": "string"
        },
        "expands":{"key1":"value1"} //Other user-defined extension definitions.
      }
    ],
    "output": { //output
      "type": "boolean" //output type
    },
    "expands":{"key1":"value1"} //Other user-defined extension definitions.
}
```

## Event

Used to define equipment events, such as regularly reporting equipment attributes and equipment alarms.

Data structure:
``` json
{
    "id": "fire_alarm", // event identification
    "name": "fire alarm",
    "valueType": {
      "type": "object",  // object (structure) type.
      "properties": [    // Object properties (structure and property definition are the same)
        {
          "id": "location",
          "name": "location",
          "valueType": {
            "type": "string"
          }
        },
        {
          "id": "lng",
          "name": "longitude",
          "valueType": {
            "type": "double"
          },
          "expands":{"gis":"lng"} //Other user-defined extension definitions.
        },
        {
          "id": "lat",
          "name": "latitude",
          "valueType": {
            "type": "double"
          },
          "expands":{"gis":"lat"} //Other user-defined extension definitions.
        }
      ]
    },
    "expands":{"key1":"value1"} //Other user-defined extension definitions.
}
```
## data type

Properties common to all types:

- id `unique identification`
- name `name`
- description `description`
- expands `custom configuration`

## # Number type

1. int `integer`
2. long `long`
3. float `single precision floating-point type`
4. double `double precision floating-point type`

All of the above are numeric types, with common attributes:
- max `maximum`
- min `minimum value`
- unit `unit`

Example:
``` json
{
    "type":"double",
    "max":100,
    "min":0,
    "unit":"percent",
    "expands":{"readonly":true}
}
```
### boolean Boolean type

attribute

- trueText
- falseText
- trueValue `the default value is "true"`
- falseValue `the default value is "false"`

Example:

``` json
{
    "type":"boolean",
    "trueText":"open",
    "falseText":"close",
    "trueValue":"1",
    "falseValue":"0"
}
```
### string character type

Example:
``` json
{
    "type":"string",
    "expands":{"maxLen":"255"}
}
```
### enum enumeration type

Attribute:
Elements in the-elements (Element) enumeration.

Element:
  - value `enumeration value`
  - text `enumeration text`
  - description `description`

Example:

``` json
{
    "type":"enum",
    "elements":[
        {"value":"1","text":"normal"},
        {"value":"-1","text":"warning"},
        {"value":"0","text":"unknown"}
    ]
}
```
### date time type

Attribute:
  - format,such as `yyyy-MM-dd`
  - tz `time zone`,such as `Asia/Shanghai`

Example:

``` json
{
    "type":"date",
    "format":"yyyy-MM-dd",
    "tz": "Asia/Shanghai"
}
```

### password password type

Same as string type

### file file type

Attribute:
  - bodyType: `url`,`base64`,`binary`.

Example:
``` json
{
    "type":"file",
    "bodyType":"url"
}
```
### array array (collection) type

Attribute:
-elementType element type

Example:

``` json
{
    "type":"array",
    "elementType":{ 
        "type":"string"
    }
}
```

### object `object (structure) type`

Attribute:
- properties `property list`

Example:

``` json
{
    "type":"object",
    "properties":[
        {
          "id": "location",
          "name": "location",
          "valueType": {
            "type": "string"
          }
        },
        {
          "id": "lng",
          "name": "longitude",
          "valueType": {
            "type": "double"
          },
          "expands":{"gis":"lng"}
        },
        {
          "id": "lat",
          "name": "latitude",
          "valueType": {
            "type": "double"
          },
          "expands":{"gis":"lat"}
        }
    ]
}
```

### geoPoint Geo geographic location type

Support comma-separated latitude and longitude strings and map types.
By default, three format conversions are supported: comma-separated characters: `145.1214,126.123` ,json format: `{"lat":145.1214,"lon":126.123}`

Example:
``` json
{
  "type":"geoPoint"
}
```