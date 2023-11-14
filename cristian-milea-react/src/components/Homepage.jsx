import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import Slider from "../components/slider/Slider";
import GallerySneak from "../components/gallerySneak/GallerySneak";
import { useRef, useState, useEffect } from "react";
import Footer from "./footer/Footer";
import VideoSneak from "./videoSneak/VideoSneak";

function Homepage() {
  const heroRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const currentRef = heroRef.current;
    const navOnScroll = (entries) => {
      const [entry] = entries;

      setIsScrolling(entry.isIntersecting);
    };

    const navObserver = new IntersectionObserver(navOnScroll, {
      root: null,
      threshold: 0.8,
    });

    if (currentRef) {
      navObserver.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        navObserver.unobserve(currentRef);
      }
    };
  });

  return (
    <>
      <Nav isScrolling={isScrolling} />
      <Hero heroRef={heroRef} />
      <Stats />
      <Slider />
      <GallerySneak />
      <VideoSneak />
      <Footer />
    </>
  );
}

export default Homepage;
