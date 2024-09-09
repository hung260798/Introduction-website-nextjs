import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.root} id="home">
      <div className={classNames(styles.contentWrap)}>
        <div className={classNames(styles.content)}>
          <div className={styles.title}>
            BKHIGHTECH
          </div>
          <div>
            <button className={styles.btn}>our services</button>
            <button className={styles.btn2}>get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
