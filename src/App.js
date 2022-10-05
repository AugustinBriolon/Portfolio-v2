import React from 'react'
import './scss/styles.js';

// Composants
import Nav from './components/Nav/Nav.js';
import Header from './components/Header/Header.js';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Line from './components/Line/Line';

function App() {

  console.log('%cBienvenue aux Développeurs', 'font-weight: bold; font-size: 50px;color: rgb(47,128,237); text-shadow: 3px 3px 0 rgb(4,77,145) , 6px 6px 0 rgb(42,21,113)')
  console.log('%cVous pouvez voir le code source de ce site sur mon Github : https://github.com/AugustinBriolon/Portfolio-v2', 'font-size: 15px')

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

export default App;
