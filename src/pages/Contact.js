import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Form from "../component/Form";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='CONTACT' text='Choose your trip.' />
      <Form />
      <Footer />
    </div>
  );
};

export default Pricing;
