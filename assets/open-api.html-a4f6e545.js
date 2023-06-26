import{_ as a,X as e,Y as t,$ as o,a3 as n,D as p}from"./framework-cb2a258e.js";const i={},c=n('<h2 id="calling-openapi" tabindex="-1"><a class="header-anchor" href="#calling-openapi" aria-hidden="true">#</a> calling OpenApi</h2><h3 id="how-to-use-signature" tabindex="-1"><a class="header-anchor" href="#how-to-use-signature" aria-hidden="true">#</a> How to use signature</h3><h4 id="verification-process" tabindex="-1"><a class="header-anchor" href="#verification-process" aria-hidden="true">#</a> Verification process</h4>',3),r=n(`<div class="hint-container info"><p class="hint-container-title">description</p><ol><li>The <code>Signature</code> function in the figure sets the signature mode for the client, and supports \`md5&#39; and Sha256&#39;.</li><li>The signature information of a request needs to be put in the request header, not the request body.</li></ol></div><h4 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h4><p>The platform uses signatures to verify the integrity and legality of client requests.</p><ul><li>get</li></ul><p>Example:</p><p>ClientId is <code>testId</code>,<br> SecureKey is <code>testSecure</code>.<br> Client request interface: <code>/api/v1/device/dev0001/log/_query</code>, parameter <code>pageSize=20&amp;pageIndex=0</code>, and signature method <code>md5</code>.</p><ol><li>the parameter key is sorted by ascii: <code>pageIndex=0&amp;pageSize=20</code></li><li>Using the splicing timestamp and key, we get: <code>pageIndex=0&amp;pageSize=201574993804802testSecure</code></li><li>Use <code>md5(&quot;pageIndex=0&amp;pageSize=201574993804802testSecure&quot;)</code> to get <code>837fe7fa29e7a5e4852d447578269523</code></li></ol><p>Example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/device?pageIndex=0&amp;pageSize=20
X-Client-Id: testId
X-Timestamp: 1574993804802
X-Sign: 837fe7fa29e7a5e4852d447578269523
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{&quot;status&quot;:200,result:[]}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>post</li></ul><p>ClientId is <code>testId</code>,<br> SecureKey is <code>testSecure</code>.<br> Client request interface: <code>/device-instance</code>, and signature method <code>md5</code>.<br> The request body:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /device-instance
X-Client-Id: testId
X-Timestamp: 1687750302000
X-Sign: 921eae6047759d3ad12e3dcb16347d6a
Content-Type: application/json

{
  &quot;id&quot;: &quot;123456789088888&quot;,
  &quot;name&quot;: &quot;123456789088888&quot;,
  &quot;productId&quot;: &quot;katchu&quot;,
  &quot;productName&quot;: &quot;katchu&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sign-off" tabindex="-1"><a class="header-anchor" href="#sign-off" aria-hidden="true">#</a> Sign-off</h4><p>Use the same algorithm as the signature (there is no need to sort the response results):</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token class-name">String</span> secureKey <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//key</span>
<span class="token class-name">String</span> responseBody <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//Server response result</span>
<span class="token class-name">String</span> timestampHeader <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//response header: X-Timestamp</span>
<span class="token class-name">String</span> signHeader <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span> <span class="token comment">//response header: X-Sign</span>

<span class="token class-name">String</span> sign <span class="token operator">=</span> <span class="token class-name">DigestUtils</span><span class="token punctuation">.</span><span class="token function">md5Hex</span><span class="token punctuation">(</span>responseBody<span class="token operator">+</span>timestampHeader<span class="token operator">+</span>secureKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>sign<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>signHeader<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//Pass the inspection.</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-way-to-use-token" tabindex="-1"><a class="header-anchor" href="#the-way-to-use-token" aria-hidden="true">#</a> The way to use token</h3><p>Get <code>X-Access-Token</code> by requesting interface <code>/api/v1/token</code>, and then use this token to initiate API requests.</p><h3 id="apply-for-token" tabindex="-1"><a class="header-anchor" href="#apply-for-token" aria-hidden="true">#</a> Apply for token</h3><p>Client requests interface <code>/api/v1/token</code><br> Request method: POST</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
POST /api/v1/token
X-Sign: 932bbe8a39ae03f568f73a507d87afac
X-Timestamp: 1587719082698 
X-Client-Id: kF**********HRZ  
Content-Type: application/json 

{  
    &quot;expires&quot;: 7200 // Expiration time, in seconds.
}

//Return

{
    &quot;status&quot;:200,
    &quot;result&quot;:&quot;3bcddb719b01da679b88d07acde2516&quot; //token information.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initiate-a-request-using-token" tabindex="-1"><a class="header-anchor" href="#initiate-a-request-using-token" aria-hidden="true">#</a> Initiate a request using token</h3><p>Here is an example of obtaining the details of equipment 123456789012345.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/v1/device/test001/_detail
X-Access-Token: 3bcddb719b01da679b88d07acde2516
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Response result:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789012345&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test device&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;evgps&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TCP&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;orgId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;deviceType&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;directly connected device&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;device&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offline&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;offline&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/127.0.0.1:36982&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1681456206013</span><span class="token punctuation">,</span>
        <span class="token property">&quot;offlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1681456528230</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1672124830209</span><span class="token punctuation">,</span>
        <span class="token property">&quot;registerTime&quot;</span><span class="token operator">:</span> <span class="token number">1672124833132</span><span class="token punctuation">,</span>
        <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{ the content of the physical model is omitted here ...}&quot;</span><span class="token punctuation">,</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oauth2-0" tabindex="-1"><a class="header-anchor" href="#oauth2-0" aria-hidden="true">#</a> OAuth2.0</h3><p>The platform also supports authentication through <code>OAuth2.0</code>, and supports: <code>authorization_code</code> and <code>client_credentials</code> and <code>refresh_token</code>.</p><p>+Authorized address: http://{domain}/#/user/login.<br> +client_id: clientId configured in the third-party platform.<br> +ClientSecret: secureKey configured in the third-party platform.<br> +Token address: http://{domain}/loctube/oauth2/token.</p><p>For example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>loctube<span class="token operator">/</span>oauth2<span class="token operator">/</span>token
Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>json

<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;grant_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span> 
    <span class="token string-property property">&quot;client_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;client_id&quot;</span><span class="token punctuation">,</span>            
    <span class="token string-property property">&quot;client_secret&quot;</span><span class="token operator">:</span><span class="token string">&quot;client_secret&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">Response</span><span class="token operator">:</span>

<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;access_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;access_token&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;refresh_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;expires_in&quot;</span><span class="token operator">:</span><span class="token number">7200</span> <span class="token comment">//Expiration period, unit second.</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use token request interface:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>device<span class="token operator">/</span>instance<span class="token operator">/</span>_query
<span class="token literal-property property">Authorization</span><span class="token operator">:</span> bearer access_token

<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">POST</span> <span class="token operator">/</span>device<span class="token operator">/</span>instance<span class="token operator">/</span>_query<span class="token operator">?</span>access_token<span class="token operator">=</span>access_token

<span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function l(u,d){const s=p("Mermaid");return e(),t("div",null,[c,o(s,{id:"mermaid-9",code:"eJx1VEtu2zAQXUenGHhRJEiVIAG6KZoUhRO0btFN7UUAIwtamkiMJVIlR3EMIzfoqnfsPTr8iFaM1hsNP/PmzZtHV0Z0NSxusuyot2h+4M8eLR2b8D2BPL+G52kjUdGs3JUaLdQoSjQWPpyvzDUUWpGQKi7v8nA3n5UfX7KjlMk4W7QOrEL64gGWHL3GusvnslI+/PP7V9xayJaJiLa7z4B/Y8SJ0qA7VLnoJETGE1dD9FQvbxWhAaoRRFGgtZ6p0Q10Rvt14C9UCfiMRU/oL696K5U7bnQli7NQ1QFyQYO208qiqzEU3kkLknzqIZcXn5t2kwQ2STBxDXsKvOcxhhJRmfcjAd6O9HGBoN5wc02ljaS6jf3sT44T2OkI5XTOvRr8hls4mYTuEp+DFoeY3RBJcdA3dHLYl9Lj62ylNGTvn6LGYh3Wu6mLuVMR2i3lwwMaVAVG+iukDaKKqxHvqJJ5ckPlzcF+QilNnAbvoJWKp2jPgu6jqs4reu2t4XedRss5CUPAzu2wIKnjGPhEqirocoDg3BZADD5yzjJ8hmnfZ0cJ3LddE3XfkWpd7r72ZcWww1VodYmB5f6SK/H5dgHawA02SOhLPWqp2CaaqTq9OmFEy2cG1jzA6OCi0KZ08KTh03w6m42szUkKbNdIVphtKhXfCafri6unizfry6unS3jQphV0Fv3wmpNmCANc1K1p2wVe7jHxO1zwOnU33e/FEew3HJLoHA/hxD5/zjebTe7q5r1p2ACsSJk69tku8EK6oXhLLycpPPZK/NvYg68PyvtGfAkfpYcyRh0GtNLl9v/g4dWkhxb0aJkR7uKXnevw4z/Aq3Lj65FmSMnz4TXQ3mQHNyxPf/iHy7K/gpfxVw=="}),r])}const k=a(i,[["render",l],["__file","open-api.html.vue"]]);export{k as default};
