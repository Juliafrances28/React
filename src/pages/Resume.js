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
          <h4>
            phone: (908) 489-7803 | Email: <u>julia.horan28@gmail.com</u> |
            Linkedin: <u> juliafhoran </u>{" "}
            <a className="Julia" href="linkedin.com/in/juliafhoran/">
              {" "}
            </a>
            Portfolio: <u>juliafrances28.github.io</u>{" "}
            <a className="Frances" href="juliafrances28.github.io/portfolio">
              {" "}
            </a>{" "}
            | Github: <u> Juliafrances28</u>{" "}
            <a className="Git" href="https://juliafrances28.github.io/">
              {" "}
            </a>
          </h4>
        </Row>
      </Container>
      <Container ClassName="jobs">
        <hr />
        <h3 className="resume">
          <a href="https://docs.google.com/document/d/1aOlPxVrf4iAZI5i4O27D75v84Ol97347obTqCPMjTNQ/edit?usp=sharing">
            <strong>
              {" "}
              <u> Resume </u>{" "}
            </strong>{" "}
          </a>{" "}
        </h3>
        <hr />
      </Container>
    </div>
  );
}

export default Resume;
