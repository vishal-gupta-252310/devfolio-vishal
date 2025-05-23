// packages
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

// components
import { AppWrap, MotionWrap } from '../../wrapper/index.tsx';

// constants
import {
  PORTFOLIO_OWNER_EXPERIENCE,
  PORTFOLIO_OWNER_SKILLS,
} from '../../constants/index.tsx';
import { Experience, skills } from '../../interfaces/index.tsx';

// styles
import './skills.scss';

/**
 * Skills component to display the skills and experiences of the portfolio owner
 */
const Skills: React.FC = () => {
  const [skills] = useState<skills[]>(PORTFOLIO_OWNER_SKILLS);
  const [experiences] = useState<Experience[]>(PORTFOLIO_OWNER_EXPERIENCE);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`skill-${index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={`experience-${index}`}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      key={`work-${index}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      content={work.desc}
                      className="skills-tooltip"
                      place="right"
                    />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap({ Component: Skills, classNames: 'app__skills' }),
  idName: 'skills',
  classNames: 'app__whitebg',
});
