"use client";

import Loading from "@/components/Loading";
import { usePost } from "@/hooks/postHook";
import Link from "next/link";
import styles from "./page.module.css";

export default function PostDetail({ params }) {
  const { id, locale } = params;
  const { data, error, isLoading } = usePost(id);
  const post = data?.data;
  if (!post) {
    if (error) throw error;
    if (isLoading) return <Loading />;
    return "This post is not existed";
  }

  const { title, content, image: cover, createdAt: postTime } = post;

  return (
    <div className="container mt-5 pt-5">
      <div className="mb-3">
        <Link href={`/${locale}/listpost`}>All posts</Link>
      </div>
      <div className="row">
        <div className="col-12 position-relative p-3 border rounded">
          <p className="position-absolute top-0 end-0 text-muted small">
            Posted at: {new Date(postTime).toLocaleString()}
          </p>
          <div className={styles.postContentTextView} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
