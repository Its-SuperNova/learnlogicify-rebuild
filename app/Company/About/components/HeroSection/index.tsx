import React from "react";
import Image from "next/image"; 
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <Image
          className={styles.banner}
          src="/images/banner/L.png"
          alt="Banner"
          width={500} 
          height={300} 
        />
      </div>
    </div>
  );
};

export default Hero;
