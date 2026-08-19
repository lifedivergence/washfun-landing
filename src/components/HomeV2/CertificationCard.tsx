import Image from "next/image";
import Link from "next/link";

export default function CertificationCard() {
  return (
    <div className="mt-[40px] break-keep py-[120px] pb-0">
      <div>
        <p className="text-center text-[48px] font-bold lg:text-[30px]">
          믿을 만한 팀이 만든
          <br />
          믿을 만한 솔루션
        </p>
      </div>
      <div className="mt-[64px] grid grid-cols-3 gap-[12px] lg:grid-cols-1">
        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2023
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            창업진흥원 주관
            <br />
            예비창업패키지 선정
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification0.png"
              alt="예비창업패키지 선정 로고"
              fill={true}
              className="scale-[60%] object-contain"
            />
          </div>
        </div>
        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2024
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            중소벤처기업진흥공단
            <br />
            청년창업사관학교 선정 및 졸업
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification2.png"
              alt="청년창업사관학교 로고"
              fill={true}
              className="scale-[70%] object-contain"
            />
          </div>
        </div>
        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2023
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            한국형 I-Corps
            <br />
            지원 기업 선정
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification3.png"
              alt="한국형 I-Corps 로고"
              fill={true}
              className="scale-[70%] object-contain"
            />
          </div>
        </div>

        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2024
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            한국일보 주관
            <br />
            디지털 이노베이션 대상 수상
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification4.png"
              alt="디지털 이노베이션 대상 로고"
              fill={true}
              className="scale-[60%] object-contain"
            />
          </div>
        </div>
        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2024
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            세차장 관리 및 데이터 분석 등 특허 4건 등록
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification5.png"
              alt="특허청 로고"
              fill={true}
              className="scale-[60%] object-contain"
            />
          </div>
        </div>
        <div className="flex h-[300px] flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-secondaryForeground p-[24px] lg:h-[200px] lg:p-[16px]">
          <p className="text-[16px] font-semibold leading-[24px] text-main">
            2024
          </p>
          <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
            워시펀 자체 상표 및 <br />
            화면 디자인권 등록
          </p>
          <div className="relative h-[156px] w-full">
            <Image
              src="/images/v2/png/certification5.png"
              alt="상표·디자인권 등록 로고"
              fill={true}
              className="scale-[60%] object-contain"
            />
          </div>
        </div>

        <Link
          href="https://www.hankookilbo.com/News/Read/A2024110614530001135?did=NA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-[300px] cursor-pointer flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-white p-[24px] lg:h-[200px] lg:p-[16px]">
            <div className="flex items-start justify-between">
              <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
                "제19회 디지털 이노베이션 대상 수상"
              </p>
              <Image
                src="/images/v2/svg/arrow-right-up.svg"
                alt=""
                width={36}
                height={36}
                className="scale-[100%] object-contain"
              />
            </div>
            <div className="relative h-[156px] w-full">
              <Image
                src="/images/v2/png/certification6.png"
                alt=""
                fill={true}
                className="mt-4 scale-[50%] object-contain"
              />
            </div>
          </div>
        </Link>

        <Link
          href="https://www.news1.kr/industry/general-industry/5565629"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-[300px] cursor-pointer flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-white p-[24px] lg:h-[200px] lg:p-[16px]">
            <div className="flex items-start justify-between">
              <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
                "시간 맞추기 어려운 셀프 세차 결제 혁신 <br />쓴 만큼 내는
                '워시펀' 출시"
              </p>
              <Image
                src="/images/v2/svg/arrow-right-up.svg"
                alt=""
                width={36}
                height={36}
                className="scale-[100%] object-contain"
              />
            </div>
            <div className="relative h-[156px] w-full">
              <Image
                src="/images/v2/png/certification7.png"
                alt=""
                fill={true}
                className="scale-[40%] object-contain"
              />
            </div>
          </div>
        </Link>
        <Link
          href="https://www.interviewm.com/news/articleView.html?idxno=4634"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-[300px] cursor-pointer flex-col gap-[8px] rounded-[24px] border border-borderStrong bg-white p-[24px] lg:h-[200px] lg:p-[16px]">
            <div className="flex items-start justify-between">
              <p className="text-[20px] font-medium leading-[28px] text-secondaryDefault">
                "RFID 카드와 선불 시간제에서
                <br />
                IoT와 AI 기반 세차장 디지털 혁신으로"
              </p>
              <Image
                src="/images/v2/svg/arrow-right-up.svg"
                alt=""
                width={36}
                height={36}
                className="scale-[100%] object-contain"
              />
            </div>
            <div className="relative h-[156px] w-full">
              <Image
                src="/images/v2/png/certification8.png"
                alt=""
                fill={true}
                className="scale-[60%] object-contain"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
