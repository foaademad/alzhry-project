"use client";

import { useState } from "react";

export default function ApplySection() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setUserEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [cvName, setCvName] = useState("");

  const companyEmail = "Hala@al-dhahry-group.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `طلب التقديم على وظيفة (${jobTitle})`;
    const body = `
الاسم: ${name}
الجوال: ${phone}
البريد الإلكتروني: ${email}
اسم الوظيفة: ${jobTitle}

**تم رفع الـ CV بالموقع**
    `;

    const mailLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailLink;
  };

  return (
    <section className="apply_section fade_in">

      <div className="apply_container">
        <h2 className="apply_title">التقديم على الوظيفة</h2>

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
            <label>اسم الوظيفة</label>
            <input 
              type="text"
              required
              value={jobTitle}
              onChange={(e)=>setJobTitle(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label>اختار السيرة الذاتية</label>
            <input 
              type="file"
              onChange={(e)=> setCvName(e.target.files?.[0]?.name || "")}
            />
            <p className="cv_name">{cvName}</p>
          </div>

          <button type="submit" className="apply_btn">ارسال</button>

        </form>

        <div className="successBox" id="successBox" style={{display:"none"}}>
          تم إرسال الطلب بنجاح 🎉
        </div>
      </div>

      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>

    </section>
  );
}
