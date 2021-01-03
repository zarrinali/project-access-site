import './Module.css';
import React from 'react';
import SideNav from '../CourseSideNav/CourseSideNav';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class ModuleSubmissionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',
      assignmentId: '',
      course: {},
      courseLink: this.props.match.params.course,
    }
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/user/student/studentInformation`)
      .then((res) => {
        this.setState({
          studentId: res.data.StudentID,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${window.location.origin.toString()}/api/course/specific/${this.state.courseLink}`)
      .then((res) => {
        this.setState({
          course: res.data,
          assignmentId: res.data.AssignmentID[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  render() {
    return (
      <div className="Module">
        <SideNav />
        <div className="content">
          <div className="title">
            <h1 id="title">
              {this.state.course.CourseName}
            </h1>
          </div>
          <div className="container">
            {this.state.studentId ?
              <iframe
                class="airtable-embed airtable-dynamic-height"
                src={`https://airtable.com/embed/shrWaflUNFdZZPyNa?backgroundColor=yellow&prefill_StudentID=${this.state.studentId}&prefill_AssignmentID=${this.state.assignmentId}`}
                frameborder="0"
                onmousewheel=""
                width="100%"
                height="1382px"
                style={{
                  width: '100%',
                  height: '1384px',
                  background: 'transparent',
                  border: '1px solid #ccc',
                }}
                title="Airtable Form"
              ></iframe> : ""
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ModuleSubmissionContent);
