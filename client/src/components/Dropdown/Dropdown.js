import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    open: false,
  };
  Toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Dropdown">
        <div>
          <button onClick={this.Toggle}>
            <p>{this.props.faq.question}</p>
          </button>
          <div
            className={
              this.state.open ? "dropdown show-nav" : "dropdown nav_links"
            }
          >
            <p>{this.props.faq.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
