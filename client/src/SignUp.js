import React from "react";
import styles from "./SignUp.module.css";
import logo from "./assets/images/austria.png";
import key from "./assets/images/logo_key_white.png";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
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
              <label for="name">First and Last Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
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
