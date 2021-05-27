import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Linkedin2 from "../Linkedin2.jpeg";
import "./style.css";

/* note: same container as image, use percent not pixel */

function Resume() {
  return (
    <div>
      <Container className="background">
        <br />
        <img src={Linkedin2} className="link" alt="linkedin" /> <br />
        <strong>Summary</strong>
        <p>
          Seeking employment in an area that is consistent with experience and
          education within an organization that can provide career advancement
          and personal growth. I have three years of previous experience in
          administrative and data management support with strong communication
          and organizational skills.
        </p>
        <strong>Technical Skills</strong>
        <p>
          MS Office Productivity Suite (Word, Outlook, Excel, Powerpoint), HTML,
          CSS, Javascript, Node Js, Express, MySQL, MongoDB, Mongoose, Database
          Management, PC and MAC Administration and Configuration
        </p>
        <strong>Education</strong>
        <p>
          <strong>Full Stack Web Development Certificate </strong> | Rutgers
          University, Somerset, NJ
        </p>
        <p>
          A 24-week intensive program focused on gaining technical programming
          skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node
          Js, MySQL, MongoDB, Express, Handelbars.js and ReactJS.
        </p>
        <p>
          <strong>Bachelor of Arts </strong> |
          <strong> Major: Communications</strong>| St. Vincent College,
          Latrobe,PA
        </p>
        <br />
        <Row>
          <hr />
          <h3 className="contact">
            <a href="https://docs.google.com/document/d/1aOlPxVrf4iAZI5i4O27D75v84Ol97347obTqCPMjTNQ/edit?usp=sharing">
              <strong> Resume </strong>{" "}
            </a>{" "}
            | 908-489-7803 | julia.horan28@gmail.com |{" "}
            <a href="https://www.linkedin.com/in/juliafhoran/"> Linkedin </a> |{" "}
            <a href="https://github.com/Juliafrances28"> github </a>
          </h3>
          <hr />
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
