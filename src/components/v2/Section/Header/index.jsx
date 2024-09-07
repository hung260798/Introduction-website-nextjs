import React from "react";
import { roboto } from "@/utils/fonts";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div
      className={classNames(
        "container-xxl text-center",
        styles.root,
        roboto.className
      )}
    >
      <div>
        <h2 className={classNames(styles.title)}>{title}</h2>
        <div className={classNames(styles.divider)}></div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

