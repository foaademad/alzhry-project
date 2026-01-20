"use client";
import Image from "next/image";

export default function MediaHero() {
  return (
    <section className="hiring_hero">
      <div className="hiring_container fade_in">

        {/* النص */}
        <div className="hiring_content">
          <h2 className="hiring_title">
            المركز الاعلامي 
          </h2>

          <h3 className="hiring_subtitle">
الشيخ الدكتور / محمد بن صالح الظاهري.            </h3>

          <p className="hiring_text">
            المقالات والأخبار والموارد الإعلامية المتعلقة بمجموعة شركات الظاهري. اكتشف أحدث التطورات، المبادرات، والقصص الملهمة التي تعكس رؤيتنا وقيمنا في عالم الأعمال.
          </p>
        </div>

        {/* النسر */}
        <div className="hiring_image_area">
          <Image
            src="/image/businesshome.jpg" // حطي هنا صورة النسر
            alt="Eagle"
            width={600}
            height={550}
            className="hiring_eagle"
          />
        </div>

      </div>

      {/* عناصر ديكور */}
      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>
    </section>
  );
}
