import React from 'react';
import styles from './SignUpContent.module.css';
import logo from '../../assets/images/austria.png';
import key from '../../assets/images/logo_key_white.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SignUpContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.disabled) {
      this.setState({
        disabled: true,
      });
    }

    const user = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.first,
      lastName: this.state.last,
    };
    
    axios
      .post(`${window.location.origin.toString()}/api/auth/signup`, { user })
      .then((res) => {
        if (res.data.results) {
          this.props.history.push('/confirm');
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
        });
      });
  }

  render() {
    return (
      <div className={styles.SignUp}>
        <main>
          <a href="/" className={styles.logo_link}>
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <section className={styles.card}>
            <h1>Sign Up</h1>
            <img src={key} className={styles.key} alt="key" />
            <form onSubmit={this.handleSubmit}>
              <div className={styles.name}>
                <div>
                  <label for="first">First Name</label>
                  <input
                    type="text"
                    id="first"
                    name="first"
                    value={this.state.first}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <label for="last">Last Name</label>
                  <input
                    type="text"
                    id="last"
                    name="last"
                    value={this.state.last}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <button type="submit" disabled={this.state.disabled}>
                {this.state.disabled ? "Registering.." : "Register"}
              </button>
            </form>
            <p className={styles.sign_up}>
              Already have an account? <a href="/login">Login</a>
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default withRouter(SignUpContent);
