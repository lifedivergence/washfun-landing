import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-[1680px] px-[120px] py-[80px] font-Pretendard text-black lg:px-[16px] lg:py-[40px]">
      <div className="flex min-h-[560px] w-full flex-col items-center justify-center rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] px-[24px] py-[80px] lg:min-h-[420px] lg:py-[56px]">
        <Image
          src="/images/logo/HorizontalType.svg"
          alt="워시펀"
          width={168}
          height={17}
          priority
        />

        <p className="mt-[40px] font-Poppins text-[80px] font-extrabold leading-none text-main lg:text-[56px]">
          404
        </p>

        <h1 className="mt-[20px] break-keep text-center text-[32px] font-bold leading-[1.3] lg:text-[22px]">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="mt-[12px] max-w-[440px] break-keep text-center text-[16px] leading-[1.6] text-secondaryDefault lg:text-[14px]">
          주소가 바뀌었거나 삭제된 페이지입니다.
        </p>

        <Link
          href="/"
          className="mt-[36px] rounded-full bg-main px-[36px] py-[16px] text-[17px] font-bold text-white shadow-[0_12px_28px_rgba(28,115,186,0.35)] transition hover:brightness-110 lg:w-full lg:max-w-[320px] lg:text-center"
        >
          홈으로 가기
        </Link>
      </div>
    </main>
  );
}
