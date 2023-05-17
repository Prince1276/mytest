import React from 'react';

const PortfolioItem = ({ title, description, imageSrc, aosDelay }) => {
  return (
    <div className="portfolio-item" data-aos="fade-up" data-aos-delay={aosDelay}>
      <div className="portfolio-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-description">{description}</p>
        <a href="#" className="portfolio-link">View Project</a>
      </div>
    </div>
  );
};

export default PortfolioItem;
