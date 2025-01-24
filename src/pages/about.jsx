import React from "react";
import "../styles/about.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import bg1 from "../assets/Image/salsa/14.jpg";
import bg2 from "../assets/Image/salsa/4.jpeg";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{padding:"2rem"}}></div>
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
      <h1 className="text-white display-4">About Us</h1>
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


      {/* About Section */}
      <section className="about-section container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
          <img
              src={bg2}
              alt="About Dance Well"
              className="img-fluid rounded shadow slide-in"
              style={{ height: "auto", maxWidth: "100%" }} // Responsive image
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-warning">JustDance</h1>
            <h4 className="text-primary pt-4">We have been teaching dance since 2015</h4>
            <p className="lead mb-4 pt-4">
              At Dance Well, we believe in the transformative power of movement. Our class is a welcoming space for all ages and skill levels, where you can explore the joy of dance while improving physical fitness, mental wellness, and creativity. Join us to discover how dance can enrich your life!

              <p>This version still conveys the essence of your class and its benefits, but in a more concise manner.</p>
              </p>
            <button className="btn btn-warning">Learn More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5" style={{ backgroundColor: "#123456" }}>
  <div className="container">
    <div className="row text-center">
      <div className="col-md-3">
        <div className="stat-card">
          <h3 className="stat-title">Dance Classes</h3>
          <p className="stat-number">158+</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <h3 className="stat-title">Best Instructors</h3>
          <p className="stat-number">48+</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <h3 className="stat-title">Total Branches</h3>
          <p className="stat-number">17+</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="stat-card">
          <h3 className="stat-title">Happy Customers</h3>
          <p className="stat-number">507+</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Professional Instructors Section */}
      <section className="instructors-section container py-5">
        <h2 className="text-center text-warning">Our Professional Instructor</h2>
        <div className="row">
          {/* Instructor Card */}
          {["Emily Ava", "John Doe", "Jane Smith", "Michael Brown"].map((name, index) => (
            <div className="col-md-3 text-center" key={index}>
              <div className="card">
                <img
                  src={`https://via.placeholder.com/150?text=${name.split(" ")[0]}`}
                  alt={name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5>{name}</h5>
                  <p className="text-muted">Dance Expert</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
