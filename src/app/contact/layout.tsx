import type { Metadata } from "next";

const title = "세차장 도입 문의 및 컨설팅 상담";
import { buildOg, buildTwitter } from "@/lib/seo";
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
  openGraph: buildOg({
    title,
    description,
    path: "/contact",
    alt: "워시펀 도입 문의",
  }),
  twitter: buildTwitter({ title, description }),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
