"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { roboto } from "@/utils/fonts";
import "animate.css";
import {
  useInViewPort,
  isInViewPortPartially as inViewPortChecker,
  useObserver,
} from "@/hooks/viewport";

export default function RotateBox({
  icon = "fa-pie-chart",
  title = "title",
  desc = "desc",
  layout = "horizontal",
  animationDelay = 0.2,
  size = "normal"
}) {
  const animateClass = ["animate__animated", "animate__zoomIn", "visible"];
  // const elemRef = useRef(null);
  const { isInViewPort, elemRef } = useObserver();
  return (
    <div
      // className="rotate-box-2 square-icon text-center wow zoomIn animated"
      className={classNames(
        styles.root,
        styles.rotateBox,
        roboto.className,
        isInViewPort ? classNames(...animateClass) : "invisible",
        { [styles.vertical]: layout === "vertical" }
      )}
      // href="#"
      ref={elemRef}
      style={{
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div className={styles.iconWrapper}>
        <span className={classNames(styles.rotateBoxIcon, {
          [styles.big]: size === "big"
        })}>
          <i className={classNames("fa", icon, styles.fa)}></i>
        </span>
      </div>
      <div className="rotate-box-info">
        <h4 className={classNames(styles.title)}>{title}</h4> {/* *title */}
        <p className={classNames(styles.desc)}>{desc}</p> {/* description */}
      </div>
    </div>
  );
}
