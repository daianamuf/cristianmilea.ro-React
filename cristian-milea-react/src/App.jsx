// import Nav from "./components/nav/Nav";
// import Hero from "./components/hero/Hero";
// import Stats from "./components/stats/Stats";
// import Slider from "./components/slider/Slider";
// import GallerySneak from "./components/gallerySneak/GallerySneak";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Gallery from "./components/gallery/Gallery";
import Slideshow from "./components/slideshow/Slideshow";
import VideoGallery from "./components/videogallery/VideoGallery";
import Contact from "./components/contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

// const getBasename = () => {
//   // Example logic to dynamically determine basename
//   const path = window.location.pathname;
//   console.log(path, "nemodif");
//   console.log(path.split("/")[1]);
//   // Implement your logic here to extract or compute the basename based on the path
//   // For example, if your app could be hosted at /app1 or /app2, you might extract the first segment
//   return path.split("/")[1]; // Adjust this based on your URL structure
// };

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/gallery", element: <Gallery /> },
      {
        path: "/slideshow",
        element: <Slideshow />,
      },
      { path: "/videos", element: <VideoGallery /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter basename={`/${getBasename()}`}>
    //   <Routes>
    //     <Route index path="/" element={<Homepage />} />
    //     <Route path="gallery" element={<Gallery />} />
    //     <Route path="slideshow" element={<Slideshow />} />
    //     <Route path="videos" element={<VideoGallery />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<Homepage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
