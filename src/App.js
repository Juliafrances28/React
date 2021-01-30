import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from "/pages/Home";
import About from "/pages/About";
import Portfolio from "/pages/Portfolio";
import Contact from "/pages/Container";
import Resume from "/pages/Resume";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Wrapper>
            <Router>
              <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
              <Footer />
            </Router>
          </Wrapper>
        </div>
      </div>
    );
  }
}
export default App;
