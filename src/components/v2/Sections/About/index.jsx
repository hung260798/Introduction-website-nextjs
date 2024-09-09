import React from "react";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import styles from "./styles.module.css";
import RotateBox from "../../Items/RotateBox";

export default function About() {
  const t = useTranslations("About");
  const features = [
    {
      key: 0,
    },
    {
      key: 1,
    },
    {
      key: 2,
    },
  ];
  return (
    <section id="about" className={classNames(styles.root, "pt-4 container")}>
      <div className={classNames("mt-4 mb-4")}>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </div>
      <div className={classNames("mt-4 mb-4", "row")}>
        {features.map(({ key }) => (
          <div className={classNames("col-md-4")} key={key}>
            <RotateBox
              title={t(`items.${key}.title`)}
              desc={t(`items.${key}.text`)}
              animationDelay={key * 0.3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
