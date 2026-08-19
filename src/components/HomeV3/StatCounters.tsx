"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Totals } from "@/lib/stats";
import { useTotals } from "./useTotals";

function CountUp({ to }: { to: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  // 서버 렌더에는 최종값이 그대로 나가서 JS 없이도 숫자가 보인다.
  const [value, setValue] = useState(to);
  const target = useRef(to);
  const done = useRef(false);

  // 폴링으로 값이 바뀌면 애니메이션을 다시 돌리지 않고 목표치만 갈아끼운다.
  useEffect(() => {
    target.current = to;
    if (done.current) setValue(to);
  }, [to]);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(target.current * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
      else done.current = true;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <span ref={ref} className="font-Poppins tabular-nums">
      {value.toLocaleString("ko-KR")}
    </span>
  );
}

export default function StatCounters({
  initial,
}: {
  initial: Totals | null;
}) {
  const t = useTotals(initial);
  if (!t) return null;

  const stats = [
    { label: "누적 세차", to: t.totalWashCount, unit: "건" },
    {
      label: "누적 세차 시간",
      to: Math.round(t.totalWashDurationSeconds / 3600),
      unit: "시간",
    },
    { label: "가입 회원", to: t.totalUserCount, unit: "명" },
  ];

  return (
    <div className="grid grid-cols-3 gap-[1px] overflow-hidden rounded-[24px] bg-borderStrong shadow-[0_24px_60px_rgba(10,21,38,0.14)] lg:grid-cols-1">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-[8px] bg-white px-[16px] py-[40px] lg:py-[28px]"
        >
          <p className="text-[15px] font-semibold text-secondaryDefault lg:text-[13px]">
            {s.label}
          </p>
          <p className="whitespace-nowrap text-[44px] font-extrabold leading-none text-black xl:text-[34px] lg:text-[26px]">
            <CountUp to={s.to} />
            <span className="ml-[2px] text-[24px] font-bold text-secondaryDefault lg:text-[14px]">
              {s.unit}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
