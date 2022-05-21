import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='left'>
          <h2 className='title'>Contact</h2>
          <div className='left__item'>
            <i className='bx bxs-edit-location'></i>
            <span>Dong ha , Quang Tri</span>
          </div>
          <div className='left__item'>
            <i className='bx bxs-phone'></i>
            <span>0331478565</span>
          </div>
          <div className='left__item'>
            <i className='bx bxl-gmail'></i>
            <span>abc2gmail.com</span>
          </div>
          <div className='left__icon'>
            <i className='bx bxl-facebook'></i>
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-instagram'></i>
          </div>
        </div>
        <div className='right'>
          <h2 className='title'>Travel</h2>

          <div className='right__item'>
            <p>Introduction</p>
          </div>
          <div className='right__item'>
            <p>About</p>
          </div>
          <div className='right__item'>
            <p>News</p>
          </div>
          <div className='right__item'>
            <p>Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
