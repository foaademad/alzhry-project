
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
      title="فرع العمليات التجارية والتوكيلات"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/six.mp3"
    />

        <BranchContent
       title="فرع العمليات التجارية والتوكيلات"
       text={`فرع العمليات التجارية والتوكيلات من الأفرع المهمة، والذي بدأ حديثا منذ أكثر من 15 عاما على وجه التقريب. ويتبلور نشاط هذا الفرع في التوكيلات التجارية لشركات عالمية وأوروبية وأمريكية بالإضافة إلى توريد وتركيب الأجهزة والمعدات الإلكترونية والمعدات الطبية ومستلزماتها وسيارات الإسعاف وأجهزة الاتصالات والوكالات التجارية في شقيه المدني والعسكري`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
