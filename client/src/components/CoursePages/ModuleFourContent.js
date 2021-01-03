import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleFourContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">Module 4: Aptitude Tests and/or Writing Samples</h1>
        </div>
        <div className="container">
          <ul id="description">
            <li>
              Find out if you need to take aptitude tests and/or create writing samples (if you
              don’t already know from Level 3).
            </li>
            <li>
              Take an initial diagnostic test for your aptitude test (if you are required to take
              one).
            </li>
            <li>
              Start training for your test and adapt your time plan if you need more time to prepare
              (if you are required to take one).
            </li>
            <li>
              If you need to provide writing samples, you should work with your mentor on creating
              first drafts of them.
            </li>
            <li>
              Result: I know the format of the aptitude test, my base score, and I have a plan to
              train to improve my score to the level required for admission.
            </li>
          </ul>
        </div>

        <a id="submission" href="https://airtable.com/shr087pSSHaTchuLS">
          <button className="submission-button">Submit Work</button>
        </a>
      </div>
    </div>
  );
}

export default ModuleFourContent;
