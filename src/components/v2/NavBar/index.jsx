"use client";

import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import ctx from "@/context/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function NavBar() {
  const t = useTranslations("Menu");
  const lang = useLocale();
  const items = [
    { name: 0, href: "/#home" },
    { name: 1, href: "/#about" },
    { name: 2, href: "/#services" },
    { name: 3, href: "/#technologies" },
    { name: 4, href: "/#customers" },
    { name: 5, href: "/#team"},
    { name: 6, href: "/#contact" },
  ];
  const logo = "/images/Techno7.png";
  const [showingVertMenu, setShowingVertMenu] = useState(false);
  const { currentPos, dispatch } = useContext(ctx);
  const toggle = (e) => {
    setShowingVertMenu((prev) => !prev);
  };
  const imgDir = "/images";
  const renderItems = items.map(({ href, name }) => (
    <li key={href}>
      <Link
        href={href}
        className={classNames({ [styles.current]: href === currentPos.href })}
        onClick={(e) => setShowingVertMenu(false)}
      >
        {t(`${name}`)}
      </Link>
    </li>
  ));
  renderItems.push(
    <li key={`#envi`}>
      <Link href={`/${lang === "en" ? "vi" : "en"}`}>
        <span className={styles.flag}>
          <Image
            width={18}
            height={12}
            alt="language"
            src={`${imgDir}/${lang === "en" ? "vi.png" : "en_US.png"}`}
          />
        </span>
        {lang === "en" ? "vi" : "en"}
      </Link>
    </li>
  );

  useEffect(() => {
    if (!window) {
      return;
    }
    function handlerResize() {
      if (innerWidth > 900) {
        setShowingVertMenu(false);
        console.log("view width greater than");
      }
    }
    window.addEventListener("resize", handlerResize);
    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.bg}>
        <div className={styles.root}>
          <span>
            <Link href={"/"} className={styles.logoLink}>
              <Image alt="logo" src={logo} width={150} height={36} />
            </Link>
          </span>
          <nav className={styles.hori}>
            <ul>{renderItems}</ul>
          </nav>
          <div className={styles.navToggler} onClick={toggle}>
            <div className={styles.centerdiv}>
              <span className={styles.iconBar}></span>
              <span className={styles.iconBar}></span>
              <span className={styles.iconBar}></span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(styles.bg, styles.second, {
          [styles.show]: showingVertMenu,
        })}
        style={{
          lineHeight: "20px",
          height: showingVertMenu ? `${renderItems.length * 50 + 20}px` : 0,
        }}
      >
        <div className={classNames(styles.vertMenu)}>
          <ul>{renderItems}</ul>
        </div>
      </div>
    </React.Fragment>
  );
}
