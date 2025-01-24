import React from 'react';
import '../styles/ContactUs.css'; // Importing custom CSS
import bg1 from "../assets/Image/salsa/14.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div>
		<section className="hero-section text-center p-0">
  <div
    style={{
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "45rem",
    }}
  >
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "12rem 2rem", // Adjust padding for smaller screens
      }}
      className="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <h1 className="text-white display-4">Contact Us</h1>
      <p className="text-white lead">Join us today for your first dance!</p>
      <a
        href="tel:+250788630520"
        className="no-underline text-white font-weight-bold"
      >
        📞 +250 788 630 520
      </a>
    </div>
  </div>
</section>
      {/* Header Section */}
      <header className="header-section text-white text-center py-4">
        <h1>Contact Us</h1>
        <p>Join us today for your first dance <a href="tel:7147882205" className="text-white font-weight-bold">714-788-2205</a></p>
      </header>

      {/* Main Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form p-4 border rounded">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message"></textarea>
                </div>
                <button type="submit" className="btn btn-custom w-100">Send Message</button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-6">
            <div>
              <h5 className="fw-bold">Address</h5>
              <p>45 KG 669 St, Kigali</p>
              <h5 className="fw-bold">Mobile</h5>
              <p><a href="tel:+250 788 630 520" className="text-decoration-none">+250 788 630 520</a></p>
              <h5 className="fw-bold">Email</h5>
              <p><a href="mailto:well.dance.classic@gmail.com" className="text-decoration-none">well.dance.classic@gmail.com</a></p>
              <div className="mt-3">
                <a href="#" className="text-danger me-2"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="text-danger me-2"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-danger me-2"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container mt-4">
		<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.9845652461531!2d30.063456976416422!3d-1.919077245711726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3fdb4f658f5%3A0x1ff54463a5c949c6!2s45%20KG%20669%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1737710510286!5m2!1sen!2srw" 
    width="100%" 
    height="800" 
    // style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;