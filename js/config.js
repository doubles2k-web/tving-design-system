const TDS_CONFIG = {

  // ═══════════════════════════════════════════
  // ✏️  1. BRAND COLORS (Tint)
  // dark: true → 텍스트를 검정으로 표시 (밝은 색 배경용)
  // ═══════════════════════════════════════════
  brandColors: [
    { name: 'tving.red', hex: '#FF153C' },
    { name: 'tving.dark.red', hex: '#CC0028' },
    { name: 'tving.cherry', hex: '#FF4E6A' },
    { name: 'tving.yellow', hex: '#FFC93C', dark: true },
    { name: 'tving.light.yellow', hex: '#FFE03C', dark: true },
    { name: 'tving.blue', hex: '#0095FF' },
    { name: 'tving.dark.blue', hex: '#1A4CAA' },
    { name: 'tving.green', hex: '#6BE477', dark: true },
    { name: 'tving.orange', hex: '#FF7A45' },
    { name: 'service.primary', hex: '#9005FF' },
  ],

  // 두 번째 줄 (다크 컬러 계열)
  brandColorsRow2: [
    { name: 'tving.dark.charcoal', hex: '#1C1C22' },
    { name: 'tving.charcoal', hex: '#3C3740' },
    { name: 'tving.light.charcoal', hex: '#4D4742' },
    { name: 'tving.dark.coal', hex: '#2D3338' },
    { name: 'tving.coal', hex: '#3C4651' },
  ],

  // ═══════════════════════════════════════════
  // ✏️  2. GRAY SCALE
  // dark: true → 텍스트를 검정으로 표시
  // ═══════════════════════════════════════════
  grayScale: [
    { name: 'white', hex: '#FFFFFF', dark: true },
    { name: 'gray900', hex: '#F5F5F5', dark: true },
    { name: 'gray800', hex: '#CBCBCB', dark: true },
    { name: 'gray700', hex: '#959595', dark: true },
    { name: 'gray600', hex: '#686868' },
    { name: 'gray500', hex: '#505050' },
    { name: 'gray400', hex: '#3C3C3C' },
    { name: 'gray300', hex: '#292929' },
    { name: 'gray200', hex: '#1A1A1A' },
    { name: 'gray100', hex: '#131313' },
    { name: 'black', hex: '#000000' },
  ],

  // ═══════════════════════════════════════════
  // ✏️  3. OPACITY COLORS
  // opacityRedBase: Red 컬러의 RGB 값 (hex 변경 시 함께 수정)
  // ═══════════════════════════════════════════
  opacityRedBase: '255, 21, 60',
  opacityRed: [
    { name: 'red·100', alpha: 1.0 },
    { name: 'red·90', alpha: 0.9 },
    { name: 'red·70', alpha: 0.7 },
    { name: 'red·50', alpha: 0.5 },
    { name: 'red·30', alpha: 0.3 },
    { name: 'red·15', alpha: 0.15 },
  ],

  opacityWhite: [
    { name: 'W·90', alpha: 0.9 },
    { name: 'W·70', alpha: 0.7 },
    { name: 'W·50', alpha: 0.5 },
    { name: 'W·30', alpha: 0.3 },
    { name: 'W·15', alpha: 0.15 },
    { name: 'W·7', alpha: 0.07, border: true },
    { name: 'W·4', alpha: 0.04, border: true },
  ],

  opacityBlack: [
    { name: 'B·90', alpha: 0.9 },
    { name: 'B·70', alpha: 0.7 },
    { name: 'B·50', alpha: 0.5 },
    { name: 'B·30', alpha: 0.3 },
    { name: 'B·15', alpha: 0.15 },
  ],

  // ═══════════════════════════════════════════
  // ✏️  4. GRADIENTS
  // desc: 줄바꿈은 \n 사용
  // ═══════════════════════════════════════════
  gradients: [
    {
      name: 'LINEAR 100',
      css: 'linear-gradient(90deg, #FFF, #000)',
      desc: '#FFFFFF → #000000\nlinear-gradient(90deg)',
    },
    {
      name: 'LINEAR 50',
      css: 'linear-gradient(90deg, transparent, #000)',
      desc: 'transparent → #000000',
    },
    {
      name: 'LINEAR_SCRIM',
      css: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 60%, #000 100%)',
      desc: 'transparent → bg\n콘텐츠 오버레이용',
    },
  ],

  // ═══════════════════════════════════════════
  // ✏️  5. CONTRAST RATIOS (WCAG)
  // pass: true → AA Pass / false → Fail
  // note: 추가 설명 텍스트 (선택)
  // ═══════════════════════════════════════════
  contrastChips: [
    { bg: '#FFFFFF', fg: '#000000', ratio: '21:1', pair: 'White / Black', pass: true },
    { bg: '#141414', fg: '#FFFFFF', ratio: '19:1', pair: 'bg / White', pass: true, border: true },
    { bg: '#141414', fg: '#888888', ratio: '4.8:1', pair: 'bg / Gray600', pass: true, border: true },
    { bg: '#FF153C', fg: '#000000', ratio: '5.9:1', pair: 'Red / Black', pass: true },
    { bg: '#FF153C', fg: '#FFFFFF', ratio: '3.5:1', pair: 'Red / White', pass: false },
    { bg: '#141414', fg: '#666666', ratio: '3.3:1', pair: 'bg / Gray500', pass: false, border: true, note: ' (body)' },
  ],

  // ═══════════════════════════════════════════
  // ✏️  6. TYPOGRAPHY SCALE
  // token: CSS 토큰명
  // size: px 값 (숫자)
  // style: 'bold' | 'read'
  // lineHeight: 행간/자간 표시 문자열
  // warning: true → 사용 금지 경고 표시
  // ─────────────────────────────────────────── 
  // 행 추가: 아래 배열에 객체 한 줄 추가
  // 행 삭제: 해당 줄 삭제
  // ═══════════════════════════════════════════
  typeScale: [
    { token: 'font-42', size: 42, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-36', size: 36, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-30', size: 30, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-30-read', size: 30, style: 'read', lineHeight: '130% / 4' },
    { token: 'font-24', size: 24, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-20', size: 20, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-20-read', size: 20, style: 'read', lineHeight: '130% / 2' },
    { token: 'font-18', size: 18, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-18-read', size: 18, style: 'read', lineHeight: '150% / 8' },
    { token: 'font-17', size: 17, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-17-read', size: 17, style: 'read', lineHeight: '150% / 8' },
    { token: 'font-16', size: 16, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-16-read', size: 16, style: 'read', lineHeight: '150% / 5' },
    { token: 'font-15', size: 15, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-14', size: 14, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-14-read', size: 14, style: 'read', lineHeight: '150% / 4' },
    { token: 'font-13', size: 13, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-13-read', size: 13, style: 'read', lineHeight: '150% / 5' },
    { token: 'font-12', size: 12, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-12-read', size: 12, style: 'read', lineHeight: '150% / 4' },
    { token: 'font-10', size: 10, style: 'bold', lineHeight: 'Auto' },
    { token: 'font-10-read', size: 10, style: 'read', lineHeight: '150% / 3' },
    { token: 'font-7', size: 7, style: 'read', lineHeight: 'Auto', warning: true },
  ],

  // ═══════════════════════════════════════════
  // ✏️  7. BREAKPOINTS
  // barW: 비주얼 바 너비 (%) — 시각적 비례 표현용
  // fontSize: 해당 뷰포트의 root font-size
  // ═══════════════════════════════════════════
  breakpoints: [
    { name: 'Mobile', range: '~ 600px', colV: '3.2', colH: '3.2', barW: '18%', fontSize: '2.5vw' },
    { name: 'Tablet', range: '600px +', colV: '5', colH: '3', barW: '35%', fontSize: '1.2vw' },
    { name: 'Desktop S', range: '1000px +', colV: '6', colH: '4', barW: '55%', fontSize: '1.5vw (portrait)' },
    { name: 'Desktop L', range: '1400px +', colV: '7', colH: '5', barW: '70%', fontSize: '1vw' },
    { name: 'Wide', range: '2000px +', colV: '8', colH: '6', barW: '85%', fontSize: '16px' },
    { name: '4K / TV', range: '2400px +', colV: '8', colH: '6', barW: '100%', fontSize: '18px' },
  ],

  // ═══════════════════════════════════════════
  // ✏️  8. DO / DON'T 가이드 텍스트
  // ═══════════════════════════════════════════
  dodonts: {
    color: {
      do: 'tving.red는 CTA 버튼, 브랜드 강조에만 단독 사용. Opacity 변형(red·15, red·10)으로 배경 표현 시 사용합니다.',
      dont: 'tving.red를 일반 텍스트 색상으로 사용하지 않습니다. 흰 배경 위에서 red·50 이하 Opacity는 WCAG 기준 미달이므로 단독 텍스트 사용 금지.',
    },
    typography: {
      do: 'Bold는 1~2줄 헤드라인에만. Read는 3줄 이상 본문 텍스트에 사용. line-height 차이를 반드시 지킬 것.',
      dont: 'Bold 스타일을 긴 본문에 사용하거나, Read 스타일의 line-height를 임의로 줄이지 않습니다. 최소 폰트 사이즈 10px 미만 사용 금지.',
    },
    breakpoints: {
      do: '각 중단점에서 정의된 column grid를 준수합니다. root font-size는 vw 단위로 유동 적용되며 2000px 이상에서는 px 고정됩니다.',
      dont: 'breakpoint 사이 임의의 중간 값을 추가하거나, column 수를 줄여 레이아웃을 단순화하지 않습니다.',
    },
  },

  // ═══════════════════════════════════════════
  // ✏️  9. NAVIGATION — 컴포넌트 목록
  // status: 'stable' | 'beta' | 'soon'
  // pageId: 연결할 페이지 id (없으면 null)
  // ─────────────────────────────────────────── 
  // 항목 추가: 배열에 객체 한 줄 추가
  // 항목 삭제: 해당 줄 삭제
  // ═══════════════════════════════════════════
  components: [
    { name: 'Button', status: 'stable', pageId: 'page-button' },  // ✏️ pageId 연결됨
    { name: 'Badge', status: 'soon', pageId: null },            // ✏️ 페이지 만들면 여기 수정
    { name: 'Input', status: 'soon', pageId: null },
    { name: 'Modal', status: 'soon', pageId: null },
    { name: 'Toast', status: 'soon', pageId: null },
    { name: 'Chip', status: 'soon', pageId: null },
    { name: 'Carousel', status: 'soon', pageId: null },
  ],

  // ═══════════════════════════════════════════
  // ✏️  10. NAVIGATION — 패턴 목록
  // ═══════════════════════════════════════════
  patterns: [
    { name: 'Navigation', status: 'soon', pageId: null },
    { name: 'Card Grid', status: 'soon', pageId: null },
    { name: 'Hero Banner', status: 'soon', pageId: null },
  ],

}; // ← TDS_CONFIG 끝
