import Home from "@/components/Home";
import styles from "./page.module.css"
import Services from "@/components/Services";


export default function Main() {
  return (
    <div className={styles.app}>
      <Home />
      <Services />
    </div>
  );
}
