import React from 'react';
import './nav.css';
import { MdOutlineMenu } from 'react-icons/md';
import CTA from '../CTA/CTA';

function Nav({ setIsDashboardActive, isDashboardActive, setIsWebsiteActive }) {
  const handleClick = () => {
    /* handle navbar link click */
  };

  return (
    <div className="nav">
      <div className="nav__logo__container">
        <h1 className="logo__title">Sam's Kitchen</h1>
      </div>
      <div className="nav__links__container">
        <a className="link links-first" onClick={handleClick()}>
          MENU
        </a>
        <a className="link links-second" onClick={handleClick()}>
          ABOUT
        </a>
        <a className="link links-third" onClick={handleClick()}>
          CONTACT
        </a>
      </div>
      <div className="nav__menu__container">
        <MdOutlineMenu className="menu__icon" />
      </div>
      <div className="nav__cta__container">
        <CTA
          textContent={'Order Now'}
          setIsDashboardActive={setIsDashboardActive}
          isDashboardActive={isDashboardActive}
          setIsWebsiteActive={setIsWebsiteActive}
        />
      </div>
    </div>
  );
}

export default Nav;
