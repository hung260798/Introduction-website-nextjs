"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css"


export default function Technologies() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const server_sides = [
        {
            image: "./images/technologies/dotnet.png",
        },
        {
            image: "./images/technologies/php.png",
        },
        {
            image: "./images/technologies/nodejs.png",
        },
        {
            image: "./images/technologies/ruby.png",
        }
    ];
    const client_sides = [
        {
            image: "./images/technologies/reactjs.png",
        },
        {
            image: "./images/technologies/angular.png",
        },
        {
            image: "./images/technologies/vuejs.png",
        },
        {
            image: "./images/technologies/reactnative.png",
        }
    ];
    const other_sides = [
        {
            image: "./images/technologies/ai.png",
        },
        {
            image: "./images/technologies/datascience.png",
        }
    ];

    return (
        <section id="technologies" className={styles.technology_wrapper}>
            <div className="container my-5">
                <h2 className={`text-center ${styles.section_subtitle}`}>#OUR TECHNOLOGIES</h2>
                <h1 className={`text-center mb-4 ${styles.section_title}`}>TECHNOLOGIES</h1>
                <p className={`text-center mb-5 ${styles.section_desc}`}>
                    Our core technologies include back-end technologies such as .NET, PHP, NodeJS & Ruby.
                    Front-end technologies such as React, Angular, and Vue.js,
                    and React Native as core mobile technology.
                </p>
                <h3 className={styles.technology_side_name}><strong>SERVER-SIDE</strong></h3>
                <div className={styles.technology_side}>
                    <div className="row justify-content-center">
                        {server_sides.map((server_side, index) => (
                            <div className={`col-xl-3 col-md-4 col-sm-6 ${styles.technology_body}`} key={index}>
                                <div
                                    className={styles.technology}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className={styles.technology_icon_wrapper}>
                                        <img src={server_side.image} />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <h3 className={styles.technology_side_name}><strong>CLIENT-SIDE</strong></h3>
                <div className={styles.technology_side}>
                    <div className="row justify-content-center">
                        {client_sides.map((client_side, index) => (
                            <div className={`col-xl-3 col-md-4 col-sm-6 ${styles.technology_body}`} key={index}>
                                <div
                                    className={styles.technology}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className={styles.technology_icon_wrapper}>
                                        <img src={client_side.image} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className={styles.technology_side_name}><strong>OTHER</strong></h3>
                <div className={styles.technology_side}>
                    <div className="row justify-content-center">
                        {other_sides.map((other_side, index) => (
                            <div className={`col-xl-3 col-md-4 col-sm-6 ${styles.technology_body}`} key={index}>
                                <div
                                    className={styles.technology}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className={styles.technology_icon_wrapper}>
                                        <img src={other_side.image} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}