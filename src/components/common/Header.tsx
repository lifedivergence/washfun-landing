"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

const NAV_ITEMS = [
  { href: "/service", label: "사장님 대시보드" },
  { href: "/devices/self-wash", label: "설비" },
  { href: "/consulting", label: "세차장 컨설팅" },
  { href: "/contact", label: "도입 문의" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky left-0 top-0 z-[100] flex w-full items-center justify-center bg-white px-[160px] py-[24px] xl:px-[60px] lg:hidden"
        aria-label="워시펀 헤더"
      >
        <div className="flex w-full max-w-[1680px] items-center justify-between">
          <div className="flex items-center gap-[40px]">
            <Link href="/" aria-label="워시펀 홈으로 이동">
              <Image
                src="/images/v2/svg/logo1.svg"
                alt="워시펀 WashFun 로고"
                width={65}
                height={35}
                style={{ objectFit: "cover", cursor: "pointer" }}
                priority
              />
            </Link>
            <nav className="flex gap-[40px]" aria-label="주 메뉴">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[18px] font-medium text-secondaryDefault"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-[8px]">
            <a
              href="tel:+82-70-8806-8088"
              onClick={() => track("lead_cta_click", { source: "header_tel" })}
              className="flex items-center gap-[8px] rounded-[999px] bg-secondaryForeground px-[16px] py-[10px]"
              aria-label="워시펀 전화 상담 070-8806-8088"
            >
              <Image
                src="/images/v2/svg/phone.svg"
                alt="전화 아이콘"
                width={20}
                height={20}
              />
              <span className="text-[18px] font-semibold text-secondaryDefault">
                070 8806 8088
              </span>
            </a>
            <Link
              href="/contact"
              onClick={() =>
                track("lead_cta_click", { source: "header_contact" })
              }
              className="rounded-[999px] bg-main px-[24px] py-[12px] font-semibold text-white"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </header>

      <header
        className="sticky left-0 top-0 z-[170] hidden bg-white lg:block lg:p-[16px]"
        aria-label="워시펀 모바일 헤더"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[16px]">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              className="flex size-[36px] items-center justify-center rounded-md"
            >
              <Image
                src={
                  menuOpen ? "/images/svg/close.svg" : "/images/v2/svg/menu.svg"
                }
                alt=""
                width={28}
                height={28}
                style={{ objectFit: "contain" }}
              />
            </button>
            <Link
              href="/"
              aria-label="워시펀 홈"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/images/v2/svg/logo1.svg"
                alt="워시펀 WashFun 로고"
                width={50}
                height={46}
                style={{ objectFit: "cover" }}
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-[8px]">
            <a
              href="tel:+82-70-8806-8088"
              onClick={() =>
                track("lead_cta_click", { source: "header_tel_mobile" })
              }
              className="rounded-[999px] border border-borderStrong px-[14px] py-[8px] text-[14px] font-semibold text-black"
              aria-label="전화 상담 070-8806-8088"
            >
              ☎
            </a>
            <Link
              href="/contact"
              onClick={() => {
                track("lead_cta_click", { source: "header_contact_mobile" });
                setMenuOpen(false);
              }}
              className="rounded-[999px] bg-main px-[20px] py-[8px] font-semibold text-white"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-[72px] z-[150] hidden bg-black/40 lg:block"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <nav
            id="mobile-nav-drawer"
            aria-label="모바일 메뉴"
            className="fixed left-0 right-0 top-[72px] z-[160] hidden bg-white shadow-[0_12px_24px_rgba(0,0,0,0.1)] lg:block"
          >
            <ul className="flex flex-col py-[8px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-[20px] py-[16px] text-[18px] font-medium text-black hover:bg-secondaryForeground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-[8px] border-t border-borderStrong px-[20px] py-[14px]">
                <a
                  href="tel:+82-70-8806-8088"
                  onClick={() => {
                    track("lead_cta_click", { source: "drawer_tel" });
                    setMenuOpen(false);
                  }}
                  className="block text-[16px] font-semibold text-main"
                >
                  ☎ 070-8806-8088
                </a>
              </li>
              <li className="px-[20px] pb-[16px]">
                <a
                  href="mailto:contact@washfun.fun"
                  onClick={() => {
                    track("lead_cta_click", { source: "drawer_email" });
                    setMenuOpen(false);
                  }}
                  className="block text-[14px] text-secondaryDefault"
                >
                  ✉ contact@washfun.fun
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
