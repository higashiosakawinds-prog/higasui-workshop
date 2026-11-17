/* ============================================================
   動きまわりのスクリプト（申込リンクは index.html の LINKS を使う）
   触らなくてOKです。
============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1) 申込ボタンにリンクを反映 */
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var url = LINKS[a.dataset.link];
    if (url) {
      a.href = url; a.target = "_blank"; a.rel = "noopener";
    } else {
      a.classList.add("is-pending");          // 「※準備中」と表示して押せなくする
      a.setAttribute("aria-disabled", "true");
      a.removeAttribute("href");
    }
  });

  /* 2) 開催までのカウントダウン（日本時間） */
  (function () {
    var el = document.getElementById("countdown");
    var start = new Date("2027-01-16T13:30:00+09:00");
    var end   = new Date("2027-01-16T16:30:00+09:00");
    var now = new Date();
    if (now > end)        el.textContent = "開催は終了しました。ご参加ありがとうございました。";
    else if (now > start) el.textContent = "本日開催中です。";
    else el.textContent = "開催まで あと " + Math.ceil((start - now) / 86400000) + " 日";
  })();

  /* 3) スクロールでふわっと表示 */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    items.forEach(function (e) { io.observe(e); });
  } else {
    items.forEach(function (e) { e.classList.add("is-in"); });
  }

  /* 4) 当日の取り組み：画面の真ん中に来た行を金色に光らせる */
  var rows = document.querySelectorAll(".row");
  if ("IntersectionObserver" in window) {
    var rio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("is-active", e.isIntersecting); });
    }, { rootMargin: "-38% 0px -38% 0px" });
    rows.forEach(function (r) { rio.observe(r); });
  }

  /* 5) 流れる帯：文字をコピーして隙間なく流す */
  document.querySelectorAll(".ticker").forEach(function (t) {
    var html = t.innerHTML;
    t.innerHTML = html + html + html + html;
  });

  /* 6) ナビ：スクロールしたら背景をつける */
  var nav = document.getElementById("gnav");

  /* 7) 視差（奥のものほどゆっくり動く） */
  var px = [].slice.call(document.querySelectorAll("[data-speed]"));
  var ticking = false;
  function update() {
    ticking = false;
    nav.classList.toggle("is-solid", window.scrollY > 40);
    if (reduce) return;
    var vh = window.innerHeight;
    px.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) return;
      var rel = (r.top + r.height / 2) - vh / 2;
      var v = -rel * parseFloat(el.dataset.speed);
      el.style.transform = el.dataset.axis === "x"
        ? "translate3d(" + v.toFixed(1) + "px,0,0)"
        : "translate3d(0," + v.toFixed(1) + "px,0)";
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
