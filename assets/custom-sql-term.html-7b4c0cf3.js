import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,d as n,e as s,f as a}from"./app-0c6bc767.js";const o={},p=n("p",null,"平台使用可拓展的方式进行SQL条件构造,如: like,gt,lt等。",-1),u=n("h2",{id:"平台内置sql条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#平台内置sql条件","aria-hidden":"true"},"#"),s(" 平台内置SQL条件")],-1),i=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"termType"),n("th",null,"SQL"),n("th",null,"DSL"),n("th",null,"说明")])]),n("tbody",null,[n("tr",null,[n("td",null,"is 或者 eq"),n("td",null,"="),n("td",null,".is()"),n("td",null,"等于")]),n("tr",null,[n("td",null,"not"),n("td",null,"!="),n("td",null,".not()"),n("td",null,"不等于")]),n("tr",null,[n("td",null,"gt"),n("td",null,">"),n("td",null,".gt()"),n("td",null,"大于")]),n("tr",null,[n("td",null,"lt"),n("td",null,"<"),n("td",null,".lt()"),n("td",null,"小于")]),n("tr",null,[n("td",null,"gte"),n("td",null,">="),n("td",null,".gte()"),n("td",null,"大于等于")]),n("tr",null,[n("td",null,"lte"),n("td",null,"<="),n("td",null,".lte()"),n("td",null,"小于等于")]),n("tr",null,[n("td",null,"like"),n("td",null,"like"),n("td",null,".like()"),n("td",null,"模糊匹配. 需要自己将value拼接%.")]),n("tr",null,[n("td",null,"nlike"),n("td",null,"not like"),n("td",null,".notLike()"),n("td",null,"同like")]),n("tr",null,[n("td",null,"in"),n("td",null,"in"),n("td",null,".in()"),n("td",null,"值可以为以下格式:1,2,3,4 字符串以半角逗号分割. [1,2,3,4] 集合.")]),n("tr",null,[n("td",null,"nin"),n("td",null,"not in"),n("td",null,".notIn()"),n("td",null,"同in")]),n("tr",null,[n("td",null,"isnull"),n("td",null,"is null"),n("td",null,".isNull()"),n("td",null,"为null")]),n("tr",null,[n("td",null,"notnull"),n("td",null,"not null"),n("td",null,".notNull()"),n("td",null,"不为null")]),n("tr",null,[n("td",null,"empty"),n("td",null,"= ''"),n("td",null,".isEmpty()"),n("td",null,"为空字符")]),n("tr",null,[n("td",null,"nempty"),n("td",null,"!=''"),n("td",null,".notEmpty()"),n("td",null,"不为字符")]),n("tr",null,[n("td",null,"btw"),n("td",null,"between"),n("td",null,".between()"),n("td",null,"在之间")]),n("tr",null,[n("td",null,"nbtw"),n("td",null,"not between"),n("td",null,".notBetween"),n("td",null,"不在之间")]),n("tr",null,[n("td",null,"dev-group"),n("td",null,"exists(.....)"),n("td",null,'.where("deviceId$dev-group",groupId)'),n("td",null,"按设备分组查询 (Pro)")]),n("tr",null,[n("td",null,"dev-same-group"),n("td",null,"exists(.....)"),n("td",null,'.where("deviceId$dev-same-group",anotherDeviceId)'),n("td",null,[s("查询同一个分组的设备，如果要包含此设备则使用: deviceId"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"d"),n("mi",null,"e"),n("mi",null,"v"),n("mo",null,"−"),n("mi",null,"s"),n("mi",null,"a"),n("mi",null,"m"),n("mi",null,"e"),n("mo",null,"−"),n("mi",null,"g"),n("mi",null,"r"),n("mi",null,"o"),n("mi",null,"u"),n("mi",null,"p")]),n("annotation",{encoding:"application/x-tex"},"dev-same-group")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.7778em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"d"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"v"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"s"),n("span",{class:"mord mathnormal"},"am"),n("span",{class:"mord mathnormal"},"e"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),n("span",{class:"mord mathnormal"},"ro"),n("span",{class:"mord mathnormal"},"u"),n("span",{class:"mord mathnormal"},"p")])])]),s("contains (Pro)")])]),n("tr",null,[n("td",null,"dev-tag"),n("td",null,"exists(.....)"),n("td",null,'.where("deviceId$dev-tag","tagKey:tagValue")'),n("td",null,'按标签查询,支持格式: key:value,[{"key":"tagKey","value":"tagValue"}]')])])],-1),c=a(`<h2 id="在前端通用查询条件中使用" tabindex="-1"><a class="header-anchor" href="#在前端通用查询条件中使用" aria-hidden="true">#</a> 在前端通用查询条件中使用</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>  <span class="token property">&quot;where&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deviceId custom 1234&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span><span class="token string">&quot;deviceId&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span><span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;1234&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他示例" tabindex="-1"><a class="header-anchor" href="#其他示例" aria-hidden="true">#</a> 其他示例</h2><h3 id="eq" tabindex="-1"><a class="header-anchor" href="#eq" aria-hidden="true">#</a> eq</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span><span class="token string">&quot;eq&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;123456789012345&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;in&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;123456789012345&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;123456789012346&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间范围" tabindex="-1"><a class="header-anchor" href="#时间范围" aria-hidden="true">#</a> 时间范围</h3><h4 id="使用gte-大于等于-组合lte-小于等于" tabindex="-1"><a class="header-anchor" href="#使用gte-大于等于-组合lte-小于等于" aria-hidden="true">#</a> 使用gte(大于等于)组合lte(小于等于)</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gte&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1672124830208</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lte&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1672124830210</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用between方式" tabindex="-1"><a class="header-anchor" href="#使用between方式" aria-hidden="true">#</a> 使用between方式</h4><p>注：因时区问题，不建议使用字符串</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;termType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btw&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-01 00:00:00,2023-03-01 00:00:00&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=n("p",null,[s("若发现column中有"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mtext",null,"符号会将")]),n("annotation",{encoding:"application/x-tex"},"符号会将")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6833em"}}),n("span",{class:"mord cjk_fallback"},"符号会将")])])]),s("前面的部分拆为column的值，后面的部分拆解为termType的值")],-1),d=a(`<p>注：因时区问题，不建议使用字符串</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime$btw&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-02-01 00:00:00,2023-03-01 00:00:00&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若对应的字段为long类型，可以这么写</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;createTime$btw&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1676441130975,1676441130975&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=[p,u,i,c,r,d];function v(k,b){return e(),l("div",null,m)}const g=t(o,[["render",v],["__file","custom-sql-term.html.vue"]]);export{g as default};