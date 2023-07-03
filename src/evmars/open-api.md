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

@tab nodejs

``` javascript
// todo
```

@tab dart

``` javascript
// todo
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