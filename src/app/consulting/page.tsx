import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import { buildOg, buildTwitter } from "@/lib/seo";

const SITE_URL = "https://www.lifedivergence.com";

const title = "세차장 창업·리모델링·시스템 도입 컨설팅";
const description =
  "세차장 개업을 고민 중이거나, 기존 매장 리모델링·무인 시스템 도입·운영 효율화를 검토하시나요? 워시펀이 창업비용 분석부터 후불제 셀프 세차, 구독제 자동 세차, 사장님 관리 시스템까지 한 번에 컨설팅합니다. 무료 상담 신청.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "세차장 창업",
    "세차장 개업",
    "세차장 창업비용",
    "세차장 창업 컨설팅",
    "셀프세차장 창업",
    "자동세차장 창업",
    "세차장 리모델링",
    "세차장 리모델링 비용",
    "세차장 시스템 도입",
    "세차장 무인 시스템",
    "세차장 운영 컨설팅",
    "세차장 매출 증대",
    "세차장 솔루션",
    "워시펀 컨설팅",
    "RF카드 대체",
    "세차장 키오스크",
  ],
  alternates: {
    canonical: "/consulting",
  },
  openGraph: buildOg({
    title,
    description,
    path: "/consulting",
    alt: "워시펀 세차장 컨설팅",
  }),
  twitter: buildTwitter({ title, description }),
};

const FAQ = [
  {
    q: "세차장 창업비용은 얼마나 드나요?",
    a: "입지, 면적, 셀프/자동 세차 구성, 설비 사양에 따라 다릅니다. 워시펀은 무료 사전 상담을 통해 예상 매출, 회수기간, 초기 투자비를 함께 시뮬레이션해 드립니다.",
  },
  {
    q: "기존 세차장을 리모델링하면서 시스템만 바꿀 수 있나요?",
    a: "가능합니다. 세차기와 펌프, 청소기 같은 기존 설비는 그대로 두고 결제와 운영 시스템만 워시펀으로 바꿉니다. RF카드는 워시펀 코인박스에서 사용할 수 없으며, 카드에 남은 잔액은 키오스크에서 워시펀 포인트로 옮깁니다.",
  },
  {
    q: "직영·가맹·개인 운영 세차장 모두 도입 가능한가요?",
    a: "네, 운영 형태에 관계없이 도입 가능합니다. 사장님 대시보드에서 매출, 설비 상태, 고객 데이터, 포인트 충전 현황을 한 화면으로 확인하실 수 있습니다.",
  },
  {
    q: "비수기 매출이 걱정인데 구독제 자동 세차가 정말 도움이 되나요?",
    a: "워시펀 구독 고객은 월 평균 3.8회 방문합니다. 구독하지 않은 고객(1.1회)의 약 3.4배로, 비수기에도 안정적인 고정 매출을 만듭니다. 시간대 변동 요금제로 비수기 객수를 추가로 끌어올릴 수 있습니다. 날씨 기반 프로모션은 연구 개발 중입니다.",
  },
  {
    q: "상담은 어떻게 신청하나요?",
    a: "본 페이지 하단 '무료 상담 신청' 버튼 또는 070-8806-8088 / contact@washfun.fun 으로 연락 주시면 1영업일 내 컨설턴트가 회신드립니다.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "세차장 컨설팅",
      item: `${SITE_URL}/consulting`,
    },
  ],
};

const SEGMENTS = [
  {
    href: "/consulting/start-business",
    cta: "세차장 창업 가이드 보기",
    h: "세차장 개업·창업을 고민 중이신가요?",
    sub: "세차장 창업비용, 입지 분석, 매출 시뮬레이션부터 함께합니다.",
    bullets: [
      "셀프세차장·자동세차장 창업 모델 비교",
      "예상 매출·회수기간·운영비 분석",
      "초기 설비 구성, 인허가, 매장 동선 컨설팅",
      "후불제·구독제 기반 차별화된 창업 전략",
    ],
  },
  {
    href: "/consulting/remodeling",
    cta: "리모델링 절차 보기",
    h: "세차장 리모델링을 계획하고 계신가요?",
    sub: "기존 설비는 살리고 결제부터 단계적으로 디지털 전환할 수 있습니다.",
    bullets: [
      "세차기·펌프·청소기 유지 + 결제만 후불제로 전환",
      "기존 키오스크는 소프트웨어만 교체해 포인트 충전 키오스크로 전환",
      "구독제 자동 세차 추가로 객단가·재방문율 확보",
      "기존 고객 혼란 없는 점진적 마이그레이션 설계",
    ],
  },
  {
    href: "/consulting/system",
    cta: "시스템 도입 알아보기",
    h: "세차장 시스템 도입을 검토 중이신가요?",
    sub: "무인 운영, 사장님 대시보드, 변동 요금제까지 한 번에 도입하세요.",
    bullets: [
      "후불제 자동 결제 셀프 세차 시스템",
      "정기 구독 기반 노터치 자동 세차 시스템",
      "포인트 충전 키오스크",
      "가격·재고·설비 상태를 한곳에 모은 사장님 대시보드",
      "KC 인증 설비와 신속 A/S",
    ],
  },
  {
    href: "/consulting/operations",
    cta: "운영 컨설팅 보기",
    h: "이미 세차장을 운영 중이신가요?",
    sub: "매출 분석, 프로모션 자동화, 객단가 증대까지 운영 컨설팅으로 지원합니다.",
    bullets: [
      "시간대별 변동 요금제 · 날씨 기반 프로모션(연구 개발 중)",
      "구독 고객 확보로 비수기 매출 고정화",
      "객단가 평균 +14.1% 사례 기반 운영 개선",
      "고객 분쟁·설비 장애 대응을 위한 무인 운영 보조",
    ],
  },
];

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "워시펀 세차장 컨설팅",
  "@id": `${SITE_URL}/consulting#service`,
  url: `${SITE_URL}/consulting`,
  image: `${SITE_URL}/images/png/cover-page.png`,
  description:
    "세차장 창업, 리모델링, 무인 시스템 도입, 운영 효율화까지 워시펀이 지원하는 세차장 종합 컨설팅 서비스.",
  provider: { "@type": "Organization", "@id": `${SITE_URL}#organization` },
  areaServed: "KR",
  telephone: "+82-70-8806-8088",
  email: "contact@washfun.fun",
  serviceType: [
    "세차장 창업 컨설팅",
    "세차장 리모델링 컨설팅",
    "세차장 시스템 도입",
    "세차장 운영 컨설팅",
  ],
};

export default function ConsultingPage() {
  return (
    <>
      <Header />
      <main className="box-border w-full px-[120px] font-Pretendard text-black lg:px-[16px]">
        <script
          id="ld-faq-consulting"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          id="ld-professionalservice-consulting"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          id="ld-breadcrumb-consulting"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <section className="mx-auto max-w-[1440px] pt-[120px] lg:pt-[40px]">
          <div className="flex flex-col items-center gap-[16px] text-center">
            <p className="text-[18px] font-medium text-secondaryDefault lg:text-[14px]">
              세차장 종합 컨설팅 · 워시펀
            </p>
            <h1 className="text-balance text-[56px] font-bold leading-[1.15] lg:text-[26px] lg:leading-[1.3]">
              세차장 창업, 리모델링, 시스템 도입까지
              <br className="md:hidden" />한 번에 컨설팅 받으세요.
            </h1>
            <p className="max-w-[760px] text-[18px] leading-[28px] text-secondaryDefault lg:text-[14px] lg:leading-[22px]">
              세차장 개업을 고민 중이거나, 기존 매장의 리모델링·무인 시스템
              도입·운영 효율화를 검토하시나요? 워시펀은 창업비용 분석부터 후불제
              셀프 세차, 구독제 자동 세차, 사장님 관리 시스템까지 세차장 운영의
              전 과정을 한 팀이 함께 설계합니다.
            </p>
            <div className="mt-[24px] flex items-center gap-[12px] lg:flex-col">
              <Link
                href="/contact"
                className="rounded-[999px] bg-main px-[28px] py-[14px] text-[16px] font-semibold text-white"
                aria-label="세차장 컨설팅 무료 상담 신청하기"
              >
                무료 상담 신청하기
              </Link>
              <a
                href="tel:+82-70-8806-8088"
                className="rounded-[999px] border border-borderStrong px-[24px] py-[14px] text-[16px] font-semibold text-black"
                aria-label="전화로 워시펀 컨설팅 상담하기"
              >
                ☎ 070-8806-8088
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[120px] grid max-w-[1440px] grid-cols-2 gap-[16px] lg:mt-[60px] lg:grid-cols-1">
          {SEGMENTS.map((seg) => (
            <article
              key={seg.h}
              className="flex flex-col gap-[16px] rounded-[24px] border border-borderStrong p-[32px] lg:p-[20px]"
            >
              <h2 className="text-[28px] font-semibold leading-[36px] lg:text-[20px] lg:leading-[28px]">
                {seg.h}
              </h2>
              <p className="text-[16px] leading-[24px] text-secondaryDefault lg:text-[14px]">
                {seg.sub}
              </p>
              <ul className="mt-[8px] flex flex-col gap-[8px]">
                {seg.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-[8px] text-[16px] leading-[24px] text-black lg:text-[14px]"
                  >
                    <span className="mt-[8px] inline-block size-[6px] shrink-0 rounded-full bg-main" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={seg.href}
                className="mt-auto inline-flex w-fit items-center gap-[6px] text-[14px] font-semibold text-main"
              >
                {seg.cta} →
              </Link>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-[120px] max-w-[1440px] lg:mt-[60px]">
          <h2 className="text-center text-[36px] font-bold lg:text-[24px]">
            상세 컨설팅 가이드
          </h2>
          <p className="mt-[12px] text-center text-[16px] text-secondaryDefault lg:text-[14px]">
            관심 주제별 상세 페이지에서 비용·절차·사례를 확인하세요.
          </p>
          <ul className="mt-[32px] grid grid-cols-3 gap-[12px] lg:grid-cols-1">
            <li>
              <Link
                href="/consulting/start-business"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">창업</p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  세차장 창업 가이드 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  창업비용·입지·수익 시뮬레이션
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/consulting/self-wash"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">
                  창업 · 셀프
                </p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  셀프세차장 창업 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  후불제·IoT 코인박스·베이 구성
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/consulting/auto-wash"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">
                  창업 · 자동
                </p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  자동세차장 창업 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  노터치·구독제·드라이브스루
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/consulting/remodeling"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">리모델링</p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  세차장 리모델링 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  기존 설비 살리며 단계적 전환
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/consulting/system"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">
                  시스템 도입
                </p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  무인 시스템 도입 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  키오스크·POS·관리 대시보드
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/consulting/operations"
                className="block h-full rounded-[20px] border border-borderStrong p-[24px] hover:border-main"
              >
                <p className="text-[14px] font-semibold text-main">운영</p>
                <p className="mt-[8px] text-[20px] font-semibold lg:text-[18px]">
                  세차장 운영 컨설팅 →
                </p>
                <p className="mt-[8px] text-[14px] text-secondaryDefault">
                  매출 증대·객단가·비수기 전략
                </p>
              </Link>
            </li>
          </ul>
        </section>

        <section className="mx-auto mt-[120px] max-w-[1080px] lg:mt-[60px]">
          <h2 className="text-center text-[40px] font-bold lg:text-[26px]">
            세차장 컨설팅 자주 묻는 질문
          </h2>
          <p className="mt-[12px] text-center text-[16px] text-secondaryDefault lg:text-[14px]">
            창업·리모델링·시스템 도입을 검토하시는 분들이 가장 자주 묻는 질문을
            모았습니다.
          </p>
          <div className="mt-[40px] flex flex-col gap-[12px]">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-[16px] border border-borderStrong p-[20px]"
              >
                <summary className="cursor-pointer text-[18px] font-semibold lg:text-[16px]">
                  {f.q}
                </summary>
                <p className="mt-[12px] text-[16px] leading-[26px] text-secondaryDefault lg:text-[14px]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-[160px] max-w-[1440px] lg:mt-[80px]">
          <div className="relative overflow-hidden rounded-[24px] bg-black p-[48px] text-center lg:p-[24px]">
            <h2 className="text-[40px] font-bold text-white lg:text-[24px]">
              세차장 운영, 더 이상 혼자 고민하지 마세요.
            </h2>
            <p className="mt-[12px] text-[16px] leading-[24px] text-white/70 lg:text-[14px]">
              창업, 리모델링, 시스템 도입, 운영까지 어느 단계에 계시든 무료로
              상담해 드립니다.
              <br />
              지금 바로 워시펀 컨설팅 팀에 연락 주세요.
            </p>
            <div className="mt-[28px] flex items-center justify-center gap-[12px] lg:flex-col">
              <Link
                href="/contact"
                className="rounded-[999px] bg-white px-[28px] py-[14px] text-[16px] font-semibold text-black"
              >
                무료 상담 신청하기
              </Link>
              <a
                href="mailto:contact@washfun.fun"
                className="rounded-[999px] border border-white/40 px-[24px] py-[14px] text-[16px] font-semibold text-white"
              >
                contact@washfun.fun
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="box-border w-full px-[120px] lg:px-[16px]">
        <p className="mx-auto mb-[24px] max-w-[1200px] break-keep px-[24px] text-[12px] leading-[1.6] text-secondaryDefault">
          * 객단가 14.1%는 셀프 세차 사용 이력 14,541건 중 RF 기준금액 추정이
          가능한 2,696건을 같은 조건으로 비교한 값이며, 구독 고객 월 평균 방문
          3.8회·비구독 1.1회는 워시펀 특정 도입 매장 실측 기준입니다.
        </p>
        <Footer />
      </div>
    </>
  );
}
