import React from 'react';
import './footer.css';
import CTA from '../CTA/CTA';
import {
  SiUbereats,
  SiDoordash,
  SiDeliveroo,
  SiInstagram,
  SiFacebook,
  SiTwitter,
} from 'react-icons/si';

function Footer({ setIsDashboardActive, isDashboardActive }) {
  return (
    <div className="footer">
      <div className="footer__logo__container">
        <h3 className="footer__logo">Sam's Kitchen</h3>
      </div>
      <div className="footer__social__container">
        <h4>Social Media</h4>
        <a>Instagram</a>
        <a>Facebook</a>
        <a>Twitter</a>
      </div>
      <div className="footer__partners__container">
        <h4>Partners</h4>
        <a>Uber Eats</a>
        <a>Delivereasy</a>
        <a>Deliveroo</a>
      </div>
      <div className="footer__corporate__container">
        <h4>Corporate</h4>
        <a>Our Policy</a>
        <a>Terms of Service</a>
        <a>FAQs</a>
      </div>
      <div className="footer__social-icon__container">
        <SiInstagram className="social-icon" />
        <SiFacebook className="social-icon" />
        <SiTwitter className="social-icon" />
      </div>
      <div className="footer__info__container">
        <h4>Information</h4>
        <a>Menu</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className="footer__partner-icon__container">
        <div className="footer__partner-icon__container-wrapper">
          <SiUbereats className="partner-icon" />
          <SiDoordash className="partner-icon" />
          <SiDeliveroo className="partner-icon" />
        </div>
        <div className="footer__partner-icon__CTA-wrapper">
          <CTA
            textContent={'Order Today'}
            setIsDashboardActive={setIsDashboardActive}
            isDashboardActive={isDashboardActive}
          />
        </div>
      </div>
      <div className="footer__rights__container">
        <p className="footer__text">Sam's Kitchen. All Rights Reserved 2024 </p>
      </div>
    </div>
  );
}

export default Footer;
