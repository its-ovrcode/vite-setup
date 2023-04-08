import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import About from './components/About';
import {
  Nav,
  Courses,
  Hero,
  Learn,
  Learniverse,
  Testimonials,
  Footer,
} from './components/data';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div
          className='bg-dark flex flex-col gap-8 min-h-screen h-full text-white  py-2
  '>
          <Nav />
          <Hero />
          <Courses />
          <Learn />

          <Learniverse />
          <About />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
