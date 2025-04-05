import React from 'react';
import { motion } from 'framer-motion';

// components
import { AppWrap } from '../../wrapper/index.tsx';

// styles
import './header.scss';

// constants
import {
  IMAGES,
  PORTFOLIO_OWNER_NAME,
  PORTFOLIO_OWNER_DESIGNATION,
  PORTFOLIO_OWNER_TECH_MASTERY,
} from '../../constants/index.tsx';

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

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
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
              <h1 className="head-text">{PORTFOLIO_OWNER_NAME}</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            {PORTFOLIO_OWNER_DESIGNATION.map((skill, index) => (
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
        {PORTFOLIO_OWNER_TECH_MASTERY.map((item, index) => {
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
