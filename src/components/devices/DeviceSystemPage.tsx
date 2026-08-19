import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import Banner from "@/components/HomeV2/Banner";
import Reveal from "@/components/common/Reveal";
import Tilt3D from "@/components/common/Tilt3D";
import IsoMap, { IsoSpot } from "@/components/common/IsoMap";

const SITE_URL = "https://www.lifedivergence.com";

export type DeviceItem = {
  name: string;
  role: string;
  specs: string[];
  img?: string;
  imgAlt?: string;
};

export type DeviceSystemContent = {
  slug: string;
  heroImg?: string;
  heroSpots?: IsoSpot[];
  breadcrumbName: string;
  eyebrow: string;
  h1: React.ReactNode;
  intro: string;
  stats: { value: string; label: string }[];
  statsFootnote?: string;
  devices: DeviceItem[];
  manageTitle: string;
  manageItems: { value: string; label: string; note: string }[];
  manageFootnote?: string;
  extraNote?: { title: string; body: string };
};

const TABS = [
  { href: "/devices/self-wash", label: "셀프 세차장" },
  { href: "/devices/auto-wash", label: "자동 세차장" },
];

export default function DeviceSystemPage({
  content,
}: {
  content: DeviceSystemContent;
}) {
  const url = `${SITE_URL}/devices/${content.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "설비",
        item: `${SITE_URL}/devices`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.breadcrumbName,
        item: url,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${content.breadcrumbName} 구성 설비`,
    itemListElement: content.devices.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.name,
      description: d.role,
    })),
  };

  return (
    <div className="font-Pretendard text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1680px] px-[120px] lg:px-[16px]">
          <div className="flex w-full flex-col items-center rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] px-[24px] py-[80px] lg:py-[48px]">
            <div className="flex rounded-full border border-black/10 bg-white p-[4px]">
              {TABS.map((t) => {
                const active = t.href.endsWith(content.slug);
                return (
                  <Link
                    key={t.href}
                    href={t.href}
                    className={
                      active
                        ? "rounded-full bg-main px-[20px] py-[8px] text-[15px] font-bold text-white"
                        : "rounded-full px-[20px] py-[8px] text-[15px] font-semibold text-secondaryDefault hover:text-black"
                    }
                  >
                    {t.label}
                  </Link>
                );
              })}
            </div>

            <p className="mt-[24px] text-[14px] font-semibold text-main">
              {content.eyebrow}
            </p>
            <h1 className="mt-[10px] break-keep text-center text-[48px] font-bold leading-[1.25] xl:text-[40px] lg:text-[28px]">
              {content.h1}
            </h1>
            <p className="mt-[16px] max-w-[640px] break-keep text-center text-[17px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
              {content.intro}
            </p>

            <div className="mt-[40px] grid grid-cols-3 gap-[12px] lg:mt-[28px] lg:w-full lg:grid-cols-1">
              {content.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex min-w-[180px] flex-col items-center gap-[4px] rounded-[20px] bg-white px-[24px] py-[20px] shadow-primary-shadow"
                >
                  <p className="font-Poppins text-[28px] font-extrabold leading-none text-main lg:text-[24px]">
                    {s.value}
                  </p>
                  <p className="text-[13px] font-semibold text-secondaryDefault">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-[14px] break-keep px-[8px] text-center text-[12px] leading-[1.6] text-secondaryDefault">
              {content.statsFootnote ??
                "* 파트너 매장 실측 데이터 기준 · 매장 환경에 따라 다를 수 있습니다"}
            </p>

            {content.heroImg && (
              <Reveal
                delay={0.15}
                className="mt-[40px] w-full max-w-[900px] lg:mt-[28px]"
              >
                <IsoMap
                  src={content.heroImg}
                  alt={`${content.breadcrumbName} 설비 구성도`}
                  width={1374}
                  height={768}
                  priority
                  spots={content.heroSpots ?? []}
                />
              </Reveal>
            )}
          </div>
        </section>

        {/* Devices */}
        <section className="mx-auto max-w-[1200px] px-[24px] py-[120px] lg:px-[16px] lg:py-[64px]">
          <Reveal>
            <p className="text-[15px] font-bold text-main">DEVICES</p>
            <h2 className="mt-[12px] break-keep text-[44px] font-bold leading-[1.25] lg:text-[26px]">
              {content.breadcrumbName} 구성 설비 {content.devices.length}종
            </h2>
            <p className="mt-[12px] break-keep text-[16px] text-secondaryDefault lg:text-[14px]">
              코인박스와 연동 기판은 워시펀이 직접 개발하고 유지보수합니다.
              설비와 키오스크를 움직이는 소프트웨어는 전부 워시펀이 만듭니다.
              필요한 설비만 골라 도입하세요.
            </p>
          </Reveal>

          <div className="mt-[48px] flex flex-col gap-[16px] lg:mt-[32px]">
            {content.devices.map((d, i) => (
              <Reveal key={d.name} delay={Math.min(i, 2) * 0.06}>
                <div className="grid grid-cols-[380px_1fr] items-center gap-[40px] rounded-[24px] border border-borderStrong p-[32px] lg:grid-cols-1 lg:gap-[20px] lg:p-[20px]">
                  <Tilt3D
                    className="relative h-[260px] w-full overflow-hidden rounded-[16px] bg-secondaryForeground lg:h-[200px]"
                    max={8}
                  >
                    {d.img ? (
                      <Image
                        src={d.img}
                        alt={d.imgAlt ?? d.name}
                        fill
                        className="object-contain p-[8px]"
                      />
                    ) : (
                      <div className="flex size-full flex-col items-center justify-center gap-[8px]">
                        <Image
                          src="/images/v2/svg/check-blue.svg"
                          alt=""
                          width={36}
                          height={36}
                          className="opacity-40"
                        />
                        <p className="text-[15px] font-semibold text-secondaryDefault">
                          {d.name}
                        </p>
                      </div>
                    )}
                  </Tilt3D>
                  <div>
                    <div className="flex items-center gap-[12px]">
                      <span className="flex size-[32px] items-center justify-center rounded-full bg-main font-Poppins text-[15px] font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-[26px] font-bold lg:text-[20px]">
                        {d.name}
                      </h3>
                    </div>
                    <p className="mt-[10px] break-keep text-[16px] font-medium leading-[1.55] text-secondaryDefault lg:text-[14px]">
                      {d.role}
                    </p>
                    <ul className="mt-[16px] flex flex-col gap-[8px]">
                      {d.specs.map((sp) => (
                        <li
                          key={sp}
                          className="flex items-start gap-[8px] text-[15px] leading-[1.5] lg:text-[14px]"
                        >
                          <Image
                            src="/images/v2/svg/check-blue.svg"
                            alt=""
                            width={18}
                            height={18}
                            className="mt-[2px] shrink-0"
                          />
                          <span className="break-keep">{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 고장 대응 */}
        <section className="mx-auto max-w-[1200px] px-[24px] pb-[40px] lg:px-[16px]">
          <Reveal>
            <div className="rounded-[24px] border border-borderStrong bg-white p-[32px] lg:p-[24px]">
              <p className="text-[15px] font-bold text-main">SUPPORT</p>
              <h2 className="mt-[10px] break-keep text-[28px] font-bold leading-[1.35] lg:text-[20px]">
                고장이 나면 이렇게 처리됩니다
              </h2>
              <div className="mt-[24px] grid grid-cols-2 gap-[16px] lg:grid-cols-1">
                <div className="rounded-[16px] bg-secondaryForeground p-[20px]">
                  <p className="text-[16px] font-bold text-black">
                    워시펀 공급 설비
                  </p>
                  <p className="mt-[8px] break-keep text-[14px] leading-[1.6] text-secondaryDefault">
                    구입 후 1년은 무상 수리입니다. 구입 후 3년까지는 유상 수리로
                    진행하되, 법에서 정한 경우에는 무상으로 처리합니다. 3년이
                    지난 뒤에는 서비스 제공이 어려울 수 있으며, 부품과 여건이
                    되는 범위에서 수리해 드립니다.
                  </p>
                </div>
                <div className="rounded-[16px] bg-secondaryForeground p-[20px]">
                  <p className="text-[16px] font-bold text-black">
                    소프트웨어만 올린 키오스크
                  </p>
                  <p className="mt-[8px] break-keep text-[14px] leading-[1.6] text-secondaryDefault">
                    매장 하드웨어를 그대로 두고 소프트웨어만 바꾼 경우입니다.
                    소프트웨어 문제는 워시펀이 패치로 처리하고, 하드웨어 고장은
                    기술 지원만 드리며 수리 책임은 매장에 있습니다. 워시펀에서
                    하드웨어를 구매하셨다면 워시펀 공급 설비와 같은 기준이
                    적용됩니다.
                  </p>
                </div>
                <div className="rounded-[16px] bg-secondaryForeground p-[20px]">
                  <p className="text-[16px] font-bold text-black">
                    세차기·기계실 설비
                  </p>
                  <p className="mt-[8px] break-keep text-[14px] leading-[1.6] text-secondaryDefault">
                    시공 파트너사가 책임지고 대응하며 사후 관리까지 맡습니다.
                  </p>
                </div>
                <div className="rounded-[16px] bg-secondaryForeground p-[20px]">
                  <p className="text-[16px] font-bold text-black">
                    멈춰 있는 시간 줄이기
                  </p>
                  <p className="mt-[8px] break-keep text-[14px] leading-[1.6] text-secondaryDefault">
                    장애가 감지되면 사장님 대시보드으로 바로 알리고, 고장 접수 시 여분
                    제품을 발송합니다. 급할 때는 볼트 체결만으로 사장님이 먼저
                    교체하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {content.extraNote && (
          <section className="mx-auto max-w-[1200px] px-[24px] pb-[40px] lg:px-[16px]">
            <Reveal>
              <div className="rounded-[24px] border border-borderStrong bg-secondaryForeground p-[32px] lg:p-[24px]">
                <h2 className="break-keep text-[24px] font-bold leading-[1.35] lg:text-[19px]">
                  {content.extraNote.title}
                </h2>
                <p className="mt-[10px] break-keep text-[16px] leading-[1.7] text-secondaryDefault lg:text-[14px]">
                  {content.extraNote.body}
                </p>
              </div>
            </Reveal>
          </section>
        )}

        {/* 원격 관리 밴드 */}
        <section className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
          <div className="rounded-[40px] bg-secondaryForeground px-[24px] py-[80px] lg:py-[48px]">
            <h2 className="break-keep text-center text-[36px] font-bold leading-[1.3] lg:text-[24px]">
              {content.manageTitle}
            </h2>
            <div
              className={`mx-auto mt-[48px] grid max-w-[1000px] gap-[32px] lg:mt-[32px] lg:grid-cols-1 lg:gap-[24px] ${
                content.manageItems.length === 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {content.manageItems.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center gap-[6px] text-center"
                >
                  <p className="font-Poppins text-[40px] font-extrabold leading-none text-main lg:text-[32px]">
                    {m.value}
                  </p>
                  <p className="text-[17px] font-bold lg:text-[15px]">
                    {m.label}
                  </p>
                  <p className="break-keep text-[13px] text-secondaryDefault">
                    {m.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-[32px] break-keep text-center text-[12px] leading-[1.6] text-secondaryDefault">
              {content.manageFootnote ??
                "* 제시된 수치는 일부 도입 매장의 실측 데이터 기준이며, 매장 환경에 따라 달라질 수 있습니다."}
            </p>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
