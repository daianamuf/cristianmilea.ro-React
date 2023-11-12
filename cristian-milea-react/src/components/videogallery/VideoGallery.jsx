import { useEffect, useState } from "react";
import styles from "./VideoGallery.module.css";
import ReactPlayer from "react-player";

function VideoGallery() {
  const [videoGallery, setVideoGallery] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch("/video-data.json");
        const data = await res.json();
        setVideoGallery(data.videos);
      } catch (err) {
        console.error("Could not get videos");
      }
    };
    getVideos();
  }, []);

  console.log(videoGallery);

  return (
    <div className={styles.wrapper}>
      {videoGallery.map((video, index) => (
        <ReactPlayer key={index} url={video.url} width="80%" height="100%" />
      ))}
      {/* <ReactPlayer url={videoGallery[1].url} width="50%" /> */}
    </div>
  );
}

export default VideoGallery;
