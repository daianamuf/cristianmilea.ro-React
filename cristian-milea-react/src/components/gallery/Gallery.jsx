import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";

import Heading from "../heading/Heading";
import useImageGalleryData from "../../useImageGalleryData";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function Gallery() {
  const { imageGallery } = useImageGalleryData();
  return (
    <>
      <Nav />
      <Heading style={{ marginTop: "75px" }}>Galerie</Heading>
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
      <Footer />
    </>
  );
}

export default Gallery;
