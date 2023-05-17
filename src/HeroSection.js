import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import sliding1 from './assets/sliding1.jpg';
import sliding2 from './assets/sliding2.jpg';
import test from './assets/test.jpg';
import './HeroSection.css';


const HeroSection = () => {
    
  return (
    <div className="hero">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={sliding1} alt="Slide 1" />
        </div>
        <div>
          <img src={sliding2} alt="Slide 2" />
        </div>
        <div>
          <img src={test} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
