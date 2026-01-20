
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
      title="فرع مجموعة شركات الظاهري السعودية بالإمارات"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/seven.mp4"
    />

        <BranchContent
        title="فرع مجموعة شركات الظاهري السعودية بالإمارات"
        text={`شركة القعقاع للخدمات الأمنية هي إحدى الشركات الرائدة في مجال الأمن الخاص، وهي أحد المراكز الرئيسية لمجموعة الظاهرى المختصة في مجال الحراسة الأمنية والخدمات الأمنية في المملكة العربية السعودية. تأسست شركة ”الظاهري” عام 1983 وتضم كوادر مدربة ومجهزة بأحدث القدرات العلمية والخبرة الإدارية العملية لجميع الكفاءات المطلوبة، مثل حماية الممتلكات والمعلومات والمرافق والمجمعات السكنية والأسواق والمراكز التجارية والمستشفيات والمدارس والمرافق الرياضية، ونقل الأموال والتأمين على الفعاليات والحفلات الموسيقية والمؤتمرات وغيرها.

`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
