import "./StudentSidebar.css";
import React from "react";

function StudentSidebar() {
    return (
        <div className="side-bar">
            <ul className="navigation">
                <li>
                    <a href="/studentaccount">Account Profile</a>
                </li>
                <li>
                    <a href="/applicationtracker">Application Tracker</a>
                </li>
                <li>
                    <a href="/inbox">Inbox</a>
                </li>
                <li>
                    <a href="/courses">Courses</a>
                </li>
                <li>
                    <a href="/signout">Sign Out</a>
                </li>
            </ul>
        </div>
    )
}

export default StudentSidebar;