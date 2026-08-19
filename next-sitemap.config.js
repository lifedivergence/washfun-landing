/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://www.lifedivergence.com";

module.exports = {
  siteUrl: SITE_URL,
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
        disallow: [
          // 약관·개인정보처리방침은 색인을 막지 않는다.
          // 사업자 신뢰 신호이고, 사이트맵에서만 빼면 충분하다.
          "/inquiry",
        ],
      },
    ],
  },
};
