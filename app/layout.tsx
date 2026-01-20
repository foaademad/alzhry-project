import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cairo } from "next/font/google";


import "../styles/main.css";
import "../styles/navbar.css";
import "../styles/section.css";
import "../styles/ceo.css";
import "../styles/home/aboutus.css"
import "../styles/home/working.css"
import "../styles/home/logo.css"
import "../styles/aboutCeo.css";
import "../styles/aboutCeoFinal.css"
import "../styles/BranchesSection.css";
import "../styles/ceoMemberships.css"
import "../styles/group/heroGroup.css"
import "../styles/group/aboutgroup.css"
import "../styles/group/businessCounter.css"
import "../styles/group/WhatChoose.css"
import "../styles/careers/ApplySection.css"
import "../styles/careers/HiringHero.css"
import "../styles/contact/contacthero.css"
import "../styles/contact/contactmap.css"
import "../styles/contact/contactInfo.css"
import "../styles/contact/contactSection.css"
import "../styles/branch/Branches.css"
import "../styles/branch/hero.css"
import "../styles/branch/branchContent.css"
import "../styles/branch/ServicesSection.css"
import "../styles/branch/threeSteps.css"
import "../styles/branch/VisionMission.css"
import "../styles/media/businessBlog.css"
import "../styles/home/about.css";

import Navbar from "@/components/3D/Navbar";
import Footer from "@/components/footer";

// Cairo Main Font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../public/fonts/Inter/InterVariable.woff2", weight: "100 900", style: "normal" },
    { path: "../public/fonts/Inter/InterVariable-Italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--inter",
  display: "swap",
});

const appleGaramond = localFont({
  src: [
    { path: "../public/fonts/AppleGaramond/AppleGaramond.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/AppleGaramond/AppleGaramond-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/AppleGaramond/AppleGaramond-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/AppleGaramond/AppleGaramond-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/AppleGaramond/AppleGaramond-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/AppleGaramond/AppleGaramond-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--apple-garamond",
});

export const metadata: Metadata = {
  title: "مجموعة الظاهري",
  description: "الموقع الرسمي لمجموعة الظاهري - السعودية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${cairo.variable} ${inter.variable} ${appleGaramond.variable}`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    
    </html>
  );
}
