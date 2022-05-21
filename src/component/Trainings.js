import React from "react";
import "./Trainings.css";

import { Link } from "react-router-dom";

import One from "../assets/one.jpg";
import Two from "../assets/two.jpg";

const Trainings = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipis occ lorem ipsum dolor
          sit amet, consectetur adipis
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={One} className='img' alt='' />
          </div>
          <div className='image-stack bottom'>
            <img src={Two} className='img' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
