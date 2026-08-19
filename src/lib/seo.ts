/**
 * Next.js 의 metadata 는 세그먼트끼리 얕게 병합된다.
 * 자식이 openGraph 를 선언하는 순간 루트의 images 와 siteName 이 통째로 사라진다.
 * 그래서 페이지마다 직접 쓰지 않고 이 헬퍼로 항상 전부 채운다.
 */
export const SITE_URL = "https://www.lifedivergence.com";
export const SITE_NAME = "워시펀 WashFun";

export const OG_IMAGE = {
  url: "/images/png/cover-page.png",
  width: 1920,
  height: 1038,
} as const;

export function buildOg({
  title,
  description,
  path,
  alt,
}: {
  title: string;
  description: string;
  path: string;
  alt: string;
}) {
  return {
    type: "website" as const,
    locale: "ko_KR",
    url: path,
    siteName: SITE_NAME,
    title,
    description,
    images: [{ ...OG_IMAGE, alt }],
  };
}

export function buildTwitter({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [OG_IMAGE.url],
  };
}
