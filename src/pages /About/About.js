



import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();

import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <P>
              Last March I found myself traveling down an unfamiliar track when
              my job at the MTA ended due to Covid. I asked myself, “What would
              be a valuable new skill to help my career thrive during and after
              Covid? And what field would provide the opportunity for ongoing
              growth?” I decided to learn to coding. After an intro course I was
              convinced coding was a skill for which I had a propensity. Coding
              was fun and engaging. I was grateful to be able to return to my
              childhood home in New Jersey and in September I began the
              six-month coding bootcamp at Rutgers University.
            </P>

            <P>
              Turns out that coding is very much like a hobby I’ve enjoyed for
              many years, jigsaw puzzling. I always have one going on my coffee
              table. Coding, like a puzzle, is a series of pieces that need to
              fit together perfectly. Both can take a long time to complete;
              both require patience and determination. And both can be done
              alone or with others. I have found that placing the final piece in
              a challenging jigsaw puzzle feels a lot like the satisfaction of
              seeing the code “work.”
            </P>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
