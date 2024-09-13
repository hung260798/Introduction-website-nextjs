
import AboutSection from "@/components/Sections/About";
import ContactSection from "@/components/Sections/Contact";
import HomeSection from "@/components/Sections/Home";
import PostsSection from "@/components/Sections/Posts";
import ServicesSection from "@/components/Sections/Services";
import TechnologiesSection from "@/components/Sections/Technologies";
import VideoBackgroundSection from "@/components/VideoBackground";
import TeamSection from "@/components/Sections/Team";
import CustomerSection from "@/components/Sections/Customers";
import classNames from "classnames";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={classNames(styles.main)}>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <CustomerSection />
      <PostsSection />
      <VideoBackgroundSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
