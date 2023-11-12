import {
  YoutubeLogo,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const sponsorPhotos = [
  "/images/Sponsori/utm.webp",
  "/images/Sponsori/worldclass.png",
  "/images/Sponsori/knockoutro.webp",
];

function Footer() {
  return (
    <footer className="footer ">
      <section className="sponsors">
        <h3 className="sponsors__heading">Sponsori</h3>
        <div className="sponsors__slider">
          <div className="sponsors__slider--item sponsors__slider--item-1">
            <img src="/images/Sponsori/utm.webp" alt="UTM" />
          </div>
          <div className="sponsors__slider--item sponsors__slider--item-2">
            <img src="/images/Sponsori/worldclass.png" alt="Worldclass" />
          </div>
          <div className="sponsors__slider--item sponsors__slider--item-3">
            <img src="/images/Sponsori/knockoutro.webp" alt="Knockout" />
          </div>
          <div className="sponsors__slider--item sponsors__slider--item-4">
            <img src="/images/Sponsori/superfit.png" alt="Superfit" />
          </div>
          <div className="sponsors__slider--item sponsors__slider--item-5">
            <img src="/images/Sponsori/thaishindo.png" alt="Thai Shin Do Gym" />
          </div>
          <div className="sponsors__slider--item sponsors__slider--item-6">
            <img
              src="/images/Sponsori/mastertrainerraul.png"
              alt="Master Trainer Raul"
            />
          </div>
        </div>
      </section>

      <div className="footer__social-media">
        <a
          href="https://www.youtube.com/@cristianmilea3557"
          target="_blank"
          rel="noreferrer"
          className="footer__social-media--link youtube"
        >
          <YoutubeLogo className="ph ph-youtube-logo" />
        </a>
        <a
          href="https://www.instagram.com/milea.cristian.88/"
          target="_blank"
          rel="noreferrer"
          className="footer__social-media--link instagram"
        >
          <InstagramLogo className="ph ph-instagram-logo" />
        </a>
        <a
          href="https://www.facebook.com/milea.cristian.79"
          target="_blank"
          rel="noreferrer"
          className="footer__social-media--link facebook"
        >
          <FacebookLogo className="ph ph-facebook-logo" />
        </a>
      </div>
      <p className="footer__logo logo">The Fastest</p>
    </footer>
  );
}

export default Footer;
