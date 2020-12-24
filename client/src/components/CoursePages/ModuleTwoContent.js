import './ModuleTwoContent.css';
import React from 'react';

function ModuleTwoContent() {
  return (
    <div className="Module content">
      <p id="title">Module 2: What subject-university combinations are best-suited for you?</p>
      <ul id="description">
        <li>Find out which subject you want to study.</li>
        <li>
          Identify whether the US or the UK system fits your requirements better. (If you find that
          the US system better fits you, please contact bootcamp@projectaccess.org to discuss
          this!!)
        </li>
        <li>Find out which subject-university combinations best fit your requirements.</li>
        <li>
          Result: You have decided on a ranked list of about 5 target university-subject
          combinations, including a decision which university-subject combination would be your “top
          choice”.
        </li>
      </ul>
    </div>
  );
}

export default ModuleTwoContent;
