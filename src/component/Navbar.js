import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [menuactive, setMenuActive] = useState(false);
  const handleMenuActive = () => {
    setMenuActive(!menuactive);
  };
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='logo'>TRAVEL</h1>
      </Link>
      <ul className={menuactive ? "menu active" : "menu"}>
        <li className='menu__item' onClick={handleMenuActive}>
          <Link to='/'>Home</Link>
        </li>
        <li className='menu__item' onClick={handleMenuActive}>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li className='menu__item' onClick={handleMenuActive}>
          <Link to='/training'>Training</Link>
        </li>
        <li className='menu__item' onClick={handleMenuActive}>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='menu-icon' onClick={handleMenuActive}>
        <i className={menuactive ? "bx bx-chevron-left" : "bx bx-menu"}></i>
      </div>
    </div>
  );
};

export default Navbar;
