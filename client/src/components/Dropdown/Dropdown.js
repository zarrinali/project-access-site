import React, { Component } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

class Dropdown extends Component {
  state = {
    open: false,
  };
  Toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="Dropdown">
        <div>
          <div onClick={this.Toggle} className="btn">
            <p>{this.props.faq.question}</p>
            {this.state.open ? (
              <FontAwesomeIcon icon={faMinus} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className="icon" />
            )}
          </div>
          <div className={this.state.open ? 'dropdown show-nav' : 'dropdown nav_links'}>
            <p>{this.props.faq.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
