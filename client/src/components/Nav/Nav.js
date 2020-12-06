import React, { Component } from "react";
import logo from "../../assets/images/austria.png";
import "./Nav.css";
import { FaAlignRight } from "react-icons/fa";

class Nav extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="Nav">
        <nav>
          <img src={logo} className="logo" alt="logo" />
          <div>
            <button onClick={this.Toggle}>
              <FaAlignRight />
            </button>
            <ul
              className={this.state.toggle ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Program</a>
              </li>
              <li>
                <a href="/">Bootcamp</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
