"use client";

import React, { useReducer } from "react";
import ServicesSection from "@/components/v2/Sections/Services";
import ContactSection from "@/components/v2/Sections/Contact";
import TechnologiesSection from "@/components/v2/Sections/Technologies";
import AboutSection from "@/components/v2/Sections/About";
import PageHeader from "@/components/v2/Sections/Header";
import HomeSection from "@/components/v2/Sections/Home";
import styles from "./page.module.css";
import classNames from "classnames";
import ctx from "@/context/navigation";
import { currentPosition, reducer } from "@/reducers/positionReducer";
import Footer from "@/components/v2/Footer";

export default function Home() {
  const [currentPos, dispatch] = useReducer(reducer, currentPosition);
  return (
    <ctx.Provider value={{ currentPos, dispatch }}>
      <div>
        <PageHeader />
        <main
          className={classNames(styles.main)}
        >
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <TechnologiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ctx.Provider>
  );
}
