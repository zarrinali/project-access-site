import React from 'react';
import Nav from './components/Nav/Nav';
import Content from './components/LandingPages/SuccessContent';
import Footer from './components/Footer/Footer';

class Success extends React.Component {
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

export default Success;
