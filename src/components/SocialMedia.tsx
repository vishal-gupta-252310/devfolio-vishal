// packages
import React from 'react';

// constants
import { PORTFOLIO_OWNER_SOCIAL_MEDIA } from '../constants/index.tsx';

/**
 * Social media component to show the social media icons
 * @returns
 */
const SocialMedia = () => {
  return (
    <div className="app__social">
      {PORTFOLIO_OWNER_SOCIAL_MEDIA.map((social) => (
        <div className="app__social-icon" key={`social-${social.title}`}>
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
