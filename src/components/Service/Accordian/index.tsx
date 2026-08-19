const QNA = [
  {
    id: 1,
    title: "기존 회원 카드 잔액은 어떻게 되나요?",
    answer:
      "매장에 설치하는 포인트 충전 키오스크에서 RF카드 잔액을 워시펀 포인트로 옮깁니다. 사장님 대시보드에서 잔액을 확인해 해당 고객의 계정에 직접 충전해 드릴 수도 있습니다.",
  },
  {
    id: 2,
    title: "설비 설치는 얼마나 시간이 소요되나요?",
    answer:
      "세차장 규모에 따라 다르지만 보통 1~2일이면 끝납니다. 자동시작 시스템까지 설치하면 최대 3일까지 소요될 수 있습니다.",
  },
  {
    id: 3,
    title: "설비 수리는 어떻게 진행되나요?",
    answer:
      "세차기·기계실 펌프 등 시공 설비는 시공 파트너사가 책임지고 대응하며 사후 관리까지 맡습니다. 워시펀이 공급한 코인박스와 청소기, 자동시작 시스템은 구입 후 1년간 무상 수리입니다. 구입 후 3년까지는 유상 수리로 진행하되, 법에서 정한 경우에는 무상으로 처리합니다. 3년이 지난 뒤에는 서비스 제공이 어려울 수 있으며, 부품과 여건이 되는 범위에서 수리해 드립니다. 고장 접수 시 여분 제품을 바로 발송하고, 현장 확인이 필요하면 워시펀이 직접 방문합니다. 급하실 때는 볼트 체결만으로 사장님이 먼저 교체하실 수도 있습니다. 매장 기존 키오스크에 워시펀 소프트웨어만 올린 경우에는, 소프트웨어 문제는 워시펀이 패치로 처리하고 하드웨어 고장은 기술 지원만 드립니다. 수리 책임은 매장에 있습니다. 워시펀에서 키오스크 하드웨어를 구매하셨다면 워시펀 공급 설비와 같은 기준이 적용됩니다.",
  },
  {
    id: 4,
    title: "도입 과정은 어떻게 되나요?",
    answer:
      "파트너 계약, 현장 실사, 시스템 계정 생성, 설비 설치 순으로 진행됩니다. 설치는 계약 순으로 진행되므로 계약에서 설치까지 걸리는 기간은 앞선 건에 따라 달라질 수 있습니다.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QNA.map((q) => ({
    "@type": "Question",
    name: q.title,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
};

/**
 * 답변은 접혀 있어도 DOM에 남는다. JS를 실행하지 않는 크롤러도 본문을 읽는다.
 * 여닫는 동작은 네이티브 details 요소에 맡긴다.
 */
const Accordian = () => {
  return (
    <div className="w-full pb-10 pt-52 text-black">
      <script
        id="ld-accordian-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-20 flex items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-bold md:text-2xl">
          세차장 시스템 도입 자주 묻는 질문
        </h2>
      </div>

      <div className="mx-auto flex w-3/4 flex-col gap-[12px] md:w-full md:px-4">
        {QNA.map((qna) => (
          <details
            key={qna.id}
            className="group rounded-[16px] border border-borderStrong px-[24px] py-[20px] md:px-[16px]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-xl font-bold marker:content-none md:text-base">
              <span className="break-keep">{qna.title}</span>
              <span
                aria-hidden
                className="shrink-0 text-[22px] font-normal text-secondaryDefault transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-[14px] break-keep text-[16px] leading-[26px] text-secondaryDefault md:text-[14px]">
              {qna.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
