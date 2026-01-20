"use client";

import React, { useState } from "react";

export default function WhatChooseUs() {
  const tabs = [
    {
      id: 1,
      title: "د/ محمد بن صالح الظاهري",
      content: `الشيخ الدكتور / محمد بن صالح الظاهري صاحب و رئيس مجلس الإدارة من الوجوه الاقتصادية و الاجتماعية البارزة في المملكة العربية السعودية و الخليج ومن الرواد الذين ساهموا في إنشاء البنية التحتية في المملكة في الثمانينات و قد كان له دورا بارزا في التنمية الاقتصادية.`
    },
    {
      id: 2,
      title: "نظرة عامة",
      content: `تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج. تأسست عام 1403 هـ - 1983 م بواسطة الشيخ الدكتور / محمد بن صالح الظاهري وبدأت بقطاع المقاولات إلى أن أمتد نشاطها إلي (10) فروع وشركات في مختلف النشاطات , و تشمل الإعاشة والخدمات والتشغيل و مقاولون عامون و فرع التوكيلات التجارية.`
    },
    {
      id: 3,
      title: "الرؤية والرسالة",
      content: `الرؤية: "نسعى لأن نكون الخيار الأول في المملكة العربية السعودية ومنطقة الخليج في تقديم خدمات الإعاشة، والخدمات التشغيلية، والمقاولات العامة، والتوكيلات التجارية، من خلال التميز في الجودة والابتكار والاستدامة." 
      
الرسالة: "نلتزم بتقديم أعلى مستويات الجودة والخدمة في جميع القطاعات التي نعمل بها، مع التركيز على تلبية احتياجات عملائنا، وتعزيز النمو المستدام، وتطوير شراكات قوية تقوم على الثقة والكفاءة والاحترافية."`
    }
  ];

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (id: number) => {
    setActiveTab(activeTab === id ? 0 : id);
  };

  return (
    <section className="choose_us_section">
      <h2 className="choose_us_title">ماذا تختارنا؟ نحن من ذوي الخبرة في حلول الأعمال</h2>

      <div className="tabs_container">
        {tabs.map(tab => (
          <div key={tab.id} className="tab_card">
            <button
              className={`tab_header ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.title}
              <span className={`arrow ${activeTab === tab.id ? "down" : ""}`}></span>
            </button>
            <div className={`tab_content ${activeTab === tab.id ? "open" : ""}`}>
              <p>{tab.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
