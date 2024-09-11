"use client";

import Input from "@/components/v2/Controls/Input";
import AddressLine from "@/components/v2/Items/AddressLine";
import SectionHeader from "@/components/v2/SectionHeader";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import useNavigation from "@/hooks/navigationHook";
import { useForm } from "react-hook-form";

export default function Page() {
  const t = useTranslations("Contact");
  const elemRef = useNavigation();
  const { register, handleSubmit } = useForm();
  const api = "";
  const onSubmit = async (data) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const rawResponse = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers,
      });
      const response = await rawResponse.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className={classNames("container-fluid", styles.root)}
      ref={elemRef}
    >
      <div className={`${styles.cover}`}></div>
      <div className={classNames("container", styles.contentWrap)}>
        <SectionHeader title={t("title")} subtitle={t("subtitle")} animate={false} />
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
                {...register("name")}
              />
              <Input
                type="text"
                name={"surname"}
                placeholder={"Your surname"}
                {...register("surname")}
              />
              <Input
                type="email"
                name={"email"}
                placeholder={"Email"}
                {...register("email")}
              />
              <Input
                type="textarea"
                name={"message"}
                placeholder={"Message"}
                {...register("message")}
              />
              <button type="submit" className={classNames(styles.btn)}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
