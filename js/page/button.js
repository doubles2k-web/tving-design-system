TDS_PAGES['page-button'] = `
      <div class="page" id="page-button">
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-button"></canvas>
          <div class="hero-content">            <div class="hero-title">Button <span class="hero-badge stable">Stable</span></div>
            <div class="hero-desc">사용자 액션을 트리거하는 기본 인터랙션 컴포넌트. Primary, Secondary, Ghost 3가지 변형을 제공합니다.</div>
          </div>
        </div>

        <div class="tabs-bar">
          <button class="tab-btn active" onclick="switchTab(this,'tab-button-usage')">Usage</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-button-specs')">Specs</button>
        </div>

        <div class="content">

          <!-- USAGE TAB -->
          <div class="tab-panel active" id="tab-button-usage">

            <div class="section">
              <div class="section-label">Variants</div>
              <div class="section-desc">3가지 기본 버튼 변형. 페이지 내 Primary는 1개만 사용합니다.</div>

              <!-- 버튼 미리보기 -->
              <div
                style="display:flex; gap:16px; align-items:center; padding:32px 24px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; margin-bottom:16px; flex-wrap:wrap;">
                <!-- Primary -->
                <button
                  style="background:var(--red);color:#fff;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:14px;padding:10px 24px;border-radius:6px;border:none;cursor:pointer;letter-spacing:-0.01em;">Primary</button>
                <!-- Secondary -->
                <button
                  style="background:transparent;color:#fff;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:14px;padding:10px 24px;border-radius:6px;border:1px solid rgba(255,255,255,0.2);cursor:pointer;letter-spacing:-0.01em;">Secondary</button>
                <!-- Ghost -->
                <button
                  style="background:transparent;color:var(--red);font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:14px;padding:10px 24px;border-radius:6px;border:none;cursor:pointer;letter-spacing:-0.01em;">Ghost</button>
                <!-- Disabled -->
                <button
                  style="background:var(--bg-hover);color:var(--g50);font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:14px;padding:10px 24px;border-radius:6px;border:none;cursor:not-allowed;letter-spacing:-0.01em;"
                  disabled>Disabled</button>
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Size</div>
              <div
                style="display:flex; gap:12px; align-items:center; padding:28px 24px; background:var(--bg-card); border:1px solid var(--border); border-radius:10px; flex-wrap:wrap;">
                <button
                  style="background:var(--red);color:#fff;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:12px;padding:7px 18px;border-radius:5px;border:none;cursor:pointer;">Small</button>
                <button
                  style="background:var(--red);color:#fff;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:14px;padding:10px 24px;border-radius:6px;border:none;cursor:pointer;">Medium</button>
                <button
                  style="background:var(--red);color:#fff;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:700;font-size:16px;padding:13px 32px;border-radius:8px;border:none;cursor:pointer;">Large</button>
              </div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Usage Guidance</div>
              <div class="dos-donts">
                <div class="dos-donts-card">
                  <div class="dd-header do">✓ Do</div>
                  <div class="dd-body">Primary 버튼은 CTA(Call To Action) 1개에만 사용. 배경색은 tving.red(#FF153C) 고정. 텍스트는 Bold,
                    14px 이상 유지.</div>
                </div>
                <div class="dos-donts-card">
                  <div class="dd-header dont">✗ Don't</div>
                  <div class="dd-body">동일한 화면에 Primary 버튼을 2개 이상 배치하지 않습니다. 버튼 레이블을 아이콘만으로 구성하지 않습니다(접근성 위반).</div>
                </div>
              </div>
            </div>

          </div><!-- /usage tab -->

          <!-- SPECS TAB -->
          <div class="tab-panel" id="tab-button-specs">
            <div class="section">
              <div class="section-label">Design Tokens</div>
              <table class="spec-table">
                <thead>
                  <tr>
                    <th>속성</th>
                    <th>Primary</th>
                    <th>Secondary</th>
                    <th>Ghost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Background</td>
                    <td><code>#FF153C</code></td>
                    <td><code>transparent</code></td>
                    <td><code>transparent</code></td>
                  </tr>
                  <tr>
                    <td>Text Color</td>
                    <td><code>#FFFFFF</code></td>
                    <td><code>#FFFFFF</code></td>
                    <td><code>#FF153C</code></td>
                  </tr>
                  <tr>
                    <td>Border</td>
                    <td><code>none</code></td>
                    <td><code>rgba(255,255,255,0.2)</code></td>
                    <td><code>none</code></td>
                  </tr>
                  <tr>
                    <td>Border Radius</td>
                    <td><code>6px</code></td>
                    <td><code>6px</code></td>
                    <td><code>6px</code></td>
                  </tr>
                  <tr>
                    <td>Font Weight</td>
                    <td><code>700 (Bold)</code></td>
                    <td><code>700 (Bold)</code></td>
                    <td><code>700 (Bold)</code></td>
                  </tr>
                  <tr>
                    <td>Hover State</td>
                    <td><code>brightness(1.1)</code></td>
                    <td><code>border opacity 0.4</code></td>
                    <td><code>opacity 0.7</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="section" style="margin-top:40px">
              <div class="section-label">CSS</div>
              <div class="code-block">
                <div class="code-header"><span class="code-lang">CSS · Button</span><button class="code-copy"
                    onclick="copyCode(this)">Copy</button></div>
                <div class="code-body"><span class="c-cmt">/* TDS Button — Primary */</span>
                  .tds-btn {
                  <span class="c-prop">font-family</span>: <span class="c-val">'Pretendard Variable', sans-serif</span>;
                  <span class="c-prop">font-weight</span>: <span class="c-num">700</span>;
                  <span class="c-prop">font-size</span>: <span class="c-val">14px</span>;
                  <span class="c-prop">padding</span>: <span class="c-val">10px 24px</span>;
                  <span class="c-prop">border-radius</span>: <span class="c-val">6px</span>;
                  <span class="c-prop">border</span>: <span class="c-val">none</span>;
                  <span class="c-prop">cursor</span>: <span class="c-val">pointer</span>;
                  <span class="c-prop">transition</span>: <span class="c-val">filter 0.15s ease</span>;
                  }
                  .tds-btn-primary {
                  <span class="c-prop">background</span>: <span class="c-red">#FF153C</span>;
                  <span class="c-prop">color</span>: <span class="c-val">#FFFFFF</span>;
                  }
                  .tds-btn-primary:hover {
                  <span class="c-prop">filter</span>: <span class="c-val">brightness(1.12)</span>;
                  }
                  .tds-btn:disabled {
                  <span class="c-prop">background</span>: <span class="c-val">#222</span>;
                  <span class="c-prop">color</span>: <span class="c-val">#555</span>;
                  <span class="c-prop">cursor</span>: <span class="c-val">not-allowed</span>;
                  }
                </div>
              </div>
            </div>
          </div><!-- /specs tab -->

        </div>
      </div><!-- /page-button -->
`;
