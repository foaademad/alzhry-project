 "use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const companyEmail = "Hala@al-dhahry-group.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `تواصل معنا`;
    const body = `
الاسم: ${name}
الجوال: ${phone}
البريد الإلكتروني: ${email}

الرسالة:
${message}
    `;

    const mailLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailLink;
  };

  return (
    <section className="apply_section fade_in">

      <div className="apply_container">
        <h2 className="apply_title">تواصل معنا</h2>
        <p className="apply_desc">هل تحتاج إلى مساعدة؟ دعنا نتواصل معك</p>

        <form className="apply_form" onSubmit={handleSubmit}>

          <div className="form_group">
            <label>اسمك</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label>الجوال</label>
            <input 
              type="text"
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label>البريد الإلكتروني</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e)=>setUserEmail(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label>رسالتك</label>
            <textarea
              required
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              rows={5}
            ></textarea>
          </div>

          <button type="submit" className="apply_btn">ارسال</button>

        </form>
      </div>

      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>

    </section>
  );
}
