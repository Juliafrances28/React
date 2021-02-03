import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import linkedin2 from "../Linkedin2.jpeg";
import "./style.css";

function Resume() {
  return (
     <div>
      <Container/>
      <img src={linkedin2} className="link" alt="linkedin" />
      <p className="Information">
        <strong>Julia Frances Horan</strong>
      </p>
      <p>
        Phone: (908) 489-7803 | Email: <u>julia.horan28@gmail.com</u> |
        LinkedIn:
       <u>linkedin.com/in/juliafhoran/</u>
      </p>
      <p>
        Portfulio: <u>juliafrances28.github.io/</u> | Github:
        <u>github.com/Juliafrances28</u>
      </p>
      <p>
        <strong>Summary</strong>
      </p>
      <p>
        Seeking employment in an area that is consistent with experience and
        education within an organization <br />
        that can provide career advancement and personal growth. I have three
        years of previous experience <br />
        in administrative and data management support with strong communication
        and organizational skills.
      </p>

      <p>
        <strong>Technical Skills</strong>
      </p>
      <p>
        MS Office Productivity Suite (Word, Outlook, Excel, Powerpoint), HTML,
        CSS, Javascript, Node Js, <br />
        Express, MySQL, MongoDB, Mongoose, Database Management, PC and MAC
        Administration and Configuration
      </p>
      <p>
        <strong>Education</strong>
      </p>
      <p>
        <strong>Full Stack Web Development Certificate: </strong>Rutgers
        University, Somerset, NJ
      </p>
      <p>
        A 24-week intensive program focused on gaining technical programming
        skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js,
        MySQL, MongoDB, Express, Handelbars.js & ReactJS.
      </p>
      <p>
        <strong>Bachelor of Arts: </strong>St. Vincent College, Latrobe, PA
      </p>
      <p>Major: Communications</p>

      <p>
        <strong>Experience</strong>
      </p>
      <Row>
        <h5>
          Mass Transit Authority Occupation and Health Services | Brooklyn, NY
          12/2018 – 7/25/2020
        </h5>
      </Row>

      <Row>
        <strong>Administrative Assistant</strong>
      </Row>

      <ul>
        <Row>
          <li>
            Gathered status reports from supervisors on employees status to
            confirm testing availability
          </li>
        </Row>
        <Row>
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
          
            <ul />
          </Row>

          <Row>
            <h5>Barnes and Noble | Manhattan, NY 10/2018 – 12/2018</h5>
          </Row>
          <Row>
            <strong>Sales Associate, Seasonal </strong>
          </Row>
          <Row>
            <ul>
              <li>
                Helped customers locate Books, make suggestions and create store
                displays
              </li>
              <li>Finalized customers transactions through the POS Terminal</li>
              <li>
                Maintain an orderly sales floor, restocked and regulate
                inventory as needed
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
            <ul>
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
              NYC Department of Social Services - Office of Disciplinary Affairs
              | Manhattan, NY 05/2017 – 05/2018
            </h5>
          </Row>
          <Row>
            <strong>Administrative Assistant</strong>
          </Row>
          <Row>
            <ul>
              <li>
                Performed data entry and data retrieval of case files to the
                TEAMS database
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
        <ul>
          <li>Created records to be uploaded for billing</li>
          <li>Input 350 of the caseworkers notes into Excel daily</li>
          <li>Transferred all clients’ documents to the new data system</li>
        </ul>
      </Row>
      <Container/>
      <div/>
  );
};

export default Resume;
