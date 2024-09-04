"use client"
import React from "react";
// import styles from "./styles.module.css";
import { useTranslations } from 'next-intl'
import messages from "/messages/en.json";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const t = useTranslations("Services");
  const items = messages.Services.items;
  const images = ['web', 'mobile', 'enterprise', 'outsource'];
  for (let i = 0; i < images.length; i++) {
    items[i].image = images[i]+".png";  
  }
  console.log(items);
  return (
    <section>
      <div className={`container `}>
        <div className={`section-title-area`}>
          <h5 className={`section-subtitle`}>#{t("subtitle")}</h5>
          <h2 className={`section-title`}>{t("title")}</h2>
          <div className={`section-desc`}>
            <p>
              {t("description.0")}
              <br/>
              {t("description.1")}
            </p>
          </div>
          <div className={`row`}>
            {items.map(({title, description, image}) => <ServiceItem key={title} title={title} content={description} image={image} /> )}
          </div>
        </div>
      </div>
    </section>
  );
}
