// packages
import React, { useState } from 'react';

// constants
import { NAVBAR_MENU } from '../constants/index.tsx';
import { NavbarType } from '../interfaces/index.tsx';

/**
 * Navigation dots component to show the navigation dots
 * @param props
 */
const NavigationDots: React.FC<{ active: string }> = ({ active }) => {
  const [navbarMenu] = useState<NavbarType[]>(NAVBAR_MENU);

  return (
    <div className="app__navigation">
      {navbarMenu.map((item, index) => (
        <a
          href={`#${item.title}`}
          key={`link-${index}`}
          className="app__navigation-dot"
          style={active === item.title ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
