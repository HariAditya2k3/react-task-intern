// Classes.jsx

import React from 'react';
import './classes.css';
import Password_icon from '../Assets/neet.jpg';
const Classes = () => {
  return (
    <div className="classes-container">
      <h2>NEET Video Classes</h2>
      <div className="video-list">
        <div className="video-item">
          <div className="video-thumbnail">
          <img src={Password_icon} alt='' height='200px' width='500x'/>
          </div>
          <div className="video-details">
            <h3>Video Title 1</h3>
            <p>Description: This video covers the fundamentals of Module Name and provides in-depth insights into Lesson Name.</p>
            <p>Module: Module Name</p>
            <p>Duration: XX:XX</p>
            <p>Lesson: Lesson Name</p>
            <a href="video_link_1">Watch Now</a>
          </div>
        </div>
        <div className="video-item">
          <div className="video-thumbnail">
          <img src={Password_icon} alt='' height='200px' width='500px'/>
          </div>
          <div className="video-details">
            <h3>Video Title 2</h3>
            <p>Description: This video explores advanced concepts in Module Name and offers practical exercises for Lesson Name.</p>
            <p>Module: Module Name</p>
            <p>Duration: XX:XX</p>
            <p>Lesson: Lesson Name</p>
            <a href="video_link_2">Watch Now</a>
          </div>
        </div>
        {/* Add more video items as needed */}
      </div>
    </div>
  );
};

export default Classes;
