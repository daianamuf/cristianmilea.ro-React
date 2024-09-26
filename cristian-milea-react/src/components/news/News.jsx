import { ArrowRight } from "@phosphor-icons/react";
import styles from "./News.module.css";

function News() {
  return (
    <section className={styles.news}>
      <a
        href="https://www.prosport.ro/alte-sporturi/luptatorul-cristian-milea-continua-sa-scrie-istorie-the-fastest-a-cucerit-centura-intercontinentala-la-k-1-categoria-72-kg-19681934"
        target="_blank"
        rel="noreferrer"
        className={styles["news__group"]}
      >
        <div className={styles["news__group--image-container"]}>
          <img
            src="https://media.prosport.ro/RQEV_vNye_7jpZm9VJqq8Cxlmc0=/1280x720/smart/filters:contrast(5):format(webp):quality(80)/https%3A%2F%2Fwww.prosport.ro%2Fwp-content%2Fuploads%2F2023%2F06%2FWhatsApp-Image-2023-06-18-at-16.00.46-2-e1687275715758-1400x1148.jpeg"
            className={styles["news__group--img"]}
          />
        </div>
        <div className={styles["news__group--content"]}>
          <h3 className={styles["news__group--heading"]}>
            Luptătorul Cristian Milea continuă să scrie istorie! „The Fastest” a
            cucerit centura intercontinentală la K-1, categoria 72 kg!
          </h3>
          <p className={styles["news__group--preview"]}>
            Luptătorul român Cristian Milea, poreclit „The Fastest”, în vârstă
            de 35 de ani, a cucerit centura intercontinentală la K-1 în gala
            organizată în Austria, la Eichgraben.
          </p>
          <button className={styles["news__group--btn"]}>
            Vezi mai mult <ArrowRight size={18} />
          </button>
        </div>
      </a>
    </section>
  );
}

export default News;
