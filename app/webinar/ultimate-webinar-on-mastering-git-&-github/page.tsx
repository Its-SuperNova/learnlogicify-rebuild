import React from "react";
import styles from "./styles.module.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Desc from "./sections/desc";
import Cards from "./sections/cards";

const Webinar = () => {
  // Define the content for the two cards
  

  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <Desc />
      <Cards />
    </div>
  );
};

export default Webinar;
