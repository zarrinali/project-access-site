import './Sidebar.css';
import React from 'react';

function Sidebar() {
  return (
    <div className="side-bar">
      <p>Pre-Bootcamp Course</p>
      <ul className="navigation">
        <li>
          <a href="/module1">Module One</a>
        </li>
        <li>
          <a href="/module2">Module Two</a>
        </li>
        <li>
          <a href="/module3">Module Three</a>
        </li>
        <li>
          <a href="/module4">Module Four</a>
        </li>
        <li>
          <a href="/module5">Module Five</a>
        </li>
        <li>
          <a href="/module6">Module Six</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
