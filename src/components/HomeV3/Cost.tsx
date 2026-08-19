import Link from "next/link";
import Reveal from "@/components/common/Reveal";

export default function Cost() {
  return (
    <section className="mx-auto max-w-[1200px] px-[24px] py-[80px] lg:px-[16px] lg:py-[48px]">
      <Reveal>
        <div className="flex items-center justify-between gap-[24px] rounded-[24px] border border-borderStrong bg-white p-[40px] shadow-primary-shadow lg:flex-col lg:items-start lg:p-[24px]">
          <div>
            <p className="break-keep text-[28px] font-bold leading-[1.35] text-black lg:text-[20px]">
              도입 비용은 매장 상황마다 다릅니다
            </p>
            <p className="mt-[8px] break-keep text-[16px] text-secondaryDefault lg:text-[14px]">
              청소기와 매트세척기, 자동 세차기 같은 기존 설비는 연동해서 그대로
              씁니다. 베이 코인박스는 워시펀 IoT 코인박스로 교체하고, 포인트
              충전 키오스크를 함께 두어 기존 RF카드에 남은 잔액을 워시펀
              포인트로 옮겨 드립니다. 견적은 무료 상담으로 안내드립니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-main px-[32px] py-[16px] text-[17px] font-bold text-white transition hover:brightness-110 lg:w-full lg:text-center"
          >
            도입 문의하기
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
