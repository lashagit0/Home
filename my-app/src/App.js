import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Houses from "./components/Houses/Houses";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Houses />
    </>
  );
}

export default App;
