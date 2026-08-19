import Reveal from "@/components/common/Reveal";

// 사례 A: 셀프 세차장 / 사례 B: 노터치 세차장 (2026년 실적)
const PEAK_TO_LOW = 89.1; // 5월 고점 대비 7월 매출 유지율
// 노터치 매장 월별 매출을 5월(고점) 전체 = 100으로 지수화. 실액수는 노출하지 않는다.
const MONTHS = [
  { m: "4월", sub: 38.1, gen: 62.4 },
  { m: "5월", sub: 42.6, gen: 57.4 },
  { m: "6월", sub: 39.5, gen: 44.2 },
  { m: "7월", sub: 34.6, gen: 26.6 },
];
const SUB_KEEP = 81.3; // 5월 대비 7월 구독 매출 유지율
const GEN_KEEP = 46.3; // 5월 대비 7월 일반 결제 유지율
const BAR_MAX = 190; // px, 지수 100 기준 높이

export default function Seasonality() {
  return (
    <section className="bg-lightPrimary4">
      <div className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
        <Reveal>
          <p className="text-[15px] font-bold text-main">SEASONALITY</p>
          <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
            비수기에도 매출이 방어됩니다
          </h2>
          <p className="mt-[12px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
            장마와 폭염이 겹치는 여름은 모든 세차장의 비수기입니다. 성수기 대비 절반 아래로 떨어지는
            매장이 흔한 시기에, 워시펀 도입 매장 두 곳이 어땠는지 그대로 보여드립니다.
          </p>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-2 gap-[16px] lg:mt-[32px] lg:grid-cols-1">
          {/* 사례 A: 셀프 세차장 */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
              <div className="flex items-center gap-[8px]">
                <span className="rounded-full bg-main px-[10px] py-[4px] text-[12px] font-bold text-white">
                  사례 A
                </span>
                <span className="text-[14px] font-semibold text-secondaryDefault">셀프 세차장</span>
              </div>

              <p className="mt-[16px] break-keep text-[20px] font-bold leading-[1.4] text-black lg:text-[17px]">
                고점 대비 <span className="text-main">{PEAK_TO_LOW}%</span>를 지켰습니다
              </p>
              <p className="mt-[6px] break-keep text-[14px] leading-[1.55] text-secondaryDefault">
                탄탄한 단골 고객층 덕분에 성수기 매출의 열에 아홉을 지켰습니다.
              </p>

              {/* 5월 vs 7월 막대 */}
              <div className="mt-[28px] flex flex-1 items-end gap-[20px] lg:mt-[24px]">
                <div className="flex flex-1 flex-col items-center">
                  <span className="mb-[8px] font-Poppins text-[15px] font-bold text-secondaryDefault">
                    100%
                  </span>
                  <div
                    className="w-full rounded-t-[8px] bg-borderStrong"
                    style={{ height: 140 }}
                  />
                  <span className="mt-[10px] text-[13px] font-semibold text-secondaryDefault">
                    5월 고점
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center">
                  <span className="mb-[8px] font-Poppins text-[18px] font-extrabold text-main">
                    {PEAK_TO_LOW}%
                  </span>
                  <div
                    className="w-full rounded-t-[8px] bg-gradient-to-b from-main to-primary"
                    style={{ height: Math.round(140 * (PEAK_TO_LOW / 100)) }}
                  />
                  <span className="mt-[10px] text-[13px] font-semibold text-black">7월 비수기</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 사례 B: 노터치 세차장 */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
              <div className="flex items-center gap-[8px]">
                <span className="rounded-full bg-subPrimary px-[10px] py-[4px] text-[12px] font-bold text-white">
                  사례 B
                </span>
                <span className="text-[14px] font-semibold text-secondaryDefault">노터치 세차장</span>
              </div>

              <p className="mt-[16px] break-keep text-[20px] font-bold leading-[1.4] text-black lg:text-[17px]">
                일반 결제는 반토막, <span className="text-main">구독은 대부분 유지</span>됐습니다
              </p>
              <p className="mt-[6px] break-keep text-[14px] leading-[1.55] text-secondaryDefault">
                날씨가 나빠도 구독 매출은 견고하게 버텨줍니다.
              </p>

              {/* 월별 누적 막대: 5월 전체 = 100 지수 */}
              <div className="mt-[28px] flex flex-1 flex-col justify-end lg:mt-[24px]">
                <div className="flex items-end gap-[14px]" style={{ height: BAR_MAX + 10 }}>
                  {MONTHS.map((d) => (
                    <div key={d.m} className="flex flex-1 flex-col items-center">
                      <div className="flex w-full flex-col justify-end" style={{ height: BAR_MAX }}>
                        <div
                          className="w-full rounded-t-[6px] bg-borderStrong"
                          style={{ height: `${(d.gen / 100) * BAR_MAX}px` }}
                        />
                        <div
                          className="w-full bg-gradient-to-b from-subPrimary to-main"
                          style={{ height: `${(d.sub / 100) * BAR_MAX}px` }}
                        />
                      </div>
                      <span className="mt-[8px] text-[13px] font-semibold text-secondaryDefault">
                        {d.m}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-[14px] flex items-center gap-[16px]">
                  <span className="flex items-center gap-[6px] text-[13px] font-semibold text-black">
                    <span className="size-[9px] rounded-full bg-main" /> 구독 매출
                  </span>
                  <span className="flex items-center gap-[6px] text-[13px] font-medium text-secondaryDefault">
                    <span className="size-[9px] rounded-full bg-borderStrong" /> 일반 결제
                  </span>
                </div>

                <div className="mt-[14px] grid grid-cols-2 gap-[8px]">
                  <div className="rounded-[12px] bg-secondaryForeground px-[14px] py-[10px]">
                    <p className="font-Poppins text-[20px] font-extrabold leading-none text-main">
                      {SUB_KEEP}%
                    </p>
                    <p className="mt-[4px] break-keep text-[12px] text-secondaryDefault">
                      구독 매출 유지 (5월 대비 7월)
                    </p>
                  </div>
                  <div className="rounded-[12px] bg-secondaryForeground px-[14px] py-[10px]">
                    <p className="font-Poppins text-[20px] font-extrabold leading-none text-secondaryDefault">
                      {GEN_KEEP}%
                    </p>
                    <p className="mt-[4px] break-keep text-[12px] text-secondaryDefault">
                      일반 결제 유지 (5월 대비 7월)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
          * 워시펀 파트너 매장의 2026년 실적 기준이며, 사례 B 그래프는 5월 매출을 100으로 둔 지수입니다. 매장 규모·입지·운영 방식에 따라 효과는 상이할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
