"use client";

import { getDateString } from "@/utils/datetime";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useLocale } from "next-intl";

export default function PostItem({
  id,
  cover,
  title,
  content,
  postTime,
  flex = "column",
}) {
  const lang = useLocale();
  return (
    <div
      className={classNames(styles.root, flex === "column" ? "" : styles.row)}
    >
      <div className={styles.coverDiv}>
        {/* <Image src={cover} width={400} height={200} alt="post-cover" /> */}
        <img src={cover} alt="post-cover" width={400} height={200} />
      </div>
      <div className={styles.contentDiv}>
        <h4 className={styles.title}>
          <Link href={`/${lang}/listpost/${id}`}>{title}</Link>
        </h4>
        <div className={styles.postTime}>{getDateString(postTime)}</div>
      </div>
    </div>
  );
}
