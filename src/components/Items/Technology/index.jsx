"use client";

import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { inter } from "@/utils/fonts";
import {  useObserver } from "@/hooks/viewportHook";

export default function TechItem({ icon, name, delay = 0.0 }) {
  const { isInViewPort, elemRef } = useObserver();
  return (
    <div
      className={classNames(
        styles.root,
        inter.className,
        isInViewPort
          ? classNames(
              "animate__animated",
              "animate__slideInLeft",
            )
          : ""
      )}
      ref={elemRef}
      style={{
        visibility: isInViewPort ? "visible" : "hidden",
      }}
    >
      <span>
        <img src={icon} alt="icon" className={classNames(styles.techIcon)} />
      </span>
      <div className={classNames(styles.techName)}>{name}</div>
    </div>
  );
}
