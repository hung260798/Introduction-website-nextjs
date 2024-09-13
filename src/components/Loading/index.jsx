import React from "react";
import { HashLoader } from "react-spinners";
import styles from "./styles.module.css"

export default function Loading() {
  return (
    <div className={styles.root}>
      <HashLoader size={150} color="#3360f2" />
    </div>
  );
}
