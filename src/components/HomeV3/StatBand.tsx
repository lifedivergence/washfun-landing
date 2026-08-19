import { STATS_ENDPOINT, Totals, parseTotals } from "@/lib/stats";
import StatCounters from "./StatCounters";

/**
 * 빌드 시점에 한 번 받아 HTML을 채운다. JS 없는 크롤러도 실제 숫자를 본다.
 * 실시간 갱신은 브라우저가 직접 API를 폴링해서 처리한다 (useTotals).
 *
 * 실패하면 null 을 준다. 틀린 숫자를 보여 주느니 숫자를 감춘다.
 * 브라우저에서 폴링이 성공하면 그때 채워진다.
 */
export async function getTotals(): Promise<Totals | null> {
  try {
    const res = await fetch(STATS_ENDPOINT);
    if (!res.ok) return null;
    return parseTotals(await res.json());
  } catch {
    return null;
  }
}

export default async function StatBand() {
  const initial = await getTotals();

  return (
    <section className="relative z-10 mx-auto -mt-[60px] max-w-[1200px] px-[24px] lg:mt-[16px] lg:px-[16px]">
      <StatCounters initial={initial} />
    </section>
  );
}
