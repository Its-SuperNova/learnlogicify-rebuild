import React from "react";
import styles from "./styles.module.css";
import Character from "./character";

const paragraph =
  "Join our 2-day workshop to explore everything you need to know about Git and GitHub. Learn version control, repositories, branches, and collaborative workflows with hands-on guidance. Perfect for anyone looking to enhance their development and teamwork skills!";

const Desc = () => {
  return (
    <div
      className={`flex justify-center pt-[50px] pb-[50px] ${styles.container}`}
    >
      <div className={`${styles.character}`}>
        <Character paragraph={paragraph} />
      </div>
      <div
        className={`${styles.defaultParagraph}  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.3))] text-transparent bg-clip-text`}
      >
        {paragraph}
      </div>
    </div>
  );
};

export default Desc;
