"use client";

import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { inter } from "@/utils/fonts";
import { useInViewPort } from "@/hooks/viewport";

export default function TechItem({ icon, name }) {
  const { isInViewPort, elemRef } = useInViewPort({ fullyIn: false });
  return (
    <div
      className={classNames(
        styles.root,
        inter.className,
        isInViewPort
          ? classNames(
              "animate__animated",
              "animate__slideInLeft",
              "animate__slow"
            )
          : ""
      )}
      ref={elemRef}
    >
      <span>
        <img src={icon} alt="icon" className={classNames(styles.techIcon)} />
      </span>
      <div className={classNames(styles.techName)}>{name}</div>
    </div>
  );
}
