"use client";

import React from "react";
import PostItem from "@/components/v2/Items/PostItem";
import { postApi } from "@/utils/api";
import styles from "./page.module.css";
import Error500 from "@/components/v2/Page/Error500";
import useSWR from "swr";
import Loading from "@/components/v2/Loading";
import SectionHeader from "@/components/v2/SectionHeader";

export default function Page() {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(postApi, (...args) =>
    fetch(...args)
      .then((res) => res.json())
      .then((response) => response.data)
  );


  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <Error500 />
      </div>
    );
  }

  return (
    <div className={styles.root} id="home">
      <div className={"container"}>
        <div className={styles.container}>
          <SectionHeader title={"posts"} />
          <ul>
            {posts.map(
              ({ id, title, content, image: cover, createdAt: postTime }) => (
                <li key={id}>
                  <PostItem
                    id={id}
                    cover={cover}
                    content={content}
                    title={title}
                    postTime={postTime}
                    flex="row"
                    previewContent
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
