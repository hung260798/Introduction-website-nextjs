"use client";
import React from 'react';
import styles from './styles.module.css';

const VideoBackground = () => {
    return (
        <div className={styles.videoBackground}>
            <video
                className={styles.video}
                src="/videos/VideoBackground.mp4"
                autoPlay
                loop
                muted
            />
            <div className={styles.content}>
                <h2 className={styles.text}>
                    <strong>BK HIGHTECH</strong>
                    <br />
                    I
                    <br />
                    FROM <strong>IDEA</strong> TO <strong>SOFTWARE</strong>
                </h2>
            </div>
        </div>
    );
};

export default VideoBackground;