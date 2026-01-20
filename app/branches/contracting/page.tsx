
import BranchContent from "@/components/branch/BranchContent";
import ServicesSection from "@/components/branch/ServicesSection";
import ThreeSteps from "@/components/branch/ThreeSteps";
import HeroVideo from "@/components/branch/videoHero";
import React from "react";
import VisionMission from "./VisionMission";

const CentralMarkets = () => {
  return (
    <>
    <HeroVideo
      title="فرع المقاولات العامة"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/four.mp4"
    />

        <BranchContent
       title="فرع المقاولات العامة"
        text={`نلتزم بتقديم خدمات هندسية متكاملة في مجالات البناء، التشغيل، والصيانة، مع التركيز على الجودة، الابتكار، والاستدامة، والعمل على تلبية احتياجات العملاء من خلال حلول احترافية تضمن تنفيذ المشاريع بكفاءة، مع الالتزام بمعايير السلامة والجودة لتحقيق أعلى مستويات الأداء والرضا.`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
