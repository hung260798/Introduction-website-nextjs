import React from "react";
import ServicesSection from "@/components/v2/Sections/Services";
import ContactSection from "@/components/v2/Sections/Contact";
import TechnologiesSection from "@/components/v2/Sections/Technologies";
import AboutSection from "@/components/v2/Sections/About";
import PageHeader from "@/components/v2/Sections/Header";
import HomeSection from "@/components/v2/Sections/Home"
import styles from "./page.module.css";
import classNames from "classnames";

export default function Home() {
  return (
    <div>
      <PageHeader />
      <main
        data-bs-spy="scroll"
        data-bs-target="#page-navbar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className={classNames(styles.main)}
        tabIndex={"0"}
      >
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
    </div>
  );
}
