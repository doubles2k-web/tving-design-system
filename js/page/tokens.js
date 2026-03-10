TDS_PAGES['page-tokens'] = `
      <div class="page" id="page-tokens">
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-tokens"></canvas>
          <div class="hero-content">            <div class="hero-title">Design Tokens <span class="hero-badge beta">Beta</span></div>
            <div class="hero-desc">DTCG(Design Tokens Community Group) 포맷 기반. Style Dictionary로 CSS / JS / iOS / Android
              멀티플랫폼 자동 변환.</div>
          </div>
        </div>

        <div class="tabs-bar">
          <button class="tab-btn active" onclick="switchTab(this,'tab-tokens-color')">Color</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-tokens-typo')">Typography</button>
        </div>

        <div class="content">
          <div class="tab-panel active" id="tab-tokens-color">
            <div class="section">
              <div class="section-label">Color Tokens · DTCG Format</div>
              <div class="code-block">
                <div class="code-header"><span class="code-lang">JSON · Color Tokens (DTCG)</span><button
                    class="code-copy" onclick="copyCode(this)">Copy</button></div>
                <div class="code-body">{
                  <span class="c-prop">"color"</span>: {
                  <span class="c-prop">"brand"</span>: {
                  <span class="c-prop">"red"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#FF153C"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"red-dark"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#CC0028"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"cherry"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#FF4E6A"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"yellow"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#FFC93C"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"blue"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#0095FF"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"green"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#6BE477"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> }
                  },
                  <span class="c-prop">"gray"</span>: {
                  <span class="c-prop">"white"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#FFFFFF"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"900"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#F5F5F5"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"700"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#AAAAAA"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"500"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#666666"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"300"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#333333"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"black"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"#000000"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> }
                  },
                  <span class="c-prop">"opacity"</span>: {
                  <span class="c-prop">"red-30"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"rgba(255,21,60,0.3)"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"red-15"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"rgba(255,21,60,0.15)"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"white-30"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"rgba(255,255,255,0.3)"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> },
                  <span class="c-prop">"black-70"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"rgba(0,0,0,0.7)"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"color"</span> }
                  }
                  }
                  }
                </div>
              </div>
            </div>
          </div>

          <div class="tab-panel" id="tab-tokens-typo">
            <div class="section">
              <div class="section-label">Typography Tokens</div>
              <div class="code-block">
                <div class="code-header"><span class="code-lang">JSON · Typography Tokens (DTCG)</span><button
                    class="code-copy" onclick="copyCode(this)">Copy</button></div>
                <div class="code-body">{
                  <span class="c-prop">"typography"</span>: {
                  <span class="c-prop">"size"</span>: {
                  <span class="c-prop">"42"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"42px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"36"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"36px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"30"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"30px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"24"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"24px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"20"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"20px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"18"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"18px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"16"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"16px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"14"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"14px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"12"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"12px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> },
                  <span class="c-prop">"10"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">"10px"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"dimension"</span> }
                  },
                  <span class="c-prop">"lineHeight"</span>: {
                  <span class="c-prop">"bold"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-val">"normal"</span>, <span class="c-prop">"$type"</span>: <span
                    class="c-val">"number"</span> },
                  <span class="c-prop">"read-sm"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">1.3</span>, <span class="c-prop">"$type"</span>: <span class="c-val">"number"</span>
                  },
                  <span class="c-prop">"read-md"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">1.5</span>, <span class="c-prop">"$type"</span>: <span class="c-val">"number"</span>
                  },
                  <span class="c-prop">"read-lg"</span>: { <span class="c-prop">"$value"</span>: <span
                    class="c-num">1.6</span>, <span class="c-prop">"$type"</span>: <span class="c-val">"number"</span> }
                  }
                  }
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

`;
