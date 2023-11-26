// import Nav from "./components/nav/Nav";
// import Hero from "./components/hero/Hero";
// import Stats from "./components/stats/Stats";
// import Slider from "./components/slider/Slider";
// import GallerySneak from "./components/gallerySneak/GallerySneak";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Gallery from "./components/gallery/Gallery";
import Slideshow from "./components/slideshow/Slideshow";
import VideoGallery from "./components/videogallery/VideoGallery";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <BrowserRouter basename="/cristianmilea.ro-React">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="slideshow" element={<Slideshow />} />
        <Route path="videos" element={<VideoGallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
