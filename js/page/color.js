TDS_PAGES['page-color'] = `
      <div class="page" id="page-color">
        <div class="hero">
          <canvas class="hero-canvas" id="canvas-color"></canvas>
          <div class="hero-content">            <div class="hero-title">Color <span class="hero-badge stable">Stable</span></div>
            <div class="hero-desc">tving.red를 중심으로 한 단일 브랜드 컬러 전략. Opacity 변형을 통해 다양한 UI 상태를 표현합니다.</div>
          </div>
        </div>
        <div class="tabs-bar">
          <button class="tab-btn active" onclick="switchTab(this,'tab-color-usage')">Usage</button>
          <button class="tab-btn" onclick="switchTab(this,'tab-color-specs')">Specs</button>
        </div>
        <div class="content">

          <!-- USAGE TAB -->
          <div class="tab-panel active" id="tab-color-usage">

            <div class="section">
              <div class="section-label">Brand Color · Tint</div>
              <div class="section-desc">tving.red (#FF153C)가 유일한 브랜드 컬러입니다. 나머지는 콘텐츠 카테고리 구분 및 서비스별 구분에만 사용합니다.</div>
              <div class="chip-grid" id="brand-colors-grid"></div>
              <div class="chip-grid" id="brand-colors-grid-2" style="margin-top:8px"></div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Gray Color · 다이나믹/제플린 공용 토큰</div>
              <div class="section-desc">NONE 주의: 아이콘은 원칙적으로 화이트(투명)만 사용합니다. gray500이상만 서비스에 사용 가능합니다. 그 외 4.5이하 비율의 색상은
                사용 금지입니다.</div>
              <div class="chip-grid" id="gray-scale-grid"></div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Opacity Color</div>
              <p
                style="font-family:var(--mono);font-size:9px;color:var(--g50);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:10px">
                Red</p>
              <div class="opacity-strip" id="opacity-red" style="margin-bottom:20px"></div>
              <p
                style="font-family:var(--mono);font-size:9px;color:var(--g50);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:10px">
                White</p>
              <div class="opacity-strip" id="opacity-white" style="margin-bottom:20px"></div>
              <p
                style="font-family:var(--mono);font-size:9px;color:var(--g50);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:10px">
                Black</p>
              <div class="opacity-strip" id="opacity-black"></div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Gradient Color · 다목적</div>
              <div class="gradient-row" id="gradient-row"></div>
            </div>

            <div class="divider"></div>

            <div class="section">
              <div class="section-label">Usage Guidance</div>
              <div class="dos-donts" id="dodont-color"></div>
            </div>

          </div><!-- /usage tab -->

          <!-- SPECS TAB -->
          <div class="tab-panel" id="tab-color-specs">
            <div class="section">
              <div class="section-label">Contrast Ratio · WCAG 2.1</div>
              <div class="callout info">
                <div class="callout-icon">ℹ</div>
                <div class="callout-text"><strong>AA 기준:</strong> 일반 텍스트 4.5:1 이상 / 대형 텍스트(18px Bold, 24px+) 3:1 이상 / UI
                  컴포넌트 3:1 이상</div>
              </div>
              <div class="contrast-grid" id="contrast-grid" style="margin-top:20px"></div>
              <div class="callout warn" style="margin-top:24px">
                <div class="callout-icon">⚠</div>
                <div class="callout-text">tving.red(#FF153C)는 흰 배경에서 <strong>3.5:1</strong>로 AA 기준 미달입니다. 흰 배경 레이아웃에서
                  Red를 텍스트 색상으로 사용하지 마십시오.</div>
              </div>
            </div>
          </div><!-- /specs tab -->

        </div>
      </div><!-- /page-color -->
`;
