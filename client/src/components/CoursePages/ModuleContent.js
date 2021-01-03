import './Module.css';
import React, { useEffect, useState } from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

function ModuleContent(props) {

  const match = useRouteMatch('/course/:course');
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios
      .get(`${window.location.origin.toString()}/api/course/specific/${match.params.course}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="Module">
      <SideNav />
      <div className="content">
        <div className="title">
          <h1 id="title">
            {course.CourseName}
          </h1>
        </div>
        <div className="container">
          <ul id="description">
            <li>
              {course.CourseDescription}
            </li>
          </ul>
        </div>
        <button className="submission-button">
          <a id="submission" href={`/course/submission/${course.CourseLink}`}>
            Submit Work
          </a>
        </button>
      </div>
    </div>
  );
}

export default ModuleContent;
