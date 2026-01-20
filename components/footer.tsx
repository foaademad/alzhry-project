"use client";

import React from "react";
import "../styles/footer.css"; // استدعاء الـCSS عادي

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* قسم عمل معنا */}
        <div className="footer-section">
          <h3>اعمل معنا؟</h3>
          <p>مجموعة شركات الظاهرى هى احدى الشركات الرائدة فى المملكة العربية السعودية و منطقة الخليج</p>
        </div>

        {/* قسم أهم فروعنا */}
        <div className="footer-section">
          <h3>أهم فروعنا</h3>
          <ul>
            <li>فرع الأسواق المركزية والمطاعم</li>
            <li>فرع المواد الغذائية والإعاشة وخدمات التشغيل</li>
            <li>فرع وجار الخليج لمعدات المطابخ</li>
            <li>فرع المقاولات العامة</li>
            <li>فرع القعقاع للخدمات الأمنية</li>
          </ul>
        </div>

        {/* قسم تواصل معنا */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p>اتصل بنا: <a href="tel:+966112320242">966112320242+</a></p>
          <p>ايميل: <a href="mailto:Hala@al-dhahry-group.com">Hala@al-dhahry-group.com</a></p>
          <p>موقعنا: طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>شركات الظاهرى - حقوق الطبع والنشر 2025. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
