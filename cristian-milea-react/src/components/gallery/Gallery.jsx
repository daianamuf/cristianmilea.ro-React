// import { render } from "react-dom";

import Heading from "../heading/Heading";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import useImageGalleryData from "../../useImageGalleryData";

function Gallery() {
  const { imageGallery } = useImageGalleryData();
  return (
    <>
      <Nav />
      <Heading>Galerie</Heading>
      <div className={styles.wrapper}>
        {imageGallery.map((image, index) => (
          <Link
            key={index}
            // to="/slideshow"
            to={`/slideshow?index=${index}`}
            className={`${styles[image.stretch]}`}
          >
            <img
              className={`${styles.img} ${styles[image.stretch]}`}
              src={image.original}
            />
          </Link>
        ))}
      </div>
      {/* <div id="gallery__wrapper" className="pswp-gallery gallery__wrapper">
        <a href="images/gallery_3.jpg" className="gallery__item h_stretch">
          <img src="images/gallery_3.jpg" alt="" className="gallery__img" />
        </a>
        <a href="images/gallery_1.jpg" className="gallery__item h_strech">
          <img className="gallery__img" src="images/gallery_1.jpg" alt="" />
        </a>
        <a href="images/gallery_2.jpg" className="gallery__item v_stretch">
          <img className="gallery__img" src="images/gallery_2.jpg" alt="" />
        </a>
        <a href="images/gallery_4.jpg" className="gallery__item h_stretch">
          <img src="images/gallery_4.jpg" alt="" className="gallery__img" />
        </a>
        <a src="images/gallery_5.jpg" className="gallery__item v_stretch">
          <img className="gallery__img" src="images/gallery_5.jpg" alt="" />
        </a>
        <a src="images/gallery_6.jpg" className="gallery__item h-stretch">
          <img className="gallery__img" src="images/gallery_6.jpg" alt="" />
        </a>
        <a href="images/gallery_9.jpg" className="gallery__item h-stretch">
          <img className="gallery__img" src="images/gallery_9.jpg" alt="" />
        </a>
        <a href="images/gallery_7.jpg" className="gallery__item h-stretch">
          <img className="gallery__img" src="images/gallery_7.jpg" alt="" />
        </a>
        <a href="images/gallery_8.jpg" className="gallery__item h-stretch">
          <img className="gallery__img" src="images/gallery_8.jpg" alt="" />
        </a>
      </div> */}
    </>
  );
}

export default Gallery;
