import React from 'react';
import SideNav from '../SideNav/SideNav';
import './ApplicationTrackerContent.css';

class ApplicationTrackerContent extends React.Component {
  render() {
    return (
      <div className="Tracker">
        <SideNav />
        <div className="content">
          <header>
            <h1 className="title">Application Tracker</h1>
          </header>
          <main>
            <div className="container">
              <div className="stage">
                <hr className="vertical" />
                <hr className="horizontal even" />
                <h2>Project Access Application</h2>
              </div>
              <div className="stage">
                <hr className="vertical" />
                <hr className="horizontal odd" />
                <h2>Consultation</h2>
              </div>
              <div className="stage">
                <hr className="vertical" />
                <hr className="horizontal even" />
                <h2>Project Access Decision</h2>
              </div>
              <div className="stage">
                <hr className="vertical" />
                <hr className="horizontal odd" />
                <h2>Enrollment in Pre-Bootcamp Course</h2>
              </div>
              <div className="stage">
                <hr className="vertical unfinished" />
                <hr className="horizontal even unfinished" />
                <h2>Enrollment in Post-Bootcamp Course</h2>
              </div>
              <div className="stage">
                <hr className="vertical unfinished" />
                <hr className="horizontal odd unfinished" />
                <h2>Applied to University</h2>
              </div>
              <div className="stage">
                <hr className="vertical unfinished" />
                <hr className="horizontal even unfinished" />
                <h2>University Decision</h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default ApplicationTrackerContent;
