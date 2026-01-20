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
      "أن تكون الخيار الأول في مجال تجهيزات المطابخ المركزية وأن نقدم لعملائنا خدمات متميزة تجعل من وجار الخليج المعدات المطابخ المركزية هذا الخيار الأول "
    
    ]
  },
  {
    title: "رسالتنا",
    items: [
      "الالتزام التام بمشاركة عملائنا لتحسين وتطوير الأداء من خلال توفير الخبرات المتميزة والحلول الذكية في مجال تجهيزات معدات المطابخ المركزية."
    ]
  },
  {
    title: "أهدافنا",
    items: [
       "المواجهة جميع التحديات والصعوبات التي تواجه عملائنا والنجاح بها لتكون مسئولين أمام عملائنا عن نتائج أعمالنا لتحقيق النجاحات الكاملة في مجالنا."
    ]
  },
  {
    title: "قيمنا",
    items: [
     "تقديم خدمات عالية الجودة تلبي تطلعات العملاء وتضمن رضاهم . " , 
     "تعزيز ثقافة الإبداع وتطوير القدرات البشرية كأصل استثماري مستدام. ", 
  
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
