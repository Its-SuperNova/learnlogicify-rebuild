import React from "react";
import ProgressBar from "./progressBar";
import styles from "./styles.module.css";

const Sidebar = ({ currentStep }: { currentStep: number }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>DNB</h2>
      </div>
      <h3 className={styles.title}>Create account</h3>
      <ProgressBar currentStep={currentStep} />
    </aside>
  );
};

export default Sidebar;
