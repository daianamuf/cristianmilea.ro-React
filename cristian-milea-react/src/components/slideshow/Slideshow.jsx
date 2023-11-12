import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import useImageGalleryData from "../../useImageGalleryData";
import { useLocation, Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import styles from "./Slideshow.module.css";

function Slideshow() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const startIndex = Number(queryParams.get("index"));
  console.log(startIndex);
  const { imageGallery } = useImageGalleryData();
  if (!startIndex) return;
  return (
    <div className={styles.wrapper}>
      <ImageGallery items={imageGallery} startIndex={startIndex} />
      <Link to="/gallery" className={styles.closeBtn}>
        <X className={styles.closeBtn} />
      </Link>
    </div>
  );
}

export default Slideshow;
