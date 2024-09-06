import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import React from "react";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={`${styles.root}`}>
      <Header />
      <Services />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  )
}
