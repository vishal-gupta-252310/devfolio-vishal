// packages
import React from 'react';
import { motion } from 'framer-motion';

// styles
import './mobile-drawer.scss';

// react icon
import { HiX } from 'react-icons/hi';

// constants
import { NavbarMenu } from '../../constants/NavbarMenu.tsx';

/**
 * Mobile drawer component to show the menu on mobile devices
 * @param props
 * @returns
 */
const MobileDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      {isOpen && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="app__navbar-mobile-menu__container"
        >
          <HiX onClick={onClose} />
          <ul>
            {NavbarMenu.map((item) => (
              <li key={item.title} className="app__flex p-text">
                <a href={`#${item.title}`} onClick={onClose}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default MobileDrawer;
