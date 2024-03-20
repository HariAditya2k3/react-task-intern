import React, { useRef } from 'react';
import './Dashboard.css';
import Password_icon from '../Assets/neet.jpg';
import Email_icon from '../Assets/Email.png';

const Dashboard = () => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className='Dashboard'>
     \
      <h4 className="dashboard-header">Dashboard</h4>

      <div className="dashboard-container">
        <div className="advertisement-banner">
         
          <button className="scroll-left-button" onClick={handleScrollLeft}>{'<'}</button>
          <div ref={scrollRef} className="advertisement-banner-scroll">
            
            <div className="advertisement-banner-container">
              <img src={Password_icon} alt='' height='300px' width='1000px'/>
            </div>
            <div className="advertisement-banner-container">
              <img src={Email_icon} alt='' />
            </div>
          </div>
          <button className="scroll-right-button" onClick={handleScrollRight}>{'>'}</button>
        </div>

        {/* Toppers List */}
        <h2 className="toppers-list-header">Toppers List</h2>
        <div className="toppers-list">
          {/* Topper cards */}
          <div className="topper-card">
            <div className="topper-avatar">
            
            </div>
            <div className="topper-details">
              <h3>Topper Name 1</h3>
              <p>Marks: 590</p>
              <p>Review: Amazing faculty and study materials. Highly recommended for NEET preparation.</p>
            </div>
          </div>

          <div className="topper-card">
            <div className="topper-avatar">
             
            </div>
            <div className="topper-details">
              <h3>Topper Name 2</h3>
              <p>Marks: 570</p>
              <p>Review: Amazing faculty and study materials. Highly recommended for NEET preparation.</p>
            </div>
          </div>

          <div className="topper-card">
            <div className="topper-avatar">
           
            </div>
            <div className="topper-details">
              <h3>Topper Name 3</h3>
              <p>Marks: 550</p>
              <p>Review: Amazing faculty and study materials. Highly recommended for NEET preparation.</p>
            </div>
          </div>

          <div className="topper-card">
            <div className="topper-avatar">
              
            </div>
            <div className="topper-details">
              <h3>Topper Name 4</h3>
              <p>Marks: 540</p>
              <p>Review: Amazing faculty and study materials. Highly recommended for NEET preparation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
