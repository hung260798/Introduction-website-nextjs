import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className={`${styles.root}`}>
      <NavBar />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
