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

@tab kotlin

``` kotlin
import java.security.MessageDigest

object OpenApiUtils {
    val digest = MessageDigest.getInstance("MD5")
    @OptIn(ExperimentalStdlibApi::class)
    fun signByQuery(timestamp: String, secureKey: String, digest: MessageDigest, query: Map<String, String>): String {
        val param = query.entries.joinToString("&") { "${it.key}=${it.value}" }
        digest.update(param.toByteArray())
        digest.update(timestamp.toByteArray())
        digest.update(secureKey.toByteArray())
        return digest.digest().toHexString()
    }

    @OptIn(ExperimentalStdlibApi::class)
    fun signByPost(timestamp: String, secureKey: String, digest: MessageDigest, jsonString: String): String {
        digest.update(jsonString.toByteArray())
        digest.update(timestamp.toByteArray())
        digest.update(secureKey.toByteArray())
        return digest.digest().toHexString()
    }
}
```

@tab object-c

``` object-c

--------------------------------OpenAPIUtil.h-----------------------------

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OpenAPIUtil : NSObject

+ (NSString *)signByQueryWithTimestamp:(NSString *)timestamp
                             secureKey:(NSData *)secureKey
                                 query:(NSDictionary<NSString *, NSArray<NSString *> *> *)query;

+ (NSString *)signByPostWithTimestamp:(NSString *)timestamp
                            secureKey:(NSString *)secureKey
                           parameters:(NSDictionary *)parameter;

+ (NSString *)hexStringFromData:(NSData *)data;

@end

NS_ASSUME_NONNULL_END

-------------------------------OpenAPIUtil.m------------------------------

#import "OpenAPIUtil.h"
#import <CommonCrypto/CommonDigest.h>

@implementation OpenAPIUtil

// EVMars平台签名规则 GET
+ (NSString *)signByQueryWithTimestamp:(NSString *)timestamp
                             secureKey:(NSData *)secureKey
                                 query:(NSDictionary<NSString *, NSArray<NSString *> *> *)query {
    NSMutableString *param = [[NSMutableString alloc] init];
    NSArray *sortedKeys = [[query allKeys] sortedArrayUsingSelector:@selector(compare:)];
    for (NSString *key in sortedKeys) {
        if (key) {
            NSArray *values = [query objectForKey:key];
            NSString *valuesString = [values componentsJoinedByString:@","];
            [param appendFormat:@"%@=%@&", key, valuesString];
        }
    }
    // Remove the last '&' character
    if ([param length] > 0) {
        [param deleteCharactersInRange:NSMakeRange([param length]-1, 1)];
    }

    const char *cParam = [param UTF8String];
    const char *cTimestamp = [timestamp UTF8String];
    
    NSMutableData *data = [NSMutableData data];
    [data appendBytes:cParam length:strlen(cParam)];
    [data appendBytes:cTimestamp length:strlen(cTimestamp)];
    [data appendData:secureKey];

    unsigned char result[CC_MD5_DIGEST_LENGTH];
    CC_MD5(data.bytes, (CC_LONG)data.length, result);

    NSMutableString *hexString = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
    for (int i = 0; i < CC_MD5_DIGEST_LENGTH; i++) {
        [hexString appendFormat:@"%02x", result[i]];
    }
    
    return [NSString stringWithString:hexString];
}

// Evmars-Loctube平台签名规则 POST
+ (NSString *)signByPostWithTimestamp:(NSString *)timestamp
                            secureKey:(NSString *)secureKey
                           parameters:(NSDictionary *)parameters {
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:parameters options:NSJSONWritingFragmentsAllowed error:nil];
    const char *cTimestamp = [timestamp UTF8String];
    const char *cSecureKey = [secureKey UTF8String];
    NSMutableData *data = [NSMutableData data];
    [data appendData:jsonData];
    [data appendBytes:cTimestamp length:strlen(cTimestamp)];
    [data appendBytes:cSecureKey length:strlen(cSecureKey)];

    unsigned char result[CC_MD5_DIGEST_LENGTH];
    CC_MD5(data.bytes, (CC_LONG)data.length, result);
    
    NSMutableString *hexString = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
    for (int i = 0; i < CC_MD5_DIGEST_LENGTH; i++) {
        [hexString appendFormat:@"%02x", result[i]];
    }
    return [NSString stringWithString:hexString];
}


+ (NSString *)hexStringFromData:(NSData *)data {
    Byte *bytes = (Byte *)[data bytes];
    //下面是Byte转换为16进制。
    NSString *hexStr = @"";
    for(int i = 0; i < [data length]; i ++){
        NSString *newHexStr = [NSString stringWithFormat:@"%x",bytes[i] & 0xff];///16进制数
        if([newHexStr length] == 1)
            hexStr = [NSString stringWithFormat:@"%@0%@",hexStr,newHexStr];
        else
            hexStr = [NSString stringWithFormat:@"%@%@",hexStr,newHexStr];
    }
    return hexStr;
}

@end
```

@tab nodejs

``` javascript

import CryptoJS from 'crypto-js'
 /*
   @param query 对象参数
   @param time 时间戳参数
   @param secureVal 签名秘钥
   @description GET接口签名方式
*/ 
  function signByQuery (query, time, secureVal) {
    if(Object.values(query).length<=0||time=="")return;
    const secureKey=secureVal// 签名秘钥
    const keys=Object.keys(query).sort();
    const signStr=keys.map(key => {
        const value = query[key];
        if (Array.isArray(value)) {
            return value.map(val => key + '=' + val).join(',');
        } else {
            return key + '=' + value;
        }
    })
    .join('&').concat(time).concat(secureKey);
    const sign= CryptoJS.MD5(signStr).toString();
    return sign
  }

 /*
   @param jsonString 字符串参数，将参数JSON.stringify。作为字符串传入
   @param time 时间戳参数
   @param secureVal 签名秘钥
   @description POST接口签名方式
*/ 
function signByPost(jsonString, time, secureVal) {
  if(jsonString==""||time=="")return;
  const secureKey=secureVal//签名秘钥
  const str=jsonString.trim()+time.trim()+secureKey.trim();
  const normalizedInput = CryptoJS.enc.Utf8.parse(str.trim());
  const sign= CryptoJS.MD5(normalizedInput).toString(CryptoJS.enc.Hex).toLocaleUpperCase();
  return sign;
},

/*
  示例：
*/
http.interceptors.request.use(
  (config) => {
    /* 请求之前拦截器。可以使用async await 做异步操作 */
    const time=new Date().getTime().toString();
    const secureKey=import.meta.env.VITE_SECUREKEY// 签名秘钥
    config.header = {
      ...config.header,
	    'X-Client-Id':import.meta.env.VITE_CLIENTID,
	    'X-Timestamp':time,
    };
    switch (config.method?.toLocaleUpperCase()) {
      case "POST":
        const isHasVal=Object.values(config.data).length>0;
        const value=isHasVal ? JSON.stringify(config.data) : '';
        config.header['X-Sign'] =signByPost(value, time,secureKey);
        break;
      case "GET":
        config.header['X-Sign'] =signByQuery(config.params||{}, time,secureKey);
        break;
    }
    /*
     if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
       return Promise.reject(config)
     }
     */
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

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