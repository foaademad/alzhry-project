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
      "أن نكون الجهة الرائدة في إدارة وتنفيذ العمليات التجارية بكفاءة وابتكار، بما يضمن تحقيق أعلى مستويات الجودة والربحية والاستدامة."
    
    ]
  },
  {
    title: "رسالتنا",
    items: [
      "نسعى إلى تطوير وتشغيل منظومة عمليات تجارية متكاملة تقوم على التخطيط الدقيق، التنفيذ المحترف، والتحسين المستمر، بما يعزز من كفاءة الأداء ورضا العملاء ويدعم الأهداف الاستراتيجية للمجموعة."
    ]
  },
  {
    title: "أهدافنا",
    items: [
      "تحقيق نمو مستدام في الإيرادات والأرباح من خلال إدارة فعالة للعمليات التجارية.رفع كفاءة العمليات التشغيلية وتحقيق أعلى معايير الجودة والإنتاجية."
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
