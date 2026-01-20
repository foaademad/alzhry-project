
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
      title="فرع التجهيزات العسكرية والأمنية"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/eight.mp4"
    />

        <BranchContent
        title="فرع التجهيزات العسكرية والأمنية"
        text={`يعتبر فرع القعقاع للتوريدات العسكرية من أهم الأفرع في المجموعة ويعمل كمزود رئيسي لتلبية احتياجات . قطاعات العسكرية والصناعية في المملكة عن طريق توريد مجموعة واسعة من الأنظمة والمعدات العسكرية جوية والبحرية والبرية إضافة الى توريد المواد الخام للمصانع والمنشات التي تعمل بالصناعات الدفاعية ونقل تكنولوجيا من الشركات العالمية المختصة في مجال تكنولوجيا الدفاع وتعزيز الأساليب الإنتاجية والتكنولوجيات جديدة والدورات التدريبية المتقدمة لتمكين الظباط والمهندسين العاملين في المجالات الدفاعية من إكتساب كة ومصطلحات ومفاهيم أساسية لجميع صنوف القوات المسلحة والأجهزة الأمنية والصناعات الدفاعية.`}
        />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
