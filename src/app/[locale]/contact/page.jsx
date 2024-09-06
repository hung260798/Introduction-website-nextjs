import Input from "@/components/v2/Controls/Input";
import AddressLine from "@/components/v2/Items/AddressLine";
import SectionHeader from "@/components/v2/Section/Header";
import React from "react";
import classNames from "classnames";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={classNames("container-fluid", styles.root)}>
      <div className={`${styles.cover}`}></div>
      <div className={classNames("container", styles.contentWrap)}>
        <SectionHeader title={"contacts"} subtitle={"All to contact us"} />
        <div className={classNames("row")}>
          <div className="col-md-6">
            <h3 className={classNames(styles.formTitle)}>Our Address</h3>
            <AddressLine
              info={"96/17 Hai Ho, Thanh Binh, Hai Chau, Da Nang, Viet Nam"}
            />
            <AddressLine info={"+84 816 946 355"} />
            <AddressLine info={"contact@bkhightech.vn"} />
          </div>
          <div className={classNames("col-md-6")}>
            <h3 className={classNames(styles.formTitle)}>Write To Us</h3>
            <form action="">
              <Input type="text" name={"name"} placeholder={"Your name"} />
              <Input type="email" name={"email"} placeholder={"Email"} />
              <Input type="textarea" name={"message"} placeholder={"Message"} />
              <button className={classNames(styles.btn)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
