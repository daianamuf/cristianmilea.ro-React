import {
  YoutubeLogo,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const sponsorPhotos = [
  { src: "/assets/images/Sponsori/utm.webp", alt: "UTM", key: 1 },
  { src: "/assets/images/Sponsori/worldclass.png", alt: "Worldclass", key: 2 },
  { src: "/assets/images/Sponsori/knockoutro.webp", alt: "Knockout", key: 3 },
  { src: "/assets/images/Sponsori/superfit.png", alt: "Superfit", key: 4 },
  {
    src: "/assets/images/Sponsori/thaishindo.png",
    alt: "Thai Shin Do Gym",
    key: 5,
  },
  {
    src: "/assets/images/Sponsori/mastertrainerraul.png",
    alt: "Master Trainer Raul",
    key: 6,
  },
];

function Footer() {
  const [sponsors, setSponsors] = useState(sponsorPhotos);

  useEffect(() => {
    const sponsorsCopy = [...sponsorPhotos];
    const setCurrentSponsor = function () {
      sponsorsCopy.push(sponsorsCopy.shift());
      const newSponsors = [...sponsorsCopy];
      setSponsors(newSponsors);
    };
    const interval = setInterval(setCurrentSponsor, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <section className={styles.sponsors}>
        <h3 className={styles.sponsors__heading}>Sponsori</h3>
        <div className={styles.sponsors__slider}>
          {sponsors.map((sponsor, index) => {
            const sponsorClassname = classNames(
              styles["sponsors__slider--item"],
              styles[`sponsors__slider--item-${index + 1}`],
              { hidden: index >= 5 }
            );
            return (
              <div key={sponsor.key} className={sponsorClassname}>
                <img src={sponsor.src} alt={sponsor.alt} />
              </div>
            );
          })}
        </div>
      </section>

      <div className={styles["footer__social-media"]}>
        <a
          href="https://www.youtube.com/@cristianmilea3557"
          target="_blank"
          rel="noreferrer"
          className={styles["footer__social-media--link"]}
        >
          <YoutubeLogo className={styles["media-logo"]} />
        </a>
        <a
          href="https://www.instagram.com/milea.cristian.88/"
          target="_blank"
          rel="noreferrer"
          className={styles["footer__social-media--link"]}
        >
          <InstagramLogo className={styles["media-logo"]} />
        </a>
        <a
          href="https://www.facebook.com/milea.cristian.79"
          target="_blank"
          rel="noreferrer"
          className={styles["footer__social-media--link"]}
        >
          <FacebookLogo className={styles["media-logo"]} />
        </a>
      </div>
      <p className={`${styles.footer__logo} ${styles.logo}`}>The Fastest</p>
    </footer>
  );
}

export default Footer;
