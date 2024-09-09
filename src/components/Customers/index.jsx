"use client";
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Customers() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const customers = [
        {
            img: './images/customers/dut-logo.png',
        },
        {
            img: './images/customers/sdc-logo.png',
        },
        {
            img: './images/customers/logo_bizverse2.png',
        },
        {
            img: './images/customers/logo_hadibeauty.png',
        },
        {
            img: './images/customers/Logo-VietinBank.png',
        }
    ];

    return (
        <section id='customers' className={styles.customers_wrapper}>
            <div className={`container my-5`}>
                <h2 className={`text-center ${styles.section_subtitle}`}>#our CUSTOMERS</h2>
                <h1 className={`text-center mb-4 ${styles.section_title}`}>CUSTOMERS</h1>
                <p className={`text-center mb-5 ${styles.section_desc}`}>
                    Our company serves a wide range of customers and is committed to providing exceptional products and services.
                </p>
                <div className='row justify-content-center'>
                    {customers.map((customer, index) => (
                        <div key={index} className='col-sm-6 col-md-4 col-lg-2 '>
                            <div
                                className={styles.customer}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={styles.customer_icon_wrapper}>
                                    <img src={customer.img} alt='customer' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}