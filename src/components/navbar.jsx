import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/global.css'

import KumpasLogoName from '../assets/kumpas-logo-with-name.png'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-yellow ">
      <div className="container">
        {/* Logo on the left side */}
        <div className="logo-container">
            <img src={KumpasLogoName} alt="Kumpas Logo" className="logo-small" width={'200'}/>
        </div>

        {/* Options on the right side */}
        <ul className="navbar-nav on-collapse-hide">
          <li className="nav-item">
            <button className="nav-link text-white" href="#">
              Home
            </button>
          </li>
          <li className="nav-item ms-5">
            <button className="nav-link text-white" href="#">
              Solution
            </button>
          </li>
          <li className="nav-item ms-5">
            <button className="nav-link text-white" href="#">
              For educators
            </button>
          </li>
          <li className="nav-item ms-5">
            <button className="nav-link text-white" href="#">
              About us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;