"use client";

import React from "react";
import classNames from "classnames";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const items = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames("container-fluid")}>
        <div className={classNames("position-relative")}>
          <div
            className={classNames(
              "d-block d-lg-none",
              styles.togglerBtnWrapper
            )}
          >
            <nav
              id="page-navbar"
              className={classNames(styles.menu, "navbar navbar-expand-lg")}
            >
              <span className={classNames("navbar-brand")}>
                <Image src={"/images/Techno7.png"} width={150} height={36} />
              </span>
              <button
                className={classNames("navbar-toggler", styles.navToggler)}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className={classNames("navbar-toggler-icon")}></span>
              </button>
              <div
                className={classNames("collapse navbar-collapse")}
                id="navbarToggler"
              >
                <ul className={classNames("navbar-nav pt-2", styles.navbarNav)}>
                  {items.map(({ href, name }, idx) => (
                    <li
                      key={idx}
                      className={classNames(styles.navbarItem, "navbar-item")}
                    >
                      <a
                        className={classNames(styles.link, "nav-link")}
                        href={href}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <div className={classNames("row d-none d-lg-flex")}>
            <div className={classNames("col-4")}>
              <Image src={"/images/Techno7.png"} width={150} height={36} />
            </div>
            <div className={classNames("col-8")}>
              <ul className={classNames("row")}>
                {items.map(({ name, href }) => (
                  <li key={href} className={classNames("col pt-4 pb-4",styles.navbarItem)}>
                    <Link href={href} className={classNames("p-0", styles.navItem)}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
