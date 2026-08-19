/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /terms-of-service 와 본문이 같은 중복 라우트였다. 푸터는 복수형만 링크한다.
      {
        source: "/term-of-service",
        destination: "/terms-of-service",
        permanent: true,
      },
      // 노터치 전용으로 읽히던 경로를 자동 세차 전체로 넓혔다.
      {
        source: "/devices/no-touch",
        destination: "/devices/auto-wash",
        permanent: true,
      },
      // 약관 원문은 Notion 이 정본이다. 웹에서 링크가 사라진 이 경로만 넘긴다.
      // /terms-* 웹뷰 라우트는 앱이 직접 여는 경로라 그대로 둔다.
      {
        source: "/privacy-policy",
        destination:
          "https://grand-balmoral-3e3.notion.site/1ba0700294898098b026f27f8c064406",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
