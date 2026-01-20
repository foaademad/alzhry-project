"use client";
import Image from "next/image";

export default function HiringHero() {
  return (
    <section className="hiring_hero">
      <div className="hiring_container fade_in">

        {/* النص */}
        <div className="hiring_content">
          <h2 className="hiring_title">
            التوظيف
          </h2>

          <h3 className="hiring_subtitle">
            انضم إلينا وكن جزءاً من فريقنا المتميز
          </h3>

          <p className="hiring_text">
            نسعى لتوظيف أفضل الكفاءات في بيئة عمل مبتكرة ومحفزة. إذا كنت تبحث عن
            فرصة للتطور والنمو المهني، فنحن ندعوك للانضمام إلينا والمساهمة في
            تحقيق رؤيتنا.
          </p>
        </div>

        {/* النسر */}
        <div className="hiring_image_area">
          <Image
            src="/image/carrer1.jpg" // حطي هنا صورة النسر
            alt="Eagle"
            width={450}
            height={400}
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
