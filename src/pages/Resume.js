import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Linkedin2 from "../Linkedin2.jpeg";

import "./style.css";
{
  /* same container as image, use percent not pixel */
}

function Resume() {
  return (
    <div>
      <Container className="skills">
        <img src={Linkedin2} className="link" alt="linkedin" />{" "}
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
        <ul className="reachme">
          <li>phone: (908) 489-7803 </li>
          <li>
            Email: <u>julia.horan28@gmail.com</u>{" "}
          </li>
          <li>
            LinkedIn: <u>linkedin.com/in/juliafhoran/</u>{" "}
          </li>
          <li>
            Portfolio: <u>juliafrances28.github.io/</u>{" "}
          </li>
          <li>
            {" "}
            Github <u>github.com/Juliafrances28</u>{" "}
          </li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>

      <Container ClassName="jobs">
        <br />
        <hr />
        <h3 className="experience">
          <strong>Experience</strong>
        </h3>
        <hr />
        <Row>
          <h5>
            Mass Transit Authority Occupation and Health Services | Brooklyn, NY
            12/2018 – 7/25/2020
          </h5>
        </Row>

        <Row>
          <strong>Administrative Assistant</strong>
        </Row>
        <Row>
          <ul>
            <li>
              Gathered status reports from supervisors on employees status to
              confirm testing availability
            </li>

            <li>
              Tracked daily attendance of 10-50 employees at required medical
              appointments
            </li>

            <li>
              Input random testing information into ACCESS database to verify
              employee attended test
            </li>

            <li>
              Made and received phone calls daily in regards to employees being
              sent for testing
            </li>
          </ul>
        </Row>
        <Row>
          <h5>Barnes and Noble | Manhattan, NY 10/2018 – 12/2018</h5>
        </Row>
        <Row>
          <strong>Sales Associate, Seasonal </strong>
        </Row>
        <Row>
          <ul className="bullets">
            <li>
              Helped customers locate Books, make suggestions and create store
              displays
            </li>
            <li>Finalized customers transactions through the POS Terminal</li>
            <li>
              Maintain an orderly sales floor, restocked and regulate inventory
              as needed
            </li>
          </ul>
        </Row>
        <Row>
          <h5>Brightpoint Health | Manhattan, NY 05/2018 – 09/2018</h5>
        </Row>
        <Row>
          <strong>Data Specialist</strong>
        </Row>
        <Row>
          <ul className="bullets">
            <li>
              Managed a data migration project between two database systems
            </li>
            <li>
              Performed audit and reconciliation covering data integrity among
              four EMRs
            </li>
            <li>
              Screened patients’ records to avoid red flags to ensure
              information conforms to data validation
            </li>
          </ul>
        </Row>
        <Row>
          <h5>
            NYC Department of Social Services - Office of Disciplinary Affairs |
            Manhattan, NY 05/2017 – 05/2018
          </h5>
        </Row>
        <Row>
          <strong>Administrative Assistant</strong>
        </Row>
        <Row>
          <ul className="bullets">
            <li>
              Performed data entry and data retrieval of case files to the TEAMS
              database
            </li>
            <li>Processed incoming/outgoing mail and distributed the mail</li>
            <li>
              Handled a busy phone line with over 60 calls daily and assisted
              members of the public with requests
            </li>
            <li>Responsible for organizing and preparing file fulders</li>
          </ul>
        </Row>
        <Row>
          <h5>Brightpoint Health | Queens, NY 11/2016 – 05/2017</h5>
        </Row>
        <Row>
          <strong>Data Specialist</strong>
        </Row>
        <Row>
          <ul className="bullets">
            <li>Created records to be uploaded for billing</li>
            <li>Input 350 of the caseworkers notes into Excel daily</li>
            <li>Transferred all clients’ documents to the new data system</li>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
