import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Slider from "../components/slider/Slider";
import GallerySneak from "../components/gallerySneak/GallerySneak";
import VideoSneak from "./videoSneak/VideoSneak";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import News from "./news/News";

function Homepage() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <News />
      <Slider />
      <GallerySneak />
      <VideoSneak />
      <Footer />
    </>
  );
}

export default Homepage;
