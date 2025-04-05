// packages
import React from 'react';
import { motion } from 'framer-motion';

/**
 * To wrap the component with motion animation
 * @param props
 * @returns
 */
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
