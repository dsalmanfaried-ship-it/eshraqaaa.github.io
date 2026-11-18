// ===== اسمع دين: نظام الانيميشن (ملف واحد ينظم كل الحركة) =====
// ملف واحد بيحط الـ CSS لنفسه، مفيش ملف CSS تاني.
// الاستخدام: حمّله في index.html قبل app.js:  <script src="deen-anim.js"></script>
// وبعدها في app.js:  DeenAnim.init();  وكل ما تضيف عناصر جديدة: DeenAnim.scan();
//
// كل الحركة بتمشي على نفس الأرقام (الزمن والمنحنى والمسافة) عشان تحس إنها متظبطة على بعضها.

const DeenAnim = (() => {
  // ---- 1) القيم الموحدة: غيّرها هنا بس ----
  const T = {
    fast: 180,      // ms: ضغطة، hover
    base: 320,      // ms: ظهور كارت، تبديل تاب
    slow: 520,      // ms: مودال، ترحيب
    ease: "cubic-bezier(.22,.8,.3,1)",     // خروج ناعم
    spring: "cubic-bezier(.34,1.4,.5,1)",  // ارتداد خفيف
    dist: 16,       // px: مسافة الحركة
    stagger: 55,    // ms: الفرق بين كل عنصر والتاني
    maxStagger: 8   // أقصى عدد عناصر بتتأخر (عشان القائمة الطويلة ماتتأخرش)
  };

  // ---- 2) ربط العناصر بنوع الحركة: عدّل selectors بأسماء الكلاسات عندك ----
  // الأنواع: rise (طلوع) | fade | pop (تكبير خفيف) | slide (من الجنب)
  const MAP = {
    ".card, .video-card, .story-card, .sheikh-card": "rise",
    ".section-title, .tab-content": "fade",
    ".modal, .sheet, .player": "pop",
    ".short-item": "slide"
  };

  // ---- 3) CSS (بيتحقن مرة واحدة) ----
  const CSS = `
  :root{--a-fast:${T.fast}ms;--a-base:${T.base}ms;--a-slow:${T.slow}ms;--a-ease:${T.ease};--a-spring:${T.spring};--a-dist:${T.dist}px}
  .a-init{opacity:0;will-change:transform,opacity}
  .a-init.a-rise{transform:translateY(var(--a-dist))}
  .a-init.a-slide{transform:translateX(calc(var(--a-dist) * -1))}
  .a-init.a-pop{transform:scale(.94)}
  .a-in{opacity:1!important;transform:none!important;
    transition:opacity var(--a-base) var(--a-ease),transform var(--a-base) var(--a-ease);
    transition-delay:var(--a-d,0ms)}
  .a-in.a-pop{transition-timing-function:var(--a-spring);transition-duration:var(--a-slow)}
  /* ضغطة موحدة على أي زرار أو كارت قابل للضغط */
  .a-press{transition:transform var(--a-fast) var(--a-ease)}
  .a-press:active{transform:scale(.96)}
  /* تبديل التابات */
  .a-tab-enter{animation:aTab var(--a-base) var(--a-ease) both}
  @keyframes aTab{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  /* نبضة للإعجاب/الحفظ */
  .a-beat{animation:aBeat var(--a-base) var(--a-spring)}
  @keyframes aBeat{0%{transform:scale(1)}40%{transform:scale(1.25)}100%{transform:scale(1)}}
  /* لمعة ذهبية بسيطة للعناصر المميزة */
  .a-glow{animation:aGlow 2.4s ease-in-out infinite}
  @keyframes aGlow{0%,100%{box-shadow:0 0 0 rgba(212,175,55,0)}50%{box-shadow:0 0 14px rgba(212,175,55,.35)}}
  /* هيكل تحميل بدل الفراغ */
  .a-skel{background:linear-gradient(90deg,#161b18 25%,#202722 37%,#161b18 63%);background-size:400% 100%;animation:aSkel 1.3s ease infinite;border-radius:12px}
  @keyframes aSkel{0%{background-position:100% 50%}100%{background-position:0 50%}}
  /* احترام إعداد تقليل الحركة في الموبايل */
  @media (prefers-reduced-motion:reduce){
    .a-init,.a-in{opacity:1!important;transform:none!important;transition:none!important}
    .a-tab-enter,.a-beat,.a-glow,.a-skel{animation:none!important}
  }`;

  let io, started = false;
  const reduce = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function inject() {
    if (document.getElementById("deen-anim-css")) return;
    const st = document.createElement("style");
    st.id = "deen-anim-css";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function observer() {
    if (io) return io;
    io = new IntersectionObserver((entries) => {
      // عناصر الدفعة الواحدة بتظهر ورا بعض بترتيب ثابت
      let i = 0;
      entries.filter(e => e.isIntersecting).forEach(e => {
        e.target.style.setProperty("--a-d", Math.min(i++, T.maxStagger) * T.stagger + "ms");
        e.target.classList.add("a-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    return io;
  }

  // يمسح الصفحة ويطبق الحركة على اللي لسه ماتحركش
  function scan(root = document) {
    if (reduce()) return;
    const obs = observer();
    Object.entries(MAP).forEach(([sel, kind]) => {
      root.querySelectorAll(sel).forEach(el => {
        if (el.dataset.aDone) return;
        el.dataset.aDone = "1";
        el.classList.add("a-init", "a-" + kind);
        obs.observe(el);
      });
    });
  }

  // ضغطة موحدة لأي عنصر قابل للضغط
  function pressables(root = document) {
    root.querySelectorAll("button, [role=button], a.card, .card, .video-card, .story-card").forEach(el => el.classList.add("a-press"));
  }

  // استخدمها لما تبدل تاب أو صفحة
  function tab(el) {
    if (!el || reduce()) return;
    el.classList.remove("a-tab-enter");
    void el.offsetWidth; // يعيد تشغيل الحركة
    el.classList.add("a-tab-enter");
  }

  // نبضة (إعجاب، حفظ، إضافة للمفضلة)
  function beat(el) {
    if (!el || reduce()) return;
    el.classList.remove("a-beat");
    void el.offsetWidth;
    el.classList.add("a-beat");
  }

  function init(opts = {}) {
    if (started) return scan();
    started = true;
    if (opts.map) Object.assign(MAP, opts.map);
    inject();
    const go = () => { scan(); pressables(); };
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", go) : go();
    // أي عناصر بتتضاف بعدين (قوائم، شورتس) بتتحرك لوحدها
    new MutationObserver((m) => {
      if (m.some(x => x.addedNodes.length)) { scan(); pressables(); }
    }).observe(document.body, { childList: true, subtree: true });
  }

  return { init, scan, tab, beat, T, MAP };
})();
