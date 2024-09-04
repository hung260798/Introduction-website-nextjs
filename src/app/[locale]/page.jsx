import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={`${styles.root}`}>
      <Contact />
      <Footer />
    </div>
  )
}
