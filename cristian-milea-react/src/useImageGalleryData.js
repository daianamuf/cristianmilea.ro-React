import { useState, useEffect } from "react";

function useImageGalleryData() {
  const [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch("/assets/gallery-data.json");
        const data = await res.json();
        setImageGallery(data.images);
      } catch (err) {
        console.error("Could not get images");
      }
    };
    getImages();
  }, []);

  return { imageGallery };
}

export default useImageGalleryData;
