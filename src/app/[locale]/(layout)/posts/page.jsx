import PostItem from "@/components/v2/Items/PostItem";
import { postApi } from "@/utils/api";
import styles from "./page.module.css";

export default async function Page() {
  let rawReponse = await fetch(`${postApi}`);
  let response = await rawReponse.json();

  return (
    <div className={styles.root} id="home">
      <div className={"container"}>
        <div className={styles.container}>
          <ul>
            {response?.data.map(({ id, title, content, image: cover, createdAt: postTime }) => (
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
