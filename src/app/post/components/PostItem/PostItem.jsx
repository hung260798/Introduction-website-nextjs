"use client";

import React from 'react';
import styles from '../../post.module.css';

export default function PostItem({ post }) {
    return (
        <div className={styles.post_item}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};