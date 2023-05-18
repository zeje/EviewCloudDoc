---
title: agps代理服务
icon: iconfont icon-guide
---

### 时序图

下图未明确token的过期校验步骤，请自行设计

```mermaid

sequenceDiagram

participant device as eview设备
participant customerServer as 客户服务器
participant evmarBizServer as evmars网关
participant agpsServer as eview agps服务


device ->> customerServer: 请求agps
customerServer ->> customerServer: 缓存的token是否有效
alt 有效
     customerServer ->> customerServer: 提取token
else 无效
     customerServer ->> evmarBizServer: 获取token （使用行业授权标准OAuth2.0客户端模式）
     evmarBizServer -->> customerServer: 返回新的token
     customerServer ->> customerServer: 缓存并提取token
end
customerServer ->> evmarBizServer: 替换url的basePath，代理请求agps（需要添加X-Basic-Path请求头）
evmarBizServer ->> evmarBizServer: 校验token有效性
alt 无效
     evmarBizServer ->> customerServer: 返回http 401未授权错误
     customerServer -->> device: 返回错误信息response.setHeader("message", "2");
else 有效
     evmarBizServer ->> agpsServer: 代理请求agps（需要添加X-Basic-Path请求头）
     agpsServer -->> evmarBizServer:  返回agps
     evmarBizServer -->> customerServer: 返回agps
     customerServer -->> device: 返回agps
end

```

### Token获取方式

请参考 [Oauth2.0](../oauth/README.md)

`client_secret_basic` 传参方式是将 clientId 和 clientSecret 通过 ‘:’ 号拼接，并使用 Base64 进行编码得到一串字符。将此编码字符串放到请求头(Authorization)去发送请求。
#### client_secret_basic

```
POST {{host}}/admin/oauth2/token?grant_type=client_credentials
Authorization:Basic {{Base64(clientId:clientSecret)}}
```

### 替换Url中的base path

若设备请求您的服务器的url为：`http://your-domain/url?url=xxxxxxxxxxxx`
您需要将url修改为：`http://eview-domain/admin/agps/url?url=xxxxxxxxxxxx`

即：将`http://your-domain`替换为`http://eview-domain/admin/agps`

当然，`eview-domain`并不是实际的域名，需要联系业务人员获取

### X-Base-Path说明

X-Base-Path为您对外公开的接口路径，如： http://your-domain

```
Authorization: Bearer {{Token}}
X-Base-Path: http://www.your-domain.com
```
