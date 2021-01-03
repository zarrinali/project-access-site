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
                <a href="https://airtable.com/invite/l?inviteId=invRnILXoUYYLsPDN&inviteToken=949f55a28ed8a4f45f7a4e399aa0b8efbc9e9261fc15ff27068c465b1ac46ecd">
                  Click here if you cannot edit the table.
                </a>
                <iframe 
                  class="airtable-embed" 
                  src="https://airtable.com/embed/shrLWl8sdNVNV318X?backgroundColor=yellow" 
                  frameborder="0" 
                  onmousewheel="" 
                  style={{
                    width: "100%", 
                    height: "533px", 
                    background: "transparent", 
                    border: "1px solid #ccc"}}
                    title="Airtable embed"
                ></iframe>
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
