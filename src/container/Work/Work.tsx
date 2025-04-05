// packages
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// react icons
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

// components
import { AppWrap, MotionWrap } from '../../wrapper/index.tsx';

// constants
import {
  PORTFOLIO_OWNER_APPS_TYPES,
  PORTFOLIO_OWNER_PROJECTS,
} from '../../constants/index.tsx';

// styles
import './work.scss';
import { Project } from '../../interfaces/index.tsx';

/**
 * Work component to display the work of the portfolio owner
 */
const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState<{
    y: number;
    opacity: number;
  }>({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState<Project[]>(
    PORTFOLIO_OWNER_PROJECTS
  );
  const [appTypes] = useState<string[]>(PORTFOLIO_OWNER_APPS_TYPES);

  /**
   * Handle the work filter
   * @param item - The item to filter the work by
   */
  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item.toLowerCase() === 'all') {
        return setFilterWork(PORTFOLIO_OWNER_PROJECTS);
      }

      setFilterWork(
        PORTFOLIO_OWNER_PROJECTS.filter(
          (work) => work.type.toLowerCase() === item.toLowerCase()
        )
      );
    }, 600);
  };

  return (
    <div>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {appTypes.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            <div
              className="app__work-filter-item-content"
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((item, index) => (
          <div
            className="app__work-item app__flex"
            key={`${item.title}-${index}`}
          >
            <div className="app__work-item-img app__flex">
              <img src={item.image} alt={item.title} />
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={item.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{item.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{item.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap({
  Component: MotionWrap({ Component: Work, classNames: 'app__works' }),
  idName: 'work',
  classNames: 'app__primarybg',
});
