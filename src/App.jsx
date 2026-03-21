import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/home/Chatbot";
import AboutUs from "./components/pages/AboutUs";
import OurStory from "./components/pages/OurStory";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
