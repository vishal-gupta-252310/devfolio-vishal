// packages
import React from 'react';

// constants
import { NAVBAR_MENU } from '../constants/index.tsx';

/**
 * Navigation dots component to show the navigation dots
 * @param props
 */
const NavigationDots = ({ active }: { active: string }) => {
  return (
    <div className="app__navigation">
      {NAVBAR_MENU.map((item, index) => (
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
