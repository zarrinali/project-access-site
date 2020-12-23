import React from 'react';
import Nav from './components/Nav/Nav';
import Content from './components/LandingPages/ProgramContent';
import Footer from './components/Footer/Footer';

class Program extends React.Component {
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

export default Program;
