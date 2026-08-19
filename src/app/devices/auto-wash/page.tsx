import type { Metadata } from "next";
import DeviceSystemPage, {
  DeviceSystemContent,
} from "@/components/devices/DeviceSystemPage";
import { IsoSpot } from "@/components/common/IsoMap";

const heroSpots: IsoSpot[] = [
  {
    id: "anpr",
    x: 41.8,
    y: 35.2,
    name: "번호판 인식 카메라",
    zone: "자동",
    desc: "입차 즉시 차량·회원을 인식합니다. 멤버십 차량은 키오스크 조작 없이 세차가 시작됩니다.",
  },
  {
    id: "kiosk",
    x: 50,
    y: 37.8,
    name: "키오스크",
    zone: "자동",
    desc: "코스 선택 → 결제 → 세차 시작까지 원스톱. 전화번호 간편 가입을 지원합니다.",
  },
  {
    id: "cash",
    x: 64.4,
    y: 45,
    name: "포인트 충전 키오스크",
    zone: "공용",
    desc: "진입용 키오스크와 별도로 설치됩니다. 현금 충전과 기존 RF카드 잔액 이전을 처리합니다.",
  },
  {
    id: "mat",
    x: 72.4,
    y: 51.4,
    name: "매트세척기 기판",
    zone: "공용",
    desc: "매트세척기를 앱으로 결제하는 설비로 바꿔 주는 연동 기판입니다.",
  },
  {
    id: "vacuum",
    x: 60,
    y: 65.8,
    name: "청소기 기판",
    zone: "공용",
    desc: "기존 청소기에 기판만 장착해 QR 결제와 원격 관리를 더합니다.",
  },
  {
    id: "net",
    x: 79.6,
    y: 15.6,
    name: "네트워크 시스템",
    zone: "공용",
    desc: "매장 전용 AP·컨트롤러·라우터. 카메라·키오스크·세차기를 하나로 묶습니다.",
  },
];
import { buildOg, buildTwitter } from "@/lib/seo";

const title = "자동 세차장 설비 6종";
const description =
  "노터치·브러시 자동 세차장 무인 시스템 구성 설비 6종: 세차기 연동 키오스크, 번호판 인식(ANPR) 카메라, 청소기·매트세척기 기판, 포인트 충전 키오스크, 네트워크 시스템. 입차만 하면 시작되는 멤버십 자동 세차장을 만드세요.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "노터치 세차장",
    "노터치 자동 세차",
    "자동 세차장 시스템",
    "세차장 번호판 인식",
    "ANPR 카메라",
    "세차장 키오스크",
    "자동 세차 멤버십",
    "무인 자동 세차장",
    "자동 세차장 창업 설비",
    "드라이브 스루 세차",
    "브러시 세차기",
    "주유소 세차기",
    "자동세차기 관리 시스템",
  ],
  alternates: { canonical: "/devices/auto-wash" },
  openGraph: buildOg({
    title,
    description,
    path: "/devices/auto-wash",
    alt: "워시펀 자동 세차장 시스템",
  }),
  twitter: buildTwitter({ title, description }),
};

const content: DeviceSystemContent = {
  heroImg: "/images/v2/png/iso-notouch-v2.png",
  heroSpots,
  slug: "auto-wash",
  breadcrumbName: "자동 세차장",
  eyebrow: "노터치·브러시 자동 세차 무인 시스템",
  h1: (
    <>
      입차하면 시작되는
      <br />
      자동 세차장
    </>
  ),
  intro:
    "번호판 인식 카메라가 차량을 알아보고, 멤버십 차량은 키오스크 조작 없이 바로 세차가 시작됩니다. 처음 온 워크인 고객도 키오스크에서 전화번호 하나로 회원이 됩니다.",
  stats: [
    { value: "6종", label: "구성 설비" },
    { value: "78%", label: "워크인 → 회원 전환" },
    { value: "341명", label: "월평균 회원 증가" },
  ],
  statsFootnote:
    "* 워크인 → 회원 전환은 노터치 매장 방문 고객 중 회원으로 가입한 비중입니다. 두 수치 모두 워시펀 파트너 매장 실측 데이터(2024.09 ~ 2026.08 전체 기간) 기준이며, 매장 환경에 따라 다를 수 있습니다. 번호판 인식 카메라와 네트워크 장비는 납품받아 연동합니다.",
  devices: [
    {
      name: "키오스크",
      role: "세차기와 직접 연동되는 결제·주문 키오스크입니다. 제조사와 상관없이 연결할 수 있습니다.",
      specs: [
        "코스 선택 → 결제 → 세차 시작까지 원스톱",
        "전화번호만으로 간편하게 가입해 워크인 고객 회원 전환율이 78%입니다",
        "카드·앱·포인트 결제 지원",
        "워시펀이 직접 개발한 연동 PCB와 소프트웨어로 국산·수입 모든 세차기 연동 가능",
        "기존 키오스크에 소프트웨어만 올려 그대로 사용 가능합니다. 다만 세차기와 매장 구성에 따라 설치가 어려운 경우가 있습니다",
        "설치가 어렵거나 키오스크가 없으면 워시펀에서 제공하는 키오스크 하드웨어를 구매하실 수 있습니다",
      ],
      img: "/images/v2/webp/device-kiosk.webp",
      imgAlt:
        "워시펀 자동 세차 키오스크 화면. 왼쪽은 QR 간편결제와 코스 선택, 오른쪽은 결제 완료 화면",
    },
    {
      name: "번호판 인식 카메라",
      role: "입차하는 차량을 즉시 인식하는 ANPR 카메라로, 노터치 세차장 운영의 핵심 설비입니다.",
      specs: [
        "입차 즉시 차량·회원 자동 조회",
        "멤버십 차량은 키오스크 조작 없이 세차 자동 시작",
        "인식 실패 시 키오스크 입력으로 보완해 방문 이력을 남깁니다",
        "중복 등록 방지·차량 오류 알림",
        "KC 인증 완료",
      ],
      img: "/images/v2/png/device3.png",
      imgAlt: "워시펀 번호판 인식 ANPR 카메라",
    },
    {
      name: "청소기 기판",
      role: "기존 청소기에 장착해 QR 결제와 원격 관리를 더하는 기판입니다.",
      specs: [
        "기존 청소기는 그대로 두고 기판만 교체합니다",
        "QR 결제·포인트 결제 지원",
        "직원 모드: 매장 청소 시 무제한 사용",
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
      role: "현금 고객이 포인트를 충전하고, 기존 RF카드 고객이 잔액을 옮기는 무인 단말입니다. 진입용 키오스크와 별도로 설치됩니다.",
      specs: [
        "현금 투입 → 포인트 자동 충전",
        "RF카드 리더가 있어 고객이 직접 카드 잔액을 워시펀 포인트로 옮깁니다",
        "충전 내역이 전산으로 남아 장부를 따로 정리하지 않아도 됩니다",
        "사장님 대시보드에서 원격 충전·내역 확인",
        "기존 키오스크가 있으면 소프트웨어만 교체해 그대로 사용 가능합니다",
        "호환되지 않거나 없으면 워시펀에서 제공하는 키오스크 하드웨어를 구매하실 수 있습니다",
      ],
      img: "/images/v2/webp/device-cash.webp",
      imgAlt: "워시펀 포인트 충전 키오스크 화면",
    },
    {
      name: "네트워크 시스템",
      role: "매장 전용 AP와 컨트롤러, 라우터로 카메라와 키오스크, 세차기를 하나로 묶습니다.",
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
  extraNote: {
    title: "주유소 부설 세차기에도 들어갑니다",
    body: "세차기를 교체하지 않고 결제·구독 시스템만 연동합니다. 주유 고객을 세차 구독으로 묶으면 유류 판매와 별개로 매달 들어오는 수입이 생깁니다. 노터치와 브러시 방식 모두, 제조사와 무관하게 적용됩니다.",
  },
  manageTitle: "멤버십 세차장은 데이터로 운영됩니다",
  manageFootnote:
    "* 제시된 수치는 특정 도입 매장의 실측 데이터 기준이며, 매장 환경에 따라 달라질 수 있습니다.",
  manageItems: [
    {
      value: "3.8회",
      label: "구독 고객 월 평균 방문",
      note: "구독하지 않은 고객은 1.1회이고, 그중 3개월 안에 다시 오는 비율은 30%입니다",
    },
    {
      value: "13,034원",
      label: "방문당 평균 결제",
      note: "가장 많이 선택하는 코스는 14,000원이고, 더 저렴한 코스를 고르는 고객이 있어 평균은 그보다 낮습니다",
    },
  ],
};

export default function Page() {
  return <DeviceSystemPage content={content} />;
}
