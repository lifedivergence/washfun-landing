import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import FloatingCTA from "@/components/common/FloatingCTA";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
});

const SITE_URL = "https://www.lifedivergence.com";
const SITE_NAME = "워시펀 WashFun";
const DEFAULT_TITLE =
  "워시펀 WashFun | 세차장 결제 솔루션 혁신";
const DEFAULT_DESCRIPTION =
  "세차장 창업, 리모델링, 무인 시스템 도입까지 — 워시펀이 함께합니다. RF카드를 대체하는 후불제 셀프 세차, 구독제 자동 세차, 점주용 관리 시스템과 운영 컨설팅을 무료 상담받아 보세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | 워시펀 WashFun",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "워시펀",
    "washfun",
    "세차장 창업",
    "세차장 개업",
    "세차장 창업비용",
    "세차장 컨설팅",
    "세차장 리모델링",
    "세차장 시스템",
    "세차장 무인 시스템",
    "세차장 운영",
    "셀프세차장 창업",
    "자동세차장 창업",
    "셀프 세차",
    "후불제 셀프세차",
    "노터치 자동세차",
    "구독제 세차",
    "세차 구독",
    "세차장 매매",
    "세차장 임대",
    "세차장 키오스크",
    "RF카드 대체",
    "세차장 디지털 전환",
    "세차장 매출 증대",
    "세차장 솔루션",
  ],
  authors: [{ name: "라이프다이버전스", url: SITE_URL }],
  creator: "라이프다이버전스",
  publisher: "라이프다이버전스",
  category: "Business",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/png/cover-page.png",
        width: 1200,
        height: 630,
        alt: "워시펀 세차장 솔루션 대시보드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/png/cover-page.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "rFOt_n-IDumlpzicrWEfpl9ctFdZW62a2IkNIanTBaM",
    other: {
      "naver-site-verification":
        "d983fee3f0b7db68efd9a65aa2ebd48490c11d92",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "워시펀 WashFun",
  legalName: "주식회사 라이프다이버전스",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/HorizontalType.svg`,
  description: DEFAULT_DESCRIPTION,
  email: "contact@washfun.fun",
  telephone: "+82-70-8806-8088",
  address: {
    "@type": "PostalAddress",
    streetAddress: "종가6길 21, 우정혁신타워 605호",
    addressLocality: "울산광역시 중구",
    addressCountry: "KR",
  },
  sameAs: [
    "https://www.hankookilbo.com/News/Read/A2024110614530001135",
    "https://www.news1.kr/industry/general-industry/5565629",
    "http://www.interviewm.com/news/articleView.html?idxno=4634",
  ],
  areaServed: "KR",
  knowsAbout: [
    "세차장 창업 컨설팅",
    "세차장 리모델링",
    "세차장 시스템 도입",
    "셀프 세차 후불제",
    "자동 세차 구독제",
    "세차장 키오스크",
    "세차장 운영 솔루션",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ko-KR",
  publisher: {
    "@type": "Organization",
    name: "주식회사 라이프다이버전스",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "워시펀 세차장 컨설팅",
  url: `${SITE_URL}/consulting`,
  image: `${SITE_URL}/images/png/cover-page.png`,
  description:
    "세차장 창업, 리모델링, 무인 시스템 도입, 운영 효율화까지 워시펀이 지원하는 세차장 종합 컨설팅 서비스.",
  provider: {
    "@type": "Organization",
    name: "주식회사 라이프다이버전스",
  },
  areaServed: "KR",
  telephone: "+82-70-8806-8088",
  email: "contact@washfun.fun",
  priceRange: "₩₩",
  serviceType: [
    "세차장 창업 컨설팅",
    "세차장 리모델링 컨설팅",
    "세차장 시스템 도입",
    "세차장 운영 컨설팅",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#localbusiness`,
  name: "워시펀 WashFun",
  legalName: "주식회사 라이프다이버전스",
  url: SITE_URL,
  image: `${SITE_URL}/images/png/cover-page.png`,
  logo: `${SITE_URL}/images/logo/HorizontalType.svg`,
  description: DEFAULT_DESCRIPTION,
  telephone: "+82-70-8806-8088",
  email: "contact@washfun.fun",
  priceRange: "₩₩",
  address: {
    "@type": "PostalAddress",
    streetAddress: "종가6길 21, 우정혁신타워 605호",
    addressLocality: "울산광역시 중구",
    addressRegion: "울산광역시",
    postalCode: "44429",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.5683,
    longitude: 129.3505,
  },
  areaServed: { "@type": "Country", name: "대한민국" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/wash.fun_official/",
    "https://www.hankookilbo.com/News/Read/A2024110614530001135",
    "https://www.news1.kr/industry/general-industry/5565629",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" className={`${pretendard.variable}`}>
      <head>
        <link rel="shortcut icon" href="/icon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className={pretendard.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
