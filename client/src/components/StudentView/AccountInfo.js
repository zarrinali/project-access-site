import React, { useEffect } from 'react';
import axios from 'axios';
import SideNav from '../SideNav/SideNav';
import './AccountInfo.css';

function AccountInfo() {
  useEffect(() => {
    axios.get(`${window.location.origin.toString()}/api/user/profile`).then((res) => {
      console.log(res);
    });
  });

  return (
    <div className="Account">
      <SideNav />
      <div className="content">
        <header>
          <h1 className="title">Account Profile</h1>
        </header>
        <main>
          <section className="container">
            <h2>Your Info</h2>
            <div className="info">
              <div>
                <h5>Name: </h5>
                <p>Jane Doe</p>
              </div>
              <div>
                <h5>Email: </h5>
                <p>example@contact.com</p>
              </div>
              <div>
                <h5>Address: </h5>
                <p>12345 Somewhere Rd, City, State 111111</p>
              </div>
              <div>
                <h5>School: </h5>
                <p>High School</p>
              </div>
            </div>
          </section>
          <section className="container">
            <h2>Program Info</h2>
            <div className="info">
              <div>
                <h5>General Mentor: </h5>
                <p>Jane Doe</p>
              </div>
              <div>
                <h5>Email: </h5>
                <p>example@contact.com</p>
              </div>
              <div>
                <h5>Subject Mentor: </h5>
                <p>Jane Doe</p>
              </div>
              <div>
                <h5>Email: </h5>
                <p>example@contact.com</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AccountInfo;
