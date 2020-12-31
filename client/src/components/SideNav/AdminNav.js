import React from 'react';
import './SideNav.css';
import logo from '../../assets/images/austria.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class AdminNav extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

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
              <a href="/admin_dashboard">Dashboard</a>
              <a href="/create_assignments">Create Assignments</a>
              <a href="/">Sign Out</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default AdminNav;
