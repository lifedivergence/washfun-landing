import Image from "next/image";

const TermsOfPrivacyKiosk = () => {
  return (
    <div className="flex size-full justify-center">
      <div className="flex w-[1200px] justify-center">
        <Image src="/images/png/privacy-kiosk.png" width={1900} height={20000} alt="policy" />
      </div>
    </div>
  )
}

export default TermsOfPrivacyKiosk;