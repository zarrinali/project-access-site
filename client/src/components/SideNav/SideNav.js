import React from 'react';
import './SideNav.css';
import logo from '../../assets/images/austria.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import axios from 'axios';

class SideNav extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  logout() {
    axios
      .get(`${window.location.origin.toString()}/api/auth/logout`)
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="SideNav">
        <div className={this.state.toggle ? 'show_nav' : ''}>
          <button onClick={this.Toggle}>
            <FaChevronRight />
            <FaChevronLeft />
          </button>
          <nav>
            <a href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>
            <div>
              <a href="/dashboard">Dashboard</a>
              <a href="/studentaccount">Account Profile</a>
              <a href="/">Application Tracker</a>
              <a href="/" onClick={this.logout}>Sign Out</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default SideNav;
