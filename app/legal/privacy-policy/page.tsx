"use client"; // This should be at the top

import React, { Suspense } from "react";
import styles from "./styles.module.css";
import Header from "@/app/components/common/HeaderDark";
import Footer from "@/app/components/common/Footer";
import Privacy from "../components/PrivacyPolicy";

const LegalPage = () => {
  return (
    <>
      <main className={styles.main}>
        <header>
          <Header />
        </header>
        <section className={styles.container}>
          <Privacy />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default LegalPage;
