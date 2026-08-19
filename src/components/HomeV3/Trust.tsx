import Reveal from "@/components/common/Reveal";

const ITEMS = [
  {
    value: "214명",
    label: "매장당 월평균 신규 고객",
    note: "도입 매장에 매달 새로 유입되는 고객 수",
  },
  {
    value: "78%",
    label: "워크인 고객 → 회원 전환",
    note: "키오스크와 차량번호 인식(ANPR)으로 만든 전환율",
  },
];

export default function Trust() {
  return (
    <section className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
      <div className="rounded-[40px] bg-secondaryForeground px-[24px] py-[100px] lg:py-[64px]">
        <Reveal>
          <h2 className="break-keep text-center text-[40px] font-bold leading-[1.3] text-black lg:text-[26px]">
            숫자는 계속 쌓이고 있습니다
          </h2>
        </Reveal>

        <div className="mt-[56px] grid grid-cols-2 gap-[40px] lg:mt-[36px] lg:grid-cols-1 lg:gap-[28px]">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-[8px] text-center">
                <p className="font-Poppins text-[56px] font-extrabold leading-none text-main lg:text-[40px]">
                  {it.value}
                </p>
                <p className="text-[18px] font-bold text-black lg:text-[16px]">
                  {it.label}
                </p>
                <p className="break-keep text-[14px] text-secondaryDefault">
                  {it.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-[48px] max-w-[900px] rounded-[24px] bg-black px-[40px] py-[36px] lg:mt-[32px] lg:px-[24px] lg:py-[28px]">
            <p className="break-keep text-[26px] font-bold leading-[1.4] text-white lg:text-[19px]">
              한자리에서 20년을 운영한 매장에도 매월 새 손님은 들어옵니다
            </p>
            <p className="mt-[12px] break-keep text-[16px] leading-[1.7] text-[#C4C7CC] lg:text-[14px]">
              문제는 그 손님 대부분이 이름도 연락처도 남기지 않고 떠난다는
              것입니다. 워시펀은 이 손님을 회원으로 남기고 다시 부릅니다. 회원이
              쌓이는 만큼 다시 부를 수 있는 고객도 늘어납니다.
            </p>
          </div>
        </Reveal>

        <p className="mt-[20px] break-keep text-center text-[12px] leading-[1.6] text-secondaryDefault">
          * 워크인 → 회원 전환은 노터치 매장 방문 고객 중 회원으로 가입한
          비중입니다. 신규 고객 수는 상권과 매장 규모에 따라 편차가 있을 수
          있습니다.
        </p>

        {/* 제휴사 시공 실적 */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-[48px] flex max-w-[900px] items-center gap-[32px] rounded-[24px] border border-borderStrong bg-white px-[40px] py-[32px] lg:mt-[32px] lg:flex-col lg:items-start lg:gap-[16px] lg:px-[24px]">
            <div className="shrink-0 text-center lg:text-left">
              <p className="font-Poppins text-[44px] font-extrabold leading-none text-black lg:text-[34px]">
                800+
              </p>
              <p className="mt-[4px] text-[13px] font-semibold text-secondaryDefault">
                제휴사 시공 세차장
              </p>
            </div>
            <div>
              <p className="break-keep text-[20px] font-bold leading-[1.4] text-black lg:text-[17px]">
                800개가 넘는 세차장을 지어 온 브랜드와 함께합니다
              </p>
              <p className="mt-[8px] break-keep text-[15px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
                셀프 세차장 전문 시공사와 공식 제휴를 맺고 있습니다. 도면
                단계부터 설비 배치와 동선을 함께 검토하기 때문에, 지어 놓고 나서
                고치는 일이 줄어듭니다.
              </p>
            </div>
          </div>
        </Reveal>

        <p className="mt-[16px] break-keep text-center text-[12px] leading-[1.6] text-secondaryDefault">
          * 시공 실적은 제휴 시공사의 누적 시공 기준입니다.
        </p>
      </div>
    </section>
  );
}
