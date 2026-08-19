import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import Banner from "@/components/HomeV2/Banner";
import Reveal from "@/components/common/Reveal";

const SITE_URL = "https://www.lifedivergence.com";

const FEATURES = [
  {
    title: "매출 데이터 대시보드",
    desc: "일간·월별 매출 흐름을 한눈에 봅니다. 어느 시간대에 매출이 몰리는지도 함께 보입니다.",
    img: "/images/v2/webp/iso-dashboard.webp",
  },
  {
    title: "결제 내역 확인·원격 환불",
    desc: "결제 기록을 바로 찾아 그 자리에서 환불합니다. 번거로운 연락과 계좌이체가 필요 없습니다.",
    img: "/images/v2/webp/iso-refund.webp",
  },
  {
    title: "실시간 설비 모니터링",
    desc: "설비 상태와 고장을 실시간으로 확인합니다. 문제가 생긴 설비는 원격으로 사용을 막아 2차 피해를 줄입니다.",
    img: "/images/v2/webp/iso-monitor.webp",
  },
  {
    title: "포인트 관리",
    desc: "포인트를 원격으로 충전하고 사용 내역을 확인합니다. 고객과의 잔액 관련 논쟁을 사전에 방지합니다.",
    img: "/images/v2/webp/iso-point.webp",
  },
  {
    title: "고객 할인 쿠폰 발행",
    desc: "고객군을 나눠 할인·포인트 쿠폰을 보냅니다. 한동안 오지 않은 고객을 다시 부를 때 씁니다.",
    img: "/images/v2/webp/iso-coupon.webp",
  },
  {
    title: "그룹 프로모션",
    desc: "제휴한 매장의 고객에게 할인이 자동으로 적용됩니다. 새 손님이 들어오는 경로가 하나 늘어납니다.",
    img: "/images/v2/webp/iso-promo.webp",
  },
];

// 카드로 빼지 않은 기능. 목록으로만 짚고 넘어간다.
const MORE = [
  "원격 요금 변경",
  "베이별 이용 현황",
  "재고 관리",
  "고장·에러 내역",
  "현금 충전 내역",
];

export default function Service() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "사장님 대시보드",
        item: `${SITE_URL}/service`,
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
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1680px] px-[120px] lg:px-[16px]">
        <div className="flex w-full flex-col items-center overflow-hidden rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] px-[24px] pt-[80px] lg:pt-[48px]">
          <p className="rounded-full border border-main/20 bg-white/70 px-[16px] py-[6px] text-[14px] font-semibold text-main lg:text-[13px]">
            워시펀 사장님 대시보드
          </p>
          <h1 className="mt-[24px] break-keep text-center text-[52px] font-bold leading-[1.25] xl:text-[42px] lg:text-[30px]">
            포인트 충전도, 설비 고장 대응과 환불도
            <br />
            휴대폰에서 끝납니다
          </h1>
          <p className="mt-[16px] max-w-[660px] break-keep text-center text-[17px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
            매출과 설비 상태, 결제 내역을 어디서든 확인하고, 환불과 프로모션까지
            손쉽게 처리합니다.
          </p>

          <div className="mt-[36px] flex items-center gap-[12px] lg:w-full lg:flex-col">
            <Link
              href="/contact"
              className="rounded-full bg-main px-[32px] py-[16px] text-[17px] font-bold text-white shadow-[0_12px_28px_rgba(28,115,186,0.35)] transition hover:brightness-110 lg:w-full lg:text-center"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/devices/self-wash"
              className="rounded-full border border-black/15 bg-white/70 px-[32px] py-[16px] text-[17px] font-semibold text-black transition hover:bg-white lg:w-full lg:text-center"
            >
              설비 보기
            </Link>
          </div>

          <Reveal
            delay={0.15}
            className="mt-[48px] w-full max-w-[900px] lg:mt-[32px]"
          >
            <Image
              src="/images/png/dashboard-mockup.png"
              alt="워시펀 사장님 대시보드 매출 화면"
              width={1362}
              height={782}
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* 기능 그리드 */}
      <section className="mx-auto max-w-[1200px] px-[24px] py-[120px] lg:px-[16px] lg:py-[64px]">
        <Reveal>
          <p className="text-[15px] font-bold text-main">FEATURES</p>
          <h2 className="mt-[12px] break-keep text-[44px] font-bold leading-[1.25] lg:text-[26px]">
            매장 운영에 필요한 기능을 한곳에 모았습니다
          </h2>
          <p className="mt-[12px] break-keep text-[16px] text-secondaryDefault lg:text-[14px]">
            설비가 결제와 사용 내역을 자동으로 남기기 때문에 따로 입력하거나 정리할 일이 없습니다.
          </p>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-3 gap-[16px] lg:mt-[32px] lg:grid-cols-1">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={Math.min(i, 2) * 0.08}>
              <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[24px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-primary-shadow">
                <div className="relative h-[180px] w-full overflow-hidden rounded-[16px] bg-secondaryForeground">
                  <Image
                    src={f.img}
                    alt={`워시펀 사장님 대시보드 ${f.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 370px"
                    className="object-contain p-[16px]"
                  />
                </div>
                <div className="mt-[16px] flex items-center gap-[10px]">
                  <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-main font-Poppins text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[19px] font-bold lg:text-[17px]">
                    {f.title}
                  </p>
                </div>
                <p className="mt-[8px] break-keep text-[14px] leading-[1.55] text-secondaryDefault">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-[24px] rounded-[20px] border border-borderStrong bg-secondaryForeground px-[24px] py-[20px] lg:mt-[20px] lg:px-[20px]">
            <p className="text-[14px] font-bold text-black">
              이런 기능도 있습니다
            </p>
            <div className="mt-[12px] flex flex-wrap gap-[8px]">
              {MORE.map((m) => (
                <span
                  key={m}
                  className="whitespace-nowrap rounded-full bg-white px-[13px] py-[7px] text-[13px] font-semibold text-secondaryDefault"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 설비 연동 밴드 */}
      <section className="mx-auto max-w-[1440px] px-[120px] pt-[80px] lg:px-[16px] lg:pt-[48px]">
        <div className="rounded-[40px] bg-secondaryForeground px-[40px] py-[64px] lg:px-[24px] lg:py-[40px]">
          <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
            <h2 className="break-keep text-[36px] font-bold leading-[1.3] lg:text-[24px]">
              설비가 기록한 내역이 그대로 대시보드에 표시됩니다
            </h2>
            <p className="mt-[14px] break-keep text-[16px] leading-[1.7] text-secondaryDefault lg:text-[14px]">
              코인박스와 청소기 기판은 워시펀이 직접 개발하고 유지보수하고, 설비와
              키오스크를 움직이는 소프트웨어는 전부 워시펀이 만듭니다. 매장에서
              일어나는 일을 빠짐없이 데이터로 남기고,
              이를 활용해 운영 효율을 높이는 방법을 연구합니다.
            </p>
            <div className="mt-[28px] flex gap-[12px] lg:w-full lg:flex-col">
              <Link
                href="/devices/self-wash"
                className="rounded-full bg-main px-[28px] py-[13px] text-[15px] font-bold text-white transition hover:brightness-110 lg:text-center"
              >
                셀프 세차장 설비
              </Link>
              <Link
                href="/devices/auto-wash"
                className="rounded-full border border-borderStrong bg-white px-[28px] py-[13px] text-[15px] font-semibold text-black transition hover:bg-white/60 lg:text-center"
              >
                자동 세차장 설비
              </Link>
            </div>
            <p className="mt-[24px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
              * 번호판 인식 카메라와 네트워크 장비는 납품받아 연동합니다.
              세차기·기계실 펌프 등 시공 설비의 사후 관리는 시공 파트너사가
              담당합니다.
            </p>
          </div>
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
