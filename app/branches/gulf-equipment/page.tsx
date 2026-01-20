
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
      title="فرع وجار الخليج لمعدات المطابخ"
      subtitle="مجموعة شركات الظاهري"
      text="نقدم حلولًا تجارية متكاملة تلبي احتياجات السوق المحلي والإقليمي."
      videoSrc="/audio/third.mp4"
    />

        <BranchContent
       title="فرع وجار الخليج لمعدات المطابخ"
        text={`٢٣ عاما من الخبرة في مجال تجهيزات المطابخ المركزية جعلتها إحدى المؤسسات الرائدة في هذا المجال كما أن المؤسسة تعتبر وكيلا و موزعاً معتمداً لكبرى الشركات العالمية الأوربية والأمريكية ذات السمعة الدولية الجيدة وتمتلك المؤسسة فريقا من المهندسين المهرة في التركيب والتشغيل والصيانة لكافة الأجهزة. كما أن المؤسسة قامت بتنفيذ مشاريع عديدة للقطاع الحكومي والخاص و شعارنا هو الخدمة بعد البيع. كما تقدم المؤسسة تصاميم خرائط و استشارات مجانية لعملائنا من الاستشاريين والمقاولين و كذلك خدمات و تسهيلات النقل الموجودة لدينا تضمن توصيل البضائع للعملاء إلى أي مكان بالمملكة. كما تتوفر لدينا قطع غيار لكافة المعدات لعملائنا الذي نسعى لخدمتهم. للمؤسسة معرضها بالرياض علي مساحة ١٠٠٠ م و كذلك مستودع على مساحة ۲۰۰۰ م وورشة خاصة بالصيانة وقطع الغيار على مساحة ٨٠ م ولدينا فرع بمدينة جدة .`}
      />
      <VisionMission/>
      <ServicesSection />
      <ThreeSteps />
      </>
  );
};

export default CentralMarkets;
