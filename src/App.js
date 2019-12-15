import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import logo from "./img/logo.JPG";
import Home from "./components/Home/Home";
import Contact from "./components/Home/Contact";
import Price from "./components/Home/Price";
import Gallery from "./components/Home/Gallery";
import About from "./components/Home/About";
import "./App.scss";

class App extends React.Component {
  state = {
    darkNavbar: false
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.changeNavbarBackgroundOnScroll);
  };

  changeNavbarBackgroundOnScroll = () => {
    const distanceY = window.pageYOffset;

    if (distanceY > 0) {
      this.setState({ darkNavbar: true });
    } else {
      this.setState({ darkNavbar: false });
    }
  };

  render() {
    return (
      <HashRouter>
        <nav
          className={
            this.state.darkNavbar
              ? "navbar background-dark"
              : "navbar background-transparent"
          }
        >
          <div className="logo">
            <img src={logo} />
          </div>
          <ul className="nav-menu">
            <li className="nav-items">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/price">Price</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/price" component={Price}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;
