import React from "react";
import { Link } from 'react-router-dom';
import BannerBackground from "./home-banner-background.png";
import BannerImage from "./download.png";
import pic3 from "./pic3.png";
import "./landPage.css"
//import Card from "./card";
const Landing = () => {
    
  return (
    
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-bannerImage-container1">
          <img src={pic3} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Exclusive Range of Agricultural Machinery And Equipment
          </h1>
          <p className="primary-text">
           We Provide A place for Buyers and Sellers to find tools related to agriculture!
          </p>
          <button className="secondary-button"><Link className='no-underline text-white' to='/home' >Get Started</Link>
             {""}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        
       
      </div>
     
    </div>
    
  );
};

export default Landing;