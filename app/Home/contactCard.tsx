"use client";

import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// استيراد AOS و CSS عادي
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactCards() {
  useEffect(() => {
    // init على client فقط
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="contact_cards">
      <div className="contact_container">
        <div className="contact_card" data-aos="fade-up">
          <div className="icon">
            <FiPhoneCall size={40} />
          </div>
          <h3>اتصل بنا</h3>
          <p>966112320242+</p>
        </div>

        <div className="contact_card" data-aos="fade-up" data-aos-delay="150">
          <div className="icon">
            <FiMail size={40} />
          </div>
          <h3>راسلنا</h3>
          <p>Hala@al-dhahry-group.com</p>
        </div>

        <div className="contact_card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">
            <FiMapPin size={40} />
          </div>
          <h3>قم بزيارتنا</h3>
          <p>طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821</p>
        </div>
      </div>
    </section>
  );
}
