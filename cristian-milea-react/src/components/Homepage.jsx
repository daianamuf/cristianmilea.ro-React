import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Slider from "../components/slider/Slider";
import GallerySneak from "../components/gallerySneak/GallerySneak";
import Footer from "./footer/Footer";
import VideoSneak from "./videoSneak/VideoSneak";

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
