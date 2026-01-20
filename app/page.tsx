"use client";

import Hero from "./Home/hero";
import ParallaxAbout from "./Home/AboutUs";
import AboutSection from "./Home/AboutSection";
import Section from "./Home/section";
import BranchesSection from "./Home/BranchesSection";
import ServicesSection from "@/components/branch/ServicesSection";
import ThreeSteps from "@/components/branch/ThreeSteps";
import ContactInfoSection from "./contact/ContactInfoSection";
import WhatChooseUs from "./group/WhatChooseUs";
import ContactHero from "./contact/contacthero";
import ContactCards from "./Home/contactCard";
import WorkingProcess from "./Home/WorkingProcess";
import ClientsMarquee from "./Home/logo";



export default function Home() {
  return (
    <div className="page">
      <Hero />
      <ParallaxAbout/>
       <Section />
       <ClientsMarquee/>
        <BranchesSection/>
        <WorkingProcess />
       <WhatChooseUs/>
       <ContactCards/>
       
        <ServicesSection />
        <ThreeSteps />
    </div>
  );
}
