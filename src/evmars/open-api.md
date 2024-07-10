---
title: calling OpenApi
index: false
icon: iconfont icon-blog
category:
  - evmars-loctube
---

## calling OpenApi
### How to use signature
#### Verification process

``` mermaid
graph TD

	userRequest(request) --> xClientId{does headers   contains  X-Client-Id?}
	xClientId --yes--> getHeader[get headers  X-Sign 和 X-Timestamp]
    xClientId --"no open-api request"--> auth[Enter the access control process   and execute the business logic.]
    auth --response--> open-api{is it the open-api request}
    open-api --yes--> setHeader["Sign and set the response header:X-Timestamp,X-Sign Signature algorithm   Signature ( response+X-Timestamp+SecureKey )"]
    setHeader --response--> response(response result)
    open-api --no--> response

	getHeader --> checkHeader{Check that the difference   between   X-Timestamp and server time   cannot be 5 minutes.}
    checkHeader --"ok"--> checkSign[Start inspection and signing]
    checkHeader --"no ok"--> reject[reject request]
	checkSign --> httpMethod{Judging request mode}
    httpMethod --"GET or Delete"--> join["Sort the parameter key   according to ASCII   and then splice it into   k1=v1&k2=v2 format."]
    httpMethod --"other method type"--> contentType{Judging ContentType}
    contentType --"application/x-www-form-urlencoded"--> join
    join --> signature["signature(param+X-Timestamp+SecureKey)"]
    contentType --"other"--> otherSignature["signature(request body+X-Timestamp+SecureKey)"]

    signature --> compare{compare X-Sign}
    otherSignature --> compare
    compare --different--> reject
    compare --same--> auth

```

::: info description

1. The `Signature` function in the figure sets the signature mode for the client, and supports `md5' and Sha256'.
2. The signature information of a request needs to be put in the request header, not the request body.

:::

#### Signature

The platform uses signatures to verify the integrity and legality of client requests.

* get

Example:

ClientId is `testId`,
SecureKey is `testSecure`.
Client request interface: `/api/v1/device/dev0001/log/_query`, parameter `pageSize=20&pageIndex=0`, and signature method `md5`.

1. the parameter key is sorted by ascii: `pageIndex=0&pageSize=20`
2. Using the splicing timestamp and key, we get: `pageIndex=0&pageSize=201574993804802testSecure`
3. Use `md5("pageIndex=0&pageSize=201574993804802testSecure")` to get `837fe7fa29e7a5e4852d447578269523`

Example:

```text
GET /api/device?pageIndex=0&pageSize=20
X-Client-Id: testId
X-Timestamp: 1574993804802
X-Sign: 837fe7fa29e7a5e4852d447578269523
```

Response result:

```text
HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{"status":200,result:[]}

```

* post

ClientId is `testId`,
SecureKey is `testSecure`.
Client request interface: `/device-instance`, and signature method `md5`.
The request body:

``` json
{
  "id": "123456789088888",
  "name": "123456789088888",
  "productId": "katchu",
  "productName": "katchu"
}
```

Example:

```text
POST /device-instance
X-Client-Id: testId
X-Timestamp: 1687750302000
X-Sign: 69c89f9ee7c6e7d2e03be2ac143247d6
Content-Type: application/json

{
  "id": "123456789088888",
  "name": "123456789088888",
  "productId": "katchu",
  "productName": "katchu"
}
```

#### Reference tagging algorithm

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
// todo
```

@tab dart

``` javascript

import CryptoJS from 'crypto-js'
 /*
   @param query
   @param time
   @param secureVal
   @description
*/ 
  function signByQuery (query, time, secureVal) {
    if(Object.values(query).length<=0||time=="")return;
    const secureKey=secureVal
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
   @param jsonString
   @param time
   @param secureVal
   @description
*/ 
function signByPost(jsonString, time, secureVal) {
  if(jsonString==""||time=="")return;
  const secureKey=secureVal
  const str=jsonString.trim()+time.trim()+secureKey.trim();
  const normalizedInput = CryptoJS.enc.Utf8.parse(str.trim());
  const sign= CryptoJS.MD5(normalizedInput).toString(CryptoJS.enc.Hex).toLocaleUpperCase();
  return sign;
},


http.interceptors.request.use(
  (config) => {

    const time=new Date().getTime().toString();
    const secureKey=import.meta.env.VITE_SECUREKEY
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

    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

```

:::

#### Sign-off

Use the same algorithm as the signature (there is no need to sort the response results):

```java

String secureKey = ...; //key
String responseBody = ...; //Server response result
String timestampHeader = ...; //response header: X-Timestamp
String signHeader = ...; //response header: X-Sign

String sign = DigestUtils.md5Hex(responseBody+timestampHeader+secureKey);
if(sign.equalsIgnoreCase(signHeader)){
//Pass the inspection.

}

```

### The way to use token

Get `X-Access-Token` by requesting interface `/api/v1/token`, and then use this token to initiate API requests.

### Apply for token
Client requests interface `/api/v1/token`  
Request method: POST

```text

POST /api/v1/token
X-Sign: 932bbe8a39ae03f568f73a507d87afac
X-Timestamp: 1587719082698 
X-Client-Id: kF**********HRZ  
Content-Type: application/json 

{  
    "expires": 7200 // Expiration time, in seconds.
}

//Return

{
    "status":200,
    "result":"3bcddb719b01da679b88d07acde2516" //token information.
}
```

### Initiate a request using token

Here is an example of obtaining the details of equipment 123456789012345.

```text
GET /api/v1/device/test001/_detail
X-Access-Token: 3bcddb719b01da679b88d07acde2516
```

Response result:

```json
{
    "result": {
        "id": "123456789012345",
        "name": "test device",
        "protocol": "evgps",
        "transport": "TCP",
        "orgId": "test",
        "productId": "katchu",
        "productName": "katchu",
        "deviceType": {
            "text": "directly connected device",
            "value": "device"
        },
        "state": {
            "text": "offline",
            "value": "offline"
        },
        "address": "/127.0.0.1:36982",
        "onlineTime": 1681456206013,
        "offlineTime": 1681456528230,
        "createTime": 1672124830209,
        "registerTime": 1672124833132,
        "metadata": "{ the content of the physical model is omitted here ...}",
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

The platform also supports authentication through `OAuth2.0`, and supports: `authorization_code` and `client_credentials` and `refresh_token`.

+Authorized address: http://{domain}/#/user/login.
+client_id: clientId configured in the third-party platform.
+ClientSecret: secureKey configured in the third-party platform.
+Token address: http://{domain}/loctube/oauth2/token.

For example:

```js
POST /loctube/oauth2/token
Content-Type: application/json

{
    "grant_type": "client_credentials", 
    "client_id":"client_id",            
    "client_secret":"client_secret",
}

Response:

{
    "access_token":"access_token",
    "refresh_token":"refresh_token",
    "expires_in":7200 //Expiration period, unit second.
}

```

Use token request interface:

```js
POST /device/instance/_query
Authorization: bearer access_token

{}
```

or

```js
POST /device/instance/_query?access_token=access_token

{}

```