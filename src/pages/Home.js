import React from "react";
import Hero from "../components/Hero/index";
import Row from "../components/row/index";
import "./style.css";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://media.timeout.com/images/103257144/image.jpg">
        <h1> Julia Frances Horan </h1>
        <h2> Front End Web Developer </h2>
      </Hero>
      <div>
        <Row>
          <h4> 908-489-7803 </h4>
          <h4> julia.horan28@gmail.com </h4>
          <h4>
            {" "}
            <a href="https://www.linkedin.com/in/juliafhoran/"> Linkedin </a>
          </h4>
          <h4>
            {" "}
            <a href="https://github.com/Juliafrances28"> github </a>{" "}
          </h4>
        </Row>
      </div>
    </div>
  );
}

export default Home;
