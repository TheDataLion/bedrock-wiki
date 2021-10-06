import{r as s,o as n,c as a,b as t,a as p}from"./404.md.0fcfe92a.js";const o='{"title":"Disabling Team-damage","description":"","frontmatter":{"title":"Disabling Team-damage","tags":["intermediate"]},"relativePath":"entities/disabling-team-damage.md","lastUpdated":1633527703086}',e={},u=p("<p>If you wish to disable team damage (so one cannot hurt their teammates), assign a tag with the team name to every teammate (I&#39;m going to use <code>team1</code>, <code>team2</code>, <code>team3</code> and <code>team4</code> for this example). Now add this damage sensor component into your <code>player.json</code>s <code>&quot;components&quot;: {}</code>. See comments for explanation.</p>",1),c=p('<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n   <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token comment">//if you already have a damage sensor, simply copy this object into the &quot;triggers&quot; array;</span>\n         <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n               <span class="token property">&quot;any_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                  <span class="token punctuation">{</span>\n                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//Does the player have this tag?</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team1&quot;</span> <span class="token punctuation">}</span> <span class="token comment">//If so, does the entity they&#39;re trying to hurt have this tag?</span>\n                     <span class="token punctuation">]</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">{</span>\n                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//repeats for every team;</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team2&quot;</span> <span class="token punctuation">}</span>\n                     <span class="token punctuation">]</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">{</span>\n                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team3&quot;</span> <span class="token punctuation">}</span>\n                     <span class="token punctuation">]</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">{</span>\n                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team4&quot;</span> <span class="token punctuation">}</span>\n                     <span class="token punctuation">]</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">{</span>\n                     <span class="token property">&quot;all_of&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">{</span> <span class="token property">&quot;test&quot;</span><span class="token operator">:</span><span class="token string">&quot;has_tag&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span><span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;team5&quot;</span> <span class="token punctuation">}</span>\n                     <span class="token punctuation">]</span>\n                  <span class="token punctuation">}</span>\n               <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n         <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span><span class="token boolean">false</span> <span class="token comment">//if any of these filters evaluate to true in the current attack interaction, the target will not be hurt.</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>',1);e.render=function(p,o,e,l,r,i){const k=s("CodeHeader");return n(),a("div",null,[u,t(k),c])};export default e;export{o as __pageData};