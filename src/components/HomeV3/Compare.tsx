import Reveal from "@/components/common/Reveal";
import Tilt3D from "@/components/common/Tilt3D";

// 인접 두 매장 매출 점유 비중 (2024.09 ~ 2026.04)
const W = 640;
const H = 300;
const PAD_X = 56;
const PAD_Y = 36;

const y = (pct: number) => H - PAD_Y - (pct / 100) * (H - PAD_Y * 2);
const washfunPath = `M ${PAD_X} ${y(0)} C ${W / 2} ${y(8)}, ${W / 2} ${y(48)}, ${W - PAD_X} ${y(63.2)}`;
const legacyPath = `M ${PAD_X} ${y(100)} C ${W / 2} ${y(92)}, ${W / 2} ${y(52)}, ${W - PAD_X} ${y(36.8)}`;

export default function Compare() {
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
        <Reveal>
          <p className="text-[15px] font-bold text-main">HEAD TO HEAD</p>
          <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
            같은 상권, 146m 거리
            <br className="sx:hidden" /> 두 매장의 19개월
          </h2>
          <p className="mt-[12px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
            새로 문을 연 워시펀 매장이 2년 먼저 자리 잡은 인접 매장을
            앞질렀습니다.
          </p>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-[1fr_320px] items-center gap-[24px] lg:mt-[32px] lg:grid-cols-1">
          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[16px]">
              <div className="relative">
              {/* width/height 명시: iOS Safari 높이 0 계산 방지 */}
              <svg
                viewBox={`0 0 ${W} ${H}`}
                width={W}
                height={H}
                className="h-auto w-full"
                role="img"
                aria-label="인접 두 매장의 합산 매출 점유 비중 변화. 워시펀 매장 0%에서 63.2%로, 기존 매장 100%에서 36.8%로."
              >
                {/* 기준선 */}
                {[0, 50, 100].map((p) => (
                  <line
                    key={p}
                    x1={PAD_X}
                    x2={W - PAD_X}
                    y1={y(p)}
                    y2={y(p)}
                    stroke="#E1E3E6"
                    strokeWidth="1"
                  />
                ))}
                {/* 기존 매장 */}
                <path d={legacyPath} fill="none" stroke="#A1A6AD" strokeWidth="3" strokeLinecap="round" />
                {/* 워시펀 */}
                <path d={washfunPath} fill="none" stroke="#1C73BA" strokeWidth="4" strokeLinecap="round" />

                {/* 끝점 */}
                <g>
                  <circle cx={W - PAD_X} cy={y(63.2)} r="7" fill="#1C73BA" />
                  <circle cx={W - PAD_X} cy={y(36.8)} r="6" fill="#A1A6AD" />
                </g>
              </svg>

              <div>
                <span
                  className="absolute right-0 -translate-y-1/2 rounded-full bg-main px-[8px] py-[2px] text-[14px] font-bold text-white lg:text-[12px]"
                  style={{ top: `${(y(63.2) / H) * 100}%` }}
                >
                  63.2%
                </span>
                <span
                  className="absolute right-0 -translate-y-1/2 rounded-full bg-secondaryForeground px-[8px] py-[2px] text-[13px] font-semibold text-secondaryDefault lg:text-[11px]"
                  style={{ top: `${(y(36.8) / H) * 100}%` }}
                >
                  36.8%
                </span>
              </div>
              </div>

              <div className="mt-[6px] flex items-center justify-between px-[4px] text-[12px] text-secondaryDefault lg:text-[11px]">
                <span>2024.09 오픈</span>
                <span>2026.04</span>
              </div>

              <div className="mt-[12px] flex items-center gap-[20px] px-[8px]">
                <span className="flex items-center gap-[6px] text-[13px] font-semibold text-black">
                  <span className="inline-block h-[3px] w-[18px] rounded-full bg-main" />{" "}
                  워시펀 도입 매장 (신규)
                </span>
                <span className="flex items-center gap-[6px] text-[13px] font-medium text-secondaryDefault">
                  <span className="inline-block h-[3px] w-[18px] rounded-full bg-[#A1A6AD]" />{" "}
                  기존 매장 (2년 운영)
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-[16px]">
              <div className="rounded-[24px] bg-main p-[28px] text-white lg:p-[24px]">
                <p className="font-Poppins text-[40px] font-extrabold leading-none lg:text-[32px]">
                  63.2%
                </p>
                <p className="mt-[8px] text-[15px] font-semibold">
                  두 매장 매출 중 점유
                </p>
                <p className="mt-[4px] break-keep text-[13px] leading-[1.5] text-white/75">
                  신규 매장이 19개월 만에 인접 매장을 앞질렀습니다
                </p>
              </div>
              <Tilt3D
                className="relative overflow-hidden rounded-[24px] border border-borderStrong"
                max={7}
              >
                <svg
                  viewBox="0 0 915 625"
                  width={915}
                  height={625}
                  className="h-auto w-full"
                  role="img"
                  aria-label="워시펀 매장과 기존 매장의 위치입니다. 직선거리 146미터, 차로 1분 거리입니다."
                >
                  <image
                    href="/images/v2/webp/map-tile.webp"
                    width="915"
                    height="625"
                  />
                  {/* 점선: 핀 꼭짓점 직결 */}
                  <line
                    x1="585"
                    y1="204"
                    x2="421"
                    y2="429"
                    stroke="#1C73BA"
                    strokeWidth="4"
                    strokeDasharray="2 14"
                    strokeLinecap="round"
                  />
                  {/* 기존 매장 핀 */}
                  <g>
                    <g transform="translate(585 204)">
                      <path
                        d="M0 0C-16 -19 -30 -33 -30 -52A30 30 0 1 1 30 -52C30 -33 16 -19 0 0Z"
                        fill="#A1A6AD"
                        stroke="#fff"
                        strokeWidth="4"
                      />
                      <circle cy="-52" r="11" fill="#fff" />
                    </g>
                  </g>
                  {/* 워시펀 핀 (아래) */}
                  <g>
                    <g transform="translate(421 429)">
                      <path
                        d="M0 0C-18 -22 -34 -38 -34 -60A34 34 0 1 1 34 -60C34 -38 18 -22 0 0Z"
                        fill="#1C73BA"
                        stroke="#fff"
                        strokeWidth="4"
                      />
                      <circle cy="-60" r="12" fill="#fff" />
                    </g>
                  </g>
                </svg>
                {/* 거리 라벨 */}
                <span
                  className="absolute whitespace-nowrap rounded-full border border-borderStrong bg-white px-[10px] py-[4px] text-[12px] font-bold text-black shadow-[0_4px_12px_rgba(10,21,38,0.14)] lg:text-[11px]"
                  style={{ left: "56%", top: "50%", transform: "translate(-10%, -50%)" }}
                >
                  직선거리 146m · 차로 1분
                </span>
                {/* 범례 */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-[14px] bg-gradient-to-t from-white via-white/85 to-transparent px-[12px] pb-[10px] pt-[20px] text-[12px] font-medium">
                  <span className="flex items-center gap-[5px] font-semibold text-black">
                    <span className="size-[9px] rounded-full bg-main" /> 워시펀 매장
                  </span>
                  <span className="flex items-center gap-[5px] text-secondaryDefault">
                    <span className="size-[9px] rounded-full bg-[#A1A6AD]" /> 기존 매장
                  </span>
                </div>
              </Tilt3D>
            </div>
          </Reveal>
        </div>

        <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
          * 실제 인접 매장 사례 (2024.09 ~ 2026.04, 두 매장 매출 합계 대비 점유
          비중). 매장 환경에 따라 결과는 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
