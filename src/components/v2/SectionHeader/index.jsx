"use client";

import React from "react";
import { roboto } from "@/utils/fonts";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useInViewPort, useObserver } from "@/hooks/viewport";

export default function SectionHeader({ title, subtitle, lightText = false }) {
  // const { isInViewPort, elemRef } = useInViewPort({ fullyIn: true });
  const { isInViewPort, elemRef } = useObserver();
  return (
    <div
      className={classNames(
        "container-xxl text-center",
        styles.root,
        roboto.className,
        isInViewPort ? classNames("animate__animated", "animate__fadeInUp") : ""
      )}
      ref={elemRef}
      style={{
        visibility: isInViewPort ? "visible" : "hidden",
      }}
    >
      <div>
        <h2
          className={classNames(styles.title, {
            [styles.lightText]: lightText,
          })}
        >
          {title}
        </h2>
        <div className={classNames(styles.divider)}></div>
        <p
          className={classNames(styles.subtitle, {
            [styles.lightText]: lightText,
          })}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
