import React from "react";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trainings from "../component/Trainings";

const Training = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
      <Trainings />
      <Footer />
    </div>
  );
};

export default Training;
