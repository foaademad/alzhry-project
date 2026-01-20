"use client";
import Image from "next/image";

export default function AboutGroupHero() {
  return (
    <section className="ceo_hero">
      <div className="ceo_container fade_in">

        <div className="ceo_content">
          <h2 className="ceo_title">
           مجموعة شركات الظاهرى
          </h2>

          <h3 className="ceo_name">
            الشيخ الدكتور / محمد بن صالح الظاهري
          </h3>

          <p className="ceo_text">
            تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج

          </p>
        </div>

        <div className="ceo_image_area">
          <Image
            src="/image/group-hero.png"
            alt="CEO Image"
            width={400}
            height={400}
            className="ceo_image"
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
