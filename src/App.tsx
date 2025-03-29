// packages
import React from 'react';

// styles
import './style/index.css';

// components
import { About, Footer, Header, Skills, Testomonial, Work } from './container/index.tsx';
import { Navbar } from './components/index.tsx';

/**
 * Main Component of the application
 * @returns
 */
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testomonial />
      <Footer />
    </div>
  )
};

export default App;
