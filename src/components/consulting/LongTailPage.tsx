"use client";

import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import { track } from "@/lib/analytics";

const SITE_URL = "https://www.lifedivergence.com";

export type LongTailContent = {
  slug: string;
  breadcrumbName: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  sections: { h: string; body: string; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  footnote?: string;
  ctaLead: string;
  related: { href: string; label: string }[];
};

export default function LongTailPage({
  content,
}: {
  content: LongTailContent;
}) {
  const url = `${SITE_URL}/consulting/${content.slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "세차장 컨설팅",
        item: `${SITE_URL}/consulting`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.breadcrumbName,
        item: url,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.h1,
    description: content.intro,
    inLanguage: "ko-KR",
    url,
    primaryImageOfPage: `${SITE_URL}/images/png/cover-page.png`,
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: {
      "@type": "Service",
      name: content.breadcrumbName,
      provider: { "@id": `${SITE_URL}#organization` },
    },
  };

  return (
    <>
      <Header />
      <script
        id={`ld-faq-${content.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        id={`ld-breadcrumb-${content.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id={`ld-webpage-${content.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="box-border w-full px-[120px] font-Pretendard text-black lg:px-[16px]">
        <nav
          aria-label="브레드크럼"
          className="mt-[24px] text-[14px] text-secondaryDefault"
        >
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <span className="mx-[6px]">›</span>
          <Link href="/consulting" className="hover:underline">
            세차장 컨설팅
          </Link>
          <span className="mx-[6px]">›</span>
          <span className="text-black">{content.breadcrumbName}</span>
        </nav>

        <section className="mx-auto max-w-[1200px] pt-[60px] lg:pt-[24px]">
          <div className="flex flex-col items-center text-center">
            <p className="text-[16px] font-medium text-main lg:text-[14px]">
              {content.eyebrow}
            </p>
            <h1 className="mt-[12px] text-balance text-[52px] font-bold leading-[1.18] lg:text-[24px] lg:leading-[1.3]">
              {content.h1}
            </h1>
            <p className="mt-[20px] max-w-[820px] text-balance text-[18px] leading-[28px] text-secondaryDefault lg:text-[14px] lg:leading-[22px]">
              {content.intro}
            </p>
            <div className="mt-[24px] flex items-center gap-[12px] lg:flex-col">
              <Link
                href="/contact"
                onClick={() =>
                  track("lead_cta_click", {
                    source: `longtail_${content.slug}_hero`,
                  })
                }
                className="rounded-[999px] bg-main px-[28px] py-[14px] text-[16px] font-semibold text-white"
                aria-label={`${content.breadcrumbName} 무료 상담 신청`}
              >
                {content.ctaLead}
              </Link>
              <a
                href="tel:+82-70-8806-8088"
                onClick={() =>
                  track("lead_cta_click", {
                    source: `longtail_${content.slug}_tel`,
                  })
                }
                className="rounded-[999px] border border-borderStrong px-[24px] py-[14px] text-[16px] font-semibold text-black"
                aria-label="전화 상담 070-8806-8088"
              >
                ☎ 070-8806-8088
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[80px] max-w-[1200px] lg:mt-[40px]">
          <ul className="grid grid-cols-3 gap-[12px] lg:grid-cols-1">
            {content.highlights.map((h) => (
              <li
                key={h}
                className="rounded-[20px] border border-borderStrong bg-secondaryForeground p-[20px] text-[15px] leading-[24px] text-black lg:text-[14px]"
              >
                ✓ {h}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-[100px] flex max-w-[1200px] flex-col gap-[40px] lg:mt-[60px]">
          {content.sections.map((s) => (
            <article
              key={s.h}
              className="rounded-[24px] border border-borderStrong p-[32px] lg:p-[20px]"
            >
              <h2 className="text-[30px] font-semibold leading-[40px] lg:text-[22px] lg:leading-[30px]">
                {s.h}
              </h2>
              <p className="mt-[16px] text-[16px] leading-[26px] text-secondaryDefault lg:text-[14px]">
                {s.body}
              </p>
              {s.bullets && (
                <ul className="mt-[16px] flex flex-col gap-[8px]">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-[8px] text-[16px] leading-[24px] text-black lg:text-[14px]"
                    >
                      <span className="mt-[8px] inline-block size-[6px] shrink-0 rounded-full bg-main" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href="/contact"
                onClick={() =>
                  track("lead_cta_click", {
                    source: `longtail_${content.slug}_section`,
                  })
                }
                className="mt-[24px] inline-flex w-fit items-center gap-[6px] text-[14px] font-semibold text-main"
              >
                관련 상담 신청 →
              </Link>
            </article>
          ))}
          {content.footnote && (
            <p className="break-keep text-[12px] leading-[1.6] text-secondaryDefault">
              {content.footnote}
            </p>
          )}
        </section>

        <section className="mx-auto mt-[120px] max-w-[1000px] lg:mt-[60px]">
          <h2 className="text-center text-[36px] font-bold lg:text-[24px]">
            자주 묻는 질문
          </h2>
          <div className="mt-[32px] flex flex-col gap-[12px]">
            {content.faq.map((f) => (
              <details
                key={f.q}
                className="rounded-[16px] border border-borderStrong p-[20px]"
              >
                <summary className="cursor-pointer text-[18px] font-semibold lg:text-[16px]">
                  {f.q}
                </summary>
                <p className="mt-[12px] text-[16px] leading-[26px] text-secondaryDefault lg:text-[14px]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-[120px] max-w-[1200px] lg:mt-[60px]">
          <h2 className="text-[22px] font-semibold lg:text-[18px]">
            함께 보면 좋은 컨설팅
          </h2>
          <ul className="mt-[16px] grid grid-cols-3 gap-[12px] lg:grid-cols-1">
            {content.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block rounded-[16px] border border-borderStrong p-[20px] text-[15px] font-medium text-black hover:border-main"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-[120px] max-w-[1200px] lg:mt-[60px]">
          <div className="rounded-[24px] bg-black p-[48px] text-center lg:p-[24px]">
            <h2 className="text-[36px] font-bold text-white lg:text-[24px]">
              지금 상담받으면 가장 빠르게 시작할 수 있습니다.
            </h2>
            <p className="mt-[12px] text-[16px] text-white/70 lg:text-[14px]">
              1영업일 내 워시펀 컨설턴트가 회신드립니다. 무료.
            </p>
            <div className="mt-[28px] flex items-center justify-center gap-[12px] lg:flex-col">
              <Link
                href="/contact"
                onClick={() =>
                  track("lead_cta_click", {
                    source: `longtail_${content.slug}_bottom`,
                  })
                }
                className="rounded-[999px] bg-white px-[28px] py-[14px] text-[16px] font-semibold text-black"
              >
                무료 상담 신청
              </Link>
              <a
                href="mailto:contact@washfun.fun"
                onClick={() =>
                  track("lead_cta_click", {
                    source: `longtail_${content.slug}_email`,
                  })
                }
                className="rounded-[999px] border border-white/40 px-[24px] py-[14px] text-[16px] font-semibold text-white"
              >
                contact@washfun.fun
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="box-border w-full px-[120px] lg:px-[16px]">
        <Footer />
      </div>
    </>
  );
}
