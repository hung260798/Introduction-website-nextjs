"use client";

import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/Sections/Header";
import NavigationContext from "@/context/navigation";
import { currentPosition, reducer } from "@/reducers/positionReducer";
import { useReducer } from "react";
import styles from "./styles.module.css";

export default function Wrapper({ children }) {
  const [currentPos, dispatch] = useReducer(reducer, currentPosition);
  return (
    <NavigationContext.Provider value={{ currentPos, dispatch }}>
      <div className={styles.root}>
        <div className={styles.headerWrap}>
          <PageHeader />
        </div>
        <div className={styles.contentWrap}>{children}</div>
        <div className={styles.footerWrap}>
          <Footer />
        </div>
      </div>
    </NavigationContext.Provider>
  );
}
