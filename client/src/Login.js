import React from 'react';
import styles from './Login.module.css';
import logo from './assets/images/austria.png';
import key from './assets/images/logo_key_white.png';
import axios from 'axios';

class Login extends React.Component {
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
      .post('http://localhost:9000/auth/login', { user })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => {
        return (
          <div>
            {res.data.token}
            {res.data.message}
          </div>
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={styles.Login}>
        <main>
          <a href="/" className={styles.logo_link}>
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
          <section className={styles.card}>
            <h1>Login</h1>
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
              <button type="submit">Login</button>
            </form>
            <p className={styles.sign_up}>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
            <a href="/">Forgot Password</a>
          </section>
        </main>
      </div>
    );
  }
}

export default Login;