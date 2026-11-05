/* 王雅睿 · 候选人档案 — 交互层
   零依赖。页面不含任何图片资源，全部内容为文本。 */

(function () {
  "use strict";

  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ─────────────────────────── 滚动揭示 ─────────────────────────── */

  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* 打印 / 导出 PDF 前强制显示全部内容 */
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
  window.addEventListener("beforeprint", revealAll);
  if (window.matchMedia) {
    try {
      window.matchMedia("print").addEventListener("change", function (e) {
        if (e.matches) revealAll();
      });
    } catch (err) {}
  }

  /* ─────────────────────────── 顶栏 / 进度条 / 目录 ─────────────────────────── */

  var bar = document.getElementById("progress");
  var barTop = document.getElementById("topbar");
  var nav = document.getElementById("nav");
  var lastY = window.scrollY;

  function onScroll() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;

    if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

    if (barTop) {
      var hide = (y > 480 && y > lastY + 6);
      barTop.classList.toggle("is-hidden", hide);
      document.body.classList.toggle("bar-up", hide);
    }

    /* 目录高亮 */
    if (nav) {
      var links = nav.querySelectorAll("a");
      var cur = "";
      links.forEach(function (a) {
        var href = a.getAttribute("href") || "";
        if (href.charAt(0) !== "#") return;
        var sec = document.querySelector(href);
        if (sec && sec.getBoundingClientRect().top <= 140) cur = href;
      });
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === cur);
      });
    }

    lastY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ─────────────────────────── 邮箱防爬 ─────────────────────────── */

  var mail = document.getElementById("mailto");
  if (mail) {
    var u = mail.getAttribute("data-u");
    var d = mail.getAttribute("data-d");
    var addr = u + "\u0040" + d;
    mail.textContent = addr;
    mail.setAttribute("href", "mailto:" + addr);
  }

  /* ─────────────────────────── 复制链接 ─────────────────────────── */

  var copyBtn = document.getElementById("copyLink");
  var copyHint = document.getElementById("copyHint");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var url = location.href;
      function done() {
        if (copyHint) copyHint.textContent = "已复制，可直接粘贴";
        copyBtn.textContent = "已复制 ✓";
        setTimeout(function () {
          copyBtn.textContent = "复制本页链接";
          if (copyHint) copyHint.textContent = "方便转给同事或存档";
        }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = url; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  }

})();
