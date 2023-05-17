import{_ as a,X as e,Y as t,$ as p,a3 as n,D as o}from"./framework-cb2a258e.js";const i={},c=n('<h2 id="调用openapi" tabindex="-1"><a class="header-anchor" href="#调用openapi" aria-hidden="true">#</a> 调用OpenApi</h2><h3 id="使用签名的方式" tabindex="-1"><a class="header-anchor" href="#使用签名的方式" aria-hidden="true">#</a> 使用签名的方式</h3><h4 id="验证流程" tabindex="-1"><a class="header-anchor" href="#验证流程" aria-hidden="true">#</a> 验证流程</h4>',3),l=n(`<div class="hint-container tip"><p class="hint-container-title">说明</p><ol><li>图中<code>Signature</code>函数为客户端设置的签名方式,支持<code>MD5</code>和<code>Sha256</code>.</li><li>发起请求的签名信息都需要放到请求头中,而不是请求体.</li></ol></div><h4 id="签名" tabindex="-1"><a class="header-anchor" href="#签名" aria-hidden="true">#</a> 签名</h4><p>平台使用签名来校验客户端请求的完整性以及合法性.</p><p>例:</p><p>ClientId为<code>testId</code>,<br> SecureKey为:<code>testSecure</code>.<br> 客户端请求接口: <code>/api/v1/device/dev0001/log/_query</code>,参数为<code>pageSize=20&amp;pageIndex=0</code>,签名方式为<code>md5</code>.</p><ol><li>将参数key按ascii排序得到: pageIndex=0&amp;pageSize=20</li><li>使用拼接时间戳以及密钥得到: pageIndex=0&amp;pageSize=201574993804802testSecure</li><li>使用<code>md5(&quot;pageIndex=0&amp;pageSize=201574993804802testSecure&quot;)</code>得到<code>837fe7fa29e7a5e4852d447578269523</code></li></ol><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/device?pageIndex=0&amp;pageSize=20
X-Client-Id: testId
X-Timestamp: 1574993804802
X-Sign: 837fe7fa29e7a5e4852d447578269523
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{&quot;status&quot;:200,result:[]}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验签" tabindex="-1"><a class="header-anchor" href="#验签" aria-hidden="true">#</a> 验签</h4><p>使用和签名相同的算法(不需要对响应结果排序):</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token class-name">String</span> secureKey <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//密钥</span>
<span class="token class-name">String</span> responseBody <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span><span class="token comment">//服务端响应结果</span>
<span class="token class-name">String</span> timestampHeader <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span><span class="token comment">//响应头: X-Timestamp</span>
<span class="token class-name">String</span> signHeader <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//响应头: X-Sign</span>

<span class="token class-name">String</span> sign <span class="token operator">=</span> <span class="token class-name">DigestUtils</span><span class="token punctuation">.</span><span class="token function">md5Hex</span><span class="token punctuation">(</span>responseBody<span class="token operator">+</span>timestampHeader<span class="token operator">+</span>secureKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>sign<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>signHeader<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//验签通过</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用token的方式" tabindex="-1"><a class="header-anchor" href="#使用token的方式" aria-hidden="true">#</a> 使用token的方式</h3><p>通过请求接口<code>/api/v1/token</code>来获取<code>X-Access-Token</code>，之后可以使用此token来发起api请求。</p><h3 id="申请token" tabindex="-1"><a class="header-anchor" href="#申请token" aria-hidden="true">#</a> 申请token</h3><p>客户端请求接口<code>/api/v1/token</code><br> 请求方式： POST</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
POST /api/v1/token
X-Sign: 932bbe8a39ae03f568f73a507d87afac
X-Timestamp: 1587719082698 
X-Client-Id: kF**********HRZ  
Content-Type: application/json 

{  
    &quot;expires&quot;: 7200 // 过期时间,单位秒.
}

//返回

{
    &quot;status&quot;:200,
    &quot;result&quot;:&quot;3bcddb719b01da679b88d07acde2516&quot; //token信息
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用token发起请求" tabindex="-1"><a class="header-anchor" href="#使用token发起请求" aria-hidden="true">#</a> 使用token发起请求</h3><p>此处以获取设备123456789012345详情为例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/v1/device/test001/_detail  
X-Access-Token: 3bcddb719b01da679b88d07acde2516  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789012345&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试设备&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evgps&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TCP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;orgId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;deviceType&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;直连设备&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;device&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;离线&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offline&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/127.0.0.1:36982&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1681456206013</span><span class="token punctuation">,</span>
        <span class="token property">&quot;offlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1681456528230</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1672124830209</span><span class="token punctuation">,</span>
        <span class="token property">&quot;registerTime&quot;</span><span class="token operator">:</span> <span class="token number">1672124833132</span><span class="token punctuation">,</span>
        <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{物模型内容在此省略……}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;configuration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;isDebug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parseType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isChina&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isDelayMsg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isHexLog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;trackerType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isIgnoreEvLog&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oauth2-0" tabindex="-1"><a class="header-anchor" href="#oauth2-0" aria-hidden="true">#</a> OAuth2.0</h3><p>平台也支持通过OAuth2.0进行认证,支持: <code>authorization_code</code>和<code>client_credentials</code>以及<code>refresh_token</code>.</p><ul><li>授权地址: http://{domain}/#/user/login</li><li>client_id: 第三方平台中配置的clientId</li><li>ClientSecret: 第三方平台中配置的secureKey</li><li>Token地址: http://{domain}/loctube/oauth2/token</li></ul><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>loctube<span class="token operator">/</span>oauth2<span class="token operator">/</span>token
Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>json

<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span> <span class="token comment">//固定client_credentials</span>
    <span class="token string-property property">&quot;client_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;client_id&quot;</span><span class="token punctuation">,</span>            
    <span class="token string-property property">&quot;client_secret&quot;</span><span class="token operator">:</span><span class="token string">&quot;client_secret&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">响应</span><span class="token operator">:</span>

<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;access_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;access_token&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;refresh_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;expires_in&quot;</span><span class="token operator">:</span><span class="token number">7200</span> <span class="token comment">//有效期,单位秒</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用token请求接口:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>device<span class="token operator">/</span>instance<span class="token operator">/</span>_query
<span class="token literal-property property">Authorization</span><span class="token operator">:</span> bearer access_token

<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>device<span class="token operator">/</span>instance<span class="token operator">/</span>_query<span class="token operator">?</span>access_token<span class="token operator">=</span>access_token
 
<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function r(u,d){const s=o("Mermaid");return e(),t("div",null,[c,p(s,{id:"mermaid-9",code:"eJxtVMtO20AUXeOvsLKogqiFQOqmKkgIqjaqqlYli0oRCzeZEpPEdh2HhyKkFASE5tkAoTwLEi9VIqEqTZwH4Wc8Y3vVX+jYEztOi1f29T3n3HPn2LMSK4Zp/xRFDSTiQHoHPiVAXPZq21coXderdfRzZZBmmHF6cTLKAV72hZKkCs9uVeX62fAHaRx9q8LiBSo2oXJhFd4zpJnxhZapAQeJeXCrSTYL5JeADQEpoOfrsFB2KLvwaW6Wt25hKdst+bkYHoyNiTMUjS83qQer/2lnjaPjNyLgJ976CJ3HVGITcjig3x/AtXN0tGrsFVH+EqZr6Pdn7SpDJBo1tHmpn2ZVZR9+OTVSLb3zlYiYYMwPt3KwuW2yCZifYUUuSSyrStNSFDmiuGyh7Kae3bhj16Ndd2AxhzX1Ske7qxBqbPypy+Fj1wJIv1bZRb92zCIrJyRAe2kJxEWBj4MhF25oGgTx21dgiR70EAeOcp8NG+wlJa21hY4PB/8dHht0N+OEOMdmJSIYBsEIeU6ik1PjR9Y1izW8quTRYQ4vFe5dod2asUvOV1Vy+uqddqDAeuUJTK8bpe9kcy5GrGCk9vX7DUfJdB+A7RS8zGApvBfisB+DqXswCcyBoBxAmZLWOiInNEMNOGSWibAsi6+BHBZCSZg+Q+Vr0ofKDdgukKl6LRjx4rkfpctTIApkYOLnBA5PdbMOCyto5yYCllB2c2J60udD+RJsFkjC1nMo00b5c5yXyMjY/MijyOjY/Cg6aWMN4qJPA67V1Fb3m7DsC7yMs+5fEkF3yMlepbu5XgETsKIY5YKszAn88CKzsLDAfBSkGJOQooAPCiEQsid/AEvErdTacQt4nFuvyEps7OHQ2Zkzia3dOiiKZNGJLzEVw1zYULWBqtvOD4BE3zZltZBjVZWUvnHbO9b/OuzX5kdLUX8BR88oLw=="}),l])}const v=a(i,[["render",r],["__file","open-api.html.vue"]]);export{v as default};
