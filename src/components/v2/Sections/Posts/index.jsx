import React from "react";
import styles from "./styles.module.css";
import PostItem from "../../Items/PostItem";
import SectionHeader from "../../SectionHeader";
import classNames from "classnames";
import Link from "next/link";
import { postApi } from "@/utils/api";

export default async function PostsSection() {
  // const posts = [
  //   {
  //     id: 1,
  //     cover: "blogs/blog01.jpg",
  //     content:
  //       "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
  //     title: "This is Lorem ipsum heading.",
  //     postTime: "11/9/2024",
  //   },
  //   {
  //     id: 2,
  //     cover: "blogs/blog01.jpg",
  //     content:
  //       "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
  //     title: "This is Lorem ipsum heading.",
  //     postTime: "11/9/2024",
  //   },
  //   {
  //     id: 3,
  //     cover: "blogs/blog01.jpg",
  //     content:
  //       "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
  //     title: "This is Lorem ipsum heading.",
  //     postTime: "11/9/2024",
  //   },
  // ];

  let rawReponse = await fetch(`${postApi}`);
  let response = await rawReponse.json();
  const posts = response.data;

  return (
    <section id="posts" className={styles.root}>
      <SectionHeader title={"posts"} />
      <div className={classNames("container", styles.sectionContent)}>
        <div className="row">
          {posts
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
            )}
        </div>
      </div>
      <div className={styles.footerDiv}>
        <Link href={"/en/posts"}>View all posts</Link>
      </div>
    </section>
  );
}
