"use client";

import PostItem from '../PostItem/PostItem';
import React from 'react';
import classNames from 'classnames';

export default function PostList({ posts }) {
    return (
        <div className={classNames('row container mt-4 mb-4')}>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};