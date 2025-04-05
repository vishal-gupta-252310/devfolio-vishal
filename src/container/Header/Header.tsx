// packages
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// components
import { AppWrap } from '../../wrapper/index.tsx';

// constants
import {
  IMAGES,
  PORTFOLIO_OWNER_PROFILE,
  PORTFOLIO_OWNER_DESIGNATION,
  PORTFOLIO_OWNER_TECH_MASTERY,
} from '../../constants/index.tsx';
import { Designation, TechMastery } from '../../interfaces/index.tsx';

// styles
import './header.scss';

/**
 * Scale variants for the header component
 */
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

/**
 * Calculate the size of the circles based on the mastery and screen width
 * @param mastery - The mastery level of the skill
 * @param screenWidth - The width of the screen
 * @returns The size of the circle
 */
const calculateCircleSize = (mastery: number, screenWidth: number) => {
  // Base size for mobile
  let baseSize = 80;

  // Adjust base size based on screen width
  if (screenWidth >= 2000) {
    baseSize = 140;
  } else if (screenWidth >= 1200) {
    baseSize = 120;
  } else if (screenWidth >= 768) {
    baseSize = 100;
  }

  // Calculate size based on mastery (between 60% and 100% of base size)
  const minSize = baseSize * 0.8;
  const maxSize = baseSize;
  const sizeRange = maxSize - minSize;
  const calculatedSize = minSize + sizeRange * (mastery / 100);

  return calculatedSize;
};

/**
 * Header component to display the header section of the portfolio
 */
const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [designation] = useState<Designation[]>(PORTFOLIO_OWNER_DESIGNATION);
  const [techMastery] = useState<TechMastery[]>(PORTFOLIO_OWNER_TECH_MASTERY);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">{PORTFOLIO_OWNER_PROFILE.name}</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            {designation.map((skill, index) => (
              <p key={`skill-${index}`} className="p-text">
                {skill.title}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={IMAGES.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={IMAGES.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {techMastery.map((item, index) => {
          const size = calculateCircleSize(item.mastery, windowWidth);
          return (
            <div
              className="circle-cmp app__flex"
              key={`circle-${index}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                margin: item.margin,
              }}
            >
              <img src={item.image} alt={item.title} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap({ Component: Header, idName: 'home', classNames: '' });
