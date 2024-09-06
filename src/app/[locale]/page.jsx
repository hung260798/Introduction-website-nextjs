import Services from "@/components/v2/Sections/Services";
import React from "react";
import styles from "./page.module.css"
import Input from "@/components/v2/Controls/Input";

export default function Home() {
  return (
    <div>
      <div style={{
        background: "#333",
        height: "400px",
      }}>
        <Input name={"name"} placeholder={"Your name"} type={"text"} />
      
      </div>
    </div>
  )
}
