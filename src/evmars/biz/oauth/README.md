---
title: Oauth2.0
icon: iconfont icon-guide
---

# Understanding OAuth 2.0

[OAuth](https://en.wikipedia.org/wiki/OAuth) is an open web standard for authorization that is widely used around the world, and the current version is version 2.0.

This article provides a concise and popular explanation of the design ideas and operation process of OAuth 2.0, and the main reference material is [RFC 6749](http://www.rfcreader.com/#rfc6749).

## First, application scenarios

To understand where OAuth applies, let me take a hypothetical example.

There's a "cloud print" website that prints photos that users store in Google. In order to use the service, users must have Cloud Print read their photos stored on Google.

![Cloud Printing](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051202.png)

The problem is that Google will only consent to Cloud Print reading these photos if it has the user's authorization. So, how does "Cloud Print" obtain the authorization of users?

The traditional method is that users tell their Google username and password to "cloud print", and the latter can read the user's photos. This approach has several serious drawbacks.

(1) "Cloud Print" will save the user's password for subsequent services, which is very insecure.
>
(2) Google had to deploy password login, and we know that password login alone is not secure.
>
(3) "Cloud Print" has the right to access all the information stored by the user in Google, and the user cannot limit the scope and validity period of the authorization of "Cloud Print".
>
(4) Only by changing the password can the user withdraw the power granted to "Cloud Print". However, doing so will disable all other third-party applications that are authorized by the user.
>
(5) As long as there is a third-party application cracked, it will lead to user password leakage, as well as all password-protected data leakage.

OAuth was born to solve these problems.

## Second, the definition of nouns

Before going into detail about OAuth 2.0, there are a few terms to know. They are essential for reading the explanations that follow, especially the few pictures.

(1) **Third-party application**: Third-party application, also referred to as "client" in this article, is the "cloud print" in the example in the previous section.
>
(2) **HTTP service**: HTTP service provider, referred to as "service provider" in this article, is Google in the example in the previous section.
>
(3) **Resource Owner**: The resource owner, also known as the "user" in this article.
>
(4) **User Agent**: User agent, in this case, refers to the browser.
>
(5) **Authorization server**: Authentication server, that is, the server used by the service provider specifically to handle authentication.
>
(6) **Resource server**: Resource server, that is, the server where the service provider stores user-generated resources. It can be the same server or a different server than the authentication server.

Knowing the above terms, it is not difficult to understand that the role of OAuth is to allow the "client" to obtain the authorization of the "user" and interact with the "service provider" in a secure and controllable manner.

## Third, the idea of OAuth

OAuth sets up an authorization layer between the "client" and the "service provider". The Client cannot log in directly to the Service Provider, only to the authorization layer, which distinguishes the user from the client. The token used by the "client" to log in to the authorization layer, which is different from the user's password. Users can specify the permission scope and validity period of the authorization layer token when logging in.

After the "client" logs in to the authorization layer, the "service provider" opens the user's stored data to the "client" according to the scope of authority and validity period of the token.

## Fourth, run the process

The operation process of OAuth 2.0 is shown in the following figure, which is extracted from RFC 6749.

![OAuth running process](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051203.png)

(A) After the user opens the client, the client asks the user for authorization.
>
(B) User agrees to grant authorization to the Client.
>
(C) The client uses the authorization obtained in the previous step to request a token from the authentication server.
>
(D) After the authentication server authenticates the client, it confirms that it is correct and agrees to issue the token.
>
(E) The client uses the token to request resources from the resource server.
>
(F) The resource server confirms that the token is correct and agrees to open the resource to the client.

It is not difficult to see that of the above six steps, B is the key, that is, how the user can authorize the client. With this authorization, the client can acquire a token, which in turn can be used to obtain resources.

The following describes the four modes of client authorization.

## V. Authorization mode of the client

The client must obtain authorization grant from the user in order to obtain an access token. OAuth 2.0 defines four authorization methods.

- Authorization Code Mode (Authorization Code)
- Simplified mode (implicit)
- Password mode (resource owner password credentials)
- Client mode (client credentials)

## VI. Authorization Code Mode

The authorization code mode is the authorization mode with the most complete functions and the most rigorous process. It is characterized by interaction with the authentication server of the "service provider" through the client's background server.

![Authorization Code Mode](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014051204.png)

Its steps are as follows:

(A) The user accesses the client, which directs the former to the authentication server.
>
(B) The User chooses whether to grant authorization to the Client.
>
(C) Assuming the user is authorized, the authentication server directs the user to the "redirect URI" specified in advance by the client, along with an authorization code.
>
(D) The client receives an authorization code, attaches the earlier "redirect URI", and requests a token from the authentication server. This step is done on the server behind the client and is not visible to the user.
>
(E) The authentication server checks the authorization code and redirect URI, and after confirming that it is correct, sends an access token and a refresh token to the client.

Here are the parameters required for these steps.

In step A, the URI of the client requests authentication and contains the following parameters:

- response_type: indicates the authorization type, required, the value here is fixed to "code"
- client_id: Indicates the ID of the client, required
- redirect_uri: Indicates a redirect URI, optional
- scope: indicates the scope of the requested permission, which is optional
- state: indicates the current state of the client, you can specify any value, the authentication server will return this value unchanged.

Below is an example.

```http
GET /authorize?response_type=code&client_id=s6BhdRkqt3&state=xyz
   &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
Moderator: server.example.com
```

In step C, the server responds with the URI of the client and contains the following parameters:

- code: indicates the authorization code, required. The validity period of this code should be short, usually set to 10 minutes, and the client can only use the code once, otherwise it will be rejected by the authorization server. This code is a one-to-one correspondence with the client ID and redirect URI.
- state: If the client's request includes this parameter, the authentication server's response must also contain this parameter exactly.

Below is an example.

```http
HTTP/1.1 302 found
Location: https://client.example.com/cb?code=SplxlOBeZQQYbYS6WxSbIA
&Status=xyz
```

In step D, the client requests an HTTP request for a token from the authentication server, which contains the following parameters:

- grant_type: Indicates the authorization mode used, required, the value here is fixed to "authorization_code".
- code: indicates the authorization code obtained in the previous step, required.
- redirect_uri: indicates the redirect URI, required, and must match the value of this parameter in step A.
- client_id: Indicates client ID, required.

Below is an example.

```http
POST /token HTTP/1.1
Moderator: server.example.com
License: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content type: application/x-www-form-urlencode

grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA
&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
```

In step E, the HTTP reply sent by the authentication server contains the following parameters:

- access_token: Indicates an access token, required.
- token_type: Indicates the token type, which is case insensitive, required, and can be a bearer type or a mac type.
- expires_in: Indicates the expiration time in seconds. If you omit this parameter, you must set the expiration time in another way.
- refresh_token: Indicates an update token, which is used to obtain the next access token, optionally.
- scope: indicates the scope of the permission, which can be omitted if it is consistent with the scope requested by the client.

Below is an example.

```http
HTTP/1.1 200 OK
Content type: application/json; charset=UTF-8
Cache control: No storage
Pragma: No cache

{
  “access_token”：“2YotnFZFEjr1zCsicMWpAA”，
  "token_type": "Example",
  “expires_in”：3600，
  “refresh_token”：“tGzv3JOkF0XG5Qx2TlKWIA”，
  “example_parameter”：“example_value”
}
```

As you can see from the above code, the relevant parameters are sent in JSON format (Content-Type: application/json). In addition, the HTTP header explicitly specifies that it must not be cached.


## Ten. Update the token

If the client's "access token" has expired when the user accesses, you need to use the "update token" to request a new access token.

The client makes an HTTP request to update the token with the following parameters:

- grant*type: indicates the authorization mode used, the value here is fixed to "refresh*token", required.
- refresh_token: Indicates the update token received earlier, required.
- scope: indicates the scope of authorization of the application, which cannot exceed the scope of the previous application, if this parameter is omitted, it means that it is consistent with the previous application.

Below is an example.

```http
POST /token HTTP/1.1
Host: server.example.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=tGzv3JOkF0XG5Qx2TlKWIA
```