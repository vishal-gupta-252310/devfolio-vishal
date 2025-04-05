// packages
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// react icons
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// components
import { AppWrap, MotionWrap } from '../../wrapper/index.tsx';

// constants
import {
  PORTFOLIO_OWNER_BRANDS,
  PORTFOLIO_OWNER_TESTIMONIALS,
} from '../../constants/index.tsx';
import {
  Brand,
  Testimonial as TestimonialType,
} from '../../interfaces/index.tsx';
// styles
import './testimonial.scss';

/**
 * Testimonial component to display the testimonials of the portfolio owner
 */
const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials] = useState<TestimonialType[]>(
    PORTFOLIO_OWNER_TESTIMONIALS
  );
  const [brands] = useState<Brand[]>(PORTFOLIO_OWNER_BRANDS);
  const test = testimonials[currentIndex];

  /**
   * Handle click on the testimonial item
   * @param index - The index of the testimonial item
   */
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.image} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>

          <div className="app__testimonial-brands app__flex">
            {brands.map((brand, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__flex"
              >
                <div key={index} onClick={() => handleClick(index)}>
                  <img src={brand.image} alt={brand.company} />
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap({
  Component: MotionWrap({
    Component: Testimonial,
    classNames: 'app__testimonial',
  }),
  idName: 'testimonial',
  classNames: 'app__primarybg',
});
