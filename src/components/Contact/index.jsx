"use client";
import { useDeviceType } from "@/hooks/device";
import { useInViewPort } from "@/hooks/viewport";
import { open_sans, raleway } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import logoPic from "/public/images/Techno7.png";

export default function Contact() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const elemRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isInViewPort = useInViewPort({elemRef, inViewPortChecker});
  const isDesktop = useDeviceType() === "Desktop";
  const animationDuration = 1000;

  function animationEndHandler() {
    setIsAnimating(false);
  }

  function inViewPortChecker({top, bottom, wHeight}) {
    return (0 < top && top < wHeight) || (0 < bottom && bottom < wHeight);
  }

  useEffect(() => {
    if (isInViewPort) {
      setIsAnimating(true);
    }
  }, [isInViewPort]);

  return (
    <section className={`${open_sans.className} ${styles.root}`}>
      <div className={`container ${styles.resize} ${styles.container}`}>
        <div
          className={`section-title-area text-center mb-4 mt-4 ${raleway.className}`}
        >
          <div className={`section-subtitle `}>
            #{t("subtitle").toUpperCase()}
          </div>
          <h2 className={`mt-2 section-title `}>
            {t("title")?.toUpperCase()}
          </h2>
        </div>

        <div className="row" ref={elemRef}>
          <div
            className={`col-sm-6 ${(isAnimating && isDesktop) ? `${styles.inViewPort} ${styles.animated}` : styles.outViewPort}`}
            onAnimationEnd={animationEndHandler}
          >
            <div className={`${styles.formWrapper}`}>
            <form action="" className={`mt-3 mb-3`}>
              <div className="form-field-container">
                <div className="w-auto mb-3 mt-3">
                  <label htmlFor="" className={`${styles.formLabel}`}>
                    {t("form.labels.name").toUpperCase() + " "}
                    <span className={`${styles.requireLabel}`}>*</span>
                  </label>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={`d-block w-100 ${styles.formField}`}
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData((data) => ({
                            ...data,
                            firstName: e.target.value,
                          }));
                        }}
                      />
                      <label
                        htmlFor="firstName"
                        className={`${styles.formLabel}`}
                      >
                        {t("form.labels.firstName").toUpperCase()}
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={`d-block w-100 ${styles.formField}`}
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData((data) => ({
                            ...data,
                            lastName: e.target.value,
                          }));
                        }}
                      />
                      <label
                        htmlFor="lastName"
                        className={`${styles.formLabel}`}
                      >
                        {t("form.labels.lastName").toUpperCase()}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="w-auto mb-3">
                  <label htmlFor="email" className={`${styles.formLabel}`}>
                    {t("form.labels.email").toUpperCase() + " "}
                    <span className={`${styles.requireLabel}`}>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`w-100 d-block ${styles.formField}`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((data) => ({
                        ...data,
                        email: e.target.value,
                      }));
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`${styles.formLabel}`}>
                    {t("form.labels.commentOrMessage").toUpperCase() + " "}
                    <span className={`${styles.requireLabel}`}>*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className={`w-100 d-block ${styles.formField}`}
                    onChange={(e) => {
                      setFormData((data) => ({
                        ...data,
                        message: e.target.value,
                      }));
                    }}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>

              <div className="form-submit-container mt-4">
                <button
                  type="submit"
                  className={`d-block w-100 ${styles.submitButton}`}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {t("form.submitButton").toUpperCase()}
                </button>
              </div>
            </form>
            </div>
            
          </div>

          <div
            className={`col-sm-6 ${(isAnimating && isDesktop) ? `${styles.inViewPort} ${styles.animated}` : styles.outViewPort} `}
            onAnimationEnd={animationEndHandler}
          >
            <p className="my-company-logo">
              <Image
                src={logoPic}
                alt="logo"
                className={`${styles.logo}`}
                width={300}
                height={71}
              />
            </p>

            <div className="content">
              <p>{t("content.0")}</p>
              <p>{t("content.1")}</p>
            </div>

            <br />
            <br />

            <div>
              <h3 className={`${raleway.className}`}>BK HIGHTECH Co., LTD</h3>

              <div className="mb-4">
                <span className={`fa-stack ${styles.icon}`}>
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                </span>
                <div
                  className={`${styles.contactLine} ${styles.addressContent}`}
                >
                  96/17 Hai Ho, Thanh Binh, Hai Chau, Da Nang, Viet Nam
                </div>
              </div>

              <div className="mb-4">
                <span className={`fa-stack ${styles.icon}`}>
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                </span>
                <div className={styles.contactLine}>+84 816 946 355</div>
              </div>

              <div className="mb-4">
                <span className={`fa-stack ${styles.icon}`}>
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                </span>
                <div className={`${styles.contactLine} `}>
                  <a
                    href="mailto:contact@bkhightech.vn"
                    className={`${styles.emailLink}`}
                  >
                    contact@bkhightech.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
