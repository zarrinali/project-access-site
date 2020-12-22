import "./ModuleOneContent.css";
import React from "react";

function ModuleOneContent() {
    return (
        <div className="content">
            <p id="title">
                Module 1: Why do you want to apply to a top university?
            </p>
            <ul id="description">
                <li>
                    This module is all about you! Why do you want to apply to a top university? 
                    Motivation can vary widely for different people – from wanting to study a specific subject, 
                    over career ambitions, to interests to learn from specific academics.
                </li>
                <li>
                Your motivation might change over time, but getting clear on why you want to apply is important 
                (a) for your own dedication and (b) as a grounding for a successful application.
                </li>
                <li>
                Result: I know why you want to apply for top universities and what you expect from this.
                </li>
            </ul>
        </div>
    )
}

export default ModuleOneContent;