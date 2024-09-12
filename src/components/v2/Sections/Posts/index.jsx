"use client";

import React from "react";
import styles from "./styles.module.css";
import PostItem from "../../Items/PostItem";
import SectionHeader from "../../SectionHeader";
import classNames from "classnames";
import Link from "next/link";
import { postApi } from "@/utils/api";
import useSWR from "swr";
import Loading from "../../Loading";
import { useLocale } from "next-intl";

export default function PostsSection() {
  const lang = useLocale();
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(postApi, (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((response) => response.data)
  );

  const errorUi = <span>No post available.</span>;

  let renderUi = null;
  if (isLoading) {
    renderUi = <Loading />;
  } else if (error) {
    renderUi = errorUi;
  } else if (!posts) {
    renderUi = errorUi;
  } else {
    if (posts.length === undefined || posts.length === 0) {
      renderUi = <span>No post available.</span>;
    } else {
      renderUi = posts
        .filter((post, index) => index < 3)
        .map(
          (
            { title, content, image: cover, createdAt: postTime, id },
            index
          ) => (
            <div key={id} className={classNames("col-12 col-md-4")}>
              <PostItem
                id={id}
                content={content}
                title={title}
                cover={cover}
                postTime={postTime}
              />
            </div>
          )
        );
    }
  }

  return (
    <section id="posts" className={styles.root}>
      <SectionHeader title={"posts"} />
      <div className={classNames("container", styles.sectionContent)}>
        <div className="row">{renderUi}</div>
      </div>
      <div className={styles.footerDiv}>
        <Link href={`/${lang}/posts`}>View all posts</Link>
      </div>
    </section>
  );
}
