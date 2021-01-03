import React from 'react';
import SideNav from '../SideNav/AdminNav';
import './CreateAssignmentsContent.css';

class CreateAssignments extends React.Component {
  render() {
    return (
      <div className="CreateAssignments">
        <SideNav />
        <div className="content">
          <header>
            <h1 className="title">Create Assignments</h1>
          </header>
          <main>Airtable</main>
        </div>
      </div>
    );
  }
}

export default CreateAssignments;
