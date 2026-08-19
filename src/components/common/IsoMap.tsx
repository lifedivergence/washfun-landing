"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type IsoSpot = {
  id: string;
  x: number; // %
  y: number; // %
  name: string;
  desc: string;
  zone: "셀프" | "자동" | "공용";
  href?: string;
};

const ZONE_COLOR: Record<IsoSpot["zone"], string> = {
  셀프: "bg-main",
  자동: "bg-subPrimary",
  공용: "bg-primary",
};

// 모바일에서는 구성도가 292px까지 줄어 핀이 그림을 덮는다.
// 배경 알파만 낮춰 안쪽이 비치게 하고, 흰 테두리와 + 기호는 불투명하게 남긴다.
const RING_ALPHA = "opacity-40 lg:opacity-15";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  spots: IsoSpot[];
  priority?: boolean;
};

/** 아이소메트릭 이미지 + 인터랙티브 핀. 데스크톱 호버 오버레이, 모바일 탭 → 하단 상세. */
export default function IsoMap({
  src,
  alt,
  width,
  height,
  spots,
  priority,
}: Props) {
  const [active, setActive] = useState<IsoSpot | null>(null);

  return (
    <div className="relative overflow-visible rounded-[24px] border border-borderStrong bg-white p-[16px] lg:p-[8px]">
      <div className="relative" onMouseLeave={() => setActive(null)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 1150px"
          className="h-auto w-full"
        />

        {spots.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-label={`${s.name} 설명 보기`}
            onClick={() => setActive(active?.id === s.id ? null : s)}
            onMouseEnter={() => setActive(s)}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-[6px] lg:p-0"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <span className="relative flex size-[26px] items-center justify-center lg:size-[16px]">
              <span
                className={`absolute inline-flex size-full animate-ping rounded-full ${RING_ALPHA} ${ZONE_COLOR[s.zone]}`}
              />
              <span
                className={`relative flex size-[18px] items-center justify-center rounded-full border-2 border-white text-[13px] font-bold leading-none text-white shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-125 lg:size-[12px] lg:text-[9px] lg:border ${ZONE_COLOR[s.zone]} ${
                  active?.id === s.id
                    ? "scale-125 lg:bg-opacity-100"
                    : "lg:bg-opacity-55 group-hover:lg:bg-opacity-100"
                }`}
              >
                +
              </span>
            </span>
          </button>
        ))}

        {/* 데스크톱 호버 오버레이 */}
        <AnimatePresence>
          {active && (
            <div
              key={active.id}
              className="pointer-events-none absolute z-20 lg:hidden"
              style={{
                left: `min(max(${active.x}%, 14%), 74%)`,
                top: `${active.y}%`,
                transform: "translate(-50%, calc(-100% - 22px))",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="pointer-events-auto w-[280px] rounded-[16px] border border-borderStrong bg-white p-[16px] shadow-[0_16px_40px_rgba(10,21,38,0.18)]"
              >
                <div className="flex items-center gap-[8px]">
                  <span
                    className={`size-[8px] rounded-full ${ZONE_COLOR[active.zone]}`}
                  />
                  <span className="text-[12px] font-semibold text-secondaryDefault">
                    {active.zone}
                  </span>
                </div>
                <p className="mt-[6px] text-[16px] font-bold text-black">
                  {active.name}
                </p>
                <p className="mt-[6px] break-keep text-[13px] leading-[1.55] text-secondaryDefault">
                  {active.desc}
                </p>
                {active.href && (
                  <Link
                    href={active.href}
                    className="mt-[10px] inline-block text-[13px] font-bold text-main hover:underline"
                  >
                    설비 자세히 보기 →
                  </Link>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 모바일 상세 박스 */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="mt-[8px] rounded-[16px] bg-secondaryForeground p-[16px]"
            >
              <div className="flex items-center gap-[8px]">
                <span
                  className={`size-[8px] rounded-full ${ZONE_COLOR[active.zone]}`}
                />
                <span className="text-[12px] font-semibold text-secondaryDefault">
                  {active.zone}
                </span>
              </div>
              <p className="mt-[4px] text-[15px] font-bold text-black">
                {active.name}
              </p>
              <p className="mt-[4px] break-keep text-[13px] leading-[1.55] text-secondaryDefault">
                {active.desc}
              </p>
              {active.href && (
                <Link
                  href={active.href}
                  className="mt-[8px] inline-block text-[13px] font-bold text-main"
                >
                  설비 자세히 보기 →
                </Link>
              )}
            </motion.div>
          ) : (
            <p
              key="hint"
              className="mt-[8px] rounded-[16px] bg-secondaryForeground p-[16px] text-center text-[13px] text-secondaryDefault"
            >
              + 점을 눌러 설비 설명을 확인하세요
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
