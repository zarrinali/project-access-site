import React from 'react';
import './Loading.css';
import key from '../../assets/images/logo_key_white.png';

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
