import Home from "@/components/Home";
import styles from "./page.module.css"
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
// import VideoBackground from "@/components/VideoBackground";


export default function Main() {
  return (
    <div className={styles.app}>
      {/* <Home /> */}
      <Services />
      <Technologies />
    </div>
  );
}
