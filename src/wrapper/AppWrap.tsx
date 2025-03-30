import React from 'react';
import { NavigationDots, SocialMedia } from '../components/index.tsx';
import { PORTFOLIO_OWNER_NAME } from '../constants/index.tsx';

const AppWrap = ({
  Component,
  idName,
  classNames,
}: {
  Component: React.ComponentType;
  idName: string;
  classNames: string;
}) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">{`© ${new Date().getFullYear()} ${PORTFOLIO_OWNER_NAME}`}</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
