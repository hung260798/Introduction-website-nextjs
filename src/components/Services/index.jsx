"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css"


export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            icon: "fas fa-globe",
            title: "WEB DEVELOPMENT",
            description: "We design, build, and maintain websites and web applications for clients, providing front-end and back-end development, hosting, optimization, and security services. Our web development services aim to help clients establish a strong online presence to support their business goals."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "MOBILE DEVELOPMENT",
            description: "We design, build, and maintain mobile applications for iOS and Android platforms. Our services include features like push notifications, social media integration, and in-app purchases. We also offer optimization and security to ensure a seamless and secure user experience for client's mobile presence."
        },
        {
            icon: "fas fa-building",
            title: "ENTERPRISE DEVELOPMENT",
            description: "We build and maintain large-scale, mission-critical software applications for businesses, providing scalability, security, and business process automation. Our enterprise development services aim to help clients achieve their business objectives through cloud deployment, integration with other enterprise systems, and ongoing support and maintenance."
        },
        {
            icon: "fas fa-handshake",
            title: "OUTSOURCING DEVELOPMENT",
            description: "We build and maintain remote software applications for businesses, adhering to client's requirements and deadlines. Our outsourcing services help clients reduce costs, increase efficiency, and achieve their business objectives."
        },
    ];

    return (
        <section id="services">
            <div className={`container my-5 ${styles.services_wrapper}`}>
                <h2 className={`text-center ${styles.section_subtitle}`}>#WHAT WE DO</h2>
                <h1 className={`text-center mb-4 ${styles.section_title}`}>SERVICES</h1>
                <p className={`text-center mb-5 ${styles.section_desc}`}>
                    We offer web, mobile, enterprise, and outsourcing development services to help clients achieve their business goals.
                </p>

                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-md-12 mb-4" key={index}>
                            <div
                                className={`${styles.service} border-0`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={styles.service_body}>
                                    <div className={styles.service_icon_wrapper}>
                                        <i className={`${service.icon} fa-7x ${styles.service_icon}`}></i>
                                    </div>
                                    <div className={styles.service_content}>
                                        <h4 className={styles.service_title}>{service.title}</h4>
                                        <p className={styles.service_text}>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}