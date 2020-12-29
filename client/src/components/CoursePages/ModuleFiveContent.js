import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';

function ModuleFiveContent() {
  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">
            Module 5: Personal Statement (for UK applicants) or General Essay (for US applicants)
          </h1>
        </div>
        <div className="container">
          <ul id="description">
            <li>
              If you want to apply to the US, please first contact bootcamp@projectaccess.org to
              discuss this.
            </li>
            <li>
              Have a second look at your results from Level 1 to get some inspiration for your
              personal statement (UK) / general essay (US).
            </li>
            <li>
              Write a few first drafts of the Personal Statement, so you can bring a copy to the
              Bootcamp.
            </li>
            <li>Get feedback on your drafts from your mentor.</li>
            <li>
              Result: A good draft of your personal statement that you will bring to the Bootcamp.
              (You will need to submit your personal statement to the Bootcamp team about 3 weeks
              before the bootcamp.)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModuleFiveContent;
