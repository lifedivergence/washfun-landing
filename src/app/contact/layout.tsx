import type { Metadata } from "next";

const title = "세차장 컨설팅 문의 및 워시펀 도입 상담";
const description =
  "세차장 창업, 리모델링, 시스템 도입, 운영 컨설팅까지 워시펀이 도와드립니다. 전화 070-8806-8088 또는 contact@washfun.fun 으로 무료 상담을 신청하세요. 직영·가맹·개인 운영 세차장 모두 가능합니다.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "세차장 컨설팅 문의",
    "세차장 창업 상담",
    "세차장 리모델링 상담",
    "세차장 시스템 도입 문의",
    "워시펀 도입 문의",
    "워시펀 상담",
    "세차장 무료 상담",
    "세차장 솔루션 문의",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/contact",
    title,
    description,
    images: [
      {
        url: "/images/png/cover-page.png",
        width: 1200,
        height: 630,
        alt: "워시펀 컨설팅 문의",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
