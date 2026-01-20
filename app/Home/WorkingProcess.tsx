"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaRegLightbulb, FaClipboardList, FaDollarSign, FaCogs } from "react-icons/fa";

export default function WorkingProcess() {
  const steps = [
    {
      id: 1,
      icon: <FaRegLightbulb />,
      title: "وضع الخطة",
      description: "نبدأ بتحديد الاستراتيجية التي تناسب احتياجاتك وأهدافك",
    },
    {
      id: 2,
      icon: <FaDollarSign />,
      title: "تحديد التكلفة",
      description: "نحسب التكلفة بدقة لضمان الحصول على أعلى قيمة ضمن الميزانية",
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "تنفيذ المشروع",
      description: "نقوم بمتابعة التنفيذ لضمان تقدم العمل بكفاءة وجودة عالية",
    },
    {
      id: 4,
      icon: <FaClipboardList />,
      title: "تحقيق النجاح",
      description: "نحرص على إنهاء المشروع بنجاح وتحقيق أهدافك بكل احترافية",
    },
  ];

  const [visible, setVisible] = useState<boolean[]>(Array(steps.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newVisible = [...visible];
            steps.forEach((_, index) => (newVisible[index] = true));
            setVisible(newVisible);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section className="working_section" ref={containerRef}>
      <h2 className="working_title">خطوات العمل الأساسية</h2>
      <div className="steps_container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step_card ${visible[index] ? "active" : ""}`}
          >
            <div className="step_icon">{step.icon}</div>
            <h3 className="step_title">{step.title}</h3>
            <p className="step_description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
