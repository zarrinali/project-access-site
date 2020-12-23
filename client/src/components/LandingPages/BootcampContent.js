import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Register from '../Register/Register';
import faqData from '../../assets/data/faqData';
import styles from './BootcampContent.module.css';

class BootcampContent extends React.Component {
  render() {
    return (
      <div className={styles.Bootcamp}>
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
              In a seminar group of 8-10 people, you will learn from our trainers, who are studying
              at one of our target universities, how you can apply successfully. The exact program
              varies for each participant depending on your seminar group and target school.
            </p>
          </section>
          <section className={`${styles.description} ${styles.gray}`}>
            <div className={styles.container}>
              <h2>Bootcamp 2021</h2>
              <hr />
              <p>
                Bootcamp 2020 took place from July 31st to August 2nd. The details for the Bootcamp
                2021 are currently being worked out. You can already register for the Bootcamp 2021!
                ​ In 2021, the bootcamp will be open to Master and PhD applicants for the first
                time. We will organize a seminar group of 8-12 participants for "Graduate"
                applicants.
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
                <p>Arrive at our seminar! Relax and wait for the official start of the Bootcamp.</p>
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
          <section>
            <Register />
          </section>
        </main>
      </div>
    );
  }
}

export default BootcampContent;
