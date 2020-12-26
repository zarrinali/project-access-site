import React from 'react';
import Nav from './components/Nav/Nav';
import Content from './components/LandingPages/HomeContent';
import Footer from './components/Footer/Footer';

class Home extends React.Component {
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

export default Home;
