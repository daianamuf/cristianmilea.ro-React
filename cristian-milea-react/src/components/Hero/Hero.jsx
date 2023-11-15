/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import styles from "./Hero.module.css";

function Hero({ heroRef }) {
  return (
    <section ref={heroRef} className={styles["hero-section"]}>
      <h1 className={styles["hero-section__heading"]}>
        <span>CRISTIAN MILEA </span>
        <span> "The Fastest"</span>
      </h1>
      <div className={styles["bg-video"]}>
        <video className={styles["bg-video__content"]} autoPlay muted loop>
          <source src="./src/images/Hero-filtered.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;
