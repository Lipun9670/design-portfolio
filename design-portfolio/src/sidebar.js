import React from 'react';
import './sidebar.css';
import profile from './image.jpg';

import Port from './portofolio';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
      <img src={profile} alt="Profile" />
        <h2>Aditya Kumar Sahoo</h2>
        <Port />  
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-skype"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#dropdown">Dropdown</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Sidebar;
