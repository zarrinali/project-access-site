import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleTwoContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">
            Module 2: What subject-university combinations are best-suited for you?
          </h1>
        </div>
        <div className="container">
          <ul className="description">
            <li>Find out which subject you want to study.</li>
            <li>
              Identify whether the US or the UK system fits your requirements better. (If you find
              that the US system better fits you, please contact bootcamp@projectaccess.org to
              discuss this!!)
            </li>
            <li>Find out which subject-university combinations best fit your requirements.</li>
            <li>
              Result: You have decided on a ranked list of about 5 target university-subject
              combinations, including a decision which university-subject combination would be your
              “top choice”.
            </li>
          </ul>
        </div>
        <button className="submission-button">
          <a id="submission" href="https://airtable.com/shrGNMmEc5z4lA9ZW">
            Submit Work
          </a>
        </button>
      </div>
    </div>
  );
}

export default ModuleTwoContent;
