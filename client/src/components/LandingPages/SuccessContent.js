import React from 'react';
import styles from './ConfirmContent.module.css';
import key_logo from '../../assets/images/logo_key_colour_highres.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SuccessContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      verificationToken: this.props.match.params.verificationToken 
    }
  }
  
  componentDidMount() {
    axios
      .get(`${window.location.origin.toString()}/api/auth/verification/${this.state.verificationToken}`)
      .catch((err) => console.log(err));
  }

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

export default withRouter(SuccessContent);
