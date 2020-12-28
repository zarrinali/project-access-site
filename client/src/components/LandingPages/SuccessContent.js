import React from 'react';
import styles from './ConfirmContent.module.css';
import key_logo from '../../assets/images/logo_key_colour_highres.png';

class SuccessContent extends React.Component {
  render() {
    return (
      <div className={styles.Confirm}>
        <img src={key_logo} className={styles.logo} alt="logo" />
        <h1>Success!</h1>
        <div>
          <h4>We're so excited to have you with us.</h4>
          <p>You can get started right away with the login button below.</p>
          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    );
  }
}

export default SuccessContent;
