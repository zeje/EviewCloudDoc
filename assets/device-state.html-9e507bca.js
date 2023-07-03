import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,f as n,d as t}from"./app-36fd68d3.js";const o={},r=n('<h2 id="获取指定id设备在线状态" tabindex="-1"><a class="header-anchor" href="#获取指定id设备在线状态" aria-hidden="true">#</a> 获取指定ID设备在线状态</h2><p><strong>接口地址</strong>:<code>/device/instance/{id}/state</code><br><strong>请求方式</strong>:<code>GET</code><br><strong>请求数据类型</strong>:<code>application/x-www-form-urlencoded</code><br><strong>响应数据类型</strong>:<code>*/*</code><br><strong>接口描述</strong>:<br><strong>请求参数</strong>:<br><strong>请求参数</strong>:</p><table><thead><tr><th>参数名称</th><th>参数说明</th><th>请求类型</th><th>是否必须</th><th>数据类型</th><th>schema</th></tr></thead><tbody><tr><td>id</td><td>设备ID</td><td>path</td><td>true</td><td>string</td><td></td></tr></tbody></table><p><strong>响应状态码-200</strong>:<br><strong>响应参数</strong>:</p>',4),l=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数名称"),t("th",null,"参数说明"),t("th",null,"类型"),t("th",null,"schema")])]),t("tbody",null,[t("tr",null,[t("td",null,"message"),t("td",null,"消息提示"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"result"),t("td",{text:"在线,",value:"online"},"数据内容,可用值:{text=未启用, value=notActive},{text=离线, value=offline},"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"status"),t("td",null,"状态码"),t("td",null,"integer(int32)"),t("td",null,"integer(int32)")]),t("tr",null,[t("td",null,"code"),t("td",null,"业务码"),t("td",null,"string"),t("td")]),t("tr",null,[t("td",null,"timestamp"),t("td",null,"时间戳(毫秒)"),t("td",null,"integer(int64)"),t("td",null,"integer(int64)")])])],-1),d=n(`<p><strong>响应示例</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[r,l,d];function i(u,c){return e(),a("div",null,p)}const m=s(o,[["render",i],["__file","device-state.html.vue"]]);export{m as default};
