import "./App.css";
import Footer from "./components/Footer"
import ContactSection from "./components/ContactSection";
import HeaderBottom from "./components/HeaderBottom"
import HeaderTop from "./components/HeaderTop"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact";
import MegaNavbar from "./components/MegaNavbar";
import Blog from "./components/Blog";
import Xeberler from "./pages/Xeberler";

function App() {
  return (
    <BrowserRouter>
      <HeaderTop />
      <HeaderBottom />
      <MegaNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Haqqimizda" element={<About />} />
        <Route path="/elaqe" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/xeberler" element={<Xeberler />} />
      </Routes>
      <ContactSection />
      <Footer />
    </BrowserRouter>
  )
}

export default App