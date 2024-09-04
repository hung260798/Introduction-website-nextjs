import Image from "next/image";
import React from "react";
import styles from "./styles.module.css"

export default function ServiceItem({ image, title, content, classNames }) {
  return (
    <div className={`col-sm-12 col-lg-12 `}>
      <div className={`${styles['service-item']}`}>
        <div className={`${styles['service-image']} ${styles['icon-image']}`}>
          <Image src={`/images/service-icons/${image}`} alt="" height={120} width={120} />
        </div>
        <div className={`${styles['service-content']}`}>{title}</div>
        <p>{content}</p>
      </div>
    </div>
  );
}
