import React from 'react';
import { NAVBAR_MENU } from '../constants/index.tsx';

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
