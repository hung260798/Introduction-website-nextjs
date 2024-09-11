"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useNavigation from "@/hooks/navigationHook";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const sectionRef = useNavigation();
  const t = useTranslations("HomePage");
  const backgroundsImages = [
    "/images/home/home1-medium.jpg",
    "/images/home/home3-medium.jpg",
  ];
  const [background, setBackground] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((idx) => idx + 1);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={styles.root}
      id="home"
      style={{
        backgroundImage: `url("${
          backgroundsImages[background % backgroundsImages.length]
        }")`,
      }}
      ref={sectionRef}
    >
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.content)}>
          <div className={styles.title}>BKHIGHTECH</div>
          <div className={styles.subtitle}>{t("title")}</div>
          <div className={styles.buttonsDiv}>
            <div>
              <Link className={styles.btnBlank} href={"/#services"}>
                our services
              </Link>
            </div>
            <div>
              <Link className={styles.btnBlank} href={"/#contact"}>
                get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
