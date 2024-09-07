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
    <section id="services-section" className={classNames("text center container")}>
      <SectionHeader title={"Services"} subtitle={"what we really know how"} />
      <div className={classNames("row")}>
        {items.map(({ icon, index }) => (
          <div className={classNames("col-lg-6 col-12")}>
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
