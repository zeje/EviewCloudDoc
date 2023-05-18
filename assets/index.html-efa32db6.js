import{_ as c,X as s,Y as l,$ as t,a0 as e,a2 as a,a1 as h,a3 as i,D as n}from"./framework-cb2a258e.js";const u={},x=e("h3",{id:"时序图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#时序图","aria-hidden":"true"},"#"),a(" 时序图")],-1),p=e("p",null,"下图未明确token的过期校验步骤，请自行设计",-1),m=e("h3",{id:"token获取方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#token获取方式","aria-hidden":"true"},"#"),a(" Token获取方式")],-1),_=i(`<p><code>client_secret_basic</code> 传参方式是将 clientId 和 clientSecret 通过 ‘:’ 号拼接，并使用 Base64 进行编码得到一串字符。将此编码字符串放到请求头(Authorization)去发送请求。</p><h4 id="client-secret-basic" tabindex="-1"><a class="header-anchor" href="#client-secret-basic" aria-hidden="true">#</a> client_secret_basic</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST {{host}}/admin/oauth2/token?grant_type=client_credentials
Authorization:Basic {{Base64(clientId:clientSecret)}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换url中的base-path" tabindex="-1"><a class="header-anchor" href="#替换url中的base-path" aria-hidden="true">#</a> 替换Url中的base path</h3><p>若设备请求您的服务器的url为：<code>http://your-domain/url?url=xxxxxxxxxxxx</code><br> 您需要将url修改为：<code>http://eview-domain/admin/agps/url?url=xxxxxxxxxxxx</code></p><p>即：将<code>http://your-domain</code>替换为<code>http://eview-domain/admin/agps</code></p><p>当然，<code>eview-domain</code>并不是实际的域名，需要联系业务人员获取</p><h3 id="x-base-path说明" tabindex="-1"><a class="header-anchor" href="#x-base-path说明" aria-hidden="true">#</a> X-Base-Path说明</h3>`,8),b={href:"http://your-domain",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Bearer {{Token}}
X-Base-Path: http://www.your-domain.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(g,w){const d=n("Mermaid"),r=n("RouterLink"),o=n("ExternalLinkIcon");return s(),l("div",null,[x,p,t(d,{id:"mermaid-6",code:"eJydU0tv00AQvu+vWOUEEqlKxalIlag4cAOJC9clGSUWiWO8myBxank0aZU2QYTSR0BxqUpURA0CEVBd8meyY+eUv4DtTZTYsuhjT6vVNzPfY5ZweFoGPQN3NZYzWZEQg5lCy2gG0wXNQkXLAGWc+hd45p38lYfVCCJT5qJUBPMhmBUwA6Q8OcBaD9ubcsOSu90IGipFZi5rz6fo8IW7Z2/k6x8RKMsZfBbmjw/fVGNCyJhbemkpRmKRenYPv78I0CTGLwntOm/l1x1375UoPQEdd2zZPML2Or6rEVYQdHylwblAN2w0ZWM7bEWgwIHi+87/6qOW+Ny3epN6OnJqg7O+2+p6Vn3wew+3avjhJXaqsrp2/05Z5Bfm5pXb7hcbu5Z0GiNnXU2KOZ1OtKnfkvsfcfvbRPuFRSrL5J9fEbV6NsnuuEDc7+PmQdks+FMfMw4PmMiPnPrg9JPbXJsm52sftle8o1XsncqNzqP0MuNaJh2gFUge/gzUxoUmTexYw+O6SjcME1c+q2hnoknok+xXXgiD3pq/ie1jFciwtevZdrJ3QRu1qJNyhR70LVy1TeBGSecwx0HcA5YF81qqCJyzHKRu0NRC6vrt8Q7N7GAC0elfWaRX9THsPfPpQupxJ8cawp91yTWb1pzvUYgN1on8A6f7EA4="}),m,e("p",null,[a("请参考 "),t(r,{to:"/zh/evmars/biz/oauth/"},{default:h(()=>[a("Oauth2.0")]),_:1})]),_,e("p",null,[a("X-Base-Path为您对外公开的接口路径，如： "),e("a",b,[a("http://your-domain"),t(o)])]),v])}const N=c(u,[["render",f],["__file","index.html.vue"]]);export{N as default};
