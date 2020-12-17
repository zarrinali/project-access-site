import React from 'react';
import styles from './SignUp.module.css';
import logo from './assets/images/austria.png';
import key from './assets/images/logo_key_white.png';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('http://localhost:9000/auth/signup', { user })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => {
        return (
          <div>
            {res.data.user.record_id}
            {res.data.user.email}
            {res.data.message}
          </div>
        );
      })
      .catch((err) => console.log(err));
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
              <button type="submit">Register</button>
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

export default SignUp;
