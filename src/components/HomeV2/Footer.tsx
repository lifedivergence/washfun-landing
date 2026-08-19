"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { LEGAL_LINKS } from "@/lib/legal";

export default function Footer() {
  return (
    <footer
      className="mt-[200px] flex flex-row justify-between break-keep pb-[120px] pt-[80px] xl:flex-col-reverse"
      aria-label="워시펀 푸터"
    >
      <div>
        <div className="flex items-center gap-[16px]">
          <Link href="/" aria-label="워시펀 홈으로 이동">
            <Image
              src="/images/logo/HorizontalType.svg"
              alt="워시펀 로고"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div className="mt-[24px] flex flex-col gap-[8px] lg:gap-[14px]">
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              상호명
            </p>
            <p className="text-[14px] font-medium text-black">
              (주)라이프다이버전스
            </p>
          </div>
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              대표명
            </p>
            <p className="text-[14px] font-medium text-black">김동영</p>
          </div>
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              사업자등록번호
            </p>
            <p className="text-[14px] font-medium text-black">
              514-86-03698 / 정보통신업 응용 소프트웨어 개발 및 공급업, 자동차
              세차업
            </p>
          </div>
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              주소
            </p>
            <p className="text-[14px] font-medium text-black">
              울산광역시 중구 종가6길 21, 우정혁신타워 605호
            </p>
          </div>
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              통신판매 신고번호
            </p>
            <p className="text-[14px] font-medium text-black">
              2024-울산중구-0396
            </p>
          </div>
          <div className="flex items-start gap-[8px] xl:flex-col xl:gap-[4px]">
            <p className="w-[150px] shrink-0 text-[14px] font-medium text-secondaryDefault xl:w-auto">
              개인정보 처리방침 및 기타문의사항
            </p>
            <p className="text-[14px] font-medium text-black">
              <a
                href="mailto:contact@washfun.fun"
                className="hover:underline"
                onClick={() =>
                  track("lead_cta_click", { source: "footer_email" })
                }
              >
                contact@washfun.fun
              </a>
              {" / "}
              <a
                href="tel:+82-70-8806-8088"
                className="hover:underline"
                onClick={() =>
                  track("lead_cta_click", { source: "footer_tel" })
                }
              >
                070-8806-8088
              </a>
            </p>
          </div>
        </div>
      </div>
      <nav
        className="grid shrink-0 grid-cols-2 gap-x-[48px] gap-y-[36px] pl-[48px] xl:mb-[48px] xl:pl-0 lg:grid-cols-1 lg:gap-[24px]"
        aria-label="푸터 메뉴"
      >
        <div>
          <p className="text-[18px] font-semibold">솔루션</p>
          <div className="mt-[16px] flex flex-col gap-[12px]">
            <Link
              href="/service"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              사장님 대시보드
            </Link>
            <Link
              href="/consulting/auto-wash"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              자동 세차
            </Link>
            <Link
              href="/consulting/self-wash"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              셀프 세차
            </Link>
            <Link
              href="/devices/self-wash"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              셀프 세차장 설비
            </Link>
            <Link
              href="/devices/auto-wash"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              자동 세차장 설비
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[18px] font-semibold">컨설팅</p>
          <div className="mt-[16px] flex flex-col gap-[12px]">
            <Link
              href="/consulting/start-business"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              세차장 창업
            </Link>
            <Link
              href="/consulting/remodeling"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              세차장 리모델링
            </Link>
            <Link
              href="/consulting/system"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              시스템 도입
            </Link>
            <Link
              href="/consulting/operations"
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              운영 컨설팅
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[18px] font-semibold">도입하기</p>
          <div className="mt-[16px] flex flex-col gap-[12px]">
            <Link
              href="/contact"
              onClick={() =>
                track("lead_cta_click", { source: "footer_contact" })
              }
              className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
            >
              온라인 문의하기
            </Link>
            <a
              href="tel:+82-70-8806-8088"
              onClick={() => track("lead_cta_click", { source: "footer_tel" })}
              className="flex items-center gap-[8px] whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black xl:text-[14px]"
            >
              <Image
                src="/images/v2/svg/phone.svg"
                alt="전화"
                width={16}
                height={16}
                className="mb-1"
              />
              070-8806-8088
            </a>
          </div>
        </div>
        <div>
          <p className="text-[18px] font-semibold">약관</p>
          <div className="mt-[16px] flex flex-col gap-[12px]">
            {[
              { href: LEGAL_LINKS.service, label: "서비스 이용약관" },
              { href: LEGAL_LINKS.privacy, label: "개인정보 처리방침" },
              { href: LEGAL_LINKS.digital, label: "전자상거래 표준약관" },
              { href: LEGAL_LINKS.location, label: "위치기반서비스 이용약관" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-[16px] font-normal text-secondaryDefault hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
