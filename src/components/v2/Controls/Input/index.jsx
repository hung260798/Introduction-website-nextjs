import React from "react";
import styles from "./styles.module.css";

export default function Input({ name, placeholder, label, type }) {
  return (
    <div className={styles.root}>
      {type === "textarea" ? (
        <textarea
          className={styles.input}
          name={name}
          placeholder={placeholder ?? label}
        ></textarea>
      ) : (
        <input
          type={type}
          className={styles.input}
          name={name}
          placeholder={placeholder ?? label}
          style={{ color: "#FFFFFF" }}
        />
      )}
    </div>
  );
}
