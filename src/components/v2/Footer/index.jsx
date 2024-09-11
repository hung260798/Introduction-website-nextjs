"use client"
import { open_sans, raleway } from "@/utils/fonts";
import { useDeviceType } from "@/hooks/device";
import { useObserver } from "@/hooks/viewport";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const bttRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isVisited = useObserver();
  // const animationDuration = 2000; //2s
  const isDesktop = useDeviceType() === "Desktop";
  
  useEffect(() => {
    if (isVisited) {
      setIsAnimating(true);
    }
  }, [isVisited]);

  return (
    <footer className={`${styles.root} ${raleway.className}`}>
      <div className={`${styles.footerConnect}`}>
        <div className={`container ${styles.container} ${styles.resize}`}>
          <div className={`row`}>
            <div className={`col-md-4 col-sm-6 offset-md-2 offset-md-0`}>
              <div className={`${styles.footerSubscribe}`}>
                <h5 className={`${styles.followHeading}`}>
                  Join our Newsletter
                </h5>
                <form action="">
                  <input
                    type="text"
                    name="email"
                    id="subEmail"
                    placeholder="Enter your email address"
                    className={`${styles.subsInput} ${open_sans.className}`}
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    className={`${styles.submitButton}`}
                  />
                </form>
              </div>
            </div>
            <div className={`col-md-4 col-sm-6`}>
              <div className={`${styles.footerSocial}`}>
                <h5 className={`${styles.followHeading}`}>Keep Updated</h5>
                <div className="footerSocialIcons">
                  <a target="_blank" href="#" title="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a target="_blank" href="#" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a target="_blank" href="#" title="Google Plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a target="_blank" href="#" title="Instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.siteInfo} ${open_sans.className}`}>
        <div className={`container ${styles.container} ${styles.resize}`}>
          <div className={`${styles.btt}`}>
            <Link
              className={`${styles.backToTop}`}
              href="#home"
              title="Back To Top"
              ref={bttRef}
            >
              <i
                className={`fa fa-angle-double-up wow flash ${(isAnimating && isDesktop) ? `${styles.inViewPort} ${styles.animated}`: `${styles.outViewPort}`} `}
                data-wow-duration="2s"
                onAnimationEnd={() => {
                  setIsAnimating(false);
                }}
              ></i>
            </Link>
          </div>
          Copyright © 2024 BKHIGHTECH
          <span> – </span>
          <a href="https://www.famethemes.com/themes/onepress/">OnePress</a> 
          {" "}theme by FameThemes
        </div>
      </div>
    </footer>
  );
}
