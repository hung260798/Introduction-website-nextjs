import React from "react";
import SectionHeader from "../../SectionHeader";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import styles from "./styles.module.css";
import RotateBox from "../../Items/RotateBox";
import useNavigation from "@/hooks/navigationHook";

export default function About() {
  const t = useTranslations("About");
  const sectionRef = useNavigation();
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
  const features2 = [{ key: 3 }, { key: 4 }];
  return (
    <React.Fragment>
      <section id="about" ref={sectionRef}>
        <div className="container pt-4">
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
                  size="big"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about2" className={classNames(styles.root)}>
        <div className="container pt-4">
          <div className={classNames("mt-4 mb-4", "row")}>
            <div className="col-md-2"></div>
            {features2.map(({ key }) => (
              <div className={classNames("col-md-4")} key={key}>
                <RotateBox
                  title={t(`items.${key}.title`)}
                  desc={t(`items.${key}.text`)}
                  animationDelay={key * 0.3}
                  layout="vertical"
                  size="big"
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
