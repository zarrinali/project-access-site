import React from 'react';
import SideNav from '../SideNav/AdminNav';
import './DashboardContent.css';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/auth/isAdmin`)
      .then((res) => {
        this.setState({
          isAdmin: res.data,
          isLoaded: true,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return this.state.isLoaded ? (
      this.state.isAdmin ? (
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
      ) : (
        <Redirect to="/dashboard" />
      )
    ) : (
      <>
        <Loading />
      </>
    );
  }
}

export default DashboardContent;
