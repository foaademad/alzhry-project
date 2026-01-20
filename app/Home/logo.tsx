 "use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  "/image/logo/logo.png",
  "/image/logo/logo2.png",
  "/image/logo/logo1.png",
  "/image/logo/logo3.png",
  "/image/logo/logo4.png",
  "/image/logo/logo5.png",
  "/image/logo/logo6.png",
  "/image/logo/logo7.png",
  "/image/logo/logo8.png",
  "/image/logo/logo10.png",
  "/image/logo/logo11.png",
  "/image/logo/logo12.png",
  "/image/logo/logo14.png",
  "/image/logo/logo13.png",
  "/image/logo/logo15.png",
  "/image/logo/logo16.png",
];

export default function ClientsMarquee() {
  return (
    <section className="clients_section">
   
      <div className="clients_marquee">
        <div className="clients_track">
          {clientLogos.map((logo, index) => (
            <div key={index} className="client_logo">
              <Image src={logo} alt={`Client ${index}`} width={150} height={80} />
            </div>
          ))}
          {/* نكرر اللوجوه لضمان loop سلسة */}
          {clientLogos.map((logo, index) => (
            <div key={index + clientLogos.length} className="client_logo">
              <Image src={logo} alt={`Client ${index}`} width={150} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
