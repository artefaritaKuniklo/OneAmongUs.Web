var X=Object.defineProperty;var Z=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var r=(e,t,n)=>(Z(e,typeof t!="symbol"?t+"":t,n),n);import{C as y,V as b,t as d,_,o as l,c as p,a as h,b as w,F as O,u as C,d as A,g as I,p as ee,r as E,e as M,f as m,h as c,i as x,S as k,j as te,k as ne,w as N,l as U,v as oe,m as ae,T as R,n as S,q as se,s as D,x as ie,y as re,z as H,A as le,B as he}from"./index-BgZxvYO3.js";import{g as pe,f as V,a as de,h as T}from"./helper-YeXa8LK4.js";import{I as W,_ as F,a as ce}from"./paper-plane-B_fkG8fw.js";import{_ as j}from"./SubmitPrompt-Bu-Y7dPc.js";import{J as ue}from"./index-ab8010ff-D4KkEiKk.js";var me=(e,t,n,i)=>{for(var o=t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o};let P=class extends b{getText(){return localStorage.getItem("easterEggMode")?parseInt(localStorage.getItem("easterEggMode"))==0?d.loading.loading:d.loading.easter[Math.random()*d.loading.easter.length|0]:d.loading.loading}};P=me([y({})],P);const fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"transparent",display:"block"},width:"150px",height:"150px",viewBox:"0 0 66 66",preserveAspectRatio:"xMidYMid",class:"rotating"},ge=h("circle",{class:"path",cx:"33",cy:"33",r:"30","stroke-width":"4",stroke:"#70512a","stroke-dasharray":"50.26548245743669 50.26548245743669",fill:"none","stroke-linecap":"round"},null,-1),we=[ge],ve=["textContent"];function ye(e,t,n,i,o,a){return l(),p(O,null,[(l(),p("svg",fe,we)),h("div",{textContent:w(e.getText()),class:"loadingMessage"},null,8,ve)],64)}const J=_(P,[["render",ye]]);var be=(e,t,n,i)=>{for(var o=t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o};let q=class extends b{constructor(){super(...arguments);r(this,"t",d);r(this,"birth",null);r(this,"shown",!1);r(this,"id","");r(this,"name","")}created(){fetch(C(A,"birthday-list.json")).then(t=>t.json()).then(t=>{this.birth=t;const n=[],i=[];for(const o of t){const a=new Date(o[1]),s=new Date;if(a.getDate()==s.getDate()&&a.getMonth()==s.getMonth()){this.shown=!0,n.push(o[0]);const u=JSON.parse(pe(C(ee(o[0]),I()=="zh_hans"?"info.json":`info.${I()}.json`)));i.push(u.name)}}this.shown&&(this.id=n[Math.random()*n.length|0],this.name=i[Math.random()*i.length|0])})}goBirth(){E.push(`/profile/${this.id}`)}};q=be([y({components:{Icon:W}})],q);const _e={class:"textR"};function ke(e,t,n,i,o,a){const s=M("Icon");return e.shown?(l(),p("button",{key:0,class:"random clickable hy-button",onClick:t[0]||(t[0]=(...u)=>e.goBirth&&e.goBirth(...u))},[m(s,{class:"iconR",icon:"tabler:candy"}),h("span",_e,w(e.t.birthday.birthday.replace("{0}",e.name)),1)])):c("",!0)}const Y=_(q,[["render",ke],["__scopeId","data-v-3e3a91cd"]]);var Te=(e,t,n,i)=>{for(var o=t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o};let z=class extends b{constructor(){super(...arguments);r(this,"i18n",d);r(this,"people",null)}created(){V(C(A,"people-list.json")).then(t=>t.json()).then(t=>this.people=t)}rand(){if(!this.people)return;const t=this.people[Math.floor(this.people.length*Math.random())];E.push(`/profile/${t.id}`)}};z=Te([y({components:{Icon:W}})],z);const Ce={class:"textR"};function $e(e,t,n,i,o,a){const s=M("Icon");return l(),p("button",{class:"random clickable hy-button",onClick:t[0]||(t[0]=(...u)=>e.rand&&e.rand(...u))},[m(s,{class:"iconR",icon:"lets-icons:sort-random-light"}),h("span",Ce,w(e.i18n.random),1)])}const G=_(z,[["render",$e],["__scopeId","data-v-4e3fc4bd"]]),Ie=`<p><strong>转眼三月过半。3月31日又是一度跨性别现身日。</strong></p>
<p>过去这一冬我们直面了太多悲伤，丧失了太多珍重的伙伴。
但是青山仍在，更多个我们依然在努力生活；许多新的伙伴与社群建立联系，渐渐互通有无，带来温暖与陪伴。新的希望、活力、生命，正在发芽。</p>
<p>作为跨性别/酷儿运动的投身者，我们深知：每一个伙伴朴素的「现身」都将成为帮助后人扫清迷雾、认知自己的光明所在，都将带来生的希望与力量。所以，在这个春天，One Among Us 向大家征集各种「现身」为主题的来信：你可以在信中写一首小诗、讲述自己的故事，或是单纯地给出一段振奋人心的话语，任何文字我们都欢迎。
我们将挑选来信，在预计3月31日播出的『2024年跨性别现身日晚会』上读出来。</p>
<p><strong>请注意：来信截止时间是北京时间3月27日 23:59 之前（3月27日16:00 UTC）。</strong></p>
<p>现身日晚会将在国内平台播出。One Among Us 保留适当编辑、调整来信内容以保证晚会播出顺畅的权利。</p>
<p>写一封来信：</p>
`,xe=`<p><strong>轉眼三月過半。3月31日又是一度跨性別現身日。</strong></p>
<p>過去這一冬我們直面了太多悲傷，喪失了太多珍重的夥伴。
但是青山仍在，更多個我們依然在努力生活；許多新的夥伴與社羣建立聯繫，漸漸互通有無，帶來溫暖與陪伴。新的希望、活力、生命，正在發芽。</p>
<p>作爲跨性別/酷兒運動的投身者，我們深知：每一個夥伴樸素的「現身」都將成爲幫助後人掃清迷霧、認知自己的光明所在，都將帶來生的希望與力量。所以，在這個春天，One Among Us 向大家徵集各種「現身」爲主題的來信：你可以在信中寫一首小詩、講述自己的故事，或是單純地給出一段振奮人心的話語，任何文字我們都歡迎。
我們將挑選來信，在預計3月31日播出的『2024年跨性別現身日晚會』上讀出來。</p>
<p><strong>請注意：來信截止時間是中國標準時間3月27日 23:59 之前（3月27日 16:00 UTC）。</strong></p>
<p>現身日晚會將在中國境內平臺播出。One Among Us 保留適當編輯、調整來信內容以保證晚會播出順暢的權利。</p>
<p>寫一封來信：</p>
`,Se=`<p><strong>As the first month of spring passes its halfway mark, March 31 marks another Transgender Day of Visibility.</strong></p>
<p>Throughout this winter, we&#39;ve faced too much sorrow, losing many cherished friends. Yet many of us persist in living; new connections are formed, warmth and companionship gradually spread. New hope, vitality, life, are sprouting.</p>
<p>As advocates in the transgender/queer movement, we deeply understand: every simple act of &quot;visibility&quot; from each companion will help future generations navigate through the fog, to recognize their own brightness, bringing hope and strength. So, this spring, One Among Us is collecting letters with &quot;visibility&quot; as the theme: a poem, a story, or simply some uplifting words—all are welcome.</p>
<p>We&#39;ll read some of the letters selected in our &#39;TDOV 2024 Night&#39; livestream around March 31.</p>
<p><strong>Note: The deadline for letters is March 27 23:59 (China Standard Time); March 27 16:00 (UTC).</strong></p>
<p>The Night will livestream on Chinese domestic platforms; One Among Us reserves the right to lightly edit the letters received, to ensure smooth broadcasting of the Night.</p>
<p>Write a letter:</p>
`,Pe=`<p>[!Note] 『2024年 跨性别现身日晚会』<a href="/profile/tdor">来信集合文字版</a>已经开放阅读，感谢大家的来信。</p>
`,qe=`<p>[!Note] &quot;2024 Transgender Day of Visibility Gala&quot; <a href="/profile/tdor">message collection text version</a> is now open for reading. Thank you for your messages.</p>
`,ze=`<p>[!Note] 『2024年 跨性別現身日晚會<a href="/profile/tdor">留言集文字版</a>現已開放閱讀，感謝大家的來信。</p>
`,Be=`<p>我一直记得《寻梦环游记》里面一句话：死亡不是生命的终点，遗忘才是。那些离开了我们的人，或许正在某个地方对我们说：「请你们不要忘记我。」</p>
<p>存在过的痕迹可能会随着时间慢慢抹消。旧照片会褪色，一段时间没有登录的社交账号可能会被注销。然而，引起波澜的却未必总是那些现实存在着的东西。突然在某个瞬间想起曾经聊过的话题，一起去过的地方，记忆的闸门就此打开，音容笑貌宛在。</p>
<p>我们中的许多人并不是因为地缘、业缘而相识，而是因为共同的生存境遇，才走到了这样一个被称为「社群」的地方。或许从未在现实中谋面，或许相隔甚远，跨过了语言、国籍的界限，或许……正在和我聊天的那个人，ta 的「真实存在」，我都无法确证。可何者为真实，何者为虚妄呢？即使我们不是 ta 们现实中的家人、朋友、恋人，那份友情甚至是亲情难道是可以被轻易否定的吗？当 ta 们逝去的时候，当那个头像永远不会再上线的时候，我总有一种私心，想要找一个地方为 ta 们做些真实的纪念，让 ta 继续存在下去，一直陪伴着我们前行。</p>
<p>于是就有了这个网站：那些因为各种原因过早离开我们的生命，那些跨性别者和我们的顺性别伙伴们（allies），仍然是我们中的一员（one among us），在默默照顾着、陪伴着我们，赋予我们继续生活的勇气。或许现实中的纪念碑上写着的并不是 ta 们所中意的姓名，也未必体现了 ta 们真实的认同，但我们仍然可以在自己的纪念中实现这一切。</p>
<p>「我们会在没有黑暗的地方相见。」</p>
<blockquote>
<p>[!Caution]<strong>内容警示</strong></p>
<p>逝者条目中含有包括性暴力、家庭暴力、自杀自伤等在内的大量创伤触发要素。如果您在浏览逝者页面的时候产生不适，请立即退出并寻求医生和社群的帮助，必要时寻找当地自杀干预机构。<strong>可在页面底部查询可信任的跨性别自杀干预联系方式。</strong>
请在确保自身心理状况稳定的情况下，尽量帮助别人。让我们团结起来，活下去，直到乌云散去的一天。</p>
</blockquote>
`,Ae=`<p>我一直記得《尋夢環遊記》裏面一句話：死亡不是生命的終點，遺忘纔是。那些離開了我們的人，或許正在某個地方對我們說：「請你們不要忘記我。」</p>
<p>存在過的痕跡可能會隨着時間慢慢抹消。舊照片會褪色，一段時間沒有登錄的社交賬號可能會被註銷。然而，引起波瀾的卻未必總是那些現實存在着的東西。突然在某個瞬間想起曾經聊過的話題，一起去過的地方，記憶的閘門就此打開，音容笑貌宛在。</p>
<p>我們中的許多人並不是因爲地緣、業緣而相識，而是因爲共同的生存境遇，才走到了這樣一個被稱爲「社羣」的地方。或許從未在現實中謀面，或許相隔甚遠，跨過了語言、國籍的界限，或許……正在和我聊天的那個人，ta 的「真實存在」，我都無法確證。可何者爲真實，何者爲虛妄呢？即使我們不是 ta 們現實中的家人、朋友、戀人，那份友情甚至是親情難道是可以被輕易否定的嗎？當 ta 們逝去的時候，當那個頭像永遠不會再上線的時候，我總有一種私心，想要找一個地方爲 ta 們做些真實的紀念，讓 ta 繼續存在下去，一直陪伴着我們前行。</p>
<p>於是就有了這個網站：那些因爲各種原因過早離開我們的生命，那些跨性別者和我們的順性別夥伴們（allies），仍然是我們中的一員（one among us），在默默照顧着、陪伴着我們，賦予我們繼續生活的勇氣。或許現實中的紀念碑上寫着的並不是 ta 們所中意的姓名，也未必體現了 ta 們真實的認同，但我們仍然可以在自己的紀念中實現這一切。</p>
<p>「我們會在沒有黑暗的地方相見。」</p>
<blockquote>
<p>[!Caution]<strong>內容警示</strong></p>
<p>逝者條目中含有包括性暴力、家庭暴力、自殺自傷等在內的大量創傷觸髮要素。如果您在瀏覽逝者頁麵的時候産生不適，請立即退出並尋求醫生和社群的幫助，必要時尋找當地自殺幹預機構。<strong>可在主頁底部查詢可信任的跨性別自殺幹預聯繫方式。</strong>
請在確保自身心理狀況穩定的情況下，儘量幫助別人。讓我們團結起來，活下去，直到烏雲散去的一天。</p>
</blockquote>
`,Ee=`<p>I always remember a sentence in &quot;Coco&quot;: Death is not the end of life, but oblivion is. Those who have left us, perhaps somewhere, are whispering to us: &quot;Please don&#39;t forget me.&quot;    </p>
<p>The traces of existence may fade with time. Old photos can lose their color, and social media accounts may disappear as the internet change. Yet, the things that influence us, that bring them back to us, are not always those that physically exist. When we suddenly recall conversations we had or places we&#39;ve been, the gates of memory swing open, and their voices and smiles are as vivid as ever.  </p>
<p>Many of us did not meet because of geographical or professional ties, but because of our shared circumstances in life. We&#39;ve come to this place we call &quot;community&quot;.
We may have never met in person and may live thousands of miles apart, crossing the boundaries of language and nationality.
Perhaps I can&#39;t even verify their &quot;real existence&quot;. But how would we define the boundary between reality and illusion?
Even if we are not their family members, friends, or lovers in the real world, can that friendship or affection be easily denied?
When they pass away, when that avatar never goes online again, I always have a selfish desire to find a place to commemorate them, to let them continue to exist and accompany us forward.  </p>
<p>That&#39;s why we built this website. Those who left our lives prematurely for various reasons, those transgender individuals and our cisgender allies, are still one of us (one among us), silently caring for and accompanying us, empowering us, and giving us the courage to live on and move forward.
Perhaps the name written on the monument in reality is not what they preferred, and it may not reflect their true identity, but we can still realize all of this in our own memorial.  </p>
<p>We shall meet again in a place where there is no darkness.</p>
<blockquote>
<p>[!Caution]<strong>Content Warning</strong></p>
<p>The entries below of the deceased contains various types of triggering information, including sexual violence, domestic violence, self-injury and suicide. If you feel uncomfortable while browsing the page of the deceased, please exit immediately and seek help from doctors, the community, and local suicide intervention agencies if necessary. <strong>You can find suicide prevention information at the bottom of the page.</strong></p>
<p>Please try to help others while ensuring your mental health. Let us stand together and survive, until the dark clouds disperse.</p>
</blockquote>
`,Me=`<h1 id="自杀干预联系方式">自杀干预联系方式</h1>
<p>（中国）<a href="https://kuaerxinli.org/%E6%96%87%E7%AB%A0%E4%B8%8E%E9%87%87%E8%AE%BF/1520">跨儿心理小组自杀干预热线列表</a>。另可参考其 <a href="https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzUyNjc4Nzk2OA==&scene=1&album_id=1589990820231856129&count=3#wechat_redirect">跨儿自杀危机自救和干预微信专栏</a> 寻找你所需要的信息。</p>
<p>（加拿大、美国）<a href="https://translifeline.org/">Trans Lifeline</a> - Canada (877) 330-6366, US (877) 565-8860</p>
<p>虽然 One Among Us 目前尚不具备自杀干预能力，但是如果您实在需要帮助，可以发邮件给 <a href="mailto:info@one-among.us">info@one-among.us</a>。我们会提供简单的帮助，或者转介给其他有能力处理的医院或社会机构。请注意这两种方式均非 7 × 24 小时有人值守。</p>
<h1 id="拒绝对跨性别的暴力">拒绝对跨性别的暴力</h1>
<p>联合国人权高专办的 <a href="https://www.unfe.org/wp-content/uploads/2019/03/Transgender_Factsheet-CHINESE.pdf">小册子</a> 指出，「在世界各地，跨性别者遭受暴力、骚扰和歧视的风险非常高。侵犯他们人权的行为包括欺凌和言语虐待，拒绝提供卫生保健服务、教育、工作机会和住房，刑罪化、任意逮捕和羁押，暴力、攻击、酷刑、强奸和谋杀。而年龄、族裔、职业、社会经济阶层和残障状况等其他因素可能加重他们所面临的暴力和歧视。」</p>
<p>除了呼吁一个更好的社会环境之外，个人能够做的事情还有很多：</p>
<ul>
<li>了解跨性别者的经历、问题和关切。</li>
<li>以当事人自选的概念、人称代词、性别和名字来称呼他们。</li>
<li>见到任何形式的针对跨性别者的污名、歧视和暴力时，要敢于说不。</li>
</ul>
<p>每年11月20日是跨性别追念日（<a href="https://www.glaad.org/tdor">Transgender Day of Remembrance</a>）。在这一天，我们纪念那些因为恐跨人士的暴力而去世的跨性别者，呼吁终结对跨性别者的暴力。</p>
<h1 id="如何贡献">如何贡献</h1>
<p>你可以通过在我们的 <a href="https://github.com/one-among-us/data">Github 数据库</a> 中递交 Pull Request 来更新或创建新的纪念者条目。Pull Request 被管理员合并后，新的条目会自动显示在网站里。</p>
<p>如果不知道怎么做，欢迎你来 <a href="/about">联系我们</a>。</p>
`,Le=`<h1 id="自殺干預聯絡方式">自殺干預聯絡方式</h1>
<p>（中國）<a href="https://kuaerxinli.org/%E6%96%87%E7%AB%A0%E4%B8%8E%E9%87%87%E8%AE%BF/1520">跨兒心理小組自殺干預熱線列表</a> 和撰寫的 <a href="https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&__biz=MzUyNjc4Nzk2OA==&scene=1&album_id=1589990820231856129&count=3#wechat_redirect">跨兒自殺危機自救和干預微信專欄</a> 尋找你所需要的信息。</p>
<p>（加拿大、美國）<a href="https://translifeline.org/">Trans Lifeline</a> - Canada (877) 330-6366, US (877) 565-8860</p>
<p>雖然 One Among Us 目前尚不具備自殺干預能力，但是如果您實在需要幫助，可以發郵件給 <a href="mailto:info@one-among.us">info@one-among.us</a>。我們會提供簡單的幫助，或者轉介給其他有能力處理的醫院或社會機構。請註意這兩種方式均非 7 × 24 小時有人值守。</p>
<h1 id="拒絕對跨性別的暴力">拒絕對跨性別的暴力</h1>
<p>聯合國人權高專辦的 <a href="https://www.unfe.org/wp-content/uploads/2019/03/Transgender_Factsheet-CHINESE.pdf">小冊子</a> 指出，「在世界各地，跨性別者遭受暴力、騷擾和歧視的風險非常高。侵犯他們人權的行爲包括欺凌和言語虐待，拒絕提供衛生保健服務、教育、工作機會和住房，刑罪化、任意逮捕和羈押，暴力、攻擊、酷刑、強姦和謀殺。而年齡、族裔、職業、社會經濟階層和殘障狀況等其他因素可能加重他們所面臨的暴力和歧視。」</p>
<p>除了呼籲一個更好的社會環境之外，個人能夠做的事情還有很多：</p>
<ul>
<li>瞭解跨性別者的經歷、問題和關切。</li>
<li>以當事人自選的概念、人稱代詞、性別和名字來稱呼他們。</li>
<li>見到任何形式的針對跨性別者的污名、歧視和暴力時，要敢於說不。</li>
</ul>
<p>每年11月20日是跨性別追念日（<a href="https://www.glaad.org/tdor">Transgender Day of Remembrance</a>）。在這一天，我們紀念那些因爲恐跨人士的暴力而去世的跨性別者，呼籲終結對跨性別者的暴力。</p>
<h1 id="如何貢獻">如何貢獻</h1>
<p>你可以通過在我們的 <a href="https://github.com/one-among-us/data">Github 數據庫</a> 中遞交 Pull Request 來更新或創建新的紀念者條目。Pull Request 被管理員合併後，新的條目會自動顯示在網站裏。</p>
<p>如果不知道怎麼做，歡迎你來 <a href="/about">聯繫我們</a>。</p>
`,Ue=`<h1 id="suicide-prevention">Suicide Prevention</h1>
<p>(Canada/US) <a href="https://translifeline.org/">Trans Lifeline</a> - Canada (877) 330-6366, US (877) 565-8860  </p>
<p>Although One Among Us does not currently have suicide prevention capabilities, if you really need help, you can send an email to <a href="mailto:info@one-among.us">info@one-among.us</a>. We will provide simple assistance or refer you to other hospitals or social agencies that can handle it. Please note that neither of these options is monitored 24/7.  </p>
<h1 id="stopping-transphobic-violence">Stopping Transphobic Violence</h1>
<p>The <a href="https://www.unfe.org/wp-content/uploads/2019/03/Transgender_Factsheet_English.pdf">Transgender Factsheet</a> from the UN Human Rights Office states that “Trans people in all parts of the world are at heightened risk of violence, harassment and discrimination.
Human rights violations range from bullying and verbal abuse, to denial of healthcare, education, work and housing, to criminalization, arbitrary arrest and detention, violence, assault, torture, rape and murder.
Exposure to these and related abuses may be further exacerbated by other factors, such as age, ethnicity, occupation, socio-economic class and disability.&quot;  </p>
<p>In addition to advocating for a better social environment, there are many things that an individual can do:</p>
<ul>
<li>Understand the issues and concerns of transgender individuals&#39; life experiences.  </li>
<li>Address them with their preferred pronouns, genders, and names.  </li>
<li>Take the initiative to say no when you witness any form of stigma, discrimination, and violence against transgender people.</li>
</ul>
<h1 id="how-to-contribute">How to Contribute</h1>
<p>You can edit or create commemorative entries by submitting Pull Requests through our <a href="https://github.com/one-among-us/data">GitHub repository</a>.
When the Pull Request is approved and merged by the maintainer, the new entry will be displayed on the website.  </p>
<p>If you&#39;re unsure how to proceed, please feel free to <a href="/about">Contact Us</a>.</p>
`;function He(e,t={}){if(e.hasAttribute("fit-initialized"))return;function n(){const i=t.width??e.parentElement.clientWidth;if(e.clientWidth<=i)return;const o=window.getComputedStyle(e);let a=i/e.clientWidth*parseFloat(o.fontSize);e.style.height=e.clientHeight+"px",t.maxFontSize&&(a=Math.min(a,t.maxFontSize)),t.minFontSize&&(a=Math.max(a,t.minFontSize)),e.style.fontSize=a+"px"}n(),e.addEventListener("resize",n),e.addEventListener("orientationchange",n),e.setAttribute("fit-initialized","y")}var Oe=(e,t,n,i)=>{for(var o=t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=s(o)||o);return o};let B=class extends b{constructor(){super(...arguments);r(this,"textInputCache","");r(this,"textInputKey");r(this,"showCaptchaPrompt",!1);r(this,"t",d);r(this,"p",{id:"tdor"});r(this,"showInputArea",!0)}btnSend(){this.showCaptchaPrompt=!0}alterTextArea(){this.showInputArea=!this.showInputArea}submitRequest(n){this.showCaptchaPrompt=!1;const i={id:this.p.id,content:this.textInput,...n};x(i),k.fire({title:d.nav_comment_submit,showConfirmButton:!1,icon:null,didOpen:()=>{k.showLoading(null),de(te+"/comment/add",{method:"POST",params:i}).then(()=>{this.textInput="",k.fire({title:d.nav_success,text:d.nav_success_text_reply,icon:"success",timer:5e3,timerProgressBar:!0,showConfirmButton:!0,confirmButtonText:d.nav_ok_1,showCloseButton:!0})}).catch(o=>{ne(o),k.fire({title:d.nav_failed,text:d.nav_fail_reason+o.message,icon:"error",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,showCloseButton:!1})})}})}created(){this.textInputKey=`draft-${this.p.id}`,this.textInputCache=localStorage.getItem(this.textInputKey)??""}get textInput(){return this.textInputCache}set textInput(n){this.textInputCache=n,localStorage.setItem(this.textInputKey,n)}mounted(){this.resizeInput(),ue()}resizeInput(){const n=this.$refs.input;n.style.height="auto",n.style.height=`${n.scrollHeight+18}px`}};B=Oe([y({components:{MarkdownTooltip:F,SubmitPrompt:j}})],B);const Ne={id:"TdorComments",class:"introduction"},Re={id:"add-comment"},De=["placeholder"],Ve={key:0,id:"send-comment-btn"},We={class:"char-count unselectable"};function Fe(e,t,n,i,o,a){const s=ce,u=F,$=j;return l(),p("div",Ne,[m(R,{name:"collapse"},{default:N(()=>[U(h("div",Re,[U(h("textarea",{id:"comment-textarea","onUpdate:modelValue":t[0]||(t[0]=f=>e.textInput=f),placeholder:e.t.nav_comment_placeholder,onInput:t[1]||(t[1]=(...f)=>e.resizeInput&&e.resizeInput(...f)),ref:"input"},null,40,De),[[oe,e.textInput]]),e.textInput.length>0?(l(),p("div",Ve,[h("span",We,w(e.textInput.length)+" "+w(e.t.nav_comment_status),1),m(s,{class:"icon",onClick:e.btnSend},null,8,["onClick"])])):c("",!0),m(u,{"text-area-id":"comment-textarea"})],512),[[ae,e.showInputArea]])]),_:1}),e.showCaptchaPrompt?(l(),S($,{key:0,onSubmit:e.submitRequest,onClose:t[2]||(t[2]=f=>e.showCaptchaPrompt=!1)},null,8,["onSubmit"])):c("",!0)])}const je=_(B,[["render",Fe]]);var Je=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,L=(e,t,n,i)=>{for(var o=i>1?void 0:i?Ye(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&Je(t,n,o),o};let v=class extends b{constructor(){super(...arguments);r(this,"clicked","");r(this,"showAdd",!1);r(this,"isLoading",!0);r(this,"lang",I());r(this,"tdorTop",T(this.lang==="zh_hans"?Ie:this.lang==="zh_hant"?xe:Se));r(this,"tdorCommentView",T(this.lang==="zh_hans"?Pe:this.lang==="zh_hant"?ze:qe));r(this,"htmlTop",T(this.lang==="zh_hans"?Be:this.lang==="zh_hant"?Ae:Ee));r(this,"htmlBottom",T(this.lang==="zh_hans"?Me:this.lang==="zh_hant"?Le:Ue));r(this,"people",null);r(this,"bookmarkTexts");r(this,"bookmark")}isDeadlinePassed(){return!0}isShowCommentsEntry(){return!1}updated(){if(this.bookmark!=null){const n=this.bookmark[0].offsetWidth-10;for(const i of this.bookmarkTexts)He(i,{width:n})}}created(){x(`Language: ${this.lang}`),V(C(A,"people-home-list.json")).then(n=>n.text()).then(n=>this.people=JSON.parse(n))}switchPage(n){x(`switchPage(${n.id})`),E.push(`/profile/${n.id}`)}profileUrl(n){return se(n.profileUrl,n.id)}};L([D()],v.prototype,"bookmarkTexts",2);L([D()],v.prototype,"bookmark",2);v=L([y({components:{TdorComments:je,Loading:J,RandomPerson:G,BirthdayButton:Y}})],v);const K=e=>(le("data-v-90e9a16f"),e=e(),he(),e),Ge=["innerHTML"],Ke=["innerHTML"],Qe=["innerHTML"],Xe={key:4,id:"profiles",class:"unselectable"},Ze=K(()=>h("div",{class:"back"},null,-1)),et=["href"],tt=["src","onClick"],nt={key:0,class:"profile"},ot=K(()=>h("div",{class:"back add fbox-vcenter"},"+",-1)),at=[ot],st=["innerHTML"];function it(e,t,n,i,o,a){const s=M("TdorComments"),u=G,$=Y,f=J;return l(),p("div",null,[h("div",{id:"home",class:re(e.clicked?"clicked":"")},[e.isShowCommentsEntry()?(l(),p("div",{key:0,class:"introduction markdown-content",innerHTML:e.tdorCommentView},null,8,Ge)):c("",!0),e.isDeadlinePassed()?c("",!0):(l(),p("div",{key:1,class:"introduction markdown-content",innerHTML:e.tdorTop},null,8,Ke)),e.isDeadlinePassed()?c("",!0):(l(),S(s,{key:2})),h("div",{class:"introduction markdown-content",innerHTML:e.htmlTop},null,8,Qe),m(u,{class:"randomP"}),m($,{class:"randomP"}),e.isLoading?(l(),S(f,{key:3})):c("",!0),e.people?(l(),p("div",Xe,[(l(!0),p(O,null,ie(e.people,(g,Q)=>(l(),p("div",{class:"profile",key:Q},[Ze,h("a",{href:`/profile/${g.id}`,onClick:H(()=>!1,["exact","prevent","stop"])},[m(R,{name:"fade",onAfterLeave:()=>e.switchPage(g)},{default:N(()=>[e.clicked!==g.name?(l(),p("img",{key:0,src:e.profileUrl(g),draggable:"false",alt:"profile",class:"front clickable",onClick:H(()=>(e.clicked||(e.clicked=g.name),!1),["exact"]),onLoad:t[0]||(t[0]=rt=>e.isLoading=!1)},null,40,tt)):c("",!0)]),_:2},1032,["onAfterLeave"])],8,et),h("div",{class:"name font-custom",ref_for:!0,ref:"bookmarkTexts"},w(g.name),513),h("div",{class:"bookmark",ref_for:!0,ref:"bookmark"},null,512)]))),128)),e.showAdd?(l(),p("div",nt,at)):c("",!0)])):c("",!0),h("div",{class:"introduction markdown-content",innerHTML:e.htmlBottom},null,8,st)],2)])}const gt=_(v,[["render",it],["__scopeId","data-v-90e9a16f"]]);export{gt as default};
