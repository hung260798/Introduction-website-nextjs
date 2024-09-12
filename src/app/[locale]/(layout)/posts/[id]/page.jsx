import Image from "next/image";
import styles from "./page.module.css";
import { postApi } from "@/utils/api";
import Error500 from "@/components/v2/Page/Error500";

export default async function Page({ params }) {
  const { id } = params;
  let rawResponse;
  let response;
  let post;
  let title, content, cover, postTime;
  try {
    rawResponse = await fetch(`${postApi}/${id}`);
    response = await rawResponse.json();
    post = response.data;
    ({ title, content, image: cover, createdAt: postTime } = post);
  } catch (error) {
    console.error(error);
    return <Error500 />;
  }

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.postTime}>Posted at: {postTime}</p>
      <div className={styles.coverDiv}>
        <img
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
    let rawReponse = await fetch(`${postApi}`);
    let response = await rawReponse.json();
    console.log(response);
    return response.data.map((post) => ({ locale: "en", id: `${post.id}` }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const revalidate = 60;

export const dynamicParams = true;
