import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import IsoMap, { IsoSpot } from "@/components/common/IsoMap";

const SPOTS: IsoSpot[] = [
  {
    id: "coinbox",
    x: 23,
    y: 49,
    name: "코인박스 · 릴레이보드",
    desc: "베이마다 설치하는 결제·제어 단말입니다. QR 후불 결제와 포인트 결제를 받고, 사용한 시간만큼 초 단위로 요금이 부과됩니다.",
    zone: "셀프",
    href: "/devices/self-wash",
  },
  {
    id: "machine-room",
    x: 67.5,
    y: 35,
    name: "기계실 릴레이보드",
    desc: "기계실에서 베이별 고압펌프·폼 장치를 제어합니다. 고장이 나면 원격으로 차단해 2차 피해를 막습니다.",
    zone: "셀프",
    href: "/devices/self-wash",
  },
  {
    id: "mat",
    x: 60,
    y: 40,
    name: "매트세척기 기판",
    desc: "매트세척기를 앱으로 결제하는 설비로 바꿔 주는 연동 기판입니다. 사용 이력은 데이터로 쌓입니다.",
    zone: "공용",
    href: "/devices/self-wash",
  },
  {
    id: "vacuum",
    x: 43,
    y: 63.5,
    name: "청소기 기판",
    desc: "기존 청소기에 기판만 장착해 QR 결제와 원격 관리를 더합니다.",
    zone: "공용",
    href: "/devices/self-wash",
  },
  {
    id: "cash-kiosk",
    x: 55,
    y: 34,
    name: "포인트 충전 키오스크",
    desc: "현금 고객이 직접 포인트를 충전하는 무인 충전기입니다. 사장님이 현장에서 충전해 줄 일이 없어집니다.",
    zone: "공용",
    href: "/devices/self-wash",
  },
  {
    id: "anpr",
    x: 68,
    y: 64,
    name: "번호판 인식 카메라",
    desc: "입차 즉시 차량과 회원을 인식합니다. 멤버십 차량은 키오스크 조작 없이 세차가 시작됩니다.",
    zone: "자동",
    href: "/devices/auto-wash",
  },
  {
    id: "tunnel",
    x: 57.5,
    y: 67,
    name: "자동 세차기 연동",
    desc: "세차기 제조사와 상관없이 연동되는 키오스크와 PCB입니다. 코스 선택부터 세차까지 원스톱으로 이어집니다.",
    zone: "자동",
    href: "/devices/auto-wash",
  },
  {
    id: "network",
    x: 62,
    y: 13,
    name: "네트워크 시스템",
    desc: "매장 전용 AP·컨트롤러·라우터가 모든 설비를 하나의 관리망으로 묶습니다.",
    zone: "공용",
    href: "/devices/self-wash",
  },
];

export default function SystemMap() {
  return (
    <section className="mx-auto max-w-[1200px] px-[24px] py-[140px] lg:px-[16px] lg:py-[80px]">
      <Reveal>
        <p className="text-[15px] font-bold text-main">SYSTEM</p>
        <h2 className="mt-[12px] break-keep text-[48px] font-bold leading-[1.25] text-black lg:text-[28px]">
          매장을 하나의 시스템에 연결합니다
        </h2>
        <p className="mt-[12px] break-keep text-[17px] text-secondaryDefault lg:text-[14px]">
          셀프 세차장과 자동 세차장의 설비가 하나의 관리망으로 묶입니다. 매장
          곳곳에 무엇이 들어가는지 확인해 보세요.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-[48px] lg:mt-[32px]">
        <IsoMap
          src="/images/v2/png/iso-all-v3.png"
          alt="워시펀 셀프·자동 통합 세차장 설비 구성도"
          width={1374}
          height={768}
          spots={SPOTS}
        />
      </Reveal>

      <div className="mt-[24px] flex items-center justify-center gap-[12px] lg:flex-col">
        <Link
          href="/devices/self-wash"
          className="rounded-full bg-main px-[28px] py-[14px] text-[16px] font-bold text-white transition hover:brightness-110 lg:w-full lg:text-center"
        >
          셀프 설비 자세히 알아보기
        </Link>
        <Link
          href="/devices/auto-wash"
          className="rounded-full border border-borderStrong bg-white px-[28px] py-[14px] text-[16px] font-semibold text-black transition hover:bg-secondaryForeground lg:w-full lg:text-center"
        >
          자동 세차장 설비 알아보기
        </Link>
      </div>

      {/* 중앙 제어: 사장님 대시보드 */}
      <Reveal delay={0.1}>
        <div className="mt-[16px] flex items-center justify-between gap-[32px] overflow-hidden rounded-[24px] bg-black p-[40px] lg:flex-col lg:items-start lg:p-[24px]">
          <div>
            <p className="text-[13px] font-bold text-primary">CONTROL</p>
            <p className="mt-[8px] break-keep text-[26px] font-bold leading-[1.35] text-white lg:text-[20px]">
              이 모든 설비는, 시스템 하나로 통합 관리됩니다
            </p>
            <p className="mt-[8px] break-keep text-[15px] leading-[1.6] text-[#C4C7CC] lg:text-[13px]">
              매장에 나가지 않고도 매출 조회, 결제 내역 확인, 환불, 포인트 충전
              등 매장 관리부터 고객 민원 응대까지 휴대폰 하나로 처리할 수
              있습니다.
            </p>
          </div>
          <Link
            href="/service"
            className="shrink-0 rounded-full bg-white px-[28px] py-[14px] text-[16px] font-bold text-black transition hover:bg-primary hover:text-white lg:w-full lg:text-center"
          >
            사장님 대시보드 보기
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
