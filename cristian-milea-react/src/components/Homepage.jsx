import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Slider from "../components/slider/Slider";
import GallerySneak from "../components/gallerySneak/GallerySneak";
import VideoSneak from "./videoSneak/VideoSneak";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

function Homepage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Slider />
      <GallerySneak />
      <VideoSneak />
      <Footer />
    </>
  );
}

export default Homepage;
