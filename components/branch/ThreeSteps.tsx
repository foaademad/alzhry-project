"use client";

import { motion } from "framer-motion";

type Step = {
  number: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  { number: "01", title: "التواصل السريع", text: "اتصل بنا أو املأ النموذج عبر الإنترنت لتوضيح احتياجاتك" },
  { number: "02", title: "التحليل والتقييم", text: "نقوم بتحليل مشكلتك أو طلبك ونقدم لك الحل الأنسب" },
  { number: "03", title: "التنفيذ والمتابعة", text: "ننفذ الحل بسرعة ونتابع لضمان رضاك التام" },
];

export default function ThreeSteps() {
  return (
    <section className="steps_section">
      {/* Floating Shapes */}
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>

      <motion.h2
        className="steps_title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        حلولك بانتظارك في 3 خطوات سهلة
      </motion.h2>

      <motion.p
        className="steps_subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        نحن هنا لجعل الأمور أكثر بساطة لك. باتباع هذه الخطوات الثلاث السهلة، سنضمن معالجة مشكلتك أو احتياجاتك بسرعة وفعالية، دون أي تعقيدات
      </motion.p>

      <div className="steps_container">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="step_card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}  
            whileHover={{ scale: 1.05 }}
          >
            <div className="step_number">{step.number}</div>
            <h3 className="step_title">{step.title}</h3>
            <p className="step_text">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
