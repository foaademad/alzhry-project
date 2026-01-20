"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaRocket, FaClock, FaSmile, FaBalanceScale } from "react-icons/fa";

type Service = {
  title: string;
  text: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "نمو الأعمال الفوري",
    text: "تحقيق تقدم سريع في نمو أعمالك معنا.",
    icon: <FaRocket />,
  },
  {
    title: "24/7 خدمة عالية الجودة",
    text: "خدماتنا متاحة على مدار الساعة لضمان الجودة في كل وقت.",
    icon: <FaClock />,
  },
  {
    title: "خدمة العملاء سهلة",
    text: "نحن هنا لتقديم خدمة عملاء مريحة وسهلة.",
    icon: <FaSmile />,
  },
  {
    title: "خدمة الجودة والتكلفة",
    text: "نقدم توازنًا مثاليًا بين الجودة والتكلفة.",
    icon: <FaBalanceScale />,
  },
];

export default function ServicesSection() {
  return (
    <section className="services_section">
      {/* عنوان القسم */}
      <motion.h2
        className="services_title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        خدماتنا المميزة
      </motion.h2>

      <div className="services_container">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="service_card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="service_icon"
              whileHover={{ y: -5, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {service.icon}
            </motion.div>

            <h3 className="service_title">{service.title}</h3>
            <p className="service_text">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
