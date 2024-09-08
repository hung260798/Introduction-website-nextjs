import React from "react";
import SectionHeader from "../../Section/Header";
import styles from "./styles.module.css";
import classNames from "classnames";
import RotateBox from "@/components/v2/Items/RotateBox";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const items = [
    { icon: "fa-globe", index: 0 },
    { icon: "fa-mobile", index: 1 },
    { icon: "fa-building", index: 2 },
    { icon: "fa-handshake", index: 3 },
  ];
  return (
    <section id="services" className={classNames("text center container", "mt-4")}>
      <SectionHeader title={t("title")} subtitle={t("subtitle")} />
      <div className={classNames("row")}>
        {items.map(({ icon, index }) => (
          <div className={classNames("col-12")}>
            <RotateBox
              title={t(`items.${index}.title`)}
              desc={t(`items.${index}.description`)}
              icon={icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
