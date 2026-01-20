"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="contact_hero">
      <div className="contact_container fade_in">

        {/* النص */}
        <div className="contact_content">
          <h2 className="contact_title">
            اتصل بنا
          </h2>

          <h3 className="contact_subtitle">
            نحن هنا لمساعدتك والإجابة على استفساراتك
          </h3>

          <p className="contact_text">
            إذا كان لديك أي أسئلة أو اقتراحات، لا تتردد في التواصل معنا عبر 
            البريد الإلكتروني أو الهاتف. فريقنا سيقوم بالرد عليك في أسرع وقت ممكن.
          </p>
        </div>

        {/* صورة أو أيقونة */}
        <div className="contact_image_area">
          <Image
            src="/image/contact2.jpeg" // حطي هنا أي صورة مناسبة لصفحة الاتصال
            alt="Contact"
            width={450}
            height={400}
            className="contact_icon"
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
