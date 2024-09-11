
import AboutSection from "@/components/v2/Sections/About";
import ContactSection from "@/components/v2/Sections/Contact";
import HomeSection from "@/components/v2/Sections/Home";
import PostsSection from "@/components/v2/Sections/Posts";
import ServicesSection from "@/components/v2/Sections/Services";
import TechnologiesSection from "@/components/v2/Sections/Technologies";
import TeamSection from "@/components/v2/Sections/Team";
import classNames from "classnames";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={classNames(styles.main)}>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <PostsSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
