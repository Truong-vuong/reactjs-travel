import React from "react";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Pricings from "../component/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Hero heading='PRICING.' text='Choose your trip.' />
      <Pricings />
      <Footer />
    </div>
  );
};

export default Pricing;
