"use client";

import { Totals } from "@/lib/stats";
import { useTotals } from "./useTotals";

/**
 * 히어로 리드 문장. 누적 세차 건수는 StatBand와 같은 값을 공유한다.
 * 값을 못 받아 오면 숫자만 빼고 문장은 그대로 성립시킨다.
 */
export default function LiveWashCount({ initial }: { initial: Totals | null }) {
  const t = useTotals(initial);

  if (!t) return <>누적 세차 데이터가 말해주는 결과를 확인하세요.</>;

  return (
    <>
      누적 세차 데이터{" "}
      <span className="font-bold text-black">
        {t.totalWashCount.toLocaleString("ko-KR")}건
      </span>
      이 말해주는 결과를 확인하세요.
    </>
  );
}
