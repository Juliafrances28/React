import React from "react";
import Card from "../components/Card/index";
import Container from "../components/Container/index";
import "./style.css";

function Contact() {
  return (
    <div>
      <Container />
      <Card>
        <h5 ClassName="card-header" id="Contact">
          Julia Frances Horan
        </h5>

        <p ClassName="card-text"></p>

        <ul ClassName="list" />
        <li> Phone: 908-489-7803</li>
        <li> Email: Julia.horan28@gmail.com </li>
        <li>
          <a href="https://www.linkedin.com/in/juliafhoran/"> Linkedin </a>
        </li>
        <li>
          <a href="https://github.com/Juliafrances28"> github </a>
        </li>
        <ul />

        <h5 ClassName="card-title"> I look forward to hearing from you!!</h5>
      </Card>

      <img
        src="https://www.eu-startups.com/wp-content/uploads/2020/06/woman-coding.jpg"
        className="girlCoding"
        alt="girlCoding"
      />
      <br />
      <br />
      <Container />
    </div>
  );
}

export default Contact;
