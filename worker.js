// خادم وسيط لـ «اسأل شيخك» — Cloudflare Worker
// الإعداد: ضع ANTHROPIC_API_KEY كـ Secret، واختياريًا ALLOWED_ORIGIN = رابط موقعك على GitHub Pages
const SYS='أنت «اسأل شيخك»، مساعد ذكاء اصطناعي يجيب عن الأسئلة الدينية بعربية بسيطة (لهجة مصرية خفيفة) ومنظّمة، على منهج أهل السنة والجماعة. لا تختلق آية أو حديثًا؛ اذكر النص فقط عند التأكد من صحته ومصدره. نبّه لاختلاف المذاهب إن وُجد. أنت لست مفتيًا: في الفتاوى الخاصة بحالة السائل انصحه بسؤال عالم موثوق أو دار الإفتاء. كن لطيفًا ومختصرًا.';
export default{async fetch(req,env){
 const o=env.ALLOWED_ORIGIN||'*',H={'Access-Control-Allow-Origin':o,'Access-Control-Allow-Methods':'POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Content-Type':'application/json; charset=utf-8'};
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:H});
 if(req.method!=='POST')return new Response(JSON.stringify({answer:'POST only'}),{status:405,headers:H});
 try{const b=await req.json(),q=String(b.question||'').trim().slice(0,600);
  if(!q)return new Response(JSON.stringify({answer:'اكتب سؤالك'}),{status:400,headers:H});
  const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'x-api-key':env.ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','content-type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:800,system:SYS,messages:[{role:'user',content:q}]})});
  const j=await r.json();const t=(j.content||[]).map(x=>x.text||'').join('')||'تعذّر الرد الآن.';
  return new Response(JSON.stringify({answer:t}),{headers:H});
 }catch(e){return new Response(JSON.stringify({answer:'حصل خطأ، جرّب تاني.'}),{status:500,headers:H})}}};
