"use client";
import React from "react";
import Image from "next/image";
import "../../styles/section.css"; // تأكدي إنك ضيفتي الكود الجاي هنا

export default function Section() {
  return (
    <section className="section_area">
      {/* عناصر الخلفية العائمة */}
      <span className="float_shape shape1"></span>
      <span className="float_shape shape2"></span>
      <span className="float_shape shape3"></span>

      <div className="section_container">
        {/* CONTENT */}
        <div className="section_content fade_in">
          <h2 className="section_title">
            نحن نركز على الحصول على أداء ممتاز
          </h2>

          <p className="section_sub">
            مبيعات سريعة النمو – خدمات عالية الجودة 24/7 – أعضاء خبراء لخدمة عملائنا لنقدم أفضل أداء ممكن.
          </p>

          <ul className="features_list">
            <li className="fade_item">🚀 مبيعات سريعة النمو</li>
            <li className="fade_item">⭐ خدمات عالية الجودة 24/7</li>
            <li className="fade_item">👨‍💼 الأعضاء الخبراء</li>
            <li className="fade_item">🏆 خدمات ذات جودة عالية</li>
          </ul>

          <div className="support_box fade_in">
            <h3>📞 فريق الدعم متواجد 24/7</h3>
            <a href="tel:+966112320242">+966112320242</a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="section_image fade_in">
          <div className="image_layer layer1">
            <Image src="/image/bus2.jpeg" fill alt="Layer 1" priority />
          </div>
          <div className="image_layer layer2">
            <Image src="/image/bus3.jpeg" fill alt="Layer 2" priority />
          </div>
           <div className="image_layer layer3">
            <Image src="/image/contact2.jpeg" fill alt="Layer 3" priority />
          </div>
            
            
         
        </div>
      </div>
    </section>
  );
}
