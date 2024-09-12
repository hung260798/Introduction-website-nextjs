"use client";

import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { postApi } from "@/utils/api";
import Error500 from "@/components/v2/Page/Error500";
import Loading from "@/components/v2/Loading";
import classNames from "classnames";
import { getDateString } from "@/utils/datetime";
import Link from "next/link";

export default function Page({ params }) {
  const { id } = params;
  const { data, error, isLoading } = useSWR(`${postApi}/${id}`, (...args) =>
    fetch(...args)
      .then((rawResponse) => rawResponse.json())
      .then((response) => response.data)
  );
  const fallbackImg = "/images/blogs/blog01.jpg";

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
    <div className={classNames(styles.root, "container")}>
      <div className={styles.backLink}>
        <Link href={"/en/posts"}> Back to posts</Link>
      </div>
      <div>
        <h3 className={styles.title}>{data?.title}</h3>
        <p className={styles.postTime}>
          Posted at: {getDateString(data?.createdAt)}
        </p>
      </div>
      <div className={styles.coverDiv}>
        <img
          src={data?.image ?? fallbackImg}
          width={400}
          height={200}
          alt="post cover"
          className={styles.coverImg}
        />
      </div>
      <p className={styles.content}>{data?.content}</p>
    </div>
  );
}

// export async function generateStaticParams() {
//   try {
//     let rawReponse = await fetch(`${postApi}`);
//     let response = await rawReponse.json();
//     console.log(response);
//     return response.data.map((post) => ({ locale: "en", id: `${post.id}` }));
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export const revalidate = 60;

// export const dynamicParams = true;
