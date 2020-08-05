import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import '../stylesheets/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
