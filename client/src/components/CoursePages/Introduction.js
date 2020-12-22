import "./Introduction.css";
import React from "react";

function Introduction() {
    return (
        <div className="content">
            <p id="title">
                Welcome to the Pre-Bootcamp Course!
            </p>
            <ul id="description">
                <li>
                    Hi there and welcome to the Project Access Bootcamp Preparation Course! 
                    As we explained in your personal consultation session, you are expected to prepare some part of Your Way to 
                    top universities before attending the bootcamp. This is to ensure that you can make the most of your bootcamp 
                    experience and really fine-tune your application
                </li>
                
                <li>
                    Please make sure to read all the information provided on here and complete all tasks by the required deadline. Your participation at the bootcamp is contingent on completing this online preparation course and handing in all assignments in time.
                </li>    

                <li>
                    If you have any questions about this course, please email bootcamp@projectaccess.org
                </li>     
            </ul>
            <p id="descr2">
                Before proceeding, one word of encouragement: You don’t need to be super-human to apply to a top university! 
                You might know our target universities from film and media, featuring nobel laureates and famous people. However, 
                it’s important to keep in mind that most people who attend top universities aren’t like that. They’re not all geniuses like Stephen Hawking. 
                In fact, most people are simply passionate about their goals and ready to work hard. If you’ve been given access to this site, 
                we at Project Access think you have what it takes to be successful! All that’s required of you now is to dedicate yourself to 
                this goal and work hard. And we’re here to support you along Your Way.
            </p>
        </div>
    )
}

export default Introduction;