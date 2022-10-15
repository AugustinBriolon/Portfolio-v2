import React from 'react'
import '../scss/styles.js';

// Composants
import Nav from '../components/Nav/Nav.js';
import Header from '../components/Header/Header.js';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Line from '../components/Line/Line';

function HomePage() {

  return (
    <div className="App">

      <Nav />
      <Header/>
      <Line />
      <Projects />
      <Line />
      <Contact />
      <Line />
      <Footer />

    </div>
  );
}

export default HomePage;
