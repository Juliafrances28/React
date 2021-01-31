import React from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import Nav from "../components/Nav/index";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <img src="https://user-images.githubusercontent.com/61447353/97765519-c8e33380-1ae8-11eb-8f41-890e1b033923.PNG" />

          <p id="covid">
            I worked as a team player creating an application where people can
            get information on where to get tested for
            <a
              class="covid-19"
              href="https://github.com/rquiroz32/Covid-19_TestingApp"
            >
              {" "}
              Covid19
            </a>
            including facility information and documentation required in order
            to stop the spread of this pandemic.
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <img src="https://user-images.githubusercontent.com/67694214/" />

          <p id="books">
            As a member of the same team, we created an app called BookBook.
            <a
              class="BookBook"
              href="https://github.com/Juliafrances28/BookBook"
            >
              {" "}
              BookBook
            </a>
            is an online community created to allow readers who have the same
            reading interests and live nearby to connect and share books.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
