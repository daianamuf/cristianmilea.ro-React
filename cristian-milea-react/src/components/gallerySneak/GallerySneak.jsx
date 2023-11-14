import { Link } from "react-router-dom";
import { Eye } from "@phosphor-icons/react";
import styles from "./GallerySneak.module.css";

import Heading from "../heading/Heading";

function GallerySneak() {
  return (
    <section className={styles.gallery}>
      <Heading>Galerie</Heading>

      <div className={styles.gallery__wrapper}>
        <img
          src="images/gallery_3.jpg"
          alt=""
          className={`${styles.gallery__img} ${styles["h_stretch"]}`}
        />

        <img
          className={`${styles.gallery__img} ${styles["h_stretch"]}`}
          src="images/gallery_1.jpg"
          alt=""
        />
      </div>
      <Link to="/gallery" className={styles.gallery__btn}>
        <Eye className={styles["gallery__btn--icon"]} />
      </Link>
    </section>
  );
}

export default GallerySneak;
