// packages
import React, { useState } from 'react';

// constants
import { PORTFOLIO_OWNER_SOCIAL_MEDIA } from '../constants/index.tsx';
import { SocialMedia as SocialMediaType } from '../interfaces/index.tsx';

/**
 * Social media component to show the social media icons
 * @returns
 */
const SocialMedia: React.FC = () => {
  const [socialMedia] = useState<SocialMediaType[]>(
    PORTFOLIO_OWNER_SOCIAL_MEDIA
  );

  return (
    <div className="app__social">
      {socialMedia.map((social) => (
        <div className="app__social-icon" key={`social-${social.title}`}>
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
