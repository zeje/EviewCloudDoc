import{_ as t,W as s,X as n,a2 as a}from"./framework-b5158923.js";const e={},o=a(`<h2 id="device-realtime-data" tabindex="-1"><a class="header-anchor" href="#device-realtime-data" aria-hidden="true">#</a> device realtime data</h2><p><strong>url</strong>:<code>/device/evgps/{deviceId}/realtime</code></p><p><strong>method</strong>:<code>GET</code></p><p><strong>produces</strong>:<code>application/x-www-form-urlencoded</code></p><p><strong>consumes</strong>:<code>*/*</code></p><p><strong>Note</strong>:</p><p><strong>Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>in</th><th>require</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>deviceId</td><td>device id</td><td>path</td><td>true</td><td>string</td><td></td></tr></tbody></table><p><strong>Status-200</strong>:</p><p><strong>Response Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>message</td><td>message content</td><td>string</td><td></td></tr><tr><td>result</td><td></td><td>TrackerRealTime</td><td>TrackerRealTime</td></tr><tr><td>generalData</td><td></td><td>GeneralData</td><td>GeneralData</td></tr><tr><td>dateTime</td><td></td><td>integer</td><td></td></tr><tr><td>statusCode</td><td></td><td>integer</td><td></td></tr><tr><td>dataType</td><td></td><td>string</td><td></td></tr><tr><td>isGPS</td><td></td><td>boolean</td><td></td></tr><tr><td>isWIFI</td><td></td><td>boolean</td><td></td></tr><tr><td>isGMS</td><td></td><td>boolean</td><td></td></tr><tr><td>isBLE</td><td></td><td>boolean</td><td></td></tr><tr><td>isSmart</td><td></td><td>boolean</td><td></td></tr><tr><td>isBeacon</td><td></td><td>boolean</td><td></td></tr><tr><td>bleConnected</td><td></td><td>boolean</td><td></td></tr><tr><td>fallDownStatus</td><td></td><td>integer</td><td></td></tr><tr><td>isHomeWifi</td><td></td><td>boolean</td><td></td></tr><tr><td>isCharging</td><td></td><td>boolean</td><td></td></tr><tr><td>isChargingComplete</td><td></td><td>boolean</td><td></td></tr><tr><td>isReboot</td><td></td><td>boolean</td><td></td></tr><tr><td>isHistoricalData</td><td></td><td>boolean</td><td></td></tr><tr><td>isAGPS</td><td></td><td>boolean</td><td></td></tr><tr><td>isMotion</td><td></td><td>boolean</td><td></td></tr><tr><td>workMode</td><td></td><td>integer</td><td></td></tr><tr><td>signalSize</td><td></td><td>integer</td><td></td></tr><tr><td>battery</td><td></td><td>integer</td><td></td></tr><tr><td>isHome</td><td></td><td>boolean</td><td></td></tr><tr><td>mobileNetworkType</td><td></td><td>integer</td><td></td></tr><tr><td>latestLocation</td><td></td><td>LatestLocation</td><td>LatestLocation</td></tr><tr><td>lat</td><td></td><td>number</td><td></td></tr><tr><td>lng</td><td></td><td>number</td><td></td></tr><tr><td>radius</td><td></td><td>number</td><td></td></tr><tr><td>dateTime</td><td></td><td>integer</td><td></td></tr><tr><td>alarmTime</td><td></td><td>integer</td><td></td></tr><tr><td>alarmCode</td><td></td><td>integer</td><td></td></tr><tr><td>data</td><td></td><td>array</td><td>string</td></tr><tr><td>status</td><td>status code</td><td>integer(int32)</td><td>integer(int32)</td></tr><tr><td>code</td><td>business code</td><td>string</td><td></td></tr><tr><td>timestamp</td><td>Timestamp (ms)</td><td>integer(int64)</td><td>integer(int64)</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;generalData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;dateTime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;dataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isGPS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isWIFI&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isGMS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isBLE&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isSmart&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isBeacon&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;bleConnected&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;fallDownStatus&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isHomeWifi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isCharging&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isChargingComplete&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isReboot&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isHistoricalData&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isAGPS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isMotion&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;workMode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;signalSize&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;battery&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;isHome&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;mobileNetworkType&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token string-property property">&quot;latestLocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;lng&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;radius&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;dateTime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;alarmTime&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;alarmCode&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string-property property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[o];function r(d,i){return s(),n("div",null,p)}const c=t(e,[["render",r],["__file","device-realtime.html.vue"]]);export{c as default};
