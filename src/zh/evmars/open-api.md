---
title: 调用OpenApi
index: false
icon: iconfont icon-blog
category:
  - evmars-loctube
---

## 调用OpenApi
### 使用签名的方式
#### 验证流程

``` mermaid
graph TD

	userRequest(用户请求) --> xClientId{请求头中 是否携带 X-Client-Id}
	xClientId --是--> getHeader[获取请求头 X-Sign 和 X-Timestamp]
    xClientId --"否，非OpenAPI请求"--> auth[进入权限控制流程 并执行业务逻辑]
    auth --响应--> open-api{是否为OpenApi请求}
    open-api --是--> setHeader["签名并设置响应头:X-Timestamp,X-Sign 签名算法Signature ( response+X-Timestamp+SecureKey )"]
    setHeader --响应--> response(响应结果)
    open-api --否--> response

	getHeader --> checkHeader{校验X-Timestamp 与服务器时间 不能相差5分钟}
    checkHeader --通过--> checkSign[开始验签]
    checkHeader --不通过--> reject[拒绝请求]
	checkSign --> httpMethod{判断请求方式}
    httpMethod --GET或Delete--> join[将参数key按ASCII排序 再拼接为k1=v1&k2=v2格式]
    httpMethod --其他请求--> contentType{判断ContentType}
    contentType --application/x-www-form-urlencoded--> join
    join --> signature["signature(param+X-Timestamp+SecureKey)"]
    contentType --其他--> otherSignature["signature(request body+X-Timestamp+SecureKey)"]

    signature --> compare{对比请求头X-Sign}
    otherSignature --> compare
    compare --不一致--> reject
    compare --一致--> auth

```



::: tip 说明

1. 图中`Signature`函数为客户端设置的签名方式,支持`MD5`和`Sha256`.
2. 发起请求的签名信息都需要放到请求头中,而不是请求体.

:::

#### 签名

平台使用签名来校验客户端请求的完整性以及合法性.

* get 

例:

ClientId为`testId`,
SecureKey为:`testSecure`.
客户端请求接口: `/api/v1/device/dev0001/log/_query`,参数为`pageSize=20&pageIndex=0`,签名方式为`md5`.

1. 将参数key按ascii排序得到: pageIndex=0&pageSize=20
2. 使用拼接时间戳以及密钥得到: pageIndex=0&pageSize=201574993804802testSecure
3. 使用`md5("pageIndex=0&pageSize=201574993804802testSecure")`得到`837fe7fa29e7a5e4852d447578269523`

示例:

```text
GET /api/device?pageIndex=0&pageSize=20
X-Client-Id: testId
X-Timestamp: 1574993804802
X-Sign: 837fe7fa29e7a5e4852d447578269523
```

响应结果:

```text
HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{"status":200,result:[]}

```

* post

ClientId为`testId`,
SecureKey为:`testSecure`.
客户端请求接口: `/device-instance`,签名方式为`md5`.
请求体为:

``` json
{
  "id": "123456789088888",
  "name": "123456789088888",
  "productId": "katchu",
  "productName": "katchu"
}
```


示例:

```text
POST /device-instance
X-Client-Id: testId
X-Timestamp: 1687750302000
X-Sign: 921eae6047759d3ad12e3dcb16347d6a
Content-Type: application/json

{
  "id": "123456789088888",
  "name": "123456789088888",
  "productId": "katchu",
  "productName": "katchu"
}
```

请特别注意，假如您的请求体为，您需要保证签名与POST的请求体的内容是完全一致的，一个字符的差异都会导致接口请求失败。
``` json
{
  "id": "123456789088888",
  "name": "123456789088888",
  "productId": "katchu",
  "productName": "katchu"
}
```

响应结果:

```text
HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{"status":200,result:[]}

```


#### 参考加签算法

::: code-tabs#shell

@tab:active java

``` java
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;

import java.security.MessageDigest;
import java.util.*;
import java.util.stream.Collectors;

public class OpenApiUtils {

    public static String signByQuery(String timestamp,
                                     byte[] secureKey,
                                     MessageDigest digest,
                                     Map<String, String[]> query) {
        byte[] param = new TreeMap<>(query)
                .entrySet()
                .stream()
                .filter(e -> e.getKey() != null)
                .map(e -> e.getKey().concat("=")
                           .concat(e.getValue() == null
                                   ? ""
                                   : Arrays.stream(e.getValue()).collect(Collectors.joining(","))))
                .collect(Collectors.joining("&"))
                .getBytes();
        digest.update(param);
        digest.update(timestamp.getBytes());
        digest.update(secureKey);

        return Hex.encodeHexString(digest.digest());
    }

    public static String signByPost(String timestamp,
                                    byte[] secureKey,
                                    MessageDigest digest,
                                    String jsonString) {
        digest.update(jsonString.getBytes());
        digest.update(timestamp.getBytes());
        digest.update(secureKey);
        return Hex.encodeHexString(digest.digest());
    }
}
```

@tab C##

``` csharp
using Microsoft.Extensions.Primitives;
using System.Security.Cryptography;
using System.Text;

namespace EvmarsSign
{
    public class OpenApiUtils
    {
        public static string signByQuery(String timestamp,
                                     byte[] secureKey,
                                     IEnumerable<KeyValuePair<string, StringValues>> query)
        {
            string paramString = string.Join("&", query
               .OrderBy(it => it.Key)
               .Select(it =>
               {
                   return it.Key + "=" + string.Join(",", it.Value);
               }));

            MD5 md5 = MD5.Create();

            byte[] bytes = Encoding.Default.GetBytes(paramString)
                   .Concat(
                   Encoding.Default.GetBytes(timestamp)
                   )
                   .Concat(
                   secureKey
                   ).ToArray();
            return ToHexString(md5.ComputeHash(bytes));
        }

        public static string signByPost(String timestamp,
                                        byte[] secureKey,
                                        String jsonString)
        {
            MD5 md5 = MD5.Create();
            byte[] bytes = Encoding.Default.GetBytes(jsonString)
                    .Concat(
                    Encoding.Default.GetBytes(timestamp)
                    )
                    .Concat(
                    secureKey
                    ).ToArray();
            return ToHexString(md5.ComputeHash(bytes));
        }


        public static string ToHexString(byte[] bytes)
        {
            string hexString = string.Empty;
            if (bytes != null)
            {
                StringBuilder strB = new StringBuilder();

                for (int i = 0; i < bytes.Length; i++)
                {
                    strB.Append(bytes[i].ToString("x2"));
                }
                hexString = strB.ToString();
            }
            return hexString;
        }
    }
}

```

@tab nodejs

``` javascript
// todo
```

@tab dart

``` javascript
// todo
```

:::

#### 验签

使用和签名相同的算法(不需要对响应结果排序):

```java

String secureKey = ...; //密钥
String responseBody = ...;//服务端响应结果
String timestampHeader = ...;//响应头: X-Timestamp
String signHeader = ...; //响应头: X-Sign

String sign = DigestUtils.md5Hex(responseBody+timestampHeader+secureKey);
if(sign.equalsIgnoreCase(signHeader)){
    //验签通过

}

```

### 使用token的方式

通过请求接口`/api/v1/token`来获取`X-Access-Token`，之后可以使用此token来发起api请求。

### 申请token
客户端请求接口`/api/v1/token`  
    请求方式： POST  

```text

POST /api/v1/token
X-Sign: 932bbe8a39ae03f568f73a507d87afac
X-Timestamp: 1587719082698 
X-Client-Id: kF**********HRZ  
Content-Type: application/json 

{  
    "expires": 7200 // 过期时间,单位秒.
}

//返回

{
    "status":200,
    "result":"3bcddb719b01da679b88d07acde2516" //token信息
}

```

### 使用token发起请求 

此处以获取设备123456789012345详情为例。  

```text
GET /api/v1/device/test001/_detail  
X-Access-Token: 3bcddb719b01da679b88d07acde2516  
```

响应结果：

```json
{
    "result": {
        "id": "123456789012345",
        "name": "测试设备",
        "protocol": "evgps",
        "transport": "TCP",
        "orgId": "test",
        "productId": "katchu",
        "productName": "katchu",
        "deviceType": {
            "text": "直连设备",
            "value": "device"
        },
        "state": {
            "text": "离线",
            "value": "offline"
        },
        "address": "/127.0.0.1:36982",
        "onlineTime": 1681456206013,
        "offlineTime": 1681456528230,
        "createTime": 1672124830209,
        "registerTime": 1672124833132,
        "metadata": "{物模型内容在此省略……}",
        "configuration": {
            "isDebug": "true",
            "parseType": "",
            "isChina": "false",
            "isDelayMsg": "true",
            "isHexLog": "false",
            "trackerType": "katchu",
            "isIgnoreEvLog": "false"
        },
        "tags": []
    },
    "status": 200,
    "code": "success"
}
```


### OAuth2.0

平台也支持通过OAuth2.0进行认证,支持: `authorization_code`和`client_credentials`以及`refresh_token`.

+ 授权地址: http://{domain}/#/user/login
+ client_id: 第三方平台中配置的clientId
+ ClientSecret: 第三方平台中配置的secureKey
+ Token地址: http://{domain}/loctube/oauth2/token

例如:

```js
POST /loctube/oauth2/token
Content-Type: application/json

{
    "grant_type": "client_credentials", //固定client_credentials
    "client_id":"client_id",            
    "client_secret":"client_secret",
}

响应:

{
    "access_token":"access_token",
    "refresh_token":"refresh_token",
    "expires_in":7200 //有效期,单位秒
}
```

使用token请求接口:

```js
POST /device/instance/_query
Authorization: bearer access_token

{}
```

或者
```js
POST /device/instance/_query?access_token=access_token
 
{}
```