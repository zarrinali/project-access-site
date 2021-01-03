import "./AccountInfo.css";
import React, { useEffect } from "react";
import axios from "axios";
import SideNav from '../SideNav/SideNav';

function AccountInfo() {
    useEffect(() => {
        axios
            .get(`${window.location.origin.toString()}/api/user/profile`)
            .then((res) => {
                console.log(res);
            });
    });

    return (
        <div className="Account">
            <SideNav />
            <div className="content">
                <header>
                    <h1 className="title">Student Account</h1>
                </header>
                <main>
                    <div className="container">
                        <p className="details"> 
                            <ul>
                                <li>Name: </li>
                                <li>Email: </li>
                                <li>Address: </li>
                                <li>School: </li>
                            </ul>
                        </p>
                        <p className="mentordetails">
                            <ul>
                                <li>General Mentor: </li>
                                <li>Email: </li> 
                                <li>Subject Mentor: </li>
                                <li>Email: </li> 
                            </ul>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    
    )
}


export default AccountInfo;