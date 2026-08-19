import Image from "next/image";
import Link from "next/link";
import { getTotals } from "./StatBand";
import LiveWashCount from "./LiveWashCount";

const step = (i: number) => ({ animationDelay: `${i * 0.09}s` });

export default async function Hero() {
  const initial = await getTotals();
  return (
    <section className="mx-auto w-full max-w-[1680px] px-[120px] lg:px-[16px]">
      <div className="relative flex h-[780px] w-full flex-col items-center overflow-hidden rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] pt-[100px] lg:h-auto lg:pb-0 lg:pt-[56px]">
        <div className="relative z-10 flex flex-col items-center">
          <p
            style={step(0)}
            className="hero-item rounded-full border border-main/20 bg-white/70 px-[16px] py-[6px] text-[14px] font-semibold text-main lg:text-[13px]"
          >
            데이터 기반 차세대 세차장 운영체계
          </p>

          <h1
            style={step(1)}
            className="hero-item mt-[24px] break-keep px-[16px] text-center text-[60px] font-bold leading-[1.2] text-black xl:text-[48px] lg:text-[32px]"
          >
            세차장 운영 효율과 고객 가치 향상을
            <br />
            <span className="text-main">숫자</span>로 증명합니다
          </h1>

          <p
            style={step(2)}
            className="hero-item mt-[20px] break-keep px-[16px] text-center text-[18px] leading-[1.6] text-secondaryDefault lg:text-[15px]"
          >
            <LiveWashCount initial={initial} />
          </p>

          <div
            style={step(3)}
            className="hero-item mt-[36px] flex items-center gap-[12px] lg:w-full lg:flex-col lg:px-[24px]"
          >
            <Link
              href="/contact"
              className="rounded-full bg-main px-[32px] py-[16px] text-[17px] font-bold text-white shadow-[0_12px_28px_rgba(28,115,186,0.35)] transition hover:brightness-110 lg:w-full lg:text-center"
            >
              무료 상담 신청
            </Link>
            <a
              href="#effect"
              className="rounded-full border border-black/15 bg-white/70 px-[32px] py-[16px] text-[17px] font-semibold text-black transition hover:bg-white lg:w-full lg:text-center"
            >
              도입 효과 보기
            </a>
          </div>

          <p
            style={step(4)}
            className="hero-item mt-[18px] text-[13px] text-secondaryDefault"
          >
            파트너 매장 실측 데이터
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 w-[76%] max-w-[1150px] -translate-x-1/2 lg:static lg:mt-[32px] lg:w-[92%] lg:translate-x-0">
          <div style={{ animationDelay: "0.3s" }} className="hero-item">
            <Image
              src="/images/v2/png/cover-car-trim.png"
              alt="워시펀 무인 세차 시스템이 설치된 셀프 세차장 전경"
              width={3724}
              height={577}
              priority
              sizes="(max-width: 1024px) 92vw, 1150px"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
