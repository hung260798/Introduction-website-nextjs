import Image from "next/image";
import styles from "./page.module.css";
import { postApi } from "@/utils/api";

const currentDateTime = new Date().toLocaleString();

const posts = [
    {
        id: 1,
        title: 'Bài viết 1',
        image: 'https://picsum.photos/200/300',
        content: 'We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.',
        createdAt: currentDateTime,
    },
    {
        id: 2,
        title: 'Bài viết 2',
        image: 'https://picsum.photos/200/300',
        content: 'We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.',
        createdAt: currentDateTime,
    },
    {
        id: 3,
        title: 'Bài viết 3',
        image: 'https://picsum.photos/200/300',
        content: 'We cannot expect people to have respect for laws and orders until we teach respect to those we have entrusted to enforce those laws all the time. we always want to help people cordially.',
        createdAt: currentDateTime,
    },
];

export default async function PostDetail({ params }) {
    const { id } = params;

    // let rawResponse = await fetch(`${postApi}/${id}`);
    // let post = await rawResponse.json();
    // let { title, content, image: cover, createdAt: postTime } = post.data;

    // Tìm bài viết dựa trên ID
    const post = posts.find((p) => p.id == id);

    if (!post) {
        return <p>Bài viết không tồn tại!</p>;
    }



    const { title, content, image: cover, createdAt: postTime } = post;

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-12 position-relative p-3 border rounded">

                    <p className="position-absolute top-0 end-0 text-muted small">Posted at: {postTime}</p>
                    <div className="text-center my-3">
                        <img
                            src={cover}
                            alt="post cover"
                            className="img-fluid"
                        />
                    </div>
                    <h3 className="text-start">{title}</h3>
                    <p>{content}</p>
                </div>

            </div>
        </div>
    );
}

export async function generateStaticParams() {
    // const posts = await fetch(`${postApi}`).then((res) => res.json())

    // return posts.map((post) => ({
    //     id: post.id
    // }));

    return [{ id: '1' }, { id: '2' }, { id: '3' }]

}

export const revalidate = 60;

export const dynamicParams = true;
