import React from 'react';
import './MainContent.css';
import profileImage from './image1.jpg';


const MainContent = () => {
  return (

    <div className="profile-section">
    <img src={profileImage} alt="Profile" className="profile-image" />
    <div className="text-overlay">
      
    </div>
  </div>
  );
};

export default MainContent;
