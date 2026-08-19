/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://www.lifedivergence.com";

module.exports = {
  siteUrl: SITE_URL,
  // 13개짜리 정적 사이트맵에 전부 같은 빌드 시각을 박으면 신호가 안 된다.
  autoLastmod: false,
  changefreq: "weekly",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  priority: 0.7,
  exclude: [
    "/icon.ico",
    "/subscription/*",
    "/inquiry",
    "/inquiry/*",
    "/term-of-service",
    "/terms-of-service",
    "/terms-of-service-kiosk",
    "/terms-of-privacy",
    "/terms-of-privacy-kiosk",
    "/terms-of-digital",
    "/terms-of-location",
    "/terms-of-location/*",
    "/privacy-policy",
  ],
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/consulting": 0.95,
      "/consulting/start-business": 0.9,
      "/consulting/self-wash": 0.9,
      "/consulting/auto-wash": 0.9,
      "/consulting/remodeling": 0.9,
      "/consulting/system": 0.9,
      "/consulting/operations": 0.9,
      "/devices": 0.85,
      "/devices/self-wash": 0.9,
      "/devices/auto-wash": 0.9,
      "/service": 0.85,
      "/contact": 0.85,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? 0.7,
      // 커스텀 transform 은 기본 lastmod 를 덮어쓴다. 직접 넣어야 남는다.
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        // /inquiry 는 (webview) 레이아웃에서 noindex 다. robots 로 막으면
        // 크롤러가 그 noindex 를 읽지 못해 오히려 색인이 남는다.
        disallow: [],
      },
    ],
  },
};
