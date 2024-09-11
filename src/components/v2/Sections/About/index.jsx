"use client"

import React from "react";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import styles from "./styles.module.css";
import RotateBox from "../../Items/RotateBox";
import useNavigation from "@/hooks/navigationHook";
import { FaLightbulb, FaChartLine, FaRocket } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { TbTargetArrow } from "react-icons/tb";

export default function About() {
  const t = useTranslations("About");
  const sectionRef = useNavigation();
  const features = [
    {
      key: 0,
      icon: <FaLightbulb />,
    },
    {
      key: 1,
      icon: <FcCustomerSupport />,
    },
    {
      key: 2,
      icon: <FaChartLine />,
    },
  ];
  const features2 = [
    { key: 3, icon: <FaRocket /> },
    { key: 4, icon: <TbTargetArrow /> },
  ];
  return (
    <React.Fragment>
      <section id="about" ref={sectionRef} >
        <div className={`container pt-4 ${styles.aboutContainer}`}>
          <div className={classNames("mt-4 mb-4")}>
            <SectionHeader title={t("title")} subtitle={t("subtitle")} />
          </div>
          <div className={classNames("mt-4 mb-4", "row", `${styles.row1Wrapper}`)}>
            {features.map(({ key, icon }) => (
              <div className={classNames("col-12 col-sm-6 col-md-4")} key={key}>
                <RotateBox
                  title={t(`items.${key}.title`)}
                  desc={t(`items.${key}.text`)}
                  animationDelay={key * 0.3}
                  size="big"
                  icon={icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about2" className={classNames(styles.root)}>
        <div className={`container pt-4 ${styles.about2Container}`}>
          <div className={classNames("mt-4 mb-4", "row")}>
            <div className="col-md-2"></div>
            {features2.map(({ key, icon }) => (
              <div className={classNames("col-md-4")} key={key}>
                <RotateBox
                  title={t(`items.${key}.title`)}
                  desc={t(`items.${key}.text`)}
                  animationDelay={key * 0.3}
                  layout="vertical"
                  size="big"
                  icon={icon}
                />
              </div>
            ))}
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
