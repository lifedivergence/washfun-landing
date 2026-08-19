import Header from "@/components/common/Header";
import Hero from "@/components/HomeV3/Hero";
import StatBand from "@/components/HomeV3/StatBand";
import Effect from "@/components/HomeV3/Effect";
import RfCompare from "@/components/HomeV3/RfCompare";
import Compare from "@/components/HomeV3/Compare";
import Seasonality from "@/components/HomeV3/Seasonality";
import Loyalty from "@/components/HomeV3/Loyalty";
import Crm from "@/components/HomeV3/Crm";
import SystemMap from "@/components/HomeV3/SystemMap";
import Cost from "@/components/HomeV3/Cost";
import Trust from "@/components/HomeV3/Trust";
import CertificationCard from "@/components/HomeV2/CertificationCard";
import Banner from "@/components/HomeV2/Banner";
import Footer from "@/components/HomeV2/Footer";

export const metadata = { alternates: { canonical: "/" } };

// 배포가 뜸해도 HTML에 박히는 초기 숫자가 낡지 않도록 1시간마다 재생성한다.
// 브라우저는 이 값과 무관하게 API를 직접 폴링한다 (useTotals).
export const revalidate = 3600;

export default function Home() {
  return (
    <div className="font-Pretendard text-black">
      <Header />
      <main>
      <Hero />
      <StatBand />
      <Effect />
      <RfCompare />
      <Compare />
      <Seasonality />
      <Loyalty />
      <Crm />
      <SystemMap />
      <div className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
        <CertificationCard />
      </div>
      <Trust />
      <Cost />
      </main>

      <div className="mx-auto max-w-[1440px] px-[120px] lg:px-[16px]">
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
