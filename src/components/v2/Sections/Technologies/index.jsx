import classNames from "classnames";
import React from "react";
import TechItem from "../../Items/Technology";
import styles from "./styles.module.css";
import SectionHeader from "../../Section/Header";
import { useTranslations } from "next-intl";

export default function Technologies() {
  const t = useTranslations("Technologies");
  const dir = "/images/tech-icons";
  const technologies = [
    { icon: "csharp.svg", name: ".NET" },
    { icon: "php.png", name: "PHP" },
    { icon: "ruby.svg", name: "Ruby" },
    { icon: "typescript.svg", name: "NodeJS" },
    { icon: "python.svg", name: "Python" },
    { icon: "rust.svg", name: "Rust" },
  ];
  return (
    <div className={classNames(styles.rootWrapper)}>
      <section className={classNames("container pt-4", styles.root)}>
        <div className={classNames("mt-4 mb-4")}>
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            lightText={true}
          />
        </div>
        <div className={classNames(styles.desc, "text-center")}>
          <p>{t("description.0")}</p>
          <p>{t("description.1")}</p>
          <p>{t("description.2")}</p>
        </div>
        <div className={classNames("row pt-4")}>
          {technologies.map(({ icon, name }) => (
            <div className={classNames("col-12 col-md-6 col-lg-3 mb-4")}>
              <TechItem key={name} icon={`${dir}/${icon}`} name={name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
