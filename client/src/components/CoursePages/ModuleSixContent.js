import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleSixContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">Module 6: Online Application System and Letters of Reference</h1>
        </div>
        <div className="container">
          <ul id="description">
            <li>Create an account in the relevant application systems and “have a look around”.</li>
            <li>
              Make sure you understand everything in the application system. Ask your mentor if you
              have any questions.
            </li>
            <li>
              Find out which references you need to supply and who would qualify as a referee. Some
              referees will let you help them write a reference, or at least create a “cheat sheet”
              for them.
            </li>
            <li>
              Result: I understand the online application system and I have a draft of a reference
              or a cheat sheet for my referee.
            </li>
          </ul>
        </div>

        <a id="submission" href="https://airtable.com/shrKytx6QNUv8Y1cx">
          <button className="submission-button">Submit Work</button>
        </a>
      </div>
    </div>
  );
}

export default ModuleSixContent;
