import React from "react";
import Hero from "../components/Hero/index"; 
import Nav from "../components/Nav/index"


function Home() {
  return (
    <div>
      <Nav />
      <Hero backgroundImage="https://www.lexisnexis.com/legalnewsroom/resized-image.ashx/__size/550x0/__key/telligent-evolution-components-attachments/13-12-00-00-00-00-15-92/ContentImage_2D00_NewYorkCity.jpg">
        <h1> Julia Frances Horan </h1>
        <h2> Full Stack Developer Student at Rugters </h2>
        <button> aboutme </button>
      </Hero>
    </div>
  );
}

export default Home;
