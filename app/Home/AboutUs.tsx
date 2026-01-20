"use client";

import Image from "next/image";

export default function ParallaxAbout() {
  return (
    <section className="aboutParallax aboutParallax--rtl">

      {/* Floating Shapes */}
      <span className="aboutParallax__shape aboutParallax__shape--one"></span>
      <span className="aboutParallax__shape aboutParallax__shape--two"></span>
      <span className="aboutParallax__shape aboutParallax__shape--three"></span>

      {/* Text Content */}
      <div className="aboutParallax__content">
        <span className="aboutParallax__subtitle">اعرف أكثر عنا</span>
        <h2 className="aboutParallax__title">
          احصل على الاستشارات لتحقيق نمو أفضل للأعمال
        </h2>
        <p className="aboutParallax__text">
          مجموعة شركات الظاهري هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج،
          تأسست فى عام 1983 كفرع للمقاولات فى البداية، وطورت الشركة نشاطها إلى مجموعة متكاملة من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الان.
        </p>
        <button className="aboutParallax__btn">اتصل بنا الآن</button>
      </div>

      {/* Image */}
      <div className="aboutParallax__image">
        <Image
          src="/image/businesshome.jpg"
          alt="مجموعة الظاهري"
          fill
          style={{ objectFit: "cover" }}
        />
        <svg className="aboutParallax__border">
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="28" ry="28" />
        </svg>
      </div>

    </section>
  );
}
