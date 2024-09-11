"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function PostItem({
  id,
  cover,
  title,
  content,
  postTime,
  style,
}) {
  let contentPreview = `${content}`.slice(0, 200)
  return (
    <div className={styles.root}>
      <div className={styles.coverDiv}>
        <Image src={cover} width={400} height={200} alt="post-cover" />
      </div>
      <div className={styles.contentDiv}>
        <h4 className={styles.title}>
          <Link href={`/en/posts/${id}`}>{title}</Link>
        </h4>
        <div className={styles.postTime}>{postTime}</div>
        {/* <p className={styles.content}>{contentPreview}...</p>
        <div className={styles.readMore}>
          <Link href={`/en/posts/${id}`}>Read more</Link>
        </div> */}
      </div>
    </div>
  );
}
