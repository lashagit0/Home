import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Houses from "./components/Houses/Houses";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Houses />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
