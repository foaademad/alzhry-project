"use client";

import { motion } from "framer-motion";

type InfoSectionProps = {
  title: string;
  items: string[];
};

const sections: InfoSectionProps[] = [
  {
    title: "قطاعاتنا",
    items: [
     "قطاع معدات القوات" ,
     "نقل التكنولوجيا" , 
     "قطاع الاليات الخفيفة والمتوسطة.",
      "توريد المواد الخام",
      "التكنولوجيا الحديثة والاتصالات",
      "الدورات التدريبية.",
      "الطائرات المسيرة"
    ]
  },
 

 
 
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
