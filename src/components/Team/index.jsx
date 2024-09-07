"use client";
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Team() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const team = [
        {
            img: './images/team/dung-img.png',
            name: 'DUNG NGUYEN',
            position: 'PROJECT MANAGER'
        },
        {
            img: './images/team/hoang-img.png',
            name: 'HOANG NGUYEN',
            position: 'SENIOR DEVELOPER'
        },
        {
            img: './images/team/tram-img.png',
            name: 'TRAM HUYNH',
            position: 'PROJECT MANAGER'
        },
        {
            img: './images/team/an-img.png',
            name: 'AN TRINH',
            position: 'SENIOR DEVELOPER'
        }
    ];

    return (
        <section id='team' className={styles.team_wrapper}>
            <div className={`container my-5`}>
                <h2 className={`text-center ${styles.section_subtitle}`}>#OUR TEAM</h2>
                <h1 className={`text-center ${styles.section_title}`}>TEAM MEMBER</h1>
                <p className={`text-center mb-5 ${styles.section_desc}`}>
                    Our company has experienced IT consultants who provide quality advice and guidance to clients on various technology-related matters to help them achieve their business objectives.
                </p>
                <p className={`text-center mb-5 ${styles.section_desc}`}>
                    Beside that, we have a team of experienced software engineers who provide quality software development services to clients.
                </p>
                <div className='row justify-content-center'>
                    {team.map((member, index) => (
                        <div key={index} className='col-sm-6 col-md-4 col-lg-2 '>
                            <div
                                className={`team-member`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={styles.member_icon_wrapper}>
                                    <img src={member.img} alt='team-member' />
                                </div>

                                <div className={styles.member_info}>
                                    <h5 className={`text-center ${styles.member_name}`}>{member.name}</h5>
                                    <hr />
                                    <p className={`text-center ${styles.member_position}`}>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}