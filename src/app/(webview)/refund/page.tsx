const REFUND_POLICY_ITEMS = [
  '· **결제 후 7일 이내**에 취소가 가능하며, 결제 금액은 **전액 환불**됩니다.',
  '· **세차 이용 후**에는 **구독 취소가 불가**합니다.',
  '· 세차 이용 후 "WASH THRU" 취소 시 **다음 결제일 기준**으로 구독이 자동 종료됩니다.',
  '· 다음 결제일 "WASH THRU" 취소는 [내정보] > [이용권] > [상세 정보]에서 철회가 가능합니다.',
  '· **결제 후 7일 이내** 취소 및 환불 된 경우 "WASH THRU" 취소 철회가 불가능합니다.',
  '· 연간 구독은 이용률이 **50% 미만**인 경우에만 환불이 가능합니다.',
  '· 연간 구독의 환불 시 결제 금액에서 **(이용 횟수 x 현재의 정상 요금)과 (환불 수수료 10%)**를 제외하고 환불됩니다.',
];

const COMPANY_INFO_ITEMS = [
  { label: "상호명", value: "라이프다이버전스" },
  { label: "사업자등록번호", value: "797-43-01003 / 정보통신업 응용 소프트웨어 개발 및 공급업, 자동차 세차업" },
  { label: "주소", value: "울산광역시 중구 종가6길 21, 우정혁신타워 605호" },
  { label: "통신판매 신고번호", value: "2024-울산중구-0396" },
  { label: "개인정보 처리방침 및 기타문의사항", value: "contact@washfun.fun / 070-8806-8088" },
];

const Refund = () => {
  return (
    <div className="flex size-full justify-center border">
      <div className="flex w-[1200px] max-w-[90vw] flex-col gap-4 px-6 py-10">
        <h1 className="text-xl font-semibold">환불 정책</h1>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-black">
          {REFUND_POLICY_ITEMS.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold text-black">사업자 정보</h2>
          <dl className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-black">
            {COMPANY_INFO_ITEMS.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="font-semibold">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Refund;
