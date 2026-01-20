
import BranchContent from "@/components/branch/BranchContent";
import ServicesSection from "@/components/branch/ServicesSection";
import ThreeSteps from "@/components/branch/ThreeSteps";
import HeroVideo from "@/components/branch/videoHero";
import React from "react";
import VisionMission from "../central-markets/VisionMission";


const CentralMarkets = () => {
  return (
    <>
    <HeroVideo
      title="فرع المواد الغذائية والإعاشة "
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/second.mp4"
    />

        <BranchContent
       title="فرع المواد الغذائية والإعاشة "
       text={`يعد فرع الإعاشة والتشغيل من الركائز الأساسية لمجموعة شركات الظاهري منذ تأسيسها عام ١٩٨٣م، ويتمتع بخبرة واسعة وسمعة مرموقة في السوق السعودي والخليجي. يتخصص الفرع في تقديم خدمات الإعاشة المتكاملة للجهات الحكومية والمراكز الصحية والمستشفيات والمدن الطبية، بإدارة فريق محترف قادر على تنفيذ مشاريع ضخمة تصل قيمتها إلى٤مليارات ريال للمشروع الواحد. تجاوزت القيمة الإجمالية لمشاريع الفرع ٥٫٢مليار ريال سعودي، مع التزام راسخ ً بمعايير السلامة والصحة والبيئة، مدعوما بعدة شهادات دولية في جودة وسلامة الغذاء، مما يعكس حرصه المستمر على تحقيق أعلى مستويات رضا العملاء .`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
