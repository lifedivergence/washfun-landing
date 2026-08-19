import Reveal from "@/components/common/Reveal";

const CARDS = [
  {
    value: "35.9%",
    label: "도입 매장 매출 증가율",
    note: "2025년 대비 2026년 상반기 월별 매출 비교",
  },
  {
    value: "+14.1%",
    label: "객단가 향상",
    note: "RF카드 대비 8,596원 → 9,806원",
  },
  {
    value: "89.1%",
    label: "비수기 매출 보존",
    note: "상반기 최고 매출 대비 올해 7월 비수기 매출 보존율",
  },
];

export default function Effect() {
  return (
    <section id="effect" className="bg-lightPrimary4">
      <div className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
        <Reveal>
          <p className="text-[15px] font-bold text-main">AFTER</p>
          <h2 className="mt-[12px] text-[48px] font-extrabold leading-[1.25] text-black lg:text-[28px]">
            셀프 세차장, 이렇게 달라집니다
          </h2>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-3 gap-[16px] lg:mt-[32px] lg:grid-cols-1">
          {CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-[10px] rounded-[24px] border border-borderStrong bg-white p-[32px] transition-all duration-300 hover:-translate-y-[4px] hover:shadow-primary-shadow lg:p-[24px]">
                <p className="font-Poppins text-[42px] font-extrabold leading-none tracking-tight text-main lg:text-[32px]">
                  {c.value}
                </p>
                <p className="break-keep text-[18px] font-bold text-black lg:text-[16px]">
                  {c.label}
                </p>
                <p className="break-keep text-[14px] leading-[1.5] text-secondaryDefault">
                  {c.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 복귀 프로모션 스트립 */}
        <Reveal delay={0.1}>
          <div className="mt-[16px] flex items-center justify-between gap-[24px] rounded-[24px] bg-black px-[40px] py-[32px] lg:flex-col lg:items-start lg:px-[24px]">
            <div>
              <p className="text-[20px] font-bold text-white lg:text-[17px]">
                떠난 고객도 다시 데려옵니다
              </p>
              <p className="mt-[6px] text-[14px] text-[#C4C7CC]">
                장기 미방문 고객 대상 복귀 프로모션 4개월 시행 결과
              </p>
            </div>
            <div className="flex gap-[48px] lg:gap-[32px]">
              <div>
                <p className="font-Poppins text-[36px] font-extrabold text-primary lg:text-[28px]">
                  22.1%
                </p>
                <p className="text-[14px] font-medium text-[#C4C7CC]">
                  고객 복귀율
                </p>
              </div>
              <div>
                <p className="font-Poppins text-[36px] font-extrabold text-primary lg:text-[28px]">
                  +11.4%
                </p>
                <p className="text-[14px] font-medium text-[#C4C7CC]">
                  전체 매출
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
          * 매장 규모·입지·운영 방식·도입 범위에 따라 효과는 다를 수 있습니다.
          매출 증가율과 복귀 프로모션 수치는 워시펀 내부 리서치와 실제 도입
          매장 사례 기준입니다.
        </p>
      </div>
    </section>
  );
}
