import React from 'react';
import '../styles/event.css'; // Custom CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const App = () => {
  return (
    <div className="EventPage">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Upcoming Dance Events</h1>
        <p>Join us for exciting dance sessions and performances</p>
        <p>
          <a href="tel:714-783-2205" className="btn btn-light">Call Us: 714-783-2205</a>
        </p>
      </section>

      {/* Events Section */}
      <section className="events-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Upcoming Events</h2>
          <div className="row">
            {/* Event 1 */}
            <div className="col-md-4">
              <div className="event-card">
                <img src="https://via.placeholder.com/300x200" className="event-card-img" alt="Event Image" />
                <div className="event-card-body">
                  <h5 className="event-card-title">Spring Dance Open House</h5>
                  <p className="event-card-text">Register now for a delightful experience</p>
                  <a href="#" className="btn btn-primary">Register Now</a>
                </div>
              </div>
            </div>
            {/* Event 2 */}
            <div className="col-md-4">
              <div className="event-card">
                <img src="https://via.placeholder.com/300x200" className="event-card-img" alt="Event Image" />
                <div className="event-card-body">
                  <h5 className="event-card-title">Dance Classes Registration</h5>
                  <p className="event-card-text">Meet our instructors and register for classes</p>
                  <a href="#" className="btn btn-primary">Register Now</a>
                </div>
              </div>
            </div>
            {/* Event 3 */}
            <div className="col-md-4">
              <div className="event-card">
                <img src="https://via.placeholder.com/300x200" className="event-card-img" alt="Event Image" />
                <div className="event-card-body">
                  <h5 className="event-card-title">Morris Studio Dance Party</h5>
                  <p className="event-card-text">Join us for an amazing event with fun and energy</p>
                  <a href="#" className="btn btn-primary">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-counters py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h3>150+ Dance Classes</h3>
            </div>
            <div className="col-md-3">
              <h3>49+ Best Instructors</h3>
            </div>
            <div className="col-md-3">
              <h3>17+ Total Events</h3>
            </div>
            <div className="col-md-3">
              <h3>507+ Happy Customers</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Gallery Section */}
      <section className="dance-gallery py-5">
        <div className="container">
          <h2 className="text-center mb-5">Gallery of Our Dance Classes</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Gallery Image" />
            </div>
            <div className="col-md-4">
              <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Gallery Image" />
            </div>
            <div className="col-md-4">
              <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Gallery Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
