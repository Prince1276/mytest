import React from 'react';
import './About.css';

const About = () => {
  const certifications = [
    {
      id: 1,
      image: 'assets/BI.jpg',
      title: 'Certification 1'
    },
    {
      id: 2,
      image: 'assets/blockchain.jpg',
      title: 'Certification 2'
    },
    {
      id: 3,
      image: 'assets/bootstrap.jpg',
      title: 'Certification 2'
    },
    {
      id: 4,
      image: 'assets/c.jpg',
      title: 'Certification 2'
    },
    {
      id: 5,
      image: 'assets/CI.jpg',
      title: 'Certification 2'
    },
    {
      id: 6,
      image: 'assets/Django.jpg',
      title: 'Certification 2'
    },
    {
      id: 7,
      image: 'assets/hardware and networking.jpg',
      title: 'Certification 2'
    },
    {
      id: 1,
      image: 'assets/java.jpg',
      title: 'Certification 1'
    },
    {
      id: 1,
      image: 'assets/python.jpg',
      title: 'Certification 1'
    },
    {
      id: 1,
      image: 'assets/web.jpg',
      title: 'Certification 1'
    },
    // Add more certification objects here
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our company! We are a passionate team of professionals dedicated to delivering
        exceptional products and services. With years of experience in the industry, we strive to
        exceed customer expectations and make a positive impact in the market.
      </p>
      <p>
        Our mission is to provide innovative solutions that solve real-world problems. We believe in
        the power of technology to transform businesses and improve people's lives. Through
        continuous research, development, and collaboration, we aim to stay at the forefront of
        industry trends and deliver cutting-edge solutions to our clients.
      </p>
      <p>
        At our core, we value integrity, transparency, and a customer-centric approach. We believe
        in building long-term partnerships with our clients based on trust and mutual success. Our
        team of experts is committed to delivering high-quality work, on time and within budget.
      </p>
      <p>
        We are constantly evolving and embracing new challenges. Our team consists of talented
        individuals from diverse backgrounds who bring unique perspectives and skills to the table.
        Together, we foster a collaborative and inclusive work environment where everyone can
        thrive and contribute their best.
      </p>
      <p>
        Our services range from software development and consulting to digital marketing and
        e-commerce solutions. We work closely with our clients to understand their specific needs
        and tailor our services to meet their goals. Whether you're a small startup or a large
        enterprise, we have the expertise and resources to support your growth and success.
      </p>
      <div className="certification-container">
        <div className="certification-grid">
          {certifications.map(certification => (
            <div className="certification-item" key={certification.id}>
              <img src={certification.image} alt={certification.title} />
              <h3>{certification.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <p>
        Thank you for visiting our About page. If you have any questions or would like to learn more
        about our services, please don't hesitate to reach out. We look forward to serving you and
        helping you achieve your goals.
      </p>
    </div>
  );
};

export default About;
