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
      "أن نكون قدوة في المسؤولية الاجتماعية ودعم المجتمع المحلي والمساهمة في الحفاظ على البيئة.",
      "الالتزام بأعلى معايير الجودة والسلامة في جميع جوانب العمل من المنتجات التي نقدمها إلى الخدمات التي نوفرها.",
      "أن نكون الخيار الأول والأفضل في المنطقة من خلال توفير تجربة استثنائية تلبي احتياجات جميع أفراد المجتمع وتفوق توقعاتهم.",
      "الإسهام في إدخال المحتوى المحلي ضمن الفتوح الوطنية."
    ]
  },
  {
    title: "رسالتنا",
    items: [
      "نحن شركة متخصصة في إدارة وتشغيل الأسواق المركزية، ملتزمون بتقديم تجربة تسوق متميزة لعملائنا.",
      "نسعى لتوفير منتجات عالية الجودة وخدمة عملاء ممتازة وأجواء تسوق مريحة وممتعة.",
      "ندعم المجتمع المحلي ونعتمد أحدث التقنيات لضمان كفاءة عملياتنا.",
      "نحن الخيار الأمثل لتجربة تسوق لا مثيل لها."
    ]
  },
  {
    title: "أهدافنا",
    items: [
      "تلبية احتياجات العملاء وتجاوز توقعاتهم.",
      "توفير تجربة تسوق متميزة.",
      "التوسع في مواقع استراتيجية.",
      "تقديم منتجات وخدمات مبتكرة."
    ]
  },
  {
    title: "قيمنا",
    items: [
      "توفير معلومات دقيقة وشفافة للعملاء والموردين.",
      "النزاهة والشفافية في جميع تعاملاتنا.",
      "تقدير مساهمات العاملين والموردين والعملاء.",
      "الالتزام بتوفير بيئة عمل آمنة وصحية."
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
