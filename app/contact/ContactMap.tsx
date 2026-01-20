"use client";
import React from "react";

export default function ContactMap() {
  return (
    <section className="contact_map_section">
      <h2 className="map_title">موقعنا</h2>
      <p className="map_address">
        طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821، المملكة العربية السعودية
      </p>

      <div className="map_container">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.215856754245!2d46.76231271501297!3d24.828870284036547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03ff6bb1a7b1%3A0x7f6f3b0c4d8e9b34!2sAl-Dhaheri%20Group!5e0!3m2!1sar!2ssa!4v1705201700000!5m2!1sar!2ssa"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen  // ✅ صح
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Al-Dhaheri Group Map"
/>

      </div>
    </section>
  );
}
