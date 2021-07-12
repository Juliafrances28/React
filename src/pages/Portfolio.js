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
          <Col size="md-6">
            <p className="covid">
              <br />
              <br />I worked as a team player creating an application where
              people can get information on where to get tested for covid-19
              including facility information and documentation required in order
              to stop the spread of this pandemic. Deployed site:
              <a
                className="pandemic"
                href="https://rquiroz32.github.io/Covid-19_TestingApp/"
              >
                {" "}
                Covid-19_TestingApp{" "}
              </a>
              github:
              <a
                className="covid-19"
                href="https://github.com/rquiroz32/Covid-19_TestingApp"
              >
                {" "}
                Covid19{" "}
              </a>
            </p>

            <p id="more">
              My role in this project was to create the moreinfo page. The
              front-end team used Material UI as our framework. This page allows
              people to get more information on covid-19 testing including the
              value of getting tested and frequently asked questions. I included
              many design elements including, a header, an image tag, and the
              layout and used css to style my page. My work:
              <a
                className="moreInfo"
                href="https://rquiroz32.github.io/Covid-19_TestingApp/moreInfo.html"
              >
                {" "}
                moreInfo{" "}
              </a>
            </p>
          </Col>
          <Col size="md-6">
            <br />
            <img
              src="https://user-images.githubusercontent.com/61447353/97765519-c8e33380-1ae8-11eb-8f41-890e1b033923.PNG"
              className="health"
              alt="Covid19"
            />
          </Col>
        </Row>

        <Row>
          <Col size="md-6">
            <img
              src="https://user-images.githubusercontent.com/67694214/102821989-18860300-43a6-11eb-8313-25c2dc512b7a.png"
              className="read"
              alt="books"
            />
          </Col>
          <Col size="md-6">
            <p className="books">
              <br />
              <br />
              <br />
              As a member of the same team, we created an app called BookBook.{" "}
              is an online community created to allow readers who have the same
              reading interests and live nearby to connect and share books.
              Deployed site:
              <a
                className="reading"
                href="https://pacific-harbor-27397.herokuapp.com/home"
              >
                {" "}
                Reading{" "}
              </a>
              github:
              <a
                className="BookBook"
                href="https://github.com/Juliafrances28/BookBook"
              >
                {" "}
                BookBook{" "}
              </a>{" "}
            </p>
            <br />
            <p className="books">
              My role in this project was to design the form for the
              registration page. The front-end team used material UI as our
              framework library. I also added multiple design elements which
              improve the viewer appeal of the page. This includes, the header,
              the navbar with the cute dancing book animation and the image of
              the books. I created the proper layout and added buttons. I
              coordinated the colors and styled everything to make it fun and
              eye catching to ultimately encourage someone to join. My work:
              <a
                className="registration"
                href="https://pacific-harbor-27397.herokuapp.com/registration"
              >
                {" "}
                Registration{" "}
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p id="food">
              <br />
              <br />
              <br />
              As a team, we created an app called theresFoodatHome.
              theresFoodatHome is an online app created for users to avoid food
              waste and encourage them to eat at home. The goal was to work
              towards eliminating food waste. theresFoodAtHome helps the users
              keep track of the expiration date on the food they purchased. It
              also offers suggsted recipes to use up foods that will expire
              soon. Deployed site:
              <a
                className="Food"
                href="https://theres-food-at-home.herokuapp.com/"
              >
                {" "}
                theres-food-at-home{" "}
              </a>
              github:
              <a
                className="Food"
                href="https://github.com/johnsondavid1107/theresFoodAtHome"
              >
                {" "}
                theresFoodatHome{" "}
              </a>
            </p>
            <br />
            <p>
              My role in this project was to do the styling for the Sign Up and
              Sign In pages. I worked. I focused primarily on styling aspects
              for both pages using css to generate a cleaner appearance to the
              page. This includes adding images and a title to the header
              section, including a navbar with links, additionally adding
              buttons and a footer.
            </p>
          </Col>
          <Col size="md-6">
            <img src={Food} className="homefood" alt="Food" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
