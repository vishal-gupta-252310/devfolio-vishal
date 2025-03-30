// packages
import React, { useState } from 'react';

// styles
import './navbar.scss';

// react icon
import { HiMenuAlt4 } from 'react-icons/hi';

// components
import MobileDrawer from '../MobileDrawer/MobileDrawer.tsx';

// constants
import { IMAGES, NAVBAR_MENU } from '../../constants/index.tsx';

const Navbar = () => {
  const [isMobileDrawer, setIsMobileDrawer] = useState(false);

  /**
   * Handle mobile drawer
   */
  const handleMobileDrawer = () => {
    setIsMobileDrawer(!isMobileDrawer);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={IMAGES.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {NAVBAR_MENU.map((item) => (
          <li key={`link-${item.title}`} className="app__flex p-text">
            <div />
            <a href={`#${item.title}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-mobile-menu">
        <HiMenuAlt4 onClick={handleMobileDrawer} />
        {isMobileDrawer && (
          <MobileDrawer onClose={handleMobileDrawer} isOpen={isMobileDrawer} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
