"use client";

import { usePosts } from "@/hooks/postHook";
import classNames from "classnames";
import { useLocale } from "next-intl";
import Link from "next/link";
import PostItem from "../../Items/PostItem";
import SectionHeader from "../../SectionHeader";
import styles from "./styles.module.css";
import Loading from "@/components/Loading";

export default function PostsSection() {
  const lang = useLocale();
  const { data, error, isLoading } = usePosts();
  const posts = data?.data;
  let innerContent = "No post available";
  if (!posts) {
    if (isLoading) innerContent = <Loading />;
    // if (error) return "Error";
    // return "No post";
  } else {
    innerContent =
      posts.length > 0 ? (
        posts
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
          )
      ) : (
        <span>No post available...</span>
      );
  }

  return (
    <section id="posts" className={styles.root}>
      <SectionHeader title={"posts"} />
      <div className={classNames("container", styles.sectionContent)}>
        <div className="row">{innerContent}</div>
      </div>
      <div className={styles.footerDiv}>
        <Link href={`/${lang}/listpost`}>View all posts</Link>
      </div>
    </section>
  );
}
