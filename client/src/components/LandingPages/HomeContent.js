import React from 'react';
import styles from './HomeContent.module.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import Register from '../Register/Register';
import britain_flag from '../../assets/images/britain_flag.png';
import us_flag from '../../assets/images/us_flag.png';
import europe_flag from '../../assets/images/europe_flag.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUser, faBook } from '@fortawesome/free-solid-svg-icons';

class HomeContent extends React.Component {
  render() {
    return (
      <div className={styles.Home}>
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
            <div className={styles.target_uni_container}>
              <h2>Target Universities</h2>
              <hr />
              <p>
                Our expertise lies in the application to so-called "top universities", i.e.
                selective universities that are characterized by high research output.
              </p>
              <div className={styles.regions}>
                <div className={styles.region}>
                  <img src={britain_flag} className={styles.flag} alt="britain flag" />
                  <h4>Great Britain</h4>
                  <p>
                    Cambridge University, Durham University, Imperial College London, King’s College
                    London, London School of Economics and Political Science, Oxford University,
                    University College London, University of Warwick
                  </p>
                </div>
                <div className={`${styles.region} ${styles.middle}`}>
                  <img src={us_flag} className={styles.flag} alt="us flag" />
                  <h4>United States</h4>
                  <p>
                    Brown University, Columbia University, Cornell University, Dartmouth, Harvard
                    University, Massachusetts Institute of Technology, New York University,
                    Princeton University, Stanford University, UC Berkeley, University of
                    Pennsylvania, Yale University
                  </p>
                </div>
                <div className={styles.region}>
                  <img src={europe_flag} className={styles.flag} alt="europe flag" />
                  <h4>Continental Europe</h4>
                  <p>Coming Soon</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.help}>
            <h2>How we can help you</h2>
            <hr />
            <div className={styles.left}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <p>
                Work with an individual mentor currently attending one of our target universities to
                get personalized feedback on your application.
              </p>
            </div>
            <div className={styles.right}>
              <FontAwesomeIcon icon={faChalkboardTeacher} className={styles.icon} />
              <p>
                Attend our Bootcamp, a three day university application seminar, and acquire the
                skills needed to craft a successful application.
              </p>
            </div>
            <div className={styles.left}>
              <FontAwesomeIcon icon={faBook} className={styles.icon} />
              <p>
                Take our preperation and follow-up courses, where we will help you along the way to
                your target university: from orientation, to the selection of suitable courses, to
                interview training.
              </p>
            </div>
            <button>
              <a href="/program">Learn More</a>
            </button>
          </section>
          <section className={styles.event}>
            <div className={styles.event_container}>
              <h2>Events</h2>
              <hr />
              <h4>There are currently no upcoming events</h4>
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

export default HomeContent;
