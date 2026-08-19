import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import Banner from "@/components/HomeV2/Banner";
import Reveal from "@/components/common/Reveal";
import { buildOg, buildTwitter } from "@/lib/seo";

const SITE_URL = "https://www.lifedivergence.com";

const title = "세차장 설비";
const description =
  "워시펀 설비로 구성하는 세차장을 유형별로 확인하세요. 셀프 세차장은 워시펀이 직접 개발한 코인박스와 기계실 릴레이보드를, 자동 세차장은 세차기 연동 키오스크와 번호판 인식 카메라를 중심으로 구성합니다. 노터치와 브러시 방식 모두 지원합니다.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "세차장 설비",
    "셀프 세차장 설비",
    "노터치 세차장 설비",
    "자동 세차장 설비",
    "브러시 세차기",
    "세차장 코인박스",
    "세차장 키오스크",
    "워시펀 설비",
  ],
  alternates: { canonical: "/devices" },
  openGraph: buildOg({
    title,
    description,
    path: "/devices",
    alt: "워시펀 세차장 설비",
  }),
  twitter: buildTwitter({ title, description }),
};

const TYPES = [
  {
    href: "/devices/self-wash",
    name: "셀프 세차장",
    lead: "고객이 직접 세차하는 매장입니다. 베이마다 코인박스를 두고 기계실 릴레이보드로 고압펌프와 폼 공급을 제어합니다.",
    items: [
      "코인박스",
      "기계실 릴레이보드",
      "청소기 기판",
      "매트세척기 기판",
      "포인트 충전 키오스크",
      "네트워크 시스템",
    ],
  },
  {
    href: "/devices/auto-wash",
    name: "자동 세차장",
    lead: "차량이 들어오면 자동으로 세차가 시작되는 매장입니다. 노터치와 브러시 방식 모두, 세차기 제조사와 무관하게 연동합니다.",
    items: [
      "키오스크",
      "번호판 인식 카메라",
      "청소기 기판",
      "매트세척기 기판",
      "포인트 충전 키오스크",
      "네트워크 시스템",
    ],
  },
];

export default function DevicesIndex() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "설비",
        item: `${SITE_URL}/devices`,
      },
    ],
  };

  return (
    <div className="font-Pretendard text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main>
        <section className="mx-auto w-full max-w-[1680px] px-[120px] lg:px-[16px]">
          <div className="flex w-full flex-col items-center rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] px-[24px] py-[80px] lg:py-[48px]">
            <p className="text-[14px] font-semibold text-main">DEVICES</p>
            <h1 className="mt-[10px] break-keep text-center text-[48px] font-bold leading-[1.25] xl:text-[40px] lg:text-[28px]">
              세차장에 들어가는 설비
            </h1>
            <p className="mt-[16px] max-w-[640px] break-keep text-center text-[17px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
              매장 유형에 따라 구성이 다릅니다. 어떤 방식으로 운영하실지 고르면
              필요한 설비가 정해집니다.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-[24px] py-[120px] lg:px-[16px] lg:py-[64px]">
          <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-1">
            {TYPES.map((t, i) => (
              <Reveal key={t.href} delay={i * 0.08}>
                <Link
                  href={t.href}
                  className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-primary-shadow lg:p-[24px]"
                >
                  <h2 className="text-[28px] font-bold lg:text-[22px]">
                    {t.name}
                  </h2>
                  <p className="mt-[10px] break-keep text-[15px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
                    {t.lead}
                  </p>
                  <ul className="mt-[20px] flex flex-wrap gap-[8px]">
                    {t.items.map((it) => (
                      <li
                        key={it}
                        className="whitespace-nowrap rounded-full bg-secondaryForeground px-[12px] py-[6px] text-[13px] font-semibold text-secondaryDefault"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-[24px] text-[15px] font-bold text-main">
                    {t.name} 설비 6종 보기 →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
