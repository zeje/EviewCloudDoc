import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as k,b as p,w as a,f as o,e as s,d as n}from"./app-cbe19b05.js";const d={},m=o('<h2 id="调用openapi" tabindex="-1"><a class="header-anchor" href="#调用openapi" aria-hidden="true">#</a> 调用OpenApi</h2><h3 id="使用签名的方式" tabindex="-1"><a class="header-anchor" href="#使用签名的方式" aria-hidden="true">#</a> 使用签名的方式</h3><h4 id="验证流程" tabindex="-1"><a class="header-anchor" href="#验证流程" aria-hidden="true">#</a> 验证流程</h4>',3),v=o(`<div class="hint-container tip"><p class="hint-container-title">说明</p><ol><li>图中<code>Signature</code>函数为客户端设置的签名方式,支持<code>MD5</code>和<code>Sha256</code>.</li><li>发起请求的签名信息都需要放到请求头中,而不是请求体.</li></ol></div><h4 id="签名" tabindex="-1"><a class="header-anchor" href="#签名" aria-hidden="true">#</a> 签名</h4><p>平台使用签名来校验客户端请求的完整性以及合法性.</p><ul><li>get</li></ul><p>例:</p><p>ClientId为<code>testId</code>,<br> SecureKey为:<code>testSecure</code>.<br> 客户端请求接口: <code>/api/v1/device/dev0001/log/_query</code>,参数为<code>pageSize=20&amp;pageIndex=0</code>,签名方式为<code>md5</code>.</p><ol><li>将参数key按ascii排序得到: pageIndex=0&amp;pageSize=20</li><li>使用拼接时间戳以及密钥得到: pageIndex=0&amp;pageSize=201574993804802testSecure</li><li>使用<code>md5(&quot;pageIndex=0&amp;pageSize=201574993804802testSecure&quot;)</code>得到<code>837fe7fa29e7a5e4852d447578269523</code></li></ol><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/device?pageIndex=0&amp;pageSize=20
X-Client-Id: testId
X-Timestamp: 1574993804802
X-Sign: 837fe7fa29e7a5e4852d447578269523
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{&quot;status&quot;:200,result:[]}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>post</li></ul><p>ClientId为<code>testId</code>,<br> SecureKey为:<code>testSecure</code>.<br> 客户端请求接口: <code>/device-instance</code>,签名方式为<code>md5</code>.<br> 请求体为:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /device-instance
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请特别注意，假如您的请求体为，您需要保证签名与POST的请求体的内容是完全一致的，一个字符的差异都会导致接口请求失败。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789088888&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;katchu&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
X-Timestamp: 1574994269075
X-Sign: c23faa3c46784ada64423a8bba433f25

{&quot;status&quot;:200,result:[]}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参考加签算法" tabindex="-1"><a class="header-anchor" href="#参考加签算法" aria-hidden="true">#</a> 参考加签算法</h4>`,21),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("org"),n("span",{class:"token punctuation"},"."),s("apache"),n("span",{class:"token punctuation"},"."),s("commons"),n("span",{class:"token punctuation"},"."),s("codec"),n("span",{class:"token punctuation"},"."),s("binary"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Hex")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("org"),n("span",{class:"token punctuation"},"."),s("apache"),n("span",{class:"token punctuation"},"."),s("commons"),n("span",{class:"token punctuation"},"."),s("codec"),n("span",{class:"token punctuation"},"."),s("digest"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"DigestUtils")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("security"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"MessageDigest")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token operator"},"*")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},"."),s("stream"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"Collectors")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OpenApiUtils"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token function"},"signByQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" timestamp"),n("span",{class:"token punctuation"},","),s(`
                                     `),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" secureKey"),n("span",{class:"token punctuation"},","),s(`
                                     `),n("span",{class:"token class-name"},"MessageDigest"),s(" digest"),n("span",{class:"token punctuation"},","),s(`
                                     `),n("span",{class:"token class-name"},"Map"),n("span",{class:"token operator"},"<"),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),s(" query"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" param "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"TreeMap"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),s("query"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entrySet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),s("e "),n("span",{class:"token operator"},"->"),s(" e"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),s("e "),n("span",{class:"token operator"},"->"),s(" e"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"="'),n("span",{class:"token punctuation"},")"),s(`
                           `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(`
                                   `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},'""'),s(`
                                   `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token class-name"},"Arrays"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stream"),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"collect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Collectors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"joining"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"collect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Collectors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"joining"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"&"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("param"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("secureKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Hex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"encodeHexString"),n("span",{class:"token punctuation"},"("),s("digest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"digest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token class-name"},"String"),s(),n("span",{class:"token function"},"signByPost"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" timestamp"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(" secureKey"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token class-name"},"MessageDigest"),s(" digest"),n("span",{class:"token punctuation"},","),s(`
                                    `),n("span",{class:"token class-name"},"String"),s(" jsonString"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("jsonString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("secureKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Hex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"encodeHexString"),n("span",{class:"token punctuation"},"("),s("digest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"digest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-csharp line-numbers-mode","data-ext":"cs"},[n("pre",{class:"language-csharp"},[n("code",null,[n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("Microsoft"),n("span",{class:"token punctuation"},"."),s("Extensions"),n("span",{class:"token punctuation"},"."),s("Primitives")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("System"),n("span",{class:"token punctuation"},"."),s("Security"),n("span",{class:"token punctuation"},"."),s("Cryptography")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"using"),s(),n("span",{class:"token namespace"},[s("System"),n("span",{class:"token punctuation"},"."),s("Text")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"namespace"),s(),n("span",{class:"token namespace"},"EvmarsSign"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OpenApiUtils"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"signByQuery"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" timestamp"),n("span",{class:"token punctuation"},","),s(`
                                     `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" secureKey"),n("span",{class:"token punctuation"},","),s(`
                                     `),n("span",{class:"token class-name"},[s("IEnumerable"),n("span",{class:"token punctuation"},"<"),s("KeyValuePair"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},","),s(" StringValues"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(" query"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" paramString "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"&"'),n("span",{class:"token punctuation"},","),s(` query
               `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"OrderBy"),n("span",{class:"token punctuation"},"("),s("it "),n("span",{class:"token operator"},"=>"),s(" it"),n("span",{class:"token punctuation"},"."),s("Key"),n("span",{class:"token punctuation"},")"),s(`
               `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Select"),n("span",{class:"token punctuation"},"("),s("it "),n("span",{class:"token operator"},"=>"),s(`
               `),n("span",{class:"token punctuation"},"{"),s(`
                   `),n("span",{class:"token keyword"},"return"),s(" it"),n("span",{class:"token punctuation"},"."),s("Key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'"="'),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},","),s(" it"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
               `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token class-name"},"MD5"),s(" md5 "),n("span",{class:"token operator"},"="),s(" MD5"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

            `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" bytes "),n("span",{class:"token operator"},"="),s(" Encoding"),n("span",{class:"token punctuation"},"."),s("Default"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBytes"),n("span",{class:"token punctuation"},"("),s("paramString"),n("span",{class:"token punctuation"},")"),s(`
                   `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Concat"),n("span",{class:"token punctuation"},"("),s(`
                   Encoding`),n("span",{class:"token punctuation"},"."),s("Default"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBytes"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},")"),s(`
                   `),n("span",{class:"token punctuation"},")"),s(`
                   `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Concat"),n("span",{class:"token punctuation"},"("),s(`
                   secureKey
                   `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"ToHexString"),n("span",{class:"token punctuation"},"("),s("md5"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ComputeHash"),n("span",{class:"token punctuation"},"("),s("bytes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"signByPost"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" timestamp"),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" secureKey"),n("span",{class:"token punctuation"},","),s(`
                                        `),n("span",{class:"token class-name"},"String"),s(" jsonString"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"MD5"),s(" md5 "),n("span",{class:"token operator"},"="),s(" MD5"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" bytes "),n("span",{class:"token operator"},"="),s(" Encoding"),n("span",{class:"token punctuation"},"."),s("Default"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBytes"),n("span",{class:"token punctuation"},"("),s("jsonString"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Concat"),n("span",{class:"token punctuation"},"("),s(`
                    Encoding`),n("span",{class:"token punctuation"},"."),s("Default"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetBytes"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Concat"),n("span",{class:"token punctuation"},"("),s(`
                    secureKey
                    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"ToHexString"),n("span",{class:"token punctuation"},"("),s("md5"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ComputeHash"),n("span",{class:"token punctuation"},"("),s("bytes"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string")]),s(),n("span",{class:"token function"},"ToHexString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),s(" bytes"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"string")]),s(" hexString "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"."),s("Empty"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bytes "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token class-name"},"StringBuilder"),s(" strB "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"StringBuilder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

                `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"int")]),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" bytes"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    strB`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Append"),n("span",{class:"token punctuation"},"("),s("bytes"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"x2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                hexString `),n("span",{class:"token operator"},"="),s(" strB"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ToString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" hexString"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" java"),n("span",{class:"token punctuation"},"."),s("security"),n("span",{class:"token punctuation"},"."),s(`MessageDigest

`),n("span",{class:"token keyword"},"object"),s(" OpenApiUtils "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"val"),s(" digest "),n("span",{class:"token operator"},"="),s(" MessageDigest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"MD5"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation builtin"},"@OptIn"),n("span",{class:"token punctuation"},"("),s("ExperimentalStdlibApi"),n("span",{class:"token operator"},"::"),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"signByQuery"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(" secureKey"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(" digest"),n("span",{class:"token operator"},":"),s(" MessageDigest"),n("span",{class:"token punctuation"},","),s(" query"),n("span",{class:"token operator"},":"),s(" Map"),n("span",{class:"token operator"},"<"),s("String"),n("span",{class:"token punctuation"},","),s(" String"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" String "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"val"),s(" param "),n("span",{class:"token operator"},"="),s(" query"),n("span",{class:"token punctuation"},"."),s("entries"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"joinToString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"&"')]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"'),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token expression"},[s("it"),n("span",{class:"token punctuation"},"."),s("key")]),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"="),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token expression"},[s("it"),n("span",{class:"token punctuation"},"."),s("value")]),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("param"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("secureKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" digest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"digest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toHexString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation builtin"},"@OptIn"),n("span",{class:"token punctuation"},"("),s("ExperimentalStdlibApi"),n("span",{class:"token operator"},"::"),n("span",{class:"token keyword"},"class"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"signByPost"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(" secureKey"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(" digest"),n("span",{class:"token operator"},":"),s(" MessageDigest"),n("span",{class:"token punctuation"},","),s(" jsonString"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" String "),n("span",{class:"token punctuation"},"{"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("jsonString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("timestamp"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        digest`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("secureKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toByteArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" digest"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"digest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toHexString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-object-c line-numbers-mode","data-ext":"object-c"},[n("pre",{class:"language-object-c"},[n("code",null,`
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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"import"),s(" CryptoJS "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'crypto-js'"),s(`
 `),n("span",{class:"token comment"},`/*
   @param query 对象参数
   @param time 时间戳参数
   @param secureVal 签名秘钥
   @description GET接口签名方式
*/`),s(` 
  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"signByQuery"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("query"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},","),s(" secureVal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),s("query"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token operator"},"<="),n("span",{class:"token number"},"0"),n("span",{class:"token operator"},"||"),s("time"),n("span",{class:"token operator"},"=="),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" secureKey"),n("span",{class:"token operator"},"="),s("secureVal"),n("span",{class:"token comment"},"// 签名秘钥"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" keys"),n("span",{class:"token operator"},"="),s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("query"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" signStr"),n("span",{class:"token operator"},"="),s("keys"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" value "),n("span",{class:"token operator"},"="),s(" query"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),s(),n("span",{class:"token operator"},"=>"),s(" key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'='"),s(),n("span",{class:"token operator"},"+"),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"','"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'='"),s(),n("span",{class:"token operator"},"+"),s(" value"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'&'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("secureKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" sign"),n("span",{class:"token operator"},"="),s(" CryptoJS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MD5"),n("span",{class:"token punctuation"},"("),s("signStr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` sign
  `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token comment"},`/*
   @param jsonString 字符串参数，将参数JSON.stringify。作为字符串传入
   @param time 时间戳参数
   @param secureVal 签名秘钥
   @description POST接口签名方式
*/`),s(` 
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"signByPost"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("jsonString"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},","),s(" secureVal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("jsonString"),n("span",{class:"token operator"},"=="),n("span",{class:"token string"},'""'),n("span",{class:"token operator"},"||"),s("time"),n("span",{class:"token operator"},"=="),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" secureKey"),n("span",{class:"token operator"},"="),s("secureVal"),n("span",{class:"token comment"},"//签名秘钥"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" str"),n("span",{class:"token operator"},"="),s("jsonString"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),s("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),s("secureKey"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" normalizedInput "),n("span",{class:"token operator"},"="),s(" CryptoJS"),n("span",{class:"token punctuation"},"."),s("enc"),n("span",{class:"token punctuation"},"."),s("Utf8"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parse"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" sign"),n("span",{class:"token operator"},"="),s(" CryptoJS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"MD5"),n("span",{class:"token punctuation"},"("),s("normalizedInput"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),s("CryptoJS"),n("span",{class:"token punctuation"},"."),s("enc"),n("span",{class:"token punctuation"},"."),s("Hex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" sign"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`),n("span",{class:"token comment"},`/*
  示例：
*/`),s(`
http`),n("span",{class:"token punctuation"},"."),s("interceptors"),n("span",{class:"token punctuation"},"."),s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"config"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* 请求之前拦截器。可以使用async await 做异步操作 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" time"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" secureKey"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VITE_SECUREKEY"),n("span",{class:"token comment"},"// 签名秘钥"),s(`
    config`),n("span",{class:"token punctuation"},"."),s("header "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token operator"},"..."),s("config"),n("span",{class:"token punctuation"},"."),s("header"),n("span",{class:"token punctuation"},","),s(`
	    `),n("span",{class:"token string-property property"},"'X-Client-Id'"),n("span",{class:"token operator"},":"),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VITE_CLIENTID"),n("span",{class:"token punctuation"},","),s(`
	    `),n("span",{class:"token string-property property"},"'X-Timestamp'"),n("span",{class:"token operator"},":"),s("time"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("method"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"toLocaleUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"POST"'),n("span",{class:"token operator"},":"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" isHasVal"),n("span",{class:"token operator"},"="),s("Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" value"),n("span",{class:"token operator"},"="),s("isHasVal "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
        config`),n("span",{class:"token punctuation"},"."),s("header"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'X-Sign'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token function"},"signByPost"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},","),s("secureKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token operator"},":"),s(`
        config`),n("span",{class:"token punctuation"},"."),s("header"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'X-Sign'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token function"},"signByQuery"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("params"),n("span",{class:"token operator"},"||"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},","),s("secureKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},`/*
     if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
       return Promise.reject(config)
     }
     */`),s(`
    `),n("span",{class:"token keyword"},"return"),s(" config"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"config"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// todo"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=o(`<h4 id="验签" tabindex="-1"><a class="header-anchor" href="#验签" aria-hidden="true">#</a> 验签</h4><p>使用和签名相同的算法(不需要对响应结果排序):</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function w(x,N){const i=c("Mermaid"),l=c("CodeTabs");return r(),k("div",null,[m,p(i,{id:"mermaid-9",code:"eJx1VF1P2lAYvra/4oSLBeOaRZPdLHGJ0WUjy7JlcrGEeNHRM6lA25WiEmLCNCqOz6Hi/JwmfmWJ4DIHFVD/DOe0vdpf2GkPlLJNrg5v3+d5n+ftczqtcHII+CcYZiAeg8pb+DEOY6pX3zjH6bpRreMfi4OAZZ+C+fGIAEXVxydpFR1ftbULgL9WUfEUFxtIOwXvWNrE+vgFZsBBEDxps0imofoCcjxUAka+jgplh4pAJ4VpEaBSlhz9QpSI4KLyFAPIz03kIdN+t7Lm/sFrGYpjb3yUwmOxc3E1FDDudtHyCd5fMreLOH+G0jX865N+ngHouobXzoyjbFvbQZ+PzFTTuP1CB1hAwo3Wc6ixYTFJhJvlZCFJ7bW1hj1NFui0BRvVberZizn2PPrFLSrmyEyjcqvfVCg1MfrE5e5hxzTt1Stb+OemVeDUuAKBFygwJktiDA65MEOTMEievoQJMOih6p2pfRa6YC8t6c11fLA3+LdwYs7dTFLgvCL7rQdDMBim/5P48Mj8nnVpAW0tj/dyZJlo+xxv1cytK1LKGUs3+q6G6pXHKL1ilr7RbbmYCLOZ2jHuVp0JlusAaqXQWYaMIPugzvoxhLoHU+AMDKoBnCnpzX36VqaYAYfMFh9SVfkVVEMSn0TpY1y+oH24fI1aBaqq10IQz5/5cbo8ASNQhRZ+RhKIqssVVFjEm5dhmMDZtbHJcZ8P50uoUQBoJYczLZw/IfkID4/ODj8Ij4zOjuDDFuGnDvr40XKt3exk3rYuiSrJtT8hw47A8V6ls7VegRBwshwRgpwqSOKjeXZubo79IClRNq5EoBiUeMh3VdtY62DvIdbNVMDjHL0yp3DR/yerG6z+4VS9fTvUEFScoLpJFfr5AO8lPnE/N02tE3S6iigRRNZQvcbVDeezQC9I57r1TXWjOmLtM81JW0sZq1e9nPzT0X1s3XyG+QP91jjB"}),v,p(l,{id:"94",data:[{id:"java"},{id:"C#"},{id:"kotlin"},{id:"object-c"},{id:"nodejs"},{id:"dart"}],active:0,"tab-id":"shell"},{title0:a(({value:t,isActive:e})=>[s("java")]),title1:a(({value:t,isActive:e})=>[s("C#")]),title2:a(({value:t,isActive:e})=>[s("kotlin")]),title3:a(({value:t,isActive:e})=>[s("object-c")]),title4:a(({value:t,isActive:e})=>[s("nodejs")]),title5:a(({value:t,isActive:e})=>[s("dart")]),tab0:a(({value:t,isActive:e})=>[b]),tab1:a(({value:t,isActive:e})=>[g]),tab2:a(({value:t,isActive:e})=>[y]),tab3:a(({value:t,isActive:e})=>[S]),tab4:a(({value:t,isActive:e})=>[q]),tab5:a(({value:t,isActive:e})=>[f]),_:1}),h])}const _=u(d,[["render",w],["__file","open-api.html.vue"]]);export{_ as default};
