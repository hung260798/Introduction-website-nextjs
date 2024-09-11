"use client";

import PostList from './components/PostList/PostList';
import React from 'react';
import styles from './post.module.css';

export default async function postPage() {
    const data = await fetch('https://api.vercel.app/blog'); // fake data
    const posts = await data.json();

    return (
        <div>
            <h1 className={styles.h1}>Danh sách bài viết</h1>
            <PostList posts={posts} />
        </div>
    );
}
