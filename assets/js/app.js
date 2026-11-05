/* 王雅睿 · 候选人档案 — 交互层
   零依赖。证据数据集中在 EVIDENCE，加新证据只改这一处。 */

(function () {
  "use strict";

  /* ─────────────────────────── 证据数据源 ─────────────────────────── */

  var LV = {
    a: { label: "原件可核验", cls: "a" },
    b: { label: "过程材料", cls: "b" },
    c: { label: "口径说明", cls: "c" }
  };

  var EVIDENCE = {    gpa: {
      kicker: "学历与成绩 · 01",
      title: "中国高等学校学生成绩验证报告（学信网）",
      img: "assets/img/evidence/gpa-report.jpg",
      alt: "学信网成绩验证报告",
      note: "教育部学信网出具，共 6 页，列明上海大学工商管理专业全部课程成绩与学分。首页载明平均绩点 GPA 3.35（满分 4 分制，标准算法一），附在线验证二维码与报告编号 13574010，可自行核验。",
      meta: "等级：<b>原件 · 第三方出具</b>　｜　报告编号 13574010　｜　证件号已遮挡",
      lv: "a"
    },
    jinshi: {
      kicker: "实习证明 · 02",
      title: "上海金矢咨询有限公司 · 工作证明",
      img: "assets/img/evidence/jinshi-intern.jpg",
      alt: "金矢咨询工作证明",
      note: "加盖公司公章。载明实习期间为 2025 年 10 月 1 日至 2026 年 2 月 1 日，部门为市场部；工作内容包括校园大使品牌宣传、高校市场社群运营、线上媒体平台推文创作与咨询获客、高校线下咨询会沙龙组织与时间排期。",
      meta: "等级：<b>原件 · 带公章</b>　｜　身份证号已遮挡",
      lv: "a"
    },
    zeji: {
      kicker: "实习证明 · 03",
      title: "上海泽稷教育科技有限公司 · 实习证明",
      img: "assets/img/evidence/zeji-intern.jpg",
      alt: "泽稷教育实习证明",
      note: "加盖实习单位公章。载明实习期间为 2023 年 7 月 1 日至 2023 年 9 月 1 日，部门为品牌运营部。证明只确认任职与部门，不含具体业绩数字——本页涉及的活动覆盖人数与留资量，口径说明见下方第 ③ 条。",
      meta: "等级：<b>原件 · 带公章</b>　｜　业绩数据为自述口径",
      lv: "a"
    },
    cet6: {
      kicker: "语言能力 · 04",
      title: "全国大学英语六级考试成绩报告单",
      img: "assets/img/evidence/cet6.jpg",
      alt: "CET-6 成绩报告单",
      note: "2023 年 12 月考试，总分 583 / 710（听力 167、阅读 225、写作与翻译 191）。由教育部教育考试院出具，附二维码与校验码可在线核验。",
      meta: "等级：<b>原件 · 官方成绩单</b>　｜　院系与证件号已遮挡",
      lv: "a"
    },
    ielts: {
      kicker: "语言能力 · 05",
      title: "IELTS Academic · Test Report Form",
      img: "assets/img/evidence/ielts.jpg",
      alt: "雅思成绩单",
      note: "2023 年 12 月 30 日考试，Overall Band 6.0（听力 6.0、阅读 6.5、写作 6.5、口语 5.5），CEFR Level B2。成绩单由 British Council 与 idp 联合出具。",
      meta: "等级：<b>原件 · 官方成绩单</b>　｜　Candidate ID 已遮挡",
      lv: "a"
    },
    guotong: {
      kicker: "竞赛获奖 · 06",
      title: "中国国际大学生创新大赛（2024）· 全国铜奖",
      img: "assets/img/evidence/award-guotong.jpg",
      alt: "国创赛铜奖证书",
      note: "参赛作品《流萤拾遗》，我在团队中担任项目总负责人。主办单位为教育部等 12 个部委与上海市人民政府，证书编号 20241147G。",
      meta: "等级：<b>原件 · 组委会颁发</b>　｜　团队共 11 人",
      lv: "a"
    },
    shiyin: {
      kicker: "竞赛获奖 · 07",
      title: "中国国际大学生创新大赛（2024）· 上海赛区银奖",
      img: "assets/img/evidence/award-shiyin.jpg",
      alt: "上海赛区银奖证书",
      note: "同一赛事、同一作品的省赛（上海赛区）奖项，与全国铜奖为递进关系。",
      meta: "等级：<b>原件 · 组委会颁发</b>",
      lv: "a"
    },
    nvdachuang: {
      kicker: "竞赛获奖 · 08",
      title: "上海市女大学生创新创业大赛（2023）· 一等奖",
      img: "assets/img/evidence/award-nvdachuang.jpg",
      alt: "女大学生创新创业大赛一等奖",
      note: "市级赛事一等奖，参赛方向为非遗研学与文化传播。",
      meta: "等级：<b>原件 · 主办方颁发</b>",
      lv: "a"
    },
    mcm: {
      kicker: "竞赛获奖 · 09",
      title: "美国大学生数学建模竞赛 MCM/ICM · H 奖",
      img: "assets/img/evidence/award-mcm.jpg",
      alt: "美赛 H 奖证书",
      note: "国际赛事 Honorable Mention。三人一队，在四天内完成建模、求解与英文论文写作——这段经历是我 Python 与数据分析能力的起点。",
      meta: "等级：<b>原件 · COMAP 颁发</b>",
      lv: "a"
    },
    hulianwang: {
      kicker: "竞赛获奖 · 10",
      title: "第九届「互联网+」大学生创新创业大赛 · 上海赛区铜奖",
      img: "assets/img/evidence/award-hulianwang.jpg",
      alt: "互联网+上海赛区铜奖",
      note: "省级（上海赛区）铜奖。",
      meta: "等级：<b>原件 · 组委会颁发</b>",
      lv: "a"
    },
    huichuang: {
      kicker: "竞赛获奖 · 11",
      title: "「汇创青春」· 一等奖",
      img: "assets/img/evidence/award-huichuang.jpg",
      alt: "汇创青春一等奖",
      note: "文化创意类赛事一等奖。",
      meta: "等级：<b>原件 · 主办方颁发</b>",
      lv: "a"
    },
    dianshang: {
      kicker: "竞赛获奖 · 12",
      title: "第十四届全国大学生电子商务三创赛 · 校级二等奖",
      img: "assets/img/evidence/award-dianshang.jpg",
      alt: "电子商务三创赛校级二等奖",
      note: "校级二等奖，方向为电商运营方案设计与商业计划撰写。",
      meta: "等级：<b>原件 · 校级颁发</b>",
      lv: "a"
    },
    fanyi: {
      kicker: "竞赛获奖 · 13",
      title: "全国大学生英语翻译大赛 · 省级三等奖",
      img: "assets/img/evidence/award-fanyi.jpg",
      alt: "英语翻译大赛省三等奖",
      note: "大学英语组省级三等奖。",
      meta: "等级：<b>原件 · 主办方颁发</b>",
      lv: "a"
    },
    scholarship: {
      kicker: "荣誉 · 14",
      title: "上海大学「自强不息」奖学金",
      img: "assets/img/evidence/award-scholarship.jpg",
      alt: "自强不息奖学金证书",
      note: "2023 年校级奖学金。",
      meta: "等级：<b>原件 · 学校颁发</b>",
      lv: "a"
    },
    "yingsi-plan": {
      kicker: "项目材料 · 15",
      title: "萤思研学 · 商业计划书（77 页）",
      img: "assets/img/evidence/yingsi-plan.jpg",
      alt: "萤思研学商业计划书",
      note: "完整的商业计划书，含市场调查、课程产品设计、组织架构、财务测算与活动方案。此处展示项目概况与品牌理念页。计划书全文可在面试时提供。",
      meta: "等级：<b>过程材料 · 团队内部文档</b>",
      lv: "b"
    },

    /* 无原件、需说明口径的条目 */
    "cav-jinshi": {
      kicker: "口径说明 · ①",
      title: "曝光量与转化率是怎么算的",
      text: "曝光量 5,000–10,000 为单篇推文在平台后台的展示次数区间，不同选题差异较大，因此给区间而非单值。转化率 5%–10% 指「内容阅读 → 主动添加咨询」的比例，分母是阅读量，不是曝光量。\n\n这两项数据的原始后台截图属于公司内部经营数据，不在此公开。任职事实由金矢咨询出具的工作证明佐证（见证据库第 02 项）。面试时可提供更细的分渠道拆分。",
      meta: "等级：<b>口径说明 · 无原件公开</b>",
      lv: "c"
    },
    "cav-zhongshen": {
      kicker: "口径说明 · ⑤",
      title: "为什么这里没有放审计项目的证明",
      text: "审计项目的工作底稿与客户资料涉及第三方商业信息与保密义务，不适合公开在个人主页上。这段实习的任职事实有加盖公章的实习证明，可在面试或入职材料环节提供原件。\n\n我在其中承担的是基础执行与数据核对：凭证编号索引、账簿与回单核对、募集资金使用检查、合并银行流水、测算 2020–2024 年收入与利润。具体项目名称同样是客户信息，如需了解可面谈时说明。",
      meta: "等级：<b>口径说明 · 因保密不公开</b>",
      lv: "c"
    }
  };

  /* 案例深页在 /cases/ 下，资源路径需要回退一层 */
  var BASE = location.pathname.indexOf("/cases/") > -1 ? "../" : "";

  /* ─────────────────────────── 弹层 ─────────────────────────── */

  var dlg = document.getElementById("evModal");
  var dImgWrap = document.getElementById("modalImgWrap");
  var dImg = document.getElementById("modalImg");
  var dKicker = document.getElementById("modalKicker");
  var dTitle = document.getElementById("modalTitle");
  var dNote = document.getElementById("modalNote");
  var dMeta = document.getElementById("modalMeta");
  var lastFocus = null;

  function openEv(key) {
    var d = EVIDENCE[key];
    if (!d || !dlg) return;

    lastFocus = document.activeElement;

    if (d.img) {
      dImg.src = BASE + d.img;
      dImg.alt = d.alt || d.title;
      dImgWrap.style.display = "";
      dlg.querySelector(".modal-inner").classList.remove("text-only");
    } else {
      dImg.removeAttribute("src");
      dImgWrap.style.display = "none";
      dlg.querySelector(".modal-inner").classList.add("text-only");
    }

    dKicker.textContent = d.kicker || "证据";
    dTitle.textContent = d.title;
    dNote.innerHTML = (d.text || d.note || "").split("\n\n").map(function (p) {
      return "<span style='display:block;margin-bottom:12px'>" + p + "</span>";
    }).join("");
    dMeta.innerHTML = d.meta || "";

    if (typeof dlg.showModal === "function") {
      dlg.showModal();
    } else {
      dlg.setAttribute("open", "");
    }
  }

  function closeEv() {
    if (!dlg) return;
    if (typeof dlg.close === "function" && dlg.open) dlg.close();
    else dlg.removeAttribute("open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-ev]");
    if (t) {
      e.preventDefault();
      openEv(t.getAttribute("data-ev"));
    }
  });

  var closeBtn = document.getElementById("modalClose");
  if (closeBtn) closeBtn.addEventListener("click", closeEv);

  if (dlg) {
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) closeEv();
    });
    dlg.addEventListener("cancel", function (e) {
      e.preventDefault();
      closeEv();
    });
  }

  /* ─────────────────────────── 滚动揭示 ─────────────────────────── */

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ─────────────────────────── 数字滚动 ─────────────────────────── */

  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    if (reduce) { el.textContent = target; return; }
    var t0 = null, dur = 1100;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* 打印/导出 PDF 前强制显示全部内容 */
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
  window.addEventListener("beforeprint", revealAll);
  if (window.matchMedia) {
    try { window.matchMedia("print").addEventListener("change", function (e) { if (e.matches) revealAll(); }); } catch (err) {}
  }

  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          countUp(en.target);
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
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
      if (y > 480 && y > lastY + 6) barTop.classList.add("is-hidden");
      else if (y < lastY - 6 || y < 480) barTop.classList.remove("is-hidden");
    }

    /* 目录高亮 */
    if (nav) {
      var links = nav.querySelectorAll("a");
      var cur = "";
      links.forEach(function (a) {
        var sec = document.querySelector(a.getAttribute("href"));
        if (sec && sec.getBoundingClientRect().top <= 140) cur = a.getAttribute("href");
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
    var addr = u + "\u0040" + d + ".com";
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
