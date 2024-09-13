"use client";

import React, { forwardRef } from "react";
import styles from "./styles.module.css";

const Input = function Input(
  { name, placeholder, label, type = "text", ...rest },
  ref
) {
  return (
    <div className={styles.root}>
      {type === "textarea" ? (
        <textarea
          className={styles.input}
          name={name}
          placeholder={placeholder ?? label}
          ref={ref}
          {...rest}
        ></textarea>
      ) : (
        <input
          type={type}
          className={styles.input}
          name={name}
          placeholder={placeholder ?? label}
          style={{ color: "#FFFFFF" }}
          ref={ref}
          {...rest}
        />
      )}
    </div>
  );
};

const InputFR = forwardRef(Input);

export default InputFR;
