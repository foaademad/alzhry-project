"use client";

import { motion } from "framer-motion";

type InfoSectionProps = {
  title: string;
  items: string[];
};

const sections: InfoSectionProps[] = [
  {
    title: "رؤيتنا",
    items: [
      "أن نكون الخيار الأول في قطاع المقاولات، من خلال تقديم حلول بناء وصيانة متطورة تواكب احتياجات السوق المحلي والإقليمي",
      "نطمح إلى تحقيق الريادة في تنفيذ المشاريع الهندسية وفق أعلى معايير الجودة، الاستدامة، والسلامة، مع تعزيز استخدام التقنيات الحديثة لضمان كفاءة الأعمال."
    ]
  },
  {
    title: "رسالتنا",
    items: [
"نلتزم بتقديم خدمات هندسية متكاملة في مجالات البناء، التشغيل، والصيانة، مع التركيز على الجودة، الابتكار، والاستدامة، والعمل على تلبية احتياجات العملاء من خلال حلول احترافية تضمن تنفيذ المشاريع بكفاءة، مع الالتزام بمعايير السلامة والجودة لتحقيق أعلى مستويات الأداء والرضا."    ]
  },
  {
    title: "قيمنا ",
    items: [
      
  "الجودة: تنفيذ المشاريع وفق أعلى المعايير العالمية مع ضمان الأداء الفائق.",
  "الابتكار: تبني أحدث التقنيات لتطوير حلول متقدمة في قطاع المقاولات.",
  "السلامة : تطبيق إجراءات صارمة لضمان بيئة عمل آمنة ومستدامة.",
  "الاستدامة: الالتزام بممارسات صديقة للبيئة تدعم التنمية المستدامة.",
  "الشفافية والاحترا  فية: بناء علاقات قائمة على النزاهة والمصداقية مع العملاء والشركاء."

    ]
  },
  {
    title: "حدماتنا ",
    items: [

      "كافة أعمال الخرسانات." ,
      "التشطيبات.",
      "تجديد المباني.",
      "التصميم المعماري.",
      "أنظمة التكييف والتبريد.",
      "أنظمة مكافحة الحريق."
    ]
  }
];


export default function VisionMission() {
  return (
    <section className="vision_section">
      {/* Floating Shapes */}
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>

      <motion.h2
        className="vision_main_title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        من نحن ؟ 
      </motion.h2>

      <div className="vision_container">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="vision_card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            <h3 className="vision_title">{section.title}</h3>
            <ul className="vision_items">
              {section.items.map((item, i) => (
                <li key={i} className="vision_text">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
