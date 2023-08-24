import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as s,d as t}from"./app-0c6bc767.js";const p={},r=s(`<h1 id="api-unified-response-state" tabindex="-1"><a class="header-anchor" href="#api-unified-response-state" aria-hidden="true">#</a> Api unified response state:</h1><table><thead><tr><th>status code</th><th>description</th><th>schema</th></tr></thead><tbody><tr><td>200</td><td>OK</td><td>ResponseMessageBoolean</td></tr><tr><td>400</td><td>Bad Request</td><td></td></tr><tr><td>401</td><td>Unauthorized</td><td>ResponseMessageTokenState</td></tr><tr><td>403</td><td>Forbidden</td><td>ResponseMessageObject</td></tr><tr><td>404</td><td>Not Found</td><td>ResponseMessageObject</td></tr><tr><td>406</td><td>Not Acceptable</td><td>ResponseMessageObject</td></tr><tr><td>415</td><td>Unsupported Media Type</td><td>ResponseMessageObject</td></tr><tr><td>500</td><td>Internal Server Error</td><td>ResponseMessageObject</td></tr><tr><td>504</td><td>Gateway Timeout</td><td>ResponseMessageObject</td></tr></tbody></table><h2 id="status-200" tabindex="-1"><a class="header-anchor" href="#status-200" aria-hidden="true">#</a> Status-200:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>boolean</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-401" tabindex="-1"><a class="header-anchor" href="#status-401" aria-hidden="true">#</a> Status-401:</h2><p><strong>Response Params</strong>:</p>`,9),o=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"name"),t("th",null,"description"),t("th",null,"type"),t("th",null,"schema")])]),t("tbody",null,[t("tr",null,[t("td",null,"message"),t("td",null,"message content"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"result"),t("td",{text:"登录状态已被锁定,",value:"lock"},"result data,such as:{text=正常, value=normal},{text=已被禁止访问, value=deny},{text=用户未登录, value=expired},{text=用户已在其他地方登录, value=offline},"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"status"),t("td",null,"status code"),t("td",null,"integer(int32)"),t("td",null,"integer(int32)")]),t("tr",null,[t("td",null,"code"),t("td",null,"business code"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"timestamp"),t("td",null,"Timestamp (ms)"),t("td",null,"integer(int64)"),t("td",null,"integer(int64)")])])],-1),d=s(`<p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-403" tabindex="-1"><a class="header-anchor" href="#status-403" aria-hidden="true">#</a> Status-403:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-404" tabindex="-1"><a class="header-anchor" href="#status-404" aria-hidden="true">#</a> Status-404:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-406" tabindex="-1"><a class="header-anchor" href="#status-406" aria-hidden="true">#</a> Status-406:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-415" tabindex="-1"><a class="header-anchor" href="#status-415" aria-hidden="true">#</a> Status-415:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-500" tabindex="-1"><a class="header-anchor" href="#status-500" aria-hidden="true">#</a> Status-500:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="status-504" tabindex="-1"><a class="header-anchor" href="#status-504" aria-hidden="true">#</a> Status-504:</h2><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td>result data</td><td>object</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),i=[r,o,d];function u(l,c){return a(),e("div",null,i)}const k=n(p,[["render",u],["__file","api-response.html.vue"]]);export{k as default};