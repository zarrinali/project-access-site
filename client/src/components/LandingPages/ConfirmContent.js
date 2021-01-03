import React from 'react';
import styles from './ConfirmContent.module.css';
import key_logo from '../../assets/images/logo_key_colour_highres.png';

class ConfirmContent extends React.Component {
  render() {
    return (
      <div className={styles.Confirm}>
        <img src={key_logo} className={styles.logo} alt="logo" />
        <h1>You're almost there...</h1>
        <div>
          <h4>Just one more thing:</h4>
          <p>
            To activate your account, please check your email and click the confirmation link we
            sent you.
          </p>
        </div>
      </div>
    );
  }
}

export default ConfirmContent;
