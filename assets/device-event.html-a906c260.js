import{_ as t,W as n,X as s,a2 as a}from"./framework-b5158923.js";const e={},p=a(`<h2 id="query-device-event" tabindex="-1"><a class="header-anchor" href="#query-device-event" aria-hidden="true">#</a> query device event</h2><p><strong>url</strong>:<code>/api/v1/device/{deviceId}/event/{eventId}/_query</code><br><strong>method</strong>:<code>POST</code><br><strong>produces</strong>:<code>application/json</code><br><strong>consumes</strong>:<code>*/*</code><br><strong>Note</strong>:</p><p>According to the different Object models, the corresponding fields are returned.</p><p>If the object model is defined as object type, the corresponding attributes; otherwise, the value field is event data.</p><p><strong>Request Example</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;includes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;excludes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;paging&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;firstPageIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;pageIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;sorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;context&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;orderBy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;parallelPager&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>in</th><th>require</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>deviceId</td><td></td><td>path</td><td>true</td><td>string</td><td></td></tr><tr><td>eventId</td><td></td><td>path</td><td>true</td><td>string</td><td></td></tr><tr><td>queryParamEntity</td><td>QueryParamEntity</td><td>body</td><td>true</td><td>QueryParamEntity</td><td>QueryParamEntity</td></tr><tr><td>terms</td><td></td><td></td><td>false</td><td>array</td><td>Term</td></tr><tr><td>column</td><td>column</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>value</td><td>value</td><td></td><td>false</td><td>object</td><td></td></tr><tr><td>type</td><td>type,such as:or,and</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>termType</td><td>term type</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>options</td><td>options</td><td></td><td>false</td><td>array</td><td>string</td></tr><tr><td>terms</td><td>terms</td><td></td><td>false</td><td>array</td><td>Term</td></tr><tr><td>includes</td><td>columns to select</td><td></td><td>false</td><td>array</td><td>string</td></tr><tr><td>excludes</td><td>columns to exclude</td><td></td><td>false</td><td>array</td><td>string</td></tr><tr><td>paging</td><td>Pagination or not</td><td></td><td>false</td><td>boolean</td><td></td></tr><tr><td>firstPageIndex</td><td>first page index</td><td></td><td>false</td><td>integer(int32)</td><td></td></tr><tr><td>pageIndex</td><td>page index</td><td></td><td>false</td><td>integer(int32)</td><td></td></tr><tr><td>pageSize</td><td>page size</td><td></td><td>false</td><td>integer(int32)</td><td></td></tr><tr><td>sorts</td><td></td><td></td><td>false</td><td>array</td><td>Sort</td></tr><tr><td>name</td><td>column name</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>order</td><td>order way,such as:asc,desc</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>value</td><td>Specify value ordering</td><td></td><td>false</td><td>object</td><td></td></tr><tr><td>context</td><td>Context information</td><td></td><td>false</td><td>object</td><td></td></tr><tr><td>where</td><td>Where conditional expression cannot coexist with terms parameter. Syntax: name = Zhang San and age &gt; 16.</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>orderBy</td><td>OrderBy conditional expression, which cannot coexist with the sorts parameter. Syntax: age asc,createTime desc.</td><td></td><td>false</td><td>string</td><td></td></tr><tr><td>total</td><td>The total number of count queries that will not be repeated after this value is set.</td><td></td><td>false</td><td>integer(int32)</td><td></td></tr><tr><td>parallelPager</td><td>Whether to do parallel paging?</td><td></td><td>false</td><td>boolean</td><td></td></tr></tbody></table><p><strong>Status-200</strong>:<br><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td></td><td>PagerResultDeviceEvent</td><td>PagerResultDeviceEvent</td></tr><tr><td>pageIndex</td><td>page index</td><td>integer(int32)</td><td></td></tr><tr><td>pageSize</td><td>page size</td><td>integer(int32)</td><td></td></tr><tr><td>total</td><td>total data count</td><td>integer(int32)</td><td></td></tr><tr><td>data</td><td>data list</td><td>array</td><td>DeviceEvent</td></tr><tr><td>timestamp</td><td></td><td>integer</td><td></td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;pageIndex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function r(d,i){return n(),s("div",null,o)}const l=t(e,[["render",r],["__file","device-event.html.vue"]]);export{l as default};
