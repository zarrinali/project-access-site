import React from 'react';
import Nav from './components/Nav/Nav';
import Content from './components/LandingPages/BootcampContent';
import Footer from './components/Footer/Footer';

class Bootcamp extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Bootcamp;
