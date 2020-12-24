import React from 'react';
import './CourseSideNav.css';
import logo from '../../assets/images/austria.png';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

class CourseSideNav extends React.Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="CourseSideNav">
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
              <a href="/prebootcampcourse">Pre-Bootcamp Course</a>
              <a href="/module1">Module One</a>
              <a href="/module2">Module Two</a>
              <a href="/module3">Module Three</a>
              <a href="/module4">Module Four</a>
              <a href="/module5">Module Five</a>
              <a href="/module6">Module Six</a>
              <a href="/dashboard">
                <FaChevronLeft /> Back to Dashboard
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default CourseSideNav;
