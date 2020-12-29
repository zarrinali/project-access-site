import React from 'react';
import styles from './SignUpContent.module.css';
import logo from '../../assets/images/austria.png';
import key from '../../assets/images/logo_key_white.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SignUpContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:9000/api/auth/isLoggedIn')
      .then((res) => {
        this.setState({
          isAuth: res.data,
        });
      })
      .catch((err) => console.log(err));
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
      .post('http://localhost:9000/api/auth/signup', { user })
      .then((res) => {
        if (res.data.results) {
          this.props.history.push('/confirm');
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.isAuth ? (
      <Redirect to="/" />
    ) : (
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

export default withRouter(SignUpContent);
