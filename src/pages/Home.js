import React from "react";
import Hero from "../components/Hero/index";
import "./style.css";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://media.timeout.com/images/103257144/image.jpg">
        <h1> Julia Frances Horan </h1>
        <h2> Full Stack Developer Student at Rutgers </h2>
      </Hero>
    </div>
  );
}

export default Home;
