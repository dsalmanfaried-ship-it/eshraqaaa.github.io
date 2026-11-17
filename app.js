/* ===== YouTube جوه الموقع ===== */
let apiReady=false,pending=null,player=null;
window.onYouTubeIframeAPIReady=()=>{apiReady=true;if(pending){const p=pending;pending=null;p()}};
(()=>{const s=document.createElement('script');s.src='https://www.youtube.com/iframe_api';s.onerror=()=>{};document.head.appendChild(s)})();
const ls={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let watched=ls.get('watched',{}),saved=ls.get('saved',{}),last=ls.get('last',null),favs=ls.get('favs',null),links=ls.get('links',{}),photos=ls.get('photos',{});
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),1800)}
function imgErr(i){if(i.src.includes('hqdefault')){i.src=i.src.replace('hqdefault','mqdefault')}else i.remove()}
const GR=Object.fromEntries(DATA.groups);
/* ===== البيانات ===== */
function parse(u){u=(u||'').trim();const v=u.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);if(v&&!/playlist\?/.test(u))return{kind:'v',id:v[1],key:'v:'+v[1]};const l=u.match(/[?&]list=([\w-]+)/);return l?{kind:'p',id:l[1],key:'p:'+l[1]}:null}
let _all=null;
function allVideos(){if(_all)return _all;const out=[];let o=0;
 DATA.scholars.forEach((s,si)=>s.sections.forEach(sec=>sec.videos.forEach(v=>{
  const g=v.g!=null?v.g:s.g;let p,key,q='';
  if(v.url){p=parse(v.url);if(!p)return;key=p.key}else{key='q:'+s.name+'|'+v.title;q=v.q||s.name+' '+v.title;p=parse(links[key])}
  out.push({key,kind:p?p.kind:'s',id:p?p.id:'',title:v.title,scholar:s.name,topic:sec.title,short:!!v.short,g,si,q,real:!!p,ord:o++})})));
 const f=n=>favs&&favs[n]?0:1;
 return _all=out.sort((a,b)=>f(a.scholar)-f(b.scholar)||a.g-b.g||a.si-b.si||b.real-a.real||a.ord-b.ord)}
const reset=()=>{_all=null},byKey=k=>allVideos().find(v=>v.key===k);
const sname=n=>n.replace(/^(الدكتور|دكتور|الشيخ|القارئ|الحبيب) /,''),sch=n=>DATA.scholars.find(s=>s.name===n);
DATA.scholars.forEach(s=>{const p=s.sections.flatMap(x=>x.videos).map(x=>parse(x.url)).find(p=>p&&p.kind==='v');s.th=p?'https://i.ytimg.com/vi/'+p.id+'/hqdefault.jpg':''});
const avatar=n=>{const s=sch(n);return photos[n]?`<img class="ok" src="${photos[n]}" alt="">`:`${sname(n)[0]}<img src="${esc(s.photo)}" alt="" onload="this.classList.add('ok')" onerror="this.onerror=function(){this.remove()};this.src='${s.th}'">`}
const secImg=(n,t)=>{const v=allVideos().find(x=>x.scholar===n&&x.topic===t&&x.kind==='v');return v?`<img loading="lazy" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" onload="this.classList.add('ok')" onerror="imgErr(this)">`:''};
const days=ls.get('days',[]),dk=d=>d.toISOString().slice(0,10);
function streak(){let n=0;const d=new Date();if(!days.includes(dk(d)))d.setDate(d.getDate()-1);while(days.includes(dk(d))){n++;d.setDate(d.getDate()-1)}return n}
function markDay(){const t=dk(new Date());if(!days.includes(t)){days.push(t);ls.set('days',days.slice(-120))}}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
const hue=s=>Math.abs([...s].reduce((a,c)=>(a*31+c.charCodeAt(0))|0,7))%360;
const ico=t=>/تلاو|قرآن|القرآن/.test(t)?'📖':/صلاة/.test(t)?'🕌':/دعاء|أدعية/.test(t)?'🤲':/قصص|سير/.test(t)?'🌙':'✨';
const media=v=>`<div class="cvr" style="background:linear-gradient(135deg,hsl(${hue(v.title)} 45% 24%),hsl(${(hue(v.title)+40)%360} 50% 10%))">${ico(v.topic)}</div>`+(v.kind==='v'?`<img loading="lazy" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" onload="this.classList.add('ok')" onerror="imgErr(this)">`:'');
/* ===== الحالة ===== */
let tab=ls.get('tab0',0)||'home',fScholar=null,fTopic=null,fGroup=null,query='',fKind='',lim=20;
const setTab=t=>{tab=t;fTopic=null;lim=20;render(1);scrollTo(0,0)};
function filtered(){return allVideos().filter(v=>(fGroup==null||v.g===fGroup)&&(!fScholar||v.scholar===fScholar)&&(!fTopic||v.topic===fTopic)&&(fKind===''||(fKind==='f'?!!(favs&&favs[v.scholar]):fKind==='s'?v.short:fKind==='p'?v.kind==='p':!v.short&&v.kind==='v'))&&(!query||(v.title+v.scholar+v.topic).includes(query)))}
function render(anim){const A=$('#app');
 $('#nav').style.display=tab==='pick'?'none':'flex';
 $('#nav').innerHTML=[['home','🏠','الرئيسية'],['explore','🔎','استكشاف'],['saved','❤️','المحفوظات'],['qisas','📖','قصص'],['tawba','🌱','تائب'],['more','⚙️','المزيد']].map(([k,i,t])=>`<button class="${tab===k?'on':''}" onclick="setTab('${k}')"><i>${i}</i>${t}</button>`).join('');
 ({home,explore,savedTab,tawba,qisas,more,pick})[tab](A);A.classList.remove('pg');if(anim){void A.offsetWidth;A.classList.add('pg')}document.querySelectorAll('.post,.stp,.sol,.dnc').forEach(p=>{p.classList.add('rv');io.observe(p)})}
const top=r=>`<div class="top"><div class="logo">اسمع دين</div><div style="display:flex;align-items:center;gap:10px">${dp?'<button class="inst" onclick="doInstall()">⬇️ تنزيل</button>':''}<span style="color:var(--mut);font-size:13px">${r||''}</span></div></div>`;
const chips=l=>`<div class="chips">${l.map(([t,on,f])=>`<div class="chip ${on?'on':''}" onclick="${f}">${esc(t)}</div>`).join('')}</div>`;
const story=(n,on,un)=>`<div class="st ${on?'on':''}" onclick="pickScholar('${esc(n)}')"><div class="ring ${favs&&favs[n]?'fav':un?'':'seen'}" style="position:relative"><div class="av">${avatar(n)}</div>${favs&&favs[n]?'<i class="fv">⭐</i>':''}</div><span>${esc(sname(n))}</span></div>`;
/* ===== الرئيسية ===== */
function post(v){const d=watched[v.key],pl=v.real;
 return `<div class="post ${d?'done':''}"><div class="ph" onclick="pickScholar('${esc(v.scholar)}')"><div class="ring ${d?'seen':''}" style="width:38px;height:38px;padding:2px;margin:0"><div class="av" style="font-size:15px;border-width:2px">${avatar(v.scholar)}</div></div><div class="pn"><b>${esc(sname(v.scholar))}</b><small>${esc(v.topic)}</small></div></div>
 <div class="th" onclick="tapP('${esc(v.key)}',this)">${media(v)}<div class="pl">${pl?(v.kind==='p'?'📋':'▶'):'🔗'}</div>${v.short?'<span class="bd">⚡ قصير</span>':''}${v.kind==='p'?'<span class="bd">قائمة</span>':''}${!pl?'<span class="bd">محتاج رابط</span>':''}${d?'<span class="bd w">✓ شفته</span>':''}</div>
 <div class="ac"><button class="s ${saved[v.key]?'on':''}" data-k="${esc(v.key)}" onclick="tgSave('${esc(v.key)}')">${saved[v.key]?'❤️':'🤍'}</button><button class="w ${d?'on':''}" onclick="tgWat('${esc(v.key)}')">✓</button>${pl?`<button onclick="share('${esc(v.key)}')">📤</button>`:''}</div><div class="tt">${esc(v.title)}</div></div>`}
function home(A){const vids=allVideos(),inG=v=>fGroup==null||v.g===fGroup;
 const names=DATA.scholars.map(s=>s.name).filter(n=>vids.some(v=>v.scholar===n&&inG(v))).sort((a,b)=>(favs&&favs[b]?1:0)-(favs&&favs[a]?1:0));
 const list=filtered(),topics=[...new Set(vids.filter(v=>inG(v)&&(!fScholar||v.scholar===fScholar)).map(v=>v.topic))];
 let head='';
 if(fScholar){const s=sch(fScholar),n=fScholar,c=vids.filter(v=>v.scholar===n);head=`<div class="hd"><div class="ring ${favs&&favs[n]?'fav':''}"><div class="av">${avatar(n)}</div></div><h2 style="font-family:Amiri,serif;color:var(--gold)">${esc(n)}</h2><small style="color:var(--mut)">${GR[s.g]} — ${c.filter(v=>v.real).length} فيديو</small><div class="row2"><button class="${favs&&favs[n]?'on':''}" onclick="tgFav('${esc(n)}')">${favs&&favs[n]?'⭐ مفضّل':'☆ ضيفه للمفضلين'}</button><button onclick="setPhoto('${esc(n)}')">📷 صورة</button></div></div>`}
 A.innerHTML=top(`🔥 ${streak()} · ${vids.filter(v=>watched[v.key]).length} ✓`)+`<div class="stories"><div class="st ${!fScholar?'on':''}" onclick="pickScholar(null)"><div class="ring"><div class="av">✦</div></div><span>الكل</span></div>${names.map(n=>story(n,fScholar===n,vids.some(v=>v.scholar===n&&!watched[v.key]))).join('')}</div>`+head+
  `<div class="pbar"><i style="width:${Math.round(100*vids.filter(v=>watched[v.key]).length/vids.length)}%"></i></div>`+(fScholar?`<div class="chips tcs"><div class="tc ${!fTopic?'on':''}" onclick="fTopic=null;lim=20;render(1)"><b>✦</b><span>الكل</span></div>${topics.map(t=>`<div class="tc ${fTopic===t?'on':''}" onclick="fTopic='${esc(t)}';lim=20;render(1)">${secImg(fScholar,t)}<span>${esc(t)}</span></div>`).join('')}</div>`:hero(vids)+chips([['الكل',fKind==='',"fKind='';lim=20;render(1)"],['⭐ مفضلتي',fKind==='f',"fKind='f';lim=20;render(1)"],['⚡ قصيرة',fKind==='s',"fKind='s';lim=20;render(1)"],['📋 قوائم',fKind==='p',"fKind='p';lim=20;render(1)"]]))+
  (list.length?list.slice(0,lim).map(post).join(''):'<div class="empty">مفيش فيديوهات هنا</div>')+(list.length>lim?'<button class="more" onclick="lim+=20;render()">عرض المزيد</button>':'')+'<button class="fab" onclick="surprise()" aria-label="فاجئني">🎲</button>'}
function hero(vids){if(query||fKind)return'';const p=vids.filter(v=>v.kind==='v'&&!v.short),f=p.filter(v=>favs&&favs[v.scholar]),l=f.length?f:p,v=l[Math.floor(Date.now()/864e5)%l.length];return `<div class="hero" onclick="openP('${esc(v.key)}')">${media(v)}<div class="hg"><small>🔥 فيديو اليوم${streak()?' — '+streak()+' يوم متتالي':''}</small><b>${esc(v.title)}</b><span>${esc(sname(v.scholar))}</span></div><div class="pl">▶</div></div>`}
let tt=null,tk=null;
function tapP(k,el){if(tt&&tk===k){clearTimeout(tt);tt=null;if(!saved[k]){saved[k]=1;ls.set('saved',saved);const b=[...document.querySelectorAll('.s')].find(x=>x.dataset.k===k);b&&(b.textContent='❤️',b.classList.add('on','pop'))}const h=document.createElement('i');h.className='bh';h.textContent='❤️';el.appendChild(h);setTimeout(()=>h.remove(),900);return}tk=k;tt=setTimeout(()=>{tt=null;openP(k)},260)}
function pickScholar(n){fScholar=n;fTopic=null;lim=20;tab='home';render(1);scrollTo(0,0)}
/* ===== استكشاف / محفوظات / مزيد ===== */
function explore(A){const l=filtered();
 A.innerHTML=top()+`<input class="search" id="q" placeholder="ابحث عن عنوان أو شيخ أو موضوع…" value="${esc(query)}">`+chips([['الكل','',"fKind=''"],['فيديوهات','v',"fKind='v'"],['مقاطع قصيرة','s',"fKind='s'"],['قوائم','p',"fKind='p'"]].map(([t,k,f])=>[t,fKind===k,f+';lim=20;render()']))+
 `<div class="grid">${l.slice(0,lim).map(v=>`<div class="gi ${watched[v.key]?'done':''}" onclick="openP('${esc(v.key)}')">${media(v)}<div class="gt">${esc(v.title)}</div></div>`).join('')}</div>`+(l.length?'':'<div class="empty">مفيش نتائج</div>')+(l.length>lim?'<button class="more" onclick="lim+=30;render()">عرض المزيد</button>':'');
 $('#q').oninput=e=>{query=e.target.value.trim();lim=20;const p=e.target.selectionStart;render();const q=$('#q');q.focus();q.setSelectionRange(p,p)}}
function savedTab(A){const l=allVideos().filter(v=>saved[v.key]);A.innerHTML=top(l.length+' محفوظ')+(l.length?l.map(post).join(''):'<div class="empty"><div style="font-size:50px">🤍</div>اضغط على القلب في أي فيديو وهيتحفظ هنا</div>')}
function more(A){const v=allVideos().filter(x=>x.real);
 A.innerHTML=top()+`<div class="sec"><div class="stat"><div><b>${DATA.scholars.length}</b><small>شيخ</small></div><div><b>${v.length}</b><small>فيديو</small></div><div><b>${v.filter(x=>watched[x.key]).length}</b><small>شفتهم</small></div></div><h2>اختصارات</h2>
 <button class="row" onclick="tab='pick';render(1)">⭐ اختار شيوخك المفضلين</button><button class="row" onclick="surprise()">🎲 فاجئني بفيديو</button><button class="row" onclick="surprise(1)">⚡ مقطع قصير عشوائي</button>${dp?'<button class="row" onclick="doInstall()">⬇️ نزّل التطبيق</button>':''}
 <button class="row" onclick="if(confirm('تمسح المشاهدات والمحفوظات؟')){watched={};saved={};ls.set('watched',{});ls.set('saved',{});render()}">🗑️ مسح المشاهدات والمحفوظات</button></div>`}
function surprise(s){const l=allVideos().filter(v=>v.kind==='v'&&(!s||v.short)&&!watched[v.key]);l.length?openP(l[Math.floor(Math.random()*l.length)].key):toast('خلّصت الكل 🎉')}
/* ===== شيخك المفضل + الصور ===== */
function pick(A){const f=favs||{};
 A.innerHTML=`<div class="top"><div class="logo">اسمع دين</div></div><div class="sec"><h2>اختار شيخك المفضل</h2><small style="color:var(--mut)">اختار واحد أو أكتر، وفيديوهاتهم هتظهر لك الأول. اضغط على الصورة لتغييرها.</small></div>
 <div class="pk">${DATA.scholars.map(s=>`<div class="c ${f[s.name]?'on':''}" onclick="tgPick('${esc(s.name)}')"><div class="ring"><div class="av">${avatar(s.name)}</div></div><div style="margin-top:6px">${esc(sname(s.name))}</div></div>`).join('')}</div>
 <div style="padding:0 14px 30px"><button class="gold" onclick="donePick()">${Object.keys(f).length?'ابدأ':'تخطّي'}</button></div>`}
function tgPick(n){favs=favs||{};favs[n]?delete favs[n]:favs[n]=1;ls.set('favs',favs);const y=scrollY;reset();render();scrollTo(0,y)}
function donePick(){favs=favs||{};ls.set('favs',favs);reset();tab='home';render(1);scrollTo(0,0)}
function tgFav(n){favs=favs||{};favs[n]?delete favs[n]:favs[n]=1;ls.set('favs',favs);toast(favs[n]?'اتضاف للمفضلين ⭐':'اتشال من المفضلين');reset();render()}
function setPhoto(n){const i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=()=>{const f=i.files[0];if(!f)return;const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),m=Math.min(im.width,im.height);c.width=c.height=256;c.getContext('2d').drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,256,256);photos[n]=c.toDataURL('image/jpeg',.8);ls.set('photos',photos);toast('اتحطت الصورة 📷');render()};im.src=URL.createObjectURL(f)};i.click()}
/* ===== أفعال ===== */
function tgSave(k,inP){saved[k]?delete saved[k]:saved[k]=1;ls.set('saved',saved);toast(saved[k]?'اتحفظ ❤️':'اتشال من المحفوظات');if(inP)$('#sv').textContent=saved[k]?'❤️ محفوظ':'🤍 احفظ';else{render();const b=[...document.querySelectorAll('.s')].find(x=>x.dataset.k===k);b&&b.classList.add('pop')}}
function tgWat(k){watched[k]?delete watched[k]:watched[k]=1;ls.set('watched',watched);render()}
async function share(k){const v=byKey(k),u=v.kind==='v'?'https://youtu.be/'+v.id:'https://www.youtube.com/playlist?list='+v.id;if(navigator.share){try{await navigator.share({title:v.title,url:u})}catch(e){}}else{try{await navigator.clipboard.writeText(u);toast('اتنسخ الرابط')}catch(e){toast(u)}}}
/* ===== المشغّل ===== */
let cur=null;
function openP(k){const v=byKey(k);if(!v)return;
 if(!v.real){if(confirm('الدرس ده لسه ملوش رابط. أفتح بحث يوتيوب تجيب منه الرابط؟'))window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(v.q),'_blank');const u=prompt('ألصق رابط الفيديو هنا (أو سيبه فاضي)');if(u&&parse(u)){links[k]=u.trim();ls.set('links',links);reset();render();return openP(k)}else if(u)toast('الرابط مش صحيح');return}
 markDay();cur=v;last=k;ls.set('last',k);document.body.style.overflow='hidden';$('#ov').classList.add('show');$('#ovt').textContent=sname(v.scholar);
 const go=()=>{if(player&&player.destroy)try{player.destroy()}catch(e){}$('#pbox').innerHTML='<div id="yt"></div>';const pv={autoplay:1,playsinline:1,rel:0},c={playerVars:pv,events:{onStateChange:e=>{if(e.data===0&&v.kind==='v'){watched[v.key]=1;ls.set('watched',watched);playNext()}}}};if(v.kind==='v')c.videoId=v.id;else{pv.listType='playlist';pv.list=v.id}player=new YT.Player('yt',c)};
 apiReady?go():(pending=go,$('#pbox').innerHTML='<div style="display:grid;place-items:center;color:var(--mut)">جاري التحميل…</div>');
 const rel=allVideos().filter(x=>x.key!==k&&x.kind==='v'&&!watched[x.key]).sort((a,b)=>(b.scholar===v.scholar)-(a.scholar===v.scholar)||(b.topic===v.topic)-(a.topic===v.topic)||a.ord-b.ord).slice(0,15);
 $('#oi').innerHTML=`<div style="padding:12px 14px"><div style="font-size:16px;line-height:1.7">${esc(v.title)}</div><small style="color:var(--gold)">${esc(v.scholar)} — ${esc(v.topic)}</small><div style="display:flex;gap:8px;margin-top:10px"><button id="sv" class="gold o" style="margin:0" onclick="tgSave('${esc(k)}',1)">${saved[k]?'❤️ محفوظ':'🤍 احفظ'}</button><button class="gold o" style="margin:0" onclick="share('${esc(k)}')">📤 شارك</button></div></div><div class="sec" style="padding-bottom:4px"><h2>التالي</h2></div>`+rel.map(x=>`<div class="nx" onclick="openP('${esc(x.key)}')"><div class="nm">${media(x)}</div><div class="t">${esc(x.title)}<small>${esc(sname(x.scholar))}</small></div></div>`).join('');$('#ov').scrollTop=0}
function playNext(){const n=allVideos().find(x=>x.key!==cur.key&&x.kind==='v'&&!watched[x.key]&&x.scholar===cur.scholar)||allVideos().find(x=>x.kind==='v'&&!watched[x.key]);n?openP(n.key):closePlayer()}
function closePlayer(){if(player&&player.destroy)try{player.destroy()}catch(e){}player=null;$('#ov').classList.remove('show');document.body.style.overflow='';setTimeout(()=>{$('#pbox').innerHTML='<div id="yt"></div>'},400);render()}
let dp=null;addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;render()});
async function doInstall(){if(!dp)return;dp.prompt();await dp.userChoice;dp=null;render()}
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

/* ===== تائب 🌱 ===== */
const TV=/توب|رجوع|ذنوب|تخفف|انتكس|ندم|المعاصي|الخلوات|أرهقت|ويعيد|يتوب/,tvids=()=>allVideos().filter(v=>v.real&&TV.test(v.title+' '+v.topic));
const MS=[1,3,7,14,30,60,90],ST=[['🚪','أقلع','وقف الذنب فورًا وابعد عن أسبابه ومكانه'],['💧','اندم','ندم صادق من قلبك، مش جلد للنفس'],['🔒','اعزم','انوِ ما ترجعش، ولو وقعت ابدأ تاني'],['🌱','اتبع السيئة الحسنة','صلاة وصدقة واستغفار، والحسنات تمحو السيئات']];
const SO=[['💧','توضأ فورًا'],['🕌','صلّ ركعتين'],['🚶','غيّر مكانك'],['📞','كلّم صاحب صالح'],['🏃','اشغل نفسك بحركة'],['📿','استغفر ١٠٠ مرة']];
const so=ls.get('sol',{});
function tawba(A){const s=ls.get('tstart',null),d=s?Math.floor((Date.now()-s)/864e5):0,nx=MS.find(m=>m>d)||d+30,pc=s?Math.round(360*d/nx):0,tv=tvids();
 A.innerHTML=`<div class="tw"><div class="rays"></div><div class="sun"></div>${[...Array(12)].map((_,i)=>`<i class="lf" style="left:${8+i*8}%;animation-delay:${i*.6}s;animation-duration:${5+i%4}s">${i%3?'🍃':'✨'}</i>`).join('')}<div class="twt"><h1>باب التوبة مفتوح</h1><div class="vq"><p>﴿لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ﴾</p><p>﴿إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ﴾</p><p>«كل ابن آدم خطّاء، وخير الخطّائين التوّابون»</p></div></div></div>
 <button class="sosb" onclick="sos()"><i></i>🆘 النفس بتغلبني دلوقتي</button>
 <div class="dnc"><div class="dr" style="--p:${pc}deg"><div><b id="dn">0</b><small>${s?'يوم نظيف':'ابدأ رحلتك'}</small></div></div><div class="dt">${s?`<div>الهدف الجاي: <b>${nx}</b> يوم 🎯</div><small>السقوط مش النهاية، المهم تقوم وتكمّل.</small><button class="gold o" onclick="if(confirm('تبدأ من جديد؟ ربنا يقبل منك'))startT()">🔄 ابدأ من جديد</button>`:`<div>ابدأ عدّاد أيامك النظيفة</div><button class="gold" onclick="startT()">🌱 ابدأ رحلتي اليوم</button>`}</div></div>
 <div class="sec"><h2>روشتة التوبة</h2>${ST.map((x,i)=>`<div class="stp"><i style="animation-delay:${i*.3}s">${x[0]}</i><div><b>${x[1]}</b><small>${x[2]}</small></div></div>`).join('')}</div>
 <div class="sec"><h2>لو النفس غلبتك… اعمل واحدة</h2><div class="sols">${SO.map((x,i)=>`<div class="sol ${so[i]?'on':''}" onclick="tgSol(${i},this)"><i>${x[0]}</i>${x[1]}</div>`).join('')}</div></div>
 <div class="sec"><h2>فيديوهات التوبة (${tv.length})</h2></div>`+tv.slice(0,lim).map(post).join('')+(tv.length>lim?'<button class="more" onclick="lim+=10;render()">عرض المزيد</button>':'');
 const e=$('#dn');if(e){let t0=performance.now();const f=n=>{const p=Math.min(1,(n-t0)/1400);e.textContent=Math.round(d*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}
 if(s&&MS.includes(d)&&ls.get('tcel',0)!==d){ls.set('tcel',d);setTimeout(()=>{confetti();toast('ما شاء الله! '+d+' يوم 🎉')},600)}}
function startT(){ls.set('tstart',Date.now());ls.set('tcel',0);confetti();toast('بسم الله 🌱');render(1)}
function tgSol(i,el){so[i]=!so[i];ls.set('sol',so);el.classList.toggle('on',!!so[i]);el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),400);if(so[i])toast('أحسنت 💪')}
function confetti(){const c=document.createElement('div');c.className='cf';for(let i=0;i<44;i++){const p=document.createElement('i');p.style.cssText=`left:${Math.random()*100}%;background:hsl(${Math.random()*360} 80% 60%);--x:${(Math.random()-.5)*200}px;animation-delay:${Math.random()*.4}s;animation-duration:${1.6+Math.random()}s`;c.appendChild(p)}document.body.appendChild(c);setTimeout(()=>c.remove(),3200)}
let tc=0;
function tas(e){tc++;$('#tcn').textContent=tc;const b=e.currentTarget,r=document.createElement('span'),k=b.getBoundingClientRect();r.className='rp';r.style.left=e.clientX-k.left+'px';r.style.top=e.clientY-k.top+'px';b.appendChild(r);setTimeout(()=>r.remove(),700);navigator.vibrate&&navigator.vibrate(8);if(tc%33===0){toast('اللهم اغفر لي 🤍')}}
function sos(){let o=$('#sos');if(!o){o=document.createElement('div');o.id='sos';document.body.appendChild(o)}tc=0;
 o.innerHTML=`<button class="back" onclick="$('#sos').classList.remove('show')">✕</button><div class="sc"><h2>خد نفس… الشعور ده بيعدّي</h2><div class="br"><span class="b1">شهيق</span><span class="b2">زفير</span></div><p>﴿إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ﴾</p><button class="tsb" onclick="tas(event)"><small>أستغفر الله — اضغط</small><b id="tcn">0</b></button><button class="gold" onclick="$('#sos').classList.remove('show');const l=tvids().filter(x=>x.kind==='v'),v=l[Math.floor(Math.random()*l.length)];v&&openP(v.key)">▶ شوف فيديو يرجّعك</button></div>`;requestAnimationFrame(()=>o.classList.add('show'))}

/* ===== قصص القرآن: مشاهد متحركة + فيديو لو موجود ===== */
const orb=[...Array(11)].map((_,i)=>`<i class="st" style="--a:${i*32.7}deg">⭐</i>`).join('');
const QS=[
['sea','فلق البحر','موسى عليه السلام','﴿وَإِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَأَنجَيْنَاكُمْ وَأَغْرَقْنَا آلَ فِرْعَوْنَ﴾',/موسى|فرعون|البحر/,'<u class="wall l"></u><u class="wall r"></u><u class="pth"></u><i class="sun">☀️</i><i class="fsh f1">🐟</i><i class="fsh f2">🐠</i>'],
['ark','سفينة نوح','نوح عليه السلام','﴿وَقَالَ ارْكَبُوا فِيهَا بِسْمِ اللَّهِ مَجْرَاهَا وَمُرْسَاهَا﴾',/نوح|السفينة|الطوفان/,'<i class="rain"></i><i class="cld c1">☁️</i><i class="cld c2">☁️</i><i class="ark">🚢</i><u class="wav w1"></u><u class="wav w2"></u>'],
['fire','نار إبراهيم','إبراهيم عليه السلام','﴿قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ﴾',/إبراهيم|النار/,'<i class="fire">🔥</i><i class="fire f2">🔥</i><i class="snw s1">❄️</i><i class="snw s2">❄️</i><i class="snw s3">❄️</i>'],
['whale','يونس في بطن الحوت','يونس عليه السلام','﴿فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ﴾',/يونس|الحوت/,'<u class="glow"></u><i class="whl">🐋</i><i class="bub b1">🫧</i><i class="bub b2">🫧</i><i class="bub b3">🫧</i><p class="cap">لا إله إلا أنت سبحانك</p>'],
['cave','أصحاب الكهف','الفتية المؤمنون','﴿إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً﴾',/الكهف|الفتية/,'<i class="moon">🌙</i><i class="tw t1">⭐</i><i class="tw t2">✨</i><i class="tw t3">⭐</i><u class="cav"></u><i class="zz">💤</i>'],
['yusuf','رؤيا يوسف','يوسف عليه السلام','﴿إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ﴾',/يوسف/,'<i class="sun">☀️</i><i class="moon">🌙</i><div class="orb">'+orb+'</div>'],
['bird','سليمان والهدهد','سليمان عليه السلام','﴿وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ﴾',/سليمان|الهدهد/,'<i class="sun">☀️</i><i class="cld c1">☁️</i><i class="cld c2">☁️</i><i class="brd">🐦</i>']];
function qisas(A){const all=allVideos();
 A.innerHTML=top('📖')+`<div class="sec"><h2>قصص القرآن</h2><small style="color:var(--mut)">اضغط على المشهد يتحرك من جديد، والفيديو بيظهر تحته لو موجود</small></div>`+QS.map(q=>{const vs=all.filter(v=>v.real&&q[4].test(v.title+' '+v.topic));
  return `<div class="qc stp-r"><div class="scn s-${q[0]}" onclick="rePlay(this,event)">${q[5]}<div class="qt"><b>${q[1]}</b><small>${q[2]}</small></div>${vs.length?`<button class="qp" onclick="event.stopPropagation();openP('${esc(vs[0].key)}')">▶</button>`:''}</div><p class="ay">${q[3]}</p>${vs.length?vs.slice(0,3).map(x=>`<div class="nx" onclick="openP('${esc(x.key)}')"><div class="nm">${media(x)}</div><div class="t">${esc(x.title)}<small>${esc(sname(x.scholar))}</small></div></div>`).join(''):'<small class="nov">🎬 لسه مفيش فيديو — استمتع بالمشهد المتحرك</small>'}</div>`}).join('');
 document.querySelectorAll('.scn').forEach(x=>ioS.observe(x))}
const ioS=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('go',e.isIntersecting)),{threshold:.45});
function rePlay(el,e){el.classList.remove('go');el.classList.add('nr');void el.offsetWidth;el.classList.remove('nr');el.classList.add('go');const k=el.getBoundingClientRect();for(let i=0;i<7;i++){const s=document.createElement('i');s.className='spk';s.textContent=['✨','⭐','💫'][i%3];s.style.cssText=`left:${e.clientX-k.left}px;top:${e.clientY-k.top}px;--x:${(Math.random()-.5)*160}px;--y:${-30-Math.random()*90}px`;el.appendChild(s);setTimeout(()=>s.remove(),900)}navigator.vibrate&&navigator.vibrate(12)}
if(favs===null)tab='pick';render(1);
