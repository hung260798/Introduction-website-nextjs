import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import {
  useInViewPort,
  isInViewPortPartially as inViewPortChecker,
} from "@/hooks/viewport";
import { useDeviceType } from "@/hooks/device";

export default function ServiceItem({ image, title, content, classNames }) {
  const elemRef = useRef(null);
  const isInViewPort = useInViewPort({ elemRef, inViewPortChecker });
  const isDesktop = useDeviceType() === "Desktop";
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInViewPort && isDesktop) {
      setIsAnimating(true);
    }
  }, [isInViewPort]);

  return (
    <div
      className={`col-sm-12 col-lg-12 ${styles.root} ${
        isAnimating ? `${styles.animated}` : ""
      }`}
    >
      <div className={`${styles["service-item"]}`}>
        <div className={`${styles["service-image"]} ${styles["icon-image"]}`}>
          <Image
            src={`/images/service-icons/${image}`}
            alt=""
            height={120}
            width={120}
          />
        </div>
        <div className={`${styles["service-content"]}`} ref={elemRef}>
          <h4 className={`${styles["service-title"]}`}>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
