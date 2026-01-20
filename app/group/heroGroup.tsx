"use client";

import React from "react";

export default function HeroGroup() {
  return (
    <section className="hero_group">
      <div className="hero_container">
        {/* المحتوى النصي */}
        <div className="hero_content">
          <h1 className="hero_title fade_slide">
            مجموعة شركات الظاهرى
          </h1>
          <div className="underline"></div>
          <p className="hero_subtitle fade_slide delay1">
            تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج
          </p>
          <button className="cta_btn fade_slide delay2">
            اكتشف المزيد
          </button>
        </div>

        {/* الصورة مع إطار متحرك */}
        <div className="hero_image_area fade_slide delay2">
          <div className="animated-border">
            <img 
              src="/image/group-hero.png" // ضع هنا رابط الصورة الصحيح
              alt="مجموعة شركات الظاهري" 
              className="hero_image"
            />
          </div>
        </div>

        {/* أشكال عائمة */}
        <div className="hero_shapes">
          <div className="shape s1"></div>
          <div className="shape s2"></div>
          <div className="shape s3"></div>
        </div>
      </div>
    </section>
  );
}
