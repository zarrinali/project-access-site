import React, { Component } from 'react';
import logo from '../../assets/images/austria.png';
import './Nav.css';
import { FaAlignRight } from 'react-icons/fa';

class StudentNav extends Component {
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
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <div>
            <button onClick={this.Toggle}>
              <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? 'nav-links show-nav' : 'nav-links'}>
              <li>
                <a href="/studentaccount">Student Account</a>
              </li>
              <li>
                <a href="/dashboard">Student Dashboard</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default StudentNav;
