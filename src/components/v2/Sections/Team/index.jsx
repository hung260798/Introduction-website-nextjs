"use client";

import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import { useInViewPort } from "@/hooks/viewport";
import useNavigation from "@/hooks/navigationHook";
import Image from "next/image";

export default function Team() {
  const t = useTranslations("Team");
  const sectionRef = useNavigation();

  const animateClass = [
    "animate__animated",
    "animate__fadeIn",
    "animate__slow",
    "visible",
  ];
  const { isInViewPort, elemRef } = useInViewPort({ fullyIn: true });
  const teams = [
    {
      icon: "/images/members/an-trinh.png",
      name: "AN TRINH",
      position: "SENIOR DEVELOPER",
      key: 0,
    },
    {
      icon: "/images/members/dung-nguyen.png",
      name: "DUNG NGUYEN",
      position: "PROJECT MANAGER",
      key: 1,
    },
    {
      icon: "/images/members/hoang-nguyen.png",
      name: "HOANG NGUYEN",
      position: "SENIOR DEVELOPER",
      key: 2,
    },
    {
      icon: "/images/members/tram-huynh.png",
      name: "TRAM HUYNH",
      position: "PROJECT MANAGER",
      key: 3,
    },
  ];
  return (
    <section
      id="team"
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
          <div className={styles.desc}>
            <p>{t("description.0")}</p>
            <p>{t("description.1")}</p>
          </div>
        </div>

        <div
          className={classNames("mt-4 mb-4", "row", "justify-content-center")}
        >
          {teams.map((team) => (
            <div
              key={team.key}
              ref={elemRef}
              className={classNames("text-center col-sm-6 col-md-4 col-lg-2")}
            >
              <Image
                className={styles.image}
                src={team.icon}
                alt={team.name}
                width={480}
                height={300}
                layout="intrinsic"
              />
              <h5 className={styles.h5}>{team.name}</h5>
              <hr className={styles.hr} />
              <h6 className={styles.h6}>{team.position}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
