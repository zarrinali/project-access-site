import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import styles from './Program.module.css';
import infographic from './assets/images/infographic.png';
import 'react-multi-carousel/lib/styles.css';

class Program extends React.Component {
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
      <div className={styles.Program}>
        <Nav />
        <header>
          <div className={styles.header_text}>
            <h1 className={styles.title}>Our Program</h1>
            <p className={styles.cta}>
              Learn more about individual schools and their application process.
            </p>
          </div>
        </header>
        <main>
          <section className={`${styles.support} ${styles.container}`}>
            <h2>We Support You</h2>
            <hr />
            <p>
              Project Access Austria accompanies people on their way and helps them overcome
              challenges. Our work in as a non-profit organization is geared towards developing
              holistic approaches to some of the greatest challenges facing our society. To be able
              to act and to remain so is of fundamental importance. With our projects we support
              individuals and communities on their way.
            </p>
          </section>
          <section className={`${styles.infographic} ${styles.gray}`}>
            <div className={styles.container}>
              <h2>A Quick Overview</h2>
              <hr />
              <img src={infographic} alt="infographic" />
            </div>
          </section>
          <section className={`${styles.program_details} ${styles.container}`}>
            <h2>What We Deliver</h2>
            <hr />
            <div className={styles.even}>
              <div className={styles.txt_container}>
                <h3>Your Individual Mentor</h3>
                <h5>Personalized Guidance</h5>
                <p className={styles.summary}>
                  Your path to an international university is individual - that's why we find an
                  individual mentor for you who studies at one of our target universities.
                </p>
                <div className={styles.list}>
                  <p>From 2021 you will receive up to two mentors from us:</p>
                  <ul>
                    <li>
                      Before the Bootcamp, we assign you a personal mentor who will come from
                      Austria if possible. The personal mentor will help you with orientation,
                      choosing the right target university, and preparing for the Bootcamp.
                    </li>
                    <li>
                      After the Bootcamp, you will be assigned a subject mentor who is studying the
                      same or a similar subject for which you are applying at one of your target
                      universities.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.img_container1}></div>
            </div>
            <div className={styles.odd}>
              <div className={styles.txt_container}>
                <h3>The Bootcamp</h3>
                <h5>Application Coaching</h5>
                <p className={styles.summary}>
                  At the Project Access Austria Bootcamp, all Austrian Project Access Austria
                  program participants meet to learn the most important skills for a successful
                  application. In a three-day seminar group of 8-10 people, you will learn from our
                  trainers, who are studying at one of our target universities, how you can apply
                  successfully.
                </p>
                <div className={styles.list}>
                  <p>The following content is covered:</p>
                  <ul>
                    <li>Personal statement writing</li>
                    <li>Interviews Aptitude tests</li>
                    <li>Essay writing</li>
                    <li>Reference letters</li>
                  </ul>
                </div>
                <p>
                  The Bootcamp is the annual Project Access Austria highlight - and a wonderful
                  opportunity to get to know other ambitious young people from Austria.
                </p>
              </div>
              <div className={styles.img_container2}></div>
            </div>
            <div className={styles.even}>
              <div className={styles.txt_container}>
                <h3>Preperation and Follow Up Courses</h3>
                <h5>Assistance from orientation to the first day of study</h5>
                <p className={styles.summary}>
                  We will accompany you on your way with a preparation course for the boot camp, the
                  "Bootcamp Prep Course", and a follow-up course, the "Post Bootcamp Course".
                </p>
                <div className={styles.list}>
                  <ul>
                    <li>
                      In the Bootcamp Prep Course , we accompany you through the orientation phase
                      and the development of the first components of your application.
                    </li>
                    <li>
                      In the Post Bootcamp course , we offer supplementary information webinars at
                      the right time as well as some peer learning groups for joint preparation for
                      the application, such as for interviews.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.img_container3}></div>
            </div>
          </section>
          <section className={styles.video}></section>
          {/* <section className={styles.testimonials_signup}>
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
          </section> */}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Program;
