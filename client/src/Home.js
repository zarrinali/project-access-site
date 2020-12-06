import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import styles from "./Home.module.css";
import britain_flag from "./assets/images/britain_flag.png";
import us_flag from "./assets/images/us_flag.png";
import europe_flag from "./assets/images/europe_flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUser,
  faBook,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";

class Home extends React.Component {
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
      <div className={styles.Home}>
        <Nav />
        <header>
          <div className={styles.image_carousel}>
            <ImageCarousel />
          </div>
          <div className={styles.header_text}>
            <h1 className={styles.title}>Project Access Austria</h1>
            <p className={styles.cta}>Apply to top universities.</p>
            <p>We'll help you - free of charge.</p>
          </div>
        </header>
        <main>
          <section className={styles.target_uni}>
            <h2>Target Universities</h2>
            <p>
              Our expertise lies in the application to so-called "top
              universities", i.e. selective universities that are characterized
              by high research output.
            </p>
            <div className={styles.regions}>
              <div className={styles.region}>
                <img
                  src={britain_flag}
                  className={styles.flag}
                  alt="britain flag"
                />
                <h4>Great Britain</h4>
                <p>
                  Cambridge University, Durham University, Imperial College
                  London, King’s College London, London School of Economics and
                  Political Science, Oxford University, University College
                  London, University of Warwick
                </p>
              </div>
              <div className={`${styles.region} ${styles.middle}`}>
                <img src={us_flag} className={styles.flag} alt="us flag" />
                <h4>United States</h4>
                <p>
                  Brown University, Columbia University, Cornell University,
                  Dartmouth, Harvard University, Massachusetts Institute of
                  Technology, New York University, Princeton University,
                  Stanford University, UC Berkeley, University of Pennsylvania,
                  Yale University
                </p>
              </div>
              <div className={styles.region}>
                <img
                  src={europe_flag}
                  className={styles.flag}
                  alt="europe flag"
                />
                <h4>Continental Europe</h4>
                <p>Coming Soon</p>
              </div>
            </div>
          </section>
          <section className={styles.help}>
            <div className={styles.help_container}>
              <h2>How we can help you</h2>
              <div className={styles.left}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <p>
                  Work with an individual mentor currently attending one of our
                  target universities to get personalized feedback on your
                  application.
                </p>
              </div>
              <div className={styles.right}>
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className={styles.icon}
                />
                <p>
                  Attend our Bootcamp, a three day university application
                  seminar, and acquire the skills needed to craft a successful
                  application.
                </p>
              </div>
              <div className={styles.left}>
                <FontAwesomeIcon icon={faBook} className={styles.icon} />
                <p>
                  Take our preperation and follow-up courses, where we will help
                  you along the way to your target university: from orientation,
                  to the selection of suitable courses, to interview training.
                </p>
              </div>
              <button>
                <a href="/">Learn More</a>
              </button>
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

export default Home;
