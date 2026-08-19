import type { Metadata } from "next";
import DeviceSystemPage, {
  DeviceSystemContent,
} from "@/components/devices/DeviceSystemPage";
import { IsoSpot } from "@/components/common/IsoMap";

const heroSpots: IsoSpot[] = [
  {
    id: "coinbox",
    x: 22.6,
    y: 48.8,
    name: "코인박스",
    zone: "셀프",
    desc: "베이마다 설치되는 결제·제어 단말. QR을 스캔해 후불로 결제하고 사용한 만큼 초 단위로 과금됩니다.",
  },
  {
    id: "machine",
    x: 68,
    y: 35,
    name: "기계실 릴레이보드",
    zone: "셀프",
    desc: "기계실에서 베이별 고압펌프·폼 장치를 제어합니다. 고장이 나면 원격으로 차단할 수 있습니다.",
  },
  {
    id: "mat",
    x: 59.7,
    y: 39.7,
    name: "매트세척기 기판",
    zone: "공용",
    desc: "매트세척기를 앱으로 결제하는 설비로 바꿔 주는 연동 기판입니다.",
  },
  {
    id: "cash",
    x: 55,
    y: 34.5,
    name: "포인트 충전 키오스크",
    zone: "공용",
    desc: "현금 투입 → 포인트 자동 충전. 기존 RF카드 잔액도 여기서 워시펀 포인트로 옮깁니다.",
  },
  {
    id: "vacuum",
    x: 42.6,
    y: 62.5,
    name: "청소기 기판",
    zone: "공용",
    desc: "기존 청소기에 기판만 장착해 QR 결제와 원격 관리를 더합니다.",
  },
  {
    id: "net",
    x: 62.2,
    y: 13,
    name: "네트워크 시스템",
    zone: "공용",
    desc: "매장 전용 AP·컨트롤러·라우터. 모든 설비를 하나의 관리망으로 묶습니다.",
  },
];

const title = "셀프 세차장 설비 6종";
const description =
  "셀프 세차장 무인 시스템 구성 설비 6종: IoT 코인박스, 기계실 릴레이보드, 청소기·매트세척기 기판, 포인트 충전 키오스크, 네트워크 시스템. 청소기와 매트세척기는 기판만 달아 그대로 쓰면서 후불제 셀프 세차장으로 전환하세요.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "셀프 세차장 시스템",
    "셀프 세차장 설비",
    "세차장 코인박스",
    "IoT 코인박스",
    "세차장 릴레이보드",
    "세차장 키오스크",
    "세차장 무인 시스템",
    "셀프 세차장 창업 설비",
    "세차장 청소기 결제",
    "후불제 셀프 세차",
  ],
  alternates: { canonical: "/devices/self-wash" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/devices/self-wash",
    title,
    description,
    images: [
      {
        url: "/images/png/cover-page.png",
        width: 1200,
        height: 630,
        alt: "워시펀 셀프 세차장 시스템",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
};

const content: DeviceSystemContent = {
  heroImg: "/images/v2/png/iso-self-v2.png",
  heroSpots,
  slug: "self-wash",
  breadcrumbName: "셀프 세차장",
  eyebrow: "셀프 세차장 무인 시스템",
  h1: (
    <>
      설비 6종으로 완성되는
      <br />
      후불제 셀프 세차장
    </>
  ),
  intro:
    "청소기와 매트세척기 같은 기존 설비는 기판만 더해 그대로 쓰고, 결제는 QR 후불제로 바꿉니다. 기존 RF카드에 남은 잔액은 키오스크에서 워시펀 포인트로 옮깁니다. 핵심 설비를 직접 개발했기 때문에 유지보수도 워시펀이 맡습니다.",
  stats: [
    { value: "6종", label: "구성 설비" },
    { value: "+14.1%", label: "객단가 향상" },
    { value: "1초", label: "단위 사용량 과금" },
  ],
  statsFootnote:
    "* 객단가 +14.1%는 셀프 세차 실측 이용 기록 14,541건 가운데 RF카드 요금으로 환산 비교가 가능한 2,696건을 같은 조건으로 대조한 값입니다. 매장 환경에 따라 다를 수 있습니다. 네트워크 장비는 납품받아 연동합니다.",
  devices: [
    {
      name: "코인박스",
      role: "베이마다 설치하는 결제·제어 단말입니다. 고객 결제를 받고, 기계실 릴레이보드와 연동해 해당 베이의 고압펌프와 폼 장치를 켜고 끕니다.",
      specs: [
        "QR을 스캔해 후불로 결제하고, 사용한 만큼 초 단위로 과금됩니다",
        "현금 고객은 포인트 충전 키오스크에서 충전한 포인트로 결제합니다",
        "고압수·폼건 등 코스별 사용량 실시간 기록",
        "요금 변경 시 설비·앱 동시 원격 반영 (초 단위 20원 → 22원처럼 미세 조정)",
        "KC 인증 완료",
      ],
      img: "/images/v2/webp/device-coinbox.webp",
      imgAlt: "워시펀 셀프 세차장 IoT 코인박스 조작부",
    },
    {
      name: "기계실 릴레이보드",
      role: "코인박스와 연동되어 기계실에서 실제 설비 전원을 제어하는 보드입니다.",
      specs: [
        "베이별 고압펌프·폼 공급 장치 개별 제어",
        "설비가 고장 나면 원격으로 사용을 막아 2차 피해를 예방합니다",
        "강제 작동 버튼으로 현장 수동 조작 지원",
        "KC 인증 · 220VAC 산업 환경 설계",
      ],
      img: "/images/v2/webp/device-relay.webp",
      imgAlt: "워시펀 기계실 릴레이보드 Machinary_Room V3.0.0",
    },
    {
      name: "청소기 기판",
      role: "기존 청소기에 장착해 QR 결제와 원격 관리를 더하는 기판입니다.",
      specs: [
        "기존 청소기는 그대로 두고 기판만 교체합니다",
        "QR 결제·포인트 결제 지원",
        "직원 모드: 매장 청소 시 무제한 사용",
        "사용량 데이터 자동 수집",
        "KC 인증 완료",
      ],
      img: "/images/v2/webp/device-vac.webp",
      imgAlt: "워시펀 청소기 연동 기판",
    },
    {
      name: "매트세척기 기판",
      role: "매트세척기를 앱으로 결제하는 설비로 바꿔 주는 연동 기판입니다.",
      specs: [
        "QR 결제·포인트 결제 지원",
        "설비 상태 원격 모니터링",
        "사용 이력을 데이터로 남겨 수요를 파악합니다",
        "KC 인증 완료",
      ],
      img: "/images/v2/webp/device-mat.webp",
      imgAlt: "워시펀 매트세척기 연동 기판",
    },
    {
      name: "포인트 충전 키오스크",
      role: "현금 고객을 위한 무인 포인트 충전기이자, 기존 RF카드 고객이 잔액을 옮기는 창구입니다. 현장 충전 업무가 사라집니다.",
      specs: [
        "현금 투입 → 포인트 자동 충전",
        "RF카드 리더가 있어 고객이 직접 카드 잔액을 워시펀 포인트로 옮깁니다",
        "충전 내역이 전산으로 남아 장부를 따로 정리하지 않아도 됩니다",
        "사장님 대시보드에서 원격 충전·내역 확인",
        "해외에서도 계좌이체 충전 응대 가능",
        "기존 키오스크가 있으면 소프트웨어만 교체해 그대로 사용 가능합니다",
        "호환되지 않거나 없으면 워시펀에서 제공하는 키오스크 하드웨어를 구매하실 수 있습니다",
      ],
      img: "/images/v2/webp/device-cash.webp",
      imgAlt: "워시펀 포인트 충전 키오스크 화면",
    },
    {
      name: "네트워크 시스템",
      role: "매장 전용 AP와 컨트롤러, 라우터로 모든 설비를 하나의 관리망에 묶습니다.",
      specs: [
        "산업용 AP·라우터로 모든 설비 실시간 연결",
        "장애 발생 시 자동 감지·알림",
        "워시펀이 직접 구축·유지보수",
        "KC 인증 완료",
      ],
      img: "/images/v2/webp/device-net.webp",
      imgAlt:
        "세차장 네트워크 장비. TP-Link 실외형 AP, Omada 컨트롤러, VPN 게이트웨이",
    },
  ],
  manageTitle: "설치가 끝나면, 원격으로 관리 및 모니터링이 가능해집니다",
  manageItems: [
    {
      value: "24시간",
      label: "원격 제어",
      note: "요금 변경·포인트 충전·고장 설비 사용 중지 어디서나",
    },
    {
      value: "전 매장",
      label: "이용 데이터 통합",
      note: "전 매장의 이용 기록이 사장님 대시보드 한 곳에 모여, 매장별 매출과 설비 상태를 한 화면에서 비교합니다",
    },
  ],
};

export default function Page() {
  return <DeviceSystemPage content={content} />;
}
