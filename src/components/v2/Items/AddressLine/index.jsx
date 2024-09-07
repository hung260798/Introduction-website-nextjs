import React from "react";
import styles from "./styles.module.css"
import classNames from "classnames";

export default function AddressLine({ icon = "fa-phone", info }) {
  return (
    <div className={classNames(styles.root)}>
      <i className={classNames("fa", icon)}></i>
      <span style={{marginRight: "1em"}}></span>
      {info}
    </div>
  );
}
