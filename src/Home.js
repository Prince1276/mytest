import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './HeroSection';

import './Home.css';

import card1Image from './assets/whatsapp.jpeg'; 

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <><HeroSection />
    <br></br>
    <div className="home-container">
      

      <div className="card" data-aos="fade-up">
        <div className="card-content">
          <h2 className="card-heading">Card 2 Heading</h2>
          <p className="card-paragraph">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="card-content">
          <img src={card1Image} alt="Card 1 Image" className="card-image" />
          <div>
            <h2 className="card-heading">Card 1 Heading</h2>
            <p className="card-paragraph">
              This is the card 1 paragraph. Add your content here.
            </p>
          </div>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="card-content">
          <h2 className="card-heading">Card 3 Heading</h2>
          <p className="card-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, leo et rhoncus consectetur, enim nunc feugiat dui, eu tempus purus mauris ac ex.
          </p>
        </div>
      </div>

      <div className="card" data-aos="fade-up">
        <div className="card-content">
          <h2 className="card-heading">Card 4 Heading</h2>
          <p className="card-paragraph">
            Fusce ullamcorper nunc in fringilla efficitur. Nulla vulputate convallis dolor, sit amet malesuada lorem ultrices id.
          </p>
        </div>
      </div>

      <div className="feature animate__animated animate__fadeInUp" data-aos="fade-up">
        <h2 className="feature-heading">Amazing Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Feature 1</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Feature 2</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Feature 3</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-check-circle"></i>
            <p>Feature 4</p>
          </div>
        </div>
      </div>

      <div className="animation" data-aos="fade-up">
        <h2 className="animation-heading">Awesome Animation</h2>
        <p className="animation-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra eros sed lacus ultricies, a congue lorem rutrum.
    </p>
    <div className="animation-container">
      <div className="box"></div>
    </div>
  </div>
</div>
</>
);
};

export default Home;