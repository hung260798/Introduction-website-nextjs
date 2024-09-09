"use client";

import classNames from "classnames";
import React from "react";
import TechItem from "../../Items/Technology";
import styles from "./styles.module.css";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import { useInViewPort } from "@/hooks/viewport";

export default function Technologies() {
  const t = useTranslations("Technologies");
  const dir = "/images/tech-icons";
  const animateClass = [
    "animate__animated",
    "animate__fadeIn",
    "animate__slow",
    "visible",
  ];
  const { isInViewPort, elemRef } = useInViewPort({ fullyIn: true });
  const technologies = [
    { icon: "csharp.svg", name: ".NET", key: 0 },
    { icon: "php.png", name: "PHP", key: 1 },
    { icon: "ruby.svg", name: "Ruby", key: 2 },
    { icon: "typescript.svg", name: "NodeJS", key: 3 },
    { icon: "python.svg", name: "Python", key: 4 },
    { icon: "rust.svg", name: "Rust", key: 5 },
  ];
  return (
    <section id="technologies" className={classNames(styles.rootWrapper)}>
      <div className={classNames("container pt-4", styles.root)}>
        <div className={classNames("mt-4 mb-4")}>
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            lightText={true}
          />
        </div>
        <div
          className={classNames(
            styles.desc,
            "text-center",
            isInViewPort ? classNames(...animateClass) : "invisible"
          )}
          ref={elemRef}
        >
          <p>{t("description.0")}</p>
          <p>{t("description.1")}</p>
          <p>{t("description.2")}</p>
        </div>
        <div className={classNames("row pt-4")}>
          {technologies.map(({ icon, name, key }) => (
            <div
              key={key}
              className={classNames("col-12 col-md-6 col-lg-3 mb-4")}
            >
              <TechItem icon={`${dir}/${icon}`} name={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
