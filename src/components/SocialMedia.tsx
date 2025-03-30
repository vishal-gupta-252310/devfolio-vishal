import React from 'react';

import { PORTFOLIO_OWNER_SOCIAL_MEDIA } from '../constants/index.tsx';

const SocialMedia = () => {
  return (
    <div className="app__social">
      {PORTFOLIO_OWNER_SOCIAL_MEDIA.map((social, index) => (
        <div className="app__social-icon" key={`social-${social.title}`}>
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
