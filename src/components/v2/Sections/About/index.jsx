import React from "react";
import SectionHeader from "../../Section/Header";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import styles from "./styles.module.css";
import RotateBox from "../../Items/RotateBox";

export default function About() {
  const t = useTranslations("About");
  const features = [{}, {}, {}];
  return (
    <section className={classNames(styles.root, "pt-4 container")}>
      <div className={classNames("mt-4 mb-4")}>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      </div>
      <div className={classNames("mt-4 mb-4", "row")}>
        {features.map((_, idx) => (
          <div className={classNames("col-md-4")} key={idx}>
            <RotateBox
              title={t(`items.${idx}.title`)}
              desc={t(`items.${idx}.text`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
