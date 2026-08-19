import Image from "next/image";
import Reveal from "@/components/common/Reveal";

const NOW = [
  { title: "회원 대상 알림 발송", desc: "사장님 대시보드에서 직접 보냅니다" },
  {
    title: "포인트·쿠폰 지급",
    desc: "지급과 동시에 고객 휴대폰으로 알림이 나갑니다",
  },
  {
    title: "방문·결제 이력 조회",
    desc: "누가 언제 얼마를 썼는지 회원 단위로 남습니다",
  },
];

const NEXT = [
  "날씨 연동 탄력 요금",
  "세차 시기 예측 알림",
  "이탈 위험 고객 자동 선별",
];

export default function Crm() {
  return (
    <section className="bg-lightPrimary4">
      <div className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
        <Reveal>
          <p className="text-[15px] font-bold text-main">CRM</p>
          <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
            차이는 데이터와 고객 관리 여부입니다
          </h2>
          <p className="mt-[12px] max-w-[760px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
            고객이 올 때마다 방문 기록이 쌓입니다. 사장님은 고객을 선별해 혜택과
            함께 이벤트 알림을 보냅니다. 현수막과 배너가 닿지 못한 고객까지
            정확히 도달합니다.
          </p>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-[1fr_1fr] gap-[16px] lg:mt-[32px] lg:grid-cols-1">
          {/* 알림 예시 */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
              <Image
                src="/images/v2/png/push-alert.png"
                alt="워시펀 개인화 알림 예시. 날씨 연동 할인 안내, 세차 시기 예측 알림, 탄력 요금 안내"
                width={1928}
                height={1247}
                className="mx-auto h-auto w-full max-w-[520px]"
              />
            </div>
          </Reveal>

          {/* 지금 되는 것 / 연구 개발 중 */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col gap-[16px]">
              <div className="rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
                <p className="text-[17px] font-bold text-black">
                  지금 사용 가능
                </p>
                <ul className="mt-[20px] flex flex-col gap-[14px]">
                  {NOW.map((n) => (
                    <li key={n.title} className="flex items-start gap-[10px]">
                      <Image
                        src="/images/v2/svg/check-blue.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="mt-[3px] shrink-0"
                      />
                      <div>
                        <p className="break-keep text-[15px] font-bold text-black lg:text-[14px]">
                          {n.title}
                        </p>
                        <p className="break-keep text-[13px] leading-[1.5] text-secondaryDefault">
                          {n.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-1 flex-col rounded-[24px] border border-dashed border-borderStrong bg-secondaryForeground p-[32px] lg:p-[24px]">
                <p className="text-[17px] font-bold text-secondaryDefault">
                  연구 개발 중
                </p>
                <ul className="mt-[16px] flex flex-wrap gap-[8px]">
                  {NEXT.map((n) => (
                    <li
                      key={n}
                      className="break-keep rounded-full bg-white px-[12px] py-[7px] text-[13px] font-semibold text-secondaryDefault"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-[16px] break-keep text-[13px] leading-[1.6] text-secondaryDefault">
                  워시펀은 어떻게 하면 더 밀도 있게 손님을 끌어올 수 있을지
                  끊임없이 연구하고 있습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-[20px] break-keep text-[12px] leading-[1.6] text-secondaryDefault">
          * 알림 화면은 예시 이미지입니다.
        </p>
      </div>
    </section>
  );
}
