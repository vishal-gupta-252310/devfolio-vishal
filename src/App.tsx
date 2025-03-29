// packages
import React from 'react';

// styles
import './app.scss';

// components
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from './container/index.tsx';
import { Navbar } from './components/index.tsx';

/**
 * Main Component of the application
 * @returns
 */
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
