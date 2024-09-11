"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function PostItem({ cover, title, content, postTime, style }) {
  return (
    <div className={styles.root}>
      <div className={styles.coverDiv}>
        <Image src={cover} width={400} height={200} alt="post-cover" />
      </div>
      <div className={styles.contentDiv}>
        <h4 className={styles.title}>
          <Link href="#">{title}</Link>
        </h4>
        <div className={styles.postTime}>{postTime}</div>
        <p className={styles.content}>{content}...</p>
        <div className={styles.readMore}>
          <Link href={"#"}>Read more</Link>
        </div>
      </div>
    </div>
  );
}
