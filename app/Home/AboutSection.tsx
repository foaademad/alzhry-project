"use client";

import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="about_section">
      {/* Header Buttons */}
      <div className="about_header">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          <span>نظرة عامة</span>
        </button>
        <button
          className={activeTab === "ceo" ? "active" : ""}
          onClick={() => setActiveTab("ceo")}
        >
          <span>الشيخ الدكتور / محمد بن صالح الظاهري</span>
        </button>
        <button
          className={activeTab === "vision" ? "active" : ""}
          onClick={() => setActiveTab("vision")}
        >
          <span>الرؤية والرسالة</span>
        </button>
      </div>

      {/* Content Card */}
      <div className="about_card">
        {activeTab === "overview" && (
          <p className="fade_in">
            تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية
            ومنطقة الخليج. تأسست عام 1403 هـ - 1983 م بواسطة الشيخ الدكتور / محمد بن صالح الظاهري
            وبدأت بقطاع المقاولات إلى أن أمتد نشاطها إلي (10) فروع وشركات في مختلف النشاطات,
            وتشمل الإعاشة والخدمات والتشغيل ومقاولون عامون وفرع التوكيلات التجارية.
          </p>
        )}
        {activeTab === "ceo" && (
          <p className="fade_in">
            الشيخ الدكتور / محمد بن صالح الظاهري صاحب و رئيس مجلس الإدارة من الوجوه الاقتصادية
            والاجتماعية البارزة في المملكة العربية السعودية و الخليج ومن الرواد الذين ساهموا في
            إنشاء البنية التحتية في المملكة في الثمانينات وقد كان له دورا بارزا في التنمية الاقتصادية.
          </p>
        )}
        {activeTab === "vision" && (
          <p className="fade_in">
            <strong>الرؤية:</strong> نسعى لأن نكون الخيار الأول في المملكة العربية السعودية
            ومنطقة الخليج في تقديم خدمات الإعاشة، والخدمات التشغيلية، والمقاولات العامة،
            والتوكيلات التجارية، من خلال التميز في الجودة والابتكار والاستدامة.
            <br />
            <strong>الرسالة:</strong> نلتزم بتقديم أعلى مستويات الجودة والخدمة في جميع القطاعات
            التي نعمل بها، مع التركيز على تلبية احتياجات عملائنا، وتعزيز النمو المستدام،
            وتطوير شراكات قوية تقوم على الثقة والكفاءة والاحترافية.
          </p>
        )}
      </div>
    </section>
  );
}
