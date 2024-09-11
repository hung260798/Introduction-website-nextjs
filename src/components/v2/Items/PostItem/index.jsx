"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { getDateString } from "@/utils/datetime";
import classNames from "classnames";

export default function PostItem({
  id,
  cover,
  title,
  content,
  postTime,
  flex = "column",
  previewContent = false,
}) {
  let contentPreview = `${content}`.slice(0, 200);
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
          <Link href={`/en/posts/${id}`}>{title}</Link>
        </h4>
        <div className={styles.postTime}>{getDateString(postTime)}</div>
        {previewContent && (
          <React.Fragment>
            <p className={styles.content}>
              {contentPreview} ...
              {" "}
              <span className={styles.readMore}>
                <Link href={`/en/posts/${id}`}>Read more</Link>
              </span>
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
