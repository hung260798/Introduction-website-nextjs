import React from "react";
import styles from "./styles.module.css"

export default function AddressLine({ icon, info }) {
  return (
    <div className={`${styles.root}`}>
      <i className="fa fa-phone"></i>
      <span style={{marginRight: "1em"}}></span>
      {info}
    </div>
  );
}
