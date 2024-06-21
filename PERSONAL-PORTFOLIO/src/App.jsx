import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import './App.css';

const App = () => {
  return (
    <>
    <Header />
      <About />
      <Skills />
      <Projects/>
    </>
  );
};

export default App;
