import React from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import books from "../books.png";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <br />
            <img
              src="https://user-images.githubusercontent.com/61447353/97765519-c8e33380-1ae8-11eb-8f41-890e1b033923.PNG"
              alt="Covid19"
            />

            <p id="covid">
              <br />
              I worked as a team player creating an application where people can
              get information on where to get <br /> tested for
              <a
                className="covid-19"
                href="https://github.com/rquiroz32/Covid-19_TestingApp"
              >
                {" "}
                Covid19{" "}
              </a>
              including facility information and documentation required in order
              to stop the <br /> spread of this pandemic.
              <button type="Git">Github</button>
              <input type="text" id="git" name="name" />
              <button type="Linkedin">linkedin</button>
              <input type="text" id="link" name="name" />
            </p>

            <br />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <img src={books} className="read" alt="books" />
            <p id="books">
              <br />
              As a member of the same team, we created an app called BookBook.{" "}
              <a
                className="BookBook"
                href="https://github.com/Juliafrances28/BookBook"
              >
                {" "}
                BookBook{" "}
              </a>{" "}
              is an online community <br /> created to allow readers who have
              the same reading interests and live nearby to connect and share
              books.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
