TDS_PAGES['page-foundation'] = `
      <div class="page" id="page-foundation">
        <!-- Hero -->
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-foundation"></canvas>
          <div class="hero-content">            <div class="hero-title">Foundation</div>
            <div class="hero-desc">컬러, 타이포그래피, 반응형 중단점. TDS를 구성하는 핵심 설계 원칙의 집합.</div>
          </div>
        </div>

        <div class="content">
          <div class="section">
            <div class="section-label">Overview</div>
            <div class="overview-grid">
              <!-- Color Card -->
              <div class="overview-card" onclick="navigate('page-color')">
                <div class="overview-card-art" style="background:#0A0A0A">
                  <svg width="160" height="100" viewBox="0 0 160 100">
                    <circle cx="55" cy="50" r="32" fill="#FF153C" opacity="0.9" />
                    <circle cx="85" cy="50" r="32" fill="#FFC93C" opacity="0.75" />
                    <circle cx="70" cy="30" r="28" fill="#0095FF" opacity="0.65" />
                    <!-- white outlines -->
                    <circle cx="55" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                    <circle cx="85" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                  </svg>
                </div>
                <div class="overview-card-label">Color</div>
              </div>
              <!-- Typography Card -->
              <div class="overview-card" onclick="navigate('page-typography')">
                <div class="overview-card-art"
                  style="background:#0A0A0A; flex-direction:column; gap:4px; padding:0 20px">
                  <div
                    style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:800;font-size:32px;color:white;letter-spacing:-0.02em;line-height:1">
                    Aa</div>
                  <div
                    style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:10px;color:#777;letter-spacing:0.1em">
                    42 / 36 / 30 / 24 / 20…</div>
                  <div style="font-size:11px;color:#555;font-weight:300">Bold · Read</div>
                </div>
                <div class="overview-card-label">Typography</div>
              </div>
              <!-- Breakpoints Card -->
              <div class="overview-card" onclick="navigate('page-breakpoints')">
                <div class="overview-card-art"
                  style="background:#0A0A0A; padding: 16px 24px; flex-direction:column; gap:5px; align-items:flex-start">
                  <div style="display:flex;flex-direction:column;gap:4px;width:100%">
                    <div style="display:flex;align-items:center;gap:8px">
                      <div
                        style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;color:#555;width:52px">
                        600px</div>
                      <div
                        style="flex:1;height:2px;background:linear-gradient(90deg,#FF153C,rgba(255,21,60,0.2));border-radius:1px">
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div
                        style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;color:#555;width:52px">
                        1000px</div>
                      <div
                        style="flex:1;height:2px;background:linear-gradient(90deg,#FF153C,rgba(255,21,60,0.2));border-radius:1px;width:60%">
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div
                        style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;color:#555;width:52px">
                        1400px</div>
                      <div
                        style="flex:1;height:2px;background:linear-gradient(90deg,#FF153C,rgba(255,21,60,0.2));border-radius:1px;width:78%">
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div
                        style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;color:#555;width:52px">
                        2000px</div>
                      <div
                        style="flex:1;height:2px;background:linear-gradient(90deg,#FF153C,rgba(255,21,60,0.2));border-radius:1px;width:90%">
                      </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px">
                      <div
                        style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:9px;color:#555;width:52px">
                        2400px</div>
                      <div
                        style="flex:1;height:2px;background:linear-gradient(90deg,#FF153C,rgba(255,21,60,0.2));border-radius:1px">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="overview-card-label">Breakpoints</div>
              </div>
              <!-- Tokens Card -->
              <div class="overview-card" onclick="navigate('page-tokens')">
                <div class="overview-card-art" style="background:#0A0A0A; padding:16px; align-items:flex-start">
                  <pre
                    style="font-family:'Pretendard Variable',Pretendard,sans-serif;font-size:10px;color:#444;line-height:1.7;overflow:hidden">{
  <span style="color:#7EC8E3">"color"</span>: {
    <span style="color:#7EC8E3">"brand"</span>: {
      <span style="color:#7EC8E3">"red"</span>: <span style="color:#A8E6A3">"#FF153C"</span>
    }
  }
}</pre>
                </div>
                <div class="overview-card-label">Design Tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
