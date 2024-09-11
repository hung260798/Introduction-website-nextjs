"use client"

import classNames from "classnames";
import Image from "next/image";
import Link from 'next/link';
import React from "react";
import styles from "./styles.module.css";
import useNavigation from "@/hooks/navigationHook";
import { useTranslations } from "next-intl";

export default function Home() {
  const sectionRef = useNavigation();
  const t = useTranslations("HomePage");
  const goToContact = () => {
    window.location.hash = "contact";
  };
  return (
    <div className={styles.root} id="home" ref={sectionRef}>
      <div className={classNames(styles.contentWrap)}>
        <div className={classNames(styles.content)}>
          <div className={styles.title}>BK HIGHTECH</div>
          <div className={styles.subtitle}>{t("title")}</div>
          <div className={styles.buttonsDiv}>
            <div>
              <button className={styles.btn}>our services</button>
            </div>
            <Link href="#contact">
              <button className={styles.btn2}>get started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
