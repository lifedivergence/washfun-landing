import Image from "next/image";

const TermsOfPrivacy = () => {
  return (
    <div className="size-full flex justify-center">
      <div className="flex w-[1200px] justify-center">
        <Image src="/images/png/termsOfPrivacy.png" width={1900} height={5000} alt="policy" />
      </div>
    </div>
  )
}

export default TermsOfPrivacy;