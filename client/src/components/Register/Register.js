import React from 'react';
import './Register.css';
import Carousel from '../Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
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
      <div className="testimonials_signup">
        <div className="testimonials">
          <FontAwesomeIcon icon={faQuoteRight} className="quote_right" />
          <FontAwesomeIcon icon={faQuoteLeft} className="quote_left" />
          <Carousel />
        </div>
        <div className="signup">
          <h3>Sign Up Here for Help with Your Applications</h3>
          <p>
            To find out more about how Project Access can help you, we only ask for your first name
            and your email address to send you more information. Just fill out the form below and we
            will get in touch!
          </p>
          <form onSubmit={this.handleSubmit}>
            <label for="name">First Name</label>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
