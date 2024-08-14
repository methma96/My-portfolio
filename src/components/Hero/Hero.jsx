import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Methma</h1>
        <p className={styles.description}>
        I'm a results-driven Full Stack Software Engineer with 5 years of work experience and expertise in Java, Spring, Spring Boot, JavaScript and SQL. Reach out if you'd like to learn more!

        </p>
        <a href="mailto:methmapiumini96@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/methma.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
