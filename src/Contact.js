import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="form-container animate__animated animate__fadeIn">
        <h1 className="contact-heading">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      

      <div className="additional-content animate__animated animate__fadeInRight">
        <h2 className="additional-content-heading">Additional Content</h2>
        <p className="additional-content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tortor non dolor
          sagittis pellentesque at vitae urna. Aliquam in malesuada lectus. Morbi posuere elit ac
          elit posuere, vel tempor nisl volutpat.
        </p>
      </div>
    </div>
  );
};

export default Contact;
