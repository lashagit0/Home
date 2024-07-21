import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Houses from "./components/Houses/Houses";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Imglink from "./components/Imglink/Imglink.js";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Houses />
      <Contact />
      <Footer />
      <Imglink />
    </>
  );
}

export default App;
