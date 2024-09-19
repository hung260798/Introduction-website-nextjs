"use client";

import Loading from "@/components/Loading";
import { usePosts } from "@/hooks/postHook";
import classNames from "classnames";
import Link from "next/link";
import styles from "./post.module.css";

export default function PostPage({ params: { locale } }) {
  const { data, error, isLoading } = usePosts();
  const posts = data?.data;

  if (!posts) {
    if (isLoading) return <Loading />;
    if (error) throw error;
    return "No post";
  }

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.innerText || "";
  };

  return (
    <div>
      <h1 className={styles.h1}>post list</h1>
      <div className="container mt-4 mb-4">
        {posts.map((post) => (
          <div key={post.id} className="row border-bottom mt-4 mb-4 py-2">
            <div className="col-sm-3">
              <img src={post.image} className="img-fluid" alt={post.title} />
            </div>
            <div className="col-sm-9">
              <h2 className={`${classNames.title} mt-2 mb-2`}>
                <Link
                  className={styles.link}
                  href={`/${locale}/listpost/${post.id}`}
                >
                  {post.title}
                </Link>
              </h2>
              <p className={styles.post_date}>Posted at: {new Date(post.createdAt).toLocaleString()}</p>
              <p>{stripHtml(post.content).slice(0, 200)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
