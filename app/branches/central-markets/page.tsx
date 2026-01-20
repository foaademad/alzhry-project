
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
      title="فرع الأسواق المركزية والمطاعم"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/frist.mp4"
    />

        <BranchContent
        title="فرع الأسواق المركزية والمطاعم"
        text={`يُعد فرع الأسواق المركزية زهابكو من الفروع العريقة بمجموعة شركات الظاهري بل أحد أقدم الشركات في المملكة العربية السعودية، حيث تأسست في الثمانينات. ﻗﺎم اﻟﻔﺮع ﺑﺈدارة اﻟﻌﺪﻳﺪ ﻣﻦ ﻓﺮوع الاﺳﻮاق ﻋﻠﻰ ﻣﺴﺘﻮى اﻟﻤﻤﻠﻜﺔ ﺑﺎﻟﻜﺎﻣﻞ وإدارة اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻤﻘﺎﺻﻒ اﻟﺨﺎﺻﺔ ﺑﻮزارة اﻟﺘﻌﻠﻴﻢ اﻟﺴﻌﻮدي ﺣﻴﺚ ان ﻓﺮع الاﺳﻮاق اﻟﻤﺮﻛﺰﻳﺔ زﻫﺎﺑﻜﻮ ﻻ ﻳﻘﻮم ﻓﻘﻂ ﺑﺈدارة الاﺳﻮاق ﺑﻞ ﻳﻌﻤﻞ أﻳﻀﺎ ﻋﻠﻰ ﺗﻄﻮﻳﺮ اﻟﺴﻮق اﻟﻤﺤﻠﻲ ﻋﻦ ﻃﺮﻳﻖ اﺳﺘﻘﻄﺎب اﻟﺸﺮﻛﺎت اﻟﻌﺎﻟﻤﻴﺔ واﻟﻌﻼﻣﺎت اﻟﺘﺠﺎرﻳﺔ اﻟﻌﺎﻟﻤﻴﺔ ﻟﻠﺴﻮق اﻟﺴﻌﻮدي وأﺧﺬ وﻛﺎﻟﺘﻬﺎ واﻟﻌﻤﻞ ﺑﺸﻜﻞ ﻣﺴﺘﻤﺮ ﻋﻠﻰ ﺗﻄﻮﻳﺮ أﻟﻴﺎت اﻟﻌﻤﻞ داﺧﻞ اﻟﻔﺮوع ﻋﻦ ﻃﺮﻳﻖ ﺗﻘﺪﻳﻢ أﻓﻀﻞ اﻟﻜﻮادر واﻟﻤﻮارد.`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
