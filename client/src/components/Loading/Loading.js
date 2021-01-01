import React from 'react';
import './Loading.css';
import key from '../../assets/images/logo_key_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Loading extends React.Component {
  render() {
    return (
      <div className="Loading">
        <img src={key} className="key" alt="key" />
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Loading;
