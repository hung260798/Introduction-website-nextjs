import React from "react";
import ServicesSection from "@/components/v2/Sections/Services";
import ContactSection from "@/components/v2/Sections/Contact";
import TechnologiesSection from "@/components/v2/Sections/Technologies";
import AboutSection from '@/components/v2/Sections/About'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
