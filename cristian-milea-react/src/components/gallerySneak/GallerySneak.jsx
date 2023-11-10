import Heading from "../heading/Heading";
import { Eye } from "@phosphor-icons/react";
import styles from "./GallerySneak.module.css";

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
      <button className={styles.gallery__btn}>
        <Eye className={styles["gallery__btn--icon"]} />
      </button>
    </section>
  );
}

export default GallerySneak;
