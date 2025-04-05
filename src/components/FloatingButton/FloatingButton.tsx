import React from 'react';
import { FaDownload } from 'react-icons/fa';

// styles
import './FloatingButton.scss';

interface FloatingButtonProps {
  downloadUrl: string;
  tooltipText: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  downloadUrl,
  tooltipText,
}) => {
  return (
    <a
      href={downloadUrl}
      download
      className="floating-cv-btn"
      aria-label="Download CV"
    >
      <div className="tooltip">{tooltipText}</div>
      <FaDownload />
    </a>
  );
};

export default FloatingButton;
