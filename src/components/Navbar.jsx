import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/navigation.css";
const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-2 px-4"
      style={{
        backgroundColor: "#123456",
        paddingRight: "4rem",
        paddingLeft: "4rem",
      }}
    >
      <div className="container-fluid d-flex justify-content-between">
        {/* Left Section: Dance Well */}
        <a className="navbar-brand text-2xl font-bold" href="/a">
          <button className="btn btn-gradient rounded-pill px-4 py-2 text-white">
            Dance Well
          </button>
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Section: Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About" },
              { href: "/event", text: "Event" },
              { href: "/blog", text: "Blog Pages" },
              { href: "/contact", text: "Contact Us" },
            ].map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link rounded-pill px-3 py-2"
                  href={link.href}
                  style={{ color: "#fff" }}
                >
                  {link.text}
                </a>
              </li>
            ))}

            {/* Pages Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle rounded-pill px-3 py-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#fff" }}
              >
                Pages
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ backgroundColor: "#123456" }}
              >
                {[
                  { href: "#page1", text: "Our Classes" },
                  { href: "#page2", text: "Dance Training" },
                  { href: "#page3", text: "Our Team" },
                  { href: "#page4", text: "Testimonial" },
                  { href: "#page5", text: "Dance Garelly" },
                ].map((page) => (
                  <li key={page.href}>
                    <a
                      className="dropdown-item rounded-pill px-3 py-2"
                      href={page.href}
                      style={{ color: "#fff" }}
                    >
                      {page.text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Register Now at the End */}
            <li className="nav-item">
              <a
                className="nav-link rounded-pill px-3 py-2"
                href="#register"
                style={{ color: "#fff" }}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
