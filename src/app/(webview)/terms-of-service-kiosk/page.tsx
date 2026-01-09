import Image from "next/image";

const TermsOfServiceKiosk = () => {
  return (
    <div className="flex size-full justify-center">
      <div className="flex w-[1200px] justify-center">
        <Image src="/images/png/service-kiosk.png" width={1900} height={24000} alt="policy" />
      </div>
    </div>
  )
}

export default TermsOfServiceKiosk;