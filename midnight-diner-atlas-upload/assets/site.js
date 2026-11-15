// 全站唯一的腳本：產生頁首、頁尾、首頁卡片、料理標題區與同部料理區。
(function () {
  const root = document.body.dataset.root || ".";
  const byId = Object.fromEntries(DISHES.map((d) => [d.id, d]));
  const overall = (d) => (d.season - 1) * 10 + d.episode;
  const pad = (n) => String(n).padStart(2, "0");

  // 資料檢查：有問題就在主控台警告
  DISHES.forEach((d) => {
    if (!SEASONS[d.season]) console.warn(`[圖鑑] ${d.id} 的 season 不存在：${d.season}`);
    if (!CATEGORIES[d.category]) console.warn(`[圖鑑] ${d.id} 的 category 不存在：${d.category}`);
    if (!(d.episode >= 1 && d.episode <= 10)) console.warn(`[圖鑑] ${d.id} 的 episode 應為 1～10`);
    if (!d.id.startsWith(`s${d.season}e${pad(d.episode)}-`)) console.warn(`[圖鑑] ${d.id} 的 id 與部、集不一致`);
  });

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const epBadge = (d) => `<span class="ep">第 ${d.season} 部・第 ${d.episode} 集</span>`;
  const card = (d) => `
    <a class="card" href="${root}/dishes/${d.id}.html">
      <div class="card-top">${epBadge(d)}<span class="tag">${CATEGORIES[d.category] || d.category}</span></div>
      <h3>${esc(d.name)}</h3>
      <p class="jp">${esc(d.jp)}</p>
      <p>${esc(d.summary)}</p>
      <p class="time">約 ${d.minutes} 分鐘</p>
    </a>`;

  const header = document.getElementById("site-header");
  if (header) header.remove();
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = `<p>非官方的粉絲筆記，與原作及製作單位無關。做法為一般家庭做法。</p>`;

  // 入口店門：每個瀏覽器分頁只出現一次。點一下 → 走向店門 → 拉開木門 → 進入首頁
  const entrance = document.getElementById("entrance");
  if (entrance) {
    let entered = false;
    try {
      if (new URLSearchParams(location.search).has("door")) sessionStorage.removeItem("entered");
      entered = sessionStorage.getItem("entered") === "1";
    } catch (e) {}
    if (!entered) {
      document.body.classList.add("door-closed");
      entrance.innerHTML = `
        <div class="entrance" role="button" tabindex="0" aria-label="點一下播放開場影片並進入深夜食堂料理圖鑑">
          <video class="door-video" src="${root}/assets/entrance.mp4" playsinline preload="auto"></video>
          <span class="door-hint">點一下，走進店裡</span>
        </div>`;
      const btn = entrance.querySelector(".entrance");
      const video = entrance.querySelector(".door-video");
      let started = false;
      let leaving = false;
      const finish = () => {
        if (leaving) return;
        leaving = true;
        btn.classList.add("enter");
        document.body.classList.remove("door-closed");
        setTimeout(() => entrance.remove(), 850);
      };
      const start = () => {
        if (started) return;
        started = true;
        try { sessionStorage.setItem("entered", "1"); } catch (e) {}
        btn.classList.add("playing");
        const p = video.play();
        if (p && p.catch) {
          p.catch(() => {
            video.muted = true;
            video.play().catch(finish);
          });
        }
      };
      video.addEventListener("timeupdate", () => {
        if (started && video.duration && video.duration - video.currentTime <= 0.6) finish();
      });
      video.addEventListener("ended", finish);
      video.addEventListener("error", finish);
      btn.addEventListener("click", start);
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          start();
        }
      });
    }
  }

  // 首頁
  const grid = document.getElementById("card-grid");
  if (grid) {
    const state = { season: "all", category: "all" };
    const used = (key) => [...new Set(DISHES.map((d) => String(d[key])))];
    const render = () => {
      const list = DISHES.filter(
        (d) => (state.season === "all" || String(d.season) === state.season) && (state.category === "all" || d.category === state.category)
      );
      grid.innerHTML = list.length ? list.map(card).join("") : `<p class="empty">這個分類還沒有料理。</p>`;
      document.getElementById("count").textContent = `共 ${list.length} 道料理`;
    };
    const filter = (elId, key, labels) => {
      const el = document.getElementById(elId);
      el.innerHTML = [["all", "全部"], ...used(key).map((k) => [k, labels[k] || k])]
        .map(([k, label]) => `<button data-v="${k}" class="${k === "all" ? "on" : ""}">${label}</button>`)
        .join("");
      el.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        state[key] = b.dataset.v;
        el.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
        render();
      });
    };
    filter("filter-season", "season", SEASONS);
    filter("filter-category", "category", CATEGORIES);
    render();
  }

  // 料理頁
  const hero = document.getElementById("dish-hero");
  if (hero) {
    const id = document.body.dataset.id;
    const d = byId[id];
    if (!d) {
      console.warn(`[圖鑑] data-id 找不到料理：${id}`);
      hero.innerHTML = `<h1>找不到這道料理</h1>`;
      return;
    }
    hero.innerHTML = `
      <p class="crumb"><a href="${root}/index.html">所有料理</a> › ${SEASONS[d.season]}</p>
      <div class="episode-box">
        <span class="big">S${d.season} E${pad(d.episode)}</span>
        <span>第 ${d.season} 部・第 ${d.episode} 集<br>全系列第 ${overall(d)} 話「${esc(d.jp)}」</span>
      </div>
      <h1>${esc(d.name)}</h1>
      <p class="summary">${esc(d.summary)}</p>
      <div class="meta"><span class="tag">${CATEGORIES[d.category]}</span><span class="time">約 ${d.minutes} 分鐘</span></div>`;

    const others = DISHES.filter((x) => x.season === d.season && x.id !== id);
    document.getElementById("dish-links").innerHTML = others.length
      ? `<section><h2>同一部的其他料理</h2><div class="grid">${others.map(card).join("")}</div></section>`
      : "";
  }
})();
