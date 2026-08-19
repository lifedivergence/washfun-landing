"use client";

import { useEffect, useState } from "react";
import { STATS_ENDPOINT, Totals, parseTotals } from "@/lib/stats";

// 원본 서버가 10분 캐시라 그보다 자주 물어볼 이유가 없다.
const POLL_MS = 600_000;
// 캐시 유효시간을 폴링 주기와 같게 두면, fetch 왕복 지연만큼 cachedAt이 밀려
// 매 두 번째 틱이 캐시 히트로 스킵된다. 여유를 둬 실효 주기를 10분으로 유지한다.
const FRESH_MS = POLL_MS - 60_000;

// 여러 컴포넌트가 같은 값을 쓰므로 모듈 단위로 한 번만 받아온다.
let cached: Totals | null = null;
let cachedAt = 0;
let inflight: Promise<Totals | null> | null = null;

function load(): Promise<Totals | null> {
  if (cached && Date.now() - cachedAt < FRESH_MS)
    return Promise.resolve(cached);
  if (inflight) return inflight;
  inflight = fetch(STATS_ENDPOINT)
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      const t = j ? parseTotals(j) : null;
      if (t) {
        cached = t;
        cachedAt = Date.now();
      }
      return t;
    })
    .catch(() => null)
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

/**
 * 서버가 채워준 값으로 시작해, 브라우저에서 10분마다 갱신한다.
 * 서버가 못 받아 왔으면 null 로 시작하고, 폴링이 성공할 때 채워진다.
 */
export function useTotals(initial: Totals | null): Totals | null {
  const [totals, setTotals] = useState(initial);

  useEffect(() => {
    let alive = true;
    const tick = () => {
      load().then((t) => {
        if (alive && t) setTotals(t);
      });
    };
    tick();
    const id = window.setInterval(tick, POLL_MS);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  return totals;
}
