
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Routes, Route, Router } from "react-router-dom";
import BlogCards from "./components/BlogCards";
import Home from "./components/MainHome";
import MainHome from "./components/MainHome";
import Data from "./components/Data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} />
      </Routes>
      <Footer />
     
      
    </div>
  )
}
export default App;