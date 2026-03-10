/* ═══════════════════════════════════════════════════════════════
   ✏️ 새 컴포넌트 페이지 템플릿
   ──────────────────────────────────────────────────────────────
   사용법:
   1. 이 파일을 복사해서 이름 변경 (예: badge.js)
   2. 아래 'page-TEMPLATE' → 'page-badge' 로 변경
   3. 내용 채우기
   4. index.html에 <script src="js/pages/badge.js"></script> 추가
   5. config.js → components 배열에 등록
═══════════════════════════════════════════════════════════════ */

TDS_PAGES['page-TEMPLATE'] = `
      <div class="page" id="page-TEMPLATE">
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-TEMPLATE"></canvas>
          <div class="hero-content">
            <div class="hero-title">ComponentName <span class="hero-badge stable">Stable</span></div>
            <div class="hero-desc">컴포넌트 설명을 여기에 작성합니다.</div>
          </div>
        </div>

        <div class="tabs-bar">
          <button class="tab-btn active" onclick="switchTab(this,'tab-TEMPLATE-usage')">Usage</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-TEMPLATE-specs')">Specs</button>
        </div>

        <div class="content">

          <!-- USAGE TAB -->
          <div class="tab-panel active" id="tab-TEMPLATE-usage">
            <div class="section">
              <div class="section-label">Variants</div>
              <div class="section-desc">컴포넌트 변형 설명.</div>

              <!-- 미리보기 영역 -->
              <div style="display:flex; gap:16px; align-items:center; padding:32px 24px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; margin-bottom:16px; flex-wrap:wrap;">
                <!-- 여기에 컴포넌트 미리보기 -->
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Usage Guidance</div>
              <div class="dos-donts">
                <div class="dos-donts-card">
                  <div class="dd-header do">✓ Do</div>
                  <div class="dd-body">올바른 사용법 설명.</div>
                </div>
                <div class="dos-donts-card">
                  <div class="dd-header dont">✗ Don't</div>
                  <div class="dd-body">잘못된 사용법 설명.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- SPECS TAB -->
          <div class="tab-panel" id="tab-TEMPLATE-specs">
            <div class="section">
              <div class="section-label">Design Tokens</div>
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>속성</th>
                    <th>값</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Background</td>
                    <td><code>#FF153C</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
`;
