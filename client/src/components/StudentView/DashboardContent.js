import axios from 'axios';
import React from 'react';
import SideNav from '../SideNav/SideNav';
import './DashboardContent.css';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      lateAssignments: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/course/assignmentDeadlines`)
      .then((res) => {
        const assignmentList = [];
        res.data.assignments.forEach(function (assignment) {
          const date = new Date(assignment.AssignmentDeadlineDateTime);
          const formatDate = date.getDate() + "/" + (date.getMonth() + 1);
          assignmentList.push(
            <div className="assignment">
              <p className="date">{formatDate}</p>
              <p className="name">{assignment.StudentAssignmentID}</p>
            </div>
          );
        });

        const lateAssignmentList = [];
        res.data.lateAssignments.forEach(function (assignment) {
          const date = new Date(assignment.AssignmentDeadlineDateTime);
          const formatDate = date.getDate() + "/" + (date.getMonth() + 1);
          lateAssignmentList.push(
            <div className="assignment">
              <p className="date">{formatDate}</p>
              <p className="name">{assignment.StudentAssignmentID}</p>
            </div>
          );
        });

        this.setState({
          assignments: assignmentList,
          lateAssignments: lateAssignmentList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Dashboard">
        <SideNav />
        <div className="content">
          <header>
            <h1 className="title">Dashboard</h1>
          </header>
          <main>
            <section className="container courses">
              <h2>Your Courses</h2>
              <a href="/prebootcampcourse">
                <div className="course">
                  <h3>Pre-Bootcamp Course</h3>
                </div>
              </a>
              <a href="/prebootcampcourse">
                <div className="course">
                  <h3>Post-Bootcamp Course</h3>
                </div>
              </a>
            </section>
            <section className="container assignments">
              <div>
                <h2>Upcoming Assignments</h2>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 1</p>
                </div>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 2</p>
                </div>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 3</p>
                </div>
                {this.state.assignments}
              </div>
              <div>
                <h2>Late Assignments</h2>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 1</p>
                </div>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 2</p>
                </div>
                <div className="assignment">
                  <p className="date">11/4</p>
                  <p className="name">Assignment 3</p>
                </div>
                {this.state.lateAssignments}
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default DashboardContent;
