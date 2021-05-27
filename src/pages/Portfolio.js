import React from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import Food from "../food.jpeg";
// import Books from "../books.jpeg";

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
              className="health"
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
              to stop the <br /> spread of this pandemic. Deployed site:
              <a
                className="pandemic"
                href="https://rquiroz32.github.io/Covid-19_TestingApp/"
                Covid-19_TestingApp
              >
                {" "}
              </a>
            </p>

            <br />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <img
              src="https://user-images.githubusercontent.com/67694214/102821989-18860300-43a6-11eb-8313-25c2dc512b7a.png"
              className="read"
              alt="books"
            />
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
              books. Deployed site: BookBook{" "}
              <a
                className="reading"
                href="https://github.com/Juliafrances28/BookBook"
              >
                {" "}
              </a>
            </p>
          </Col>
        </Row>
        <br />

        <Row>
          <Col size="md-12">
            <img src={Food} className="home" alt="Food" />
            <p id="food">
              <br />
              As a team, we created an app called theresFoodatHome.{" "}
              <a
                className="Food"
                href="https://github.com/johnsondavid1107/theresFoodAtHome"
              >
                {" "}
                theresFoodatHome{" "}
              </a>{" "}
              is an online app created for users to avoid food waste and
              encourage them to eat at home. The goal was to work towards
              eliminating food waste. theresFoodAtHome helps the users keep
              track of the expiration date on the food they purchased. It also
              offers suggsted recipes to use up foods that will expire soon.
              Deployed site: theresFoodAtHome :
              https://github.com/johnsondavid1107/theresFoodAtHome
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
