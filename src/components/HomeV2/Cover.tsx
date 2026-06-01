import Image from "next/image";

export default function Cover() {
  return (
    <div className="h-screen w-full bg-white" >

      {/* Content */}
      <div className="relative flex h-[720px] w-full flex-col items-center justify-center rounded-[40px] bg-gradient-to-b from-secondaryForeground to-[#D2E3F1] lg:overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[60px] font-bold lg:text-[36px]">
            세차를 일상으로
          </h1>
          <div className=" flex items-center justify-center gap-[8px]">
            <div className="mb-2 flex items-center justify-center">
              <Image src="/images/v2/svg/add-circle-fill.svg" alt="워시펀 세차장 솔루션 아이콘" width={64} height={64} style={{ objectFit: "cover" }} className="lg:size-[34px]" />
            </div>
            <p className="text-[60px] font-bold lg:text-[36px]">
              초대하다.
            </p>
          </div>
        </div>

        <div className="mt-[16px] flex max-w-[90%] flex-col items-center justify-center gap-[6px] px-4 text-center text-balance">
          <h2 className="text-[18px] font-normal text-secondaryDefault lg:text-[14px]">세차 결제 방식의 혁신, 워시펀</h2>
          <p className="text-[18px] font-normal text-secondaryDefault lg:text-[13px]">후불제 셀프 세차부터 구독제 자동 세차까지.</p>
        </div>

        <Image
          src="/images/v2/png/cover-car.png"
          alt="워시펀 세차장 디지털 솔루션 메인 이미지 - 무인 자동 세차장"
          width={2000}
          height={2000}
          priority
          sizes="(max-width: 1024px) 100vw, 1440px"
          style={{ objectFit: "cover" }}
          className="absolute bottom-0 left-0 lg:bottom-[4%] lg:left-[20%] lg:scale-[200%]"
        />
      </div>
    </div >
  )
}