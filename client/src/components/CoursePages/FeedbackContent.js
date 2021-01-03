import axios from 'axios';
import React from 'react';
import './Module.css';
import './FeedbackContent.css';
import SideNav from '../CourseSideNav/CourseSideNav';

class FeedbackContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
      studentId: '',
    };
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/course/assignmentFeedback`)
      .then((res) => {
        const feedbackList = [];
        let num = 1;

        res.data.forEach(function (assignment) {
          feedbackList.push(
            <div>
              <div className="lesson">
                <h5>{assignment.AssignmentName}</h5>
              </div>
              <p>{assignment.AssignmentInstructorFeedback}</p>
            </div>
          );
          num = num + 1;
        });

        this.setState({
          feedback: feedbackList,
        });

        console.log(this.state.studentId);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Module Feedback">
        <SideNav />
        <div className="content">
          <header className="title">
            <h1 id="title">Feedback</h1>
          </header>
          <main>
            
            {this.state.feedback}
            {/* <div>
              <div className="lesson">
                <h5>Module 1</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div>
            <div>
              <div className="lesson">
                <h5>Module 2</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div>
            <div>
              <div className="lesson">
                <h5>Module 3</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div>
            <div>
              <div className="lesson">
                <h5>Module 4</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div>
            <div>
              <div className="lesson">
                <h5>Module 5</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div>
            <div>
              <div className="lesson">
                <h5>Module 6</h5>
              </div>
              <p>
                Have a second look at your results from Level 1 to get some inspiration for your
                personal statement (UK) / general essay (US).
              </p>
            </div> */}
          </main>
        </div>
      </div>
    );
  }
}

export default FeedbackContent;
