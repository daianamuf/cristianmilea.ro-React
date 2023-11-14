import { Link } from "react-router-dom";
import { Eye } from "@phosphor-icons/react";
import styles from "./VideoSneak.module.css";

import Heading from "../heading/Heading";

function VideoSneak() {
  return (
    <section className={styles.gallery}>
      <Heading>Meciuri</Heading>

      <div className={styles.gallery__wrapper}>
        <img
          src="images/youtube_gorbicz.jpg"
          alt=""
          className={`${styles.gallery__img} ${styles["h_stretch"]}`}
        />

        <img
          className={`${styles.gallery__img} ${styles["h_stretch"]}`}
          src="images/youtube_paraschiv_superkombat.jpg"
          alt=""
        />
      </div>
      <Link to="/videos" className={styles.gallery__btn}>
        <Eye className={styles["gallery__btn--icon"]} />
      </Link>
    </section>
  );
}

export default VideoSneak;
