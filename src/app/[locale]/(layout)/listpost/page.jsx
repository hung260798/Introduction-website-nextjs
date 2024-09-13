"use client";

import React from 'react';
import styles from './post.module.css';
import { postApi } from "@/utils/api";
import Link from 'next/link';
import classNames from 'classnames';

export default async function postPage() {
    const currentTime = new Date();
    const currentDateTime = `${currentTime.getDate()}-${currentTime.getMonth() < 9 ? "0" : ""}${currentTime.getMonth() + 1}-${currentTime.getFullYear()
        }`;

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

    // const data = await fetch(`${postApi}/${id}`);
    // const posts = await data.json();

    return (
        <div>
            <h1 className={styles.h1}>post list</h1>
            <div className='container mt-4 mb-4'>
                {posts.map((post) => (
                    <div key={post.id} className='row border-bottom mt-4 mb-4 py-2'>
                        <div className='col-sm-3'>
                            <img src={post.image} className='img-fluid' alt={post.title} />
                        </div>
                        <div className='col-sm-9'>
                            <Link className={styles.link} href={`/en/listpost/${post.id}`}>
                                <h2 className={`${classNames.title} mt-2 mb-2`}>{post.title}</h2>
                            </Link>
                            <p className={styles.post_date}>Posted at: {post.createdAt}</p>
                            <p>{`${post.content}`.slice(0, 200)}...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
