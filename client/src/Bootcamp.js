import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Dropdown from "./components/Dropdown/Dropdown";
import faqData from "./assets/data/faqData";
import styles from "./Bootcamp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";

class Bootcamp extends React.Component {
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
      <div className={styles.Bootcamp}>
        <Nav />
        <header>
          <div className={styles.header_text}>
            <h1 className={styles.title}>Bootcamp</h1>
            <p className={styles.cta}>
              A free seminar that prepares you for top university applications.
            </p>
          </div>
        </header>
        <main>
          <section className={`${styles.how} ${styles.container}`}>
            <h2>How it Works</h2>
            <hr />
            <p>
              In a seminar group of 8-10 people, you will learn from our
              trainers, who are studying at one of our target universities, how
              you can apply successfully. The exact program varies for each
              participant depending on your seminar group and target school.
            </p>
          </section>
          <section className={`${styles.description} ${styles.gray}`}>
            <div className={styles.container}>
              <h2>Bootcamp 2021</h2>
              <hr />
              <p>
                Bootcamp 2020 took place from July 31st to August 2nd. The
                details for the Bootcamp 2021 are currently being worked out.
                You can already register for the Bootcamp 2021! ​ In 2021, the
                bootcamp will be open to Master and PhD applicants for the first
                time. We will organize a seminar group of 8-12 participants for
                "Graduate" applicants.
              </p>
              <button>
                <a href="/signup">Register</a>
              </button>
            </div>
          </section>
          <section className={`${styles.schedule} ${styles.container}`}>
            <h2>The Schedule</h2>
            <hr />
            <div className={`${styles.row} ${styles.even}`}>
              <div className={styles.col}>
                <div className={styles.card}>
                  <h3>Day 0</h3>
                  <h4>Thursday</h4>
                </div>
              </div>
              <div className={styles.col}>
                <p>
                  Arrive at our seminar! Relax and wait for the official start
                  of the Bootcamp.
                </p>
              </div>
            </div>
            <div className={`${styles.row} ${styles.odd}`}>
              <div className={styles.col}>
                <div className={`${styles.card} ${styles.cardBg}`}>
                  <h3>Day 1</h3>
                  <h4>Friday</h4>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.list}>
                  <p>Get to know other participants</p>
                  <p>Mock Exams</p>
                  <p>First Overview: What is a good application?</p>
                  <p>Skills Workshop and Presentations by Our Sponsors</p>
                  <p>Evening Event</p>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.even}`}>
              <div className={styles.col}>
                <div className={`${styles.card} ${styles.cardBg}`}>
                  <h3>Day 2</h3>
                  <h4>Saturday</h4>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.list}>
                  <p>Interviews</p>
                  <p>Aptitude Exams</p>
                  <p>Personal Statment Writing </p>
                  <p>Essay Writing</p>
                  <p>Research Statement</p>
                  <p>Statement of Interest</p>
                  <p>Letters of Reference</p>
                  <p>Evening Event</p>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.odd}`}>
              <div className={styles.col}>
                <div className={styles.card}>
                  <h3>Day 3</h3>
                  <h4>Sunday</h4>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.list}>
                  <p>Further Seminar Contents</p>
                  <p>Transfer Exercises</p>
                  <p>Farewell</p>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.faq} ${styles.gray}`}>
            <div className={styles.container}>
              <h2>Frequently Asked Questions</h2>
              <hr />
              {faqData.map((faq) => (
                <div className={styles.faqDropdown}>
                  <Dropdown faq={faq} />
                </div>
              ))}
            </div>
          </section>
          <section className={styles.testimonials_signup}>
            <div className={styles.testimonials}>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className={styles.quote_right}
              />
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className={styles.quote_left}
              />
              <Carousel />
            </div>
            <div className={styles.signup}>
              <h3>Sign Up Here for Help with Your Applications</h3>
              <p>
                To find out more about how Project Access can help you, we only
                ask for your first name and your email address to send you more
                information. Just fill out the form below and we will get in
                touch!
              </p>
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Bootcamp;
