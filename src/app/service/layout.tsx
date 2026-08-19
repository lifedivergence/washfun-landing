import type { Metadata } from "next";

const title = "세차장 사장님 관리 대시보드";
const description =
  "요금 변경부터 고장 대응까지 매장에 나가지 않고 휴대폰으로 처리합니다. 워시펀 사장님 대시보드에서 매출 데이터, 결제 내역과 원격 환불, 설비 모니터링, 포인트, 할인 쿠폰, 그룹 프로모션을 한 화면에서 이용하세요. 세차장 시스템 도입을 고민 중이시라면 무료 상담을 신청해 보세요.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "세차장 시스템",
    "세차장 무인 시스템",
    "세차장 관리 시스템",
    "세차장 사장님 대시보드",
    "세차장 키오스크",
    "세차장 변동 요금제",
    "세차장 포인트 시스템",
    "세차장 매출 관리",
    "세차장 운영 솔루션",
    "워시펀",
  ],
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/service",
    title,
    description,
    images: [
      {
        url: "/images/png/cover-page.png",
        width: 1200,
        height: 630,
        alt: "워시펀 사장님 대시보드 화면",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
