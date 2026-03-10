TDS_PAGES['page-typography'] = `
      <div class="page" id="page-typography">
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-typo"></canvas>
          <div class="hero-content">            <div class="hero-title">Typography <span class="hero-badge stable">Stable</span></div>
            <div class="hero-desc">Pretendard Variable 기반의 이중 타이포 시스템. Bold는 헤드라인·스캔용, Read는 본문·가독성용으로 구분됩니다.</div>
          </div>
        </div>
        <div class="tabs-bar">
          <button class="tab-btn active" onclick="switchTab(this,'tab-typo-scale')">Scale</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-typo-usage')">Usage</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-typo-specs')">Specs</button>
        </div>
        <div class="content">

          <!-- SCALE TAB -->
          <div class="tab-panel active" id="tab-typo-scale">
            <div class="section">
              <div class="section-label">Type Scale</div>
              <table class="type-table">
                <thead>
                  <tr>
                    <th>토큰</th>
                    <th>스타일</th>
                    <th>행간 / 자간</th>
                    <th>미리보기</th>
                  </tr>
                </thead>
                <tbody id="type-scale-tbody"></tbody>
              </table>
            </div>
          </div>

          <!-- USAGE TAB -->
          <div class="tab-panel" id="tab-typo-usage">
            <div class="section">
              <div class="section-label">Usage Guidance</div>
              <div class="dos-donts" id="dodont-typography"></div>
            </div>
          </div>

          <!-- SPECS TAB -->
          <div class="tab-panel" id="tab-typo-specs">
            <div class="section">
              <div class="section-label">CSS Variables</div>
              <div class="code-block">
                <div class="code-header"><span class="code-lang">CSS · Typography Tokens</span><button class="code-copy"
                    onclick="copyCode(this)">Copy</button></div>
                <div class="code-body"><span class="c-cmt">/* TDS Typography Tokens — rem 기준 (root: vw 유동) */</span>
                  :root {
                  <span class="c-cmt">/* Size */</span>
                  <span class="c-prop">--tds-42</span>: <span class="c-val">2.625rem</span>;
                  <span class="c-prop">--tds-36</span>: <span class="c-val">2.25rem</span>;
                  <span class="c-prop">--tds-30</span>: <span class="c-val">1.875rem</span>;
                  <span class="c-prop">--tds-24</span>: <span class="c-val">1.5rem</span>;
                  <span class="c-prop">--tds-20</span>: <span class="c-val">1.25rem</span>;
                  <span class="c-prop">--tds-18</span>: <span class="c-val">1.125rem</span>;
                  <span class="c-prop">--tds-16</span>: <span class="c-val">1rem</span>;
                  <span class="c-prop">--tds-14</span>: <span class="c-val">0.875rem</span>;
                  <span class="c-prop">--tds-12</span>: <span class="c-val">0.75rem</span>;
                  <span class="c-prop">--tds-10</span>: <span class="c-val">0.625rem</span>;

                  <span class="c-cmt">/* Line Height */</span>
                  <span class="c-prop">--tds-lh-bold</span>: <span class="c-num">normal</span>;
                  <span class="c-prop">--tds-lh-read-sm</span>: <span class="c-num">1.3</span>;
                  <span class="c-prop">--tds-lh-read-md</span>: <span class="c-num">1.5</span>;
                  <span class="c-prop">--tds-lh-read-lg</span>: <span class="c-num">1.6</span>;
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /page-typography -->
`;
