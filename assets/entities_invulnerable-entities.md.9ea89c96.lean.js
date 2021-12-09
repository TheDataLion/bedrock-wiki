import{_ as o,r as p,c as r,a,w as e,e as n,o as l,d as t}from"./404.md.c1f05b28.js";const C='{"title":"Invulnerable Entities","description":"","frontmatter":{"title":"Invulnerable Entities","category":"Tutorials","tags":["beginner"]},"headers":[{"level":2,"title":"Using Damage Sensor","slug":"using-damage-sensor"},{"level":3,"title":"Completely Invulnerable Entity","slug":"completely-invulnerable-entity"},{"level":3,"title":"Disable Damage from Player","slug":"disable-damage-from-player"},{"level":2,"title":"Min Health","slug":"min-health"}],"relativePath":"entities/invulnerable-entities.md","lastUpdated":1639074546128}',i={},c=n('',4),u=t("BP/entities/entity.json#minecraft:entity/components"),d=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cause&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="disable-damage-from-player" tabindex="-1">Disable Damage from Player <a class="header-anchor" href="#disable-damage-from-player" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,2),m=t("BP/entities/entity.json#minecraft:entity/components"),b=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:damage_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;on_damage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;is_family&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;player&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;deals_damage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="min-health" tabindex="-1">Min Health <a class="header-anchor" href="#min-health" aria-hidden="true">#</a></h2><p>The <code>min</code> property in the <code>minecraft:health</code> component allows us to make invincible entities that cannot die. This includes when using <code>./kill @e</code>. This is not considered a good solution because entities like this are hard to get rid of.</p><p>If you choose to use this component, please make sure you have another method for killing the entity. Triggering <code>minecraft:instant_despawn</code> from something like an environment sensor, a timer, or an interact is a good solution.</p>__VP_STATIC_END__`,4),_=t("BP/entities/entity.json#minecraft:entity/components"),h=n(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:health&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>__VP_STATIC_END__`,1);function k(g,y,f,q,v,T){const s=p("CodeHeader");return l(),r("div",null,[c,a(s,null,{default:e(()=>[u]),_:1}),d,a(s,null,{default:e(()=>[m]),_:1}),b,a(s,null,{default:e(()=>[_]),_:1}),h])}var P=o(i,[["render",k]]);export{C as __pageData,P as default};