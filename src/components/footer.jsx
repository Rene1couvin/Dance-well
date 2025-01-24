import React from "react";
import "../styles/Footer.css";// Add your custom styles here

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* JustDanc Section */}
          <div className="col-md-3">
            <h5 className="mb-4">Dance Well</h5>
            <p>
              Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit consectetur
              adipiscing elit.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-md-3">
            <h5 className="mb-4">Address</h5>
            <p>
              <i className="fas fa-map-marker-alt me-3"></i>0123 Street, New
              York, USA
            </p>
            <p>
              <i className="fas fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>info@example.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 className="mb-4">Newsletter</h5>
            <p>Sign up to receive updates and exclusive offers.</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom mt-4 pt-3">
	  <hr className="text-secondary" />
        <div className="container d-flex justify-content-between align-items-center">
          <p className="mb-0">
            &copy; Dance Well, All right reserved.
          </p>
		<hr className="text-secondary"/>
          <div className="dropup">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropupMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Designed By Couvin
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
			<li>
                <a className="dropdown-item" href="tel:+250787977557">
                  📞 My Phone
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="https://wa.me/250787977557">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="mailto:renefrancisco808@gmail.com">
                  📧 Email
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/rene-francisco-59163b291"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
