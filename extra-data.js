// بيانات إضافية: شورتس ورقائق (روابط يوتيوب حقيقية) + صور الشيوخ. بتتدمج تلقائياً في DATA.
// short:1 = مقطع قصير. لإضافة فيديو: أضف سطر في videos بنفس الشكل.
(function(){
const S=u=>'https://www.youtube.com/shorts/'+u,V=u=>'https://www.youtube.com/watch?v='+u,P=u=>'https://www.youtube.com/playlist?list='+u;
const ADD=[
{n:'أمجد سمير',g:0,sec:'رقائق',v:[
 {title:'عفوك يا رب',url:S('DsB73053bbs'),short:1},
 {title:'أول علامة من علامات الغفلة',url:S('7iHfdRaoOMM'),short:1},
 {title:'إنزل الجيم ومتكسلش',url:S('htclO1rXp9U'),short:1},
 {title:'الوقت لا يعوض',url:V('52FOHXXNoaA')},
 {title:'السلف والمثالية',url:V('SCjgJXH1Bzc')}]},
{n:'شريف علي',g:0,sec:'رقائق',v:[
 {title:'نعمة الدين!',url:S('4ktQJVtwKOw'),short:1},
 {title:'أهل التقوى وأهداف الشيطان',url:V('aIOq8pNWWo4')}]},
{n:'شريف علي',g:0,sec:'قصص مؤثرة',v:[
 {title:'شريف علي يحكي قصة هدايته',url:V('eEWbnT4CZYI')}]},
{n:'الشيخ محمد الغليظ',g:0,sec:'رقائق',v:[
 {title:'انت مش قولت هتوب؟',url:S('iweXRQi773o'),short:1},
 {title:'محسود على إيه؟!',url:S('TyZxbBIq3Fs'),short:1},
 {title:'اعمل إيه في يوم عرفة',url:V('p0Dslo_GqYg')},
 {title:'لا تهمل نفسك — فضفضة الأحد',url:V('NC8FyMKYu8E')}]},
{n:'حازم شومان',g:0,sec:'رقائق',v:[
 {title:'سر استجابة الدعاء بين الأذان والإقامة',url:S('2i8Xd8eHEG0'),short:1},
 {title:'تعرف خالد بن الوليد عمل إيه للإسلام؟',url:V('hBukp_k5zUA'),short:1},
 {title:'ومات الشاب إسلام — مقطع مؤثر',url:V('qR6XZ3lheO0')},
 {title:'تخيّل لو — مقطع مؤثر',url:V('YYlAy91rYnE')}]},
{n:'حازم شومان',g:0,sec:'قوائم تشغيل',v:[
 {title:'مقاطع عن بر الوالدين',url:P('PLVPp4tYPys9P6aCkw-K1uZdo4iLdReJWD')}]},
{n:'دكتور أحمد العربي',g:0,sec:'قوائم تشغيل',v:[
 {title:'قائمة الدكتور أحمد العربي (دين وروحانيات)',url:P('PLG9nxXAFyHTVS8vlnA5hDQvamvgjcXjCV')}]},
{n:'الشيخ أحمد عامر',g:1,sec:'تجويد وتحفيظ القرآن',v:[
 {title:'شرح وتجويد وتحفيظ القرآن',url:P('PLb_pX0Di7JGcRyc-vQGXov8i-d1LrTSFZ')}]}
];
// صور الشيوخ: حط الصورة في فولدر photos بنفس الاسم (jpg). لو الصورة مش موجودة بيستخدم صورة من فيديو الشيخ.
const PH={'دكتور أحمد العربي':'araby','أمجد سمير':'amgad','سمير مصطفى':'sameer','الشيخ محمد الغليظ':'ghaleez','ياسر ممدوح':'yasser','حازم شومان':'hazem','شريف علي':'sherif','عبد العزيز الطريفي':'tareefi','الشيخ أحمد عامر':'ahmedamer'};
ADD.forEach(a=>{let s=DATA.scholars.find(x=>x.name===a.n);if(!s){s={name:a.n,g:a.g,sections:[]};DATA.scholars.push(s)}
 let c=s.sections.find(x=>x.title===a.sec);if(!c){c={title:a.sec,videos:[]};s.sections.push(c)}
 a.v.forEach(v=>{if(!s.sections.some(x=>x.videos.some(y=>y.url===v.url)))c.videos.push(v)})});
DATA.scholars.forEach(s=>{if(PH[s.name]&&!s.photo)s.photo='photos/'+PH[s.name]+'.jpg'});
})();
