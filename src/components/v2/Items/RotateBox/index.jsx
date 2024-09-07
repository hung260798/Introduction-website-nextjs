import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { roboto } from "@/utils/fonts";

export default function RotateBox({
  icon = "fa-pie-chart",
  title = "title",
  desc = "desc",
  layout = "horizontal",
}) {
  return (
    <a
      // className="rotate-box-2 square-icon text-center wow zoomIn animated"
      className={classNames(styles.root, styles.rotateBox, roboto.className)}
      data-wow-delay="0"
      style={{
        visibility: "visible",
        animationName: "zoomIn",
      }}
      href="#"
    >
      <span className={classNames(styles.rotateBoxIcon)}>
        <i className={classNames("fa", icon, styles.fa)}></i>
      </span>
      <div className="rotate-box-info">
        <h4 className={classNames(styles.title)}>{title}</h4> {/* *title */}
        <p className={classNames(styles.desc)}>{desc}</p> {/* description */}
      </div>
    </a>
  );
}
