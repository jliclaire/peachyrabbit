import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
// import About from "./components/Home/About";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
