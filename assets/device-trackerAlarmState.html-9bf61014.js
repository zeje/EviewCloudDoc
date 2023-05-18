import{_ as t,X as s,Y as a,a3 as e}from"./framework-cb2a258e.js";const n={},r=e(`<h2 id="report-alarm-state" tabindex="-1"><a class="header-anchor" href="#report-alarm-state" aria-hidden="true">#</a> report alarm state</h2><p><strong>url</strong>:<code>/device/evgps/{deviceId}/event/trackerAlarmState/{timestamp}</code></p><p><strong>method</strong>:<code>POST</code></p><p><strong>produces</strong>:<code>application/json</code></p><p><strong>consumes</strong>:<code>*/*</code></p><p><strong>Note</strong>:</p><p>report alarm state</p><p><strong>Request Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNREAD&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Params</strong>:</p><p><strong>Params</strong>:</p><table><thead><tr><th>name</th><th>description</th><th>in</th><th>require</th><th>type</th><th>schema</th></tr></thead><tbody><tr><td>deviceId</td><td></td><td>path</td><td>true</td><td>string</td><td></td></tr><tr><td>timestamp</td><td></td><td>path</td><td>true</td><td>integer(int64)</td><td></td></tr><tr><td>trackerAlarmState</td><td>TrackerAlarmState</td><td>body</td><td>true</td><td>TrackerAlarmState</td><td>TrackerAlarmState</td></tr><tr><td>state</td><td>state</td><td>READ</td><td>UNREAD,READ,IMPORTANT</td><td></td><td>false</td></tr></tbody></table><p><strong>Response Example</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[r];function p(d,c){return s(),a("div",null,o)}const l=t(n,[["render",p],["__file","device-trackerAlarmState.html.vue"]]);export{l as default};