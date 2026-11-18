// صوتيات ساوند كلاود جوه «اسمع دين» — ملف إضافي مستقل (حطيه جنب index.html)
// عشان تضيفي درس: انسخي سطر من القايمة تحت وغيّري العنوان والرابط.
(()=>{
const SC=[
{t:'لقاء 34: لغة القرآن وتميزها على سائر لغات العالمين',s:'د. عبدالمجيد الطيب عمر',c:'لغة القرآن',u:'https://soundcloud.com/tafsircenter/34a-4'},
{t:'سلسلة صُحبة',s:'مركز آيات لتعليم القرآن الكريم',c:'رقائق',u:'https://soundcloud.com/ayatqurancenter/sets/sohba'},
{t:'محاضرات ومقاطع',s:'الشيخ عمرو الشرقاوي',c:'محاضرات',u:'https://soundcloud.com/itsthequran/sets/druonotv0mqa'},
{t:'سلسلة تفسير القرآن – رمضان 1435',s:'د. أحمد جلال',c:'تفسير',u:'https://soundcloud.com/ahmed-galal-412125487/sets/14a1'},
{t:'دروس وخطب ومحاضرات منوعة',s:'الشيخ محمد العريفي وخالد الراشد',c:'محاضرات',u:'https://soundcloud.com/quran-sunnah/sets/xsme2eglifnr'},
{t:'القرآن الكريم',s:'الشيخ أحمد بن علي العجمي',c:'تلاوات',u:'https://soundcloud.com/holyquranofficial/sets/ahmed-al-ajamy'}
];
const K='sc_custom',g=()=>{try{return JSON.parse(localStorage.getItem(K)||'[]')}catch(e){return[]}};
const all=()=>SC.concat(window.SC_EXTRA||[],g());
const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const css=document.createElement('style');
css.textContent='#scb{position:fixed;right:12px;bottom:150px;z-index:9998;width:48px;height:48px;border-radius:50%;border:0;background:#e0bd6b;color:#0b0f0d;font-size:22px;box-shadow:0 6px 20px rgba(0,0,0,.4)}#sco{position:fixed;inset:0;z-index:9999;background:#0b0f0d;color:#f4f0e6;display:none;flex-direction:column;font-family:inherit;direction:rtl}#sco.on{display:flex}#sco .h{display:flex;gap:8px;align-items:center;padding:12px;border-bottom:1px solid #1d4033}#sco .h b{flex:1;color:#e0bd6b}#sco button,#sco input{font:inherit}#sco .x{background:none;border:0;color:#f4f0e6;font-size:22px}#sco .b{overflow:auto;padding:12px;flex:1}#sco input{width:100%;background:#12231c;color:#f4f0e6;border:1px solid #1d4033;border-radius:12px;padding:10px;margin-bottom:8px}#sco .i{display:block;width:100%;text-align:start;background:#10201a;border:1px solid #1d4033;color:#f4f0e6;border-radius:14px;padding:10px 12px;margin:6px 0}#sco .i small{display:block;color:#8fb0a2}#sco .i.on{border-color:#e0bd6b}#sco .g{background:#e0bd6b;color:#0b0f0d;border:0;border-radius:12px;padding:10px 16px;font-weight:700}#sco iframe{width:100%;border:0;border-radius:12px;margin-bottom:10px}#sco h4{color:#e0bd6b;margin:14px 0 4px}';
document.head.appendChild(css);
const o=document.createElement('div');o.id='sco';
o.innerHTML='<div class="h"><button class="x" id="scx" aria-label="إغلاق">✕</button><b>🎧 صوتيات ساوند كلاود</b></div><div class="b"><div id="scp"></div><input id="scq" placeholder="ابحث في الصوتيات…"><div id="scl"></div><h4>أضف رابط ساوند كلاود</h4><input id="sct" placeholder="العنوان"><input id="scu" dir="ltr" placeholder="https://soundcloud.com/…"><button class="g" id="sca">إضافة</button></div>';
document.body.appendChild(o);
const bt=document.createElement('button');bt.id='scb';bt.textContent='🎧';bt.setAttribute('aria-label','صوتيات');document.body.appendChild(bt);
const $=s=>o.querySelector(s);
let cur='';
function list(){
  const q=$('#scq').value.trim(),m={};
  all().filter(x=>!q||(x.t+(x.s||'')+(x.c||'')).includes(q)).forEach(x=>{const c=x.c||'متنوع';(m[c]=m[c]||[]).push(x)});
  $('#scl').innerHTML=Object.keys(m).map(c=>'<h4>'+E(c)+'</h4>'+m[c].map(x=>'<button class="i'+(x.u===cur?' on':'')+'" data-u="'+E(x.u)+'" data-t="'+E(x.t)+'">'+E(x.t)+'<small>'+E(x.s||'')+'</small></button>').join('')).join('')||'<p>لا نتائج</p>';
}
const show=()=>{o.classList.add('on');list()};
function play(u){
  cur=u;const set=/\/sets\//.test(u);
  $('#scp').innerHTML='<iframe height="'+(set?380:166)+'" allow="autoplay" src="https://w.soundcloud.com/player/?url='+encodeURIComponent(u)+'&auto_play=true&visual=false&color=%23e0bd6b"></iframe>';
  show();
}
bt.onclick=show;
$('#scx').onclick=()=>o.classList.remove('on');
$('#scq').oninput=list;
$('#scl').onclick=e=>{const b=e.target.closest('.i');if(b)play(b.dataset.u)};
$('#sca').onclick=()=>{
  const u=$('#scu').value.trim(),t=$('#sct').value.trim()||'درس صوتي';
  if(!/^https?:\/\/(on\.)?soundcloud\.com\//.test(u)){alert('الرابط لازم يكون من ساوند كلاود');return}
  const a=g();a.push({t,s:'أضفته أنت',c:'دروسي',u});
  try{localStorage.setItem(K,JSON.stringify(a))}catch(e){}
  $('#scu').value='';$('#sct').value='';list();
};
// أي رابط ساوند كلاود في التطبيق يتفتح هنا بدل ما يطلع برّه
document.addEventListener('click',e=>{
  const a=e.target.closest&&e.target.closest('a[href*="soundcloud.com"]');
  if(a&&!o.contains(a)){e.preventDefault();e.stopPropagation();play(a.href)}
},true);
const wo=window.open;
window.open=function(u){if(u&&/soundcloud\.com/.test(u)){play(String(u));return null}return wo.apply(this,arguments)};
window.openSoundCloud=play;
})();
