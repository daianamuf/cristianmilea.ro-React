import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Slider from "../components/slider/Slider";
import GallerySneak from "../components/gallerySneak/GallerySneak";
import VideoSneak from "./videoSneak/VideoSneak";

function Homepage() {
  return (
    <>
      <Hero />
      <Stats />
      <Slider />
      <GallerySneak />
      <VideoSneak />
    </>
  );
}

export default Homepage;
