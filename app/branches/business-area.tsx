"use client";

import Image from "next/image";
import Link from "next/link";

export default function BusinessBranch() {
  return (
    <section className="branch_page">
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">الرئيسية</Link> / 
        <span>فرع الأسواق المركزية والمطاعم</span>
      </div>

      {/* Branch Header */}
      <div className="branch_header">
        <h1>فرع الأسواق المركزية والمطاعم</h1>
        <p className="branch_id">business-area</p>
      </div>

      {/* Branch Description */}
      <div className="branch_desc">
        <p>
          يُعد فرع الأسواق المركزية زهابكو من الفروع العريقة بمجموعة شركات الظاهري بل أحد أقدم الشركات في المملكة العربية السعودية، حيث تأسست في الثمانينات...
        </p>

        <h2>رؤيتنا</h2>
        <p>أن نكون قدوة في المسؤولية الاجتماعية ودعم المجتمع المحلي...</p>

        <h2>رسالتنا</h2>
        <p>نحن شركة متخصصة في إدارة وتشغيل الأسواق المركزية...</p>

        <h2>أهدافنا</h2>
        <ul>
          <li>تلبية احتياجات العملاء وتجاوز توقعاتهم</li>
          <li>توفير تجربة تسوق متميزة</li>
          <li>التوسع في مواقع استراتيجية</li>
          <li>تقديم منتجات وخدمات مبتكرة</li>
        </ul>

        <h2>قيمنا</h2>
        <ul>
          <li>توفير معلومات دقيقة وشفافة للعملاء والموردين</li>
          <li>النزاهة والشفافية في جميع تعاملاتنا</li>
          <li>تقدير مساهمات العاملين والموردين والعملاء</li>
          <li>الالتزام بتوفير بيئة عمل آمنة وصحية</li>
        </ul>
      </div>

      {/* Gallery Images */}
      <div className="branch_gallery">
        <h2>صور</h2>
        <div className="gallery_grid">
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={`/branches/business/image${i+1}.jpg`}
              alt="Branch Image"
              width={300}
              height={200}
            />
          ))}
        </div>
      </div>

      {/* Branch Features */}
      <div className="branch_features">
        <h2>مميزاتنا</h2>
        <div className="features_grid">
          <div>
            <h3>نمو الأعمال الفوري</h3>
            <p>"تحقيق تقدم سريع في نمو أعمالك معنا."</p>
          </div>
          <div>
            <h3>24/7 خدمة عالية الجودة</h3>
            <p>"خدماتنا متاحة على مدار الساعة لضمان الجودة في كل وقت."</p>
          </div>
          <div>
            <h3>خدمة العملاء سهلة</h3>
            <p>"نحن هنا لتقديم خدمة عملاء مريحة وسهلة."</p>
          </div>
          <div>
            <h3>خدمة الجودة والتكلفة</h3>
            <p>"نقدم توازنًا مثاليًا بين الجودة والتكلفة."</p>
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="branch_steps">
        <h2>حلولك بانتظارك في 3 خطوات سهلة</h2>
        <div className="steps_grid">
          <div>
            <span>01</span>
            <h3>التواصل السريع</h3>
            <p>اتصل بنا أو املأ النموذج عبر الإنترنت لتوضيح احتياجاتك</p>
          </div>
          <div>
            <span>02</span>
            <h3>التحليل والتقييم</h3>
            <p>نقوم بتحليل مشكلتك أو طلبك ونقدم لك الحل الأنسب</p>
          </div>
          <div>
            <span>03</span>
            <h3>التنفيذ والمتابعة</h3>
            <p>ننفيذ الحل بسرعة ونتابع لضمان رضاك التام</p>
          </div>
        </div>
      </div>

      {/* Contact / Help */}
      <div className="branch_contact">
        <h2>هل تحتاج إلى مساعدة؟ نحن هنا لمساعدتك</h2>
        <Link href="/contact" className="contact_btn">تواصل معنا</Link>
      </div>

    </section>
  );
}
