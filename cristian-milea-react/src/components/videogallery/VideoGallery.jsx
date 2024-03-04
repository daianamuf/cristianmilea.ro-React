import { useEffect, useState } from "react";
import { YoutubeLogo } from "@phosphor-icons/react";

import styles from "./VideoGallery.module.css";

import ReactPlayer from "react-player";

import Heading from "../heading/Heading";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function VideoGallery() {
  const [videoGallery, setVideoGallery] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch("/assets/video-data.json");
        const data = await res.json();
        setVideoGallery(data.videos);
      } catch (err) {
        console.error("Could not get videos");
      }
    };
    getVideos();
  }, []);

  return (
    <>
      <Nav />
      <Heading style={{ marginTop: "75px" }}>Meciuri</Heading>
      <div className={styles.wrapper}>
        {videoGallery.map((video, index) => (
          <div key={index} className={styles.video}>
            <div className={styles.video__wrapper}>
              <ReactPlayer url={video.url} light={true} width={"100%"} />
            </div>
            <p className={styles.video__title}>
              <span>
                <YoutubeLogo style={{ fontSize: "28px" }} />
              </span>
              <span>{video.title}</span>
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default VideoGallery;
