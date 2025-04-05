// packages
import React, { useState } from 'react';

// constants
import { IMAGES, PORTFOLIO_OWNER_PROFILE } from '../../constants/index.tsx';

// components
import { AppWrap, MotionWrap } from '../../wrapper/index.tsx';

// styles
import './footer.scss';

/**
 * Footer component to display contact information and a form for contacting the portfolio owner
 */
const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  /**
   * To handle change input
   * @param event
   */
  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * To handle submit
   * @param event
   */
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsRequesting(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    console.log(contact);
    setIsRequesting(false);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={IMAGES.email} alt="email" />
          <a
            href={`mailto:${PORTFOLIO_OWNER_PROFILE.email}`}
            className="p-text"
          >
            {PORTFOLIO_OWNER_PROFILE.email}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={IMAGES.mobile} alt="mobile" />
          <a href={`tel:${PORTFOLIO_OWNER_PROFILE.phone}`} className="p-text">
            {PORTFOLIO_OWNER_PROFILE.phone}
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              value={formData?.name}
              onChange={handleChangeInput}
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              value={formData?.email}
              onChange={handleChangeInput}
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              value={formData?.message}
              onChange={handleChangeInput}
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isRequesting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap({
  Component: MotionWrap({ Component: Footer, classNames: 'app__footer' }),
  idName: 'contact',
  classNames: 'app__whitebg',
});
