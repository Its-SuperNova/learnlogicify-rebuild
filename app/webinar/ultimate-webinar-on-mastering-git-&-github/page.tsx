import React from "react";
import styles from "./styles.module.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
const webinar = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
    </div>
  );
};

export default webinar;
