import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import WorkSection from "./Components/WorkSection/WorkSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import FooterSection from "./Components/FooterSection/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/work" element={<WorkSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
