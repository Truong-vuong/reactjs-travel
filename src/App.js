import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
