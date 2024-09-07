import ServicesSection from "@/components/v2/Sections/Services";
import ContactSection from "@/components/v2/Sections/Contact";
import TechnologiesSection from "@/components/v2/Sections/Technologies";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <ServicesSection />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
