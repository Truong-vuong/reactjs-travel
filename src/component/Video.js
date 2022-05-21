import React from "react";
import { Link } from "react-router-dom";

import "./Video.css";

import video from "../assets/space.mp4";

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={video} />
      </video>
      <div className='content'>
        <h1>Travel Worlds </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing lorem, sed do
          eiusmod tempor incididunt ut lab
        </p>
        <div className='contact'>
          <Link to='/contact' className='btn '>
            Contact
          </Link>
          <Link to='/training' className='btn btn-light'>
            Training
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
