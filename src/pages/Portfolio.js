import React from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import Navbar from "../components/Navbar/index";

import "bootstrap/dist/css/bootstrap.min.css";


function Portfolio() {
    return (
<Container>
  <Row>
    <Col size="md-12">
      <p id="covid">
        {" "}
        I worked as a team player creating an application where people can get information on where to get tested for{" "}
        <a
          class="covid-19"
          href="https://github.com/rquiroz32/Covid-19_TestingApp"
        >
          {"Covid19"}
       
        </a>{" "}
        including facility information and documentation required in order to
        stop the spread of this pandemic.
      </p>
    </Col>
  </Row>

  <Row>
    <Col size="md-12">
      <P id="books">
        As a member of the same team, we created an app called BookBook.
        <a class="BookBook" href="https://github.com/Juliafrances28/BookBook">
          BookBook{" "}
        </a>{" "}
        is an online community created to allow readers who have the same
        reading interests and live nearby to connect and share books.
      </P>
    </Col>
  </Row>
</Container>
);

};


export default Portfolio; 
