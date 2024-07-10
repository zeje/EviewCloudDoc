import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as h,b as n,d as e,e as t,w as l,f as i}from"./app-cbe19b05.js";const u={},p=e("h3",{id:"timing-diagram",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#timing-diagram","aria-hidden":"true"},"#"),t(" Timing diagram")],-1),x=e("p",null,"The following figure does not specify the expiration verification steps of the token, so please design it yourself",-1),m=e("h3",{id:"how-to-get-tokens",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-get-tokens","aria-hidden":"true"},"#"),t(" How to get tokens")],-1),f=i(`<p>● client_secret_basic</p><p>The parameter passing method is to concatenate the clientId and clientSecret with the &#39;:&#39; sign and encode it with Base64 to obtain a string of characters. Put this encoded string in the Authorization header to send the request.</p><h4 id="client-secret-basic" tabindex="-1"><a class="header-anchor" href="#client-secret-basic" aria-hidden="true">#</a> client_secret_basic</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST {{host}}/admin/oauth2/token?grant_type=client_credentials
Authorization:Basic {{Base64(clientId:clientSecret)}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace-the-base-path-in-the-url" tabindex="-1"><a class="header-anchor" href="#replace-the-base-path-in-the-url" aria-hidden="true">#</a> Replace the base path in the URL</h3><p>If the device requests the URL of your server: <code>http://your-domain/url?url=xxxxxxxxxxxx</code><br> You need to change the URL to: <code>http://eview-domain/admin/agps/url?url=xxxxxxxxxxxx</code></p><p>Namely: replace <code>http://your-domain</code> with <code>http://eview-domain/admin/agps</code></p><p>Of course, <code>eview-domain</code> is not an actual domain name, you need to contact the business staff to obtain it</p><h3 id="x-base-path-instructions" tabindex="-1"><a class="header-anchor" href="#x-base-path-instructions" aria-hidden="true">#</a> X-Base-Path instructions</h3>`,9),g={href:"http://your-domain",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Bearer {{Token}}
X-Base-Path: http://www.your-domain.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function _(v,w){const o=a("Mermaid"),s=a("RouterLink"),r=a("ExternalLinkIcon");return c(),h("div",null,[p,x,n(o,{id:"mermaid-6",code:"eJyVU0tOwzAQ3fsUo2wAqUWlYlWkSiA2rFhwgmk8TSwSO/iTEs7AkbgTV8B2QkPSULVZRI7z5vm9N2Nm6M2RTOlRYKaxZKxCbUUqKpQWONUiJUADfkE7yCrT7Q1gqTNWlaRfSNekA7xRToOJnwMk1SXqB/HRI+OOgYzsDpsBFv1pB7iwCcZtInnQwTqN8/V6pGMFOngzLRMbiZzCPxmwOUGKaU4crHolCTUWgjMsbLeC8JzA5QwdkDEq/K6Qx5mGGfUuWj2bBp7vnc2X1wtIC0E+qFJxatlG8c6nQ7FOS5C+na2oUx1FJ4CS7711piSfCvfQRlWgb1QodLq4MLBBz1Ohzb+/PpFzyK2tICfkpM0snOOhEiqt3ptY1QXBxi4nDvMvsfVVfQuFbWIXB+lPMP0TV9R2u7gB0lrp6cxCeTuN+7KI9mdulS7RCiVn/o+plPTOW6ewEzaHy6QkYzCjZAbJMrm6a0fluNT+gqzgnPwi35/bFYWPE/x1EC8cR4tnT9io8oS0+oowU+wHFEGg4Q=="}),m,e("p",null,[t("Please refer to "),n(s,{to:"/evmars/biz/oauth/"},{default:l(()=>[t("Oauth2.0")]),_:1})]),f,e("p",null,[t("X-Base-Path is the interface path that you expose, such as "),e("a",g,[t("http://your-domain"),n(r)])]),b])}const T=d(u,[["render",_],["__file","index.html.vue"]]);export{T as default};