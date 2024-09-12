"use client";

import classNames from "classnames";
import React from "react";
import TechItem from "../../Items/Technology";
import styles from "./styles.module.css";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import { useObserver } from "@/hooks/viewport";
import useNavigation from "@/hooks/navigationHook";

export default function Technologies() {
  const t = useTranslations("Technologies");
  const sectionRef = useNavigation();
  const dir = "/images/techicons";
  const delayGap = 0.2;
  const animateClass = [
    "animate__animated",
    "animate__fadeIn",
    "animate__slow",
    "visible",
  ];
  const { isInViewPort, elemRef } = useObserver();
  const technologies = {
    backend: [
      { icon: "csharp.svg", name: ".NET", key: 0 },
      { icon: "php.png", name: "PHP", key: 1 },
      { icon: "ruby.svg", name: "Ruby", key: 2 },
      { icon: "typescript.svg", name: "NodeJS", key: 3 },
      { icon: "python.svg", name: "Python", key: 4 },
      { icon: "rust.svg", name: "Rust", key: 5 },
    ],
    frontend: [
      { icon: "angular.svg", name: "Angular", key: 0 },
      { icon: "react.svg", name: "ReactJS", key: 1 },
      { icon: "redux.svg", name: "Redux", key: 2 },
      { icon: "vuejs.svg", name: "VueJS", key: 3 },
    ],
  };
  return (
    <section
      id="technologies"
      className={classNames(styles.rootWrapper)}
      ref={sectionRef}
    >
      <div className={classNames("container pt-4", styles.root)}>
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
          <p>{t("description.0")}</p>
          <p>{t("description.1")}</p>
          <p>{t("description.2")}</p>
        </div>
        <div className={classNames("row pt-4")}>
          <h5 className={styles.techListTitle}>BACKEND</h5>
          {technologies.backend.map(({ icon, name, key }) => (
            <div
              key={key}
              className={classNames("col-12 col-md-6 col-lg-3 mb-4")}
            >
              <TechItem
                icon={`${dir}/languages/${icon}`}
                name={name}
                delay={delayGap * key}
              />
            </div>
          ))}
        </div>
        <div className={classNames("row pt-4")}>
          <h5 className={styles.techListTitle}>FRONTEND</h5>
          {technologies.frontend.map(({ icon, name, key }) => (
            <div
              key={key}
              className={classNames("col-12 col-md-6 col-lg-3 mb-4")}
            >
              <TechItem
                icon={`${dir}/frameworks/${icon}`}
                name={name}
                delay={delayGap * key}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
