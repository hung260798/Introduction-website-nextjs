import React from "react";
import styles from "./styles.module.css";
import PostItem from "../../Items/PostItem";
import SectionHeader from "../../SectionHeader";
import classNames from "classnames";
import Link from "next/link";

export default function PostsSection() {
  const posts = [
    {
      cover: "blogs/blog01.jpg",
      content:
        "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
      title: "This is Lorem ipsum heading.",
      postTime: "11/9/2024",
    },
    {
      cover: "blogs/blog01.jpg",
      content:
        "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
      title: "This is Lorem ipsum heading.",
      postTime: "11/9/2024",
    },
    {
      cover: "blogs/blog01.jpg",
      content:
        "We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.",
      title: "This is Lorem ipsum heading.",
      postTime: "11/9/2024",
    },
  ];
  return (
    <section id="posts" className={styles.root}>
      <SectionHeader title={"posts"} />
      <div className={classNames("container", styles.sectionContent)}>
        <div className="row">
          {posts.map(({ title, content, cover, postTime }, index) => (
            <div key={index} className={classNames("col col-md-4")}>
              <PostItem
                content={content}
                title={title}
                cover={"/images/" + cover}
                postTime={postTime}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerDiv}>
        <Link href={"/en/posts"}>View all posts</Link>
      </div>
    </section>
  );
}
