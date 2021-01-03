import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleThreeContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">Module 3: How do I apply to my top choices?</h1>
        </div>
        <div className="container">
          <ul id="description">
            <li>
              Double check that you can realistically satisfy all required admission criteria in
              time for the application of your top 5s.
            </li>
            <li>
              Find out precisely what you need to do (e.g.: which tests to take, which documents to
              prepare) for your top 5.
            </li>
            <li>
              Create a time plan, from now until the application (and interview), to avoid surprises
              and structure your preparation.
            </li>
            <li>
              Result: You know precisely what you need to do, and when you need to do it, to get
              your application ready in time and be prepared for exams.
            </li>
          </ul>
        </div>

        <a id="submission" href="https://airtable.com/shrY40UWUokK7a9AD">
          <button className="submission-button">Submit Work</button>
        </a>
      </div>
    </div>
  );
}

export default ModuleThreeContent;
