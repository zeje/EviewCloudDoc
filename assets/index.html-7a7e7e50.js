import{_ as d,X as o,Y as l,$ as a,a0 as e,a2 as t,a1 as h,a3 as i,D as n}from"./framework-cb2a258e.js";const u={},m=e("h3",{id:"时序图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#时序图","aria-hidden":"true"},"#"),t(" 时序图")],-1),_=e("p",null,"下图未明确token的过期校验步骤，请自行设计",-1),p=e("h3",{id:"token获取方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#token获取方式","aria-hidden":"true"},"#"),t(" Token获取方式")],-1),v=i(`<p>● client_secret_basic<br> 传参方式是将 clientId 和 clientSecret 通过 ‘:’ 号拼接，并使用 Base64 进行编码得到一串字符。将此编码字符串放到请求头(Authorization)去发送请求。</p><h4 id="client-secret-basic" tabindex="-1"><a class="header-anchor" href="#client-secret-basic" aria-hidden="true">#</a> client_secret_basic</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST {{host}}/admin/oauth2/token?grant_type=client_credentials
Authorization:Basic {{Base64(clientId:clientSecret)}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="x-base-path说明" tabindex="-1"><a class="header-anchor" href="#x-base-path说明" aria-hidden="true">#</a> X-Base-Path说明</h3>`,4),x={href:"http://your-domain",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Authorization: Bearer {{Token}}
X-Base-Path: http://www.your-domain.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(B,k){const s=n("Mermaid"),r=n("RouterLink"),c=n("ExternalLinkIcon");return o(),l("div",null,[m,_,a(s,{id:"mermaid-6",code:"eJydU11LG0EUfZ9fMeSphUas9KkFodKHvrXQl74Om0uy1Gy2O5MU+qT9MFGsSWlq1aYlq6JB0VUUoxjNn8nc3Tz5F8zuJCS7LH7N0zCce+acc+8lHD7mwdDglc7SFssSYjJL6JpuMkPQFBR0DSjjtHeBT97+pdwshhBanotcFqx3YBXA8pFyfx1LTaz9kAu2XG2E0FDIMmtK/zxEBy/cvfgpvx+FoCxt8lFY7/vgTRETQvrakpOTERHPqec08fCLjyYRfXFot/VL7q24a99E7gMYuOLIyhbW5vF3ibBpQftX6p87sGG5IsvLARWBaQ4U/9Rvqg9H0tO+1BzU06tWqXPRdqsNz17snK7hUgn/fcV6URbn3rzMi8zE2LhK2911sGHLVvmqNa9+iiSdjI2pXZV//+PywcD7nU2qyOTZScitkYqLO2qwc77hVuaGLeqZ7NZmvK1ZbJ7Lhfr75BTjupZ8y0RGgeTmsW8r6iiGGut2d2dRtTHoGs5sqx6O9CCGJz6YjBAmfTb+FGs7KvluddVznPiQfBo1kYNyhe60bZx1LOBmzuAwxkG8BpYC61EiC5yzNCSe0MRE4vGL/rCMDFuM0OFSPDzHgHtkuwLp0ST7HoIVuuc8DWtuzyjA+nNDrgHpFwMC"}),p,e("p",null,[t("请参考 "),a(r,{to:"/zh/evmars/biz/oauth/"},{default:h(()=>[t("Oauth2.0")]),_:1})]),v,e("p",null,[t("X-Base-Path为您对外公开的接口路径，如： "),e("a",x,[t("http://your-domain"),a(c)])]),b])}const L=d(u,[["render",f],["__file","index.html.vue"]]);export{L as default};
