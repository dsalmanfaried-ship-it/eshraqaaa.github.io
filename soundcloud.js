// ===== اسمع دين: ساوند كلاود جوه التطبيق =====
// ملف واحد مستقل. في index.html بيتحمل آخر حاجة (بعد app.js و extra.js)، وده الترتيب الصح.
// بيعمل:
//  1) أي لينك ساوند كلاود في التطبيق بيتفتح جوه مشغّل التطبيق، مش بيطلع برا.
//  2) بيظبط الرابط قبل التشغيل (www / m / http / باراميترات التتبع).
//  3) لو المشغّل ما اشتغلش بيقولك ليه وبيدّيك زرار "جرّب تاني" و"افتح في ساوند كلاود".
//  4) فيه مكتبة روابط جاهزة وإمكانية تضيف رابطك بإيدك (بتتحفظ على جهازك).
// ملحوظة: الشكل بيتحقن بالـ CSS بتاعه، من غير ما يغيّر في ديزاين باقي التطبيق.

(function () {
  "use strict";
  if (window.SCPlayer) return;

  // ---------- 1) المكتبة (الروابط اللي لقيتها في ملفاتك) ----------
  const SOURCES = [
    { name: "دكتور أحمد العربي", title: "ترتيل: أحمد العربي", url: "https://soundcloud.com/trateel_mans/sets/aelarby", kind: "list" },
    { name: "محمد عبادة", title: "تلاوات محمد عبادة", url: "https://soundcloud.com/mohoobada", kind: "profile" },
    { name: "أحمد نصر", title: "تلاوات أحمد نصر", url: "https://soundcloud.com/elnasr1990", kind: "profile" },
    { name: "أحمد النفيس", title: "تلاوات أحمد النفيس", url: "https://soundcloud.com/ahmad_alnufais", kind: "profile" },
    { name: "عبدالله القرافي", title: "تلاوة عبدالله القرافي", url: "https://soundcloud.com/tvquran22/alqr", kind: "track" },
    { name: "ياسر الدوسري", title: "تلاوات ياسر الدوسري", url: "https://soundcloud.com/tvquran22/sets/yaser", kind: "list" },
    { name: "عمر ضياء الدين", title: "تلاوة عمر ضياء الدين", url: "https://soundcloud.com/omar-ebrahim-565006892/rlm6erqddvtl", kind: "track" },
    { name: "بلال سيف", title: "تلاوات بلال سيف", url: "https://soundcloud.com/ttejcjk820wj", kind: "profile" },
    { name: "د. عبدالمجيد الطيب عمر", title: "لقاء 34: لغة القرآن وتميزها على سائر لغات العالمين", url: "https://soundcloud.com/tafsircenter/34a-4", kind: "track" },
    { name: "مركز آيات لتعليم القرآن", title: "سلسلة صُحبة", url: "https://soundcloud.com/ayatqurancenter/sets/sohba", kind: "list" },
    { name: "الشيخ عمرو الشرقاوي", title: "محاضرات ومقاطع", url: "https://soundcloud.com/itsthequran/sets/druonotv0mqa", kind: "list" },
    { name: "د. أحمد جلال", title: "سلسلة تفسير القرآن – رمضان 1435", url: "https://soundcloud.com/ahmed-galal-412125487/sets/14a1", kind: "list" },
    { name: "الشيخ محمد العريفي", title: "دروس وخطب ومحاضرات منوعة", url: "https://soundcloud.com/quran-sunnah/sets/xsme2eglifnr", kind: "list" },
    { name: "الشيخ أحمد العجمي", title: "القرآن الكريم – تلاوات", url: "https://soundcloud.com/holyquranofficial/sets/ahmed-al-ajamy", kind: "list" }
  ];

  const LS = "deen:sc:custom";
  const getCustom = () => { try { return JSON.parse(localStorage.getItem(LS)) || []; } catch (e) { return []; } };
  const setCustom = (a) => { try { localStorage.setItem(LS, JSON.stringify(a)); } catch (e) {} };

  // ---------- 2) تظبيط الرابط ----------
  function normalize(u) {
    u = String(u || "").trim();
    if (!u) return "";
    u = u.replace(/^sc:/, "");
    if (!/^https?:\/\//i.test(u)) u = "https://" + u.replace(/^\/+/, "");
    try {
      const x = new URL(u);
      const host = x.hostname.toLowerCase().replace(/^(www|m)\./, "");
      if (host !== "soundcloud.com" && host !== "on.soundcloud.com" && host !== "api.soundcloud.com") return "";
      return "https://" + host + x.pathname.replace(/\/+$/, "");
    } catch (e) { return ""; }
  }
  const isSC = (u) => !!normalize(u);
  const isSearch = (u) => /soundcloud\.com\/(search|discover|stream|you)(\/|\?|$)/i.test(String(u));
  const isList = (u) => /\/sets\//.test(u) || /^https:\/\/soundcloud\.com\/[^\/]+$/.test(u);

  function src(u, auto) {
    return "https://w.soundcloud.com/player/?url=" + encodeURIComponent(u) +
      "&auto_play=" + (auto ? "true" : "false") +
      "&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false&color=%23d4af37";
  }

  // ---------- 3) الشكل (بيتحقن مرة واحدة) ----------
  const CSS = `
  #scp{position:fixed;left:0;right:0;bottom:0;z-index:99990;background:#10150f;border-top:2px solid #d4af37;border-radius:18px 18px 0 0;
    transform:translateY(105%);transition:transform .32s cubic-bezier(.22,.8,.3,1);direction:rtl;padding-bottom:env(safe-area-inset-bottom,0px);
    box-shadow:0 -8px 30px rgba(0,0,0,.55);font-family:system-ui,"Segoe UI",Tahoma,sans-serif;color:#f3efe3}
  #scp.on{transform:none}
  #scp.min .scb{display:none}
  .sch{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px}
  .sch b{font-size:14px;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .sch button,.sch a{background:#1b221c;color:#f0d77a;border:1px solid #2b362d;border-radius:14px;padding:6px 12px;font-size:13px;text-decoration:none}
  .scb{padding:0 12px 12px;position:relative}
  .scb iframe{width:100%;border:0;border-radius:12px;background:#000;display:block}
  .scl{position:absolute;inset:0 12px 12px;display:flex;align-items:center;justify-content:center;color:#9aa59f;font-size:14px;background:#0b0f0d;border-radius:12px}
  .scn{margin-top:8px;padding:10px;background:#1b1410;border:1px solid #4a3220;border-radius:12px;font-size:13px;line-height:1.8;display:none}
  .scn button,.scn a{margin:6px 0 0 6px;background:#d4af37;color:#111;border:0;border-radius:12px;padding:6px 14px;font-weight:700;text-decoration:none;display:inline-block}
  #scfab{position:fixed;right:14px;bottom:calc(env(safe-area-inset-bottom,0px) + 150px);z-index:99980;width:48px;height:48px;border-radius:50%;
    background:#d4af37;color:#111;border:0;font-size:22px;box-shadow:0 6px 18px rgba(0,0,0,.5)}
  #scl{position:fixed;inset:0;z-index:99995;background:#0b0f0d;color:#f3efe3;direction:rtl;display:none;flex-direction:column;font-family:system-ui,"Segoe UI",Tahoma,sans-serif}
  #scl.on{display:flex}
  #scl .h{display:flex;gap:8px;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 12px) 14px 10px;border-bottom:1px solid #222b26}
  #scl .h b{flex:1;font-size:18px;color:#f0d77a}
  #scl button{background:#d4af37;color:#111;border:0;border-radius:14px;padding:8px 14px;font-weight:700}
  #scl .q{padding:10px 14px;display:flex;gap:8px}
  #scl input{flex:1;background:#141a17;border:1px solid #2b362d;color:#f3efe3;border-radius:12px;padding:10px;font-size:15px;min-width:0}
  #scl .ls{overflow:auto;padding:4px 14px 90px;flex:1}
  .sci{display:flex;align-items:center;gap:10px;padding:12px;margin-bottom:10px;background:#141a17;border:1px solid #222b26;border-radius:16px}
  .sci .t{flex:1;min-width:0}.sci .t b{display:block;font-size:15px}.sci .t span{font-size:12px;color:#9aa59f}
  .sci .p{background:#d4af37;color:#111;border:0;border-radius:50%;width:40px;height:40px;font-size:16px}
  .sci .d{background:transparent;color:#9aa59f;border:0;font-size:18px}
  @media (prefers-reduced-motion:reduce){#scp{transition:none}}`;

  let el = {}, cur = null, timer = null, apiPromise = null;

  function inject() {
    if (document.getElementById("scp-css")) return;
    const st = document.createElement("style"); st.id = "scp-css"; st.textContent = CSS; document.head.appendChild(st);
    const p = document.createElement("div"); p.id = "scp";
    p.innerHTML = '<div class="sch"><b id="sct">🎧</b><button id="scm">▾</button><a id="sce" target="_blank" rel="noopener">ساوند كلاود ↗</a><button id="scx">✕</button></div>' +
      '<div class="scb"><div class="scl" id="scld">جارٍ تحميل المشغّل…</div><div id="scfr"></div>' +
      '<div class="scn" id="scn"><div id="scnm"></div><button id="scre">جرّب تاني</button><a id="scex" target="_blank" rel="noopener">افتح في ساوند كلاود</a></div></div>';
    document.body.appendChild(p);
    el = { p, t: p.querySelector("#sct"), ld: p.querySelector("#scld"), fr: p.querySelector("#scfr"), n: p.querySelector("#scn"), nm: p.querySelector("#scnm"), ex: p.querySelector("#scex"), e: p.querySelector("#sce") };
    p.querySelector("#scx").onclick = close;
    p.querySelector("#scm").onclick = (e) => { p.classList.toggle("min"); e.target.textContent = p.classList.contains("min") ? "▴" : "▾"; };
    p.querySelector("#scre").onclick = () => cur && open(cur.url, cur.title);
  }

  function loadApi() {
    if (window.SC && window.SC.Widget) return Promise.resolve();
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((res) => {
      const s = document.createElement("script");
      s.src = "https://w.soundcloud.com/player/api.js";
      s.onload = () => res(); s.onerror = () => res();
      document.head.appendChild(s);
    });
    return apiPromise;
  }

  function fail(msg) {
    clearTimeout(timer);
    el.ld.style.display = "none";
    el.nm.textContent = msg || "المشغّل ماظهرش. غالبًا الرابط اتغيّر أو صاحبه مانع التضمين أو النت ضعيف.";
    el.n.style.display = "block";
  }

  // ---------- 4) فتح المشغّل ----------
  function open(url, title) {
    inject();
    const u = normalize(url);
    if (!u) { toast("الرابط ده مش رابط ساوند كلاود"); return false; }
    cur = { url: u, title: title || "ساوند كلاود" };
    el.p.classList.remove("min"); el.p.querySelector("#scm").textContent = "▾";
    el.t.textContent = "🎧 " + cur.title;
    el.e.href = u; el.ex.href = u;
    el.n.style.display = "none"; el.ld.style.display = "flex";
    const h = isList(u) ? 380 : 166;
    el.fr.innerHTML = '<iframe id="scif" title="SoundCloud" allow="autoplay" height="' + h + '" src="' + src(u, true) + '"></iframe>';
    el.p.classList.add("on");
    document.body.classList.add("scp-open");
    const f = el.fr.querySelector("iframe");
    f.addEventListener("load", () => { el.ld.style.display = "none"; });
    clearTimeout(timer);
    timer = setTimeout(() => { if (el.ld.style.display !== "none") fail("المشغّل اتأخر. تأكد من النت وجرّب تاني."); }, 10000);
    loadApi().then(() => {
      try {
        const w = window.SC.Widget(f);
        w.bind(window.SC.Widget.Events.READY, () => { clearTimeout(timer); el.ld.style.display = "none"; });
        w.bind(window.SC.Widget.Events.ERROR, () => fail());
        w.bind(window.SC.Widget.Events.PLAY, () => { clearTimeout(timer); el.n.style.display = "none"; });
      } catch (e) {}
    });
    try {
      if ("mediaSession" in navigator) navigator.mediaSession.metadata = new MediaMetadata({ title: cur.title, artist: "اسمع دين" });
    } catch (e) {}
    return true;
  }
  function close() {
    clearTimeout(timer);
    if (!el.p) return;
    el.p.classList.remove("on");
    document.body.classList.remove("scp-open");
    setTimeout(() => { if (!el.p.classList.contains("on")) el.fr.innerHTML = ""; }, 350); // يوقف الصوت
  }
  function toast(m) {
    const t = document.getElementById("toast");
    if (t) { t.textContent = m; t.classList.add("on"); setTimeout(() => t.classList.remove("on"), 2500); } else alert(m);
  }

  // ---------- 5) تحويل أي لينك ساوند كلاود لجوه التطبيق ----------
  function hook() {
    // أي ضغطة على لينك أو عنصر فيه ساوند كلاود
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a[href*='soundcloud.com'],[data-sc],[data-y^='sc:']");
      if (!a) return;
      const raw = a.getAttribute("data-sc") || a.getAttribute("data-y") || a.getAttribute("href") || "";
      if (isSearch(raw) || !isSC(raw)) return;            // صفحات البحث ماتتضمّنش، سيبها تفتح برا
      e.preventDefault(); e.stopPropagation();
      open(raw, a.getAttribute("data-title") || (a.textContent || "").trim().slice(0, 60));
    }, true);
    // window.open لأي رابط ساوند كلاود
    const wo = window.open;
    window.open = function (u) {
      if (u && !isSearch(u) && isSC(u)) { open(u); return null; }
      return wo.apply(window, arguments);
    };
    // لو التطبيق عنده دوال تشغيل قديمة نوجّهها للمشغّل الجديد
    window.playSC = (v) => open(v && v.y ? v.y : v, v && v.t);
    window.openSC = (u, t) => open(u, t);
  }

  // ---------- 6) شاشة المكتبة وإضافة رابط ----------
  function lib() {
    inject();
    let L = document.getElementById("scl");
    if (!L) {
      L = document.createElement("div"); L.id = "scl";
      L.innerHTML = '<div class="h"><b>🎧 ساوند كلاود</b><button id="sclx">إغلاق</button></div>' +
        '<div class="q"><input id="sci" placeholder="الصق رابط ساوند كلاود (حساب أو قائمة أو تلاوة)" inputmode="url"><button id="scadd">إضافة</button></div>' +
        '<div class="q"><input id="scs" placeholder="ابحث في المكتبة"></div><div class="ls" id="scls"></div>';
      document.body.appendChild(L);
      L.querySelector("#sclx").onclick = () => L.classList.remove("on");
      L.querySelector("#scs").oninput = draw;
      L.querySelector("#scadd").onclick = () => {
        const inp = L.querySelector("#sci"), u = normalize(inp.value);
        if (!u || isSearch(inp.value)) return toast("الصق رابط ساوند كلاود صحيح");
        const c = getCustom();
        if (!c.some((x) => x.url === u)) c.unshift({ name: "رابطي", title: u.replace("https://soundcloud.com/", ""), url: u, kind: isList(u) ? "list" : "track", custom: 1 });
        setCustom(c); inp.value = ""; draw();
      };
    }
    function draw() {
      const q = (L.querySelector("#scs").value || "").trim();
      const all = [...getCustom(), ...SOURCES].filter((x) => !q || (x.name + " " + x.title).indexOf(q) > -1);
      L.querySelector("#scls").innerHTML = all.map((x, i) =>
        '<div class="sci"><button class="p" data-u="' + x.url + '" data-t="' + (x.name + ": " + x.title).replace(/"/g, "&quot;") + '">▶</button>' +
        '<div class="t"><b>' + x.name + '</b><span>' + x.title + '</span></div>' +
        (x.custom ? '<button class="d" data-del="' + x.url + '">🗑</button>' : "") + "</div>").join("") || '<p style="color:#9aa59f;padding:20px">مفيش نتايج.</p>';
      L.querySelectorAll("[data-u]").forEach((b) => b.onclick = () => { L.classList.remove("on"); open(b.dataset.u, b.dataset.t); });
      L.querySelectorAll("[data-del]").forEach((b) => b.onclick = () => { setCustom(getCustom().filter((x) => x.url !== b.dataset.del)); draw(); });
    }
    draw();
    L.classList.add("on");
  }

  function init() {
    inject(); hook();
    if (!window.SC_NO_FAB && !document.getElementById("scfab")) {
      const b = document.createElement("button"); b.id = "scfab"; b.textContent = "🎧"; b.setAttribute("aria-label", "ساوند كلاود");
      b.onclick = lib; document.body.appendChild(b);
    }
  }

  window.SCPlayer = { open, close, lib, normalize, isSC, sources: SOURCES, add: (name, url, title) => { const c = getCustom(), u = normalize(url); if (u) { c.unshift({ name, title: title || name, url: u, kind: isList(u) ? "list" : "track", custom: 1 }); setCustom(c); } } };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
