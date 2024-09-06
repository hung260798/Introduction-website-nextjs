"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import { raleway } from "@/utils/fonts";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("Menu");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMenu() {
    setMobileMenuOpen((state) => !state);
  }

  const items = [
    {
      href: "home",
      index: 0,
    },
    {
      href: "about",
      index: 1,
    },
    {
      href: "services",
      index: 2,
    },
    {
      href: "technologies",
      index: 3,
    },
    {
      href: "customers",
      index: 4,
    },
    {
      href: "team",
      index: 5,
    },
    {
      href: "contact",
      index: 6,
    },
  ];

  return (
    <div style={{ height: "75px" }}>
      <header className={`${styles.header}`}>
        <div className={`container-xl`}>
          <div className={`${styles.siteBranding}`}>
            <div className={`${styles.hasLogoImg}`}>
              <div className={`${styles.logoDiv}`}>
                <a href="" className={`${styles.logoLink}`}>
                  <Image src={"/images/Techno7.png"} width={469} height={111} alt="logo" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.headerRight}`}>
            <a
              href="#"
              id="nav-toggle"
              className={`${styles.navToggle}`}
              onClick={toggleMenu}
            >
              Menu
              <span></span>
            </a>
            <nav className={`${styles.mainNavigation}`}>
              <ul
                className={`${mobileMenuOpen ? styles.navbarMobile : ""} ${
                  styles.navbar
                }`}
                style={
                  mobileMenuOpen ? { height: `${innerHeight - 74}px` } : {}
                }
              >
                {items.map(({ href, index }) => (
                  <li
                    key={index}
                    className={`${styles.menuItem} ${raleway.className}`}
                  >
                    <a href={`#${href}`}>{t(`${index}`)}</a>
                  </li>
                ))}
                <li className={`${styles.menuItem} ${raleway.className}`}>
                  <a href={`#`}>EN/VI</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
