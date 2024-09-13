"use client";

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import { useInViewPort } from "@/hooks/viewportHook";
import useNavigation from "@/hooks/navigationHook";

export default function Customers() {
  const t = useTranslations("Customers");
  const sectionRef = useNavigation();
  const customers = [
    {
      img: "./images/customers/dut-logo.png",
    },
    {
      img: "./images/customers/sdc-logo.png",
    },
    {
      img: "./images/customers/logo_bizverse2.png",
    },
    {
      img: "./images/customers/logo_hadibeauty.png",
    },
    {
      img: "./images/customers/Logo-VietinBank.png",
    },
  ];
  const { isInViewPort, elemRef } = useInViewPort({ fullyIn: true });
  const animateClass = [
    "animate__animated",
    "animate__fadeIn",
    "animate__slow",
    "visible",
  ];
  return (
    <section
      id="customers"
      className={classNames("text center container", "pt-4", styles.background)}
      ref={sectionRef}
    >
      <div className={classNames("mt-4 mb-4", styles.title)}>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </div>

      <div
        className={classNames(
          styles.desc,
          "text-center",
          isInViewPort ? classNames(...animateClass) : "invisible"
        )}
        ref={elemRef}
      >
        <div className={styles.desc}>
          <p>{t("description")}</p>
        </div>
      </div>

      <div className={classNames("mt-4 mb-4", "row", "justify-content-center")}>
        {customers.map((customer, index) => (
          <div key={index} className={classNames("col-sm-6 col-md-4 col-lg-2")}>
            <div className={styles.customer}>
              <img src={customer.img} alt="customer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
