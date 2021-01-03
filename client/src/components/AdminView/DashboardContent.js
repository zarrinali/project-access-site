import React from 'react';
import SideNav from '../SideNav/AdminNav';
import './DashboardContent.css';

class DashboardContent extends React.Component {
  render() {
    return (
      <div className="AdminDashboard">
        <SideNav />
        <div className="content">
          <header>
            <h1 className="title">Dashboard</h1>
          </header>
          <main>
            <section className="students">
              <h2>Your Students</h2>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default DashboardContent;
