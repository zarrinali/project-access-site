import "./AccountInfo.css";
import React from "react";

function AccountInfo() {
    return (
        <div className="container">
            <p className="header"> Student Profile </p> 
            <p className="studentinfo">
                <ul>
                    <li> Name: </li>
                    <li> Email: </li>
                    <li> Address: </li>
                    <li> School: </li>
                </ul>
            </p>  
            <p className="programinfo">
                <ul>
                    <li> General Mentor:  </li>
                    <li> Email: </li>
                    <li> Subject Mentor: </li>
                    <li> Email: </li>
                </ul>
            </p>        
            <p className="uploadeddocs">
  
                <ul className="documents">

                    <li>

                    </li>
                </ul>
            </p>
        </div>
    )
}


export default AccountInfo;