---
title: agps proxy
icon: iconfont icon-guide
---

### Timing diagram

The following figure does not specify the expiration verification steps of the token, so please design it yourself

```mermaid

sequenceDiagram

participant device as eview gps device
participant customerServer as your server
participant evmarBizServer as evmars getway
participant agpsServer as evmars agps sub service

device ->> customerServer: request agps
customerServer ->> customerServer: Is the cached token valid
alt valid
     customerServer ->> customerServer: use the cached token
else invalid
     customerServer ->> evmarBizServer: request token by OAuth2.0 client mode
     evmarBizServer -->> customerServer: return new token
     customerServer ->> customerServer: cache and use the token
end
customerServer ->> evmarBizServer: replace the url's base path，add http headers,and then proxy the request
evmarBizServer ->> evmarBizServer: verify token validity
alt invalid
     evmarBizServer ->> customerServer: return http 401 error
     customerServer -->> device: return error information, response header with ("message", "2");
else valid
     evmarBizServer ->> agpsServer: add http headers,and then proxy the request
     agpsServer -->> evmarBizServer:  return agps data
     evmarBizServer -->> customerServer: return agps data
     customerServer -->> device: return agps data
end

```

### How to get tokens

Please refer to [Oauth2.0](../oauth/README.md)

● client_secret_basic

The parameter passing method is to concatenate the clientId and clientSecret with the ':' sign and encode it with Base64 to obtain a string of characters. Put this encoded string in the Authorization header to send the request.

#### client_secret_basic

```
POST {{host}}/admin/oauth2/token?grant_type=client_credentials
Authorization:Basic {{Base64(clientId:clientSecret)}}
```

### Replace the base path in the URL

If the device requests the URL of your server: `http://your-domain/url?url=xxxxxxxxxxxx`
You need to change the URL to: `http://eview-domain/admin/agps/url?url=xxxxxxxxxxxx`

Namely: replace `http://your-domain` with `http://eview-domain/admin/agps`

Of course, `eview-domain` is not an actual domain name, you need to contact the business staff to obtain it


### X-Base-Path instructions

X-Base-Path is the interface path that you expose, such as http://your-domain

```
Authorization: Bearer {{Token}}
X-Base-Path: http://www.your-domain.com
```


