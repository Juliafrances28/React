import React from "react";
import Hero from "../components/Hero/index"; 
import Nav from "../components/Nav/index";
import Header from "../components/Header/index"; 

function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Hero backgroundImage= "https://wallpaperaccess.com/full/313031.jpg">
        <h1> Julia Frances Horan </h1>
        <h2> Full Stack Developer Student at Rugters </h2>
        <button> aboutme </button>
      </Hero>
    </div>
  );
}

export default Home;
