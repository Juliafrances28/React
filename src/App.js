import React from "react"; 

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import "./App.css";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Portfolio from "./pages/Portfolio"; 
import Contact from "./pages/Contact"; 
import Resume from "./pages/Resume"; 
import Nav from "./components/Nav/index";




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} /> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;