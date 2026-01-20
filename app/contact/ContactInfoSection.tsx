"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact_section">

      {/* Floating Decorative Shapes */}
      <span className="decor_shape shape_one"></span>
      <span className="decor_shape shape_two"></span>
      <span className="decor_shape shape_three"></span>

      <div className="contact_section_container">

        {/* Contact Cards */}
        <div className="contact_cards">
          <div className="contact_card card_fade" style={{ animationDelay: "0.2s" }}>
            <FaPhoneAlt className="card_icon" />
            <h3 className="card_title">اتصل بنا</h3>
            <p className="card_text">966112320242+</p>
          </div>

          <div className="contact_card card_fade" style={{ animationDelay: "0.4s" }}>
            <FaEnvelope className="card_icon" />
            <h3 className="card_title">راسلنا</h3>
            <p className="card_text">Hala@al-dhahry-group.com</p>
          </div>

          <div className="contact_card card_fade" style={{ animationDelay: "0.6s" }}>
            <FaMapMarkerAlt className="card_icon" />
            <h3 className="card_title">قم بزيارتنا</h3>
            <p className="card_text">
              طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821
            </p>
          </div>
        </div>

      

      </div>
    </section>
  );
}
