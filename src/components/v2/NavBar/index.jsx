"use client";

import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import ctx from "@/context/navigation";

export default function NavBar() {
  const items = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];
  const logo = "/images/Techno7.png";
  const [showingVertMenu, setShowingVertMenu] = useState(false);
  const { currentPos, dispatch } = useContext(ctx);
  const toggle = (e) => {
    setShowingVertMenu((prev) => !prev);
  };
  const renderItems = items.map(({ href, name }) => (
    <li key={href}>
      <Link
        href={href}
        className={classNames({ [styles.current]: href === currentPos.href })}
        onClick={(e) => setShowingVertMenu(false)}
      >
        {name}
      </Link>
    </li>
  ));

  useEffect(() => {
    console.log(currentPos);
  }, [currentPos]);

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
          height: showingVertMenu ? `${items.length * 50}px` : 0,
        }}
      >
        <div className={classNames(styles.vertMenu)}>
          <ul>{renderItems}</ul>
        </div>
      </div>
    </React.Fragment>
  );
}
