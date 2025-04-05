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
import { Navbar, FloatingButton } from './components/index.tsx';

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
      <FloatingButton
        downloadUrl="/vishal_gupta_cv.pdf"
        tooltipText="Download Resume"
      />
    </div>
  );
};

export default App;
