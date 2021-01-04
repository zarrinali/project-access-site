import axios from 'axios';
import React from 'react';
import SideNav from '../SideNav/SideNav';
import './DashboardContent.css';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      isLoaded: false,
      assignments: [],
      lateAssignments: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/auth/isAdmin`)
      .then((res) => {
        this.setState({
          isAdmin: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${window.location.origin.toString()}/api/course/assignmentDeadlines`)
      .then((res) => {
        const assignmentList = [];
        res.data.assignments.forEach(function (assignment) {
          const date = new Date(assignment.AssignmentDeadlineDateTime);
          const formatDate = date.getDate() + '/' + (date.getMonth() + 1);
          assignmentList.push(
            <div className="assignment">
              <p className="date">{formatDate}</p>
              <p className="name">{assignment.AssignmentName}</p>
            </div>
          );
        });

        const lateAssignmentList = [];
        res.data.lateAssignments.forEach(function (assignment) {
          const date = new Date(assignment.AssignmentDeadlineDateTime);
          const formatDate = date.getDate() + '/' + (date.getMonth() + 1);
          lateAssignmentList.push(
            <div className="assignment">
              <p className="date">{formatDate}</p>
              <p className="name">{assignment.AssignmentName}</p>
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
    return this.state.isLoaded ? (
      this.state.isAdmin ? (
        <Redirect to="/admin_dashboard" />
      ) : (
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
                  {/* <div className="assignment">
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
                  </div> */}
                  {this.state.assignments}
                </div>
                <div>
                  <h2>Late Assignments</h2>
                  {/* <div className="assignment">
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
                  </div> */}
                  {this.state.lateAssignments}
                </div>
              </section>
            </main>
          </div>
        </div>
      )
    ) : (
      <>
        <Loading />
      </>
    );
  }
}

export default DashboardContent;
