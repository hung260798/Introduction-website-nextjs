"use client";

import Input from "@/components/v2/Controls/Input";
import AddressLine from "@/components/v2/Items/AddressLine";
import SectionHeader from "@/components/v2/SectionHeader";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import useNavigation from "@/hooks/navigationHook";
import { useForm } from "react-hook-form";
import { emailApi } from "@/utils/api";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

export default function Page() {
  const t = useTranslations("Contact");
  const elemRef = useNavigation();
  const [submitState, setSubmitState] = useState("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      setSubmitState("submitting");
      const rawResponse = await fetch(`${emailApi}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers,
      });
      const response = await rawResponse.json();
      if (response.statusCode === 200) {
        setSubmitState("successful");
      } else {
        throw Error(response.message);
      }
    } catch (error) {
      console.error(error);
      setSubmitState("fail");
    }
  };

  useEffect(() => {
    if (submitState !== "idle" && submitState !== "submitting") {
      setTimeout(() => {
        reset({ name:'', surname:'', emailuser:'', content:'' });
        setSubmitState("idle");
      }, 2000);
    }
  }, [submitState, reset]);

  return (
    <section
      id="contact"
      className={classNames("container-fluid", styles.root)}
      ref={elemRef}
    >
      <div className={`${styles.cover}`}></div>
      <div className={classNames("container", styles.contentWrap)}>
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          animate={false}
        />
        <div className={classNames("row", styles.content)}>
          <div className={classNames("col-md-6 mb-4 mb-md-0")}>
            <h3
              className={classNames(
                styles.formTitle,
                "mb-3",
                "text-center text-md-start"
              )}
            >
              Our Address
            </h3>
            <AddressLine
              info={"96/17 Hai Ho, Thanh Binh, Hai Chau, Da Nang, Viet Nam"}
              icon="fa-location-dot"
            />
            <AddressLine info={"+84 816 946 355"} />
            <AddressLine info={"contact@bkhightech.vn"} icon="fa-envelope" />
          </div>
          <div className={classNames("col-md-6 mt-4 mt-md-0")}>
            <h3
              className={classNames(
                styles.formTitle,
                "mb-3",
                "text-center text-md-start"
              )}
            >
              Write To Us
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                name={"name"}
                placeholder={"Your name"}
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              
              <Input
                type="text"
                name={"surname"}
                placeholder={"Your surname"}
                {...register("surname", { required: "This field is required" })}
              />
              {errors.surname && <span className={styles.error}>{errors.surname.message}</span>}

              <Input
                type="email"
                name={"emailuser"}
                placeholder={"Email"}
                {...register("emailuser", { required: "This field is required" })}
              />
              {errors.emailuser && <span className={styles.error}>{errors.emailuser.message}</span>}

              <Input
                type="textarea"
                name={"content"}
                placeholder={"Message"}
                {...register("content", { required: "This field is required" })}
              />
              {errors.content && <span className={styles.error}>{errors.content.message}</span>}

              <button type="submit" className={classNames(styles.btn)}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.alertWrapper}></div>
      {/* {submitState === "successful" && ( */}
      <Fade in={submitState === "successful"}>
        <Alert
          className={classNames(styles.alert)}
          severity="success"
          variant="filled"
        >
          Send Successful!
        </Alert>
      </Fade>
      {/* )} */}
      {/* {submitState === "fail" && ( */}
      <Fade in={submitState === "fail"}>
        <Alert
          className={classNames(styles.alert)}
          severity="error"
          variant="filled"
        >
          Send Fail!
        </Alert>
      </Fade>
      {/* )} */}
      <Fade in={submitState === "submitting"}>
        <Alert
          className={classNames(styles.alert)}
          severity="info"
          variant="filled"
        >
          Sending...
        </Alert>
      </Fade>
    </section>
  );
}
