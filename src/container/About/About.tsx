import React from 'react';

// components
import { AppWrap, MotionWrap } from '../../wrapper/index.tsx';

// styles
import './about.scss';

import { motion } from 'framer-motion';
import { PORTFOLIO_OWNER_DESIGNATION } from '../../constants/index.tsx';

const About = () => {
  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know that <span>Good Dev</span> <br /> means{' '}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {PORTFOLIO_OWNER_DESIGNATION.map((item, index) => (
          <motion.div
            key={`${item.title}${index}`}
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <img src={item.image} alt={item.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap({ Component: MotionWrap({ Component: About, classNames: 'app__about' }), idName: 'about', classNames: 'app__whitebg' });
