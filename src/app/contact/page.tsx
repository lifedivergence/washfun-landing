import Header from "@/components/common/Header";
import Footer from "@/components/HomeV2/Footer";
import Accordian from "@/components/Service/Accordian";
import Contact from "@/components/Service/Contact";

const SITE_URL = "https://www.lifedivergence.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "도입 문의",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
      <section
        className="mx-auto w-full max-w-[1200px] px-[24px] pt-[80px] text-center lg:pt-[40px]"
        aria-labelledby="contact-intro"
      >
        <p className="text-[16px] font-medium text-secondaryDefault">
          세차장 컨설팅 · 도입 문의
        </p>
        <h1
          id="contact-intro"
          className="mt-[8px] text-balance text-[40px] font-bold leading-[1.25] lg:text-[24px] lg:leading-[1.3]"
        >
          세차장 창업·리모델링·시스템 도입 무료 상담
        </h1>
        <p className="mx-auto mt-[16px] max-w-[680px] text-balance text-[16px] leading-[26px] text-secondaryDefault lg:text-[14px] lg:leading-[22px]">
          이름과 연락처만 남겨주시면 1영업일 내 워시펀 컨설턴트가 연락드립니다.
          <br className="md:hidden" />
          전화 070-8806-8088 또는 contact@washfun.fun 으로 직접 연락도
          가능합니다.
        </p>
      </section>
      <Contact />
      <Accordian />
      </main>
      <div className="box-border w-full px-[120px] lg:px-[16px]">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
