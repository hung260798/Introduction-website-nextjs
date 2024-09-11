import PostItem from "@/components/v2/Items/PostItem";
import { postApi } from "@/utils/api";


export default async function Page() {
  let rawReponse = await fetch(`${postApi}/getdata`)
  let response = await rawReponse.json();

  return (
    <div>
      <ul>
        {
          response?.data.map(({id, title}) => (
            <li key={id}>
              <PostItem content={""} title={title}  />
            </li>
          ))
        }
      </ul>
    </div>
  );
}
