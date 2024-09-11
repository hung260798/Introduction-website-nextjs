"use client";

import React, { forwardRef } from "react";
import styles from "./styles.module.css";

// export default function Input(
//   { name, placeholder, label, type = "text", ...rest },
//   ref
// ) {
//   return (
//     <div className={styles.root}>
//       {type === "textarea" ? (
//         <textarea
//           className={styles.input}
//           name={name}
//           placeholder={placeholder ?? label}
//         ></textarea>
//       ) : (
//         <input
//           type={type}
//           className={styles.input}
//           name={name}
//           placeholder={placeholder ?? label}
//           style={{ color: "#FFFFFF" }}
//           {...rest}
//         />
//       )}
//     </div>
//   );
// }

const Input = forwardRef(function Input(
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
});

export default Input;
