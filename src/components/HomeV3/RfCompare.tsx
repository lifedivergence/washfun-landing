import Reveal from "@/components/common/Reveal";

// RF 후불제 객단가 검증 리포트 기준
const RF_AVG = 8596;
const POST_AVG = 9806;
const DIST = [
  { key: "more", label: "더 냈습니다", pct: 53.6, count: 1446, tone: "bg-main", hex: "#1C73BA" },
  { key: "same", label: "비슷했습니다", pct: 20.5, count: 553, tone: "bg-[#7EB8FF]", hex: "#7EB8FF" },
  { key: "less", label: "덜 냈습니다", pct: 25.9, count: 697, tone: "bg-borderStrong", hex: "#E1E3E6" },
];

// 도넛 기하 (정적 SVG)
const R = 68;
const C = 2 * Math.PI * R;
const SEGMENTS = DIST.reduce<{ d: (typeof DIST)[number]; offset: number }[]>((acc, d) => {
  const prev = acc.length ? acc[acc.length - 1] : null;
  const offset = prev ? prev.offset + (prev.d.pct / 100) * C : 0;
  return [...acc, { d, offset }];
}, []);

const BAR_MAX = 150;

export default function RfCompare() {
  return (
    <section className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
      <Reveal>
        <p className="text-[15px] font-bold text-main">ARPC</p>
        <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
          워시펀 셀프 세차 후불 결제는 RF카드의 객단가 상한선을 제거합니다
        </h2>
        <p className="mt-[12px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
          세차 기록을 예전 RF카드 요금으로 환산해 후불제 결제액과 나란히 비교했습니다.
        </p>
      </Reveal>

      <div className="mt-[48px] grid grid-cols-[380px_1fr] gap-[16px] lg:mt-[32px] lg:grid-cols-1">
        {/* 좌: 평균 객단가 비교 */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
            <p className="text-[15px] font-bold text-black">평균 객단가</p>
            <div className="mt-[24px] flex flex-1 items-end justify-center gap-[28px]">
              <div className="flex flex-col items-center">
                <span className="mb-[8px] font-Poppins text-[15px] font-bold text-secondaryDefault">
                  {RF_AVG.toLocaleString()}
                </span>
                <div
                  className="w-[74px] rounded-t-[8px] bg-borderStrong lg:w-[60px]"
                  style={{ height: Math.round(BAR_MAX * (RF_AVG / POST_AVG)) }}
                />
                <span className="mt-[10px] text-[13px] font-semibold text-secondaryDefault">
                  RF카드 기준
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-[8px] font-Poppins text-[18px] font-extrabold text-main">
                  {POST_AVG.toLocaleString()}
                </span>
                <div
                  className="w-[74px] rounded-t-[8px] bg-gradient-to-b from-main to-primary lg:w-[60px]"
                  style={{ height: BAR_MAX }}
                />
                <span className="mt-[10px] text-[13px] font-semibold text-black">후불제</span>
              </div>
            </div>
            <p className="mt-[24px] rounded-[12px] bg-secondaryForeground px-[16px] py-[12px] text-center text-[15px] font-bold text-black">
              한 번 세차에 <span className="text-main">1,210원</span> 더
            </p>
          </div>
        </Reveal>

        {/* 우: 증감 분포 */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
            <p className="text-[15px] font-bold text-black">고객 결제액은 어떻게 달라졌나</p>

            <div className="mt-[16px] flex flex-1 items-center justify-center">
              <div className="relative">
                <svg width="188" height="188" viewBox="0 0 188 188" role="img" aria-label="RF카드 대비 결제액 증감 분포. 더 냈습니다 53.6%, 비슷했습니다 20.5%, 덜 냈습니다 25.9%.">
                  <g transform="rotate(-90 94 94)">
                    {SEGMENTS.map(({ d, offset }) => (
                      <circle
                        key={d.key}
                        cx="94"
                        cy="94"
                        r={R}
                        fill="none"
                        stroke={d.hex}
                        strokeWidth="26"
                        strokeDasharray={`${(d.pct / 100) * C} ${C}`}
                        strokeDashoffset={-offset}
                      />
                    ))}
                  </g>
                </svg>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-Poppins text-[26px] font-extrabold leading-none text-black">
                    2,696
                  </p>
                  <p className="mt-[4px] text-[12px] font-semibold text-secondaryDefault">
                    비교 대상 건수
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-3 gap-[12px] md:grid-cols-1">
              {DIST.map((d) => (
                <div key={d.key} className="flex items-start gap-[8px]">
                  <span className={`mt-[5px] size-[9px] shrink-0 rounded-full ${d.tone}`} />
                  <div>
                    <p className="break-keep text-[14px] font-bold text-black">
                      {d.label} <span className="font-Poppins text-main">{d.pct}%</span>
                    </p>
                    <p className="text-[13px] text-secondaryDefault">
                      {d.count.toLocaleString()}건
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </div>

      {/* 상충 해소 논리 */}
      <Reveal delay={0.1}>
        <div className="mt-[16px] grid grid-cols-[1fr_1fr] gap-[16px] rounded-[24px] bg-black p-[40px] lg:grid-cols-1 lg:gap-[24px] lg:p-[24px]">
          <div>
            <p className="text-[13px] font-bold text-primary">WHY IT WORKS</p>
            <p className="mt-[8px] break-keep text-[26px] font-bold leading-[1.4] text-white lg:text-[20px]">
              RF카드는 손님을 불편하게 만들어야
              <br />
              돈을 더 벌던 구조였습니다
            </p>
            <p className="mt-[12px] break-keep text-[15px] leading-[1.7] text-[#C4C7CC] lg:text-[14px]">
              태그 한 번에 3,000~4,000원이 빠져나갔습니다. 제때 연장하지 못하면 기본 요금을 다시 내야
              했습니다. 고압수 코인박스와 폼건 코인박스를 따로 두고, 한 번의 세차에 기본 요금을 세 번
              받는 곳도 있었습니다. 고객은 기본 요금이 아까워 대충 마무리하고 떠납니다.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-[16px] bg-white/10 p-[28px] lg:p-[20px]">
            <p className="break-keep text-[18px] font-bold leading-[1.5] text-white lg:text-[16px]">
              후불제는 그 상충을 없앱니다
            </p>
            <p className="mt-[10px] break-keep text-[15px] leading-[1.7] text-[#C4C7CC] lg:text-[14px]">
              쓴 만큼만 계산하니 손님은 정해진 시간 안에 끝내려고 서두를 필요가 없고, 물과 거품을 충분히
              사용합니다. 매장은 손님을 불편하게 만들지 않고도 객단가가 오릅니다. 고객 불만 없이 오른
              객단가라 단골이 끊이지 않습니다.
            </p>
            <p className="mt-[16px] break-keep text-[15px] font-bold text-white">
              고객 만족과 수익률이 같은 방향으로 움직입니다.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 교차 검증 */}
      <Reveal delay={0.1}>
        <div className="mt-[16px] flex items-center gap-[32px] rounded-[24px] border border-borderStrong bg-secondaryForeground px-[40px] py-[28px] lg:flex-col lg:items-start lg:gap-[16px] lg:px-[24px]">
          <div className="shrink-0">
            <p className="text-[13px] font-bold text-main">CROSS CHECK</p>
            <p className="mt-[6px] whitespace-nowrap text-[20px] font-bold text-black lg:text-[17px]">
              서로 다른 두 방식, 같은 결론
            </p>
          </div>
          <div className="flex items-center gap-[20px] lg:flex-wrap lg:gap-[12px]">
            <div className="rounded-[14px] bg-white px-[18px] py-[12px] text-center">
              <p className="font-Poppins text-[22px] font-extrabold leading-none text-secondaryDefault">
                +14.2%
              </p>
              <p className="mt-[5px] whitespace-nowrap text-[12px] font-semibold text-secondaryDefault">설문 기준</p>
            </div>
            <span className="text-[18px] font-bold text-secondaryDefault">≈</span>
            <div className="rounded-[14px] bg-white px-[18px] py-[12px] text-center">
              <p className="font-Poppins text-[22px] font-extrabold leading-none text-main">+14.1%</p>
              <p className="mt-[5px] whitespace-nowrap text-[12px] font-semibold text-black">이용 기록 기준</p>
            </div>
            <p className="break-keep text-[14px] leading-[1.6] text-secondaryDefault lg:text-[13px]">
              설문으로 파악한 값과 이용 기록을 환산한 값이 0.1%p 차이, 오차범위 안에서 일치했습니다. 두
              산출 경로가 서로 독립적이어서 한쪽의 편향이 다른 쪽에 반영되지 않습니다.
            </p>
          </div>
        </div>
      </Reveal>

      <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
        * 설문 기준 +14.2%는 외부 조사기관이 무작위 표집한 500명 대상 설문 결과입니다. RF 기준금액은 실제 RF카드 결제 기록이 아니라, 세차 이용 시간을 예전 요금표로 환산한 추정값입니다. 고압수와 폼건만 사용해 요금 환산이 가능한 건을 대상으로 했고, 거품솔·하부세차·왁스가 섞이거나 패턴 판별이 어려운 건은 제외했습니다. 표본이 제한적인 대신 같은 세차를 1:1로 비교할 수 있어, 전체 고객군을 대상으로 한 설문 결과와 교차 확인했습니다. 비교 대상만 놓고 보면 후불제 평균이 9,806원이지만, 셀프 세차 전체 평균 객단가는 10,282원입니다. 요금 환산이 가능한 단순 패턴만 골라 비교해 고액 세차가 빠져 있어, 실제 상승폭은 이보다 클 수 있습니다.
      </p>
    </section>
  );
}
