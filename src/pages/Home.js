import React from "react";
import Hero from "../components/Hero/index";
import Header from "../components/Header/index";
import Navbar from "../components/Navbar/index";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero backgroundImage="https://wallpaperaccess.com/full/313031.jpg">
        <h1> Julia Frances Horan </h1>
        <h2> Full Stack Developer Student at Rutgers </h2>
        <button> aboutme </button>
      </Hero>
    </div>
  );
}

export default Home;
