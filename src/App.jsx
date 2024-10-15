import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/NewContact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ContactForm /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
