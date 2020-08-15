import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
