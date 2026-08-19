import Reveal from "@/components/common/Reveal";

// 앞 단계를 실제로 포함하는 지표만 깔때기에 둔다.
const FUNNEL = [
  { pct: 100, label: "처음 방문한 고객", note: "기준" },
  { pct: 53.1, label: "두 번 이상 이용", note: "기간 무관 누적" },
  { pct: 18.2, label: "꾸준히 오는 단골", note: "12개월 내 6회 이상 이용" },
];

export default function Loyalty() {
  return (
    <section className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
      <Reveal>
        <p className="text-[15px] font-bold text-main">LOYALTY</p>
        <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
          워시펀 매장 매출의 <span className="text-main">82.7%</span>는, 다시 온
          고객입니다
        </h2>
        <p className="mt-[12px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
          워시펀은 방문·결제 데이터를 회원 관리로 연결해, 한 번 온 고객을 다시
          부릅니다. 그렇게 만든 단골이 매출 대부분을 책임집니다.
        </p>
      </Reveal>

      <div className="mt-[48px] grid grid-cols-[1fr_360px] gap-[16px] lg:mt-[32px] lg:grid-cols-1">
        {/* 깔때기 */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
            <p className="text-[15px] font-bold text-black">
              처음 온 고객이 단골이 되기까지
            </p>
            <div className="mt-[24px] flex flex-col gap-[10px]">
              {FUNNEL.map((f, i) => (
                <div key={f.label} className="flex items-center gap-[16px]">
                  {/* 채움 폭이 좁으면 라벨이 흰 트랙 위로 밀려 나가 안 보인다. 막대 밖에 둔다. */}
                  <div className="flex h-[44px] flex-1 items-center overflow-hidden rounded-[8px] bg-secondaryForeground">
                    <div
                      className={`flex h-full items-center px-[14px] ${
                        i === 0
                          ? "bg-borderStrong"
                          : "bg-gradient-to-r from-subPrimary to-main"
                      }`}
                      style={{ width: `${f.pct}%` }}
                    >
                      {f.pct >= 35 && (
                        <span
                          className={`whitespace-nowrap font-Poppins text-[15px] font-extrabold ${
                            i === 0 ? "text-secondaryDefault" : "text-white"
                          }`}
                        >
                          {f.pct}%
                        </span>
                      )}
                    </div>
                    {f.pct < 35 && (
                      <span className="whitespace-nowrap px-[10px] font-Poppins text-[15px] font-extrabold text-main">
                        {f.pct}%
                      </span>
                    )}
                  </div>
                  <div className="w-[190px] shrink-0 lg:w-[130px]">
                    <p className="break-keep text-[14px] font-bold text-black lg:text-[13px]">
                      {f.label}
                    </p>
                    <p className="break-keep text-[12px] text-secondaryDefault">
                      {f.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-[20px] break-keep rounded-[12px] bg-lightPrimary4 px-[16px] py-[14px] text-[14px] leading-[1.65] text-black">
              첫 방문 후 재방문까지 소요되는 기간은 고객마다 다릅니다. 시간을
              두고 부르면 열에 일곱이 결국 다시 찾아옵니다.
            </p>
          </div>
        </Reveal>

        {/* 단골이 만드는 결과 */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col gap-[16px]">
            <div className="rounded-[24px] bg-main p-[28px] text-white lg:p-[24px]">
              <p className="font-Poppins text-[40px] font-extrabold leading-none lg:text-[32px]">
                13.9일
              </p>
              <p className="mt-[8px] text-[15px] font-semibold">
                재방문 세차 주기 (중앙값)
              </p>
              <p className="mt-[4px] break-keep text-[13px] leading-[1.5] text-white/75">
                다시 찾는 고객의 절반이 2주 안에 옵니다
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-[24px] border border-borderStrong bg-white p-[28px] lg:p-[24px]">
              <p className="font-Poppins text-[40px] font-extrabold leading-none text-black lg:text-[32px]">
                47.7%
              </p>
              <p className="mt-[8px] text-[15px] font-semibold text-black">
                상위 10% 고객의 매출 기여
              </p>
              <p className="mt-[4px] break-keep text-[13px] leading-[1.5] text-secondaryDefault">
                단골 관리가 곧 매출 관리인 이유입니다
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
        * 워시펀 파트너 매장 실거래 데이터 기준 (2024.09 ~ 2026.08). 매출 비중은
        회원(식별 고객) 결제액 기준이며, 방문은 2시간 이내 이용을 1회로
        집계합니다. 단골 비중은 12개월 안에 6회 이상 방문한 고객 기준입니다.
      </p>
    </section>
  );
}
