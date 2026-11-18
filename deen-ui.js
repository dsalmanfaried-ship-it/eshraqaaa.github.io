// ===== اسمع دين: ملف واحد للشكل + الأنيميشن =====
// بيبني الرئيسية (دواير + كارت كبير + فلاتر + كروت بصور كبيرة) ويشغّل الفيديو جوه التطبيق.
// ملف واحد بيحط الـ CSS لنفسه ومعاه الأنيميشن، وبيستخدم deen-data.js.
// التركيب في index.html:
//   <div id="deen-home"></div>
//   <script src="deen-data.js"></script>
//   <script src="deen-ui.js"></script>
//   <script>DeenUI.mount("#deen-home")</script>
// بعد التركيب تقدر تمسح deen-anim.js، لأن الأنيميشن دخل هنا.

const DeenUI = (() => {
  // ---- قيم موحدة (الزمن والمسافات) ----
  const T = { fast: 180, base: 320, slow: 520, stagger: 55, dist: 16 };
  const FAV_KEY = "deen:fav";
  const state = { filter: "all", sheikh: "all", favorite: null, root: null };

  const CSS = `
  .dx{--bg:#0b0f0d;--card:#141a17;--line:#222b26;--gold:#d4af37;--gold2:#f0d77a;--green:#3fbf8a;--text:#f3efe3;--mute:#9aa59f;
    --fast:${T.fast}ms;--base:${T.base}ms;--slow:${T.slow}ms;--ease:cubic-bezier(.22,.8,.3,1);--spring:cubic-bezier(.34,1.4,.5,1);--dist:${T.dist}px;
    direction:rtl;background:var(--bg);color:var(--text);font-family:system-ui,"Segoe UI",Tahoma,sans-serif;padding:0 0 90px;min-height:100%}
  .dx *{box-sizing:border-box}
  .dx-circles{display:flex;gap:14px;overflow-x:auto;padding:14px 16px 10px;scrollbar-width:none;border-bottom:1px solid var(--line)}
  .dx-circles::-webkit-scrollbar{display:none}
  .dx-c{flex:0 0 auto;width:78px;text-align:center;cursor:pointer}
  .dx-ring{width:74px;height:74px;border-radius:50%;padding:3px;background:conic-gradient(var(--gold),var(--green),var(--gold));position:relative;margin:0 auto}
  .dx-c.on .dx-ring{box-shadow:0 0 0 3px rgba(212,175,55,.35)}
  .dx-img{width:100%;height:100%;border-radius:50%;border:3px solid var(--bg);background-size:cover;background-position:center;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff}
  .dx-star{position:absolute;bottom:-2px;left:-2px;font-size:18px}
  .dx-cn{font-size:12px;margin-top:6px;color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .dx-c.on .dx-cn{color:var(--gold2)}
  .dx-hero{margin:16px;border-radius:24px;overflow:hidden;position:relative;aspect-ratio:16/11;background:var(--card);cursor:pointer}
  .dx-hero .dx-bg,.dx-card .dx-bg{position:absolute;inset:0;background-size:cover;background-position:center}
  .dx-hero::after,.dx-card::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.88),rgba(0,0,0,.05) 62%)}
  .dx-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:68px;height:68px;border-radius:50%;background:rgba(0,0,0,.55);border:2px solid var(--gold);z-index:2;display:flex;align-items:center;justify-content:center;transition:transform var(--fast) var(--ease)}
  .dx-play::before{content:"";border-style:solid;border-width:11px 0 11px 18px;border-color:transparent transparent transparent var(--gold2);margin-left:4px}
  .dx-badge{position:absolute;top:14px;right:14px;z-index:2;background:var(--gold);color:#111;font-weight:700;font-size:12px;padding:5px 12px;border-radius:20px}
  .dx-meta{position:absolute;z-index:2;right:16px;left:16px;bottom:14px}
  .dx-title{font-size:19px;font-weight:700;line-height:1.5}
  .dx-who{font-size:13px;color:var(--gold2);margin-top:4px}
  .dx-chips{display:flex;gap:10px;overflow-x:auto;padding:4px 16px 12px;scrollbar-width:none}
  .dx-chip{flex:0 0 auto;padding:9px 18px;border-radius:22px;background:var(--card);border:1px solid var(--line);color:var(--text);font-size:14px;cursor:pointer}
  .dx-chip.on{background:var(--gold);color:#111;font-weight:700;border-color:var(--gold)}
  .dx-feed{display:grid;grid-template-columns:1fr;gap:16px;padding:0 16px}
  .dx-card{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/10;background:var(--card);cursor:pointer}
  .dx-card.short{aspect-ratio:9/12}
  .dx-card.big{aspect-ratio:16/11}
  .dx-empty{padding:40px 24px;text-align:center;color:var(--mute);line-height:1.9}
  .dx-modal{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.94);display:none;align-items:center;justify-content:center;flex-direction:column}
  .dx-modal.open{display:flex;animation:dxPop var(--slow) var(--spring)}
  .dx-modal iframe{border:0;border-radius:14px;background:#000;width:100%}
  .dx-x{position:absolute;top:calc(env(safe-area-inset-top,0px) + 12px);left:14px;background:var(--gold);color:#111;border:0;border-radius:20px;padding:9px 18px;font-size:15px;font-weight:700}
  .dx-ext{margin-top:12px;color:var(--gold2);font-size:14px;text-decoration:underline}
  /* الأنيميشن الموحد */
  .dx-init{opacity:0;transform:translateY(var(--dist));will-change:transform,opacity}
  .dx-in{opacity:1;transform:none;transition:opacity var(--base) var(--ease),transform var(--base) var(--ease);transition-delay:var(--d,0ms)}
  .dx-press{transition:transform var(--fast) var(--ease)}
  .dx-press:active{transform:scale(.96)}
  .dx-hero:active .dx-play,.dx-card:active .dx-play{transform:translate(-50%,-50%) scale(1.12)}
  @keyframes dxPop{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
  @keyframes dxGlow{0%,100%{box-shadow:0 0 0 rgba(212,175,55,0)}50%{box-shadow:0 0 18px rgba(212,175,55,.4)}}
  .dx-hero{animation:dxGlow 3s ease-in-out infinite}
  @media (min-width:700px){.dx-feed{grid-template-columns:1fr 1fr}}
  @media (prefers-reduced-motion:reduce){.dx *{animation:none!important;transition:none!important}.dx-init{opacity:1;transform:none}}`;

  // ---- أدوات ----
  const esc = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nameOf = (k) => (SHEIKHS.find((x) => x.key === k) || { name: "" }).name;
  const thumbOf = (it) => (it.platform === "youtube" && it.ref ? shortThumb(it.ref) : "");
  const isShort = (it) => REAL_SHORTS.includes(it) || (it.kind === "shorts") || (it.title || "").indexOf("شورت") === 0;
  const bg = (it) => {
    const t = thumbOf(it);
    if (t) return `style="background-image:url('${t}')"`;
    const f = circleFallback(it.sheikh);
    return `style="background:${f.gradient}"`;
  };

  let io;
  function reveal(root) {
    const els = root.querySelectorAll(".dx-init:not(.dx-in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("dx-in")); return; }
    io = io || new IntersectionObserver((entries) => {
      let i = 0;
      entries.filter((e) => e.isIntersecting).forEach((e) => {
        e.target.style.setProperty("--d", Math.min(i++, 8) * T.stagger + "ms");
        e.target.classList.add("dx-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  // ---- المشغّل جوه التطبيق ----
  function player() {
    let m = document.querySelector(".dx-modal");
    if (m) return m;
    m = document.createElement("div");
    m.className = "dx-modal";
    m.innerHTML = '<button class="dx-x">✕ إغلاق</button><div class="dx-box" style="width:100%;display:flex;flex-direction:column;align-items:center"></div>';
    m.querySelector(".dx-x").onclick = close;
    m.addEventListener("click", (e) => { if (e.target === m) close(); });
    (state.root || document.body).appendChild(m);
    return m;
  }
  function close() {
    const m = document.querySelector(".dx-modal");
    if (!m) return;
    m.classList.remove("open");
    m.querySelector(".dx-box").innerHTML = "";
  }
  function play(it) {
    const m = player();
    const url = fastEmbed(it);
    const vertical = isShort(it);
    const w = vertical ? "min(92vw,52vh)" : "100%";
    const h = vertical ? "min(88vh,92vw*16/9)" : "56.25vw";
    m.querySelector(".dx-box").innerHTML = url
      ? `<iframe src="${url}" loading="lazy" style="width:${w};height:${h}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
      : "";
    const ext = searchUrl(it);
    m.querySelector(".dx-box").insertAdjacentHTML("beforeend",
      `<a class="dx-ext" href="${esc(ext)}" target="_blank" rel="noopener">لو الفيديو ماظهرش افتحه برا</a>`);
    m.classList.add("open");
  }

  // ---- البناء ----
  function items() {
    const fav = state.favorite;
    let list;
    if (state.sheikh !== "all") list = [...videosQueue({ sheikh: state.sheikh }), ...shortsQueue({ sheikh: state.sheikh })];
    else list = homeFeed({ favorite: fav, count: 30 });
    if (state.filter === "fav" && fav) list = list.filter((x) => x.sheikh === fav);
    if (state.filter === "short") list = list.filter(isShort);
    if (state.filter === "playlist") list = list.filter((x) => x.platform === "playlist");
    return list;
  }

  function circlesHTML() {
    return homeCircles(state.favorite).map((c) => {
      const on = (c.key === "all" ? state.sheikh === "all" : state.sheikh === c.key) ? " on" : "";
      const inner = c.key === "all"
        ? `<div class="dx-img" style="background:#10201a;color:var(--gold)">✦</div>`
        : `<div class="dx-img" style="${c.image ? `background-image:url('${c.image}'),${c.fallback.gradient}` : `background:${c.fallback.gradient}`}">${c.image ? "" : esc(c.fallback.letter)}</div>`;
      return `<div class="dx-c dx-press${on}" data-k="${c.key}"><div class="dx-ring">${inner}${c.star ? '<span class="dx-star">⭐</span>' : ""}</div><div class="dx-cn">${esc(c.name)}</div></div>`;
    }).join("");
  }

  function cardHTML(it, i, big) {
    const cls = "dx-card dx-init dx-press" + (isShort(it) ? " short" : big ? " big" : "");
    return `<div class="${cls}" data-i="${i}"><div class="dx-bg" ${bg(it)}></div><div class="dx-play"></div><div class="dx-meta"><div class="dx-title">${esc(it.title)}</div><div class="dx-who">${esc(nameOf(it.sheikh))}</div></div></div>`;
  }

  function render() {
    const list = items();
    state.list = list;
    const hero = list[0];
    const chips = [["all", "الكل"], ["fav", "⭐ مفضلتي"], ["short", "⚡ قصيرة"], ["playlist", "📋 قوائم"]]
      .map(([k, t]) => `<div class="dx-chip dx-press${state.filter === k ? " on" : ""}" data-f="${k}">${t}</div>`).join("");
    const body = list.length
      ? `<div class="dx-hero dx-init dx-press" data-i="0"><div class="dx-bg" ${bg(hero)}></div><span class="dx-badge">🔥 فيديو اليوم</span><div class="dx-play"></div><div class="dx-meta"><div class="dx-title">${esc(hero.title)}</div><div class="dx-who">${esc(nameOf(hero.sheikh))}</div></div></div>
         <div class="dx-chips">${chips}</div>
         <div class="dx-feed">${list.slice(1).map((it, j) => cardHTML(it, j + 1, j < 2)).join("")}</div>`
      : `<div class="dx-chips">${chips}</div><div class="dx-empty">مفيش فيديوهات متاحة هنا لسه.<br>ضيف أكواد الفيديوهات (ref) في deen-data.js.</div>`;
    state.root.innerHTML = `<div class="dx-circles">${circlesHTML()}</div>${body}`;
    reveal(state.root);
  }

  function bind() {
    state.root.addEventListener("click", (e) => {
      const c = e.target.closest(".dx-c");
      if (c) { state.sheikh = c.dataset.k; state.filter = "all"; return render(); }
      const f = e.target.closest(".dx-chip");
      if (f) { state.filter = f.dataset.f; return render(); }
      const card = e.target.closest("[data-i]");
      if (card) play(state.list[+card.dataset.i]);
    });
    // ضغطة طويلة على الدايرة = تعيين مفضل
    let timer;
    state.root.addEventListener("pointerdown", (e) => {
      const c = e.target.closest(".dx-c");
      if (!c || c.dataset.k === "all") return;
      timer = setTimeout(() => { setFavorite(c.dataset.k); }, 650);
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => state.root.addEventListener(ev, () => clearTimeout(timer)));
  }

  function setFavorite(k) {
    state.favorite = k;
    try { localStorage.setItem(FAV_KEY, k); } catch (e) {}
    render();
  }

  function mount(selector, opts = {}) {
    state.root = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!state.root) return;
    state.root.classList.add("dx");
    if (!document.getElementById("deen-ui-css")) {
      const st = document.createElement("style");
      st.id = "deen-ui-css";
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    try { state.favorite = opts.favorite || localStorage.getItem(FAV_KEY) || "arabi"; } catch (e) { state.favorite = opts.favorite || "arabi"; }
    bind();
    render();
  }

  return { mount, render, setFavorite, play, close, T };
})();
