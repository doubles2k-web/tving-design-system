/* ═══════════════════════════════════════════════════════════════
   TDS App — 렌더링, 네비게이션, 유틸리티
   ──────────────────────────────────────────────────────────────
   이 파일은 수정 불필요. CONFIG 값을 읽어 HTML을 자동 생성합니다.
═══════════════════════════════════════════════════════════════ */

/* ─────────────────── PAGE MOUNT ─────────────────── */
function mountPages() {
  const main = document.getElementById('page-mount');
  if (!main || typeof TDS_PAGES === 'undefined') return;
  Object.values(TDS_PAGES).forEach(html => {
    main.insertAdjacentHTML('beforeend', html);
  });
}

function renderAll() {
  renderBrandColors();
  renderGrayScale();
  renderOpacityColors();
  renderGradients();
  renderContrastChips();
  renderTypeScale();
  renderBreakpoints();
  renderDoDonts();
  renderNavItems();
  renderComponentsGrid();
}

function renderBrandColors() {
  const grid = document.getElementById('brand-colors-grid');
  if (grid) grid.innerHTML = TDS_CONFIG.brandColors.map(c => chipHTML(c)).join('');

  const grid2 = document.getElementById('brand-colors-grid-2');
  if (grid2 && TDS_CONFIG.brandColorsRow2)
    grid2.innerHTML = TDS_CONFIG.brandColorsRow2.map(c => chipHTML(c)).join('');
}

function chipHTML(c) {
  const textColor = c.dark ? '#000' : '#fff';
  return `<div class="chip" onclick="copy('${c.hex}')">
    <div class="chip-swatch" style="background:${c.hex}"></div>
    <div class="chip-meta">
<div class="chip-name" style="color:inherit">${c.name}</div>
<div class="chip-hex">${c.hex}</div>
    </div>
  </div>`;
}

function renderGrayScale() {
  const grid = document.getElementById('gray-scale-grid');
  if (!grid) return;
  grid.innerHTML = TDS_CONFIG.grayScale.map(c => chipHTML(c)).join('');
}

function renderOpacityColors() {
  const redBase = TDS_CONFIG.opacityRedBase;

  const redStrip = document.getElementById('opacity-red');
  if (redStrip) redStrip.innerHTML = TDS_CONFIG.opacityRed.map(item =>
    `<div class="opacity-cell">
<div class="chip-swatch sm" style="background:rgba(${redBase},${item.alpha});border-radius:4px 4px 0 0"></div>
<div class="chip-meta" style="border-radius:0 0 4px 4px"><div class="chip-name">${item.name}</div></div>
    </div>`
  ).join('');

  const whiteStrip = document.getElementById('opacity-white');
  if (whiteStrip) whiteStrip.innerHTML = TDS_CONFIG.opacityWhite.map(item =>
    `<div class="opacity-cell">
<div class="chip-swatch sm" style="background:rgba(255,255,255,${item.alpha});border-radius:4px 4px 0 0${item.border ? ';border:1px solid var(--border)' : ''}"></div>
<div class="chip-meta" style="border-radius:0 0 4px 4px"><div class="chip-name">${item.name}</div></div>
    </div>`
  ).join('');

  const blackStrip = document.getElementById('opacity-black');
  if (blackStrip) blackStrip.innerHTML = TDS_CONFIG.opacityBlack.map(item =>
    `<div class="opacity-cell">
<div class="chip-swatch sm" style="background:rgba(0,0,0,${item.alpha});border-radius:4px 4px 0 0;border:1px solid var(--border)"></div>
<div class="chip-meta" style="border-radius:0 0 4px 4px"><div class="chip-name">${item.name}</div></div>
    </div>`
  ).join('');
}

function renderGradients() {
  const row = document.getElementById('gradient-row');
  if (!row) return;
  row.innerHTML = TDS_CONFIG.gradients.map(g =>
    `<div class="gradient-card">
<div class="gradient-swatch" style="background:${g.css}"></div>
<div class="gradient-meta">
  <div class="gradient-name">${g.name}</div>
  <div class="gradient-val">${g.desc.replace(/\n/g, '<br>')}</div>
</div>
    </div>`
  ).join('');
}

function renderContrastChips() {
  const grid = document.getElementById('contrast-grid');
  if (!grid) return;
  grid.innerHTML = TDS_CONFIG.contrastChips.map(c =>
    `<div class="contrast-chip" style="background:${c.bg};color:${c.fg}${c.border ? ';border:1px solid #333' : ''}">
<div class="ratio">${c.ratio}</div>
<div class="pair">${c.pair}</div>
<div class="grade ${c.pass ? 'grade-pass' : 'grade-fail'}">${c.pass ? '● AA Pass' : '✗ AA Fail'}${c.note || ''}</div>
    </div>`
  ).join('');
}

function renderTypeScale() {
  const tbody = document.getElementById('type-scale-tbody');
  if (!tbody) return;
  const SAMPLE = '티빙 오리지널부터 드라마, 예능, 영화, KBO 리그까지';
  tbody.innerHTML = TDS_CONFIG.typeScale.map(row => {
    if (row.warning) return `<tr>
<td><span class="t-token" style="color:#FF5050">${row.token} ⚠</span></td>
<td><span class="t-tag read">—</span></td>
<td><span class="t-spec">—</span></td>
<td><span style="font-size:9px;color:var(--g50)">${row.size}px 이하 — WCAG 최소 사이즈 미달, 사용 금지</span></td>
    </tr>`;
    const isBold = row.style === 'bold';
    const cap = Math.min(row.size, 18);
    const wt = isBold ? 700 : 400;
    const cl = isBold ? '#fff' : '#e8e8e8';
    return `<tr>
<td><span class="t-token">${row.token}</span></td>
<td><span class="t-tag ${row.style}">${isBold ? 'Bold' : 'Read'}</span></td>
<td><span class="t-spec">${row.lineHeight}</span></td>
<td><span style="font-size:${cap}px;font-weight:${wt};font-family:'Pretendard Variable',Pretendard,sans-serif;color:${cl}">${SAMPLE}</span></td>
    </tr>`;
  }).join('');
}

function renderBreakpoints() {
  const list = document.getElementById('bp-list');
  if (!list) return;
  list.innerHTML = TDS_CONFIG.breakpoints.map(bp =>
    `<div class="bp-row">
<div><div class="bp-name">${bp.name}</div></div>
<div class="bp-range">${bp.range}</div>
<div class="bp-bar"><div class="bp-fill" style="width:${bp.barW}"></div></div>
<div class="bp-cols">
  <span class="bp-badge">세로 ${bp.colV}</span>
  <span class="bp-x">×</span>
  <span class="bp-badge">가로 ${bp.colH}</span>
</div>
    </div>`
  ).join('');
}

function renderDoDonts() {
  Object.entries(TDS_CONFIG.dodonts).forEach(([page, dd]) => {
    const el = document.getElementById(`dodont-${page}`);
    if (!el) return;
    el.innerHTML = `
<div class="dos-donts-card">
  <div class="dd-header do">✓ Do</div>
  <div class="dd-body">${dd.do}</div>
</div>
<div class="dos-donts-card">
  <div class="dd-header dont">✗ Don't</div>
  <div class="dd-body">${dd.dont}</div>
</div>`;
  });
}

/* ─────────────────── NAVIGATION ─────────────────── */

function renderNavItems() {
  function navItemHTML(item) {
    const isSoon = item.status === 'soon';
    const disabledStyle = isSoon ? ' style="opacity:0.4;pointer-events:none"' : '';
    const onclick = item.pageId ? ` onclick="navigate('${item.pageId}'); setNavActive(this)"` : '';
    return `<div class="nav-item">
<div class="nav-item-header"${disabledStyle}${onclick}>
  ${item.name}
  <span class="nav-status ${item.status}">${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
</div>
    </div>`;
  }

  const compEl = document.getElementById('render-nav-components');
  if (compEl) compEl.innerHTML = TDS_CONFIG.components.map(navItemHTML).join('');

  const patEl = document.getElementById('render-nav-patterns');
  if (patEl) patEl.innerHTML = TDS_CONFIG.patterns.map(navItemHTML).join('');
}

function renderComponentsGrid() {
  const grid = document.getElementById('render-components-grid');
  if (!grid) return;
  grid.innerHTML = TDS_CONFIG.components.map(c => {
    const isSoon = c.status === 'soon';
    const clickable = c.pageId ? `onclick="navigate('${c.pageId}')"` : '';
    const style = isSoon ? 'opacity:0.45;cursor:default' : 'cursor:pointer';
    return `<div class="overview-card" ${clickable} style="${style}">
<div class="overview-card-art" style="background:#0A0A0A;flex-direction:column;gap:6px">
  <div style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:800;font-size:28px;color:rgba(255,255,255,0.08);letter-spacing:-0.02em">${c.name[0]}</div>
  <span style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;padding:3px 8px;border-radius:3px;background:${isSoon ? 'rgba(255,255,255,0.05)' : 'rgba(0,200,100,0.12)'};color:${isSoon ? '#555' : '#00C864'};border:1px solid ${isSoon ? 'rgba(255,255,255,0.08)' : 'rgba(0,200,100,0.2)'}">${c.status}</span>
</div>
<div class="overview-card-label">${c.name}</div>
    </div>`;
  }).join('');
}
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) { target.classList.add('active'); target.scrollIntoView ? window.scrollTo(0, 0) : null; }

  // topbar active
  const topLinks = document.querySelectorAll('.topbar-link');
  topLinks.forEach(l => l.classList.remove('active'));
  if (['page-color', 'page-typography', 'page-breakpoints', 'page-tokens', 'page-foundation'].includes(pageId)) {
    topLinks[0].classList.add('active');
  } else if (pageId === 'page-components' || TDS_CONFIG.components.some(c => c.pageId === pageId)) {
    topLinks[1].classList.add('active');
  }

  // draw hero canvas for page
  setTimeout(() => drawHero(pageId), 50);
}

function setNavActive(el) {
  document.querySelectorAll('.nav-item-header').forEach(h => h.classList.remove('active'));
  el.classList.add('active');
}

function toggleGroup(id) {
  const grp = document.getElementById(id);
  grp.classList.toggle('open');
}

/* ─────────────────── TABS ─────────────────── */
function switchTab(btn, panelId) {
  const bar = btn.closest('.tabs-bar');
  const content = bar.nextElementSibling;
  bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  content.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
}

/* ─────────────────── COPY ─────────────────── */
function copy(val) {
  navigator.clipboard.writeText(val).then(() => showToast('Copied ' + val));
}
function copyCode(btn) {
  const text = btn.closest('.code-block').querySelector('.code-body').innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.style.color = '#00C864';
    setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = ''; }, 1500);
  });
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

/* ─────────────────── SEARCH ─────────────────── */
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
}
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') closeSearch();
});
document.getElementById('searchOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeSearch();
});

/* ─────────────────── HERO CANVAS ─────────────────── */
function drawHero(pageId) {
  // intentionally empty
}

/* ─────────────────── INIT ─────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  mountPages();
  renderAll();
  navigate('page-foundation');
  setTimeout(() => drawHero('page-foundation'), 100);
});

window.addEventListener('resize', () => {
  const activePage = document.querySelector('.page.active');
  if (activePage) drawHero(activePage.id);
});
