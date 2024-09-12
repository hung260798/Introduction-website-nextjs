"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useNavigation from "@/hooks/navigationHook";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const sectionRef = useNavigation();
  const t = useTranslations("HomePage");
  const lang = useLocale();
  const goToContact = () => {
    window.location.hash = "contact";
  };
  const slides = [
    {
      bgImage: "/images/home/home1-medium.jpg",
      color: "#302158",
    },
    {
      bgImage: "/images/home/home3-medium.jpg",
      color: "#fff",
    },
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
    <div className={styles.root} id="home" ref={sectionRef}>
      <div className={classNames(styles.contentWrapper)}>
        <div className={classNames(styles.content)}>
          <div style={{ color: slides[background % slides.length].color }}>
            <div className={styles.title}>BKHIGHTECH</div>
            <div className={styles.subtitle}>{t("title")}</div>
          </div>
          <div className={styles.buttonsDiv}>
            <div>
              <Link className={styles.btnBlank} href={`/${lang}/#services`}>
                our services
              </Link>
            </div>
            <div>
              <Link className={styles.btnBlank} href={`/${lang}/#contact`}>
                get started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        {slides.map(({ bgImage }, idx) => (
          <img
            src={bgImage}
            alt=""
            key={bgImage}
            className={classNames({
              [styles.show]: background % slides.length === idx,
            })}
          />
        ))}
      </div>
    </div>
  );
}
