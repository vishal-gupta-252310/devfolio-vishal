import React from 'react';
import { PORTFOLIO_OWNER_NAME } from '../constants/index.tsx';
import { motion } from 'framer-motion';


const MotionWrap = ({
  Component,
  classNames,
}: {
  Component: React.ComponentType;
  classNames: string;
}) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
