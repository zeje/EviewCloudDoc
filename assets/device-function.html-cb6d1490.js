import{_ as t,X as n,Y as s,a3 as a}from"./framework-c6b0b2c6.js";const e={},d=a(`<h2 id="发送调用设备功能指令" tabindex="-1"><a class="header-anchor" href="#发送调用设备功能指令" aria-hidden="true">#</a> 发送调用设备功能指令</h2><p><strong>接口地址</strong>:<code>/device/instance/{deviceId}/function/{functionId}</code><br><strong>请求方式</strong>:<code>POST</code><br><strong>请求数据类型</strong>:<code>application/json</code><br><strong>响应数据类型</strong>:<code>*/*</code></p><p><strong>接口描述</strong>:</p><p>请求示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
	<span class="token property">&quot;参数&quot;</span><span class="token operator">:</span><span class="token string">&quot;值&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求参数</strong></p><table><thead><tr><th>参数名称</th><th>参数说明</th><th>请求类型</th><th>是否必须</th><th>数据类型</th><th>schema</th></tr></thead><tbody><tr><td>deviceId</td><td></td><td>path</td><td>true</td><td>string</td><td></td></tr><tr><td>functionId</td><td></td><td>path</td><td>true</td><td>string</td><td></td></tr></tbody></table><p><strong>响应状态码-200</strong>:<br><strong>响应参数</strong>:</p><table><thead><tr><th>参数名称</th><th>参数说明</th><th>类型</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>消息提示</td><td>string</td><td></td></tr><tr><td>result</td><td>数据内容</td><td>array</td><td></td></tr><tr><td>status</td><td>状态码</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>业务码</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>时间戳(毫秒)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>响应示例</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[d];function r(p,i){return n(),s("div",null,o)}const l=t(e,[["render",r],["__file","device-function.html.vue"]]);export{l as default};
