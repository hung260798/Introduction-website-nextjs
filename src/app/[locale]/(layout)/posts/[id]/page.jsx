import Image from "next/image";
import styles from "./page.module.css";
import { postApi } from "@/utils/api";

export default async function Page({ params }) {
  const { id } = params;
  let rawResponse = await fetch(`${postApi}/getdata/${id}`);
  let post = await rawResponse.json();
  let { title, content, image: cover, createdAt: postTime } = post.data;

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.postTime}>Posted at: {postTime}</p>
      <div className={styles.coverDiv}>
        <Image
          src={cover}
          width={400}
          height={200}
          alt="post cover"
          className={styles.coverImg}
        />
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    let rawReponse = await fetch(`${postApi}/getdata`);
    let response = await rawReponse.json();
    console.log(response);
    return response.data.map((post) => ({ locale:'en', id: `${post.id}` }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const revalidate = 60;

export const dynamicParams = true;
